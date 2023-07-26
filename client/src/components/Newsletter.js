import { useEffect, useState } from "react"
import {useFormik} from "formik"

const Newsletter = ({isOpen, handleNewsletter}) => {
    const [queue, setQueue] = useState([])

    useEffect(() => console.log(queue), [queue])

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        onSubmit: values => {
            setQueue([...queue, values])
          },
    })



    if(!isOpen) {
        return null
    }

    return (
        <div className=''>
            <form onSubmit={formik.handleSubmit} className='flex flex-col'>
                <button onClick={() => handleNewsletter()} className='absolute top-0 right-0 mr-2'>x</button>
                <label htmlFor='email' className='font-medium'>Email</label>
                <input placeholder='Type your email' name='email' onChange={formik.handleChange} value={formik.values.email} className='my-2 border rounded-sm' />
                <p className='font-medium'>I consent to being contacted by email</p>
                <div className=''>
                    <input onClick={() => {}} type='checkbox' name='consent' />
                    <label htmlFor='consent' className='px-2'>Yes</label>
                </div>
                <button type='submit' className='bg-lime-500 rounded-md my-2 max-w-[25%] px-2 self-center'>Submit</button>
            </form>
        </div>
    )
}

export default Newsletter