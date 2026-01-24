```python
L = [[1, 2, 3], [4, 5]]

max_len = max(len(row) for row in L)

for i in range(max_len):
    for row in L:
        if i < len(row):
            print(row[i], end=",")

```
1,4,2,5,3,

### 便利リンク
- bit全探索
	- https://qlitre-weblog.com/python-bit-all-search-easy-trick
	- N=20の約2,000万回の計算は十分間に合うが、N=30の約300億回では無理
- 全探索
	- 10 ^ 5 (10万)パターンくらいだったらOK
- DP
	- https://qiita.com/drken/items/dc53c683d6de8aeacf5a
	- 数え上げが来たら疑おう（状態数が少ないならdfsでもいいけど）
- DFS
	```python
	import sys
	sys.setrecursionlimit(2000) # Nの最大値以上に設定
	
	def dfs(v):
	    if v == X:
	        記録
	        return
	    for nv in graph[v]:
	        if not used[nv]:
	            used[nv] = True
	            dfs(nv)
	            used[nv] = False # 重要
	```
	- 同じ頂点は 2回通らないで、ある始点から 地点 X に行けるか／行き方を調べたい時↑
- BFS
	``` python
	from collections import deque

	Q = deque([start])
	seen[start] = True

	while len(Q)>0:
	    v = Q.popleft()
	    for nv in graph[v]:
	        if not seen[nv]:
	            seen[nv] = True
	            Q.append(nv)
	```
	- 複数の地点から同時に広げたい（塗りたい・伝播させたい）なら、  最初に全部のスタート地点を Q にぶち込んでから BFS を1回だけ回す。間違えて`for`の中に`while`を書かないこと
- [[graph]]