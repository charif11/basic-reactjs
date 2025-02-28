import React from 'react'

export default function Footer(props){
    return (
        <div className="text-center bg-dark text-light p-2">
            <h3>&copy; {props.name}</h3>
        </div>
    )
}