
import Card from './components/Card'
import Header from './components/Header'
import destinations from './assets/data/data.json'
import Footer from './components/Footer'

function App() {


  return (
    <>
     <Header/>
     <main className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8
                      p-4 
                      bg-[#f7edd2] 
                      lg:p-12'>
      {destinations.map(destination => (
         <Card key={destination.id} destination ={destination}/>
      ))}
     </main>
     <Footer/>
    </>
  )
}

export default App
