<template>
    <div id="container">
      <div id="lab-main">
          <div id="lab-img">
              <img src="../assets/l2.jpg">
          </div>
          <div id="lab-text">
                  <p>实验室名称：创新实验室</p>
                  <p>实验室地址：丹青楼926</p>
                  <p>实验室简介：</p>
                  <p id="indent">它的一切内容(包括但不限于文字、图片、PDF、图表、标志、标识、商标、版面设计、专栏目录与名称、内容分类标准以及为读者提供的任何信息)仅供人民网读者阅读、学习研究使用，未经人民网股份有限公司及/或相关权利人书面授权，任何单位及个人不得将《人民日报》（电子版）所登载、发布的内容用于商业性目的，包括但不限于转载、复制、发行、制作光盘、数据库、触摸展示等行为方式，或将之在非本站所属的服务器上作镜像。否则，人民网股份有限公司将采取包括但不限于网上公示、向有关部门举报、诉讼等一切合法手段，追究侵权者的法律责任。</p>
          </div>
      </div>
    </div>
</template>
<script>

export default {
  name:'lab926',
  components:{

  }
}
</script>
<style scoped>
#container{
  position: relative;
}
#lab-main{
  position: absolute;
  display: inline-block;
  padding: 50px;
}
 #lab-text{
  margin: 20px;
 }
 #lab-img{
  text-align: center;
 }
 #lab-img img{
   width: 50%;
 }
</style>