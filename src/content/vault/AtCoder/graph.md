有向グラフの閉路（ぐるぐるループ）検出
- 未訪問(white)、探索中(gray)、探索済み(black)の3状態で管理。単なる合流と閉路を見分ける必要がある

- 以下のような「ひし形」のグラフ（$A \rightarrow B, A \rightarrow C, B \rightarrow D, C \rightarrow D$）を考えてみましょう。
	1. $A \rightarrow B \rightarrow D$ と進む。$D$ を「訪問済み」にする。
	2. 一度 $A$ まで戻り、別ルートの $A \rightarrow C \rightarrow D$ と進む。
	3. $D$ を見ると、既に「訪問済み」になっている。
	4. **「訪問済みに戻ってきたから閉路だ！」と誤判定してしまう。**


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