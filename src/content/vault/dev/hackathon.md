### フロー
1. 利用イメージ設計
	- 流れを書き出す
2. UI作成
3. 開発ステップ作成

### Git
``` bash
git checkout frontend
# 編集　ワークツリー
git add file.txt # ステージに乗る
git commit -m "msg"　# コミット　コミットしたぶんだけワークツリーから消える
git push origin frontend

git checkout main
git merge frontend
git push origin main

```