export default function Card({ destination }) {

  const { name, country, continent, description, image } = destination
  return (
    <article className="flex flex-col items-center gap-4 
                        border-2 border-[#f5cac3] shadow-sm shadow-red-700 rounded-sm 
                        bg-[#f28482]">
      <img src={image} alt={name} className="w-full aspect-[1.3/1] object-cover" />
      <div className="flex flex-col gap-4 items-center p-4">
        <h2 className="font-semibold text-2xl">{name}</h2>
        <p className=" text-lg"><span className="font-medium">Country:</span> {country}</p>
        <p className=" text-lg"><span className="font-medium">Continent:</span> {continent}</p>
        <p className=" text-lg"><span className="font-medium">Description:</span> {description}</p>
      </div>
    </article>
  )
}