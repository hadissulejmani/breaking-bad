import React from 'react'
import Spinner from '../ui/Spinner'
import CharacterItem from './CharacterItem'

const CharacterGrid = ({ items, isLoading}) => {
    return isLoading ? (
        <Spinner />
        ) : <section className="cards"> 
        {items.map(i => (
            <CharacterItem key={i.char_id} item={i}></CharacterItem>   
        ))}
    </section>
}

export default CharacterGrid
