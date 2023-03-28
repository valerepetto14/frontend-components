import React from 'react'
import FlipCard from '../components/FlipCard'

import kingman from '../assets/kingsman.jpg'
import Spider from '../assets/spider.jpg'
import RedNotice from '../assets/rednotice.jpg'


function Films() {
    return (
        <div className='w-full h-screen flex justify-evenly items-center'>
            <FlipCard 
            img={kingman}
            txt={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum doloremque blanditiis modi quibusdam perferendis ducimus distinctio? Magnam, perferendis sint quod accusamus expedita odio cumque quibusdam ipsam, consequuntur esse culpa rem."} />
            <FlipCard 
            img={Spider} 
            txt={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum doloremque blanditiis modi quibusdam perferendis ducimus distinctio? Magnam, perferendis sint quod accusamus expedita odio cumque quibusdam ipsam, consequuntur esse culpa rem."}
            />
            <FlipCard 
            img={RedNotice}
            txt={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum doloremque blanditiis modi quibusdam perferendis ducimus distinctio? Magnam, perferendis sint quod accusamus expedita odio cumque quibusdam ipsam, consequuntur esse culpa rem."}
            />
        </div>
    )
}

export default Films;