<template>
    <div>
        <NavHeader />
        <!-- <LabNav />  -->
        <div class="container">
            <nav class="sidebar">
                <h3>师资队伍</h3>
                <ul>
                    <li><router-link to="/tea/tea1">教授</router-link></li>
                    <li><router-link to="/tea/tea2">副教授</router-link></li>
                    <li><router-link to="/tea/tea3">讲师</router-link></li>
                </ul>
            </nav>
            <div class="main">
                <router-view />
            </div>
        </div>
    </div>
</template>
<script>
// import LabNav from "@/components/LabNav.vue"
import NavHeader from "@/components/NavHeader.vue"

export default {
  name:'lab',
  components:{
    // LabNav,
    NavHeader
  }
}
</script>
<style scoped>
.container {
    display: flex;
    background: gainsboro;
    opacity: 0.6;
    
}
nav {
    /* position: fixed; */
    width: 240px;
    height: 100vh;
    background-color: rgba(37,65,119,0.48);
}
.main {
    flex-grow: 1;
    text-align: justify;
}
nav.sidebar h3 {
    text-align: center;
    background: #333333;
    color: white;
    padding: 10px 20px;
}
nav.sidebar ul li {
    list-style: none;
}
nav.sidebar ul li a {
    color: black;
    text-decoration: none;
    display: block;
    padding: 30px 25px;
    text-align: center;
    transition: transform 0.5s;
}
nav.sidebar ul li a:hover {
    background-color: rgba(117,85,119,0.95);
    color: white;
    transform: translateY(-10px);
}
</style>