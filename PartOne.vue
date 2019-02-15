<template>
    <div class="part-one">
        <img class="part-one-image" :src="headImage" alt="头像">
        <p>姓&emsp;&emsp;名：易丹</p>
        <p>学&emsp;&emsp;历：大专</p>
        <p>工作年限：11年</p>
        <p>年&emsp;&emsp;龄：32</p>
        <p>联系电话：15018798893</p>
        <p>电子邮箱：1425910296@qq.com</p>
        <p>博&emsp;&emsp;客：<a href="http://weibo.com/yidan20065">追风紫影</a></p>
        <p>GitHub：<a href="https://github.com/yidan20065">yidan20065</a></p>
    </div>
</template>
<script>
    export default {
       name:"partOne",
       data(){
           return {
               headImage:require('../assets/img/head_image.png')
           }
       }
    }
</script>
<style scoped>
    a {
        color:deepskyblue;
    }
    a:hover {
        color:rgb(118, 190, 248);
    }
    p{
        line-height: 30px;
        text-align: left;
    }
    .part-one{
        width: 100%;
        height: 500px;
        border: 40px solid transparent;
        border-image: url("~@/./assets/img/border_image.png") 30 30 stretch;
        background: #18202d;
        padding-left: 10px;
    }
    .part-one-image{
        width: 150px;
        height: 150px;
    }
</style>

