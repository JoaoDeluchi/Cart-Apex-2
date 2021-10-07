import api from "."

export const getAllProducts = () => {
    return api.get('/products')
}