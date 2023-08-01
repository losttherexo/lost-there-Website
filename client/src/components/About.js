import bio from '../data/bio.js'

const About = () => {
    return (
        <div>
            <div className='flex justify-center py-3'>
                <p className='text-lime-500'>{bio}</p>
            </div>
        </div>
    )
}

export default About