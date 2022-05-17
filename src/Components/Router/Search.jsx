
import React, {useState} from 'react'

export default function Search() {
    const [img,setImg]=useState('')
    const handelOnChange=(e)=>{
        setImg(e.target.value)
    }
    const imsge=`https://source.unsplash.com/400x400?${img}`
  return (
   <>
    <div>
        <input type="text" placeholder='Search' onChange={handelOnChange}/>

    </div>

    <div className='Abhi'>
        <img src={imsge} alt="AlterImage" />
    </div>
   </>
  )
}
