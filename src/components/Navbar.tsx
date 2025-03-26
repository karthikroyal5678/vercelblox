import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, DollarSign, Heart } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <DollarSign className="h-8 w-8 text-yellow-500" />
              <span className="text-xl font-bold">Blox Fruits Values</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavDropdown title="VALUES" items={[
                { label: 'Common', href: '/values/common' },
                { label: 'Uncommon', href: '/values/uncommon' },
                { label: 'Rare', href: '/values/rare' },
                { label: 'Legendary', href: '/values/legendary' },
                { label: 'Mythical', href: '/values/mythical' },
                { label: 'Gamepass', href: '/values/gamepass' },
                { label: 'Limited', href: '/values/limited' },
              ]} />
              <NavDropdown title="INFORMATION" items={[
                { label: 'Usage Guide', href: '/guide' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Donators', href: '/donators' },
                { label: 'Credits', href: '/credits' },
              ]} />
              <Link to="/calculator" className="hover:bg-gray-700 px-3 py-2 rounded-md">CALCULATOR</Link>
              <Link to="/donate" className="flex items-center space-x-1 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
                <Heart className="h-4 w-4" />
                <span>DONATE</span>
              </Link>
              <Link to="/login" className="bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-400">
                LOGIN
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/values/common" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Common</Link>
            <Link to="/values/uncommon" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Uncommon</Link>
            <Link to="/values/rare" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Rare</Link>
            <Link to="/values/legendary" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Legendary</Link>
            <Link to="/values/mythical" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Mythical</Link>
            <Link to="/values/gamepass" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Gamepass</Link>
            <Link to="/values/limited" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Limited</Link>
            <Link to="/guide" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Usage Guide</Link>
            <Link to="/faq" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">FAQ</Link>
            <Link to="/calculator" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Calculator</Link>
            <Link to="/donate" className="block px-3 py-2 rounded-md text-base font-medium bg-red-500 text-white hover:bg-red-600">Donate</Link>
            <Link to="/login" className="block px-3 py-2 rounded-md text-base font-medium bg-yellow-500 text-black hover:bg-yellow-400">Login</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavDropdown({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="hover:bg-gray-700 px-3 py-2 rounded-md">
        {title}
      </button>
      {isOpen && (
        <div className="absolute z-10 left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {items.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}