<template>
        <div class="tea-container">
            <div class="teacher">
                <div class="header">
                    <img src="../assets/xz1.jpg" alt="face">
                </div>
                <div class="content">
                    <p>谷志新，博士，副教授，硕士生导师。主持黑龙江省自然科学基金、哈尔滨市应用技术研究与开发项目、中央高校基本科研业务费专项基金项目5项；获得哈尔滨市科技进步三等奖，东北林业大学教学质量优秀奖；主要研究方向：信息技术应用。发表科技论文20余篇，其中SCI、EI收录4篇，专著1部，主编教材2部。获得专利3项。</p>
                </div>
            </div>
            <div class="teacher">
                <div class="header">
                    <img src="../assets/xz1.jpg" alt="face">
                </div>
                <div class="content">
                    <p>罗嗣卿，硕士，副教授，硕士生导师。主要研究方向：信息系统析与设计、图像处理、软件服务与应用。主持和参加省攻关重点、省自然基金、国家林业公益性行业专项、省教改项目15项，发表论文20余篇，教材3部。</p>
                </div>
            </div>
            <div class="teacher">
                <div class="header">
                    <img src="../assets/xz1.jpg" alt="face">
                </div>
                <div class="content">
                    <p>李莉，博士，副教授，软件工程专业主任，专业教工党支部书记，硕士生导师。主要研究方向：先进软件工程技术、群智能优化、大型分布式计算。主持和参加国家级、省部级各类科学研究项目、教学研究项目10余项，各级各类科研及教学获奖5项，多次获得东北林业大学教学质量优秀奖、教书育人先进个人，获得东北林业大学青年教师授课大赛二等奖，信息与计算机工程学院教师授课精英赛第一名。</p>
                </div>
            </div>
            <div class="teacher">
                <div class="header">
                    <img src="../assets/xz1.jpg" alt="face">
                </div>
                <div class="content">
                    <p>张锡英， 副教授，硕士，硕士生导师。主要研究方向：现代信息技术及网络应用，数据库技术、图像检索。主持或参加科研项目 11 项，发表论文 9 篇，出版教材 2 部。获得省级科学技术进步奖1次， 2 门课精品课主讲教师。</p>
                </div>
            </div>
            <div class="teacher">
                <div class="header">
                    <img src="../assets/xz1.jpg" alt="face">
                </div>
                <div class="content">
                    <p>赵玉茗，博士，副教授，硕士生导师，专业副主任。主要研究方向：人工智能、数据挖掘、生物信息学。主持国家自然科学基金、黑龙江省自然科学基金、林木遗传育种国家重点实验室开放基金、中央高校基本科研业务费专项基金项目5项；获得东北林业大学青年教师授课大赛二等奖；主持精品在线课程建设1门。获得专利3项。发表学术论文20余篇，其中EI、SCI收录10余篇，参与编写教材1部。</p>
                </div>
            </div>
        </div>
    </template>
    <script>
    export default {
          name:'tea2',
          components:{
        
          }
        }
    </script>
    <style scoped>
    .teacher {
    width: 95%;
    margin: 15px;
    padding: 10px;
    text-align: center;
    display: flex;
    position: relative;  
}
.tea-container{
    position: absolute;
}

/* 随外层容器缩放 */
.teacher .header img {
    width: 100px;
    height: 100px;
    border-radius: 25%;
    opacity: 0.9;
    transition: opacity 0.5s;
}
/* 两端对齐 */
.teacher .content {
    padding: 10px;
    text-align: justify;
}

.teacher .content a {
    display: inline-block;
    padding: 10px 15px;
    background: #f44336;
    color: white;
    text-decoration: none;
    border-radius: 5px;
}
.teacher:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
/* 悬浮容器，容器下的header下的img */
.teacher:hover .header > img {
    opacity: 1.0;
}
    </style>