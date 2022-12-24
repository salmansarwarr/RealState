import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com"

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'c98e94404amshbb8fdb0feb4e64ep1e8e94jsn516c66c17964',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }        
    });

    return data;
}

// headers: {
//     'X-RapidAPI-Key': 'c98e94404amshbb8fdb0feb4e64ep1e8e94jsn516c66c17964',
//     'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
// }