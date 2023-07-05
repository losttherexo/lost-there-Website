const Newsletter = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input  placeholder='e-mail' name='email'/>
            <input type='submit' className='bg-lime-500'/>
        </form>
    )
}

export default Newsletter