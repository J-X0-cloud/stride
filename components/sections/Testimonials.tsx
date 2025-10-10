import { testimonials } from "@/lib/data/home";
import { SectionHead } from "@/components/ui/SectionHead";

export function Testimonials() {
  return (
    <section className="sec dark">
      <div className="wrap">
        <SectionHead centered eyebrow="From the start line" title="Runners who stuck with it" />
        <div className="quotes">
          {testimonials.map((t) => (
            <figure className="quote" key={t.name}>
              <div className="stars" aria-label="Five stars">
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </div>
              <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
              <footer>
                <span
                  className="av"
                  style={t.gradient ? { background: `linear-gradient(135deg,${t.gradient[0]},${t.gradient[1]})` } : undefined}
                >
                  {t.initials}
                </span>
                <div>
                  <b>{t.name}</b>
                  <small>{t.context}</small>
                </div>
              </footer>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
