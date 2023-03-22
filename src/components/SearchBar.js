import "./styles/SearchBar.css";
import React, {useState, useEffect} from 'react';
import loupe from '../assets/icon-search.svg';


export function Search() {
  const [searchData, setSearchData] = useState({userName:""});

  const [data, setData] = useState({});
  useEffect(() => {
      async function fetchDataGit(){
          try{
              // destructuration de l'objet
              const response = await fetch(`https://api.github.com/users/${searchData.userName}`);
              const data = await response.json();
              setData(data);
              console.log(data);
              console.log(response);
          } catch (error){
              console.error(error);
          }
      }
      fetchDataGit();
      // permet l'ajout de la valeur au tableau de dependance
  }, [searchData.userName]);

  //const [searchData, setSearchData] = useState({userName:""});

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(searchData);
  }


  const handleChange = (event) => {
    const { name, value } = event.target;
    setSearchData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

    return (
      data &&
      <div className="searchBar">
        <form onSubmit={handleSubmit}>
          <img className="img-search" alt="icone de loupe" src={loupe} />
          <input 
            type="text" 
            name="userName"
            value={searchData.userName}
            onChange={handleChange} 
            placeholder="Search GitHub username.."
          />
          <button type="submit">Search</button>
        </form>
      </div>
    )
};
export default Search;