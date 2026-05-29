const features = [
  { icon: 'truck', title: 'Fri fragt til pakkeshop', subtitle: 'Alle ordrer over 599 kr' },
  { icon: 'phone', title: 'Kundeservice 8-17', subtitle: '+45 70 20 10 10' },
  { icon: 'pizza', title: 'Stort udvalg', subtitle: 'Raavarer og gear' },
]

export default function FeaturesSection() {
  return (
    <section className="features-strip">
      {features.map((f) => (
        <div key={f.title} className="features-strip__item">
          <span className="features-strip__icon" aria-hidden="true">
            {f.icon === 'truck' ? '🚚' : f.icon === 'phone' ? '📞' : '🍕'}
          </span>
          <div>
            <p className="features-strip__title">{f.title}</p>
            <p className="features-strip__subtitle">{f.subtitle}</p>
          </div>
        </div>
      ))}
    </section>
  )
}
