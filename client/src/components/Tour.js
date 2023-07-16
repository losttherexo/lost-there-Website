import { useState, useEffect } from "react"
import TourDate from "./TourDate"

const Tour = () => {
    const [tourDates, setTourDates] = useState([])
    useEffect(() => {
        fetch('/shows')
        .then(r => {
            if(r.ok){
                return r.json()
            } else {
                throw new Error('Network response was not ok')
            }
        })
        .then(data => setTourDates(data))
    })

    const tourArray = tourDates.map(tourObj => <TourDate {...tourObj} key={tourObj.id}/>)

    return (
        <div className='flex flex-col text-lime-500'>
            <h1 className='text-3xl font-bold p-4 self-center'>UPCOMING SHOWS</h1>
            {tourArray}
        </div>
    )
}

export default Tour