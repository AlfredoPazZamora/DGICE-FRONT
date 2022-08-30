import React from 'react'
import feuc from '../src/img/feuc.jpg'
import consorcio from '../src/img/consorcio.jpg'

import Image from 'next/image'
const ImgFeuc = () => {
    return (
        <div >
            <a href="https://portal.ucol.mx/feuc/" className="text-blue-600 visited:text-purple-600 ...">
                <Image  src={feuc}/>
                <Image  src={consorcio}/>

            </a>
        </div>
    )
}

export default ImgFeuc