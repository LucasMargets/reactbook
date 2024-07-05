import './twfollowcard.css'
import { useState } from 'react'


function FollowCard ({username, socialmedia='unknown'}) {
    const [isFollowing, setisFollowing] = useState(false)

    const handleClick = () => {
        setisFollowing(!isFollowing)
    }

    const text = isFollowing
        ? 'Siguiendo' 
        : 'Seguir'
        const buttonClaseName = isFollowing
        ? 'tw-botonfollow isfollowing'
        : 'tw-botonfollow'
    const buttonTextName = isFollowing
        ? 'tw-botontext isfollowing'
        : 'tw-botontext'
    return ( /* comentarios ... */
        <div className='tw-followfondo'>
            <article className='tw-aquienseguir'>
                <header className='tw-header'>
                    <img src={`https://unavatar.io/${username}`} alt="avatar user" className='tw-img'/>
                <div className='tw-names'>                
                    <strong className='tw-name'>{username}</strong>
                    <span className='tw-media'>@{socialmedia}</span>
                </div>
                </header> 
                <aside>
                    <button className={buttonClaseName} onClick={handleClick} >
                    <p className={buttonTextName}>{text}</p>
                    </button>
                </aside>
                </article>
        </div>
    )
}
    
export default FollowCard
    