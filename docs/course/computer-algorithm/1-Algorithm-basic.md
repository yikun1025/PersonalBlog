---
slug: 1-Algorithm-basic
title: Algorithm Basics
sidebar_label: Algorithm Basics
---

### Algorithm and Procedures

>An ==algorithm== is a step-by-step procedure or set of rules designed to solve a specific problem or perform a particular task. Think of it as a detailed recipe or instruction manual that defines a sequence of operations to be executed.
	a procedure to solve the problem step by step

- **Finite**: An algorithm must terminate after a finite number of steps.
- **Definite**: Each step must be precisely defined and unambiguous.
- **Input**: An algorithm may take zero or more inputs.
- **Output**: An algorithm produces one or more outputs.
- **Effectiveness**: Each step must be basic enough to be carried out by a person using only pencil and paper.

>A ==procedure== is a sequence of steps or actions designed to accomplish a specific task or goal. It's similar to an algorithm but tends to be more general and may not always adhere to the strict requirements of algorithms (like guaranteed termination or unambiguous steps).

Key characteristics of procedures include:

1. **Sequential steps**: Procedures consist of a series of actions performed in a specific order.
2. **Purpose-oriented**: They're designed to achieve a particular outcome or complete a specific task.
3. **Documentation**: Procedures are often formally documented, especially in business, scientific, or technical contexts.
4. **Varying levels of detail**: Some procedures are highly detailed while others may be more general guidelines.
5. **Reusability**: Many procedures are designed to be used repeatedly for consistent results.

### the differences between algorithm and program

| Algorithm        | Program        |
| ---------------- | -------------- |
| Design           | Implementation |
| Domain knowledge | Programmer     |
| Any language     | prog languange |
| H/W & OS         | H/W & OS       |
| Analyze          | Testing        |

### Prior Analysis and Posteriori Testing

>==prior analysis== (sometimes called a priori analysis) refers to the evaluation of algorithms and computational processes before implementation or execution. This analytical approach focuses on understanding an algorithm's theoretical behavior rather than measuring its actual performance in a specific implementation.

Key aspects of prior analysis include:

1. **Time Complexity**: Analyzing the expected running time of an algorithm as a function of input size, typically expressed using Big O notation (e.g., O(n), O(n log n), O(n²)).
2. **Space Complexity**: Analyzing the memory requirements of an algorithm as a function of input size.
3. **Theoretical Foundation**: Using mathematical tools and reasoning to derive performance bounds and characteristics.
4. **Input Independence**: Considering algorithm behavior across all possible inputs, not just specific test cases.
5. **Asymptotic Analysis**: Focusing on how performance scales with large inputs rather than absolute performance on small inputs.

>==Posteriori testing== (also called a posteriori analysis or empirical testing) in computer science refers to the evaluation of algorithms and systems after they have been implemented, by measuring their actual performance under real-world conditions or with specific test cases.

Key characteristics of posteriori testing include:

1. **Empirical Measurement**: Collecting actual data on runtime, memory usage, and other performance metrics during execution.
2. **Implementation-Specific**: Results reflect the performance of a particular implementation, including coding decisions, compiler optimizations, and hardware influences.
3. **Benchmark-Based**: Often involves running algorithms on standardized test cases or datasets to compare performance.
4. **Profiling**: Using specialized tools to identify bottlenecks and resource usage patterns during execution.
5. **Environment-Dependent**: Results may vary based on hardware, operating system, and other environmental factors.

### the differences between Prior Analysos and Posteriori Testing

| Prior Analysis        | Posteriori Testing |
| --------------------- | ------------------ |
| algorithm             | Implementation     |
| Independent language  | language dpedent   |
| Hardware independent  | hardware depedent  |
| Time & Space Function | watch time & Bytes |

### Algorithm traits
- input： 0 or more input
- output： at least 1 output
- Definiteness:：each statement has clear definition
- finiteness： must stop
- effectiveness： efficient, do not write unnecessary statements 
### How to write an algorithm

```java
function Algorithm swap(a,b)
{
	temp = a     -> 1 time
	a = b        -> 1 time
	b = temp     -> 1 time
}
```

> every statement occupy one time.

swap程序的复杂度是: $$f(n) = \frac13$$
### How to analyze an algorithm

1. Time: time faster, better algorithm
2. Space: how much memory used
3. N/W: network used, data consumption
4. Power: how much power used
5. Cpu registers

`x = 5 * a + 6 * b 
- Time analysis: 2 mul + 1  add+ one statement, overall 4 unit time
- Space analysis:  a,b, temp three variables，S(n) = 3 word 
- space how many variables can be written as 1，3000 also regard as 1
- O(1) 

