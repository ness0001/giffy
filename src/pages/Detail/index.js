import React from 'react';

export default function Detail({params}){
    console.log(params.id)
    return <h1>GIG con id {params.id}</h1>
}