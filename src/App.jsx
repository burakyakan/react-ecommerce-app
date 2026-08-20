import { useState } from 'react'
import './App.css'
import Products from './Products'
import iphone17 from './assets/iphone17.jpg'
import s26 from './assets/s26.jpg'

function App() {

  return (
    <div>
      <Products img={iphone17} title={"Apple iPhone 17 256GB Sis Mavisi"} rating={"★★★★⯪ 4.7/5"} price={"83.999,00 TL"} ></Products>
      <Products img={s26} title={"Samsung Galaxy S26 256GB Sis Kobalt Mor"} rating={"★★★★⯪ 4.8/5"} price={"58.799,00 TL"} ></Products>
      <Products img={s26} title={"Samsung Galaxy S26 256GB Sis Kobalt Mor"} rating={"★★★★⯪ 4.8/5"} price={399} ></Products>
    </div>
    

  )
}

export default App
