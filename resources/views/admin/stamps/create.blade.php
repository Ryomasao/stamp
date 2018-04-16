
@extends('layouts.admin')
@section('title', 'Page Title')
    <link rel="stylesheet" type="text/css" href="/css/admin/stamp-create.css">
@section('content')
    <div class="stamp-create-two-column">
        <div class="stamp-create">
            <form @submit.prevent="onSubmit">
              <button type="submit" class="button is-link">登録する</button>
                <div class="stamp-create-field simple-form">
                    <label class="simple-form-title">企業名</label>
                    <div class="simple-form-control">
                        <input class="simple-form-input" type="text" placeholder="Number input" v-model="company_id">
                    </div>
                </div>
                <div class="stamp-create-field simple-form">
                    <label class="simple-form-title">台紙のヘッダ(HTML)</label>
                    <div class="simple-form-control">
                        <textarea class="simple-form-textarea" placeholder="Textarea" v-model="header_template"></textarea>
                    </div>
                </div>
                <div class="stamp-create-field simple-form">
                    <label class="simple-form-title">台紙のヘッダ(CSS)</label>
                    <div class="simple-form-control">
                        <textarea class="simple-form-textarea" placeholder="Textarea" v-model="header_style"></textarea>
                    </div>
                </div>
                <div class="stamp-create-field simple-form">
                    <label class="simple-form-title">台紙のスタイル(CSS)</label>
                    <div class="simple-form-control">
                       <textarea class="simple-form-textarea" placeholder="Textarea" v-model="stamp_style"></textarea>
                    </div>
                </div>
            </form>
        </div>

        <div class="preview">
            <preview ref="child" :template="updated" class="preview-header"></preview>
            <div class="preview-content" :style="stamp_style">
                <h1 class="">ここにスタンプが入る</h1>
                <stamp-component :quantity="quantity"></stamp-component>
            </div>
            <div class="preview-footer">
                <p>footer</p>
            </div>
        </div>
    </div>
@endsection

@section('content-footer')
    <script src="/js/app.js"></script>
    <script src="/js/admin/stamps.js"></script>
@endsection