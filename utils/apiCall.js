import axios from "axios";

export const baseUrl = 'https://hotels4.p.rapidapi.com'


export const apiCall = async (url) => {
    console.log(url);
    const { data } = await axios.get(
        (url), {
            headers: {
                'x-rapidapi-host': 'hotels4.p.rapidapi.com',
                'x-rapidapi-key': 'cc3a0ed9abmsh0775d573cb8c8ebp1ed28djsnc417fde48cac'
            }
        }
    )
    return data
}


