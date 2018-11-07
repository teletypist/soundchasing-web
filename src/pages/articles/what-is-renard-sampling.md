---
templateKey: blog-post
title: What is Renard Sampling
date: 2018-11-07T10:08:28.942Z
category: Renard Sampling
description: Sampling method informed by Renard Preferred Numbers
tags:
  - maths
  - code
---
I have always found recording strings and being satisfied with the result is difficult and tedious pursuit.

Basic virtual strings never seem to sound remotely realistic to me. Even thoroughly sampled string libraries suffer from the disconnect between such an expressive instrument and the less expressive MIDI keyboard controller.

When I was first experimenting with recording live strings it became apparent that a realistic ensemble required a minimum of three different violins per part. At one point I recorded 4 seperate string parts on each of three violins. Allowing for mistakes and setup I ended a full day with about 1m 30s of combined audio.

While it helps that I can play violin, the work required to source violins, practice parts and get the recordings is too much for most projects. There are certainly better sound libraries, and fancy virtual instruments where you can dial in exact modes of playing but then you merely swap one kind of tedious for another.

I have always wanted to be able to take a set of parts for strings and get a recording sounding something like how a real string group might play it. I wanted a process to take a MIDI string part and output something like me doing a quartet like my full day of recording years back.

As I looked into how to sample instruments, the goal of the sampling seems to always focus around how an instrument sounds. This is totally logical, you want a sample of an instrument so you record all the detail you can. The idea then is that you drop all your samples into an engine and then smoosh and splice all the sounds together jammed under the common interface of a piano keyboard, regardless of how unpianolike your sampled instrument happens to be.

I feel like this *instrument first* mindset is part of the problem of my disappointment with virtual strings. What I decided to pursue was a different emphasis. Rather than focussing on capturing the complete sounds of a particular instrument, I would aim to capture various details of performance instead. The goal is capturing all the ways a note is played, rather than all the ways a note might sound.

### Capturing All Performances

Ideally when you sample an instrument, the goal is to capture all the sounds an instrument makes as it matters to reproduction. Of course, if you wanted to waste your life you could record an instrument capturing every fraction of a tone, at every bow pressure and speed, but there are plenty of corners you can cut.

When it comes to capturing performance, the ideal is to encapsulate all performances into a mega performance, and then extract the parts of the mega performance into the track as dictated by the MIDI recording. Such a process would need to be offline rather than live because the system would need to know in advance how long each note is being played.

All I would need to do is play every note, for every duration, at every intensity, for every different bow technique...

This does not seem like much of a win. I would need to cut down my sample size to keep things manageable (able to be completed during this lifetime), but the question is, assuming I want to capture a given set of notes, over a set of note lengths and intensities, which should I choose?

The approach I landed on 
