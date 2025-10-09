export interface Subscriber {
  email: string;
  source: string;
}

export interface NewsletterService {
  subscribe(subscriber: Subscriber): Promise<{ status: "subscribed" | "already_subscribed" }>;
}

/** Posts to the configured email provider. */
class HttpNewsletterService implements NewsletterService {
  constructor(
    private readonly endpoint: string,
    private readonly apiKey: string,
  ) {}

  async subscribe({ email, source }: Subscriber) {
    const res = await fetch(this.endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${this.apiKey}` },
      body: JSON.stringify({ email, tags: ["friday-tips", source] }),
    });
    if (res.status === 409) return { status: "already_subscribed" as const };
    if (!res.ok) throw new Error(`Newsletter provider responded ${res.status}`);
    return { status: "subscribed" as const };
  }
}

/** Development fallback: keeps sign-ups in memory and logs them. */
class ConsoleNewsletterService implements NewsletterService {
  private readonly seen = new Set<string>();

  async subscribe({ email, source }: Subscriber) {
    const key = email.toLowerCase();
    if (this.seen.has(key)) return { status: "already_subscribed" as const };
    this.seen.add(key);
    console.info(`[newsletter] ${key} subscribed via ${source}`);
    return { status: "subscribed" as const };
  }
}

let service: NewsletterService | undefined;

export function getNewsletterService(): NewsletterService {
  if (service) return service;
  const { NEWSLETTER_API_URL, NEWSLETTER_API_KEY } = process.env;
  service =
    NEWSLETTER_API_URL && NEWSLETTER_API_KEY
      ? new HttpNewsletterService(NEWSLETTER_API_URL, NEWSLETTER_API_KEY)
      : new ConsoleNewsletterService();
  return service;
}
