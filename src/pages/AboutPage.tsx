import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <section className="content-page">
      <div className="catalog-hero">
        <p className="eyebrow">Om os</p>
        <h1>Vi er pizzanoerder - ligesom dig.</h1>
        <p>
          Slice-Management blev startet af en flok pizzaentusiaster, der var traette af at
          kompromittere med raavarerene. Vi ville have det bedste mel, de rigtige tomater og
          professionelt udstyr - uden at skulle flytte til Napoli.
        </p>
      </div>

      <div className="about-body">
        <div className="about-section">
          <h2>Historien bag</h2>
          <p>
            Det startede med en pizzaovn i haven og et spoergsmaal: hvorfor er det saa svart
            at finde ordentlige ingredienser i Danmark? Caputo 00-mel fra det lokale supermarked
            er ikke det samme som det aegte vare. San Marzano DOP kan man ikke finde overalt.
            En ordentlig pizzaspade i aluminium - glem det.
          </p>
          <p>
            Vi tog sagen i egne haender og begyndte at importere direkte fra Italien.
            I dag leverer vi raavarer og udstyr til pizzanoerder over hele landet.
          </p>
        </div>

        <div className="about-section">
          <h2>Vores filosofi</h2>
          <p>
            God pizza kraever gode raavarer. Det er simpelt nok. Vi sorterer markedet for dig
            og soerger for, at alt hvad du koeber hos os lever op til den standard du forventer
            som serioes pizzabager.
          </p>
        </div>

        <div className="about-section">
          <h2>Maalgrupppen</h2>
          <p>
            Du er ikke her for en frossen pizza. Du er her fordi du tager pizzabagning seriost:
            kolde haevninger over 48 timer, Biga-fordejen, 430 grader i pizzaovnen, den perfekte
            leoparding paa bunden.
          </p>
          <p>Slice-Management er bygget til dig.</p>
        </div>
      </div>

      <Link to="/products" className="btn btn--primary about-cta">Se vores produkter</Link>
    </section>
  )
}
