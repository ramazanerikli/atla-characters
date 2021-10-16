import React from 'react';

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
        <div className="characters-container">
          {characters.map(character => (
            <div key={character._id} className="card">
            <span className={setNationSymbol(character.affiliation)}></span> 
              <img src={character.photoUrl} alt="avatar" />
              <p><strong>Name:</strong> {character.name}</p>
              <p><strong>Afilliation:</strong> {character.affiliation}</p>
              <p><strong>Allies:</strong> {character.allies}</p>
              <p><strong>Enemies:</strong> {character.enemies}</p>
            </div>
          ))}
      </div>
    )
}

export default Characters;