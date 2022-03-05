import axios from 'axios'

// eslint-disable-next-line no-unused-expressions

axios.get('http://localhost:3000/now/ProductDetail/')
    .then((Response) => {console.log(Response.data)})
    .catch((Error) =>{console.log(Error)} )