export default function SectionTitle({ badge, title, description, center = false }) {
  return (
    <div className={`section-title ${center ? 'section-title-center' : ''}`}>
      {badge ? <div className="section-badge">{badge}</div> : null}
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  )
}
