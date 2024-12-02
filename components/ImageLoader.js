'use client'
 

 
export default function hostImageLoader ({ src, width, quality })  {
  return `${src}?w=${width}&q=${quality || 75}`
}
 

