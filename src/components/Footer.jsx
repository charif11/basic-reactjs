import React from 'react'

export default function Footer(props){
    return (
        <div className="text-center bg-dark text-light p-3">
            <h2>&copy; {props.name}</h2>
        </div>
    )
}