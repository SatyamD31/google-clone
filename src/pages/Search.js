import React, {useState} from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Search({ hideButtons=false }) {
    const [{}, dispatch] = useStateValue();

    // keeping track of user input in the search box
    const [input, setInput] = useState('')
    const history = useHistory();           // provides us the browser's history

    const search = (e) => {
        e.preventDefault();

        // dispatch an action of the type...
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input     // track the input term
        })

        history.push('/search')             // push the search query results' page to history
    }

    return (
        <form className="search">
            <div className='search__input'>
                <SearchIcon className="search__inputIcon" />
                <input autoFocus value={input} onChange={e => setInput(e.target.value)} />
                <MicIcon />
            </div>

            {/* if hideButtons prop is passed, buttons will be present, but hidden, hence, enter key to search will work */}
            {!hideButtons ? (
                <div className="search__buttons">
                    <Button type="submit" variant="outlined" onClick={search}>Google Search</Button>
                    <Button variant="outlined">I'm Feeling Lucky</Button>
                </div>
            ): (
                <div className="search__buttons">
                    <Button className="search__buttonsHidden" type="submit" variant="outlined" onClick={search}>Google Search</Button>
                    <Button className="search__buttonsHidden" variant="outlined">I'm Feeling Lucky</Button>
                </div>
            )}
        </form>
    );
    
}

export default Search
