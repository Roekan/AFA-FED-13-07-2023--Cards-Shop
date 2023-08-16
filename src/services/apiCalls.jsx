import axios from "axios";

// axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*'
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'

const cards = 'https://api.magicthegathering.io/v1/cards'

const API_URL = "https://json-server-vercel-template.vercel.app";



export const bringCardsByName = async(name,colors, page)=>{

    const nameParam = name!="" ? `&name=${name}` : ""
    const colorsParam = name!="" ? `&colors=${colors}` : ""

    name.trim()
    const {data, headers} = await axios.get(`${cards}?page=${page}${nameParam}${colorsParam}`)
    return {cards:data.cards, headers}
}

export const register = async (body) => {
    let { data } = await axios.post(`${API_URL}/users`, body);
    return data;
}
export const users = async () => {
    let { data } = await axios.get(`${API_URL}/users`);
    return data;
}
export const user = async (id) => {
    let { data } = await axios.get(`${API_URL}/users/${id}`, {headers:{
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Credentials': 'true' },
    'Access-Control-Allow-Origin': '' },
    'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
    'Access-Control-Allow-Headers': 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version' }
    }});
    return data;
}
export const updateUser = async (user) => {
    let { data } = await axios.put(`${API_URL}/users/${user.id}`, user);
    return data;
}
