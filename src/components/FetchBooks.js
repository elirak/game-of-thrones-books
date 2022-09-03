import React ,{ useMemo,useState} from 'react';
import Spinner from './Spinner';
import Book from '../components/Book';
import '../index.css';

const URL = 'https://www.anapioficeandfire.com/api/books?pageSize=30';

const FetchBooks=()=>{
    
 
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [sortType, setSortType] = useState("descending");

    const sortedData = useMemo(() => {
      let result = data;
  
      if (sortType === "descending") {
        result = [...data].sort((a, b) => {
          return b.released.localeCompare(a.released);
        });
      } else if (sortType === "ascending") {
        result = [...data].sort((a, b) => {
          return a.released.localeCompare(b.released);
        });
      } 
  
      return result;
    }, [data, sortType]);
  

  
    const fetchData = async () => {
        setIsLoading(true);
      const response = await fetch(URL);
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    };

    const renderedBooks= (
        <div>
            <div >
                <select className="ui dropdown"
                    defaultValue="descending"
                    onChange={(e) => setSortType(e.target.value)}>
                    <option disabled value="descending">
                        Sort by
                    </option>
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                </select>
            </div>
            <div className='books'>
                {sortedData.map((book, index) => {
                    return (
                
                        <Book key={index}
                            index={index}
                            name={book.name}
                            authors={book.authors}
                            numberOfPages={book.numberOfPages}
                            country={book.country}
                            released={book.released}
                        />
                    );
                })}   

            </div>
        </div>
    );

    return(
        <div>
            {isLoading ? <Spinner/> :''}
            <div>
                <button onClick={fetchData} disabled={isLoading}  className="fetch-button">FetchData </button>     
                {renderedBooks }         
            </div>
            
        </div>
    )

}
export default FetchBooks;
