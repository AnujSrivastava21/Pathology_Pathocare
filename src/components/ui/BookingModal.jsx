import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { X, Calendar, Clock, User, TestTube } from 'lucide-react'

const BookingModal = ({ isOpen, onClose, testName = null }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    testName: testName || '',
    timing: '',
    phone: '',
    email: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const genderOptions = ['Male', 'Female', 'Other']
  
  const testOptions = [
    'Blood Pressure Check',
    'Urine Analysis', 
    'Blood Sugar Test',
    'Thyroid Function Test',
    'Complete Blood Count',
    'Lipid Profile',
    'Liver Function Test',
    'Kidney Function Test'
  ]

  const timingOptions = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
    '05:00 PM', '06:00 PM'
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

    try {
      // Create booking data with timestamp
      const bookingData = {
        ...formData,
        bookingDate: new Date().toISOString(),
        bookingId: `BK${Date.now()}`
      }

      // Send to backend API
      const response = await fetch('http://localhost:3001/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData)
      })

      if (response.ok) {
        setIsSubmitted(true)
        setTimeout(() => {
          onClose()
          setIsSubmitted(false)
          setFormData({
            name: '',
            age: '',
            gender: '',
            testName: testName || '',
            timing: '',
            phone: '',
            email: ''
          })
        }, 2000)
      } else {
        throw new Error('Booking failed')
      }
    } catch (error) {
      console.error('Booking error:', error)
      alert('Booking failed. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 font-display">
              Book Your Test
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Name */}
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
                className="w-full px-4 py-3 bg-gray-50 rounded-lg border-2 border-blue-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-200"
                placeholder="Enter your full name"
              />
            </div>

            {/* Age and Gender */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-blue-600 mb-2">
                  Age *
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  required
                  min="1"
                  max="120"
                  className="w-full px-4 py-3 bg-gray-50 rounded-lg border-2 border-blue-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-200"
                  placeholder="Age"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-600 mb-2">
                  Gender *
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 rounded-lg border-2 border-blue-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-200"
                >
                  <option value="">Select Gender</option>
                  {genderOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Test Selection */}
            <div>
              <label className="block text-sm font-medium text-blue-600 mb-2">
                <TestTube className="w-4 h-4 inline mr-2" />
                Test Name *
              </label>
              <select
                name="testName"
                value={formData.testName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-50 rounded-lg border-2 border-blue-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-200"
              >
                <option value="">Select Test</option>
                {testOptions.map(test => (
                  <option key={test} value={test}>{test}</option>
                ))}
              </select>
            </div>

            {/* Timing */}
            <div>
              <label className="block text-sm font-medium text-blue-600 mb-2">
                <Clock className="w-4 h-4 inline mr-2" />
                Preferred Timing *
              </label>
              <select
                name="timing"
                value={formData.timing}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-50 rounded-lg border-2 border-blue-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-200"
              >
                <option value="">Select Time</option>
                {timingOptions.map(time => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-blue-600 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-50 rounded-lg border-2 border-blue-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-200"
                  placeholder="Phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-600 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-50 rounded-lg border-2 border-blue-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-200"
                  placeholder="Email address"
                />
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 font-modern disabled:opacity-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Booking...
                </div>
              ) : (
                'Confirm Booking'
              )}
            </motion.button>
          </form>

          {/* Success Message */}
          {isSubmitted && (
            <motion.div
              className="absolute inset-0 bg-green-50 border border-green-200 rounded-2xl flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="text-center">
                <div className="text-green-500 text-6xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-green-800 mb-2 font-display">
                  Booking Confirmed!
                </h3>
                <p className="text-green-700 font-modern">
                  Your appointment has been scheduled successfully.
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default BookingModal 