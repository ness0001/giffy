import React from 'react'
import {useEffect, useState} from 'react'
import Gif from './Gif'
import getGifs from '../services/getGifs'


export default function ListOfGifs ({params}){
  const {keyword}= params;
  //const [loading, setLoading]=useState(false)

  const [gifs, setGifs] = useState({loading:false, results:[]})
    useEffect(()=>{
      setGifs(actualGifs => ({loading:true, results: actualGifs.results}))
        getGifs({keyword})
        .then(gifs => {
          setGifs({loading:false, results:gifs})
          })                
      },[keyword])

      if(gifs.loading) return <i className='loading'></i>  

    return(
      <div>
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