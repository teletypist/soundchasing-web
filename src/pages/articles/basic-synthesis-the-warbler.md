---
templateKey: blog-post
title: Basic Synthesis - The Warbler
date: 2018-11-07T09:06:29.629Z
category: Probability Synthesis
description: A versatile uncertainty triangle wave generator
tags:
  - maths
  - synthesis
---
Assuming you have read the article introducing [stochastic synthesis](/articles/another-kind-of-analog/) (if not go back and read it), it's now time to put stochastic computing to use.

To begin, let's start with a bit stream where the probability that any given bit is high is a constant between 0 and 1.0, ie:

```
P(X=1) = p, 0 <= p < 1.0
```

We know that we can generate such a bit stream by generating a random sequence of numbers between 0 and 1 and testing if they are less than or equal to `p`.
 
