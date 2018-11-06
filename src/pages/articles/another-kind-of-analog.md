---
templateKey: blog-post
title: Another Kind of Analog
date: 2018-11-02T09:31:02.446Z
category: Probability Synthesis
description: >-
  Introduction to Stochastic Bitstream Synthesis
tags:
  - maths
  - synthesis
---

### A Bit of Random History

In the period immediately following the Second World War, computing was ready to break into the commercial and corporate world. It was set to revolutionise how people did business, work, and even live their personal lives. Unfortunately, the technology everything was built on was not that reliable.

Even as technology became steadily faster, there is always a trade off between speed and reliability. The typical approach to programming computing systems assumes that they are going to do exactly as you program them to. If you were to suggest to a programmer that they had to work in an environment where the outcome might be different 'just because' they would consider it a [joke](http://p-nand-q.com/programming/languages/java2k/).

Seeking to confront the unreliability problem in the mid 50s, Von Neumann introduced stochastic computing as an alternative approach to conventional binary representation of numbers in computing. By converting the numbers into probabilities and then applying those probabilities to a random bitstream, you can avoid a host of reliabilities (random bit changes disappear into the rest of the random noise) and the maths neatens out as well.

### How to Stochastically Compute

Stochastic computers work on streams somewhat like analog computers (and hence analog synthesizers). Whereas analog computers represent values as different voltages, stochastic computers represent different values with probabilities. 
