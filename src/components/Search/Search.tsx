import React, { useState, useEffect, useRef } from "react";
import { SearchProps, ItemProps } from "./Search.interface";
import styles from  './Search.module.css'

const Search: React.FC<SearchProps> = ({ searchAutocomplete }) => {
  
  const [inputClicked, setInputClicked] = useState<boolean>(false);

  const [searchText, setSearchText] = useState<string>('')

  const [filtredItems, setFilteredItems] = useState<ItemProps[]>([])

  const inputRef = useRef<HTMLInputElement | null>(null);

  

  const onInputClick = () => {
    if(!searchText){
      setInputClicked(true)
      const items = searchAutocomplete.sort((a, b)=> b.rating - a.rating).slice(0, 3)
      setFilteredItems(items)
    }
  }

  const handleSearch = (text: string) => {
    setInputClicked(false)
    const filtred = searchAutocomplete.filter((item)=>{
      return  item.text.toLowerCase().includes(text.toLowerCase())
  }).sort((a, b)=> b.rating - a.rating)
    setFilteredItems(filtred) 
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
    setInputClicked(false)
    const text = event.target.value;
    setSearchText(text)
    handleSearch(text)
  }

  const handleSelectedItem = (item: ItemProps) => {
    setInputClicked(false)
    setSearchText(item.text)
    setFilteredItems([])
  }

  // const handleDocumentClick = (e: MouseEvent) => {
  //   if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
  //     // Click occurred outside the input, so blur the input
  //     inputRef.current.blur();
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener('click', handleDocumentClick);

    
  //   return () => {
  //     document.removeEventListener('click', handleDocumentClick);
  //   };
  // }, []);

  
  

  return (
    <div>
      <input 
        ref={inputRef}
        type="text" 
        onChange={handleInputChange}
        value={searchText}
        onClick={onInputClick}

      />
      <button>Search</button>
       {(searchText || inputClicked) && Object.keys(filtredItems).length ?
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
      </div>: null
       }
        

    </div>
    
  );
};

export default Search;
