---
slug: meteorites-and-things
date: '2017-09-12T10:14:00.000Z'
title: Meteorites and Things
---

That's right, I'm starting a blog! I give no guarantees that I'll write here often, or that I'll write about certain topics. Basically, I just want a place where I can write when I want to write, whether that be about tech subjects, cats, interesting things I've learned, chocolate, what's been up in my life... you get the picture.

For this inaugural post, I'm going to go far out and present to you a visualization of a dataset I've had my eye on for an embarrassing amount of time now.

And now, ladies and gentlemen, let me present to you... a visualization of meteorites! Specifically, meteorite landings recorded by NASA and released online at the [Meteorite Landings API](https://catalog.data.gov/dataset/meteorite-landings-api/resource/83ca7a13-4077-435f-a39e-9330c07741ad) ([data](https://data.nasa.gov/resource/gh4g-9sfh.json)). The data was last updated in November, 2015, so I apologize that it's a bit out of date. But still pretty cool in my opinion!

{{{./MeteoriteViz}}}







----------

I should probably use the csv of 45717 rows as my dataset, since that is so much more complete than the 1000 dataset. I should also decide what I want to visualize, and then convert my dataset to JSON files for use by these visualizations, to minimize the size of files being sent with the blog post.

For visualizations, I could show the average makeup of a meteorite in terms of its physical/chemical content. It'd be REALLY cool if I could show the physical makeup of a meteorite with a picture of a meteorite itself, like this picture: https://solarsystem.nasa.gov/images/content/PIA07269_mp.jpg. That would probably require converting the outline of the meteorite picture to an SVG path, and then using d3 to divide up the SVG so that the main components are shown as percentages of the size of the SVG itself.

I could also show the total number of meteorites that have fallen on each day of the year, and people could view what times of year are best for watching meteorites (perhaps even divided by continent as well).

Links:
- In depth description of meteors: https://solarsystem.nasa.gov/planets/meteors/indepth
- data.world dataset, not sure how big: https://data.world/nasa/meteorite-landings
- wikipedia on meteorite classification: https://en.wikipedia.org/wiki/Meteorite_classification
- kaggle.com meteorite dataset with csv of 45717 rows: https://www.kaggle.com/nasa/meteorite-landings?
- data.gov dataset of only 1000: https://catalog.data.gov/dataset/meteorite-landings-api/resource/83ca7a13-4077-435f-a39e-9330c07741ad
