import React, { useState } from "react";
import { SearchProps } from "./Search.interface";
import styles from './Search.module.css'

const Search: React.FC<SearchProps> = ({ searchAutocomplete }) => {
  
  const [inputClicked, setInputClicked] = useState(false);

  const onInputClick = () => {
    setInputClicked(!inputClicked)
  }

  
  
  return (
    <div>
      <input type="text" onClick={onInputClick}/>
      <button>Search</button>
      {
        inputClicked ? 
        <div className={styles.searchItems}>
          <ul>
            <li>H</li>
            <li>H</li>
            <li>H</li>

            {/* {
              searchAutocomplete.map((n)=>{
                return(
                    <li classname = >{n.text}</li>
                )   
            })
        
            } */}
              
                
            
          </ul>
        </div>: null
      }

    </div>
    
  );
};

export default Search;
