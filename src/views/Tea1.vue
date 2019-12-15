<template>
    <div class="tea-container">
        <div class="teacher">
            <div class="header">
                    <img src="../assets/lx.jpg" alt="face">
            </div>
            <div class="content">
                    <p>苏健民，教授，硕士，硕士生导师，软件工程一级学科带头人，省计算机学会嵌入式专委会委员。主要研究方向：自动控制、信号与信息处理。主持或参加科研、教学项目11项，科研与教学获奖11项，出版教材2部，发表论文32篇。</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
      name:'tea1',
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
    position: absolute;
}
.tea-container{
    position: relative;  
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