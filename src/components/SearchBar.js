import "./styles/SearchBar.css";
import React, {useState, useEffect} from 'react';
import loupe from '../assets/icon-search.svg';
import Card from '../components/Card';

export function Search() {
  const [searchData, setSearchData] = useState({userName:"octocat"});
  const [data, setData] = useState({});
  //console.log(searchData)
  //console.log(data)

   useEffect(() => {
       async function fetchDataGit(){
           try{
              const response = await fetch(`https://api.github.com/users/${searchData.userName}`);
              const data = await response.json();
              setData(data);
              //console.log(data);
              //console.log(response);
           } catch (error){
               console.error(error);
           }
       }
       fetchDataGit();
       // permet l'ajout de la valeur au tableau de dependance apres execution de la requete
   }, [searchData.userName]);


   const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(searchData);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSearchData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

return (
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
        </form>
        <Card 
          data = {data}
        />
      </div>
    )
};
export default Search;