<template>
    
    <div>
        <NavHeader />
        <div class="container">
            <div id="push"><router-link to="/push">发布</router-link></div>
            <div class="text" v-for="item in dataList" :key="item.id">
                <div class="news_title">
                    <b>{{item.blog_title}}</b>
                </div>   
                <div class="news_content">{{item.blog_content}}</div>   
                <div id="Btn">
                        <div id="changeBtn"><button @click="chgBtn(item.id)">修改</button></div>
                        <div id="deleteBtn"><button @click="delBtn(item.id)">删除</button></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import NavHeader from "@/components/NavHeader.vue"

export default {
        name:'news',
        components:{
            NavHeader
        },
        data(){
            return {
                dataList:[],
                checkedId:""
            }
        },
        created() {
            this.getData();
        },
        methods: {
            getData(){
                let thisUrl = "http://localhost:8081/blog_list";
                this.axios.post(thisUrl).then((res)=>{
                   this.dataList = res.data.reverse();   

                   window.console.log(this.dataList);
                })
            },
            delBtn(id){
                this.checkedId = id;
                let thisUrl = "http://localhost:8081/blog_delete";
                let params = {
                    id: this.checkedId
                }
                this.axios.get(thisUrl,{
                   params
                }).then((res) => {
                    window.console.log(res)
                    alert("删除成功")
                })
            },
            chgBtn(id){
                this.$router.push({
                    path:'/change',
                    name:"change",
                    params:{
                        id
                    }
                })
            }
        },
    }
</script>
<style scoped>

    /* 发布 */
#push{
    margin: 20px auto;
    padding: 10px;
    text-align: center;
    background: #333333;
    width: 100px;

}
#push a{
    text-decoration: none;
    color: wheat;

}
    /* 页面 */
.text{
    text-align: center;
    background: darkgray;
    margin: 20px;
    padding: 20px;
    opacity: 0.5;
    height: 100px;
    overflow:auto;
    position: relative;

}
.news_content{
    overflow: hidden;
}
 /* 修改和删除 */
 #changeBtn button,#deleteBtn button{
     float: right;
     text-decoration: none;
     font-size: 20px;
     margin: 10px; 
     padding: 5px 10px;
     background: #333333; 
     color: white; 
 }

 #Btn{
     position: absolute;
     right: 0;
     bottom: 0;
     margin: 10px;
 }
</style>