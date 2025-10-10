import { compareRows } from "@/lib/data/pricing";
import { SectionHead } from "@/components/ui/SectionHead";

function Mark({ included }: { included: boolean }) {
  return included ? <span className="yes" aria-label="Included" /> : <span className="no" aria-label="Not included" />;
}

export function CompareTable() {
  return (
    <section className="sec">
      <div className="wrap">
        <SectionHead centered eyebrow="Compare" title="What’s included" />
        <div className="tablewrap">
          <table className="compare">
            <thead>
              <tr>
                <th scope="col">Feature</th>
                <th scope="col">Monthly</th>
                <th scope="col">Annual</th>
                <th scope="col">Clubs</th>
              </tr>
            </thead>
            <tbody>
              {compareRows.map((row) => (
                <tr key={row.feature}>
                  <td>{row.feature}</td>
                  <td>
                    <Mark included={row.monthly} />
                  </td>
                  <td>
                    <Mark included={row.annual} />
                  </td>
                  <td>
                    <Mark included={row.clubs} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
