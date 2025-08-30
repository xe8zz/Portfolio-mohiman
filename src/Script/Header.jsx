import { useContext } from "react";
import { ThemeContext } from '../Context.jsx'; 
import { useInView } from '../Hooks/useInView.js';
function Header(){
    const hover1 = "transition-all duration-500 hover:text-sky-700 hover:scale-105"
    const { toggleTheme, theme } = useContext(ThemeContext);
    const [skillsRef, skillsAreVisible] = useInView({ threshold: 0.1 });
    const [listRef, listIsVisible] = useInView({ threshold: 0.1 });
    return(
        <div>
          <nav className="fixed top-0 left-0 w-full bg-white/60 dark:bg-black/60 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 z-50 transition-all duration-500">              
              <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">                  
                  <div className="flex items-center justify-between h-12">                 
                      <div className="flex items-center">
                          <a href="#" className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-1000">
                              Mohiman
                          </a>
                      </div>
                      <div className="flex items-center">
                          <button 
                              onClick={toggleTheme} 
                              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/10 hover:scale-110 dark:hover:scale-110 dark:hover:bg-white/10 transition-all duration-500"
                              aria-label="Toggle dark mode">
                              <span className="text-xl opacity-90">{theme === 'light' ? '🌙' : '☀️'}</span>
                          </button>
                      </div>
                  </div>
              </div>
          </nav>
          
          <div className='w-[60%] pt-20'>
            <div className="flex-col ml-[5%]">
              <h1 className={`${hover1} fade text-yellow-600 text-[9vw] mb-2 leading-[50%]`}>Hey,</h1>
              <h1 className={`${hover1} fade text-[6vw]`}>I'm mohiman! </h1>
              <p className={`${hover1} fade text-[4vw] leading-3 mb-[5%]`}>A Wep developer</p>
              <p className={`fade text-[2.5vw] text-gray-500 leading-tight transition-all duration-500`}>I create responsive, modern, and visually appealing websites tailored to your needs!</p> 
              <hr className="mt-5"></hr>
            </div>
          </div>
        </div>
    )
}
export default Header