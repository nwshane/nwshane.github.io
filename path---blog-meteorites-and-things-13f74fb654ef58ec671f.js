webpackJsonp([0x5e138d300854],{"./node_modules/json-loader/index.js!./.cache/json/blog-meteorites-and-things.json":function(e,t){e.exports={data:{markdownRemark:{html:'<p>That\'s right, I\'m starting a blog! I give no guarantees that I\'ll write here often, or that I\'ll write about certain topics. Basically, I just want a place where I can write when I want to write, whether that be about tech subjects, cats, interesting things I\'ve learned, chocolate, what\'s been up in my life... you get the picture.</p>\n<p>For this inaugural post, I\'m going to go far out and present to you a visualization of a dataset I\'ve had my eye on for an embarrassing amount of time now.</p>\n<p>And now, ladies and gentlemen, let me present to you... a visualization of meteorites! Specifically, meteorite landings recorded by NASA and released online at the <a href="https://catalog.data.gov/dataset/meteorite-landings-api/resource/83ca7a13-4077-435f-a39e-9330c07741ad">Meteorite Landings API</a> (<a href="https://data.nasa.gov/resource/gh4g-9sfh.json">data</a>). The data was last updated in November, 2015, so I apologize that it\'s a bit out of date. But still pretty cool in my opinion!</p>\n<p>{{{./MeteoriteViz}}}</p>\n<hr>\n<p>I should probably use the csv of 45717 rows as my dataset, since that is so much more complete than the 1000 dataset. I should also decide what I want to visualize, and then convert my dataset to JSON files for use by these visualizations, to minimize the size of files being sent with the blog post.</p>\n<p>For visualizations, I could show the average makeup of a meteorite in terms of its physical/chemical content. It\'d be REALLY cool if I could show the physical makeup of a meteorite with a picture of a meteorite itself, like this picture: <a href="https://solarsystem.nasa.gov/images/content/PIA07269_mp.jpg">https://solarsystem.nasa.gov/images/content/PIA07269_mp.jpg</a>. That would probably require converting the outline of the meteorite picture to an SVG path, and then using d3 to divide up the SVG so that the main components are shown as percentages of the size of the SVG itself.</p>\n<p>I could also show the total number of meteorites that have fallen on each day of the year, and people could view what times of year are best for watching meteorites (perhaps even divided by continent as well).</p>\n<p>Links:</p>\n<ul>\n<li>In depth description of meteors: <a href="https://solarsystem.nasa.gov/planets/meteors/indepth">https://solarsystem.nasa.gov/planets/meteors/indepth</a></li>\n<li>data.world dataset, not sure how big: <a href="https://data.world/nasa/meteorite-landings">https://data.world/nasa/meteorite-landings</a></li>\n<li>wikipedia on meteorite classification: <a href="https://en.wikipedia.org/wiki/Meteorite_classification">https://en.wikipedia.org/wiki/Meteorite_classification</a></li>\n<li>kaggle.com meteorite dataset with csv of 45717 rows: <a href="https://www.kaggle.com/nasa/meteorite-landings?">https://www.kaggle.com/nasa/meteorite-landings?</a></li>\n<li>data.gov dataset of only 1000: <a href="https://catalog.data.gov/dataset/meteorite-landings-api/resource/83ca7a13-4077-435f-a39e-9330c07741ad">https://catalog.data.gov/dataset/meteorite-landings-api/resource/83ca7a13-4077-435f-a39e-9330c07741ad</a></li>\n</ul>',frontmatter:{title:"Meteorites and Things",date:"September 12, 2017",draft:!0}}},pathContext:{slug:"meteorites-and-things"}}}});
//# sourceMappingURL=path---blog-meteorites-and-things-13f74fb654ef58ec671f.js.map