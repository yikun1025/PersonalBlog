---
slug: 04-Reepresenting-Numbers
title: Reepresenting Numbers
sidebar_label: Reepresenting Numbers
date: 2025-03-15
---


#### Binary numbers
$$b_nb_(n-1)b_(n-2)...b_1b_0= \sum_i b_i*2^i$$


Maximum with k bits is 1+2+4...+$2^(k-1)$= $2^k-1$

#### Fixed word size
we will use a fixed number of bits 
8 bits: possibilities 
- 2^7 = 128 for negative and positive numbers, 128+128=256
- unsigned 8 bit, 2^8 =256

because we need a largest number bit to represent negative or positive

#### Binary adding numbers
we need deal with overflow in computer systems
```
BINARY ADDITION
Input: Binary strings A, B
Output: Binary sum

1. Make A and B the same length by adding zeros to the front of the shorter one
2. Start with carry = 0
3. Begin from the rightmost bits and move left:
   - For each position:
     * Sum the bits at current position and the carry
     * If sum is 0 or 1, this is the result bit and carry becomes 0
     * If sum is 2, result bit is 0 and carry becomes 1
     * If sum is 3, result bit is 1 and carry becomes 1
4. If there's a final carry, add it as a new leftmost bit
5. Return the result
```


## Building an Adder

### Half Addr
1. Half Adder- adds two bits
2. Full Adder - adds three bits
3. Adder - Adds two numbers

A half adder is a basic digital circuit used in computing for binary addition. It adds two single binary digits (bits) and produces two outputs:

1. Sum (S): The result of adding the two input bits (A and B)
2. Carry (C): The carry bit that is generated when the sum exceeds 1

The half adder is called "half" because it can only add two bits and doesn't account for a carry input from a previous addition. When you need to add multiple bits or handle carry inputs, you would use a full adder, which combines two half adders and includes a carry input.

In digital circuit design, half adders serve as fundamental building blocks for creating more complex arithmetic circuits


```
A   -----|
         |-- Half Addr1 -- Sum1 -----|
B   -----|                        |-- Hafl Addr2 --- Final Sum
                                  |
Cin -------------------------------
         |
         |-- Half Addr1 carry -----|
                                 |-- OR gate --- Final Carry
         |-- Half Addr2 Carry -----|
```


### Full Adder

A full adder is a fundamental digital circuit used in computing that performs binary addition of three bits: two input bits (A and B) and a carry-in bit (Cin) from a previous addition. It produces two outputs: a sum bit (Sum) and a carry-out bit (Cout).

#### Inputs and Outputs
- **Inputs**: A, B, Cin (carry-in)
- **Outputs**: Sum, Cout (carry-out)

#### Truth Table

|A|B|Cin|Sum|Cout|
|---|---|---|---|---|
|0|0|0|0|0|
|0|0|1|1|0|
|0|1|0|1|0|
|0|1|1|0|1|
|1|0|0|1|0|
|1|0|1|0|1|
|1|1|0|0|1|
|1|1|1|1|1|

==Boolean Expressions==
- Sum = A ⊕ B ⊕ Cin (XOR of all three inputs)
- Cout = (A·B) + (Cin·(A⊕B)) (Carry logic)

 ==Implementation==
A full adder can be constructed using:

1. Two half adders
2. One OR gate

The implementation logic is:

- First half adder processes inputs A and B
- Second half adder takes the sum from the first half adder and Cin
- The final Sum is the output of the second half adder
- The final Cout is the OR of both half adders' carry outputs


#### 16 bit Adder
A 16-bit adder is a digital circuit that performs binary addition of two 16-bit numbers. It's a fundamental component in computer arithmetic units and forms a critical part of most processor architectures.

A 16-bit adder consists of 16 full adders connected in a chain, with each full adder handling one bit position. The chain works as follows:

1. The least significant bit (LSB) full adder receives the two least significant bits of the input numbers and a carry-in typically set to 0
2. Each subsequent full adder processes its corresponding bit position and receives the carry-out from the previous stage as its carry-in
3. The most significant bit (MSB) full adder produces the final sum bit and a carry-out that represents overflow

`overflow = carry_in_to_MSB XOR carry_out_from_MSB`
