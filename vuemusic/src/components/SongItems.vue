<template>
  <div>
    <h3>{{ song.song.name }}</h3>
    <p>{{ song.song.artists.name}}-{{ song.song.name }}</p>
    <!-- <p>111</p> -->
  </div>
</template>

<script>
export default {

    props:{
      song:{
        
        type:Object,
      },
      name:{
        type:Array,
      }
    },
    
    
  
    
}
</script>

<style>

</style>