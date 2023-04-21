import React from 'react'
import { Link } from 'react-router-dom'

export default function ListNotes({note}:any) {
  return (
    <Link to={`/note/${note.id}`}>
        <div className={" bg-secondary antialiased outline shadow-md hover:bg-accent rounded-xl p-3 m-3 h-min-[4em] max-h-full"}>
            <h3>{note.body}</h3>
        </div>

    </Link>
  )
}
