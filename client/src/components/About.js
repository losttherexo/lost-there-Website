import bio from '../data/bio.js'

const About = () => {
    return (
        <div className='flex justify-center h-screen'> 
            <div className='w-[65%] md:w-[55%]'>
                <div className='flex justify-center py-3'>
                    <p className='text-lime-500 text-lg'>{bio}</p>
                </div>
            </div>
        </div>
    )
}

export default About