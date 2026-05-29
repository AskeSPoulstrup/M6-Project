import './AboutPage.css'
import SectionTitle from '../components/common/SectionTitle'

export default function AboutPage() {
  return (
    <section className="about-page">
      <SectionTitle title="Om os" subtitle="Vi brænder for god pizza, gode råvarer og godt udstyr." />
      <p>
        Vi er Aske, Mikkel og Kåre – tre venner der deler en fælles passion for pizza.
        Det handler ikke kun om den perfekte skorpe eller den varme ost, men om
        kvaliteten af råvarerne og det rigtige udstyr til at lave dem på den bedste måde.
      </p>

      <div className="about-team">
        <article>
          <h3>Aske</h3>
          <p>
            Aske elsker pizzaens sjæl. Han går op i at finde de bedste tomater,
            de fineste oste og de mest smagfulde ingredienser, så hver pizza får
            ekstra karakter.
          </p>
        </article>

        <article>
          <h3>Mikkel</h3>
          <p>
            Mikkel er udstyrs- og tekniknørden. Han ved, at det rigtige ovnvalg,
            de skarpe redskaber og gode bagegrej gør en kæmpe forskel for resultatet.
          </p>
        </article>

        <article>
          <h3>Kåre</h3>
          <p>
            Kåre står for passionen og detaljerne. Han sørger for, at hver opskrift
            er gennemprøvet, og at kunden får en pizzaoplevelse der er både enkel og
            udsøgt.
          </p>
        </article>
      </div>

      <p>
        Sammen skaber vi et sted hvor pizzaentusiaster kan finde både gode råvarer,
        solidt udstyr og inspiration til den næste perfekte bagning.
      </p>
    </section>
  )
}
