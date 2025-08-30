import { useState } from "react"
import { useInView } from '../Hooks/useInView.js';
const ProData = [

    {
        id: 1,
        images: [
            '/assets/a0475841147_16.jpg',
            '/assets/Hubble_ultra_deep_field.jpg',
            '/assets/heic2017a.jpg'
        ],
        name: 'sign-in',
        desc: 'I create responsive, modern, and visually appealing websites tailored to your needs!'
    }
]

function Project({images, name, desc}){
    const [currI, setCurrI] = useState(0)
    const [Animation, setAnimation] = useState('')
    const [isClicked, setIsClicked] = useState(false)
    const animationClasses = {
        'enter': 'opacity-100 translate-x-0 rotate-0',
        'left': 'opacity-0 -translate-x-20 -rotate-12',
        'right': 'opacity-0 translate-x-20 rotate-12',
    };

    const handleNext = () =>{
            let newI = 0

            setAnimation('translate-x-20 rotate-12 opacity-0')
            setTimeout(() =>{
            const allNum = images.length - 1
            if (currI >= 0 && currI !== allNum){
                newI = currI + 1
            }
            else if (currI === allNum){
                newI = 0
                
            }
            setAnimation('-translate-x-20 -rotate-12  opacity-0')
            setTimeout(() => {
                setAnimation('translate-0 rotate-0  opacity-100')
            }, 500);
            setIsClicked(!isClicked)
            setCurrI(newI)
        }, 500)
             
    }

    const handlePrev = () => {
        let newI = 0
        const allNum = images.length - 1

        setAnimation('-translate-x-20 -rotate-12 scale-90  opacity-0')
        setTimeout(() =>{
            if (currI >= allNum && currI !== 0){
                newI = currI -1
            }
            else if (currI === 0){
                newI = allNum
            }
            setAnimation('translate-x-20 rotate-12 scale-50 opacity-0')
            setTimeout(() => {
                setAnimation('translate-0 rotate-0  opacity-100')
            }, 500);
            setCurrI(newI)
            setIsClicked(!isClicked)
        }, 500)
    }
        
    const ZoomTransition = () =>{
        setIsClicked(!isClicked)
        const Click = isClicked ? 'scale-150 hover:scale-150' : ''
        setAnimation(Click)
    }

    

    return(
        <div className="w-[60%] mb-5">
            <div className="ml-[5%] mt-[5%] flex flex-col items-center justify-center">
                <h1 className="fade text-yellow-600 text-[6vw] transition-all duration-500 hover:text-sky-700 hover:scale-105">{name}</h1>
                <div className="flex items-center">
                    <button onClick={handlePrev} className="fade h-6 w-6 rounded-full text-black dark:hover:bg-[#272727] dark:text-white transition duration-500 ">&#60;</button>
                    <div className=" w-[40vw] h-[40vw] flex items-center justify-center">
                        <div>
                            <img onClick={ZoomTransition} className={`${Animation} w-[25vw] rounded-[2vw] transition-all ease-[animation-timing-function: cubic-bezier(0.333, 0.667, 0.667, 1)] duration-500 hover:scale-105`} src={images[currI]}></img>
                        </div>
                    </div>
                    <button onClick={handleNext} className="fade h-6 w-6 rounded-full text-black dark:hover:bg-[#272727] dark:text-white transition duration-500 ">&#62;</button>
                </div>
                
                <p className="fade text-center text-gray-500 text-[2.5vw] transition-all duration-500">{desc}</p>
            </div>
             <hr className="mt-5 ml-[5%]"></hr>
        </div>
    )
}
function Projects(){
    return(
        <>
        {ProData.map(project =>{
            return(
                <Project
                key={project.id}
                name={project.name}
                images={project.images}
                desc={project.desc}
                />
            )
        })}
        </>
    )
}
export default Projects