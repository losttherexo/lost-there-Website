import { useState, useEffect } from "react"
import TourDate from "./TourDate"
import axios from "axios"

const Tour = () => {
    const [tourDates, setTourDates] = useState([])
    const [error, setError] = useState(false)

    useEffect(() => {
        axios
            .get('/shows')
            .then(response => {setTourDates(response.data)})
            .catch(error => {
                console.error("Error fetching tour dates:", error)
                setError(true)
            })
    },[])

    if(error === true) {
        return (
            <div className='flex flex-col text-lime-500'>
                <h1 className='self-center mx-8 md:mx-28 p-4 text-5xl w-[55%]'>
                    I'm sorry, there has been an error :c 
                    please come back later
                </h1>
            </div>
        )
    }

    const tourArray = tourDates.map(tourObj => <TourDate {...tourObj} key={tourObj.id}/>)

    return (
        <div className='flex flex-col text-lime-500'>
            <h1 className='text-3xl font-bold p-4 self-center'>UPCOMING SHOWS</h1>
            {error? <h1 className='self-center mx-10 md:mx-28 p-4 text-sm md:text-xl'>I'm sorry, there has been an error :c</h1> : tourArray}
        </div>
    )
}

export default Tour