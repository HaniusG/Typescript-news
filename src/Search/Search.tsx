import React, { useState } from "react";
import { SearchProps, ItemProps } from "./Search.interface";
import styles from  './Search.module.css'

const Search: React.FC<SearchProps> = ({ searchAutocomplete }) => {
  
  const [inputClicked, setInputClicked] = useState<boolean>(false);

  const [searchText, setSearchText] = useState<string>('')

  const [filtredItems, setFilteredItems] = useState<ItemProps[]>([])


  const onInputClick = () => {
    setInputClicked(!inputClicked)
    const items = searchAutocomplete.sort((a, b)=> b.rating - a.rating).slice(0, 3)
    if(!searchText){setFilteredItems(items)}
  }

  const handleSearch = (text: string) => {
    setInputClicked(false)
    
    const filtred = searchAutocomplete.filter((item)=>{
      return  item.text.toLowerCase().includes(text.toLowerCase())
  }).sort((a, b)=> b.rating - a.rating)

    setFilteredItems(filtred)
    
  }

  const handleInpitChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
    setInputClicked(false)
    const text = event.target.value;
    setSearchText(text)
    handleSearch(text)
  }

  const handleSelectedItem = (item: ItemProps) => {
    setSearchText(item.text)
    setFilteredItems([])

  }
  
  return (
    <div>
      <input 
        type="text" 
        onChange={handleInpitChange}
        value={searchText}
        onClick={onInputClick}

      />
      <button>Search</button>
       
        <div className={styles.searchItems}>
          <ul className={styles.searchUl}>
            {
              filtredItems.map((item)=>{
                return(
                    <li onClick={()=>handleSelectedItem(item)} key = {item.text} className={styles.searchLi} >
                      {item.text}/{item.rating}
                    </li>
                )   
            })
          }

          </ul>
        </div>

    </div>
    
  );
};

export default Search;
