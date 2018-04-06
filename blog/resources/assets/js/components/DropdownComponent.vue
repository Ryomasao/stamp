<template>
    <!--自身をクリックしたときは、クローズしないようにするため、stopでclickイベントを止めてる-->
    <div class="menu" @click.stop>
            <div class="image" v-for="(url, index) in images" :key="index">
                <img :src="url"  width="65px" height="65px"/>
            </div>
    </div>    
</template>

<script>
//ドロップダウン
export default {
    props:{
        images:Array
    },
    methods:{
        close:function(){
            this.$emit('close');
        }
    },
    created:function(){
       document.addEventListener('click', this.close) 
    },
    mounted:function(){
        //console.log(this.images);
    },
    destroyed:function(){
        document.removeEventListener('click', this.documentClick)
    }
}
</script>

<style lang="scss" scoped>
    .menu{
        display: flex;
        flex-wrap: wrap;
        width:200px;
        height:200px;
        background-color: white;
    }
</style>


