import {useFormik} from "formik"
import * as Yup from "yup"
import axios from "axios"

const Newsletter = ({isOpen, handleNewsletter}) => {

    const formik = useFormik({
        initialValues: {
            email: '',
            consent: false,
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address.').required('This field is required.'),
            consent: Yup.boolean().oneOf([true], "Please select an option."),
          }),
        onSubmit: async (values, {resetForm}) => {
            await axios.post('/email_list', values)
            resetForm()
            handleNewsletter()
          },
    })

    if(!isOpen) {
        return null
    }

    return (
        <div className='text-lime-500'>
            <form onSubmit={formik.handleSubmit} className='flex flex-col'>
                <button onClick={() => handleNewsletter()} className='absolute top-0 right-0 mr-2'>x</button>
                <label htmlFor='email' className='text-2xl font-medium'>Email</label>
                <input placeholder='Type your email' name='email' onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} className='my-2 border rounded-sm bg-transparent border-lime-500' />
                {formik.touched.email && formik.errors.email ? (
                    <div className="text-red-500">{formik.errors.email}</div>
                ) : null}
                <p className='font-medium'>I consent to being contacted by email</p>
                {formik.touched.consent && formik.errors.consent ? (
                    <div className="text-red-500">{formik.errors.consent}</div>
                ) : null}
                <div className=''>
                    <input onClick={formik.handleChange} type='checkbox' name='consent' value={formik.values.consent} />
                    <label htmlFor='consent' className='px-2'>Yes</label>
                </div>
                <button type='submit' className='bg-lime-500 rounded-md my-2 max-w-[25%] px-2 self-center text-black'>Submit</button>
            </form>
        </div>
    )
}

export default Newsletter