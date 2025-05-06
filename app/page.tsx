import Footer from './components/Footer'
import ContactForm from './components/ContactForm'
import TabalePrice from './components/TabalePrice'
import Services from './components/Services'
import HeroSection from './components/HeroSection'
import ComparisonPrice from './components/ComparisonPrice'


export default function Home() {
  return (
    <main className="rtl font-sans">
     

      
      
      <HeroSection/>
      <Services/>
      <TabalePrice/>
      <ComparisonPrice/>
      <ContactForm/>
      
      <Footer/>

      
    </main>
  )
}
