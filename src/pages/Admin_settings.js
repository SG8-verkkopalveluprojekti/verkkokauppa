/**admin osio */
import React from 'react'
//import {effect, signal} from '@preact/signals-react';
import axios from 'axios'
import {useEffect, useState} from 'react'


export const Admin = () => {
  
  const[file, setFile] = useState();
  const [category, setCategory] = useState('');
  const [imgurl, setImgurl] = useState();

  function sendImage() {
    const params = {
      pic: file,
      category: category
    }

    axios.postForm('http://localhost:3001/image', params)
    .then(resp => setImgurl(resp.data.imageUrl))
    .catch(err => console.log(err.message))
  }


  return (
    <div>
      <input type='file' onChange={e=> setFile (e.target.files[0])}/>
      <input value={category} onChange={e => setCategory(e.target.value)}/>
      <button onClick={sendImage}>Add photo</button><br/><br/>
      {imgurl && <img src={'http://localhost:3001/'+imgurl} height={100}/>}
    </div>
  )
};