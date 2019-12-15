<template>
    <div>
        <!--图标部分-->
        <div class="header same">
            <div class="logo">
                <img src="https://icec.nefu.edu.cn/images/lolo.png">
                <div class="font">软件工程</div>
            </div>
        </div>
        <!--导航部分-->
        <div class="nav same">
            <nav>
                <ul class="nav">
                    <li>
                        <router-link to="/">首页</router-link>
                    </li>
                    <li class="drop-down">
                        <router-link to="/lab/lab923">实验室</router-link>
                        <ul class="drop-down-content">
                            <li><router-link to="/lab/lab923">923创新实验室</router-link></li>
                            <li><router-link to="/lab/lab925">925移动开发实验室</router-link></li>
                            <li><router-link to="/lab/lab926">926实验室</router-link></li>
                        </ul>
                    </li>
                    <li class="drop-down">
                        <router-link to="/tea/tea1">教师队伍</router-link>
                        <ul class="drop-down-content">
                            <li><router-link to="/tea/tea1">教授</router-link></li>
                            <li><router-link to="/tea/tea2">副教授</router-link></li>
                            <li><router-link to="/tea/tea3">讲师</router-link></li>
                        </ul>
                    </li>
                    <li>
                        <router-link to="/news">新闻公告</router-link>
                    </li>
                    <li class="right"><router-link to="/login">登录</router-link></li>
                    <!-- <li class="right"><router-link to="/news">发布</router-link></li> -->

                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'NAV-HEADER',
        props: {

        },
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    /*每个部分居中*/
    .same {
        width: 1280px;
        margin: 0px auto;
    }

    /*头部，包括logo，学院。。。*/
    .header {
        background-color: #030303;
        height: 90px;
        margin: 5px auto;

    }

    .logo {
        font-size: 20px;
        color: rgba(193, 194, 181, 0.97);
        font-family: Algerian;
        height: auto;
    }

    .font {
        display: inline-block;
        padding-right: 580px;
        padding-top: 25px;
        margin: 0 auto;
    }

    /*导航栏部分*/
    .nav {
        text-align: center;
    }

    nav>ul {
        display: flex;
        background: #333;
    
    }
    ul{
        list-style: none;
    }
    .nav>li{
            float: left;
            
    }
    nav a {
        display: block;
        text-decoration: none;
        width: 250px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        color: white;
        background-color: #333333;
    }

    nav li:hover {
        background-color: darkgray;
        cursor: pointer;
    }

    nav .right {
        margin-left: auto;
    }
    .drop-down{
            position: relative;
        }
        .drop-down-content{
            padding: 0;
            position: absolute;
            left: -999px;
        }
        .drop-down-content li:hover a{
            background-color:darkgray;
        
        }
        .nav .drop-down:hover .drop-down-content{
            left: 0;
            z-index: 10;
           
        }
</style>