import logo from '../assets/travel.png'

export default function Header() {
  return (
    <header className='flex justify-center items-center gap-8 
                       px-4 py-8 
                       bg-gradient-to-r from-fuchsia-500 to-pink-300 
                       border-b-2 border-red-700'>
      <img src={logo} alt="plane icon" className='w-16 ' />
      <h1 className='font-serif text-3xl font-bold text-stone-800'>Ultimate Travel Destinations</h1>
    </header>
  )
}
