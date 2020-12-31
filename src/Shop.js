import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Shop() {
  const [items, setItems] = useState(null);  

  useEffect(() => {
    /*fetch('https://fortnite-api.theapinetwork.com/store/get')
      .then((response) => response.json())
      .then((result) => {
        console.log(result.data);
        setItems(result.data)          
        setIsFetchingData(false);
      });*/
    const fetchItems = async () => {
      const response = await fetch('https://fortnite-public-api.theapinetwork.com/store/get');
      const result = await response.json();      
      setItems(result.data);         
    };
    
    fetchItems();
  }, []);    

  return (
    <div>
      <h1>Shop Page</h1>
      <hr />
      {
        items?.map(ele => (
          <h1 key={ele.itemId}>
            <Link to={`/shop/${ele.itemId}`}>
              {ele.item.name}
            </Link>
          </h1>
        ))
      }
    </div>
  )
}

export default Shop;
