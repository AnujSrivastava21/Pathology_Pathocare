import { motion } from 'framer-motion'

const Reports = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <motion.section 
        className="section-padding bg-gradient-to-r from-blue-600 to-indigo-700 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">
              Test Reports
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed font-modern">
              Access your pathology test reports securely and conveniently
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default Reports
