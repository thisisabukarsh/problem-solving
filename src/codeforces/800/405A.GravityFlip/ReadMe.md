# Gravity Flip

## Problem Statement

Little Chris is bored during his physics lessons (too easy), so he has built a toy box to keep himself occupied. The box is special, since it has the ability to change gravity.

There are **n** columns of toy cubes in the box arranged in a line. The **i-th** column contains **a[i]** cubes. At first, the gravity in the box is pulling the cubes downwards. When Chris switches the gravity, it begins to pull all the cubes to the right side of the box.

Given the initial configuration of the toy cubes in the box, find the number of cubes in each of the **n** columns after the gravity switch!

---

## Input

- The first line of input contains an integer **n** (1 ≤ n ≤ 100), the number of columns in the box.
- The second line contains **n** space-separated integers **a[i]** (1 ≤ a[i] ≤ 100), where **a[i]** denotes the number of cubes in the i-th column.

---

## Output

Output **n** integers separated by spaces, where the **i-th** number represents the number of cubes in the **i-th** column after the gravity switch.

---

## Examples

### Example 1

**Input:**

```
4
3 2 1 2
```

**Output:**

```
1 2 2 3
```

### Example 2

**Input:**

```
3
2 3 8
```

**Output:**

```
2 3 8
```

---

## Explanation

- In the first example, the columns are sorted in non-decreasing order after the gravity switch, resulting in `1 2 2 3`.
- In the second example, the columns are already sorted, so they remain unchanged.

---

## Constraints

- 1 ≤ n ≤ 100
- 1 ≤ a[i] ≤ 100

---

## Solution Approach

To solve this problem:

1. Read the integer **n**.
2. Read the **n** integers into an array.
3. Sort the array in non-decreasing order.
4. Print the sorted array as output.

This problem can be efficiently solved using a built-in sorting function such as `sort()` in Python or `std::sort()` in C++.
