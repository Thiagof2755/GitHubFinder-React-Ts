import { useState, KeyboardEvent } from "react";
import { BsSearch } from "react-icons/bs"
import Style from "./Search.module.scss"; 

type SearchProps = {
    loadUser: (userName: string) => Promise<void>;
}

const Search = ({ loadUser }: SearchProps) => {

    const [userName, setUserName] = useState("");

    const handleKeyDowm = (e:KeyboardEvent) => {
        if (e.key === "Enter"){
            loadUser(userName)
        }
    }

    return (
        <div className={Style.SearchContainer}>
            <h2>Busque por um novo usuário</h2>
            <p>Conheça seus melhores repositorios</p>
            <div className={Style.SearchBar}>
                <input type="text" placeholder="Digite o nome do Usuário" 
                onChange={(e) => setUserName(e.target.value)}
                onKeyDown={handleKeyDowm} 
                />
                <button onClick={() => loadUser(userName)}>
                    <BsSearch />
                </button>
            </div>
        </div>
    )
}

export default Search