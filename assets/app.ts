const app = document.getElementById('vue-app')

const options = {
    target: app,
    props: {
        message: 'Hello World'
    }
}

new Vue(options).$mount(app)