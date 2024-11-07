'use client'
 

 
export default function myImageLoader ({ src, width, quality })  {
  return `https://newitera.ru/${src}?w=${width}&q=${quality || 75}`
}
 
