const features = [
  'Imported raw materials',
  'Tools for home ovens and steel',
  'Checkout ready for Firebase orders',
]

export default function FeaturesSection() {
  return (
    <section className="features-section">
      {features.map((feature) => (
        <article key={feature}>
          <h2>{feature}</h2>
          <p>Placeholder text for the feature block.</p>
        </article>
      ))}
    </section>
  )
}