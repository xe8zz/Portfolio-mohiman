import React, { useEffect } from 'react'
import Header from './Script/Header.jsx'
import Body from './Script/Body.jsx'
import Project from './Script/Projects.jsx'
import Footer from './Script/Footer.jsx'
import './index.css'

function App() {
  useEffect(() => {
    const sectionsToAnimate = document.querySelectorAll('.fade, .fade1');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {

        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');

          const elementTop = entry.boundingClientRect.top;
          const viewportHeight = window.innerHeight;
      
          if (elementTop > viewportHeight) {
            entry.target.classList.add('fade-enter-from-bottom');
            entry.target.classList.remove('fade-enter-from-top');
          } else if (elementTop < 0) {
            entry.target.classList.add('fade-enter-from-top');
            entry.target.classList.remove('fade-enter-from-bottom');
          }
        }
      });
    }, {
      threshold: 0.1, 
    });

    sectionsToAnimate.forEach(section => {
      section.classList.add('fade-enter-from-bottom');
      observer.observe(section);
    });

    return () => {
      sectionsToAnimate.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);


  return (
    <div className='bg-white dark:bg-black dark:text-white/70 transition-all duration-500'>
      <Header></Header>
      <Body></Body>
      <Project></Project>
      <Footer></Footer>

    </div>
  )

}
export default App
