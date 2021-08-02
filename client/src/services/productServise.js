import api from './config/api'

async function getAllProducts(){
    const posts = await fetch(api.products)
    const data = await posts.json()
    return data
}
async function getLaptopById(laptopId){
    const res = await fetch(api.laptop+laptopId)
    const laptop = res.json()
    return laptop
}




export default {
    getAllProducts,
    getLaptopById
}