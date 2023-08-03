import axios from "axios";

const cards = 'https://api.magicthegathering.io/v1/cards'



export const bringOneCard = async(id)=>{
    const {data} = await axios.get(`${cards}/${id}`)
    return data.card
}

export const bringCardsPagination = async(page)=>{
    const {data, headers} = await axios.get(`${cards}?page=${page}`)
    // console.log('Data cards',data.cards)
    return {cards:data.cards, headers}
}


export const bringCardsByName = async(name,colors, page)=>{
    name.trim()
    const {data, headers} = await axios.get(`${cards}?page=${page}&name=${name}&colors=${colors}`)
    // console.log('Data cards',data.cards)
    return {cards:data.cards, headers}
}


