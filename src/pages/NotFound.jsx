import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <motion.div 
        className="text-center max-w-2xl mx-auto px-4"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-6xl md:text-8xl font-bold text-blue-600 mb-6 font-display">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
          Page Not Found
        </h2>
        <p className="text-xl text-gray-600 mb-8 font-modern">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <motion.button
          as={Link}
          to="/"
          className="btn-primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Go Back Home
        </motion.button>
      </motion.div>
    </div>
  )
}

export default NotFound
