import { ItemProps } from "../Search/Search.interface";




export interface HeaderProps {
    searchAutocomplete: ItemProps[];
    handleTheme: () => void;
    isDarktheme: boolean;
}