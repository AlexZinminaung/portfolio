import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Project from './components/Project';
import Skill from './components/Skill';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {

  return (
    <main className='bg-black min-h-screen'>

      {/* navbar */}
      <Navbar/>
      {/* Hero */}
      <Hero/>
      {/* Projects */}
      <Project/>
      {/* Skills */}
      <Skill/>
      {/* Contact */}
      <Contact/>
      {/* Footer */}
      <Footer/>
    </main>
  )
}

export default App
