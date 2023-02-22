<template>
    <div>
        <input placeholder="请输入账号" v-model="userName"/>
        <input placeholder="请输入密码" v-model="passWord"/>
    </div>
</template>

<script>
    export default {
        name: "login",
        data () {
            return {
                userName : '',
                passWord : ''
            }
        },
        // beforeRouteEnter (to ,form , next) {
        //     console.log(form)
        //     if(form.name === 'admin') {
        //         next()
        //     }else {
        //         next({name : 'admin'})
        //     }
        // }
    }
</script>

<style scoped>

</style>