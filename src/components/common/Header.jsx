import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
    { path: '/reports', label: 'Reports' }
  ]

  return (
    <motion.header 
      className="bg-white shadow-lg sticky top-0 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-blue-600 font-display">
            JAS Diagnosis
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors font-modern ${
                  location.pathname === item.path
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <motion.button
            className="btn-primary md:hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Menu
          </motion.button>
        </div>
      </div>
    </motion.header>
  )
}

export default Header
