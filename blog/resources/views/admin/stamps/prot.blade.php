
@extends('layouts.admin')
@section('title', 'Page Title')
    <link rel="stylesheet" type="text/css" href="/css/admin/stamp-create.css">
@section('content')
    <div class="stamp-create-two-column">
        <div class="stamp-create">
            <h1>Vue Wysiwyg</h1>
            <p>Quillベースのものだと、ひらがなの「さ」とか先頭に入力できねえ。。。</p>
            <form @submit.prevent="onSubmit">
              <button type="submit" class="button is-link">登録する</button>
                <div class="stamp-create-field simple-form">
                    <label class="simple-form-title">企業名</label>
                    <div class="simple-form-control">
                        <input class="simple-form-input" type="text" placeholder="Number input">
                    </div>
                </div>
                <div class="stamp-create-field simple-form">
                    <label class="simple-form-title">ヘッダーの設定</label>
                    <div class="vue-editor-wrapper">
                        <vue-editor v-model="content"></vue-editor>
                    </div>
                </div>
                <div class="stamp-create-field simple-form">
                    <label class="simple-form-title">HTMLモード</label>
                    <div class="simple-form-control">
                        <textarea v-model="content"></textarea>
                    </div>
                </div>
            </form>
        </div>
        <div class="stamp-preview">
           <div class="stamp-preview-header" v-html="content"></div>
        </div>
    </div>
@endsection

@section('content-footer')
    <script src="/js/app.js"></script>
    <script src="/js/admin/prot.js"></script>
@endsection