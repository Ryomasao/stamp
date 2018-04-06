<template>
    <!--自身をクリックしたときは、クローズしないようにするため、stopでclickイベントを止めてる-->
    <div class="menu" @click.stop @dragleave.prevent @dragover.prevent @drop.prevent="onDrop">
        <div class="images" >
                <div class="image" v-for="(url, index) in images" :key="index">
                    <img :src="url"  width="65px" height="65px"/>
                </div>
        </div>    
       <div class="msg-error">{{ errorMsg }}</div>
    </div>
</template>

<script>
//ドロップダウン
export default {
    props:{
        images:Array
    },
    data:function(){
        return{
            msg:'',
            errorMsg:'',
        }
    },
    methods:{
        //コンポーネントをクローズする
        close:function(){
            this.$emit('close');
        },
        //ファイルドロップ
        onDrop:function(event){
            let fileList = event.target.files ? 
               event.target.files:
               event.dataTransfer.files;

            let file = fileList[0];
        
            let formData = new FormData;
            formData.append('image', file);

            axios.post('', formData)
            .then((res)=>{
                console.log(res);
            })
            .catch((error)=>{
                console.log(error);
                this.errorMsg = 'アップロードに失敗しました。'
            });
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
        width:200px;
        height:200px;
        background-color: white;
    }

    .images{
        display: flex;
        flex-wrap: wrap;
    }

    .msg{
        &-error{
            color:red;
        }
    }
</style>


