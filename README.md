# OKAZAKI SHogo's Website

[岡崎　正悟](mailto:okazaki@zakioka.net) の個人サイトです。
## 利用技術

- TypeScript
- Gatsby
- Firebase

### 開発サーバ立ち上げ方法

- microCMS に利用登録し、API キーとサービス ID を取得する。
- 環境変数を設定する
    - `GOOGLE_ANALYTICS_TRACKING_ID`: Google Analytics のトラッキング ID
- 以下のコマンドで開発サーバ立ち上げ

```shell
$ npm run develop
```

## ビルド方法

```shell
$ npm run build
```

## デプロイ方法

- Firebase にアカウント作成、プロジェクト作成を行い、 `.firebaserc` の設定を変更する
- 以下のコマンドでデプロイ

```shell
$ npm run deploy
```

- 現在は、 GitHub Actions でビルドとデプロイを自動化している。