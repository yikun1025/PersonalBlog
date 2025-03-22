"use strict";(self.webpackChunkzxuqian_cn=self.webpackChunkzxuqian_cn||[]).push([[3249],{2085:(e,t,a)=>{a(6540),a(6025)},2792:(e,t,a)=>{a.d(t,{A:()=>n});const n={sidebar:[{id:"sidebarAd1",alt:"\u3010\u817e\u8baf\u4e91\u3011\u4e91\u4ea7\u54c1\u9650\u65f6\u79d2\u6740\uff0c\u7206\u6b3e1\u68382G\u4e91\u670d\u52a1\u5668\uff0c\u9996\u5e7499\u5143",imageSrc:"img/ads/sidebar_ad1.webp",link:"https://cloud.tencent.com/act/cps/redirect?redirect=1077&cps_key=2c427bf21a8dbca51ee45224ab31c2a9&from=console"},{id:"sidebarAd2",alt:"\u91c7\u8d2d\u5b63\u4e91\u5c0f\u7ad9\u72c2\u6b22\u8282\uff0c\u4e0a\u4e91\u91c7\u8d2d\u4e09\u91cd\u5956\u52b1\u62ff\u4e0d\u505c\uff01",imageSrc:"https://img.alicdn.com/imgextra/i1/O1CN01xmAfRY1chVAa3L9vn_!!6000000003632-0-tps-300-200.jpg",link:"https://www.aliyun.com/minisite/goods?userCode=idwbk8q2"}],articleFooter:[{id:"articleFooterAd1",alt:"\u3010\u817e\u8baf\u4e91\u3011\u4e91\u4ea7\u54c1\u9650\u65f6\u79d2\u6740\uff0c\u7206\u6b3e1\u68382G\u4e91\u670d\u52a1\u5668\uff0c\u9996\u5e7499\u5143",imageSrc:"img/ads/post_footer_ad1.webp",link:"https://cloud.tencent.com/act/cps/redirect?redirect=1077&cps_key=2c427bf21a8dbca51ee45224ab31c2a9&from=console"}]}},4428:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(6540),r=a(4387);const i=function(e){return e.preview?n.createElement(n.Fragment,null,n.createElement(r.A,e),n.createElement("p",null,"\u9884\u89c8\uff1a"),n.createElement("iframe",{sandbox:!0,srcdoc:e.children,style:{width:"100%",height:"100%",border:"2px dashed hsl(0deg 0% 90%)"}})):n.createElement(r.A,e)}},5195:(e,t,a)=>{a.d(t,{A:()=>p});var n=a(8168),r=a(6540),i=a(6342);function l(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),a=Array(7).fill(-1);t.forEach(((e,t)=>{const n=a.slice(2,e.level);e.parentIndex=Math.max(...n),a[e.level]=t}));const n=[];return t.forEach((e=>{const{parentIndex:a,...r}=e;a>=0?t[a].children.push(r):n.push(r)})),n}function o(e){let{toc:t,minHeadingLevel:a,maxHeadingLevel:n}=e;return t.flatMap((e=>{const t=o({toc:e.children,minHeadingLevel:a,maxHeadingLevel:n});return function(e){return e.level>=a&&e.level<=n}(e)?[{...e,children:t}]:t}))}function c(e){const t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function s(e,t){let{anchorTopOffset:a}=t;const n=e.find((e=>c(e).top>=a));if(n){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(n))?n:e[e.indexOf(n)-1]??null}return e[e.length-1]??null}function m(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:t}}=(0,i.p)();return(0,r.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,r.useRef)(void 0),a=m();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:n,linkActiveClassName:r,minHeadingLevel:i,maxHeadingLevel:l}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(n),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:a}=e;const n=[];for(let r=t;r<=a;r+=1)n.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:i,maxHeadingLevel:l}),c=s(o,{anchorTopOffset:a.current}),m=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,a){a?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===m)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,a])}function g(e){let{toc:t,className:a,linkClassName:n,isChild:i}=e;return t.length?r.createElement("ul",{className:i?void 0:a},t.map((e=>r.createElement("li",{key:e.id},r.createElement("a",{href:`#${e.id}`,className:n??void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(g,{isChild:!0,toc:e.children,className:a,linkClassName:n}))))):null}const u=r.memo(g);function p(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:m,maxHeadingLevel:g,...p}=e;const b=(0,i.p)(),f=m??b.tableOfContents.minHeadingLevel,h=g??b.tableOfContents.maxHeadingLevel,v=function(e){let{toc:t,minHeadingLevel:a,maxHeadingLevel:n}=e;return(0,r.useMemo)((()=>o({toc:l(t),minHeadingLevel:a,maxHeadingLevel:n})),[t,a,n])}({toc:t,minHeadingLevel:f,maxHeadingLevel:h});return d((0,r.useMemo)((()=>{if(c&&s)return{linkClassName:c,linkActiveClassName:s,minHeadingLevel:f,maxHeadingLevel:h}}),[c,s,f,h])),r.createElement(u,(0,n.A)({toc:v,className:a,linkClassName:c},p))}},6205:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(8168),r=a(6540);const i=a(6065).Ay.button`
  display: inline-block;
  color: white;
  padding: 0.75em 20px;
  margin-left: -2px;
  font-weight: 600;
  background: linear-gradient(
    90deg,
    var(--ifm-color-primary) 11.3%,
    var(--ifm-color-primary-light) 161.54%
  );
  box-shadow: 0px 0px 32px rgba(0, 105, 165, 0.35);
  border-radius: 7px;
  font-family: "Yuanti SC", "Youyuan", "You Yuan", "幼圆", "PingFang SC",
    "Microsoft Yahei", Helvetica, sans-serif;

  :hover {
    color: white;
    text-decoration: none;
  }
`,l=function(e){let{isLink:t=!1,children:a,...l}=e;return r.createElement(i,(0,n.A)({as:t?"a":"button"},l),a)}},6341:(e,t,a)=>{a.r(t),a.d(t,{default:()=>w});var n=a(6540),r=a(53),i=a(9024),l=a(7559),o=a(5477),c=a(4581),s=a(5489),m=a(1312);const d={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};function g(e){let{sidebar:t}=e;return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,r.A)(d.sidebar,"thin-scrollbar"),"aria-label":(0,m.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,r.A)(d.sidebarItemTitle,"margin-bottom--md")},t.title),n.createElement("ul",{className:(0,r.A)(d.sidebarItemList,"clean-list")},t.items.map((e=>n.createElement("li",{key:e.permalink,className:d.sidebarItem},n.createElement(s.A,{isNavLink:!0,to:e.permalink,className:d.sidebarItemLink,activeClassName:d.sidebarItemLinkActive},e.title)))))))}var u=a(5600);function p(e){let{sidebar:t}=e;return n.createElement("ul",{className:"menu__list"},t.items.map((e=>n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(s.A,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function b(e){return n.createElement(u.GX,{component:p,props:e})}function f(e){let{sidebar:t}=e;const a=(0,c.l)();return t?.items.length?"mobile"===a?n.createElement(b,{sidebar:t}):n.createElement(g,{sidebar:t}):null}function h(e){const{sidebar:t,toc:a,children:i,...l}=e,c=t&&t.items.length>0;return n.createElement(o.A,l,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(f,{sidebar:t}),n.createElement("main",{className:(0,r.A)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&n.createElement("div",{className:"col col--2"},a))))}var v=a(9126),E=a(8168),y=a(9022);function A(e){const{nextItem:t,prevItem:a}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,m.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},a&&n.createElement(y.A,(0,E.A)({},a,{subLabel:n.createElement(m.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&n.createElement(y.A,(0,E.A)({},t,{subLabel:n.createElement(m.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}var _=a(6584);function x(e){const{content:t}=e,{assets:a,metadata:r}=t,{title:l,description:o,date:c,tags:s,authors:m,frontMatter:d}=r,{keywords:g}=d,u=a.image??d.image;return n.createElement(i.be,{title:l,description:o,keywords:g,image:u},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:c}),m.some((e=>e.url))&&n.createElement("meta",{property:"article:author",content:m.map((e=>e.url)).filter(Boolean).join(",")}),s.length>0&&n.createElement("meta",{property:"article:tag",content:s.map((e=>e.label)).join(",")}))}function k(e){const{content:t,sidebar:a}=e,{assets:r,metadata:i}=t,{nextItem:l,prevItem:o,frontMatter:c}=i,{hide_table_of_contents:s,toc_min_heading_level:m,toc_max_heading_level:d}=c;return n.createElement(h,{sidebar:a,toc:!s&&t.toc&&t.toc.length>0?n.createElement(_.A,{toc:t.toc,minHeadingLevel:m,maxHeadingLevel:d}):void 0},n.createElement(v.A,{frontMatter:c,assets:r,metadata:i,isBlogPostPage:!0},n.createElement(t,null)),(l||o)&&n.createElement(A,{nextItem:l,prevItem:o}))}function w(e){return n.createElement(i.e3,{className:(0,r.A)(l.G.wrapper.blogPages,l.G.page.blogPostPage)},n.createElement(x,e),n.createElement(k,e))}},6584:(e,t,a)=>{a.d(t,{A:()=>g});var n=a(6540),r=a(8168),i=a(53),l=a(5195);const o="tableOfContents_bqdL";function c(e){let{className:t,...a}=e;return n.createElement("div",{className:(0,i.A)(o,"thin-scrollbar",t)},n.createElement(l.A,(0,r.A)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}a(2085);var s=a(9846),m=a(2792);const d="sidebarContainer_fjBy";const g=function(e){let{...t}=e;const{sidebar:a}=m.A;return n.createElement("div",{className:d},n.createElement(c,t),n.createElement("section",null,n.createElement(s.A,{format:"auto",responsive:"true",slot:"2034513429"})))}},9126:(e,t,a)=>{a.d(t,{A:()=>$});var n=a(6540),r=a(53),i=a(5680),l=a(5260),o=a(5489),c=a(9374),s=a(6025),m=a(4586),d=a(5293);const g="blogPostTitle_uMeh",u="readMore_ZfTr";var p=a(6065);const b=p.AH`
  h2 {
    /* font-size: 1.6em; */

    /* border-bottom: 2px solid var(--ifm-link-color); */
    /* padding-top: 0.4em;
    padding-bottom: 0.3em; */
  }

  h3 {
    /* font-size: 1em; */
    /* color: var(--ifm-link-color); */
  }

  /* h2,
  h3 {
    color: var(--post-title-color);
  } */

  p,
  li,
  a {
    /* font-size: 1em; */
    /* font-size: 18px; */
    /* text-align: justify; */
    /* letter-spacing: 0.04em; */
  }

  p,
  li {
    /* color: var(--text-color); */
  }
`,f=p.Ay.section`
  ${e=>{let{isDark:t}=e;return t?"":b}};
  ${e=>{let{isBlogPostPage:t}=e;return t?"":p.AH`
          /* img {
            width: 100%;
            height: 40%;
            max-width: 100%;
            max-height: 400px;
            object-fit: cover;
            object-position: top;
          } */
        `}}
`,h=p.Ay.div`
  margin-top: 0em;
  margin-bottom: 7.25em;

  ${e=>{let{isBlogPostPage:t}=e;return t&&p.AH`
      /* box-shadow: var(--post-shadow);
      padding: 3em 2em; */
      margin-top: 0;
    `}}

  @media (max-width: 570px) {
    .article__details {
      padding: 0;
    }
  }

  article {
    .single-post--date {
      color: var(--ifm-color-primary);
      font-size: 0.9em;
    }

    > header {
      > h1 {
        font-size: 2em;
        /* color: #2f5c85; */
        @media (max-width: 570px) {
          & {
            font-size: 1.6em;
            text-align: center;
          }
        }
      }

      > h2 {
        font-size: 2em;
        line-height: 1.5em;
        margin-bottom: 20px !important;
        a {
          color: var(--ifm-heading-color);
          &:hover {
            text-decoration: none;
          }
        }
        @media (max-width: 570px) {
          & {
            font-size: 1.7em;
          }
        }
      }

      > div > time {
        color: var(--post-pub-date-color);
      }
    }

    .markdown p,
    .markdown ul {
      font-family: var(--content-font-family);
    }
  }

  /* 卡片新拟态特效 */
  .blog-list--item {
    border-radius: 12px;
    background: var(--blog-item-background-color);
    box-shadow: var(--blog-item-shadow);
    padding: 2em 1em;

    position: relative;
  }

  @media (max-width: 1000px) {
    .blog-list--item {
      padding-right: 1em;
    }
  }

  .testt {
    position: absolute;
    font-size: 12vw;
    color: #c8a3ff;
  }

  /* @media (max-width: 570px) {
    box-shadow: none;
    padding: 0;
  } */
`;var v,E;function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)({}).hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},y.apply(null,arguments)}const A=e=>{let{title:t,titleId:a,...r}=e;return n.createElement("svg",y({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-eye","aria-labelledby":a},r),t?n.createElement("title",{id:a},t):null,v||(v=n.createElement("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"})),E||(E=n.createElement("circle",{cx:12,cy:12,r:3})))};var _=a(8402),x=a(2630),k=a(8478),w=a(6205);p.Ay.button``;const N=p.Ay.div`
  display: grid;
  row-gap: 4em;
`,L=p.Ay.div`
  display: grid;
  grid-template-areas:
    "avatar nickname"
    "avatar time"
    "avatar content";
  grid-template-columns: 64px 1fr;
  column-gap: 1em;

  ${e=>{let{isReply:t}=e;return t&&p.AH`
      margin-left: 4em;
    `}}
`,I=p.Ay.img`
  grid-area: avatar;
  width: 64px;
  height: 64px;
  border-radius: 50%;
`,H=p.Ay.div`
  grid-area: nickname;
  font-size: 1.25rem;
  color: var(--ifm-color-primary);
`,C=p.Ay.div`
  grid-area: time;
  color: #adb2ba;
`,P=p.Ay.div`
  grid-area: content;
  margin-top: 1em;
  word-break: break-all;
`;function z(e){let{isReply:t=!1,member:a,ctime:r,content:i}=e;const l=new Date(0);return l.setUTCSeconds(r),n.createElement(L,{isReply:t},n.createElement(I,{referrerPolicy:"no-referrer",src:a.avatar.replace("http","https")}),n.createElement(H,null,a.uname),n.createElement(C,null,l.getFullYear()," \u5e74 ",l.getMonth()+1," \u6708",l.getDate()," \u65e5"),n.createElement(P,null,i.message))}const T=function(e){let{activityId:t,oid:a,bvid:r}=e;const[i,l]=(0,n.useState)([]),[o,c]=(0,n.useState)({});let s="",m="11";return t&&(s=`https://t.bilibili.com/${t}?tab=2`),r&&(m="1",s=`https://www.bilibili.com/video/${r}`),(0,n.useEffect)((()=>{(async()=>{!a&&t&&(m="17",a=t);const e=await fetch(`https://api.zxuqian.cn/comments?type=${m}&oid=${a}&sort=1`),n=await e.json();l(n.replies||[]),c(n.page||{})})()}),[]),n.createElement(N,null,n.createElement(w.A,{isLink:!0,href:s,style:{width:"max-content"}},"\u53bb B \u7ad9\u53d1\u8868\u8bc4\u8bba"),i.length>0&&n.createElement("p",null,"\u8bc4\u8bba\u6570\u636e\u6765\u81ea Bilibili \u76f8\u5173\u52a8\u6001\u548c\u89c6\u9891"),i.map((e=>{const{member:t,ctime:a,content:r,replies:i}=e;return n.createElement(n.Fragment,{key:e.rpid},n.createElement(z,{key:e.rpid,member:t,ctime:a,content:r,replies:i}),i&&i.map((e=>n.createElement(z,{key:e.rpid,isReply:!0,member:e.member,ctime:e.ctime,content:e.content,replies:e.replies}))))})),o&&o.acount>=20&&n.createElement("a",{href:s},"\u53ea\u663e\u793a\u524d 20 \u6761\uff0c\u66f4\u591a\u8bc4\u8bba\u5230 B \u7ad9\u67e5\u770b"))};a(2085),a(2792);var B=a(9846),M=a(1312);function S(e){let{postId:t,...a}=e;return n.createElement(k.A,{fallback:n.createElement("div",null)},(()=>((0,n.useEffect)((()=>{(async()=>{await fetch("https://api.zxuqian.cn/post/increase_view",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({postId:t})})})()}),[]),null)))}const $=function(e){const{children:t,frontMatter:a,metadata:p,truncated:b,isBlogPostPage:v=!1,views:E}=e,{date:y,permalink:k,tags:w,readingTime:N}=p,{slug:L,author:I,title:H,image:C,activityId:P,oid:z,bvid:$}=a,O=(a.author_url||a.authorURL,a.author_title||a.authorTitle,a.author_image_url||a.authorImageURL,(0,s.A)(C,{absolute:!0})),{colorMode:j}=(0,d.G)(),R="dark"===j,{i18n:{currentLocale:F}}=(0,m.A)(),D=new Date(y),Y=D.getFullYear();let q=D.getMonth()+1;const G=D.getDate();let U=`${Y}\u5e74${q}\u6708`;"en"===F&&(q=D.toLocaleString("default",{month:"long"}),U=`${q}, ${Y}`);const W=()=>(w.length>0||b)&&n.createElement("div",{className:"post__tags-container margin-top--none margin-bottom--md"},w.length>0&&n.createElement(n.Fragment,null,n.createElement(_.g,{icon:x.DX_,color:"#c4d3e0",className:"margin-right--md"}),w.slice(0,4).map(((e,t)=>{let{label:a,permalink:r}=e;return n.createElement(o.A,{key:r,className:"post__tags "+(t>0?"margin-horiz--sm":"margin-right--sm"),to:r,style:{fontSize:"0.75em",fontWeight:500}},a)}))));return n.createElement(h,{isDark:R,isBlogPostPage:v},n.createElement(l.A,null,C&&n.createElement("meta",{property:"og:image",content:O}),C&&n.createElement("meta",{property:"twitter:image",content:O}),C&&n.createElement("meta",{name:"twitter:image:alt",content:`Image for ${H}`})),v&&n.createElement(S,{postId:L}),n.createElement("div",{className:"row \n         "+(v?"":"blog-list--item"),style:{margin:0}},!v&&n.createElement("div",{className:"post__date-container col col--3 padding-right--lg margin-bottom--lg"},n.createElement("div",{className:"post__date"},n.createElement("div",{className:"post__day"},G),n.createElement("div",{className:"post__year_month"},U)),n.createElement("div",{className:"line__decor"})),n.createElement("div",{className:"col "+(v?"col--12 article__details":"col--9")},n.createElement("article",{className:v?void 0:"margin-bottom--md"},(()=>{const e=v?"h1":"h2";return n.createElement("header",null,n.createElement(e,{className:(0,r.A)(v?"margin-bottom--md":"margin-vert--md",g,v?"text--center":"")},v?H:n.createElement(o.A,{to:k},H)))})(),!v&&W(),v&&n.createElement("p",{className:"single-post--date text--center"},U," \xb7"," ",n.createElement(M.A,{id:"blogpage.estimated.time",description:"blog page estimated time"},"\u9884\u8ba1\u9605\u8bfb\u65f6\u95f4\uff1a"),N&&n.createElement(n.Fragment,null," ",Math.ceil(N)," ",n.createElement(M.A,{id:"blogpage.estimated.time.label",description:"blog page estimated time label"},"\u5206\u949f"))),v&&n.createElement(n.Fragment,null,n.createElement("div",{className:"text--center margin-bottom--xs padding-bottom--xs"},W()),n.createElement(B.A,{responsive:"true",format:"auto",slot:"2800800187"})),n.createElement(f,{isBlogPostPage:v,isDark:R,className:"markdown"},n.createElement(i.xA,{components:c.A},t)),v&&n.createElement(B.A,{responsive:"true",format:"auto",slot:"4590671808"})),n.createElement("footer",{className:"article__footer padding-top--md margin-top--lg margin-bottom--lg"},!v&&n.createElement("span",{className:"footer__read_count"},n.createElement(A,{className:"footer__eye",style:{verticalAlign:"middle"}})," ",E),b&&n.createElement(o.A,{to:p.permalink,"aria-label":`\u9605\u8bfb ${H} \u7684\u5168\u6587`},n.createElement("strong",{className:u},n.createElement(M.A,{description:"read full text"},"\u9605\u8bfb\u5168\u6587"))),v&&n.createElement(T,{activityId:P,oid:z,bvid:$})))))}},9846:(e,t,a)=>{a.d(t,{A:()=>r});var n=a(6540);const r=function(e){let{className:t="adsbygoogle",style:a={display:"block"},client:r="ca-pub-3487507367729662",slot:i,layout:l,layoutKey:o,format:c,responsive:s}=e;return(0,n.useEffect)((()=>{window&&(window.adsbygoogle=window.adsbygoogle||[]).push({})}),[]),n.createElement("ins",{className:t,style:a,"data-ad-client":r,"data-ad-slot":i,"data-ad-layout":l,"data-ad-layout-key":o,"data-ad-format":c,"data-full-width-responsive":s})}}}]);