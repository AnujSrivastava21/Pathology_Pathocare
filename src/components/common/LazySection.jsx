import { motion } from 'framer-motion'
import { useComponentLazyLoad } from '../../hooks/useLazyLoad'

const LazySection = ({ 
  children, 
  className = '', 
  delay = 0,
  ...props 
}) => {
  const [ref, shouldRender] = useComponentLazyLoad(delay)

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={shouldRender ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: shouldRender ? 0 : 0 }}
      {...props}
    >
      {shouldRender ? children : (
        <div className="h-32 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg animate-pulse"></div>
      )}
    </motion.div>
  )
}

export default LazySection 