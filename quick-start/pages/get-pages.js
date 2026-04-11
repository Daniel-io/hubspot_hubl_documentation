// https://developers.hubspot.com/docs/api-reference/cms-pages-v3/site-pages/get-cms-v3-pages-site-pages 
// node get-pages.js

const token = ""; //add token
const options = {method: 'GET', headers: {Authorization: `Bearer ${token}`}};

fetch('https://api.hubapi.com/cms/v3/pages/site-pages', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));