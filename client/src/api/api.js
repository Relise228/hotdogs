import axios from "axios";

const instance = axios.create({
    baseURL: "/"
})

export const hotAPI = {
    getHotDogs: () => instance.get('').then(response => response.data),
    updateHotDog: (id, img, name, price, description) => instance.post('hotdog/update', {
        id, img, name, price, description
    }).then(response => response.data),
    deleteHotDog: (id) => instance.delete('hotdog/delete', {data: {id}}).then(response => response.data),
    addHotDog: (img, name, price, description) => instance.put('hotdog/add', {
        img, name, price, description
    }).then(response => response.data),
}
