import React from 'react'
import ListOfGifs from '../../components/ListOfGifs/index'
import './spin.css'
import  {useGifs}  from '../../hooks/useGifs'


export default function SearchResults ({params}){
    const {keyword}= params
    const{gifs} = useGifs({keyword})
    // console.log('-')
    console.log({gifs})
    return <>
    {
        gifs.loading
        ?<i className='loading'></i>
        :<ListOfGifs gifs={gifs}/>
    }
    </>

}
