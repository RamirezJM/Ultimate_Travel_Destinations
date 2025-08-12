
import './App.css'
import Card from './components/Card'
import Header from './components/Header'
import destinations from './assets/data/data.json'

function App() {


  return (
    <>
     <Header/>
     <main>
      {destinations.map(destination => (
         <Card key={destination.id} destination ={destination}/>
      ))}
     
     </main>
    </>
  )
}

export default App
