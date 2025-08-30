+++
date = '2025-08-30T06:57:06-04:00'
draft = false
title = 'Issue_1'
+++

# Trying out Zig with a roguelike project

<div style="margin:0 15rem">

## Part 1: The concept

Recently I've been excited by classic roguelikes. All my attempts to create a large original game have failed so far and it's usually because fundamental visual effects can take forever without a real engine, which is why the concept of a game genre that can work without audio, sprites, physics, or even dialog in some cases got me quite excited. The first theme I thought of for a roguelike was the backrooms; partially because I had been working on a backrooms game before I got into this, and also because the lore behind the backrooms basically make it an in-universe roguelike anyway.

I've also been considering trying some other languages out and figured I could make this new roguelike in Zig to see what I thought of it. My verdict after a week or so playing with it? I love Zig! I would call it the language for anyone who wants to learn C but doesn't want constant segfaults in big projects.

## Part 2: The implementation

I actually didn't start on the roguelike right away; remember I was trying out a language I knew nothing about. First, I went to the official website to make sure I had Zig installed, and I read about half of the language documentation. Then for the first day I just played around with the language! I wanted the game to be able to run in the terminal/command prompt, and wanted to do that without (n)curses if possible. After a day or so, I had made good progress on that too! Sadly, I couldn't figure out how to avoid screen flicker with my library, and thought it might be fun to try out Zig's C integration features.

For those of you that don't know, Zig is designed to interface well with C code and I can confirm that it does. Just check out this example of importing the ncurses library into a zig source file, with a standard library import for comparison:

    // Importing Zig code
    const std = @import("std");

    // And importing C code!
    const ncurses = @cImport({@cInclude("ncurses.h");});

Isn't that nifty?! Just a slight syntax change to transpile a language into Zig! Anyway, enough fanboying. So after getting ncurses set up, I created a simple randomized maze map with a character to move around in it. Due to my ineperience with Zig, even that took me a few hours to make, but after I did that, I was ready for my next goal: making the map scroll.

Now this may seem like an easy task. And I suppose it would be if I was a bit smarter, but I saw a container in the standard library called "RingBuffer" and decided that it *must* be what I needed. To skip a lot of pain and confusion, I was wrong; first off, the ring buffer only had methods for bytewise extraction/injection - in retrospect I imagine it's meant to be used for character buffering - and in any case, the ring buffer could only rotate *in one direction!* That meant that I would only be able to scroll the screen down/right. So I decided a dynamic structure was overkill and instead went for a stack allocated array with an index function that offsets the access position to "scroll" the output. If you've ever maed a camera system for a game, what I made was basically that.

That last paragraph all happened yesterday, and since then I discovered the [r/roguelikedev](https://www.reddit.com/r/roguelikedev) subreddit and [roguebasin.com](https://www.roguebasin.com/); I'm hoping they will help me with implementation details in the future, but until then, I'll be seeing you!

[Goodbye!](../..)

</div>
