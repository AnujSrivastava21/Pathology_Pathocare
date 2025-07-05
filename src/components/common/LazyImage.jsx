import { useImageLazyLoad } from '../../hooks/useLazyLoad'

const LazyImage = ({ 
  src, 
  alt, 
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5YWFhYSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+',
  className = '',
  ...props 
}) => {
  const [ref, imageSrc, isLoaded] = useImageLazyLoad(src, placeholder)

  return (
    <img
      ref={ref}
      src={imageSrc}
      alt={alt}
      className={`transition-opacity duration-300 ${className}`}
      style={{ opacity: isLoaded ? 1 : 0.7 }}
      {...props}
    />
  )
}

export default LazyImage 