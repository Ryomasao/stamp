// Require Froala Editor js file.
require('froala-editor/js/froala_editor.pkgd.min')

// Require Froala Editor css files.
require('froala-editor/css/froala_editor.pkgd.min.css')
require('font-awesome/css/font-awesome.css')
require('froala-editor/css/froala_style.min.css')
require('froala-editor/js/languages/ja')

import VueFroala from 'vue-froala-wysiwyg';
import { Photoshop } from 'vue-color'

Vue.use(VueFroala)

let initColor = {
    hex: '#194d33',
    hsl: { h: 150, s: 0.5, l: 0.2, a: 1 },
    hsv: { h: 150, s: 0.66, v: 0.30, a: 1 },
    rgba: { r: 25, g: 77, b: 51, a: 1 },
    a: 1
  }

const stapms = new Vue({
    el: '.stamp-create-two-column',
    data:{
        headerColors:initColor,
        headerImage:'',
        bodyImage:'',
        footerImage:'',
        stampImage:'',
        notStampImage:'',
        bodyColors:initColor,
        footerColors:initColor,
        isPicker:false,
        isBodyPicker:false,
        isFooterPicker:false,
        quantity:[],
        headerContent:'',
        footerContent:'',
        config:{
            placeholderText:'コンテンツの内容を記載',
            language: 'ja',
            heightMin: 100,
            heightMax: 200,
            //toolbarButtons: ['bold'],
            events: {
                'froalaEditor.initialized': function () {
                  console.log('initialized')
                }
            }
        },
    },
    computed:{
        headerBg:function(){
            return {
                background: this.headerColors.hex,
                'background-image': 'url(' + this.headerImage + ')'
            }
        },
        bodyBg:function(){
            return {
                background:this.bodyColors.hex,
                'background-image': 'url(' + this.bodyImage + ')'
            }
        },
        footerBg:function(){
            return {
                background:this.footerColors.hex,
                'background-image': 'url(' + this.footerImage + ')'
            }
        }
    },
    watch:{
    },
    methods:{
        //カラーピッカーをキャンセルしたときの挙動
        //いまのところなんもしてない
        cancel:function(){
            console.log('cancel');
        },
        //スタンプを増やす
        //とりあえず、値が入ればなんでもいいので文字をセット
        addStamps:function(){
            this.quantity.push('1');
        },
        //スタンプを減らす
        decreaseStamps:function(){
            this.quantity.pop();
        }
    },
    components:{
        'photoshop-picker': Photoshop
    },
    mounted:function(){
    }
});


