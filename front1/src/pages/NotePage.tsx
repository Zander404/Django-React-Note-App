import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from '../components/Button/ArrowLeft';



const NotePage = ({ history }: any) => {
    const { id } = useParams()
    let [note, setNote]: any = useState("")

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

    let handleChange = (value: any) => {
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

        <div className="mt-24 mx-2 px-8 text-black note card w-[32rem] h-full bg-primary outline-accent shadow-slate-700">
            <h3 className={"my-3 w-12 justify-center px-2"}>
                <Link to="/">
                    <button className={' btn bg-secondary shadow-md hover:bg-accent shadow-slate-800'} onClick={handleSubmit}>
                        <ArrowLeft />
                    </button>
                </Link>
            </h3>
            <h1 className={' font-serif font-xs font-bold mx-4 py-3 text-bold'}>Nota: {note?.id}</h1>

            <textarea className={'justify-center px-4 mx-2 bg-white outline rounded-md h-32 max-h-max min-w-max textarea textarea-bordered textarea-lg w-full'} onChange={(e) => handleChange(e.target.value)} value={note?.body} />


            <div className="flex justify-end ">

                {id !== 'new' ? (
                    <div className={'flex justify-between m-2 gap-2'}>
                        <Link to="/">
                            <button className={'btn bg-secondary shadow-md hover:bg-accent shadow-slate-800'} onClick={deleteNote}>Delete</button>
                        </Link>
                        <Link to="/">
                            <button className={'btn bg-secondary shadow-md hover:bg-accent shadow-slate-800'} onClick={handleSubmit}>Salvar</button>
                        </Link>
                    </div>

                ) : (
                    <div className={'flex justify-between m-2 gap-2'}>
                        <Link to="/">
                            <button className={'btn bg-secondary shadow-md hover:bg-accent shadow-slate-800'}>Cancelar</button>
                        </Link>
                        <Link to="/">
                            <button className='btn bg-secondary shadow-md hover:bg-accent shadow-slate-800' onClick={handleSubmit}>Salvar</button>
                        </Link>
                    </div>
                )}
            </div>
        </div>

    )

}


export default NotePage