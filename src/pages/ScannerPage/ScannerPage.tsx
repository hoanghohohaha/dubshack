import { margin } from '@mui/system';
import React, { useState } from 'react';
import withLayout from '../../layout/withLayout';

function ScannerPage() {
  const [file, setFile] = useState<any>();
  const [fruit, setFruit] = useState<any>();
  const [shelf_life, setShelfLife] = useState<any>();

  function onFileChange(fileChangeEvent) {
    setFile(fileChangeEvent.target.files[0])
  }

  async function submitForm() {
    let formData = new FormData();
    formData.append('imgF', file);

    try {
      const response = await fetch('http://localhost:1104/imgFile', { method: 'POST', body: formData });
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      let responseParse = await response.json();
      setFruit(responseParse.fruit);
      setShelfLife(responseParse.shelf_life);
      console.log(fruit);
      console.log(shelf_life);
    } catch (err) {
      console.log(err)
    }
  }

  return <div style={{ marginTop: 120 }}>This is scanner page
    <div style={{ marginTop: 60, marginBottom: 60 }}><input type="file" onChange={el => onFileChange(el)} /></div>
    <div><button color="primary" onClick={() => submitForm()}>Upload Single</button></div>
    {fruit && shelf_life && (<div>Your result is {fruit} at {shelf_life} freshness</div>)}
  </div>
}

export default withLayout(ScannerPage);