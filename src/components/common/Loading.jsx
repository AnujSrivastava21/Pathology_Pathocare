import { motion } from 'framer-motion'

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
          <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin mx-auto mb-4 absolute top-0 left-0" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-16 h-16 border-4 border-pink-200 border-t-pink-600 rounded-full animate-spin mx-auto mb-4 absolute top-0 left-0" style={{ animationDelay: '0.2s' }}></div>
        </div>
        <h2 className="text-2xl font-bold text-gray-700 mb-2 font-display">Loading...</h2>
        <p className="text-gray-500 font-modern">Please wait while we prepare your experience</p>
      </motion.div>
    </div>
  )
}

export default Loading
