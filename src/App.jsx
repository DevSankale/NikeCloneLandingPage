
import './App.css'
import Hero from './sections/Hero'
import PopularProducts from './sections/PopularProducts'
import SuperQuality from './sections/SuperQuality'
import Services from './sections/Services'
import SpecialOffer from './sections/SpecialOffer'
import CustomerReviews from './sections/CustomerReviews'
import Subscribe from './sections/Subscribe'
import Footer from './sections/Footer'
import Nav from './Components/Nav'



function App() {
  

  return (
    <main className='relative'>
         <Nav/>
      <section className='xl:padding-l'>
        <Hero/>
      </section>
      <section className='padding'>
          <PopularProducts/>
      </section>
      <section className='padding'>
          <SuperQuality/>
      </section>
      <section className='padding'>
          <Services/>
      </section>
      <section className='padding'>
          <SpecialOffer/>
      </section>
      <section className='padding'>
          <CustomerReviews/>
      </section>
      <section className='padding'>
          <Subscribe/>
      </section>
      <section className='padding'>
          <Footer/>
      </section>
    </main>
  )
}

export default App
