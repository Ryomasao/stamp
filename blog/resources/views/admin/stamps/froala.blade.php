
@extends('layouts.admin')
@section('title', 'Page Title')
    <link rel="stylesheet" type="text/css" href="/css/admin/stamp-create.css">
@section('content')
    <div class="stamp-create-two-column">
        <div class="stamp-create">
            <form @submit.prevent="onSubmit">
                <p>サンプルヘッダ:https://s3-ap-northeast-1.amazonaws.com/dimpbt-s3-00/admin/img/pig-header.png</p>
                <p>サンプルスタンプ(未押下時):https://s3-ap-northeast-1.amazonaws.com/dimpbt-s3-00/admin/img/not-stamped.png</p>
                <p>サンプルスタンプ(押下時):https://s3-ap-northeast-1.amazonaws.com/dimpbt-s3-00/admin/img/pig.png</p>
                <div class="stamp-create-field simple-form">
                    <label class="simple-form-title">ヘッダーの背景色</label>
                       <div class="simple-form-control">
                        <button type="button" @click="isPicker = true">設定する</button>
                        <photoshop-picker v-if="isPicker" v-model="headerColors" @ok="isPicker = false" @cancel="cancel"/>
                    </div>
                </div>

                <div class="stamp-create-field simple-form">
                    <label class="simple-form-title">ヘッダーの背景画像</label>
                    <input type="text" v-model="headerImage">

                </div>

                <div class="stamp-create-field simple-form">
                    <label class="simple-form-title">ヘッダーコンテンツ</label>
                    <div class="vue-editor-wrapper">
                            <froala :tag="'textarea'" :config="config" v-model="headerContent"></froala> 
                    </div>
                </div>

                <div class="stamp-create-field simple-form">
                    <label class="simple-form-title">台紙の背景色</label>
                       <div class="simple-form-control">
                        <button type="button" @click="isBodyPicker = true">設定する</button>
                        <photoshop-picker v-if="isBodyPicker" v-model="bodyColors" @ok="isBodyPicker = false" @cancel="cancel"/>
                    </div>
                </div>

                <div class="stamp-create-field simple-form">
                    <label class="simple-form-title">台紙の背景画像</label>
                    <input type="text" v-model="bodyImage">
                </div>

                <div class="stamp-create-field simple-form">
                    <label class="simple-form-title">スタンプの数</label>
                    <button type="button" @click="addStamps">＋</button>
                    <button type="button" @click="decreaseStamps">－</button>
                </div>
                <!---->
                <div class="stamp-create-field simple-form">
                    <button type="button" @click="isShowUpImages = true">アップロード済みのスタンプ</button>
                    <drop-down v-if="isShowUpImages" :images="upImages" @close="isShowUpImages = false"></drop-down>
                    <label class="simple-form-title">未押下時のスタンプ</label>
                    <input type="text" v-model="notStampImage">
                </div>

                <div class="stamp-create-field simple-form">
                    <label class="simple-form-title">押下されたときスタンプの画像</label>
                    <input type="text" v-model="stampImage">
                </div>

                <div class="stamp-create-field simple-form">
                    <label class="simple-form-title">フッターの背景色</label>
                       <div class="simple-form-control">
                        <button type="button" @click="isFooterPicker = true">設定する</button>
                        <photoshop-picker v-if="isFooterPicker" v-model="footerColors" @ok="isFooterPicker = false" @cancel="cancel"/>
                    </div>
                </div>

                <div class="stamp-create-field simple-form">
                    <label class="simple-form-title">フッターの背景画像</label>
                    <input type="text" v-model="footerImage">
                </div>

                <div class="stamp-create-field simple-form">
                    <label class="simple-form-title">フッターコンテンツ</label>
                    <div class="vue-editor-wrapper">
                            <froala :tag="'textarea'" :config="config" v-model="footerContent"></froala> 
                    </div>
                </div>

                <div class="stamp-create-field simple-form">
                    <label class="simple-form-title">企業名</label>
                    <div class="simple-form-control">
                        <input class="simple-form-input" type="text" placeholder="Number input">
                    </div>
                </div>

              <button type="submit" class="button is-link">登録する</button>
            </form>
        </div>
        <div class="stamp-preview">
           <div class="stamp-preview-header" v-html="headerContent" :style="headerBg"></div>
           <stamp-component class="stamp-preview-content" :quantity="quantity" :body-style="bodyBg" :stamped-image="stampImage" :not-stamped-image="notStampImage"></stamp-component>
           <div class="stamp-preview-footer" v-html="footerContent" :style="footerBg"></div>
        </div>
    </div>
@endsection

@section('content-footer')
    <script src="/js/app.js"></script>
    <script src="/js/admin/froala.js"></script>
@endsection