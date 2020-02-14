const axios = require('axios');

export const signIn = (state) =>dispatch=>{
    console.log(state);
    
    return axios.post('http://localhost:8080/api/user/signin',JSON.stringify(state),{headers: {
        'Content-Type': 'application/json',
    }})
    .then((response)=>console.log(response))
}