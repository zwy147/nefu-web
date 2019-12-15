<template>
  <div>
    <NavHeader />
    <!--轮播图部分-->
    <div class="moving same">
        <div class="block">
            <el-carousel height="400">
              <el-carousel-item v-for="item in 4" :key="item">
                  <img src="../assets/l1.jpg">
              </el-carousel-item>
            </el-carousel>
        </div> 
    </div>
    <!--主体部分-->
    <div class="body same">
        <!--专业介绍部分-->
        <div class="public">
            <h2>软件工程</h2>
            <p>软件工程专业是2002年国家教育部新增专业，随
                着计算机应用领域的不断扩大及中国经济建设的不断发展，软件
                工程专业将成为一个新的热门专业。软件工程专业以计算机科学与技
                术学科为基础，强调软件开发的工程性，使学生在掌握计算机科学与
                技术方面知识和技能的基础上熟练掌握从事软件需求分析、软件设计、软
                件测试、软件维护和软件项目管理等工作所必需的基础知识、基
                本方法和基本技能，突出对学生专业知识和专业技能的培养，培养能
                够从事软件开发、测试、维护和软件项目管理的高级专门人才。</p>
            <p>软件工程专业是一门研究用工程化方法构建和维护有效的、实用的
                和高质量的软件的学科。它涉及到程序设计语言，数据库，软件开
                发工具，系统平台，标准，设计模式等方面。在现代社会中，软件
                应用于多个方面。典型的软件比如有电子邮件，嵌入式系统，人机
                界面，办公套件，操作系统，编译器，数据库，游戏等。同时，各
                个行业几乎都有计算机软件的应用，比如工业，农业，银行，航空
                ，政府部门等。</p>

        </div>
        <!--新闻公告部分-->
        <div class="new">
            <ul>
                <li><a href="#">我校获全国一等奖</a></li>
                <li><a href="#">acm获金奖</a></li>
                <li><a href="#">1111111111111111111111</a></li>
                <li><a href="#">2222222222222222</a></li>
                <li><a href="#">3333333333333333</a></li>
                <li><a href="#">555555555555555555555555555</a></li>
                <li><a href="#">99999999999999999999999999999</a></li>
                <li><a href="#">11111111111111111</a></li>
                <li><a href="#">9999999999999</a></li>
                <li><a href="#">2222222222222222222</a></li>
                <li><a href="#">555555555555555</a></li>
                <li><a href="#">55555555555555555555</a></li>
            </ul>
        </div>
        <div class="user">
            <ul>
                <li><img src="../assets/xx.jpg" alt=""></li>
                <li>姓名：小明</li>
                <li>性别：男</li>
                <li>学号：2017225555</li>
                <li>专业：软件工程</li>
                <li>学院：信息与计算机工程学院</li>
                <li>年级：2017</li>
                <li>班级：一班</li>
                <li>第一学期成绩：90</li>
                <li>第二学期成绩：96</li>
                <li>第一学年成绩：93</li>
            </ul>

        </div>
    </div>

    <div class="footer same">
    </div>
    <div class="footer same">
        <nav>
            <ul>
                <li><a href="#">关于我们</a></li>
                <li class="parent"><a href="#">东北林业大学</a>
                <li class="parent"><a href="#">软件工程</a>
                <li><a href="#">邮箱</a></li>
                <li class="right"><a href="#">帮助</a></li>
            </ul>
        </nav>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavHeader from '@/components/NavHeader.vue'
export default {
  name:'home',
  components:{
    NavHeader
  }
}
</script>
<style scoped>
  /*轮播图部分*/
.moving{
  text-align: center;
  margin: 20px 180px;
}
/*轮播图图片部分*/
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
.moving>img{
    width: 1280px;
    height: 400px;

}

.body{
            padding:10px;
            margin:0 120px;
            display: grid;
            grid-gap: 15px;
            grid-template-columns: 3fr 2fr 1fr;
            grid-template-areas: "public new user";
}
/*新闻部分*/
.new{
    grid-area: new;
    height: 500px;
    padding: 10px;
    margin: 5px;
    color: #919191;
    text-align: center;
    background-color: #333333;
}
.new>ul>li{
    list-style: none;
    font-size: large;
}
.new>ul>li>a {
    color: #919191;
    text-decoration: none;
    display: block;
    padding: 5px 20px;
}
/*专业介绍部分*/
.public{
    grid-area: public;
    height: 500px;
    padding: 10px;
    margin: 5px;
    color: #919191;
    text-align: center;
    background-color: #333333;
}
.public>p{
    font-size: large;
}
.user{
    grid-area: user;
    height: 500px;
    border: 1px solid white;
    padding: 10px;
    margin: 5px;
    color: #919191;
    text-align: center;
    background-color: #333333;
    font-size: large;


}
.user>ul>li{
    list-style: none;
}
.user>ul>li>img{
    height: 100px;
    width: 100px;
}
/* 底部导航 */
.footer{
    width: 1280px;
    margin: 0px auto;
}
nav > ul {
    display: flex;
    background: #333;
    list-style: none;

}
nav a {
    color: white;
    text-decoration: none;
    display: block;
    padding: 15px 70px;
}
nav a:hover {
    background-color: #333;
    cursor: pointer;
}

</style>
