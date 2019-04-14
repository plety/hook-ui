import Toast from './main.vue'
Toast.install = () => {
    Vue.component(Toast.name,Toast)
};
export default Toast