import {FaInstagram, FaYoutube, FaSpotify, FaMusic} from 'react-icons/fa'

const Footer = () => {
    return (
        <footer>
            <div className='fixed bottom-0 w-full text-white text-xl flex justify-center py-3'>
                <a className='mx-2' href='https://www.instagram.com/lostthere.xo/'><FaInstagram /></a>
                <a className='mx-2' href='https://www.youtube.com/@losttherexo'><FaYoutube /></a>
                <a className='mx-2' href='https://open.spotify.com/artist/27dTdSe8fBtCAle3kuMaOB?si=Erbf1WdZRlWreNLSuR7LIA'><FaSpotify /></a>
                <a className='mx-2' href='https://music.apple.com/us/artist/lost-there/1576234563'><FaMusic /></a>
            </div>
        </footer>
    )
}

export default Footer