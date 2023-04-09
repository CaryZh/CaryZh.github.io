<template>
    <div class="home">
        <section>
      <div class="top">
        <img src="./网易云音乐-01.png" alt="">
                <button>下载APP</button>
      </div>
            
    </section> 
    <nav>
    <router-link to="/">推荐音乐</router-link> 
    <router-link to="/hot">热歌榜</router-link>
    <router-link to="/search">搜索</router-link>
    </nav>
    <router-view></router-view>
</div>
</template>

<script>
export default {

}
</script>

<style lang="less" >
.home{
    position: absolute;
    width: 100%;
    section{
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 84px;
   
    .top{
      padding: 0px 10px;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 100;
      display: flex;
      justify-content: space-between;
      box-align: center;
      align-items: center;
      width: 100%;
      height: 84px;
      background-color: #d43c33;
      box-sizing: border-box;
      img{
        height: 100%;
        width: 128px;
    }
    button{
   line-height: 36px;
    font-size: 16px;
    width: 100px;
    text-align: center;
    color: #d43c33;
    background-color: #fff;
    border-radius: 37.5%/100%;
    border: none;
    }

    }
  
    }
    nav{
        position: fixed;
        width: 100%;
        display: flex;
        justify-content: space-around;
        padding-left: 0px;
        background-color: #fff;
        box-shadow: 1px 1px 1px 1px lightgray;
        height: 50px;
        line-height: 50px;
        text-align: center;
        margin-top: -10px;
        // margin-bottom: 20px;
        // margin-left: -10px;
        a {
     // font-weight: bold;
        color:black;
        text-decoration: none;
        &.router-link-exact-active {
        color: #e01b2a;
    border-bottom: 3px solid#e01b2a; 
    }
}
}
}


    
</style>