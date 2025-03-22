# Big O Notation and Asymptotic Analysis

## Basic Rules
- $O$ (big-oh): upper bound
- $\Omega$ (big-omega): lower bound
- $\Theta$ (theta): average bound

## Example 1: Big-O Notation

**Definition**: The function $f(n) = O(g(n))$ if there exist constants $c$ and $n_0$ such that:

$$f(n) \leq c \cdot g(n) \text{ for all } n \geq n_0$$

For $f(n) = 2n + 3$:

A simple approach is to multiply by $n$:

$$f(n) = 2n + 3 \leq 2n + 3n = 5n \text{ for } n \geq 1$$

Therefore, $f(n) = O(n)$

We can also show:

$$f(n) = 2n + 3 \leq 2n^2 + 3n^2 = 5n^2 \text{ for } n \geq 1$$

So $f(n) = O(n^2)$ is also true.

### Asymptotic Growth Rates

From slowest to fastest growing:

$$1 < \log n < \sqrt{n} < n < n\log n < n^2 < n^3 < \ldots < 2^n < 3^n < \ldots < n^n$$

For $f(n) = O(n)$:
- Functions larger than $n$ (like $n\log n$) can satisfy the $O(n)$ upper bound
- Functions smaller than $n$ (like $\sqrt{n}$) can satisfy the $\Omega(n)$ lower bound

Note that:

$$f(n) = O(n) \implies f(n) = O(n^2) \implies f(n) = O(2^n)$$

## Example 2: Big-Omega Notation

**Definition**: The function $f(n) = \Omega(g(n))$ if there exist constants $c$ and $n_0$ such that:

$$f(n) \geq c \cdot g(n) \text{ for all } n \geq n_0$$

For our function $f(n) = 2n + 3$:
- $f(n)$ **cannot be written** as $\Omega(\log n)$
- The most similar bound is $\Omega(n)$

Note that:

$$f(n) = \Omega(n) \implies f(n) = \Omega(\log n) \implies f(n) = \Omega(\sqrt{n}) \implies f(n) = \Omega(1)$$

## Example 3: Theta Notation

**Definition**: The function $f(n) = \Theta(g(n))$ if there exist constants $c_1$, $c_2$, and $n_0$ such that:

$$c_1 \cdot g(n) \leq f(n) \leq c_2 \cdot g(n) \text{ for all } n \geq n_0$$

For $f(n) = 2n + 3$:

$$1 \cdot n \leq 2n + 3 \leq 5 \cdot n \text{ for } n \geq 3$$

Where $1 \cdot n$ is $c_1 \cdot g(n)$ and $5 \cdot n$ is $c_2 \cdot g(n)$

Therefore, $f(n) = \Theta(n)$

## Example 4

For $f(n) = 2n^2 + 3n + 4$:

**Upper bound**:

$$f(n) = 2n^2 + 3n + 4 \leq 2n^2 + 3n^2 + 4n^2 = 9n^2 \text{ for } n \geq 1$$

Therefore, $f(n) = O(n^2)$

**Lower bound**:

$$f(n) = 2n^2 + 3n + 4 \geq 1 \cdot n^2 \text{ for } n \geq 1$$

Therefore, $f(n) = \Omega(n^2)$

Since $f(n) = O(n^2)$ and $f(n) = \Omega(n^2)$, we have $f(n) = \Theta(n^2)$

## Example 5

For $f(n) = n^2\log n$:

$$n^2\log n \leq f(n) = n^2\log n \leq 10n^2\log n$$

Therefore, $f(n) = O(n^2\log n)$ and $f(n) = \Omega(n^2\log n)$

Thus, $f(n) = \Theta(n^2\log n)$

## Example 6

For $f(n) = n!$:

$$1 \leq n! = n \cdot (n-1) \cdot ... \cdot 1 \leq n \cdot n \cdot ... \cdot n = n^n$$

Therefore, $f(n) = O(n^n)$ and $f(n) = \Omega(1)$

For $n!$, we cannot establish a tight $\Theta$ bound using simple functions.

## Example 7

For $f(n) = \log(n!)$:

$$\log(1) \leq \log(n!) \leq \log(n^n) = n\log n$$

Therefore, $f(n) = O(n\log n)$ and $f(n) = \Omega(1)$

For $\log(n!)$, a tight $\Theta$ bound would require more analysis.