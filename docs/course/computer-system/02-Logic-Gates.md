---
slug: 02-Logic-Gates
title: Logic Gates
sidebar_label: Logic Gates
date: 2025-03-05
---

### Basic Logic Gate
#### X AND y
And operation takes two 0, 1 signals, only return 1 When both input is 1

#### X OR y
or operation takes two 0, 1 signals,  return 1 When either input is 1

#### NOTX
unit operation, returns the opposite of the value.
#### NAND 
A ==NAND== gate is a fundamental digital logic gate that produces an output which is the inverse of the AND operation. NAND stands for "NOT AND" and it's considered a universal gate, meaning any other logic gate (AND, OR, NOT, XOR, etc.) can be constructed using only NAND gates.


==Universal Gate Property== 
- NAND gates can implement any Boolean function, making them extremely versatile. For example:

==Boolean Expression== 
- NOT gate: Connect both inputs of a NAND gate together
- AND gate: Output of a NAND gate fed into a NOT gate (or another NAND)
- OR gate: Apply NOT to each input, then feed into a NAND gate

(x NAND y) = NOT(x AND y)

#### XOR 

An XOR (Exclusive OR) gate is a digital logic gate that outputs true (1) only when the number of true inputs is odd. For a two-input XOR gate, this means the output is true if exactly one of the inputs is true, but not both.

- XOR produces a true output when inputs differ
- If inputs are the same (both 0 or both 1), the output is 0
- output 1 if the two input are different.

==Boolean Expression== 
- XOR is typically written as A⊕B or A^B
- It can also be expressed as (A AND NOT B) OR (NOT A AND B)

XOR gates have numerous practical applications:

- Parity checking and generation in error detection systems
- Binary addition (the sum bit in a half adder is an XOR of the inputs)
- Comparators (to determine if two bits are different)
- Encryption algorithms (XOR is used in many cryptographic protocols)
- Random number generation

### Boolean Identities
#### Commutative Laws
- (x AND y) = (y AND x)
- (x OR y) = (y OR x)
#### Associative Laws
- (x AND (y AND z)) = ((x AND y) AND z)
- (x OR (y OR z)) = ((x OR y) OR z)
#### Distributive Laws
- (x AND (y OR z)) = ((x AND y) OR (x AND z)
- (x OR (y OR z)) = ((x OR y) OR (y OR z))
#### De Morgan Laws
- NOT (x AND y) = NOT(x) OR NOT(y)
- NOT(x OR y) = NOT(x) AND NOT(y)
### Boolean Algebra
NOT(NOT(x) AND NOT(x OR y)) = x OR y

### Gate Logic
- a technique for implementing Boolean functions using logic gates
- simple chip: well-defined funcitionality
- Elementary(Nand, And, Or, Not)
- Composite(Mux, Adder, ...)

### Gate Interface/Gate Implementation
- one obstruction, maybe several different implementations

### Circuit Implementations
- hardware specific architecture
- light bulb will bright only if two switches are open(NAND)

### HDL

HDL (Hardware Description Language) is a specialized programming language used to describe the structure and behavior of electronic circuits and systems, particularly digital logic circuits. Unlike traditional programming languages that describe algorithms to be executed by a processor, HDLs describe the physical hardware structure and behavior.

- interface and parts
- textual description  of chip
- not unique, can be implemented in typically many ways
- good documentation, good descriptive names, readable
- functional declarative language, static description
- procedural  part is not part of the HDL code

#### test script
- script-based simulation
- with/without output and compare files

#### simulation process
- load the hdl file into the hardware simulator
- enter values into the chip's input pins
- evaluate the chi's logic
- inspect the resulting values


