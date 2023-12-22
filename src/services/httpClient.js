import Axios from 'axios';
const httpClient = Axios.create({
    baseURL:"https://vineshgoyal.online/bikes/api/v1",
    // headers:{
    //     "X-Custom-Header":'ABC'
    // }
})
export default httpClient;