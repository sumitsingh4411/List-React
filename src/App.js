import axios from 'axios';
import { useEffect, useState } from 'react';
import List from './component/list/CustomList';
import Pagination from './component/pagination/Pagination';
import Header from "./component/Header/Header";
import Filter from './component/Filter/Filter';


function App() {
  // declare state 
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(7);
  const [name, setname] = useState(null);
  const [filter, setfilter] = useState(null);

  //fetching data using axios
  useEffect(() => {
    let url = 'https://www.breakingbadapi.com/api/characters'
    if (name) {
      url = url + '?name=' + name;
    }
    else if (filter) {
      url = url + '?category=' + filter;
    }
    axios.get(url).then((response) => {
      setData(response.data);
    }).catch((err) => {
      console.log(err);
    })
  }, [name, filter]);


  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);


  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <>
      <Header />
      <Filter findname={setname} findfilter={setfilter} />
      <List data={currentPosts} paginate={currentPage} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={data.length}
        paginate={paginate}
      />
    </>
  );
}

export default App;
