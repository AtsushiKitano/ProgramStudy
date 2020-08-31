Reactの勉強
===

# 環境構築

1. Nodeインストール
1. create-react-appのインストール

```
nodebrew install-binary stable
npm install -g create-react-app
```

# 実行方法

1. jsファイルのコンパイル
1. コンパイルしたjsファイルをHTMLから読み込む

```
npx webpack --config ./webpack.config.js
```

```
<script src="<output file path>"</script>
```

# Reactプロジェクトの開発方法

1. プロジェクトの作成
1. 開発環境の起動

```
create-react-app <project name>
npm start
```

## プロジェクトの構成要素

- README.md
- node_modules
- package-lock.json
- package.json
- public
- src

# Reactとは

- WebのフロントサイドもJSで書くフレームワーク

## JSX

- HTMLの構造をJS内で記述
- トランスパイラ(Babel)でJSに変換する

## Webpack

- ブラウザ実行が可能な静的JSの生成(複数のjsの統合)

### 環境構築

```
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader webpack
npm audit fix
```

```
const path = require('path')

module.exports = {
    entry: './src/entry.js',

    output: {
        path: __dirname + '<path>'
    },

    module: {
        rules: [
            {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react', '@babel/preset-env']
                }
            }
        ]
    }
};
```
