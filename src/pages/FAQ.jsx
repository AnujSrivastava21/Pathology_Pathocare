import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle, Clock, Shield, Users, FileText, Phone, Mail } from 'lucide-react'

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set())

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

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

  const faqCategories = [
    {
      title: "Appointments & Scheduling",
      icon: Clock,
      color: "blue",
      questions: [
        {
          question: "How do I schedule an appointment?",
          answer: "You can schedule an appointment by calling us at +1 (555) 123-4567, booking online through our website, or visiting our lab in person. We recommend booking in advance for faster service."
        },
        {
          question: "What are your operating hours?",
          answer: "We are open Monday to Friday from 7:00 AM to 7:00 PM, and Saturdays from 8:00 AM to 4:00 PM. We are closed on Sundays and major holidays."
        },
        {
          question: "Can I walk in without an appointment?",
          answer: "Yes, we accept walk-ins, but we strongly recommend making an appointment to avoid longer wait times and ensure we can accommodate your specific testing needs."
        },
        {
          question: "How long does a typical test take?",
          answer: "Most tests take between 15-30 minutes to complete. However, the total time including registration and waiting can be 30-60 minutes. Complex tests may take longer."
        }
      ]
    },
    {
      title: "Test Preparation",
      icon: Shield,
      color: "green",
      questions: [
        {
          question: "Do I need to fast before my blood test?",
          answer: "Some tests require fasting for 8-12 hours before the test. We will inform you about fasting requirements when you schedule your appointment. Generally, lipid profiles and glucose tests require fasting."
        },
        {
          question: "What should I bring to my appointment?",
          answer: "Please bring a valid photo ID, your insurance card, any referral forms from your doctor, and a list of current medications. If you're a new patient, arrive 15 minutes early to complete registration forms."
        },
        {
          question: "Can I take my medications before the test?",
          answer: "In most cases, you should continue taking your regular medications unless specifically instructed otherwise by your doctor or our staff. If you're unsure, please consult with your healthcare provider."
        },
        {
          question: "What should I wear for my appointment?",
          answer: "Wear comfortable, loose-fitting clothing with sleeves that can be easily rolled up. Avoid tight clothing around the arms as we need easy access for blood draws."
        }
      ]
    },
    {
      title: "Results & Reports",
      icon: FileText,
      color: "purple",
      questions: [
        {
          question: "How long does it take to get my results?",
          answer: "Most routine test results are available within 24-48 hours. Some specialized tests may take 3-7 days. We will inform you of the expected turnaround time when you schedule your test."
        },
        {
          question: "How will I receive my results?",
          answer: "Results are typically available through our secure online portal, or we can send them to your email. You can also request a printed copy. We will notify you when your results are ready."
        },
        {
          question: "Can you send results directly to my doctor?",
          answer: "Yes, we can send results directly to your healthcare provider. Please provide your doctor's contact information when you register, and we'll ensure they receive a copy of your results."
        },
        {
          question: "What if my results are abnormal?",
          answer: "If your results are outside the normal range, we will flag them in your report. However, we recommend discussing all results with your healthcare provider, as they can provide proper interpretation and next steps."
        }
      ]
    },
    {
      title: "Insurance & Payment",
      icon: Users,
      color: "orange",
      questions: [
        {
          question: "Do you accept insurance?",
          answer: "Yes, we accept most major insurance plans. Please bring your insurance card and any required referral forms. We recommend contacting your insurance provider to verify coverage before your appointment."
        },
        {
          question: "What forms of payment do you accept?",
          answer: "We accept cash, credit cards, debit cards, and personal checks. We also offer payment plans for larger bills. Payment is typically due at the time of service unless other arrangements have been made."
        },
        {
          question: "How much will my test cost?",
          answer: "Test costs vary depending on the specific test and your insurance coverage. We can provide cost estimates when you schedule your appointment. Contact us for detailed pricing information."
        },
        {
          question: "Do you offer discounts for multiple tests?",
          answer: "Yes, we offer package discounts for multiple tests ordered together. We also provide discounts for seniors, students, and uninsured patients. Please ask about our current promotions."
        }
      ]
    },
    {
      title: "General Information",
      icon: HelpCircle,
      color: "pink",
      questions: [
        {
          question: "Are your technicians certified?",
          answer: "Yes, all our technicians are certified and licensed professionals with extensive training in phlebotomy and laboratory procedures. Our lab is also accredited by relevant medical authorities."
        },
        {
          question: "What safety measures do you have in place?",
          answer: "We follow strict safety protocols including regular sanitization, use of sterile equipment, proper disposal of medical waste, and adherence to all CDC and OSHA guidelines for infection control."
        },
        {
          question: "Can I bring someone with me to my appointment?",
          answer: "Yes, you can bring a family member or friend to your appointment. However, due to space limitations and privacy considerations, we may ask them to wait in our reception area during the actual test."
        },
        {
          question: "What if I'm afraid of needles?",
          answer: "We understand needle anxiety is common. Our experienced technicians are trained to work with anxious patients and use techniques to minimize discomfort. Let us know if you're nervous, and we'll take extra care."
        }
      ]
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
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed font-modern">
              Find answers to common questions about our pathology services, appointments, and procedures
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Categories */}
      <motion.section 
        className="section-padding bg-gradient-to-r from-white to-blue-50"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <div className="container">
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="mb-16"
              variants={fadeInUp}
            >
              {/* Category Header */}
              <div className="text-center mb-12">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${
                  category.color === 'blue' ? 'bg-gradient-to-br from-blue-400 to-blue-600' :
                  category.color === 'green' ? 'bg-gradient-to-br from-green-400 to-green-600' :
                  category.color === 'purple' ? 'bg-gradient-to-br from-purple-400 to-purple-600' :
                  category.color === 'orange' ? 'bg-gradient-to-br from-orange-400 to-orange-600' :
                  'bg-gradient-to-br from-pink-400 to-pink-600'
                }`}>
                  <category.icon className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">
                  {category.title}
                </h2>
              </div>

              {/* FAQ Items */}
              <div className="max-w-4xl mx-auto space-y-4">
                {category.questions.map((item, itemIndex) => {
                  const globalIndex = categoryIndex * 4 + itemIndex
                  const isOpen = openItems.has(globalIndex)
                  
                  return (
                    <motion.div
                      key={itemIndex}
                      className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                    >
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <h3 className="text-lg font-semibold text-gray-900 font-modern pr-4">
                          {item.question}
                        </h3>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                        )}
                      </button>
                      
                      <motion.div
                        initial={false}
                        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4">
                          <p className="text-gray-600 leading-relaxed font-medical">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>


    </div>
  )
}

export default FAQ 