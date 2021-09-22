import axios from '../utils/axios'

export default class Feijao {
    async index() {
        const { data } = await axios.get('/feijonts')
        return data
    }

    async store({ text, done }) {
        const { data } = await axios.post('/feijonts', {text, done})
        return data
    }

    async update({ id, text, done }) {
        const { data } = await axios.put(`/feijonts/${id}`, {text, done})
        return data
    }

    async delete({ id }) {
        await axios.delete(`/feijonts/${id}`)
    }
}