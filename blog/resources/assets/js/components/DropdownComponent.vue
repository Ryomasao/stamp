<template>
    <!--自身をクリックしたときは、クローズしないようにするため、stopでclickイベントを止めてる-->
    <div class="menu" @click.stop @dragleave.prevent @dragover.prevent @drop.prevent="onDrop">
        <pulse-loader :loading="loading" :size="size" class="loading"></pulse-loader>  
        <div class="images" v-show="!loading">
                <div class="image" v-for="(url, index) in images" :key="index">
                    <img :src="url"  width="65px" height="65px"/>
                </div>
        </div>    
       <div class="msg-error">{{ errorMsg }}</div>
    </div>
</template>

<script>
//ローディングアニメーション
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
//ドロップダウン
export default {
    props:{
        postTo:{
            type:String,
            required: true
        },
        images:Array
    },
    data:function(){
        return{
            //アップロード時のメッセージ
            msg:'',
            errorMsg:'',
            //spinerのプロパティ
            loading:false,
            size:'32px'
        }
    },
    methods:{
        //コンポーネントをクローズする
        close:function(){
            this.$emit('close');
        },
        //ファイルドロップ
        onDrop:function(event){
            this.loading = true;

            let fileList = event.target.files ? 
               event.target.files:
               event.dataTransfer.files;

            let file = fileList[0];
        
            let formData = new FormData;
            formData.append('image', file);

            axios.post(this.postTo, formData)
            .then((res)=>{
                afterUploadFn(this);
                console.log(res);
            })
            .catch((error)=>{
                afterUploadFn(this);
                console.log(error);
                this.errorMsg = 'アップロードに失敗しました。'
            });
        }
    },
    components:{
       PulseLoader 
    },
    created:function(){
       document.addEventListener('click', this.close) 
    },
    mounted:function(){
        console.log('im created');
    },
    destroyed:function(){
        document.removeEventListener('click', this.documentClick)
    }
}

const afterUploadFn = function(vm){
    vm.loading = false;
}

</script>

<style lang="scss" scoped>
    .menu{
        position: absolute;
        right:80px;
        width:300px;
        height:300px;
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

    .loading{
        position: absolute;
        top:50%;
        left:30%;
    }
</style>


