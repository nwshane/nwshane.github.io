# Nathan Shane's personal site

This repo contains the code for Nathan Shane's site, accessible at [nathanshane.me](http://nathanshane.me).

## Jekyll debugging tips

* To see the contents of a variable, output it to the page with inspect, as in the following example:

`{{ site.categories.projects | inspect }}`

## Deploy to staging

Each repository gets one github page, so I created a second repository on github to host a staging version of this site.

Push to staging like this:

`git push staging HEAD:gh-pages`
