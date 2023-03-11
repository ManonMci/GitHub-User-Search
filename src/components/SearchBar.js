import './styles/SearchBar.css';
import loupe from '../assets/icon-search.svg';


export default function Search() {
    const searchButton = document.getElementById('searchButton');
    //searchButton.addEventListener('click', Search());

    /*const searchInput = document.getElementById('searchInput');
    const searchValue = searchInput.value;*/


    return (
      <div className="searchBar">
        <img alt="icone de loupe" src={loupe} />
        <input placeholder="Search username.." value=""></input>
        <button type="submit" name="searchButton">Search</button>
      </div>
    )
};
