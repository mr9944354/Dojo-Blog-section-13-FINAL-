import Blogslist from './Blogslist';
import useFetch from './usefetch';

function Home() {
  const { error, isspending, data: blogs } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isspending && <div>Loading...</div> }
      { blogs && <Blogslist blogs={blogs} /> }
    </div>
  );
}

export default Home;