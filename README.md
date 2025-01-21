# JavaScript Function: Unexpected Behavior with Falsy Values

This repository demonstrates a common error in JavaScript functions involving the handling of falsy values. The `foo` function is designed to add two numbers, but its current implementation only checks for `null` and returns 0.  This leads to unexpected behavior when other falsy values are passed as arguments.

## Bug

The original code in `bug.js` demonstrates that the function doesn't correctly handle falsy values other than `null` which is a potential problem.

## Solution

The `bugSolution.js` file provides a revised version of the function. The revised function explicitly checks for falsy values using a more robust approach.  It handles various falsy values consistently and provides a more predictable outcome.