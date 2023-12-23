import Axios from 'axios';
const httpClient = Axios.create({
    baseURL:"https://bikes.vineshgoyal.online/api/v1",
    // headers:{
    //     "X-Custom-Header":'ABC'
    // }
})
export default httpClient;