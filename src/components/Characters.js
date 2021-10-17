import React, { useState } from 'react';

const Characters = ({ characters }) => {

  const setNationSymbol = (nation) => {
    if (nation) {
      if(nation.includes('Fire')) {
        return 'fire'
      } else if (nation.includes('Water')) {
        return 'water'
      } else if (nation.includes('Earth')) {
        return 'earth'
      } else if (nation.includes('Air')) {
        return 'air'
      }
    }
    return 'no-nation'
  }
  
    return (
        <div className="row row-flex">
            {characters.map(character => (
              <div key={character._id} className="col-12 col-md-6 col-lg-3">
              <div className="card character-card">
              <span className={setNationSymbol(character.affiliation)}></span> 
                <img src={character.photoUrl} alt="avatar" />
                <p><strong>Name:</strong> {character.name}</p>
                <p><strong>Afilliation:</strong> {character.affiliation}</p>
                <p><strong>Allies:</strong> {character.allies}</p>
                <p><strong>Enemies:</strong> {character.enemies}</p>
              </div>
              </div>
            ))}
      </div>
    )
}

export default Characters;