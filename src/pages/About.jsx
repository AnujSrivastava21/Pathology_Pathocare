import { motion } from 'framer-motion'
import { Users, Award, Clock, Shield, Heart, Microscope } from 'lucide-react'

const About = () => {
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

  const stats = [
    { icon: Users, number: "50+", label: "Expert Staff" },
    { icon: Award, number: "25+", label: "Years Experience" },
    { icon: Clock, number: "24/7", label: "Service Available" },
    { icon: Shield, number: "100%", label: "Quality Assured" }
  ]

  const values = [
    {
      icon: Heart,
      title: "Patient Care First",
      description: "We prioritize patient comfort and care above everything else, ensuring a compassionate experience."
    },
    {
      icon: Microscope,
      title: "Advanced Technology",
      description: "State-of-the-art equipment and cutting-edge diagnostic techniques for accurate results."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous quality control measures to ensure reliable and accurate test results every time."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Highly qualified and experienced medical professionals dedicated to excellence."
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
              About Our Pathology Lab
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed font-modern">
              Delivering accurate diagnostic results with compassion and cutting-edge technology for over 25 years
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        className="section-padding bg-gradient-to-r from-white to-blue-50"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 ${
                  index === 0 ? 'bg-gradient-to-br from-blue-400 to-blue-600' :
                  index === 1 ? 'bg-gradient-to-br from-purple-400 to-purple-600' :
                  index === 2 ? 'bg-gradient-to-br from-green-400 to-green-600' :
                  'bg-gradient-to-br from-orange-400 to-orange-600'
                }`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2 font-display group-hover:text-blue-600 transition-colors">{stat.number}</h3>
                <p className="text-gray-600 font-modern">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Story Section */}
      <motion.section 
        className="section-padding bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-display">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed font-medical">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur saepe accusantium modi architecto. Voluptates recusandae, iusto eaque dolor doloribus, saepe aspernatur neque labore necessitatibus distinctio molestias assumenda, accusantium incidunt suscipit culpa autem itaque maxime voluptate! Molestias modi repudiandae a quas ab consequuntur, recusandae doloribus sapiente culpa, quae soluta adipisci est.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed font-medical">
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique recusandae minima fuga voluptate nihil, minus deserunt totam aperiam ab atque quam. Laborum, saepe quis sunt incidunt error velit excepturi deleniti.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-medical">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium repudiandae aspernatur dolorum cupiditate autem rerum quisquam assumenda et eius asperiores.
              </p>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-2xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-4 font-display">Our Mission</h3>
                <p className="text-lg leading-relaxed font-modern">
                  To provide accurate, timely, and reliable diagnostic services that empower healthcare 
                  providers to make informed decisions and improve patient outcomes.
                </p>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 shadow-2xl border border-blue-100">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 font-display">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed font-modern">
                  To be the leading pathology laboratory, known for innovation, accuracy, and 
                  exceptional patient care.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section 
        className="section-padding bg-gradient-to-br from-white via-blue-50 to-indigo-50"
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
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-modern">
              These principles guide everything we do and ensure we deliver the highest quality care to our patients
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="card hover:shadow-xl transition-all duration-300 group bg-white/80 backdrop-blur-sm"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 ${
                  index === 0 ? 'bg-gradient-to-br from-red-400 to-red-600' :
                  index === 1 ? 'bg-gradient-to-br from-blue-400 to-blue-600' :
                  index === 2 ? 'bg-gradient-to-br from-green-400 to-green-600' :
                  'bg-gradient-to-br from-purple-400 to-purple-600'
                }`}>
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-display group-hover:text-blue-600 transition-colors">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed font-medical">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section 
        className="section-padding bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50"
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
            <h2 className="text-4xl font-bold mb-6 font-display text-gray-900">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto font-modern">
              Our team of highly qualified pathologists, technicians, and support staff work together 
              to ensure accurate and timely results for every patient.
            </p>
          </motion.div>

          {/* Team Cards Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: "👨‍⚕️",
                name: "Dr. Brijesh Srivastava",
                role: "Senior Pathologist",
                qualification: "MD, FCAP",
                age: "32",
                specialization: "Hematopathology",
                experience: "10+ years",
                education: " Medical School"
              },
              {
                icon: "👩‍⚕️",
                name: "Dr. Akanasha Srivastava",
                role: "Clinical Pathologist",
                qualification: "MD, PhD",
                age: "31",
                specialization: "Clinical Chemistry",
                experience: "12+ years",
                education: " University"
              },
              {
                icon: "👨‍⚕️",
                name: "Dr. Abhishek Srivastava",
                role: "Cytopathologist",
                qualification: "MD, FRCPath",
                age: "35",
                specialization: "Cytopathology",
                experience: "18+ years",
                education: "Johns Hopkins"
              },
              {
                icon: "👩‍⚕️",
                name: "Dr. David Thompson",
                role: "Molecular Pathologist",
                qualification: "MD, PhD",
                age: "40",
                specialization: "Molecular Pathology",
                experience: "14+ years",
                education: "Yale University"
              },
              {
                icon: "👨‍⚕️",
                name: "Dr. Lisa Park",
                role: "Anatomic Pathologist",
                qualification: "MD, FCAP",
                age: "35",
                specialization: "Anatomic Pathology",
                experience: "10+ years",
                education: "UCLA Medical School"
              }
            ].map((doctor, index) => (
              <motion.div
                key={index}
                className="card group hover:shadow-2xl transition-all duration-300 bg-white/90 backdrop-blur-sm"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                {/* Doctor Avatar */}
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl group-hover:scale-110 transition-transform duration-300 shadow-lg ${
                  index === 0 ? 'bg-gradient-to-br from-blue-400 to-blue-600' :
                  index === 1 ? 'bg-gradient-to-br from-purple-400 to-purple-600' :
                  index === 2 ? 'bg-gradient-to-br from-green-400 to-green-600' :
                  index === 3 ? 'bg-gradient-to-br from-orange-400 to-orange-600' :
                  'bg-gradient-to-br from-pink-400 to-pink-600'
                }`}>
                  {doctor.icon}
                </div>

                {/* Doctor Name */}
                <h3 className="text-xl font-bold mb-2 font-display text-gray-900">
                  {doctor.name}
                </h3>

                {/* Role */}
                <p className="text-blue-600 font-medium mb-3 font-modern">
                  {doctor.role}
                </p>

                {/* Qualification */}
                <div className={`rounded-lg p-3 mb-4 ${
                  index === 0 ? 'bg-gradient-to-r from-blue-100 to-blue-200' :
                  index === 1 ? 'bg-gradient-to-r from-purple-100 to-purple-200' :
                  index === 2 ? 'bg-gradient-to-r from-green-100 to-green-200' :
                  index === 3 ? 'bg-gradient-to-r from-orange-100 to-orange-200' :
                  'bg-gradient-to-r from-pink-100 to-pink-200'
                }`}>
                  <p className={`text-sm font-semibold font-modern ${
                    index === 0 ? 'text-blue-700' :
                    index === 1 ? 'text-purple-700' :
                    index === 2 ? 'text-green-700' :
                    index === 3 ? 'text-orange-700' :
                    'text-pink-700'
                  }`}>
                    {doctor.qualification}
                  </p>
                </div>

                {/* Details */}
                <div className="space-y-2 text-sm text-gray-700 font-medical">
                  <div className="flex justify-between">
                    <span>Age:</span>
                    <span className="font-semibold text-gray-900">{doctor.age} years</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Experience:</span>
                    <span className="font-semibold text-gray-900">{doctor.experience}</span>
                  </div>
                  <div className="text-center">
                    <span className="font-semibold text-gray-900">{doctor.specialization}</span>
                  </div>
                </div>

                {/* Education */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-600 font-medical">
                    {doctor.education}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Team Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { number: "5", label: "Expert Doctors" },
              { number: "70+", label: "Years Combined Experience" },
              { number: "1000+", label: "Tests Per Month" },
              { number: "99.8%", label: "Accuracy Rate" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`text-3xl font-bold mb-2 font-display group-hover:scale-110 transition-transform ${
                  index === 0 ? 'text-blue-600' :
                  index === 1 ? 'text-purple-600' :
                  index === 2 ? 'text-green-600' :
                  'text-orange-600'
                }`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 font-modern">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default About
