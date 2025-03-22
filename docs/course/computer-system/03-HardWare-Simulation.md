#### Array of Bits
- sometimes we manipulate an array of bits
- it is conceptually convenient
- UDL will usually provide some convenient notation for handling these buses

#### sub-buses

In digital design and hardware description languages (HDLs), sub-buses refer to a subset or slice of bits within a larger bus. A bus is a collection of signals that are grouped together and typically represented as a single entity with multiple bits.

- Buses can be composed from sub-buses
- some syntactic choices of our HDL
	- overlaps of sub-buses are allowed on output buses of parts
	- width of internal pins is deduced automatically
	- "false" and "true" may be used as buses of any width

#### sub-buses Applications in Nand2Tetris

In the context of Nand2Tetris specifically, sub-buses are particularly important when:

1. Building the ALU (Arithmetic Logic Unit) where you might need to manipulate different parts of the inputs
2. Working with the instruction decoder where different fields of the instruction word represent different parts of the instruction
3. Implementing memory addressing where portions of an address might refer to different memory components

For example, in the Hack computer architecture (used in Nand2Tetris), a 16-bit instruction might be divided into:

- ==Bits 15-13==: Instruction type
- ==Bits 12-6==: Various control bits
- ==Bits 5-0==: Address bits

lsb: least significant byte
msb: most significant byte

```hdl
Add(a[0..7]) = lsb, a[8..15] = msb, b =..., out=...);
```

### Multiplexor
- two inputs coming in, and third input sel
- sel = 0, multiplexor outputs a 
- sel = 1,  multiplexor outputs b

- a 2-way multiplexor enables selecting and outputting one out of two possible inputs
- widely used in:
	- digital design
	- communication networks


