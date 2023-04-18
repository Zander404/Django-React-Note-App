import React, {useState, useEffect} from 'react'
import ListNotes from '../components/Notes/ListNotes'

export const NotesListPage = () => {
    let [notes,setNotes] = useState([])

    useEffect(() =>{
        getNotes()

    }, [])
    let getNotes = async() => {
        let response = await fetch("http://127.0.0.1:8000/notes/")
        let data = await response.json()
        console.log(data)
        setNotes(data)
    }

  return (
    
    <div>
        <div className={'note-list'}>
            {notes.map((note,index)=>[
                <ListNotes key={index} note={note} />
            ])}
        </div>
        
    </div>
    
  )
}
