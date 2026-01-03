---
title: README
---
## サイトについて
これは[まどれーぬ](https://github.com/madoreenu314)のいわゆる[[digital garden]]です。

Today I Learnedリポジトリ的なことがやりたくて、Obsidianで編集し、GitHub Pagesにパブリッシュしています。単なるメモ以上でも以下でもないので、内容は信用しないでください。

Astroの[Spaceship](https://astro.build/themes/details/astro-spaceship/)テーマを使っています。

repo: https://github.com/madoreenu314/til

## 使い方メモ

```Bash
rm -rf .astro
npx astro dev --base /til
npm run build
```

http://localhost:4321/til

フォルダ構成を変更した際は必ずAstro側のキャッシュを削除する。

フォルダ・ファイル名は英語にしたほうが良さそう。それが理由だかわからないが、日本語でリンクした際にビルド失敗した。

検索は残念ながら動かない。