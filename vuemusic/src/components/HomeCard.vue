<template>
 <li
    class="home-card"
    @click="$router.push({ path:'/playlist',query:{id:item.id} })"
  >
    <div class="thumb">
      <img :src="item.picUrl + '?imageView=1&type=webp&thumbnail=247x0'" alt="" />
      <span>
        <!-- <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDov…yMjQuMzM0LjM2LjcyLjM2IDEuMTM4djIuNTUyIi8+PC9zdmc+" alt=""> --> 
        {{ item.playCount }}
      </span>
    </div>
    <h5>{{ item.name }}</h5>
  </li>
</template>

<script>
export default {
    props: {
    item: {
      type: Object,
    //   required: true,
    },
  },
}
</script>

<style lang="less" scoped>
.home-card {
  width: 30%;
  flex-grow: 1;
  &:nth-child(3n + 2) {
    margin: 0 5px;
    
  }
  .thumb {
    position: relative;
    img {
      display: block;
      width: 100%;
    }
    span {
      position: absolute;
      top: 0;
      right: 0;
      color: white; 
      
    }
  }
}
</style>