import Axios from 'axios'

const apiUrl : string = process.env.REACT_APP_SMARKETS_API_URL as string
const Instance = Axios.create({
    baseURL: `${apiUrl}/v3/`,
});

export default Instance;
