<template>
    <div>
        <label for="login">用户名 :</label>
        <input id="login" type="text" /><br/>
        <label for="word">密码 :</label>
        <input id="word" type="password" /><br/>
        <input type="submit" value="登陆"><br/>
        <input type="submit" value="注册"><br/>
        <button @click = "func()">忘记密码？</button>

    </div>
</template>

<script>
    export default{
        methods:{
            func (){
                this.$router.push({name: '/order/page1',params:{ id:'1'}});
            }
        }
    }
</script>