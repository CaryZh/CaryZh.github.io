<template>
  <div>
    <header v-if="detail">
      <div
        class="mask"
        :style="{ backgroundImage: `url('${detail?.playlist?.coverImgUrl}')` }"
      ></div>
      <img
      style="width: 35vw; margin: 20px"
        class="thumb"
        :src="detail?.playlist?.coverImgUrl"
        alt=""
      />
      <h3>{{ detail.playlist.name }}</h3>
      <span>{{ detail.playlist.subscribers.nickname }}</span>
    
    </header>
    <p>歌曲列表</p>
    <div>
    <div>
      
      {{ songs.songs.name}}
    </div>

    </div>
  </div>
</template>

<script>
export default {
  data:function () {
    return{
      detail:null,
      comment:null,
      songs:null,
  }
  }

  ,
  created(){
    Promise.all([
      this.axios.get("playlist/detail", {
        params: {
          id: this.$route.query.id,
        },
      }),
      this.axios.get("comment/playlist", {
        params: {
          id: this.$route.query.id,
        },
      }),
      this.axios.get("playlist/track/all", {
        params: {
          id: this.$route.query.id,
        },
      }),
    ]).then(([{ data: detail }, { data: comment },{data:songs}]) => {
        console.log(detail, comment,songs);
      this.detail = detail;
      this.comment = comment;
      this.songs=songs;
    });
  },
};

</script>

<style lang="less" scoped>
 header {
  position: relative;
  overflow: hidden;
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    filter: blur(10px) brightness(0.8);
    z-index: -1;
    transform: scale(1.2);
  }
  h3{
    color: white;
    font-weight: 100;
    position: absolute;
    top: 30px;
    left: 160px;
    font-size: 16px;
  }
}
p{
  font-size: 12px;
  color:rgb(96, 94, 94);
  background-color: lightgray;
  height: 20px;
  line-height: 20px;
padding-left: 10px;
  
}
</style>