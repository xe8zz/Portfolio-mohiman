import { useInView } from '../Hooks/useInView.js';
function Body(){
    const hover1 = "transition-all duration-500 hover:text-sky-700 hover:scale-105"
    const hover2 = "transition-all duration-500 hover:text-sky-700 hover:translate-x-1"
    
    const [skillsRef, skillsAreVisible] = useInView({ threshold: 0.1 });
    const [listRef, listIsVisible] = useInView({ threshold: 0.1 });
    return(
        <>
        <div className="w-[60%]">
            <div className="ml-[5%] mt-[5%]">
                <h1 ref={skillsRef}  className={`${hover1} ${`fade text-yellow-600 text-[6vw] w-fit transition-all duration-500`} ${skillsAreVisible ? 'visible' : '' } `}>Skills:</h1>
                    <ul  className="list-disc list-inside ml-7 text-[3vw]">
                        <li className={`${hover2} fade`}>HTML & CSS</li>
                        <li className={`${hover2} fade`}>JavaScript</li>
                        <li className={`${hover2} fade`}>React</li>
                        <li className={`${hover2} fade`}>Tailwind</li>
                    </ul>
                    <hr className="mt-5"></hr>
            </div>
        </div>
        </>
        
    )
}
export default Body