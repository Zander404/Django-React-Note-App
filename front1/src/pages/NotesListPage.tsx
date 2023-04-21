import React, { useState, useEffect } from 'react'
import ListNotes from '../components/Notes/ListNotes'
import { AddButton } from '../components/Button/AddButton'

export const NotesListPage = () => {
    let [notes, setNotes] = useState([])

    useEffect(() => {
        getNotes()

    }, [])
    let getNotes = async () => {
        let response = await fetch("http://127.0.0.1:8000/api/notes/")
        let data = await response.json()
        setNotes(data)
    }

    return (

        <div className={'mt-24 content-center'}>
            <div className="p-5 bg-primary shadow-md rounded-lg outline-accent shadow-slate-800  w-96">
                <h1 className="text-2xl font-bold mb-4">Bloco de Notas</h1>

                <div className={'note-list text-black'}>
                {notes.map((note, index) => [
                    <ListNotes key={index} note={note} />
                ])}
            </div>
                <div className={'flex justify-end'}>
                    <button className={"btn bg-secondary shadow-md hover:bg-accent shadow-slate-800"}>
                        <AddButton />
                    </button>
                </div>

            </div>





        </div>

    )
}
