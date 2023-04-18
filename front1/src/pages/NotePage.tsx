import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from '../components/Button/ArrowLeft';



const NotePage = ({ history }:any) => {
    const { id } = useParams()
    let [note, setNote]:any = useState("")

    useEffect(() => {
        getNote()

    }, [id])

    let getNote = async () => {
        if (id === 'new') return

        let response = await fetch(`http://127.0.0.1:8000/api/notes/${id}`)
        let data = await response.json()
        console.log(data)
        setNote(data)

    }
    let createNote = async () => {
        fetch(`http://127.0.0.1:8000/api/notes/`, {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(note)
        })
    }

    let updateNote = async () => {
        fetch(`http://127.0.0.1:8000/api/notes/${id}/`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })

    }
    let deleteNote = async () => {
        fetch(`http://127.0.0.1:8000/api/notes/${id}/`, {
            method: 'DELETE',
            'headers': {
                'Content-Type': 'application/json'
            }
        })
    }

    let handleChange = (value:any) => {
        setNote((note: any) => ({ ...note, 'body': value }))
        console.log('Handle Change:', note)
    }

    let handleSubmit = () => {
        console.log('NOTE:', note)
        if (id == 'new' && note?.body !== null) {
            createNote()
        } else if (id !== "new") {
            updateNote()
        }

    }

    return (

        <div className="note card w-96 bg-primary text-primary-content  ">
            <h1>Note#{note?.id}</h1>

            <div className="">
                <h3>
                    <Link to="/">
                        <div onClick={handleSubmit}>
                            <ArrowLeft />
                        </div>
                    </Link>
                </h3>
                {id !== 'new' ? (
                    <Link to="/">
                        <button className='btn' onClick={deleteNote}>Delete</button>
                    </Link>
                ) : (
                    <Link to="/">
                        <button className='btn' onClick={handleSubmit}>Done</button>
                    </Link>
                )}
            </div>

            <textarea onChange={(e) => handleChange(e.target.value)} value={note?.body} />

            <div className="card-actions justify-end">
            </div>
        </div>

    )

}


export default NotePage