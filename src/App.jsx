
import Card from './components/Card'
import Header from './components/Header'
import destinations from './assets/data/data.json'
import Footer from './components/Footer'

function App() {


  return (
    <>
     <Header/>
     <main className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-18
                      p-12 
                      bg-[#f7edd2] 
                      lg:p-12'>
                        <h2 className='col-span-full mx-auto text-2xl font-bold text-stone-800'>Our destinations</h2>
      {destinations.map(destination => (
         <Card key={destination.id} destination ={destination}/>
      ))}
     </main>
     <Footer/>
    </>
  )
}

export default App
