import React, { useState } from 'react'
import './Nav.css'
import { useEffect } from 'react'

function Nav() {
    const [show, setShow] = useState(false)
    useEffect(()=> {
        window.addEventListener("scroll", ()=>{
            if(window.scrollY>600){
                setShow(true)
            } else {
                setShow(false)
            }
        })
    })
    return (
        <div className={`nav ${show && 'navBlack'}`}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="Logo" style={{
                width: '150px'
            }} />
        </div>
    )
}

export default Nav;