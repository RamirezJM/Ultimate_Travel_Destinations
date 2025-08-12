export default function Card({destination}){

  const {name, country, continent, description, image} = destination
  return(
    <article>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{country}</p>
      <p>{continent}</p>
      <p>{description}</p>
    </article>
  )
}