import { useContext,useEffect } from "react"
import getGifs from '../services/getGifs'
import GifsContext from '../context/GifsContext'

export function useGifs({keyword} = {keyword:null}){

const {gifs, setGifs} = useContext(GifsContext)


useEffect(()=>{
  const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'matrix'
    setGifs(actualGifs => ({loading:true, results: actualGifs.results}))
      getGifs({keyword:keywordToUse})
      .then(gifs => {
        setGifs({loading:false, results:gifs})
        localStorage.setItem('lastKeyword', keyword)
        })                
    },[keyword,setGifs])
    return{gifs}
}