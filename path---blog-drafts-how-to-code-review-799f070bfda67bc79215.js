webpackJsonp([0xd98d86e68c6d],{495:function(e,t){e.exports={data:{markdownRemark:{html:"<p>I began reviewing other people's code frequently for the first time at the beginning of last year, and I realized quickly that code review is really tricky! I recently decided that I wanted to make code review a little less intimidating for new engineers on my team, so I wrote a code review guide. I figured some of the ideas here might be useful to a broader audience, so I've adapted the guide into this blog post.</p>\n<p>To start, here are some reasons I believe code review is absolutely fabulous:</p>\n<p>⭐️ prevents bugs from reaching production\n⭐️ improves code quality\n⭐️ helps each of us stay in sync with other engineers\n⭐️ a great opportunity to learn new coding skills</p>\n<p>Reviewing code is difficult to do well, just like it's difficult to edit someone's essay. But it's also a learnable skill! Just keep trying, and remember to be compassionate not just with the engineer who wrote the code, but the engineer who's staring at it right now and trying to make sense of it. (Psst — that's you!)</p>\n<h3>🗒️ Quick overview of how to review code</h3>\n<ol>\n<li>Understand what you're reviewing</li>\n<li>Figure out how thoroughly to review and whether you need to QA</li>\n<li>Review and QA each feature change together, as applicable</li>\n<li>Check for specific aspects of code (see checklist below)</li>\n<li>Ask lots of questions in Github comments</li>\n<li>Leave a PR review with a mix of positive and constructive feedback</li>\n<li>Approve the PR if there is nothing critical to change</li>\n<li>Let the coder update the PR</li>\n<li>Provide a final code review</li>\n</ol>\n<h3>🔬Specific aspects of code to check for</h3>\n<ul>\n<li class=\"task-list-item\"><input type=\"checkbox\" disabled> Sufficient automated tests</li>\n<li class=\"task-list-item\"><input type=\"checkbox\" disabled> Good enough performance</li>\n<li class=\"task-list-item\"><input type=\"checkbox\" disabled> Expose the smallest public API possible</li>\n<li class=\"task-list-item\"><input type=\"checkbox\" disabled> Externalize configuration (e.g. use constants)</li>\n<li class=\"task-list-item\"><input type=\"checkbox\" disabled> Readability (function and variable names, etc.)</li>\n<li class=\"task-list-item\"><input type=\"checkbox\" disabled> Enough comments</li>\n<li class=\"task-list-item\"><input type=\"checkbox\" disabled> Code that wasn't written</li>\n</ul>\n<h2>Tips &#x26; best practices</h2>\n<p>Here are some tips and best practices on how to go about reviewing code. Many of these will sound obvious, but they're easy to forget! If one of these speaks to you in particular, try to keep it in mind the next time you review someone's code.</p>\n<h3>🧠 Understand what you're reviewing</h3>\n<p>Make sure to educate yourself about the background of a pull request before you start reviewing: read the product story (if there is one), briefly skim the code, and ask for more context if necessary.</p>\n<h3>📒 Figure out how thoroughly to review</h3>\n<p>If the code affects a high-traffic API endpoint, you'd better review it very thoroughly; if it's just for a prototype that won't go into master, then you can likely just skim it. Ask the coder if you're not sure!</p>\n<h3>🔨 Figure out if you need to QA</h3>\n<p>To QA a pull request means to check that the code changes actually work. You'll need to open the app and test out any new user facing features / verify that there are no regressions. (QA stands for Quality Assurance and is used as a verb.)</p>\n<p>Sometimes, a different person (such as a product manager) will QA the PR and you won't have to. Generally, though, it's good to have both the code reviewer and the product manager QA a pull request, so remember to do that! It'll also help you understand code when you see the effect it has in the application.</p>\n<h3>➿QA and review related logic together</h3>\n<p>Instead of reading a PR from top to bottom, and then QAing all at the end, it can help to:</p>\n<ol>\n<li>Understand the code at a high-level first</li>\n<li>Identify chunks of related logic</li>\n<li>Review and QA the first chunk, then the second chunk, etc...</li>\n</ol>\n<p>Ideally, all PRs should be small and easily digestible; this advice mainly applies when a small PR isn't feasible.</p>\n<h3>❓️Ask lots of questions</h3>\n<p>Leave questions about things you don't understand, in order to...</p>\n<ul>\n<li>help your colleague improve code readability (e.g. variable and function names)</li>\n<li>encourage them to document the \"whys\" of their code (add comments)</li>\n<li>help yourself learn from your colleague's way of doing things</li>\n</ul>\n<h3>✅ Approve the PR sooner rather than later</h3>\n<p>If none of your feedback is critical, then go ahead and approve the PR. The coder can ask you to review again before they merge if they think it's necessary.</p>\n<h3>📜 Provide context and steps to reproduce for problems</h3>\n<p>If you discover a problem, explain it as clearly as you can. Make sure you give enough detail for other people to understand what the problem is (i.e. steps to reproduce in their own environment) and why it's a problem in the first place. Screenshots and snapshots can be super helpful (I use <a href=\"https://monosnap.com/\">monosnap</a> for that).</p>\n<h3>❌ Review the code that <em>wasn't</em> written</h3>\n<p>For example, sometimes a task will consist of changing method A to method B throughout the entire codebase. For this kind of task, the reviewer can't stop at reviewing the code in the PR; they also need to search for method A in the codebase, to double check that the coder changed everything they needed to.</p>\n<h3>💨🏃🏽‍♀️🏃‍♀️💨 Review quickly to unblock others</h3>\n<p>Whenever possible, prioritize unblocking other people over your own work. That includes reviewing their code as soon as you can; pairing with them to help fix their problems; basically anything you can provide to minimize the time they have to wait around. This is crucial for getting a team to move quickly and nimbly and to reduce frustration.</p>\n<h3>🤨 Distinguish between personal preference and valuable feedback</h3>\n<p>It can be tricky to distinguish between these two. If you're unsure, then you can always ask what the other person thinks!</p>\n<h3>💬 Over-communicate + Talk in person</h3>\n<p>Sometimes it's easier just to talk about something in person instead of going back and forth in slack for three hours. If you think that's the case, go for it!</p>\n<h3>🙆 Get a third opinion</h3>\n<p>If you disagree with the coder about an aspect of their code, do your best to find a compromise that you both agree with. If that isn't possible, then ask a third party for another opinion.</p>\n<h3>🌎️ Keep the big picture in mind</h3>\n<p>Always ask yourself the question: is it worth both your time and the other engineer's time to discuss a particular aspect of code? For example, it might not be fully necessary to ask the other engineer to refactor some code, even if you think it would be better had they written it differently. Pick your battles.</p>\n<h3>❤️ Be compassionate and keep an open mind</h3>\n<p>Remember that it's impossible to write perfect code, and that we all have different backgrounds and perspectives on coding. Be compassionate when you review, include positive feedback, and make sure to keep an open mind to different ways of doing things 🤗</p>",frontmatter:{title:"An informal guide to code review",date:"August 24, 2019",draft:!0}}},pathContext:{slug:"how-to-code-review"}}}});
//# sourceMappingURL=path---blog-drafts-how-to-code-review-799f070bfda67bc79215.js.map