import React from 'react'

export default function Main(props){
    
    return (
        <div>
        
            <div className='main'>
                <div className='main--img'>
                    <img className='img--part' src={props.imageUrl} alt=''/>
                </div>
                
                <div className='main--comp'>
                    <img className='main--path'  src='placeholder.png'/>
                    
                    <p className='main--location'>{props.location} </p>
                    
                    <a className='main--map' href={props.googleMapsUrl}>view on Google maps</a>
                    
                    <h2 className='main--title'>{props.title}</h2>
                    
                    <p className='main--date'>{props.startDate}-{props.endDate}</p>
                    
                    <p className='main--description'>{props.description}</p>
                    
                
                </div>
                
                
            </div> 
            
    </div>
       
        
        
        
        
    )
    
    
}