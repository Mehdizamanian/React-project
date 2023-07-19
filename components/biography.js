import React, { useState } from 'react';
const Biography = () => {

    const [lists, setlist] = useState([
        {
            title: "books"
        },
        {
            title: "movies"
        }
    ])

    return (  
        <div>
            {lists.map(list=><li>{list.title}</li>)}
        </div>


    );
}

export default Biography;
