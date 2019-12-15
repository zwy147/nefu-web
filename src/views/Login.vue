<template>
    <div class="login">
        <form class="logform">
            <h1>软件工程</h1>
            <input type="text" name="username" class="log" placeholder="请输入用户名" v-model="id"><br>
            <input type="password" name="pwd" class="log" placeholder="请输入密码" v-model="pwd"><br>
            <button type="submit" class="btn" @click="logBtn">登录</button>
        </form>
    </div>
</template>
<script>

    export default {
        name: 'push',
        components: {
            
        },
        data() {
            return {
                id:"",
                pwd:"",

            }
        },
        methods: {
            logBtn(){
                let username = this.id;
                let password = this.pwd;
                if(username == "425" && password == "123")
                {
                    alert("登录成功")
                    this.$router.push({
                        path:'/'
                    })
                }else{
                    alert("数据错误")
                }
            }
        },
    }
</script>
<style scoped>
    .main{
            display: flex;
        }

        /*登录框整体*/
        .login{
            padding: 0 40px;
            margin:0 auto;
            height: 100vh;
            justify-items: center;

        }
        .logform{
            position: absolute;
            left: 30%;
            top: 30%;
            text-align:center;
            width: 600px;
            background-color: #333333;
            border-radius: 10px;
        }
    /* 单个框  */
        h1{
            text-align: center;
            color: #b2b2b2;
        }
        .log{
            padding: 10px;
            margin: 20px;
            height: 20px;
            width: 500px;
            line-height: 50px;
            font-size: large;
            border-radius: 5px;
        }
    /*    登陆按钮*/
        .btn{
            font-size: large;
            width: 150px;
            padding: 5px 20px;
            margin: 20px;
        }
</style>