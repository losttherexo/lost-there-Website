import { useState } from "react"

const Newsletter = () => {
    const [consent, setConsent] = useState(false)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.value)
    }

    return (
        <div className='self-center max-w-[75%] bg-white p-4 rounded'>
            <form onSubmit={handleSubmit} className='flex flex-col'>
                <label for='email' className='font-medium'>Email</label>
                <input placeholder='Type your email' name='email' className='my-2 border' />
                <p className='font-medium'>I consent to being contacted by email</p>
                <div className=''>
                    <input onClick={() => setConsent(!consent)} type='checkbox' name='consent' />
                    <label for='consent' className='px-2'>Yes</label>
                </div>
                <button type='submit' className='bg-lime-500 rounded-md my-2 max-w-[25%] px-2 self-center'>Submit</button>
            </form>
        </div>
    )
}

export default Newsletter