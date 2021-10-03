
export default {
    install(Vue) {
        console.log("message from plugin", this)
        if (this.installed) {
            return
        }
        this.installed = true
        Vue.prototype.$myplugin = {
            EventBus: new Vue(),
            edit(data) {
                this.EventBus.$emit('edit', { ...data })
            },
            del(data) {
                console.log('Delete plugin method')
                this.EventBus.$emit('delete', { ...data })
            },
            show(name) {
                this.EventBus.$emit('shown', { name })
            },

            hide(name) {
                this.EventBus.$emit('hide', { name })
            }

        }
    }
}