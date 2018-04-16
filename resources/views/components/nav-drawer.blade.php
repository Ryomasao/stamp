<div id="nav-drawer">
        <input id="nav-input" type="checkbox" class="nav-unshown">
        <label id="nav-open" for="nav-input"><span></span></label>
        <label class="nav-unshown" id="nav-close" for="nav-input"></label>
        <div id="nav-content">
            <div class="menu">
                <div class="menu-item">
                    <a href="{{ route('stamps.index') }}">スタンプラリー台紙管理</a>
                </div>
                <div class="menu-item">
                    <a href="{{ route('stamps.prot') }}">Vuewysiwygおためし</a>
                </div>
                <div class="menu-item">
                    <a href="{{ route('stamps.froala') }}">froalaおためし</a>
                </div>
            </div>
        </div>
</div>