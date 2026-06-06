import Navbar      from './components/Navbar'
import Hero        from './components/Hero'
import About       from './components/About'
import Events      from './components/Events'
import Gallery     from './components/Gallery'
import Store       from './components/Store'
import Members     from './components/Members'
import Footer      from './components/Footer'
import WhatsAppFAB from './components/WhatsAppFAB'
import './index.css'

export default function App() {
  return (
    <div className="bg-brand-bg min-h-screen">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Events />
        <Gallery />
        <Store />
        <Members />
      </main>

      <Footer />
      <WhatsAppFAB />
    </div>
  )
}
