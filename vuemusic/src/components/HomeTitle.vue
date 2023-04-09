<template>
<div>
    <h3><slot></slot></h3>
</div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
div{   
margin-top: 60px;
width: 100px;
    h3{
    border-left: 2px solid red;
    padding-left: 10px;
    line-height: 1em;
    margin: 10px 0;
    text-align: left;
    
    }
}

</style>