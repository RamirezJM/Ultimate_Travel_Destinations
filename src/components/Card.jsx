export default function Card({ destination }) {

  const { name, country, continent, description, image } = destination
  return (
    <article className="flex flex-col items-start gap-4 
                        border-2 border-[#f5cac3] shadow-sm shadow-red-700 rounded-sm">
      <img src={image} alt={name} className="w-full aspect-[1.3/1] object-cover" />
      <div className="flex flex-col gap-2 items-start justify-between p-4 h-full">
        <h2 className="font-semibold text-2xl text-center self-center w-full mb-4" >{name}</h2>
        <p className=" text-lg mt-auto"><span className="font-medium">Country:</span> {country}</p>
        <p className=" text-lg"><span className="font-medium">Continent:</span> {continent}</p>
        <p className=" text-lg"><span className="font-medium">Description:</span> {description}</p>
      </div>
    </article>
  )
}