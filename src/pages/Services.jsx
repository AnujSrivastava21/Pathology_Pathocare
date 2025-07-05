import { motion } from 'framer-motion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BookingModal from '../components/ui/BookingModal'
import { 
  Droplets, 
  Heart, 
  Activity, 
  Brain, 
  TestTube, 
  Microscope,
  Shield,
  Clock,
  Star,
  Zap
} from 'lucide-react'

const Services = () => {
  const navigate = useNavigate()
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [selectedTest, setSelectedTest] = useState('')
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

  const services = [
    {
      icon: Heart,
      title: "Blood Pressure Check",
      description: "Comprehensive blood pressure monitoring with detailed analysis and recommendations.",
      price: "₹150",
      duration: "15 min",
      features: ["Digital monitoring", "Detailed report", "Doctor consultation"],
      category: "Cardiac"
    },
    {
      icon: Droplets,
      title: "Urine Analysis",
      description: "Complete urine examination to detect various health conditions and infections.",
      price: "₹200",
      duration: "30 min",
      features: ["Microscopic analysis", "Chemical testing", "Culture if needed"],
      category: "General"
    },
    {
      icon: Activity,
      title: "Blood Sugar Test",
      description: "Fasting and post-meal glucose testing for diabetes screening and monitoring.",
      price: "₹180",
      duration: "20 min",
      features: ["Fasting required", "Accurate results", "Trend analysis"],
      category: "Diabetes"
    },
    {
      icon: Brain,
      title: "Thyroid Function Test",
      description: "Comprehensive thyroid hormone analysis including T3, T4, and TSH levels.",
      price: "₹350",
      duration: "25 min",
      features: ["TSH, T3, T4", "Detailed report", "Expert interpretation"],
      category: "Endocrine"
    },
    {
      icon: TestTube,
      title: "Complete Blood Count",
      description: "Full blood cell analysis including RBC, WBC, platelets, and hemoglobin.",
      price: "₹250",
      duration: "30 min",
      features: ["22 parameters", "Same day results", "Digital report"],
      category: "Hematology"
    },
    {
      icon: Microscope,
      title: "Lipid Profile",
      description: "Complete cholesterol and triglyceride analysis for heart health assessment.",
      price: "₹400",
      duration: "25 min",
      features: ["Total cholesterol", "HDL/LDL", "Triglycerides"],
      category: "Cardiac"
    },
    {
      icon: Shield,
      title: "Liver Function Test",
      description: "Comprehensive liver enzyme and protein analysis for liver health evaluation.",
      price: "₹450",
      duration: "30 min",
      features: ["Liver enzymes", "Bilirubin", "Proteins"],
      category: "Hepatology"
    },
    {
      icon: Zap,
      title: "Kidney Function Test",
      description: "Creatinine, BUN, and electrolyte analysis for kidney health assessment.",
      price: "₹350",
      duration: "25 min",
      features: ["Creatinine", "BUN", "Electrolytes"],
      category: "Nephrology"
    }
  ]



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
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed font-modern">
              Comprehensive pathology and diagnostic services for all your healthcare needs
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Overview */}
      <motion.section 
        className="section-padding bg-gradient-to-r from-white to-blue-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-display">
              Diagnostic Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-modern">
              We offer a wide range of pathology tests with state-of-the-art equipment and expert analysis. 
              All tests are performed by certified technicians and reviewed by experienced pathologists.
            </p>
          </motion.div>

          {/* Service Cards Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="card group hover:shadow-2xl transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                {/* Service Icon */}
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${
                  index === 0 ? 'bg-gradient-to-br from-red-400 to-red-600' :
                  index === 1 ? 'bg-gradient-to-br from-blue-400 to-blue-600' :
                  index === 2 ? 'bg-gradient-to-br from-green-400 to-green-600' :
                  index === 3 ? 'bg-gradient-to-br from-purple-400 to-purple-600' :
                  index === 4 ? 'bg-gradient-to-br from-orange-400 to-orange-600' :
                  index === 5 ? 'bg-gradient-to-br from-pink-400 to-pink-600' :
                  index === 6 ? 'bg-gradient-to-br from-indigo-400 to-indigo-600' :
                  'bg-gradient-to-br from-teal-400 to-teal-600'
                }`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Category Badge */}
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 font-modern ${
                  index === 0 ? 'bg-red-100 text-red-700' :
                  index === 1 ? 'bg-blue-100 text-blue-700' :
                  index === 2 ? 'bg-green-100 text-green-700' :
                  index === 3 ? 'bg-purple-100 text-purple-700' :
                  index === 4 ? 'bg-orange-100 text-orange-700' :
                  index === 5 ? 'bg-pink-100 text-pink-700' :
                  index === 6 ? 'bg-indigo-100 text-indigo-700' :
                  'bg-teal-100 text-teal-700'
                }`}>
                  {service.category}
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-gray-600 leading-relaxed mb-6 font-medical">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600 font-medical">
                      <Star className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Price and Duration */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center text-gray-600 font-modern">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="text-sm">{service.duration}</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-600 font-display">
                    {service.price}
                  </div>
                </div>

                {/* Book Button */}
                <motion.button
                  onClick={() => {
                    setSelectedTest(service.title)
                    setIsBookingModalOpen(true)
                  }}
                  className="w-full btn-primary"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book Now
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section 
        className="section-padding bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-display">
              Why Choose Our Lab?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-modern">
              We provide accurate, reliable, and timely diagnostic services with the highest standards of quality and care.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Microscope className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Advanced Technology</h3>
              <p className="text-gray-600 font-medical">
                State-of-the-art equipment and latest diagnostic techniques for accurate results.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-green-400 to-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Quality Assured</h3>
              <p className="text-gray-600 font-medical">
                Rigorous quality control measures and certified technicians ensure reliable results.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-gradient-to-br from-purple-400 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Quick Results</h3>
              <p className="text-gray-600 font-medical">
                Most results available within 24 hours with digital reports for easy access.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="section-padding bg-gradient-to-r from-blue-600 to-indigo-700 text-white"
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
            <h2 className="text-4xl font-bold mb-6 font-display">
              Ready to Book Your Test?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto font-modern">
              Schedule your appointment today and get accurate diagnostic results with our expert team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => setIsBookingModalOpen(true)}
                className="btn-primary bg-white text-blue-600 hover:bg-blue-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Appointment
              </motion.button>
              <motion.button
                onClick={() => navigate('/contact')}
                className="btn-secondary bg-transparent text-white border-white hover:bg-white hover:text-blue-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        testName={selectedTest}
      />
    </div>
  )
}

export default Services
