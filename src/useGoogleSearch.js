import { useState, useEffect } from 'react';
import API_KEY from './keys';

const CONTEXT_KEY = "03fee65038e866116";           // tells google which search engine to use

// creating a custom hook================================================================
const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        // need to do async fetch and it's done by...
        const fetchData = async() => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
            .then(response => response.json())
            .then(result => {
                setData(result)
            })
        }
        fetchData();
    }, [term])                  // term is the search query, which is a data layer variable

    return { data }
};

export default useGoogleSearch
