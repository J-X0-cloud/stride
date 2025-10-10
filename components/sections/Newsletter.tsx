import { NewsletterForm } from "./NewsletterForm";

export function Newsletter() {
  return (
    <section className="bg-mist news-sec">
      <div className="wrap">
        <div className="news">
          <div>
            <h2>Get one great running tip every Friday.</h2>
            <p>Workouts, fueling and race strategy from our coaches. Unsubscribe anytime.</p>
          </div>
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
}
