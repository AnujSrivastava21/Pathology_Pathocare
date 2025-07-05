import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  Shield, 
  Award, 
  Users, 
  Clock, 
  Star,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import BookingModal from '../components/ui/BookingModal'

const Home = () => {
  const navigate = useNavigate()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  const slides = [
    {
      icon: Shield,
      title: "100% Accuracy Guaranteed",
      subtitle: "Trust & Reliability",
      description: "Our state-of-the-art equipment and expert pathologists ensure 99.9% accuracy in all diagnostic tests. Your health is our priority.",
      features: ["ISO Certified", "Quality Assured", "Expert Review"]
    },
    {
      icon: Award,
      title: "Best Pathology Lab in the Area",
      subtitle: "Excellence & Recognition",
      description: "Voted the #1 pathology laboratory in the region for 5 consecutive years. Leading the industry with cutting-edge technology and compassionate care.",
      features: ["5-Star Rated", "Award Winning", "Community Trusted"]
    },
    {
      icon: Users,
      title: "Expert Medical Team",
      subtitle: "Experience & Expertise",
      description: "Our team of certified pathologists and technicians bring decades of combined experience to provide you with the most reliable diagnostic services.",
      features: ["Certified Experts", "25+ Years Experience", "Continuous Training"]
    },
    {
      icon: Clock,
      title: "Fast & Reliable Results",
      subtitle: "Speed & Efficiency",
      description: "Get your test results within 24 hours for most tests. Our streamlined processes ensure quick turnaround without compromising accuracy.",
      features: ["24-Hour Results", "Digital Reports", "Online Access"]
    },
    {
      icon: Star,
      title: "Patient-Centric Care",
      subtitle: "Compassion & Support",
      description: "We believe in treating every patient with dignity and care. Our friendly staff ensures a comfortable experience throughout your visit.",
      features: ["Comfortable Environment", "Friendly Staff", "Patient Support"]
    }
  ]

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      {/* Hero Section */}
      <motion.section 
        className="section-padding bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="container relative z-10">
          <motion.div 
            className="text-center max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-6 font-modern"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              🏆 #1 Rated Pathology Lab in the Region
            </motion.div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 font-display leading-tight">
              <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                Precision
              </span>
              <br />
              <span className="text-white">
                Meets
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Care
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-blue-100 leading-relaxed mb-10 font-modern max-w-4xl mx-auto">
              Where cutting-edge technology meets compassionate healthcare. 
              <span className="text-yellow-300 font-semibold"> 99.9% accuracy</span> guaranteed with 
              <span className="text-cyan-300 font-semibold"> 24-hour results</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 font-modern"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Your Test Now
              </motion.button>
              
              <motion.button
                onClick={() => navigate('/services')}
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300 font-modern"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View Our Services
              </motion.button>
            </div>
            
            {/* Trust Indicators */}
            <motion.div 
              className="flex flex-wrap justify-center items-center gap-8 mt-12 pt-8 border-t border-white/20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center gap-2 text-blue-100 font-modern">
                <span className="text-2xl">⭐</span>
                <span>5-Star Rated</span>
              </div>
              <div className="flex items-center gap-2 text-blue-100 font-modern">
                <span className="text-2xl">🔬</span>
                <span>ISO Certified</span>
              </div>
              <div className="flex items-center gap-2 text-blue-100 font-modern">
                <span className="text-2xl">⚡</span>
                <span>24hr Results</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Carousel Section */}
      <motion.section 
        className="section-padding bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-display">
              Why Choose Our Lab?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-modern">
              Discover what makes us the most trusted pathology laboratory in the region
            </p>
          </motion.div>

          {/* Carousel Container */}
          <div className="max-w-4xl mx-auto relative">
            {/* Carousel Slides */}
            <div className="relative h-96 overflow-hidden rounded-2xl">
              {slides.map((slide, index) => (
                <motion.div
                  key={index}
                  className={`absolute inset-0 w-full h-full ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  } transition-opacity duration-500`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === currentSlide ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-100 h-full p-8 md:p-12 flex flex-col items-center justify-center text-center">
                    {/* Icon */}
                    <div className="bg-gradient-to-br from-blue-100 to-indigo-200 w-24 h-24 rounded-full flex items-center justify-center mb-8 shadow-lg">
                      <slide.icon className="w-12 h-12 text-blue-600" />
                    </div>

                    {/* Subtitle */}
                    <p className="text-blue-600 font-semibold mb-2 font-modern">
                      {slide.subtitle}
                    </p>

                    {/* Title */}
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display">
                      {slide.title}
                    </h3>

                    {/* Description */}
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl font-medical leading-relaxed">
                      {slide.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap justify-center gap-4">
                      {slide.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="bg-white px-4 py-2 rounded-full text-sm font-medium text-blue-600 shadow-md font-modern"
                        >
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide
                      ? 'bg-blue-600 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Quick Stats */}
      <motion.section 
        className="section-padding bg-gradient-to-r from-blue-600 to-indigo-700 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "25+", label: "Years Experience" },
              { number: "50K+", label: "Tests Completed" },
              { number: "99.9%", label: "Accuracy Rate" },
              { number: "24hr", label: "Result Time" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-blue-100 mb-2 font-display">
                  {stat.number}
                </div>
                <div className="text-blue-200 font-modern">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  )
}

export default Home
