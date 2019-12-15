<template>
    <div>
        <div class="container">
            <NavHeader />
            <div id="title">
                <input type="text" placeholder="请输入标题" v-model="title">
            </div>
            <div id="content">
                <input type="text" placeholder="请输入内容" v-model="content">
            </div>
            <div id="btn">
                <button @click="backBtn">返回</button>
                <button @click="changeBtn">修改</button>
            </div>

        </div>
    </div>
</template>
<script>
    import NavHeader from "@/components/NavHeader.vue"

    export default {
        name: 'change',
        components: {
            NavHeader
        },
        data() {
            return {
                title: "",
                content: "",
                idData: [],
                checkedId: ""
            }
        },
        created() {
            this.getData(this.$route.params.id);
        },
        methods: {
            getData(id) {
                this.checkedId = id;
                
                let thisUrl = "http://localhost:8081/blog_list";
                this.axios.post(thisUrl).then((res) => {
                    this.idData = res.data;
                })
            },
            backBtn(){
                this.$router.push({
                    path:'/news'
                })
            },
            changeBtn(){
                let params = {           
                    blog_title: this.title,
                    blog_content: this.content,
                    id: this.checkedId,
         
                }
                let thisUrl = "http://localhost:8081/blog_update";
                this.axios.get(thisUrl,{
                    params
                }).then((res) => {
                    window.console.log(res)
                    alert("修改成功")
                })
            }


        },
    }
</script>
<style scoped>
    .container {
        height: 100vh;
    }

    /* 输入 */
    #title,
    #content {
        padding: 20px;
        text-align: center;
    }

    #title input {
        width: 400px;
        height: 30px;
        border-radius: 4px;
    }

    #content input {
        width: 400px;
        height: 200px;
        border-radius: 4px;
    }

    /* 提交 */
    #btn {
        text-align: center;
        padding: 5px 10px;
    }

    #btn button {
        padding: 5px 20px;
        border-radius: 4px;
        margin: 0 10px;
    }
</style>