import React from 'react'
import data from './data'
import Navbar from './Navbar'
import Main from './Main'
import Footer from './Footer'
export default function App(){
    // console.log(data)
    const main=data.map(item=>{
        return (<Main
        key={item.id}
        {...item}
        
        />)
    })
    
    return(
     <div>
     
        <Navbar />
        <section className='main--app'>
        {main}
        </section>
        <Footer />
     
     
     
     
     </div>)
     
}