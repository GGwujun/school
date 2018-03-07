
import UIPopup from '../components/Modal/popup'


// Vue 插件
const modal = function (Vue) {

    // 关闭当前弹框
    Vue.prototype.$close = modal.close = function () {
        modal.el.parentNode.removeChild(modal.el)
    }


    // 模态框
    Vue.prototype.$popup = modal.popup = function (text, openCb, closeCb) {
        debugger;
        let title, url
        if (typeof text === 'object') {
            title = text.title
            url = '/php'+JSON.parse(text.coursepath[0]).url
        }

        const Popup = Vue.extend({
            template: '<UIPopup :url="url" :title="title"\
                        @popup="popup"/>',
            data() {
                return {
                    text,
                    title,
                    url
                }
            },
            methods: {
                popup() {
                    // 关闭框口
                    modal.close()
                    // 执行回调
                    closeCb && closeCb()
                }
            },
            components: { UIPopup }
        })
        modal.el = new Popup().$mount().$el
        document.body.appendChild(modal.el)
        setTimeout(function () {
            openCb();
        });

    }


}

export default modal