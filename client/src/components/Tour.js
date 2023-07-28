import { useState, useEffect } from "react"
import TourDate from "./TourDate"
import axios from "axios"

const Tour = () => {
    const [tourDates, setTourDates] = useState([])

    useEffect(() => {
        axios
            .get('/shows')
            .then(response => {setTourDates(response.data)})
            .catch(error => {console.error("Error fetching tour dates:", error)})
    },[])

    const tourArray = tourDates.map(tourObj => <TourDate {...tourObj} key={tourObj.id}/>)

    return (
        <div className='flex flex-col text-lime-500'>
            <h1 className='text-3xl font-bold p-4 self-center'>UPCOMING SHOWS</h1>
            {tourArray}
        </div>
    )
}

export default Tour