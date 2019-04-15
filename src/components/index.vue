<template>
    <div>
        <p v-for="item in items"><a :href="item.path">{{item.name}}</a></p>
    </div>
</template>
<script>
    import {Button} from 'hook-ui'
    export default {
        components:{
            "hui-button":Button
        },
        data(){
            return {
                items:[
                    {name:"按钮",path:'/#/button'},
                    {name:"消息提示框",path:'/#/toast'},
                    {name:"列表",path:'/#/list'}
                ]
            }
        }
    }
</script>
