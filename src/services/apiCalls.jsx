import axios from "axios";

const cards = 'https://api.magicthegathering.io/v1/cards'



export const bringCards = async()=>{
    const {data} = await axios.get(cards)
    // console.log(data.cards)
    return data.cards
}

// export const bringCardsPage = async(page)=>{
//     const {data} = await axios.get(`${cards}?page=${page}`)
//     console.log(data)
//     return data
// }