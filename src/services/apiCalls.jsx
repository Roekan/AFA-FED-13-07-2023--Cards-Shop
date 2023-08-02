import axios from "axios";

const cards = 'https://api.magicthegathering.io/v1/cards'





export const bringCardsPagination = async(page)=>{
    
    // console.log(data.cards)
    const url=`${cards}?page=${page}`;

    const options = {
        method: 'GET',
        headers: {
            'Page-Size': 10,
            Count:3,
            'Total-Count':10
        }
      };

      const {data} = await axios.request(url, options)


    return data.cards
}

export const bringCardsByName = async(name)=>{
    name.trim()
    const {data} = await axios.get(`${cards}?name=${name}`)
    // console.log('bringCardsByName', data)
    // console.log(`Name: ${name}`)
    // console.log(`${cards}?name=${name}`)
    return data.cards
}

// export const bringCardsByColor = async(color)=>{
//     const {data} = await axios.get(`${cards}?colors=${color}`)
//     console.log(color)
//     console.log('bringCardsByColor', data)
//     return data.cards
// }

