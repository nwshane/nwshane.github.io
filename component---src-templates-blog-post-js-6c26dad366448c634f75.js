webpackJsonp([0x620f737b6699],{"./assets/icons/dateIcon.svg":function(e,n){e.exports='<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="icon-responsive"><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>'},"./src/components/BlogLayout.js":function(e,n,t){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function a(e,n){return e.raw=n,e}n.__esModule=!0;var o=a(["\n  max-width: 75rem;\n"],["\n  max-width: 75rem;\n"]),r=t("./src/components/Layout.js"),l=s(r),u=t("./node_modules/styled-components/lib/index.js"),d=s(u),m=(0,d.default)(l.default)(o);n.default=m,e.exports=n.default},"./src/components/DateWithIcon.js":function(e,n,t){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function a(e,n){var t={};for(var s in e)n.indexOf(s)>=0||Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}function o(e,n){return e.raw=n,e}n.__esModule=!0;var r=o(["\n  margin-right: 0.2em;\n  svg {\n    fill: ",";\n    max-width: 0.9em;\n    max-height: 0.9em;\n  }\n"],["\n  margin-right: 0.2em;\n  svg {\n    fill: ",";\n    max-width: 0.9em;\n    max-height: 0.9em;\n  }\n"]),l=t("./node_modules/react/react.js"),u=s(l),d=t("./assets/icons/dateIcon.svg"),m=s(d),i=t("./node_modules/styled-components/lib/index.js"),c=s(i),p=t("./src/styles.js"),g=c.default.span(r,p.primaryColor),f=function(e){var n=e.date,t=a(e,["date"]);return u.default.createElement("span",t,u.default.createElement(g,{dangerouslySetInnerHTML:{__html:m.default}}),u.default.createElement("span",null,n))};n.default=f,e.exports=n.default},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/django09/Documents/Programming/projects/personal/nathan_shane_site/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/django09/Documents/Programming/projects/personal/nathan_shane_site/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/django09/Documents/Programming/projects/personal/nathan_shane_site/node_modules/babel-plugin-transform-object-assign/lib/index.js",["babel-plugin-root-import"]],"presets":[["/Users/django09/Documents/Programming/projects/personal/nathan_shane_site/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/django09/Documents/Programming/projects/personal/nathan_shane_site/node_modules/babel-preset-stage-0/lib/index.js","/Users/django09/Documents/Programming/projects/personal/nathan_shane_site/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/templates/blogPost.js':function(e,n,t){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function a(e,n){return e.raw=n,e}n.__esModule=!0,n.pageQuery=void 0;var o=a(["\n  margin-top: 50px;\n"],["\n  margin-top: 50px;\n"]),r=a(["\n  margin-bottom: 50px;\n"],["\n  margin-bottom: 50px;\n"]),l=a(["\n  margin-bottom: 10px;\n"],["\n  margin-bottom: 10px;\n"]),u=a(["\n  line-height: 1.2;\n"],["\n  line-height: 1.2;\n"]),d=t("./node_modules/react/react.js"),m=s(d),i=t("./src/components/Layout.js"),c=(s(i),t("./node_modules/styled-components/lib/index.js")),p=s(c),g=t("./src/components/BlogLayout.js"),f=s(g),h=t("./src/components/DateWithIcon.js"),_=s(h),b=p.default.article(o),j=p.default.section(r),x=p.default.h1(l),v=p.default.main(u),y=function(e){var n=e.data,t=n.markdownRemark,s=t.frontmatter;return m.default.createElement(f.default,null,m.default.createElement(b,null,m.default.createElement(j,null,m.default.createElement(x,null,s.title),m.default.createElement(_.default,{date:s.date})),m.default.createElement(v,{dangerouslySetInnerHTML:{__html:t.html}})))};n.default=y;n.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-blog-post-js-6c26dad366448c634f75.js.map