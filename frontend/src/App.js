import './App.css';
import React, { useEffect, useState } from 'react';
import Loader from './components/Loader/Loader';


function App() {
  const [inputUrl, setInputUrl] = useState({
    url:'',
    slug:''
  });
  const [shortenUrl, setShortenUrl ] = useState("");
  const [isError, setIsError ] =useState("");
  const [loader, setLoader] = useState(false);

  // get user input url
  const handleChange = (e) => {
    const newUrl = {...inputUrl};
    newUrl[e.target.name] = e.target.value;
    setInputUrl(newUrl);
  }

// handle submit the url
  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!inputUrl.url){
      alert("Please Enter Your URL");
      return;
    }
    setLoader(true);
  const response = await fetch('http://localhost:5000/url/shortener', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(inputUrl)
  });
  const {success,  message, shortUrl} = await response.json();
  if(!success){
    setLoader(false);
    alert(message);
    return
  }
  setLoader(false);
  alert(message);
  setShortenUrl(shortUrl);
  //save shorten url to local storage
  localStorage.setItem('shortenUrl', shortUrl);
    setInputUrl({
      url:'',
      slug:'',
    })
  }

  useEffect(()=>{
    const url = localStorage.getItem('shortenUrl');
    setShortenUrl(url);
  }, [])

  
  return (
    <>
        <div className="container">
          <h2 className="title">URL Shortener</h2>
          <p className="short-description">You can short your long url</p>
          <form onSubmit={handleSubmit}>
            <label>Long URL</label>
            <input className={`${isError ? 'error':''}`} onChange={handleChange} type="text" name='url' placeholder="htts://example.con" value={inputUrl.url} />
            <label>Slug (Optional)</label>
            <input  onChange={handleChange} type="text" name='slug' placeholder="slug" value={inputUrl.slug} />
            <button className='generate-url-btn'>Generate URL</button>
          </form>
          { shortenUrl&&
          <div className="output-url">
            <label>Shorten URL</label>
            <div className="shorten-url">
              <p>{shortenUrl}</p>
              <button className='copy-url-btn'>Copy</button>
            </div>    
      </div>
 }
    </div>
    {
      loader && <Loader/>
    }
</>
  );
}

export default App;
