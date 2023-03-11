import React, { useEffect, useState } from 'react'
import {Search} from '../components/SearchBar';
//const search = Search();
//${searchValue};

export function Api(){
    const [data, setData] = useState({});
   
    useEffect(() => {
        async function fetchDataGit(){
            try{
                const response = await fetch('https://api.github.com/users/ManonMci');
                //${user.name}
                const data = await response.json();
                setData(data);
                console.log(data);
            } catch (error){
                console.error(error);
            }
        }
        fetchDataGit();
    }, []);

    return data;
}

   
