import React from 'react';
import './ListItems.css';

function ListItems(props){
   
      const content = props.items.map((post) =>
        <div key={post.key} style={{    "display": "flex",
           
            "justify-content": "center",
            "align-items": "center","background": "cadetblue","margin-bottom":"1%","color":"white",
            "width": "100%","border-radius":"15px"}}>
         <input type="checkbox"  value={post.text}/>
          <h3 style={{"width": "80%",
    "margin-left": "3%"}}>{post.text}</h3>
        </div>
      );
      return (
        <div>
          {content}
          
        </div>
      );
    

   
  }

  export default ListItems;