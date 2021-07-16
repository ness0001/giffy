import React, { useState } from 'react'
import {Link, useLocation} from "wouter"
import ListOfGifs from '../../components/ListOfGifs'
import { useGifs } from '../../hooks/useGifs'

const POPULAR_GIFS = ["kimetsu-no-yaiba","anime","panda","capibara"]

export default function Home(){
    const [keyword,setKeyword]=useState('')
    const [path, pushLocation] =useLocation()
    const{gifs}= useGifs()
    
    const handleSubmit = evt => {
        evt.preventDefault()//evita que se refresque la pagina
        pushLocation(`/search/${keyword}`)
        
    }
    const handleInput = evt => {
        setKeyword(evt.target.value)
    }


    return(
        <>
        <form onSubmit={handleSubmit}>
            <input placeholder="Search a gif here.." onChange={handleInput} type='text' value={keyword}/>
        </form>
        
        <h3 className="App-title">Popular Gifs</h3>
        <ul>
            {POPULAR_GIFS.map((popularGif)=>(
                <li key={popularGif}>
                    <Link to={`/search/${popularGif}`}>
                        {popularGif}'s Gifs
                    </Link>
                </li>
            ))}
        </ul>
        <h3 className="App-title">Última búsqueda</h3>
        <ListOfGifs gifs={gifs}/>
        </>
    )
}