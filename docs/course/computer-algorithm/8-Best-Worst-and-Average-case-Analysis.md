1. Linear search 
2. binary search tree

we have a array A:

| 8   | 6   | 12  | 5   | 9   | 7   | 4   | 3   | 16  | 18  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   |

### Linear Search
key = 7, means we need search 6 times
key = 20, means we need find 10 times

##### Best Cases
Best case: searching key element presented at first index
Best case Time: $O(1)$, so $B(n) = O(1)$

##### Worst Cases
Worst case: searching key element presented at last index
Worst case Time: $O(n)$, so $W(n) = O(n)$

##### Average Cases
Average case:

$$\frac{\text{possible case time}}{\text{no. of cases}}$$

$$\text{average time} = \frac{1+2+3+...+n}{n} = \frac{n \cdot \frac{n+1}{2}}{n} = \frac{n+1}{2}$$

$B(n) = 1$, $B(n) = O(1)$, $B(n) = \Omega(1)$, $B(n) = \Theta(1)$ 

$W(n) = n$, $W(n) = O(n)$, $W(n) = \Omega(n)$, $W(n) = \Theta(n)$ 

note: best cases and worst cases can use any symbol to represent
- using $O$ to represent bad cases
- using $\Omega$ to represent best cases


### Binary Search


key = 49 means we need search 3 times
height = log2n = log2 8 = 3