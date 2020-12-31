import React, { useEffect, useState } from 'react';

// match is the prop from the Link
function Item({match}) {

  const ItemStyle = {
    "backgroundColor": "gray"
  };

  const [item, setItem] = useState({
    item: {
      images: {}
    }
  });  

  useEffect(() => {
    const fetchItem = async () => {
      const url = `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`;        
      const response = await fetch(url);
      const result = await response.json();    
      setItem(result.data);    
    };

    fetchItem();
  }, [match.params.id]);
  

  return (
    <div className="item">
      <h1>Item</h1>
      <hr />
      {
        item ? (<div style={ItemStyle}>
          <h1>Name: {item.item.name}</h1>
          <h4>Description: {item.item.description}</h4>
          <img src={item.item.images.icon} alt="" />
        </div>) : ""
      }      
    </div>
  )
}

export default Item;
