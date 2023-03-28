import React from 'react'
import FlipCard from './components/FlipCard'
import CardProduct from './components/CardProduct'

import Macbook from "./assets/macbook.webp";
import JBL from "./assets/auriculares.jpg";
import Teclado from "./assets/teclado.jpg";

import kingman from './assets/kingsman.jpg'
import Spider from './assets/spider.jpg'
import RedNotice from './assets/rednotice.jpg'

function App() {
  return (
    <div className="bg-gray-900 App w-full flex flex-col justify-center items-center">
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
      <div className='w-full h-screen bg-slate-100 p-5'>
        <div className='w-full h-full flex flex-wrap justify-center gap-10 items-center overflow-auto'>
          <CardProduct
            img={Macbook}
            title={'Macbook Pro 2021'}
            category={'Electronics'}
            price={'$ 10'}
            isNew={true}
            description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum doloremque blanditiis modi quibusdam perferendis ducimus distinctio? Magnam, perferendis sint quod accusamus expedita odio cumque quibusdam ipsam, consequuntur esse culpa rem.'}
          />
          <CardProduct
            img={JBL}
            category={'Electronics'}
            title={'Auriculares JBL'}
            price={'$ 22'}
            ofert={10}
            description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum doloremque blanditiis modi quibusdam perferendis ducimus distinctio? Magnam, perferendis sint quod accusamus expedita odio cumque quibusdam ipsam, consequuntur esse culpa rem.'}
          />
          <CardProduct
            img={Teclado}
            category={'Electronics'}
            title={'Teclado Hyperx Alloy FPS'}
            price={'$ 50'}
            description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum doloremque blanditiis modi quibusdam perferendis ducimus distinctio? Magnam, perferendis sint quod accusamus expedita odio cumque quibusdam ipsam, consequuntur esse culpa rem.'}
          />
        </div>
      </div>
    </div>
  )
}

export default App
