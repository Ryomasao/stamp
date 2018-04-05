<template>
    <div class="stamps" :style="bodyStyle">
        <div v-for="(index,stamp) in quantity" :key="stamp">
            <img v-if="notStampedImage" :src="notStampedImage" width="65px" height="65px" class="stamp-img" @click="stamped"/>
            <p v-else class="stamp">{{ stamp }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            quantity:Array,
            bodyStyle:Object,
            notStampedImage:String,
            stampedImage:String,
        },
        methods:{
           stamped:function(event) {
               event.target.src= this.stampedImage;
           }
        },
        data:function(){
           return {
               stamps:[]
           };
        },
        computed:{
        },
        mounted() {
        }
    }
</script>

<style lang="scss">
    .stamps{
        display:flex;
        justify-content: center;
        flex-wrap: wrap;
        width:100%;
        
    }

    .stamp{
        color: #fff;
        background-color:#F7DB70;
        padding: 0;
        margin: 20px 15px;
        width: 65px;
        height: 65px;
        line-height: 65px;
        text-align: center;
        display: inline-block;
        border-radius: 50%;

        &-not-sealed{
            @extend .stamp;
            background-color:#EABEBF;
        }

        &-img{
            margin:10px;
        }

    }
</style>
