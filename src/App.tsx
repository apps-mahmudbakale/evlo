import { useState } from 'react';
import { Menu, X, Phone, Mail, Clock, MapPin, Search, Cross } from 'lucide-react';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';

import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="bg-primary-600 text-white py-2">
          <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Mon-Fri: 9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+234 704 868 0000</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>info@pharmacy.com</span>
            </div>
          </div>
        </div>

        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">

            <div className="flex items-center gap-2">
              <div className="bg-primary-600 p-2 rounded-lg">
                <Cross className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900 tracking-tight">Pharmacy</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                About
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                Contact
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Search className="w-5 h-5 text-gray-700" />
              </button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t">
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-left text-gray-700 hover:text-primary-600 font-medium"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('products')}
                  className="text-left text-gray-700 hover:text-primary-600 font-medium"
                >
                  Products
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-left text-gray-700 hover:text-primary-600 font-medium"
                >
                  About
                </button>

                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-left text-gray-700 hover:text-primary-600 font-medium"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main className="pt-32">
        <section id="home">
          <Hero />
        </section>
        <section id="products">
          <Products />
        </section>
        <section id="about">
          <About />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
