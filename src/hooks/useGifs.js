import { useEffect, useState } from "react"
import getGifs from '../services/getGifs'


export function useGifs({keyword} = {keyword:null}){

const [gifs, setGifs] = useState({loading:false, results:[]})

useEffect(()=>{
  const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'catoons'
    setGifs(actualGifs => ({loading:true, results: actualGifs.results}))
      getGifs({keyword:keywordToUse})
      .then(gifs => {
        setGifs({loading:false, results:gifs})
        localStorage.setItem('lastKeyword', keyword)
        })                
    },[keyword])
    return{gifs}
}