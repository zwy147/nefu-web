<template>
    <div class="tea-container">
        <div class="teacher">
            <div class="header">
                <img src="../assets/yz.png" alt="face">
            </div>
            <div class="content">
                <p>王波，讲师，硕士。主要研究方向：计算数学，软件开发。发表学术论文3篇。</p>
            </div>
        </div>
        <div class="teacher">
            <div class="header">
                <img src="../assets/yz.png" alt="face">
            </div>
            <div class="content">
                <p>边继龙，博士，讲师。主要研究方向：立体匹配、矢量地图压缩。曾参与或负责的科研项目包括：矢量地图版权保护技术研究、小基高比立体测绘图像匹配处理方法研究及十二五科研项目等。在国内外期刊上发表学术论文7篇，其中被EI收录5篇；申请发明专利3项。
                </p>
            </div>
        </div>
        <div class="teacher">
            <div class="header">
                <img src="../assets/yz.png" alt="face">
            </div>
            <div class="content">
                <p>单颖，博士，讲师，主要研究方向：软件工程，林业信息。参与科研项目多项，并发表相关论文。</p>
            </div>
        </div>
        <div class="teacher">
            <div class="header">
                <img src="../assets/yz.png" alt="face">
            </div>
            <div class="content">
                <p>李琰，讲师，主要研究方向：软件工程，遥感和林业信息。参与科研项目多项，参编教材1部，并发表部分相关论文。</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'tea3',
        components: {

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