import Button from './Button.vue'
import Vue from 'Vue'
Button.install = () => {
    Vue.component(Button.name,Button)
};

export default Button