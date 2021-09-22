import Feijonts from './api/feijonts'
import { createApp } from 'vue'

const apiFeijonts = new Feijonts()

const app = createApp({
    data() {
        return {
            feijonts: [],
            form: {
                text: '',
                done: 'false',
            },
        }
    },
    created() {
        this.fetchFeijonts()
    },
    methods: {
        async fetchFeijonts() {
            this.feijonts = await apiFeijonts.index()
        },
        async createFeijonts() {
            const data = await apiFeijonts.store(this.form)
            this.feijonts.push(data)

            this.form.text = ''
            this.form.done = false
        },
        async toogleFeijontsStatus(Feijao) {
            const data = await apiFeijonts.update({
                ... Feijao,
                done: !Feijao.done
            })

            const index = this.feijonts.findIndex(({ id }) => id === data.id)
            this.feijonts[index] = data
        },
        async destroyFeijao(id) {
            await apiFeijonts.delete({ id })

            const index = this.feijonts.findIndex(({ id }) => id === id)
            this.feijonts.splice(index, 1)
        }
    }
})

app.mount('#app')