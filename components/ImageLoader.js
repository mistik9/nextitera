'use client'
 

 
export default function myImageLoader ({ src, width, quality })  {
  console.log({ src, width, quality })
  return `${src}?w=${width}&q=${quality || 75}`
}
 
