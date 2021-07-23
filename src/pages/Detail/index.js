import React from 'react';
import Gif from '../../components/Gif/index.js'
import useGlobalGifs from '../../hooks/useGlobalGifs'

export default function Detail({params}){
    
    const gifs = useGlobalGifs()
    const gif = gifs.results.find(singleGif => singleGif.id === params.id)
    
    return <Gif {...gif} />
}