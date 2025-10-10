"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "done" | "error";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "home-friday-tips" }),
      });
      setStatus(res.ok ? "done" : "error");
      if (res.ok) setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="email"
        required
        placeholder="you@example.com"
        aria-label="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="btn btn-volt" type="submit" disabled={status === "submitting"}>
        Subscribe
      </button>
      <p className="news-status" role="status">
        {status === "done" && "You’re in. First tip lands Friday."}
        {status === "error" && "That didn’t go through. Check the address and try again."}
      </p>
    </form>
  );
}
