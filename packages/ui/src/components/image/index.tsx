// import { useState } from 'react'
// import { default as NextImage, ImageProps } from 'next/image'
import { cn } from '../../lib/utils'
// TODO: uncomment for app
// export const Image = ({ className, ...props }: ImageProps) => {
//   const [loaded, setLoaded] = useState(false)
//
//   return (
//     <NextImage
//       className={`inline-block align-top opacity-0 transition-opacity ${loaded && 'opacity-100'} ${className || ''}`}
//       onLoadingComplete={() => setLoaded(true)}
//       {...props}
//     />
//   )
// }

export const Image = ({ className, ...props }: { className?: string }) => {
  return <img className={cn('inline-block align-top opacity-0 transition-opacity', className)} {...props} />
}
