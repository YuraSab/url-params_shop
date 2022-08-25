import React, {useEffect, useState} from 'react';
import {Items} from "../../components/items";

const MainPage = () => {

  const [items, setItems] = useState([]);


  useEffect( () => {
    fetch(endUrl)
        .then(value => value.json())
        // .then(value => console.log(value))
        .then(value => setItems(value))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  const queries = {
    q: 'ipsum',
    _sort: 'title',
    _order: 'desc',
    _page: '1',
    _limit: '10'
  };

  const params = new URLSearchParams(queries);


  const baseUrl = 'https://jsonplaceholder.typicode.com';
  const postUrl = new URL('posts', baseUrl);

  postUrl.search = params.toString();
  // https://jsonplaceholder.typicode.com/posts?q=ipsum&_sort=title&_order=desc&_page=1&_limit=10
  // https://jsonplaceholder.typicode.com/posts?q=ipsum&_sort=title&_order=desc&_page=1&_limit=10

  const endUrl = postUrl.toString();
  //{/*{endUrl}*/}
  //{/*{postUrl.toString()} <br/> <br/><br/><br/>*/}




  return (
    <div>
      {
        <Items
            items = {items}
        />
      }
    </div>
  )
}

export {MainPage};