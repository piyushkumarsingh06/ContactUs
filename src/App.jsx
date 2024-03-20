
import ContactForm from './components/ContactForm/ContactForm'
import ContactHeader from './components/ContactHeader/ContactHeader'
import Navigation from './components/Navigation'

//import './App.css'

function App() {
  

  return <div>
    <Navigation></Navigation>
   <main className='main_container'>
   <ContactHeader></ContactHeader>
    <ContactForm></ContactForm>
   </main>
  </div>
    
  
}

export default App
