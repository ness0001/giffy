import React from 'react'

import Gif from '../Gif/index'



export default function ListOfGifs ({gifs}){
  
    return(
      <div className='ListOfGifs'>
        {
        gifs.results.map(({id, title, url}) => 
            <Gif 
              key= {id}
              id={id}
              title={title} 
              url={url} 
            />
            )
        }
      </div>
        
    )

}