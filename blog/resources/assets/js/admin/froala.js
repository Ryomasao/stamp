// Require Froala Editor js file.
require('froala-editor/js/froala_editor.pkgd.min')

// Require Froala Editor css files.
require('froala-editor/css/froala_editor.pkgd.min.css')
require('font-awesome/css/font-awesome.css')
require('froala-editor/css/froala_style.min.css')
require('froala-editor/js/languages/ja')

import VueFroala from 'vue-froala-wysiwyg';
import { Photoshop } from 'vue-color'
import Dropdown  from '../components/DropdownComponent';

Vue.use(VueFroala)

//カラー設定の初期設定
//photshopコンポーネントの設定例
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
        //ヘッダーの背景色
        headerColors:initColor,
        //ヘッダーの背景画像
        headerImage:'',
        //スタンプの背景色
        bodyColors:initColor,
        //スタンプの背景画像
        bodyImage:'',
        //スタンプ押下時のイメージ
        stampImage:'',
        //スタンプ未押下時のイメージ
        notStampImage:'',
        //フッターの背景色
        footerColors:initColor,
        //フッターの背景画像
        footerImage:'',
        //ヘッダーのカラーピッカーの表示制御
        isPicker:false,
        //スタンプのカラーピッカーの表示制御
        isBodyPicker:false,
        //フッターのカラーピッカーの表示制御
        isFooterPicker:false,
        //スタンプの数、この配列の要素分v-forでまわしてる
        quantity:[],
        //ヘッダーのコンテンツ
        headerContent:'',
        //フッターのコンテンツ
        footerContent:'',
        //アップロード済みイメージメニューの表示制御
        isShowUpImages:false,
        //アップロード済みイメージのURL
        upImages:[],
        //froalaの初期設定
        config:{
            placeholderText:'コンテンツの内容を記載',
            language: 'ja',
            heightMin: 100,
            heightMax: 200,
            //toolbarButtons: ['bold'],
            events: {
                'froalaEditor.initialized': function () {
                  console.log('initialized froala');
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
        'photoshop-picker': Photoshop,
        'drop-down': Dropdown,
    },
    mounted:function(){
        this.upImages = [
            'https://s3-ap-northeast-1.amazonaws.com/dimpbt-s3-00/admin/img/not-stamped.png',
            'https://s3-ap-northeast-1.amazonaws.com/dimpbt-s3-00/admin/img/pig.png'
        ]
    }
});


