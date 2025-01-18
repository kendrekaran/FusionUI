import React, { useState, useEffect } from 'react';
import { Sun, Moon, BarChart3, Shield, Wallet } from 'lucide-react';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check system preference on mount
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`min-h-screen transition-colors duration-200 ${isDark ? 'bg-zinc-900' : 'bg-white'}`}>
      {/* Navigation */}
      <nav className={`px-6 py-4 ${isDark ? 'bg-zinc-800/50' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <BarChart3 className="w-6 h-6 text-blue-500" />
            <span className={`font-bold text-xl ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Spectrum
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#" active>About</NavLink>
            <NavLink href="#">Features</NavLink>
            <NavLink href="#">Pricing</NavLink>
            <NavLink href="#">Gallery</NavLink>
            <NavLink href="#">Team</NavLink>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${isDark ? 'bg-zinc-700 text-zinc-300 hover:bg-zinc-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button className={`px-4 py-2 rounded-lg ${isDark ? 'text-zinc-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>
              Sign In
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              Register
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDark ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4" />
                  <span>PROTECT YOUR DATA</span>
                </div>
              </div>
            </div>

            <h1 className={`text-5xl md:text-6xl font-bold leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Secure
              <br />
              Communication
            </h1>

            <p className={`text-xl ${isDark ? 'text-zinc-400' : 'text-gray-600'}`}>
              Protect your sensitive information with enterprise-grade encryption and secure communication channels. Your data safety is our top priority.
            </p>

            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-105">
              Contact Us
            </button>
          </div>

          <div className="relative">
            <div className={`absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-10 blur-2xl ${isDark ? 'opacity-20' : 'opacity-10'}`} />
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000"
                alt="Security Illustration"
                className="w-full rounded-3xl shadow-2xl"
              />
              <div className={`absolute -bottom-6 -right-6 p-6 rounded-2xl ${isDark ? 'bg-zinc-800' : 'bg-white'} shadow-xl`}>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-green-500/10 rounded-xl">
                    <Wallet className="w-8 h-8 text-green-500" />
                  </div>
                  <div>
                    <p className={`text-sm ${isDark ? 'text-zinc-400' : 'text-gray-600'}`}>Protected Amount</p>
                    <p className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>$2.4M</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavLink({ href, children, active = false }: { href: string; children: React.ReactNode; active?: boolean }) {
  return (
    <a
      href={href}
      className={`text-sm font-medium transition-colors hover:text-blue-500 ${
        active ? 'text-blue-500' : 'text-gray-600 dark:text-gray-300'
      }`}
    >
      {children}
    </a>
  );
}

export default App;