[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/bHkMPWBv)
# Tail Recursion

In the lectures, we've seen code for a recursive implementation for computing
the Fibonacci numbers. Make this implementation tail-recursive. I have not
provided a template; depending on how you choose to implement the function, it
will have a different signature.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

Hint: It may help to have a look at the iterative dynamic programming
implementation. What changes between iterations of the loop?

## Runtime Analysis

Is the asymptotic complexity of tail-recursive Fibonacci different from the
non-tail-recursive version? Why, or why not, and what is the complexity
(worst-case $\Theta$)? Add your answer, including your reasoning, to this
markdown file.

In the non-tail-recursive one we are building out a tree of diferent calls where, before we hit the base case, creates two different branches of recursive calls. For example, if we wanted to find fib 4:

                fib(4)
                /   \
         fib(2)      fib(3)
          / \           / \
    fib(1) fib(0)   fib(2) fib(1)
                    / \ 
                fib(1) fib(0)

Non-tail-recursive fib has a complexity of $O(2^n)$. If we look at tail-recursive fib, it dynamically creates the number we need, in our case bottom up. Tail-recursive fib only recursively calls $n$ times, having a worst case complexity, or complexity in any case, of $\Theta(n)$. So tail-recusive fib is different than non-tail-recursive fib.