import { createApp } from 'vue'

const config = {
    data() {
        return {
            products: []
        }
    }
}

const app = createApp(config);
app.mount('#app')