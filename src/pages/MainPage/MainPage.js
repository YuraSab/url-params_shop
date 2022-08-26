import React, {useEffect, useState} from 'react';
import {Items} from "../../components/items";

const MainPage = () => {

    const [items, setItems] = useState([]);
    const [searchWord, setSearchWord] = useState('');
    // const [pageNumber, setPageNumber] = useState(2);
    // const pn = pageNumber.toString();

    const [sortType, setSortType] = useState('inc');



    useEffect(() => {
        fetch(endUrl)
            .then(value => value.json())
            // .then(value => console.log(value))
            .then(value => setItems(value))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchWord, sortType]);


    const queries = {
        q: searchWord,
        _sort: 'title',
        _order: sortType,
        // _page: '1',
        // _limit: '10'
    };
    // debugger;

    const params = new URLSearchParams(queries);


    const baseUrl = 'https://jsonplaceholder.typicode.com';
    const postUrl = new URL('posts', baseUrl);

    postUrl.search = params.toString();
    // https://jsonplaceholder.typicode.com/posts?q=ipsum&_sort=title&_order=desc&_page=1&_limit=10
    // https://jsonplaceholder.typicode.com/posts?q=ipsum&_sort=title&_order=desc&_page=1&_limit=10

    const endUrl = postUrl.toString();

    // console.log(postUrl);

    //{/*{endUrl}*/}
    //{/*{postUrl.toString()} <br/> <br/><br/><br/>*/}

    const searchRef = React.createRef();

    const changedSearchWord = (e) => {
        console.log(e);
        const eValue = e.target.value;
        // setSearchWord(eValue);
        setSearchWord(eValue);
    }






    const changeSortType = (e) => {
        e.preventDefault();
        if (sortType == 'desc'){
            setSortType('inc')
        }else {
            setSortType('desc')
        }
    }



    return (
        <div>
                <form>
                    <label>Search</label>
                    {/*<input ref={searchRef} onChange={(e)=> changedSearchWord(e)} />*/}
                    <input ref={searchRef} onChange={changedSearchWord} />

                    <button onClick={changeSortType}>{sortType === 'inc' ? 'Inc' : 'Desc'}</button>
                </form>




                <Items
                    items={items}
                />

        </div>
    )
}

export {MainPage};