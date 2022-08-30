import React from 'react'
import LogoSep from '../src/img/LogoSep.jpg'
import LogoFec from '../src/img/LogoFEC.jpg'

const ImgSEP = () => {
    return (
        <div >
            <a href="https://www.gob.mx/sep" className="text-blue-600 visited:text-purple-600 ...">
                <img src={LogoSep} />
                <img src={LogoFec} />
            </a>
        </div>
    )
}

export default ImgSEP