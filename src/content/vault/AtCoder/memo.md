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
- DP
	- https://qiita.com/drken/items/dc53c683d6de8aeacf5a
