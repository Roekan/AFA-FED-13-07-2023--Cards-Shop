import axios from "axios";

const cards = 'https://api.magicthegathering.io/v1/cards'





export const bringCardsPagination = async(page)=>{
    const {data, headers} = await axios.get(`${cards}?page=${page}`)
    return {cards:data.cards, headers}
}


export const bringCardsByName = async(name, page)=>{
    name.trim()
    const {data, headers} = await axios.get(`${cards}?page=${page}&name=${name}`)
     console.log('Headers!!!!!!!!!!!!!!!!', headers)
    return {cards:data.cards, headers}
}

// export const bringCardsByColor = async(color)=>{
//     const {data} = await axios.get(`${cards}?colors=${color}`)
//     console.log(color)
//     console.log('bringCardsByColor', data)
//     return data.cards
// }

