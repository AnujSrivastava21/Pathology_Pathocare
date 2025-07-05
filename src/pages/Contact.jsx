import { motion } from 'framer-motion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle,
  MessageSquare,
  User,
  FileText
} from 'lucide-react'

const Contact = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: "JAS Diagnosis, Near Pandeypur Crossing, Varanasi, Uttar Pradesh 221002",
      action: "Get Directions"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 7052145589",
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@jaspathology.com",
      action: "Send Email"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Sat: 7:00 AM - 8:00 PM, Sun: 8:00 AM - 2:00 PM",
      action: "View Schedule"
    }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <motion.section 
        className="section-padding bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-700/20"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="container relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed font-modern">
              We're here to help. Contact us for any questions about our services or to schedule an appointment.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Information */}
      <motion.section 
        className="section-padding bg-gradient-to-r from-white to-blue-50"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-display">
              Contact Information
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-modern">
              Reach out to us through any of these channels. We're here to assist you with all your pathology needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="card text-center hover:shadow-xl transition-all duration-300 group bg-white/80 backdrop-blur-sm"
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 ${
                  index === 0 ? 'bg-gradient-to-br from-blue-400 to-blue-600' :
                  index === 1 ? 'bg-gradient-to-br from-green-400 to-green-600' :
                  index === 2 ? 'bg-gradient-to-br from-purple-400 to-purple-600' :
                  'bg-gradient-to-br from-orange-400 to-orange-600'
                }`}>
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-display group-hover:text-blue-600 transition-colors">{info.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed font-medical">{info.details}</p>
                <motion.button
                  className={`font-medium transition-colors ${
                    index === 0 ? 'text-blue-600 hover:text-blue-700' :
                    index === 1 ? 'text-green-600 hover:text-green-700' :
                    index === 2 ? 'text-purple-600 hover:text-purple-700' :
                    'text-orange-600 hover:text-orange-700'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {info.action}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Form and Map Section */}
      <motion.section 
        className="section-padding bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-display">
                Send Us a Message
              </h2>
              <p className="text-lg text-gray-600 mb-8 font-modern">
                Have questions about our services? Need to schedule an appointment? 
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              {isSubmitted ? (
                <motion.div
                  className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-green-800 mb-2 font-display">Message Sent!</h3>
                  <p className="text-green-700 font-modern">Thank you for contacting us. We'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-blue-600 mb-2">
                        <User className="w-4 h-4 inline mr-2" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm rounded-lg border-2 border-blue-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-200 shadow-sm"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-blue-600 mb-2">
                        <Mail className="w-4 h-4 inline mr-2" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm rounded-lg border-2 border-blue-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-200 shadow-sm"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-blue-600 mb-2">
                        <Phone className="w-4 h-4 inline mr-2" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm rounded-lg border-2 border-blue-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-200 shadow-sm"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-blue-600 mb-2">
                        <FileText className="w-4 h-4 inline mr-2" />
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm rounded-lg border-2 border-blue-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-200 shadow-sm"
                        placeholder="What is this about?"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-blue-600 mb-2">
                      <MessageSquare className="w-4 h-4 inline mr-2" />
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm rounded-lg border-2 border-blue-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-200 resize-none shadow-sm"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Map and Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Interactive Map</p>
                  <p className="text-sm text-gray-500">JAS Diagnosis, Near Pandeypur Crossing, Varanasi</p>
                </div>
              </div>

              {/* Additional Information */}
              <div className="card">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">
                  Before You Visit
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-gradient-to-br from-blue-400 to-blue-600 w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-1 shadow-md">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 font-modern">Bring Required Documents</h4>
                      <p className="text-gray-600 text-sm font-medical">Photo ID, insurance card, and any referral forms</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-gradient-to-br from-green-400 to-green-600 w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-1 shadow-md">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 font-modern">Fasting Requirements</h4>
                      <p className="text-gray-600 text-sm font-medical">Some tests require fasting for 8-12 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-gradient-to-br from-purple-400 to-purple-600 w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-1 shadow-md">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 font-modern">Appointment Scheduling</h4>
                      <p className="text-gray-600 text-sm font-medical">Call ahead or book online for faster service</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-300 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold text-red-800 mb-2 font-display">Emergency Contact</h3>
                <p className="text-red-700 mb-3 font-modern">
                  For medical emergencies, please call 911 or visit the nearest emergency room.
                </p>
                <p className="text-sm text-red-600 font-medical">
                  Our lab is not equipped to handle emergency situations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Preview Section */}
      <motion.section 
        className="section-padding bg-gradient-to-br from-white via-blue-50 to-indigo-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container text-center">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-display">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto font-modern">
              Find quick answers to common questions about our services, appointments, and procedures.
            </p>
            <motion.button
              onClick={() => navigate('/faq')}
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All FAQs
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default Contact
