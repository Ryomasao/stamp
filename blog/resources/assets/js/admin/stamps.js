
const stapms = new Vue({
    el: '.stamp-create-two-column',
    data:{
        company_id:'',
        header_template:'<p>ヘッダー領域</p>',
        header_style:`.preview-header {
            background:#A5DEE5;
            color:white;
        }
        `,
        stamp_style:`background:#75CCE8`,
        jan_code_1: '',
        jan_code_2: '',
        jan_code_3: '',
        quantity:9,
        updated:''
    },
    computed:{
        headerStyle:function(){

            let style = '<style>'
            style += this.header_style;
            style += '</style>'
            return  style;
        },
        stampStyle:function(){
            let style = '<style>'
            style += this.stamp_style;
            style += '</style>'
            return  style;
        }
    },
    watch:{
        header_template:function(){
             this.updated = this.header_template + this.headerStyle;
        },
        header_style:function(){
             this.updated = this.header_template + this.headerStyle;
        },
    },
    methods:{
         //Formのsubmitイベントが発生したとき
         onSubmit:function(){
             //$dataは上記のdataのことだよ！  
             axios.post('/admin/stamps', this.$data)
             //HTTPリクエストが成功したとき
             .then(response => {
                 location.href = '/admin/stamps';
             })
             //HTTPリクエエストが失敗した時
             .catch(error => console.log(error.response));
         },
         update:function(){
             this.updated = this.header_template + this.headerStyle;
             //this.$refs.child,$forceUpdate();
         }
    },
    components:{
        preview:{
            props:['template'],
            render(createElement){
                return createElement('div', {
                    domProps:{
                        innerHTML:this.template
                    }
                });
            },
        }
    },
    mounted:function(){
         let style = '<style>'
         style += this.header_style;
         style += '</style>'
         this.updated = this.header_template + style;
    }
});
