import React from "react";
import '../index.css';

const Book=props=>
{
    return (
        <div className='book' key={props.index} >
                        
            <h3>Book {props.index + 1}</h3>
            <h2 className='title'>{props.name}</h2>
            <div className='details'>
                <ol><i className="user icon"></i> : {props.authors.join(', ')}  </ol>
                <ol> <i className="file icon"></i> : {props.numberOfPages}Pages</ol>
                <ol><i className="home icon"></i> : {props.country}</ol>
                <ol> <i className="clock icon"></i> : {new Date(props.released).toDateString()}</ol>
            </div>
        
        </div>
    
    );
}
export default Book;