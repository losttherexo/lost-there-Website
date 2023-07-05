const TourDate = ({date, location, link}) => {
    return (
        <div className=
            'flex justify-between flex-row mx-10 md:mx-28 border-b border-stone-400 p-4 text-sm md:text-xl'
            >
            <p>{date}</p>
            <p>{location}</p>
            <button>{link}</button>
        </div>
    )
}

export default TourDate