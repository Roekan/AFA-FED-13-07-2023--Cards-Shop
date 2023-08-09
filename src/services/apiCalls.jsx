import axios from "axios";

const cards = 'https://api.magicthegathering.io/v1/cards'

const API_URL = "http://localhost:3000";



export const bringCardsByName = async(name,colors, page)=>{

    const nameParam = name!="" ? `&name=${name}` : ""
    const colorsParam = name!="" ? `&colors=${colors}` : ""

    name.trim()
    const {data, headers} = await axios.get(`${cards}?page=${page}${nameParam}${colorsParam}`)
    // console.log('Data cards',data.cards)
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
    let { data } = await axios.get(`${API_URL}/users/${id}`);
    return data;
}
export const updateUser = async (user) => {
    let { data } = await axios.put(`${API_URL}/users/${user.id}`, user);
    return data;
}
