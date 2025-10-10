import Image from "next/image";
import { mosaic } from "@/lib/data/home";

function Photo({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure>
      <Image src={src} alt={alt} fill sizes="(max-width: 760px) 50vw, 33vw" />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export function Mosaic() {
  const [golden, track, hills] = mosaic.photos;
  const [longGame, everyRun] = mosaic.stats;
  return (
    <section className="sec-sm">
      <div className="wrap">
        <div className="mosaic">
          {golden ? <Photo {...golden} /> : null}
          {track ? <Photo {...track} /> : null}
          {longGame ? (
            <figure className="stat">
              <b>{longGame.title}</b>
              <span>{longGame.body}</span>
            </figure>
          ) : null}
          {everyRun ? (
            <figure className="stat v">
              <b>{everyRun.title}</b>
              <span>{everyRun.body}</span>
            </figure>
          ) : null}
          {hills ? <Photo {...hills} /> : null}
        </div>
      </div>
    </section>
  );
}
