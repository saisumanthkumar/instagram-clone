import React from 'react';
import Post from './Posts';

export default function Home({data}) {
    return (
        <div className="home-container">
        {
            data.map((item) => <Post item={item} key={item.caption}/>)
        }
        </div>
    )
}
