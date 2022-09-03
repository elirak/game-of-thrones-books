import React from 'react';
import FetchBooks from './FetchBooks';
import '../index.css';



const App = () => {
   
   

    return (
        <div className='App'>
            <h1>Game of Thrones Books</h1>
            <h4>Fetch a list from an API and display it</h4>            
            <FetchBooks/>
                       
        </div>
    );
}

export default App;
