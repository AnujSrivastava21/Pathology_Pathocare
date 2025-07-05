import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <motion.footer 
      className="bg-gray-900 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container section-padding">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-3xl font-bold text-blue-400 mb-4 font-cursive">JAS Diagnosis</h3>
            <p className="text-gray-300 leading-relaxed font-modern">
              Providing accurate diagnostic services with cutting-edge technology and compassionate care for over 25 years.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 font-display">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors font-modern">Home</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-blue-400 transition-colors font-modern">Services</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors font-modern">About</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors font-modern">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 font-display">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors font-modern">Blood Tests</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors font-modern">Biopsy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors font-modern">Cytology</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors font-modern">Molecular Testing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 font-display">Contact Info</h4>
            <div className="space-y-2 text-gray-300 font-medical">
              <p>JAS Diagnosis </p>
              <p>Near Pandeypur Crossing</p>
              <p>Varanasi, Uttar Pradesh 221002</p>
              <p>Phone: +91 7052145589</p>
              <p>WhatsApp: +91 7052145589</p>
              <p>Email: info@jaspathology.com</p>
              <p>Emergency: +91 8002145589</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 text-center">
          <p className="text-gray-400 font-modern">
            © 2025 JAS Diagnosis. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
