import Image from "next/image";
import { journalPosts } from "@/lib/data/home";
import { ButtonLink } from "@/components/ui/Button";

export function Journal() {
  return (
    <section className="sec bg-mist" id="journal">
      <div className="wrap">
        <div className="sec-head split-head">
          <div>
            <span className="eyebrow">The Stride journal</span>
            <h2 className="h-gap">Coaching notes for every mile</h2>
          </div>
          <ButtonLink href="#" variant="line">
            All articles
          </ButtonLink>
        </div>
        <div className="posts">
          {journalPosts.map((post) => (
            <a href="#" className="post" key={post.title}>
              <div className="img">
                <Image src={post.image.src} alt={post.image.alt} width={640} height={480} sizes="(max-width: 760px) 50vw, 25vw" />
              </div>
              <small>{post.category}</small>
              <h4>{post.title}</h4>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
