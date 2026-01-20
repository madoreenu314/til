有向グラフの閉路（ぐるぐるループ）検出
- 未訪問(white)、探索中(gray)、探索済み(black)の3状態で管理。単なる合流と閉路を見分ける必要がある
``` python
n = ...
g = ...

state = [0] * n
has_cycle = False

def dfs(v):
    global has_cycle
    state[v] = 1  # gray
    for nv in g[v]:
        if state[nv] == 0:
            dfs(nv) # 未訪問なので深く潜る
        elif state[nv] == 1:
            has_cycle = True  
            # 今ちょうど通ってきた線の中のどこかに戻ったなら、閉路発見
    state[v] = 2  # black

for i in range(n):
    if state[i] == 0:
        dfs(i)

print("Yes" if has_cycle else "No")

```