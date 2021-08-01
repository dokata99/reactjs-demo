import api from './config/api'

async function getAllProducts(){
    const posts = await fetch(api.products)
    const data = await posts.json()
    return data
}




export default {
    getAllProducts
}