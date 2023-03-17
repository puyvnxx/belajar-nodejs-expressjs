import axios from "axios"
// import {error} from "winston";
axiosRequest
    .get('http://www.boredapi.com/api/activity/')
.then(response =>{
    console.log(`You Can ${response.data.activity}`)
})
.catch(error=>{

})