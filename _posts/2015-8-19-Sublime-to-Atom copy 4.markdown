---
layout: post
title:  "Switching from Sublime to Atom"
date:   2015-08-19
categories: Programming Atom Sublime
---
Earlier this month I was talked into making the switch from my beloved sublime to [Atom][atom]. Ive gone through a few code editors over the past few years, including [Notepad++][notepad] (how and why did I do this??), [Coda 2][coda] (love but bulky), [Sublime 2][sublime] (everything I want and ugly), and now atom (everything I want, more, and beautifull).

I think its fairly safe to say that Atom is my new favorite code and editor, and even markdown writer. It has everything I want, A beautiful interface, amazing package library, and great community support.

## Theme

Something I've always despised about the majority of themes for code editors is the lack of an amazing light theme. There is an abundance of dark themes for every editor and they all look great, but Im tired of using dark themes. It makes me tired and I just don't feel inspired when using a dark theme. Atom solved this problem for me right from the start. Included is the amazing [One Light][atom-light], it looks great, easy to read, and the syntax color selection is perfect.

## Other Packages

After I enabled this theme there were a few other minor modifications and packages I installed before feeling right at home in Atom.

- [Atom Mini Map][atom-mini-map] - A great package that carries over the mini map functionality that so many people loved from sublime.
- [Atom Linter][atom-linter] - This is something I recently started using just before my switch from Sublime to Atom. Linters help you catch errors as well as keep your code uniform. [PyFlakes][pyflake] and [JSHint][jshint] are the main two language extensions I use with Atom Linter.
- [Markdown Writer][markdown] - Simple markdown editor with a live preview.

## Other Perks
Additionally there are some perks to Atom that sold me on my decision.

- **Git Status** - Atom shows which files and lines have not been commited if you are working in a git repo. It gets as specific as showing which lines are <font color="#1cdf53"> new </font>, <font color="#e39d34"> edited</font> and even where lines have been <font color="#ff1700">removed</font>.
- **Better Split Views** - Atoms Split view is worlds easier to use than sublime. Simply right click and choose how you would like to split the pane. Atom supports both horizontal and Vertically splitting.
- **Visual Package Manager** - Atom provides a visual, searchable packages manager while still allowing you to access commands through ```cmd + shift + p```.
- **Open Source** - Yes.

Along with these perks I love that Atom is in active development. Sublime 3 has been in beta now for quite some time now and is still loaded with bugs, and while sublime 2 is very reliable its community is starting to shrink rapidly with introduction of more modern text editors.

## Downsides
The only downside that I have experienced with Atom is that it runs on a [Chromium][chromium] engine. If your on a older machine you will likely notice that atom is heavy and slow to open.

Atom is build on what is now known as [Electron][electron], formerly known as Atom Shell, this is a very cool piece of software that lets to write cross platform native applications using html, css, and javascript very easily, it works by running your application on a Chromium engine and provides a set of tools for interacting with your environment.  

## Get It
All in all Atom is a great code editor that provides all the functionality I need while remaining visually appealing and having a great community to back it up. Its worth the switch for most people, and since it open source theres not much harm in just giving it a try if your on the border.


[atom]:      http://jekyllrb.io
[notepad]: https://notepad-plus-plus.org/
[coda]: https://www.panic.com/coda/
[sublime]: http://www.sublimetext.com/
[electron]: https://github.com/atom/electron
[chromium]: http://www.chromium.org/
[atom-light]: https://github.com/atom/one-light-ui
[atom-mini-map]: https://atom.io/packages/minimap
[atom-linter]: https://atom.io/packages/linter
[pyflake]: https://github.com/AtomLinter/linter-pyflakes
[jshint]: https://atom.io/packages/linter-jshint
[markdown]: https://atom.io/packages/markdown-writer
