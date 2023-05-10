import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['K', 'o', 's', 'o', 'v', 's', 'k', 'y']

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>R</span>
            <span className={`${letterClass} _12`}>u</span>
            <span className={`${letterClass} _12`}>s</span>
            <span className={`${letterClass} _12`}>s</span>
            <span className={`${letterClass} _12`}>e</span>
            <span className={`${letterClass} _12`}>l</span>
            <span className={`${letterClass} _12`}>l</span>
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
          </h1>
          <h2>Student at Connecticut College / AI Researcher</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
