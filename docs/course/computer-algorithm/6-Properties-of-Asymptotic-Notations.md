#### General properties
$$if \space f(n)\space is\space  O(g(n)), then\space a * f(n)\space is\space\space O(g(n))$$

$$eg: f(n) = 2n^2+ 5, O(n) = n ^2 \space if \space 7 * (2n^2 + 5) = 14n^2 + 35, \space then \space\space O(n) \space also \space O(n^2)$$
$$if \space f(n)\space is\space  \Omega(g(n)), then\space a * f(n)\space is\space\space \Omega(g(n))$$

$$eg: f(n) = 2n^2+ 5, \Omega(n) = n ^2 \space if \space 7 * (2n^2 + 5) = 14n^2 + 35, \space then \space\space \Omega(n) \space also \space \Omega(n^2)$$

#### Reflective properties
$$if \space f(n)\space is\space given, then \space f(n) \space\space is\space\space O(f(n))$$
$$eg: f(n) = n^2, O(n) = n ^2 = f(n)$$
#### Transitive properties
$$if \space f(n)\space is\space\space O(g(n)), and\space g(n) \space is\space O(h(n)),  then \space f(n)= O(h(n))$$
$$eg: f(n) = n \space g(n) = n^2 \space h(n) = n ^3 \space \therefore n\space is \space O(n^2), n^2\space is \space O(n^3), then\space n\space is \space O(n^3)$$
#### Symmetric properties
$$if \space f(n)\space is\space\space \Theta(g(n)), then \space g(n)= \Theta(f(n))$$
$$eg: f(n) = n^2 \space g(n) = n^2 \space \because f(n)=\Theta(n^2) \therefore g(n)=\Theta(n^2) $$
#### Transpose Symmetric properties
$$if \space f(n)\space is\space\space O(g(n)), then \space g(n)= \Omega(f(n))$$
$$eg: f(n) = n \space g(n) = n^2 \space \because n\space is\space O(n^2), then \space n^2 \space is \space \Omega(n) $$
#### Properties && Asymptotic Notations
$$if \space f(n)\space =\space\space O(g(n)), and \space f(n)= \Omega(g(n))$$
$$\therefore g(n)<= \space f(n)<=\Omega(g(n)) \space\therefore \theta f(n)= g(n)$$
#### Properties && Asymptotic Notations2
$$if \space f(n)\space =\space\space O(g(n)), and \space d(n)= O(e(n)) \space then f(n) + d(n) = O(max(g(n),e(n)))$$
$$eg: f(n)= n^2 = O(n) \space d(n)=n=O(n^2) \space\therefore f(n)+d(n)=n^2+n=O(n^2)$$
#### Properties && Asymptotic Notations3
$$if \space f(n)\space =\space\space O(g(n))\space and \space d(n)= O(e(n)) \space then f(n) * d(n) = O(g(n)*e(n)))$$

