# FLOCSS_v1


## Git Clone
```
$ git clone git@github.com:RyunosukeOguri/FLOCSS_v1.git
```

## Getstarted
```
$ npm install
$ gulp
```


## Environment

> gulp version 3.9.1
> npm version 5.5.1
> node version  v6.5.0
> CSS Framework Bootstrap-Grid only


## フロント設計

1. Layout - スタイルの先頭に``.l-``付けます。

2. Component  - スタイルの先頭に``.c-``付けます。(パーツ) 
再利用できるパターンとして、小さな単位のモジュールを定義します。 一般的によく使われるパターンであり、例えばBootstrapのComponentカテゴリなどに見られるbuttonなどが該当します。 出来る限り、最低限の機能を持ったものとして定義されるべきであり、それ自体が固有の幅や色などの特色を持つことは避けるのが望ましいです。

3. Project    - スタイルの先頭に``.p-``付けます。
プロジェクト固有のパターンであり、いくつかのComponentと、それに該当しない要素によって構成されるものを定義します。 例えば、記事一覧や、ユーザープロフィール、画像ギャラリーなどコンテンツを構成する要素などが該当します。

4. Utility    - スタイルの先頭に``.u-``付けます。
ComponentとProjectレイヤーのObjectのモディファイアで解決することが難しい・適切では無い、わずかなスタイルの調整のための便利クラスなどを定義します。

```
├── foundation
│   ├── bootstrap
    │ ...
├── layout
│   ├── footer.scss
│   ├── header.scss
│   ├── main.scss
│   └── sidebar.scss
└── object
    ├── component
    │   ├── _alert.scss
    │   ├── _button.scss
    │   └── _navbar.scss
    │   └── _table.scss
    ├── project
    │   └── _media.scss
    └── utility
        ├── _align.scss
        ├── _animation.scss
        ├── _color.scss
        ├── _loading.scss
        ├── _margin.scss
        ├── _overwrite.scss
        └── _position.scss
```

### js

```
assets/js/
├── application.js - js全てをまとめたファイル
├── bundle.js      - js全てをまとめて圧縮したあとの最終的に読み込まれるファイル
└── src
    ├── controller - ライブラリのコントローラー
    ├── main.js    - 主のファイル
    └── store      - ストア データの処理など
```