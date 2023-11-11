import './App.css';
import { useState } from 'react';


function App() {
  const [inputUrl, setInputUrl] = useState("");
  const [isError, setIsError ] =useState("sssss");

  // get user input url
  const handleChange = (e) => {
    setInputUrl(e.target.value);
  }

// handle submit the url
const handleSubmit = (e) => {
  e.preventDefault();
  console.log(inputUrl);
  setInputUrl("");  
}




  return (
    <div className="app">
        <div className="container">
          <h2 className="title">URL Shortener</h2>
          <p className="short-description">You can short your long url</p>
          <form onSubmit={handleSubmit}>
            <label>Long URL</label>
            <input className={`${isError} ? 'error' :''`} onChange={handleChange} type="text" placeholder="htts://example.con" value={inputUrl} />
            <label>Slug (Optional)</label>
            <input  onChange={handleChange} type="text" placeholder="htts://example.con" value={inputUrl} />
            <button className='generate-url-btn'>Generate URL</button>
          </form>
          <div className="output-url">
            <label>Shorten URL</label>
            <div className="shorten-url">
              <p>htts://example.con</p>
              <button className='copy-url-btn'>Copy</button>
            </div>    
          </div>
        </div>
    </div>
  );
}

export default App;
