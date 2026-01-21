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
		seen[v] = True
	    for nv in graph[v]:
	        if not seen[nv]:
	            dfs(nv)

	```
- [[graph]]