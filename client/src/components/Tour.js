import TourDate from "./TourDate"


const Tour = () => {

    const tourDates = [
        {
            id:1,
            date: "MAR 25, 2023",
            location: "Iron Cow Sushi",
            link: "Get Tickets"
        },
        {
            id:2,
            date: "JUN 08, 2023",
            location: "Will's Pub",
            link: "Get Tickets"
        }
    ]

    const tourArray = tourDates.map(tourObj => <TourDate {...tourObj} key={tourObj.id}/>)

    return (
        <div className='flex flex-col text-lime-500'>
            <h1 className='text-3xl font-bold p-4 self-center'>UPCOMING SHOWS</h1>
            {tourArray}
        </div>
    )
}

export default Tour