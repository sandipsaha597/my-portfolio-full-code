import React, {useState, useEffect} from 'react'

function Home() {

  const [hello, setHello] = useState('')
  const [para, setPara] = useState('')
  const [unmount, setUnmount] = useState(false)

  let title = "Hello, my name is Sandip Saha.",
  i = 0,
  now = ''

  let description = "I am a passionate frontend developer. I like coding, playing video games, learning etc. I am not a good writter but I'm pretty good at coding. I am always hungry to learn useful things and improve myself. I am looking to obtain a position that will allow me utilize my technical skills, experience and willingness to learn in making an organization successful.",
  p = true
  useEffect(() => {
    const typeW = (text, set) => {
      const typewritter = setInterval(() => {
        now = now + text[i]
        set(now)
        i++
        let textLength = text.length
        if (i >= textLength) {
          if (p) {
            typeW(description, setPara)
            p = false
          }
          clearInterval(typewritter)
          i = 0
          now = ''
        }
      }, 50)
    }
    typeW(title, setHello)
  }, [])

  return (
    <header className="header">
      <h1>{hello}</h1>
      <p>{para}</p>
    </header>
  )
}

export default Home
