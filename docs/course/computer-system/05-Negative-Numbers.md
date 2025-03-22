0 represent positive
1 represent negative

positive numbers in the range: 0...2^n-1
negative numbers in the range: -1...-2^n-1

#### Computing -x
input: x
output: -x(in 2s complement)

$y-x = y +(-x)$

idea: $2^n-x=1+(2^n-1)-x$ 

Computing -x in two's complement binary is a straightforward process that can be broken down into two simple steps:

1. Take the one's complement of the number (invert all bits, changing 0s to 1s and 1s to 0s)
2. Add 1 to the result

This method works because of how two's complement represents negative numbers. In two's complement, negative numbers are represented by taking the positive number, inverting all bits, and adding 1.

Example: 4 can represent as 0100, reverse result 1011, add 1 is 1100. which is -4

### Arithmetic Logic Unit (ALU)

An Arithmetic Logic Unit (ALU) is a fundamental component of a computer's central processing unit (CPU). It performs all arithmetic and logical operations required for executing instructions and processing data.

#### Arithmetic Operations

- Addition
- Subtraction
- Multiplication (in more complex ALUs)
- Division (in more complex ALUs)
- Increment/Decrement

#### Logical Operations

- AND
- OR
- NOT
- XOR
- Shift operations (left and right shifts)
- Rotate operations

**A basic ALU** consists of:

1. **Input Registers**: Hold the operands for the operations
2. **Control Unit**: Selects which operation to perform
3. **Functional Units**: Circuits that perform the actual operations
4. **Output Register**: Stores the result of the operation
5. **Status Flags**: Indicate conditions like:
    - Zero flag: Set when the result is zero
    - Carry flag: Set when there's a carry out from addition
    - Overflow flag: Set when the result exceeds the representable range
    - Sign flag: Indicates whether the result is positive or negative

In hardware, an ALU is typically implemented using:
- Adder circuits (ripple-carry, carry-lookahead, etc.)
- Logic gates for boolean operations
- Multiplexers to select between different operation results
- Flip-flops to store flags and results

In the context of Nand2Tetris, the ALU is designed to perform a set of predefined operations on two 16-bit inputs, producing a 16-bit output, and setting status flags as needed. The operations are selected using control bits that determine which functions to execute.

### Hack ALU

The Hack ALU (Arithmetic Logic Unit) is a central component of the Hack computer architecture in the Nand2Tetris course. It's a simplified but functional ALU designed for educational purposes that demonstrates the core principles of computer arithmetic and logic operations.

#### Control Bits and Their Functions:

- **zx**: If zx=1, set x=0 (Zero the x input)
- **nx**: If nx=1, set x=!x (Negate the x input)
- **zy**: If zy=1, set y=0 (Zero the y input)
- **ny**: If ny=1, set y=!y (Negate the y input)
- **f**: If f=1, compute out=x+y; If f=0, compute out=x&y (AND)
- **no**: If no=1, set out=!out (Negate the output)

#### Output Flags:

- **zr**: Set to 1 if out=0, 0 otherwise
- **ng**: Set to 1 if out<0 (out is negative), 0 otherwise

## Operations

With these six control bits, the Hack ALU can compute 18 different functions:

|zx|nx|zy|ny|f|no|Function|
|---|---|---|---|---|---|---|
|1|0|1|0|1|0|0|
|1|1|1|1|1|1|1|
|1|1|1|0|1|0|-1|
|0|0|1|1|0|0|x|
|1|1|0|0|0|0|y|
|0|0|1|1|0|1|!x|
|1|1|0|0|0|1|!y|
|0|0|1|1|1|1|-x|
|1|1|0|0|1|1|-y|
|0|1|1|1|1|1|x+1|
|1|1|0|1|1|1|y+1|
|0|0|1|1|1|0|x-1|
|1|1|0|0|1|0|y-1|
|0|0|0|0|1|0|x+y|
|0|1|0|0|1|1|x-y|
|0|0|0|1|1|1|y-x|
|0|0|0|0|0|0|x&y|
|0|1|0|1|0|1|x\|y|

The Hack ALU demonstrates several important computer architecture principles:

1. **Simplicity with Power**: With just a few control bits, it can perform a wide range of operations
2. **Functional Completeness**: It can compute any function needed for a basic computer
3. **Modularity**: Built from simpler components (multiplexers, adders, etc.)
4. **Efficiency**: Optimized to perform common operations with minimal control signals

This elegant design serves as an excellent introduction to ALU concepts while being simple enough to understand and implement from basic logic gates.