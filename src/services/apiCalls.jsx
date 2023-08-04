import axios from "axios";

const cards = 'https://api.magicthegathering.io/v1/cards'



export const bringOneCard = async(id)=>{
    const {data} = await axios.get(`${cards}/${id}`)
    return data.card
}



export const bringCardsByName = async(name,colors, page)=>{

    const nameParam = name!="" ? `&name=${name}` : ""
    const colorsParam = colors!="" ? `&colors=${colors}` : ""

    name.trim()
    const {data, headers} = await axios.get(`${cards}?page=${page}${nameParam}${colorsParam}`)
    // console.log('Data cards',data.cards)
    return {cards:data.cards, headers}
}


