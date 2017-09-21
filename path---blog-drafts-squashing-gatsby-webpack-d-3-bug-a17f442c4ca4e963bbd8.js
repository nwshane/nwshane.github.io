webpackJsonp([0xbd66857fa5d1],{"./node_modules/json-loader/index.js!./.cache/json/blog-drafts-squashing-gatsby-webpack-d-3-bug.json":function(e,t){e.exports={data:{markdownRemark:{html:'<p>I was in the midst of rebuilding my site last week with <a href="https://www.gatsbyjs.org/">Gatsby JS</a>, a React-based static site generator, when I decided I wanted to add an interactive component to my personal website. You know, something fun to spice it up a little bit.</p>\n<p>This is a perfect chance to learn <a href="https://d3js.org/">d3</a>, I thought! So I went off and read all about d3, and when I felt I was ready, I opened my application and typed:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> d3 <span class="token keyword">from</span> <span class="token string">\'d3\'</span>\n</code></pre>\n      </div>\n<p>at the top of the React component that would contain my game (this being the standard way to import d3). I then added some d3 code, just to make sure that d3 was working. With that done, I switched to the terminal to check that gatsby’s develop script had completed its build properly, and this is what I saw...</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>ERROR  Failed to compile with 2 errors\n\nThese dependencies were not found:\n\n* child_process in ./~/xmlhttprequest/lib/XMLHttpRequest.js\n* fs in ./~/xmlhttprequest/lib/XMLHttpRequest.js\n\nTo install them, you can run: npm install --save child_process fs</code></pre>\n      </div>\n<p>“Huh? That’s weird! This error seems totally unrelated to d3!” I thought.</p>\n<h2>The Journey: Part One</h2>\n<p>They say that the journey of one thousand miles begins with a single step. Well, this debugging journey began with a big <em>Sigh</em>, and I resigned myself to the fact that nothing is ever easy in JavaScript (okay okay, I know, I\'m exaggerating a little bit).</p>\n<p>The first thing I noticed about the error was that it mentioned failing to compile due to missing dependencies. Maybe it had something to do with webpack? I switched to my editor, commented out everything new except the <code>import * as d3 from \'d3\'</code> statement, returned to the terminal, and—same error message. I then commented out the import statement, and the error disappeared.</p>\n<p>Reading on in the error message, I saw that both of the missing dependencies had been specified by the module <code>xmlhttprequest</code>. I opened my editor to that module, and there they were:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>var spawn = require("child_process").spawn;\nvar fs = require("fs");</code></pre>\n      </div>\n<p>Now I had the error isolated. Well... sort of. I had traced it to a single line of my own code, which eventually led to a module failing to import node modules. But there was a whole lot going on under the hood that I didn’t understand. My confusion could be summarized with these two questions:</p>\n<ol>\n<li>Why does importing d3, a frontend data viz library, cause webpack to import the <code>xmlhttprequest</code> module, which is used for making http requests on the server?</li>\n<li>How is it possible that built-in node libraries like <code>child_process</code> and <code>fs</code> can fail to be imported?</li>\n</ol>\n<p>All I wanted to do was play around a bit with d3 and start making this game! At a loss, I decided to make a separate, smaller application with no framework to see if I could get d3 working with webpack. A little while later, I had a small app with a tiny webpack config, and—what do you know—importing d3 worked just fine. This gave rise to a third question:</p>\n<p>Why does importing d3 break in my Gatsby app, but work fine in my small, custom webpack config app?</p>\n<p>At this point, I laid the bug to rest for a while, both so that I could get some practice with d3 in this little app and to let my unconscious mind (hopefully) solve the problem for me.</p>\n<p>The next day, I paired with another person at the <a href="https://www.recurse.com/">Recurse Center</a> (where I\'m currently studying), but neither of us were able to make any real progress on this bug. When I saw that I wasn\'t the only one confused, I went big: I posted on the chat app Zulip to get help from the RC community, and I created an <a href="https://github.com/gatsbyjs/gatsby/issues/2107">issue</a> in Gatsby’s repo.</p>\n<h2>The Journey: Part Two</h2>\n<p>The next time I took a look at this bug was a few days later, when I met up with <a href="https://haroldtreen.com/">Harold Treen</a>, a fellow Recurser and JavaScript enthusiast.</p>\n<p>Just as a reminder, this is the error message I was getting:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>ERROR  Failed to compile with 2 errors\n\nThese dependencies were not found:\n\n* child_process in ./~/xmlhttprequest/lib/XMLHttpRequest.js\n* fs in ./~/xmlhttprequest/lib/XMLHttpRequest.js\n\nTo install them, you can run: npm install --save child_process fs</code></pre>\n      </div>\n<p>Almost immediately, Harold and I noticed that we could make this error go away by replacing the import all of d3 statement with statements importing parts of specific libraries:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment" spellcheck="true">// Replace this...</span>\n<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> d3 <span class="token keyword">from</span> <span class="token string">\'d3\'</span>\n\n<span class="token comment" spellcheck="true">// With this:</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span>forceSimulation<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'d3\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span>selectAll<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'d3\'</span>\n</code></pre>\n      </div>\n<p>We also figured out <a href="https://github.com/josephsavona/valuable/issues/9#issuecomment-65000999">another way</a> to patch the problem. Webpack lets you override the return value for node modules; you can make <code>require(\'fs\')</code> and <code>require(\'child_process\')</code> return empty objects like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>node<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n  fs<span class="token punctuation">:</span> <span class="token string">"empty"</span><span class="token punctuation">,</span>\n  child_process<span class="token punctuation">:</span> <span class="token string">"empty"</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Of these two fixes, I especially liked the first one, because it would also reduce bundle size. So we were done, right? Problem solved? Well, we still didn\'t know <em>why</em> this error was occurring with the <code>import *</code> statement, and both Harold and I were curious enough that we decided to continue digging.</p>\n<p>After all, the original questions that had so vexed me earlier were still unanswered:</p>\n<ol>\n<li>Why does importing d3, a frontend data viz library, cause webpack to import xmlhttprequest, used for making http requests?</li>\n<li>How is it possible that built-in node libraries like <code>child_process</code> and <code>fs</code> can fail to be imported?</li>\n<li>Why does importing d3 break in my Gatsby app, but work fine in my small, custom webpack config app?</li>\n</ol>\n<p>To begin answering the first question, Harold had the idea of searching for xmlhttprequest in package-lock.json. Sure enough, <code>xmlhttprequest</code> was being required by <code>d3-request</code>, and <code>d3-request</code> was being required by <code>d3</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code># package-lock.json\n<span class="token punctuation">{</span>\n  <span class="token property">"d3-request"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">"requires"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">"xmlhttprequest"</span><span class="token operator">:</span> <span class="token string">"1.8.0"</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">"d3"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"requires"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">"d3-request"</span><span class="token operator">:</span> <span class="token string">"1.0.6"</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>But why would a part of d3 specify a dependency that depends on node? Reading d3-request’s documentation closely, we realized that d3-request can be used both on the server and in the browser. (Its purpose is to make it easy to load different formats of data, such as CSV.)</p>\n<p>In the npm module system, a module is able to provide different entry points to its code via its package.json file. Taking a look at d3-request’s package.json revealed no less than five different entry points into the module:</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">"main"</span><span class="token operator">:</span> <span class="token string">"build/d3-request.node.js"</span><span class="token punctuation">,</span>\n  <span class="token property">"unpkg"</span><span class="token operator">:</span> <span class="token string">"build/d3-request.js"</span><span class="token punctuation">,</span>\n  <span class="token property">"jsdelivr"</span><span class="token operator">:</span> <span class="token string">"build/d3-request.js"</span><span class="token punctuation">,</span>\n  <span class="token property">"module"</span><span class="token operator">:</span> <span class="token string">"index"</span><span class="token punctuation">,</span>\n  <span class="token property">"jsnext:main"</span><span class="token operator">:</span> <span class="token string">"index.js"</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Notice anything about those entry points? The <code>main</code> property is set to the node build! Now we were onto something: if webpack was loading the <code>main</code> entry point of the module, then that would cause the following import chain:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment" spellcheck="true">// import * as d3 from \'d3\'</span>\n<span class="token comment" spellcheck="true">// => d3-request</span>\n<span class="token comment" spellcheck="true">// => xmlhttprequest</span>\n<span class="token comment" spellcheck="true">// => fs and child_process</span>\n</code></pre>\n      </div>\n<p>At around this time, one of us noticed something else of interest: Gatsby was using version 1 of webpack! I jumped over to my custom webpack config app and checked the version of webpack, which was version 3. We changed the version to 1, migrated webpack’s config to the version 1 syntax, checked the build step—and it broke!</p>\n<h2>Resolution</h2>\n<p>Stick with me, dear reader. We\'re almost there, I promise!</p>\n<p>To recap, we had learned two critical pieces of information:</p>\n<ol>\n<li><code>d3-request</code> provides a node-based build via package.json’s <code>main</code> attribute, as well as a few other builds</li>\n<li>webpack version 1 failed with the import * as d3 statement, whereas webpack version 3 worked</li>\n</ol>\n<p>With these two things in mind, Harold and I opened the webpack documentation. After some searching, we learned that webpack uses an array of package.json property names to decide how to import a module: it tries the first name in the array, then the second, then the third, etc. The main difference between the versions is the name they give to this array.</p>\n<p><strong>webpack v1 default</strong>:</p>\n<p><a href="https://webpack.github.io/docs/configuration.html#resolve-packagemains"><code>resolve.packageMains</code></a>: <code>["webpack", "browser", "web", "browserify", ["jam", "main"], "main"]</code></p>\n<p><strong>webpack v3 default (for <code>target: web</code>)</strong>:</p>\n<p><a href="https://webpack.js.org/configuration/resolve/#resolve-mainfields"><code>resolve.mainFields</code></a>: <code>["browser", "module", "main"]</code></p>\n<p>Of the properties specified by webpack v1, <code>main</code> is the only one that appears in d3-request’s package.json; thus, webpack v1 was loading the <code>main</code> build (for node). However, d3-request\'s package.json also has a <code>module</code> property, which webpack v3 includes before <code>main</code>, meaning that webpack v3 was loading the <code>module</code> build.</p>\n<p>Webpack v3’s docs for <a href="https://webpack.js.org/configuration/resolve/#resolve-mainfields"><code>resolve.mainFields</code></a> also include a link to webpack’s <a href="https://webpack.js.org/concepts/targets/"><code>target</code></a> configuration, which is what makes webpack choose the environment to emulate when building its bundle. By <a href="https://github.com/gatsbyjs/gatsby/blob/master/docs/docs/add-custom-webpack-config.md">hooking into Gatsby’s webpack config</a> and logging it to the console, we were able to see that <code>target</code> was set to <code>\'web\'</code>, which explained why fs and child_process could not be imported.</p>\n<h2>Summary</h2>\n<p>So, to get back to where we started...</p>\n<ol>\n<li>Why does importing d3 cause webpack to import node modules?</li>\n</ol>\n<p>Because d3-request provides a node build, and that’s the one webpack v1 loaded.</p>\n<ol start="2">\n<li>Why was webpack failing to import node libraries?</li>\n</ol>\n<p>Webpack’s target was set to “web,” so it resolved dependencies in a browser-like environment without access to node modules.</p>\n<ol start="3">\n<li>Why was the Gatsby webpack build breaking and my custom webpack build working?</li>\n</ol>\n<p>Because Gatsby uses webpack version 1, which was importing d3-request’s node build into a web environment. My custom webpack build worked because it used version 3, which loaded d3-request’s browser build.</p>\n<p>As an aside, Harold found this d3-request <a href="https://github.com/d3/d3-request/issues/24">issue</a> and <a href="https://github.com/d3/d3-request/commit/d635b894fee995930f7419189255da8e66062710">commit</a> from September 2, 2017, which seems to have triggered this problem.</p>\n<h2>Notes for Future Self</h2>\n<p>We solved the bug! Hurray! But before you celebrate, let\'s remember that it\'s important to learn from your bugs so that you\'ll have more tools at your disposal to squash the next one. Focus on process, not product! There are a few takeaways I’d like to remember from this debugging adventure, namely:</p>\n<ul>\n<li><strong>Take breaks and get help</strong>: I spent a lot of time thinking about how this bug shouldn\'t be possible, and feeling frustrated because I didn\'t know how to debug it. If you don\'t have a clear mind, it\'ll be 1000x harder to debug—so take a break, and if you still don\'t have a clue, then ask for help.</li>\n<li><strong>Don’t sit there, do something</strong>: Instead of trying to brainstorm reasons the bug could exist, use all the tools at your disposal to get more information. Get into the weeds, change things around, and see what happens.</li>\n<li><strong>webpack isn’t magic</strong>: And no other libraries are magic, either. I let this webpack error intimidate me, because I didn\'t actually understand what webpack does—and plus, its configuration was hidden away by Gatsby, which made it feel even more like black magic. But webpack is just code, and code can always be debugged.</li>\n<li><strong>reproduce bugs with the <em>same version</em></strong>: This one’s obvious in retrospect, but clearly I should have checked Gatsby’s webpack version before trying to reproduce the bug in a separate application.</li>\n</ul>\n<p>I feel like I learned a lot from this experience, and I hope this story gave you something to think about as well. Thanks to Harold for helping me out of this mess, and thanks to the makers of gatsby, webpack, and d3 for all their open source work.</p>\n<p>Now go squash some bugs!</p>\n<p>*</p>',frontmatter:{title:"Squashing a Gatsby+Webpack+d3 bug",date:"September 19, 2017",draft:!0}}},pathContext:{slug:"squashing-gatsby-webpack-d3-bug"}}}});
//# sourceMappingURL=path---blog-drafts-squashing-gatsby-webpack-d-3-bug-a17f442c4ca4e963bbd8.js.map