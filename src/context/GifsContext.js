import React,{useState} from 'react'

const Context = React.createContext({})

export function  GifsContextProvider({children}){
    const [gifs, setGifs] =useState({loading:false, results:[]})
    
    return <Context.Provider value={{gifs, setGifs}}>
    {children}
    </Context.Provider>
}

export default Context