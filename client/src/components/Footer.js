import {FaInstagram, FaYoutube, FaSpotify, FaMusic} from 'react-icons/fa'

const Footer = () => {
    return (
        <footer>
            <div className='text-white text-xl flex justify-center py-3'>
                <a className='mx-2' href='https://www.instagram.com/toast_/'><FaInstagram /></a>
                <a className='mx-2' href='https://www.youtube.com/@toasttv5283'><FaYoutube /></a>
                <a className='mx-2' href='https://open.spotify.com/artist/3Nz5FVEfruc2XuwrGdeHeC?si=VqaigcauRwyy8CdLz4zLwA'><FaSpotify /></a>
                <a className='mx-2' href='https://music.apple.com/us/artist/toast/1462028509'><FaMusic /></a>
            </div>
        </footer>
    )
}

export default Footer