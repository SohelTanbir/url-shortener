import './App.css';
import { useState } from 'react';


function App() {
  const [inputUrl, setInputUrl] = useState("");

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
            <input onChange={handleChange} type="text" placeholder="htts://example.con" value={inputUrl} />
            <button>Generate Url</button>
          </form>
        </div>
    </div>
  );
}

export default App;
