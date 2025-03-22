"use strict";(self.webpackChunkzxuqian_cn=self.webpackChunkzxuqian_cn||[]).push([[7868],{5680:(e,a,t)=>{t.d(a,{xA:()=>p,yg:()=>u});var n=t(6540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),m=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},p=function(e){var a=m(e.components);return n.createElement(o.Provider,{value:a},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},y=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=m(t),y=r,u=g["".concat(o,".").concat(y)]||g[y]||c[y]||i;return t?n.createElement(u,s(s({ref:a},p),{},{components:t})):n.createElement(u,s({ref:a},p))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=y;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l[g]="string"==typeof e?e:r,s[1]=l;for(var m=2;m<i;m++)s[m]=t[m];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},8404:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=t(8168),r=(t(6540),t(5680));const i={slug:"1-Algorithm-basic",title:"Algorithm Basics",sidebar_label:"Algorithm Basics"},s=void 0,l={unversionedId:"course/computer-algorithm/Algorithm-basic",id:"course/computer-algorithm/Algorithm-basic",title:"Algorithm Basics",description:"Algorithm and Procedures",source:"@site/docs/course/computer-algorithm/1-Algorithm-basic.md",sourceDirName:"course/computer-algorithm",slug:"/course/computer-algorithm/1-Algorithm-basic",permalink:"/docs/course/computer-algorithm/1-Algorithm-basic",draft:!1,editUrl:"https://github.com/zxuqian/zxuqian.cn/tree/master/docs/course/computer-algorithm/1-Algorithm-basic.md",tags:[],version:"current",lastUpdatedAt:1742659443,formattedLastUpdatedAt:"2025/3/22",sidebarPosition:1,frontMatter:{slug:"1-Algorithm-basic",title:"Algorithm Basics",sidebar_label:"Algorithm Basics"},sidebar:"docs",previous:{title:"Negative-Numbers",permalink:"/docs/course/computer-system/Negative-Numbers"},next:{title:"Time-Complexity",permalink:"/docs/course/computer-algorithm/Time-Complexity"}},o={},m=[{value:"Algorithm and Procedures",id:"algorithm-and-procedures",level:3},{value:"the differences between algorithm and program",id:"the-differences-between-algorithm-and-program",level:3},{value:"Prior Analysis and Posteriori Testing",id:"prior-analysis-and-posteriori-testing",level:3},{value:"the differences between Prior Analysos and Posteriori Testing",id:"the-differences-between-prior-analysos-and-posteriori-testing",level:3},{value:"Algorithm traits",id:"algorithm-traits",level:3},{value:"How to write an algorithm",id:"how-to-write-an-algorithm",level:3},{value:"How to analyze an algorithm",id:"how-to-analyze-an-algorithm",level:3}],p={toc:m},g="wrapper";function c(e){let{components:a,...t}=e;return(0,r.yg)(g,(0,n.A)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h3",{id:"algorithm-and-procedures"},"Algorithm and Procedures"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"An ==algorithm== is a step-by-step procedure or set of rules designed to solve a specific problem or perform a particular task. Think of it as a detailed recipe or instruction manual that defines a sequence of operations to be executed.\na procedure to solve the problem step by step")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Finite"),": An algorithm must terminate after a finite number of steps."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Definite"),": Each step must be precisely defined and unambiguous."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Input"),": An algorithm may take zero or more inputs."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Output"),": An algorithm produces one or more outputs."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Effectiveness"),": Each step must be basic enough to be carried out by a person using only pencil and paper.")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"A ==procedure== is a sequence of steps or actions designed to accomplish a specific task or goal. It's similar to an algorithm but tends to be more general and may not always adhere to the strict requirements of algorithms (like guaranteed termination or unambiguous steps).")),(0,r.yg)("p",null,"Key characteristics of procedures include:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Sequential steps"),": Procedures consist of a series of actions performed in a specific order."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Purpose-oriented"),": They're designed to achieve a particular outcome or complete a specific task."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Documentation"),": Procedures are often formally documented, especially in business, scientific, or technical contexts."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Varying levels of detail"),": Some procedures are highly detailed while others may be more general guidelines."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Reusability"),": Many procedures are designed to be used repeatedly for consistent results.")),(0,r.yg)("h3",{id:"the-differences-between-algorithm-and-program"},"the differences between algorithm and program"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Algorithm"),(0,r.yg)("th",{parentName:"tr",align:null},"Program"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Design"),(0,r.yg)("td",{parentName:"tr",align:null},"Implementation")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Domain knowledge"),(0,r.yg)("td",{parentName:"tr",align:null},"Programmer")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Any language"),(0,r.yg)("td",{parentName:"tr",align:null},"prog languange")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"H/W & OS"),(0,r.yg)("td",{parentName:"tr",align:null},"H/W & OS")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Analyze"),(0,r.yg)("td",{parentName:"tr",align:null},"Testing")))),(0,r.yg)("h3",{id:"prior-analysis-and-posteriori-testing"},"Prior Analysis and Posteriori Testing"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"==prior analysis== (sometimes called a priori analysis) refers to the evaluation of algorithms and computational processes before implementation or execution. This analytical approach focuses on understanding an algorithm's theoretical behavior rather than measuring its actual performance in a specific implementation.")),(0,r.yg)("p",null,"Key aspects of prior analysis include:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Time Complexity"),": Analyzing the expected running time of an algorithm as a function of input size, typically expressed using Big O notation (e.g., O(n), O(n log n), O(n\xb2))."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Space Complexity"),": Analyzing the memory requirements of an algorithm as a function of input size."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Theoretical Foundation"),": Using mathematical tools and reasoning to derive performance bounds and characteristics."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Input Independence"),": Considering algorithm behavior across all possible inputs, not just specific test cases."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Asymptotic Analysis"),": Focusing on how performance scales with large inputs rather than absolute performance on small inputs.")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"==Posteriori testing== (also called a posteriori analysis or empirical testing) in computer science refers to the evaluation of algorithms and systems after they have been implemented, by measuring their actual performance under real-world conditions or with specific test cases.")),(0,r.yg)("p",null,"Key characteristics of posteriori testing include:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Empirical Measurement"),": Collecting actual data on runtime, memory usage, and other performance metrics during execution."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Implementation-Specific"),": Results reflect the performance of a particular implementation, including coding decisions, compiler optimizations, and hardware influences."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Benchmark-Based"),": Often involves running algorithms on standardized test cases or datasets to compare performance."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Profiling"),": Using specialized tools to identify bottlenecks and resource usage patterns during execution."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Environment-Dependent"),": Results may vary based on hardware, operating system, and other environmental factors.")),(0,r.yg)("h3",{id:"the-differences-between-prior-analysos-and-posteriori-testing"},"the differences between Prior Analysos and Posteriori Testing"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Prior Analysis"),(0,r.yg)("th",{parentName:"tr",align:null},"Posteriori Testing"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"algorithm"),(0,r.yg)("td",{parentName:"tr",align:null},"Implementation")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Independent language"),(0,r.yg)("td",{parentName:"tr",align:null},"language dpedent")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Hardware independent"),(0,r.yg)("td",{parentName:"tr",align:null},"hardware depedent")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Time & Space Function"),(0,r.yg)("td",{parentName:"tr",align:null},"watch time & Bytes")))),(0,r.yg)("h3",{id:"algorithm-traits"},"Algorithm traits"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"input\uff1a 0 or more input"),(0,r.yg)("li",{parentName:"ul"},"output\uff1a at least 1 output"),(0,r.yg)("li",{parentName:"ul"},"Definiteness:\uff1aeach statement has clear definition"),(0,r.yg)("li",{parentName:"ul"},"finiteness\uff1a must stop"),(0,r.yg)("li",{parentName:"ul"},"effectiveness\uff1a efficient, do not write unnecessary statements ")),(0,r.yg)("h3",{id:"how-to-write-an-algorithm"},"How to write an algorithm"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"function Algorithm swap(a,b)\n{\n    temp = a     -> 1 time\n    a = b        -> 1 time\n    b = temp     -> 1 time\n}\n")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"every statement occupy one time.")),(0,r.yg)("p",null,"swap\u7a0b\u5e8f\u7684\u590d\u6742\u5ea6\u662f: ",(0,r.yg)("span",{parentName:"p",className:"math math-inline"},(0,r.yg)("span",{parentName:"span",className:"katex"},(0,r.yg)("span",{parentName:"span",className:"katex-mathml"},(0,r.yg)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.yg)("semantics",{parentName:"math"},(0,r.yg)("mrow",{parentName:"semantics"},(0,r.yg)("mi",{parentName:"mrow"},"f"),(0,r.yg)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.yg)("mi",{parentName:"mrow"},"n"),(0,r.yg)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,r.yg)("mo",{parentName:"mrow"},"="),(0,r.yg)("mfrac",{parentName:"mrow"},(0,r.yg)("mn",{parentName:"mfrac"},"1"),(0,r.yg)("mn",{parentName:"mfrac"},"3"))),(0,r.yg)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"f(n) = \\frac13")))),(0,r.yg)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.yg)("span",{parentName:"span",className:"base"},(0,r.yg)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.yg)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,r.yg)("span",{parentName:"span",className:"mopen"},"("),(0,r.yg)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.yg)("span",{parentName:"span",className:"mclose"},")"),(0,r.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.yg)("span",{parentName:"span",className:"mrel"},"="),(0,r.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,r.yg)("span",{parentName:"span",className:"base"},(0,r.yg)("span",{parentName:"span",className:"strut",style:{height:"1.1901em",verticalAlign:"-0.345em"}}),(0,r.yg)("span",{parentName:"span",className:"mord"},(0,r.yg)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,r.yg)("span",{parentName:"span",className:"mfrac"},(0,r.yg)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,r.yg)("span",{parentName:"span",className:"vlist-r"},(0,r.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.8451em"}},(0,r.yg)("span",{parentName:"span",style:{top:"-2.655em"}},(0,r.yg)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,r.yg)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.yg)("span",{parentName:"span",className:"mord mtight"},(0,r.yg)("span",{parentName:"span",className:"mord mtight"},"3")))),(0,r.yg)("span",{parentName:"span",style:{top:"-3.23em"}},(0,r.yg)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,r.yg)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,r.yg)("span",{parentName:"span",style:{top:"-3.394em"}},(0,r.yg)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,r.yg)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.yg)("span",{parentName:"span",className:"mord mtight"},(0,r.yg)("span",{parentName:"span",className:"mord mtight"},"1"))))),(0,r.yg)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,r.yg)("span",{parentName:"span",className:"vlist-r"},(0,r.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.345em"}},(0,r.yg)("span",{parentName:"span"}))))),(0,r.yg)("span",{parentName:"span",className:"mclose nulldelimiter"}))))))),(0,r.yg)("h3",{id:"how-to-analyze-an-algorithm"},"How to analyze an algorithm"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Time: time faster, better algorithm"),(0,r.yg)("li",{parentName:"ol"},"Space: how much memory used"),(0,r.yg)("li",{parentName:"ol"},"N/W: network used, data consumption"),(0,r.yg)("li",{parentName:"ol"},"Power: how much power used"),(0,r.yg)("li",{parentName:"ol"},"Cpu registers")),(0,r.yg)("p",null,"`x = 5 ",(0,r.yg)("em",{parentName:"p"}," a + 6 ")," b "),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Time analysis: 2 mul + 1  add+ one statement, overall 4 unit time"),(0,r.yg)("li",{parentName:"ul"},"Space analysis:  a,b, temp three variables\uff0cS(n) = 3 word "),(0,r.yg)("li",{parentName:"ul"},"space how many variables can be written as 1\uff0c3000 also regard as 1"),(0,r.yg)("li",{parentName:"ul"},"O(1)")))}c.isMDXComponent=!0}}]);