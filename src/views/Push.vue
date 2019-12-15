<template>
    <div>
        <div class="container">
            <NavHeader/>
            <div id="title">
                <input type="text" placeholder="请输入标题" v-model="title">
            </div>
            <div id="content">
                <input type="text" placeholder="请输入内容" v-model="content">
            </div>
            <div id="btn">
                    <button @click="pushBtn">提交</button>
            </div>

        </div>
    </div>
</template>
<script>
import NavHeader from "@/components/NavHeader.vue"

    export default {
        name: 'push',
        components: {
            NavHeader
        },
        data() {
            return {
                title:"",
                content:"",
                dataList: []
            }
        },
        created() {
            this.getData();
        },
        methods: {
            getData() {
                
            },
            pushBtn(){
                let params = {
                    blog_title: this.title,
                    blog_content: this.content
                }
                let thisUrl = "http://localhost:8081/blog_add";
                this.axios.get(thisUrl,{
                    params
                }).then((res) => {
                    window.console.log(res)
                    alert("发布成功")
                })
            }
        },
    }
</script>
<style scoped>
.container{
    height: 100vh;
}
/* 输入 */
#title,#content{
    padding: 20px;
    text-align: center;
}
#title input{
    width: 400px;
    height: 30px;
    border-radius: 4px;
}
#content input{
    width: 400px;
    height: 200px;
    border-radius: 4px;
}
/* 提交 */
#btn{
    text-align: center;
    padding: 10px;
}
#btn button{
    padding: 5px 20px;
    border-radius: 4px;
}
</style>