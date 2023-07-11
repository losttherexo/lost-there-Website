import {useState} from 'react'
import Newsletter from './Newsletter';

const MainPage = () => {
    
    const [isClicked, setIsClicked] = useState(false)

    const handleNewsletter = () => {
        setIsClicked(!isClicked)
    }

    return (
        <div>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-white'>Have I Found You Yet?</h1>
                <button onClick={handleNewsletter} className='font-bold border border-lime-500 text-lime-500 w-[150px] rounded-md my-6 mx-auto shadow-md hover:text-black hover:bg-lime-500'>{isClicked? "I'm done" : 'Sign Up for News'}</button>
                {isClicked? <Newsletter /> : ''}
            </div>
        </div>
    )
}

export default MainPage