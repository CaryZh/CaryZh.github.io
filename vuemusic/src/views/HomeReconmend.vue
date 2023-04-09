<template>
<div>
    <HomeTitle>编辑推荐</HomeTitle>
    <ul class="personalizeds">
        <HomeCard v-for="item in personalizeds.slice(0, 6)" :key="item.id" :item="item"></HomeCard>
    </ul>
    <HomeTitle>最新音乐</HomeTitle>
    <ul class="newsongs">
      <SongItems v-for="song in newsongs" :key="song.id" :song="song"></SongItems>
    </ul>

</div>
</template>

<script>
import HomeTitle from "../components/HomeTitle.vue";
import HomeCard from  "../components/HomeCard.vue";
import SongItems from '../components/SongItems.vue';

export default {
    components: { 
        HomeTitle,
        HomeCard,
        SongItems,
},
data:
    function () {
    return{
      personalizeds: [],
      newsongs: {},
      name:[],

    }
},
created:function () {
//  console.log(this, this.axios, window.axios);
    this.axios.get("personalized").then((res) => {
        // console.log(res.data.result);
      this.personalizeds = res.data.result;
    });
      this.axios.get("personalized/newsong").then((res) => {
        // console.log(res.data.result);
      this.newsongs = res.data.result; 
    });
    // this.axios.get("personalized/newsong").then((res) => {
    //     console.log(res.data.result.song.song.artists);
    //   // this.artists = res.data.result;
    //   console.log( this.artists);
    // });

},

}
</script>

<style lang="less" scoped>
.personalizeds {
  display: flex;
  flex-wrap: wrap;
}
</style>