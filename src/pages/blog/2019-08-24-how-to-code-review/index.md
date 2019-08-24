---
slug: how-to-code-review
title: Code Review!
date: "2019-08-24T14:00:00.000Z"
---

When I started at Flocabulary at the beginning of last year, I began reviewing other people's code frequently for the first time, and I realized quickly that code review is really tricky! I recently decided that I wanted to make code review a little less intimidating for new engineers on my team, so I wrote a code review guide. I figured some of the ideas here might be useful to a broader audience, so I've adapted the guide into this blog post.

To start, here are some reasons I believe code review is absolutely fabulous:

⭐️ prevents bugs from reaching production
⭐️ improves code quality
⭐️ helps each of us stay in sync with other engineers
⭐️ a great opportunity to learn new coding skills

Reviewing code is difficult to do well, just like it's difficult to edit someone's essay. But it's also a learnable skill! Just keep trying, and remember to be compassionate not just with the engineer who wrote the code, but the engineer who's staring at it right now and trying to make sense of it. (Psst — that's you!)

### 🗒️ Quick overview of how to review code

1.  Understand what you're reviewing
2.  Figure out how thoroughly to review and whether you need to QA
3.  Review and QA each feature change together, as applicable
4.  Check for specific aspects of code (see checklist below)
5.  Ask lots of questions in Github comments
6.  Leave a PR review with a mix of positive and constructive feedback
7.  Approve the PR if there is nothing critical to change
8.  Let the coder update the PR
9.  Provide a final code review

### 🔬Specific aspects of code to check for

- [ ] Sufficient automated tests
- [ ] Good enough performance
- [ ] Expose the smallest public API possible
- [ ] Externalize configuration (e.g. use constants)
- [ ] Readability (function and variable names, etc.)
- [ ] Enough comments
- [ ] Code that wasn't written

## Tips & best practices

Here are some tips and best practices on how to go about reviewing code. Many of these will sound obvious, but they're easy to forget! If one of these speaks to you in particular, try to keep it in mind the next time you review someone's code.

### 🧠 Understand what you're reviewing

Make sure to educate yourself about the background of a pull request before you start reviewing: read the product story (if there is one), briefly skim the code, and ask for more context if necessary.

### 📒 Figure out how thoroughly to review

If the code affects a high-traffic API endpoint, you'd better review it very thoroughly; if it's just for a prototype that won't go into master, then you can likely just skim it. Ask the coder if you're not sure!

### 🔨 Figure out if you need to QA

To QA a pull request means to check that the code changes actually work. You'll need to open the app and test out any new user facing features / verify that there are no regressions. (QA stands for Quality Assurance and is used as a verb.)

Sometimes, a different person (such as a product manager) will QA the PR and you won't have to. Generally, though, it's good to have both the code reviewer and the product manager QA a pull request, so remember to do that! It'll also help you understand code when you see the effect it has in the application.

### ➿QA and review related logic together

Instead of reading a PR from top to bottom, and then QAing all at the end, it can help to:

1.  Understand the code at a high-level first
2.  Identify chunks of related logic
3.  Review and QA the first chunk, then the second chunk, etc...

Ideally, all PRs should be small and easily digestible; this advice mainly applies when a small PR isn't feasible.

### ❓️Ask lots of questions

Leave questions about things you don't understand, in order to...

- help your colleague improve code readability (e.g. variable and function names)
- encourage them to document the "whys" of their code (add comments)
- help yourself learn from your colleague's way of doing things

### ✅ Approve the PR sooner rather than later

If none of your feedback is critical, then go ahead and approve the PR. The coder can ask you to review again before they merge if they think it's necessary.

### 📜 Provide context and steps to reproduce for problems

If you discover a problem, explain it as clearly as you can. Make sure you give enough detail for other people to understand what the problem is (i.e. steps to reproduce in their own environment) and why it's a problem in the first place. Screenshots and snapshots can be super helpful (I use [monosnap](https://monosnap.com/) for that).

### ❌ Review the code that _wasn't_ written

For example, sometimes a task will consist of changing method A to method B throughout the entire codebase. For this kind of task, the reviewer can't stop at reviewing the code in the PR; they also need to search for method A in the codebase, to double check that the coder changed everything they needed to.

### 💨🏃🏽‍♀️🏃‍♀️💨 Review quickly to unblock others

Whenever possible, prioritize unblocking other people over your own work. That includes reviewing their code as soon as you can; pairing with them to help fix their problems; basically anything you can provide to minimize the time they have to wait around. This is crucial for getting a team to move quickly and nimbly and to reduce frustration.

### 🤨 Distinguish between personal preference and valuable feedback

It can be tricky to distinguish between these two. If you're unsure, then you can always ask what the other person thinks!

### 💬 Over-communicate + Talk in person

Sometimes it's easier just to talk about something in person instead of going back and forth in slack for three hours. If you think that's the case, go for it!

### 🙆 Get a third opinion

If you disagree with the coder about an aspect of their code, do your best to find a compromise that you both agree with. If that isn't possible, then ask a third party for another opinion.

### 🌎️ Keep the big picture in mind

Always ask yourself the question: is it worth both your time and the other engineer's time to discuss a particular aspect of code? For example, it might not be fully necessary to ask the other engineer to refactor some code, even if you think it would be better had they written it differently. Pick your battles.

### ❤️ Be compassionate and keep an open mind

Remember that it's impossible to write perfect code, and that we all have different backgrounds and perspectives on coding. Be compassionate when you review, include positive feedback, and make sure to keep an open mind to different ways of doing things 🤗
