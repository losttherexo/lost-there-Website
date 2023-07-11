const Newsletter = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.value)
    }

    return (
        <div className='self-center max-w-[30%] bg-white p-4 rounded'>
            <form onSubmit={handleSubmit} className='flex flex-col'>
                <p className=''>Email</p>
                <input placeholder='Type your email' name='email' className='my-2 border' />
                <input type='submit' className='bg-lime-500 rounded-md my-2' />
            </form>
        </div>
    )
}

export default Newsletter