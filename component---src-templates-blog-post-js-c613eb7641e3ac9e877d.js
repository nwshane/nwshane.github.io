webpackJsonp([0x620f737b6699],{"./assets/icons/dateIcon.svg":function(e,n){e.exports='<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="icon-responsive"><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>'},"./src/components/BlogLayout.js":function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,n){return e.raw=n,e}n.__esModule=!0;var s=o(["\n  max-width: 75rem;\n"],["\n  max-width: 75rem;\n"]),r=t("./src/components/Layout.js"),l=a(r),i=t("./node_modules/styled-components/lib/index.js"),m=a(i),d=(0,m.default)(l.default)(s);n.default=d,e.exports=n.default},"./src/components/DateWithIcon.js":function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,n){var t={};for(var a in e)n.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}function s(e,n){return e.raw=n,e}n.__esModule=!0;var r=s(["\n  margin-right: 0.2em;\n  svg {\n    fill: ",";\n    max-width: 0.9em;\n    max-height: 0.9em;\n  }\n"],["\n  margin-right: 0.2em;\n  svg {\n    fill: ",";\n    max-width: 0.9em;\n    max-height: 0.9em;\n  }\n"]),l=t("./node_modules/react/react.js"),i=a(l),m=t("./assets/icons/dateIcon.svg"),d=a(m),u=t("./node_modules/styled-components/lib/index.js"),c=a(u),p=t("./src/styles.js"),g=c.default.span(r,p.primaryColor),f=function(e){var n=e.date,t=o(e,["date"]);return i.default.createElement("span",t,i.default.createElement(g,{dangerouslySetInnerHTML:{__html:d.default}}),i.default.createElement("span",null,n))};n.default=f,e.exports=n.default},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/django09/Documents/Programming/projects/personal/nathan_shane_site/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/django09/Documents/Programming/projects/personal/nathan_shane_site/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/django09/Documents/Programming/projects/personal/nathan_shane_site/node_modules/babel-plugin-transform-object-assign/lib/index.js",["babel-plugin-root-import"]],"presets":[["/Users/django09/Documents/Programming/projects/personal/nathan_shane_site/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/django09/Documents/Programming/projects/personal/nathan_shane_site/node_modules/babel-preset-stage-0/lib/index.js","/Users/django09/Documents/Programming/projects/personal/nathan_shane_site/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/templates/blogPost.js':function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,n){return e.raw=n,e}n.__esModule=!0,n.pageQuery=void 0;var s=o(["\n  margin-top: 50px;\n"],["\n  margin-top: 50px;\n"]),r=o(["\n  margin-bottom: 50px;\n"],["\n  margin-bottom: 50px;\n"]),l=o(["\n  margin-bottom: 10px;\n  font-size: 3.2rem;\n\n  @media (min-width: 600px) {\n    font-size: 4rem;\n  }\n"],["\n  margin-bottom: 10px;\n  font-size: 3.2rem;\n\n  @media (min-width: 600px) {\n    font-size: 4rem;\n  }\n"]),i=o(["\n  line-height: 1.2;\n\n  ol, ul {\n    margin: 40px 0;\n  }\n\n  ol li, ul li {\n    margin-bottom: 15px;\n  }\n\n  h2 {\n    margin-top: 50px;\n    margin-bottom: 30px;\n    font-size: 2.5rem;\n\n    @media (min-width: 600px) {\n      font-size: 3rem;\n    }\n  }\n"],["\n  line-height: 1.2;\n\n  ol, ul {\n    margin: 40px 0;\n  }\n\n  ol li, ul li {\n    margin-bottom: 15px;\n  }\n\n  h2 {\n    margin-top: 50px;\n    margin-bottom: 30px;\n    font-size: 2.5rem;\n\n    @media (min-width: 600px) {\n      font-size: 3rem;\n    }\n  }\n"]),m=t("./node_modules/react/react.js"),d=a(m),u=t("./src/components/Layout.js"),c=(a(u),t("./node_modules/styled-components/lib/index.js")),p=a(c),g=t("./src/components/BlogLayout.js"),f=a(g),h=t("./src/components/DateWithIcon.js"),x=a(h),b=t("./src/components/HelmetTitle.js"),_=a(b),j=p.default.article(s),v=p.default.section(r),w=p.default.h1(l),y=p.default.main(i),z=function(e){var n=e.data,t=n.markdownRemark,a=t.frontmatter;return d.default.createElement(f.default,null,d.default.createElement(_.default,{title:a.title}),d.default.createElement(j,null,d.default.createElement(v,null,d.default.createElement(w,null,a.title),a.draft&&d.default.createElement("p",null,d.default.createElement("em",null,"(This is a draft, so it's not included in the blog index.)")),d.default.createElement(x.default,{date:a.date})),d.default.createElement(y,{dangerouslySetInnerHTML:{__html:t.html}})))};n.default=z;n.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-blog-post-js-c613eb7641e3ac9e877d.js.map