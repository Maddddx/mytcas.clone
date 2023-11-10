import React from 'react'
import './Footer.css'
import logo_instagram from '/logo_instagram.svg'

function Footer() {
    return (
        <div className='footer'>
            <div className='f-describe'>
                <p>I cloned this website for education only By Narakorn © 2023
                    <a href='https://www.instagram.com/narakorn.z/' title='instagram' target='_blank'>
                        <img src='logo_instagram.svg'></img>
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Footer