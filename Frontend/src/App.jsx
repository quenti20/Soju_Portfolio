import {
  Navbar,
  Sidebar,
  Footer,
  Hero,
  About,
  Works,
  Services,
  Contact
} from './components';

function App() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0f] noise-overlay">
      {/* Navigation */}
      <Navbar />
      
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <main className="relative">
        <Hero />
        <About />
        <Works />
        <Services />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
