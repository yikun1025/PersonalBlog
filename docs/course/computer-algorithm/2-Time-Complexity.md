```java
for(int i = 0; i < n;i ++){  -> n + 1
	stat                     -> n
}
```

- `for(int i = 0; i < n;i ++)` executes n  + 1 times
- `stat` executes n times
- o(n) = n

```java
for(int i = n; i > 0;i --){  -> n + 1
	stat                     -> n
}
```

- `for(int i = 0; i < n;i ++)` executes n  + 1 times
- `stat` executes n times

$$\space f(n) = n$$

```java
for(int i = 0; i < n;i+2){  -> 
	stat                     -> n/2
}
```

$$f(n) = \frac{n}{2}$$

```java
for(int i = 0; i < n;i+20){  -> 
	stat                     -> n/20
}
```

$$f(n) = \frac{n}{20}$$

```java
for(int i = 0; i < n;i++){       -> n + 1
	for(int j = 0; i < n;j++)    -> n * (n + 1)
	{
		stat                    -> n * n
	}
}
```

$$f(n) = {n^2}$$

```java
for(int i = 0; i < n;i++){       -> 
	for(int j = 0; i < i;j++)    -> 
	{
		stat                    -> n + (n - 1) + (n - 2) + ... + 1
	}
}
```
$$f(n) = \frac{n^2 + 1}{2} => O(n) = n^2$$

```java
p = 0;
for(int i = 1; p < n;i++){       -> 
	p = p + i;                  -> k times p = 1 + 2 + 3 +... +k
}
```

$$f(n) = \frac{k^2 + 1}{2} >n  => k^2 >n \space => O(n) = \sqrt{n}$$

```java
for(int i = 1; i < n;i = i * 2){       -> 
	stat;                              -> 2^k
}
```

$$i = 2^k  => 2^k >= n \space => 2^k = n => k = \log_2{n}$$

```java
for(int i = 1; i < n;i = i * 3){       -> 
	stat;                              -> 3^k
}
```

$$i = 3^k  => 3^k >= n \space => 3^k = n => k = \log_3{n}$$
$$O(n) = \log_2n$$
```java
for(int i = 1; i >= 1;i = i / 2){       -> 
	stat;                              -> n/2^k
}
```

$$assume\space\space i < 1 => \frac{n}{2^k} < 1 => n = 2^k => k = \log_2n$$


```java
for(int i = 1; i >= 1;i = i / 3){       -> 
	stat;                              -> n/3^k
}
```

$$assume\space\space i < 1 => \frac{n}{3^k} < 1 => n = 3^k => k = \log_3n$$

```java
for(int i = 0; i * i < n;i = i++){       -> 
	stat;                                -> n/2^k
}
```

$$i * i < n => i * i >= n => i^2 = n = >i = \sqrt(n)$$

```java
for(int i = 0; i < n;i ++){  -> n + 1
	stat                     -> n
}

for(int j = 0; i < n;i ++){  -> n + 1
	stat                     -> n
}

```

$$n + n = 2n => O(n) = n$$


$$i * i < n => i * i >= n => i^2 = n = >i = \sqrt(n)$$

```java
for(int i = 0; i < n; i = i * 2){  
	p++;                -> p = logn
}

for(int j = 0; j < p; j = j * 2){  
	stat                     -> logp
}

```


$$p = logn => logp = log(logn) = Olog(logn)$$

```java
for(int i = 0; i < n; i = i++){  -> n

	for(int j = 1; j < n; j = j * 2){   -> n * logn
		stat                     -> logn * n 
	}
}

```

$$2nlogn + n = O(nlogn$$