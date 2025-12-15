import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a1628]/95 backdrop-blur-sm border-b border-cyan-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-8">
            <img
              src="/arm_mastery_club.png"
              alt="Arm Mastery Club"
              className="h-12 w-auto"
            />

            <div className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-cyan-400 transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('campuses')} className="text-gray-300 hover:text-cyan-400 transition-colors">
                Campuses
              </button>
              <button onClick={() => scrollToSection('wins')} className="text-gray-300 hover:text-cyan-400 transition-colors">
                Students Wins
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-gray-300 hover:text-cyan-400 transition-colors">
                FAQ
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-cyan-400 transition-colors">
                About Mr. Alpha
              </button>
            </div>
          </div>

          <div className="hidden md:block">
            <a
              href="https://whop.com/arm-mastery-club/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-bold hover:from-cyan-400 hover:to-blue-400 transition-all shadow-lg shadow-cyan-500/50 hover:shadow-cyan-400/60"
            >
              Join Now
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0a1628] border-t border-cyan-900/30">
          <div className="px-4 py-4 space-y-3">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left text-gray-300 hover:text-cyan-400 py-2">
              Home
            </button>
            <button onClick={() => scrollToSection('campuses')} className="block w-full text-left text-gray-300 hover:text-cyan-400 py-2">
              Campuses
            </button>
            <button onClick={() => scrollToSection('wins')} className="block w-full text-left text-gray-300 hover:text-cyan-400 py-2">
              Students Wins
            </button>
            <button onClick={() => scrollToSection('faq')} className="block w-full text-left text-gray-300 hover:text-cyan-400 py-2">
              FAQ
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-300 hover:text-cyan-400 py-2">
              About Mr. Alpha
            </button>
            <a
              href="https://whop.com/arm-mastery-club/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-bold"
            >
              Join Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
