import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from '../components/Button/ArrowLeft';



const NotePage = ({ match, history }) => {
    const { id } = useParams()
    let [note, setNote] = useState(null)

    useEffect(() => {
        getNote()

    }, [id])

    let getNote = async () => {
        let response = await fetch(`http://127.0.0.1:8000/notes/${id}`)
        let data = await response.json()
        console.log(data)
        setNote(data)

    }
    let updateNote = async () => {
        fetch(`http://127.0.0.1:8000/notes/${id}/`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })

    }

    let handleChange = (value) => {
        setNote(note => ({ ...note, 'body': value }))
        console.log('Handle Change:', note)
    }

    let handleSubmit = () => {
        console.log('NOTE:', note)
        updateNote()
   
    }

        return (

            <div className="note card w-96 bg-primary text-primary-content  ">
                <h1>Note#{note?.id}</h1>

                <div className="">
                    <h3>
                        <div onClick={handleSubmit}>
                            <ArrowLeft />
                        </div>
                    </h3>
                </div>

                <textarea onChange={(e) => handleChange(e.target.value)} value={note?.body} />

                <div className="card-actions justify-end">
                    <button className="btn">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                            <title>add</title>
                            <path d="M16.943 0.943h-1.885v14.115h-14.115v1.885h14.115v14.115h1.885v-14.115h14.115v-1.885h-14.115v-14.115z"></path>
                        </svg>

                    </button>
                </div>
            </div>

        )

    }


export default NotePage