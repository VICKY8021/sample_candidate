import SearchBar from "material-ui-search-bar";
import React, { useState } from "react";
import './Search.scss';

const Search: React.FC = () => {
    const [firstName, setFirstName] = useState("");
    function handleChange(name: string) {
        console.log('value of name ', name)
        setFirstName(name)
    }
    return (
        <div className="searchbar_main">
            <SearchBar
                value={firstName}
                onChange={(fname => handleChange(fname))}
                className="search_bar"
                placeholder="search pancard number"
            />
        </div>
    )
}
export default Search;