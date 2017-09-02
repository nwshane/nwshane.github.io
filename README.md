# Nathan Shane's personal site

This repo contains the code for Nathan Shane's site, accessible at [nathanshane.me](http://nathanshane.me).

## Important!

* Don't merge the staging branch into master, and don't merge master into staging. The branches include separate URLs in the `_config.yml` and `CNAME` files, so merging one into the other will break the site.
* The site is deployed on github pages, so *pushing to master will deploy changes in the repo to the live, production site*.
* As a result, it is important that all development work be done on a third, separate branch, such as the *dev* branch.

## Deploy to staging

Each repository gets one github page, so I created a second repository on github to host a staging version of this site.

Push to staging like this:

`git push staging HEAD:gh-pages`
