
export default {
    install(Vue) {
        console.log("message from plugin", this)
        if (this.installed) {
            return
        }
        this.installed = true
        Vue.prototype.$myplugin = {
            EventBus: new Vue(),
            edit(id) {
                this.EventBus.$emit('edit', { id })
                console.log('Edit plugin method   id = ' + id)
            },
            delete(id, settings) {
                console.log('Delete plugin method')
                this.EventBus.$emit('delete', { id, ...settings })
            }
        }
    }
}