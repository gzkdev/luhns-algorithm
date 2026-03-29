# Luhn's Algorithm

## Overview

Luhn's algorithm, also known as the **"modulus 10" algorithm**, is a simple checksum formula used to validate a variety of identification numbers, most notably credit card numbers. It is designed to protect against accidental errors such as mistyped digits.

## How it works

The algorithm follows a specific set of steps to verify the validity of a number:

1.  **Double every second digit**: Starting from the right, double every second digit.
2.  **Adjust the values**: If a doubled value is greater than 9, sum its digits (e.g., 12 becomes 1 + 2 = 3).
3.  **Sum all digits**: Calculate the total sum of all digits, including the newly adjusted ones.
4.  **Check divisibility**: If the total sum is divisible by 10 (sum % 10 === 0), the number is **valid**; otherwise, it is invalid.

## Features

- **Optimized Logic**: Single-pass arithmetic implementation for maximum performance.
- **Real-time Validation**: Instant feedback and automatic formatting as you type.
- **Shadcn Vega Style**: Clean, balanced aesthetic inspired by modern UI standards.

## Optimized Implementation

This project implements an optimized version of the algorithm that improves performance through:

- **Single Pass**: By traversing the number from right to left in a single loop, we combine doubling and adjustment.
- **Arithmetic Adjustment**: Instead of string conversions for numbers > 9, we use subtraction (`num - 9`), which is mathematically equivalent to summing the digits.
- **Zero Memory Overhead**: By accumulating the sum directly, we avoid allocating extra arrays for intermediate results.

## Resources & Inspiration

- Algorithm details from [Wikipedia](https://en.wikipedia.org/wiki/Luhn_algorithm).
- By the way, I got to know about this algorithm from this [post](https://x.com/cneuralnetwork/status/1831989042826629546) on X/Twitter.

---

Built with ❤️ by [Ezihe Godswill](https://github.com/gzkdev)
