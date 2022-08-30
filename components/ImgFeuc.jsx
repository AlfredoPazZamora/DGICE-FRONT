import React from 'react'
import feuc from '../src/img/feuc.jpg'
import consorcio from '../src/img/consorcio.jpg'
const ImgFeuc = () => {
    return (
        <div >
            <a href="https://portal.ucol.mx/feuc/" className="text-blue-600 visited:text-purple-600 ...">
                <img src={feuc} />
                <img src={consorcio} />

            </a>
        </div>
    )
}

export default ImgFeuc