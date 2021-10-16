import React, { useState, useEffect } from 'react';
import ReactPaginate from "react-paginate";
import "./App.css";
import Header from './components/Header';
import Characters from './components/Characters';


const App = () => {
  const [characters, setCharacters] = useState([]);
  const [pageCount, setpageCount] = useState(0);

  let limit = 10;

  useEffect(() => {
    const getCharacters = async () => {
      const res = await fetch(
          `https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=${limit}&page=1`
      );
      const data = await res.json();
      setpageCount(Math.ceil(500 / limit));
      setCharacters(data);
    };

    getCharacters();
  }, [limit]);

  const fetchCharacters = async (currentPage) => {
    const res = await fetch(
      `https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=${limit}&page=${currentPage}`
    );
    const data = await res.json();
    return data;
  };

  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;

    const charactersFromServer = await fetchCharacters(currentPage);
    setCharacters(charactersFromServer);
        window.scrollTo(0, 0)
  };



  return (
    <div className="container">
      <Header />
      
      <Characters 
        characters={characters} 
      />

      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
}

export default App;
