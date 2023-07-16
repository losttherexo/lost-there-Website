const TourDate = ({venue, date, location, link}) => {
    return (
        <div className=
            'flex justify-between flex-row mx-10 md:mx-28 border-b border-stone-400 p-4 text-sm md:text-xl'
            >
            <p>{date}</p>
            <p>{venue}</p>
            <p>{location}</p>
            <a href={link}>Buy Tickets</a>
        </div>
    )
}

export default TourDate