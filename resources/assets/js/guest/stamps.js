const stapms = new Vue({
    el: '.show-stamp',
    data:{
        company_id:'',
        header_template:'',
        header_style:`.preview-header {
            background:gray;
        }
        `,
        stamp_style:`background:skyblue`,
        jan_code_1: '',
        jan_code_2: '',
        jan_code_3: '',
        updated:'',
    },
    methods:{
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
