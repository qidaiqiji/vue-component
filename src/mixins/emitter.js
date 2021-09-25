// apply和call的区别，apply接受数组作为参数，call接受单个字符串
function broadcast(componentName, eventName, params) {
    this.$children.forEach(child => {
        const name = child.$options.name
        if (name === componentName) {
            child.$emit.apply(child, [eventName].concat([params]))
        } else {
            broadcast.apply(child,  [componentName, eventName].concat([params]))
        }
    });
}

export default {
    methods: {
        dispatch(componentName, eventName, params) {
            let parent = this.$parent || this.$root
            let name = parent.$options.name
            // 向上遍历父组件，直到找到要通知的父组件才退出循环
            while(parent &&(!name || name !== componentName)) {
                parent = parent.$parent
                if (parent) {
                    name = parent.$options.name
                }
            }

            if (parent) {
                parent.$emit.apply(parent, [eventName].concat(params))
            }
        },
        broadcast(componentName, eventName, params) {
            broadcast.call(this, componentName, eventName, params)
        }
    }
}