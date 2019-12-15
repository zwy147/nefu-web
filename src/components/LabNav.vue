<template>
    <div class="container">
        <div class="nav">
            <nav class="sidebar">
                <h3>实验室</h3>
                <ul>
                    <li><a href="#">实验室923</a></li>
                    <li><a href="#">实验室925</a></li>
                    <li><a href="#">实验室926</a></li>
                </ul>
            </nav>
        </div>
    </div>
</template>
<style scoped> 
.nav{
    height: 200px;
}
.container{
    display: flex;
    width: 180px;
}
nav.sidebar {
    width: 180px;
    /*height: 200px;*/
    display: inline-block;
}
nav.sidebar h3 {
    background: #333333;
    color: white;
    padding: 10px 20px;
}
nav.sidebar ul li {
    list-style: none;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.1);
}
nav.sidebar ul li a {
    color: black;
    text-decoration: none;
    display: block;
    padding: 15px 25px;
}
nav.sidebar ul li a:hover {
    background: darkgray;
    color: white;
}
</style>