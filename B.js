@import url(http://fonts.googleapis.com/css?family=Electrolize);
@import url(http://fonts.googleapis.com/css?family=Audiowide);

.button {
    
    color: #pink;
    width: 140px;
    height: 40px;
    font-family: 'Electrolize', sans-serif;
    
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    cursor: pointer;
}

.button2 {
    background-color:#pink;
     border: #green;
    border-radius: 40px;
    color: orange;
    width: 140px;
    font-family: 'Electrolize', sans-serif;
    height: 40px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 18px;
    margin: 6px 3px;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    cursor: pointer;

}

.button2:hover {
    background-color: red;
    color: blue;
    border: 1px solid #yellow;
} 

body {background:#000;margin:0;padding:0;color:#FFFFFF}
#navigation {border-bottom:2px solid #639e01;position:absolute;top:0;left:0;right:0;margin:0;padding:8px 0;background:#292c21 url(/files/rss/p18.png)repeat-x bottom}
#navigation span {margin:0 3px 0 5px;padding:5px 10px 8px 10px;background:#649e01 url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IGZpbGw9IiMyOTJjMjEiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiLz48cmVjdCBmaWxsPSIjNjQ5ZTAxIiByeD0iMTAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiLz48cmVjdCB5PSIxMDAlIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMCIgZmlsbD0iIzY0OWUwMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwtMTApIi8+PC9zdmc+)}
#navigation span+span {margin:0;padding:8px 10px;background:transparent}
#navigation span+span+span a {content:"Down"}
#navigation span a{color:#eee;text-shadow:#111 1px 1px 1px}
a {color:#84be21}
#navigation span+span a {color:#84be21;text-shadow:#444 1px 1px 1px}
#header {margin:55px 0 0 0;padding:0;background: url(/files/rss/to2.png)bottom right no-repeat,url(/files/rss/to6.png)repeat-x bottom,#000}
.heading {margin:0;padding:5px;font-size:small}
.description {margin:0;padding:5px 5px 20px 5px;font-size:small;color:#bbb}
#top-content {margin:0;padding:7px;text-align:center;background:#000;border:1px solid #000000;border-width:1px 0}
#comments li {background:#000;margin:2px;padding:5px;list-style:none;text-align:center}
.highlight {margin:0;padding:6px;text-align:center}
.messages {margin:4px -2px 0 -2px;padding:3px;text-align:center}
#search-form [type=text] { width:80%;background:hotpink;margin:2px;padding:6px;color:yellow;border:orange;font-family: 'Electrolize'
}
#search-form [type=submit] {;width:25%;margin:2px;padding:6px;border:none;color:orange;background:hotred;font-family: 'Electrolize'
}
.thumbnail {display:none}
.post,.post-single {border-top:1px solid #444;margin:0;padding:10px 3px 15px 3px;}
.post-meta .title {margin:0;padding:2px 0;font-size:small}
.post-meta {margin:0;padding:5px 3px;background:#000000}
.post-content {margin:1px 0 0 0;background:#000 url(/files/rss/to6.png)repeat-x bottom;padding:9px 5px 30px 5px;border:1px solid #470}
.post-meta a {color:#fff;text-shadow:#111 1px 1px 1px}
.post-meta .title:before {content: url(/files/rss/modr5.png);float:left;margin-right:3px}
.post-meta2 span {display:none}
.post-meta2 {margin:-17px 0 0 0;text-align:right;padding:10px 0;}
.post-meta2 a {margin:0 0 0 0;padding:10px 20px;background:#000 url(/files/rss/to6.png)repeat-x bottom;color:#eee;border:1px solid #470;}
.post-meta2 a:before {content:"C";float:left;margin:-10px 0 0 0;padding:10px 20px;background:#000 url(/files/rss/to6.png)repeat-x bottom;color:#eee;border:1px solid #470;}
#pagination-links{text-align:center;padding:3px 0;margin:0;}
#pagination-links span{;margin:2px 0;padding:8px 5px;float:left;color:#eee;text-shadow:#111 1px 1px 1px;background:#649e01}
#pagination-links a:last-child{margin:2px 0;padding:8px 5px;float:right;color:#eee;text-shadow:#111 1px 1px 1px;background:#649e01}
#pagination-links a{padding:8px 3px;margin:2px 0;display:inline-block;color:#222;background:#aaa url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IGZpbGw9IiMwMDAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiLz48cmVjdCBmaWxsPSIjYWFhIiByeD0iMTAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiLz48L3N2Zz4=)}
#bottom-content {margin:0;padding:0;background:#000000}
#comments h3,#navigation-menu h3 {background:#649e01;margin:0;padding:12px 9px 7px 5px;border-bottom:2px solid #292c20;border-top:1px solid #000}
#comments h3 a,#navigation-menu h3 a {background:#292c21 url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IGZpbGw9IiM2NDllMDEiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiLz48cmVjdCBmaWxsPSIjMjkyYzIxIiByeD0iMTAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiLz48cmVjdCB5PSIxMDAlIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMCIgZmlsbD0iIzI5MmMyMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwtMTApIi8+PC9zdmc+);margin:0;padding:5px 10px 7px 10px;color:#fff;text-shadow:#111 1px 1px 1px}
#blogroll h3,#category-bottom h3{background:#649e01;margin:0;padding:12px 9px 7px 5px;border-bottom:2px solid #292c20;border-top:1px solid #000;content:none}
#category-bottom h3:before {background:#292c21 url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IGZpbGw9IiM2NDllMDEiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiLz48cmVjdCBmaWxsPSIjMjkyYzIxIiByeD0iMTAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiLz48cmVjdCB5PSIxMDAlIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMCIgZmlsbD0iIzI5MmMyMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwtMTApIi8+PC9zdmc+);margin:0;padding:5px 10px 7px 10px;color:#fff;text-shadow:#111 1px 1px 1px;content:"Category"}
#blogroll h3:before {background:#292c21 url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IGZpbGw9IiM2NDllMDEiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiLz48cmVjdCBmaWxsPSIjMjkyYzIxIiByeD0iMTAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiLz48cmVjdCB5PSIxMDAlIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMCIgZmlsbD0iIzI5MmMyMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwtMTApIi8+PC9zdmc+);margin:0;padding:5px 10px 7px 10px;color:#fff;text-shadow:#111 1px 1px 1px;content:"Blogroll"}
#category-bottom,#navigation-menu,#comments,#blogroll {margin:0;padding:0;}
ul {padding:0;margin:-2px 0 0 0;background: url(/files/rss/to14.png)repeat-x top}
#navigation-menu li:nth-child(odd) {list-style:none;margin:0 5px 0 4px;padding:7px;border-top:1px solid #444;border-bottom:1px solid #000;border-left:1px solid #580;border-right:1px solid #580;background:#292c21}
#navigation-menu li:nth-child(even) {list-style:none;margin:0 5px 0 4px;padding:7px;border-top:1px solid #444;border-bottom:1px solid #000;background:#3a3d32;border-left:1px solid #580;border-right:1px solid #580}
#category-bottom li:first-child,#blogroll li:first-child,#navigation-menu li:first-child {border-top:none}
#navigation-menu li.last {border-bottom:1px solid #580;margin-bottom:5px;padding-left:0}
#navigation-menu li.last a {background:#649e01;margin:0;color:#fff;text-shadow:#111 1px 1px 1px;padding:7px 10px}
#category-bottom li {margin:0 5px 0 4px;padding:8px;border-top:1px solid #444;border-bottom:1px solid #000;border-left:1px solid #580;border-right:1px solid #580;background:#292c21 url(/files/rss/to15.png)repeat-x bottom;list-style:none;text-align:right}
#category-bottom li.last,#blogroll li.last {margin-bottom:5px;border-bottom:1px solid #580}
#category-bottom li a {float:left}
#category-bottom li:before {content: url(/files/rss/to9.png);float:left;margin-right:5px}
#blogroll li {margin:0 5px 0 4px;padding:6px 6px 6px 8px;border-top:1px solid #444;border-bottom:1px solid #000;border-left:1px solid #580;border-right:1px solid #580;background:#292c21 url(/files/rss/to15.png)repeat-x bottom;list-style: url(/files/rss/to8.png) inside}
#footer {margin:0;padding:5px;text-align:center;background:#000 url(/files/rss/to6.png)repeat-x bottom;}
#footer h6 {margin:0;padding:0}
.post-meta .title {color:#fff;text-shadow:#111 1px 1px 1px}
.categories {margin:0;padding:2px 0;font-size:small}
#share-buttons {margin:2px -3px;padding:3px;text-align:center;background:#292c21}
#share-buttons a {display:inline-table;width:35%}
#recent-posts-list h4 {margin:0 -3px;padding:7px;color:#fff;text-shadow:#111 1px 1px 1px;background:#649e01}
ol {margin:0 -3px;padding:0}
#blogroll_list li,#recent-posts-list li,.post-content li {background:#292c21;margin:0;padding:5px;list-style: url(/files/rss/to8.png) inside;border-top:1px solid #444;border-bottom:1px solid #000}
#comments {margin:0;padding:0;background:#292c21}
.comment {margin:0;padding:0;border-bottom:1px dotted #639e01}
.comment-header {color:#777;margin:0;padding:2px}
.comment-header .title {margin:0;padding:0}
.comment-header .title:before {content: url(/files/rss/p16.png);float:left;margin-right:3px}
.comment-content {margin:0;padding:5px 3px}
#comments h4,#comments h5 {margin:1px;padding:2px}
#comment_form{text-align:left;margin:1px;padding:3px}
#comment_form textarea{width:80%;margin:2px 0;padding:20px 0;background:#aaa;border:1px solid #470}
#comment_form input[type=text],.mobile_body
#comment_form select{width:50%;margin:2px 0;padding:5px;background:#aaa;border:1px solid #470}
#comment_form [type=submit] {margin:3px 0;padding:7px;background:#pink;color:#red;text-shadow:#111 1px 1px 1px;border:1px solid #470}
body img {max-width:80%;max-height:80%}
.post-single .post-content textarea {width:70px;height:70px;padding:0;margin:0}
.post-content,.comment-content {word-wrap:break-word}
#footer h6:before {content:"fmb_" !important;display:inline !important}
#footer:after {content:"" !important;margin:1px;padding:1px;display:block !important;font-size:small !important}
 
/* CSS Document */

/* Float Elements 
---------------------------------*/
.fl-lt {float:left;}
.fl-rt {float:right;}

/* Clear Floated Elements
---------------------------------*/
.clear {
  clear: both;
  display: block;
  font-family: 'Electrolize', sans-serif;
  overflow: hidden;
  visibility: hidden;
  width: 0;
  height: 0;
}

.clearfix:before,
.clearfix:after {
  content: '\0020';
  display: block;
  overflow: hidden;
  visibility: hidden;
  width: 0;
  height: 0;
}

.clearfix:after {
  clear: both;
}

.figure{ margin:0px;}

img{ max-width:100%;}

a, a:hover, a:active{ outline:0px !important}

@font-face {
  font-family: 'Electrolize';
  src: url('../fonts/fontawesome-webfont.eot?v=4.1.0');
  src: url('../fonts/fontawesome-webfont.eot?#iefix&v=4.1.0') format('embedded-opentype'), url('../fonts/fontawesome-webfont.woff?v=4.1.0') format('woff'), url('../fonts/fontawesome-webfont.ttf?v=4.1.0') format('truetype'), url('../fonts/fontawesome-webfont.svg?v=4.1.0#fontawesomeregular') format('svg');
  font-weight: normal;
  font-style: normal;
}

/* Header Styles
---------------------------------*/

.header{
	text-align:center;
	background:url() left top repeat;
	padding:280px 0;
	font-family: 'Electrolize', sans-serif;
}
.logo{
	width:130px;
	margin:0 auto 35px;
}
.header h1{
	font-family: 'Electrolize';
	font-size:50px;
	font-weight:400;
	letter-spacing: -1px;
	margin:0 0 22px 0 ;
	color:#fff;
}

.we-create{
	padding:0;
	margin:35px 0 55px;
}
.wp-pic{
	margin-bottom:20px;
}
.we-create li{
	display:inline-block;
	font-family: 'Electrolize',sans-serif;
	font-size:14px;
	color: #bcbcbc;
	text-transform: uppercase;
	font-weight: 400;
	margin:0 5px 0 0;
	padding:0 0 0 15px;
}
.we-create li:first-child{
	background:none;
}

.start-button {
	padding-left: 0px;
}

.start-button li a{
color: #fff;
}


.link{
	padding:15px 35px;
	background:#7cc576;
	color:#fff !important;
	font-size:16px;
	font-weight:400;
	font-family: 'Electrolize', sans-serif;
	display:inline-block;
	border-radius:3px;
	text-transform:uppercase;
	line-height:25px;
	margin-bottom:20px;
	transition:all 0.3s ease-in-out;
	-moz-transition:all 0.3s ease-in-out;
	-webkit-transition:all 0.3s ease-in-out;
}
.link:hover {
	text-decoration:none;
	color:#7cc576 !important;
	background:#fff;
}

.link:active, .link:focus {
	background: #7cc576;
	text-decoration:none;
	color:#fff !important;
}

/* Navigation
---------------------------------*/
.main-nav-outer{
	padding:0px;
	border-bottom:1px solid #dddddd;
	box-shadow:0 4px 5px -3px #ececec;
	position:relative;
	background:#fff;
}
.main-nav{
	text-align:center;
	margin:10px 0 0px;
	padding:0;
	list-style:none;
}
.main-nav li{
	display:inline;
	margin:0 1px;
}
.main-nav li a{
	display:inline-block;
	color:#222222;
	text-transform:uppercase;
	font-family: 'Electrolize', sans-serif;
	text-decoration: none;
	line-height:20px;
	margin:17px 32px;
	transition:all 0.3s ease-in-out;
	-moz-transition:all 0.3s ease-in-out;
	-webkit-transition:all 0.3s ease-in-out;
}

.main-nav li a:hover{ 
	text-decoration:none;
	color: #7cc576;
}

.small-logo{ 
	padding:0 32px;
}

.main-section{
	padding:90px 0 110px;
}


/* Services
---------------------------------*/

.service-list{
	padding:0 0 0 0;
	font-size:14px;
	margin-bottom:40px;
}
.service-list-col1{
	float:left;
	width:60px;
}
.service-list-col1 i{
	font-style:normal;
	font-size:38px;
	display:block;
	color:#222;
	font-family: 'Electrolize';
	line-height:38px;
}
.service-list-col2{
	overflow:hidden;	
}
.main-section.alabaster{
	background:#fafafa;
}

/* Featured Work
---------------------------------*/
.featured-work{
	font-size:14px;
}
.featured-work h2{
	text-align:left;
}
.featured-box{
	padding:0 0 0 0;
	margin-bottom:25px;
	font-size:14px;
}
.featured-box h3{
	margin-bottom:5px;
}
.featured-box p{
	line-height:22px;
}
.featured-work p.padding-b{
	padding-bottom:35px;
}
.featured-box-col1{
	width:60px;
	float:left;
}
.featured-box-col1 i{
	display:block;
	line-height:38px;
	font-family: 'Electrolize';
	font-size:38px;
	color:#777777;
	font-style:normal;
}
.featured-box-col2{ overflow:hidden;}
.featured-box.magic{
	background:url(../img/magic.png) left top no-repeat;
}
.featured-box.packaged{
	background:url(../img/packaged.png) left top no-repeat;
}
.featured-box.seo{
	background:url(../img/seo.png) left top no-repeat;
}
.Learn-More{
	display:inline-block;
	padding:0 5px 0 0;
	color:#7cc576;
	font-size:16px;
	text-transform:uppercase;
	font-family: 'Electrolize', sans-serif;
	font-weight:400;
	line-height:24px;
	transition:all 0.3s ease-in-out;
	-moz-transition:all 0.3s ease-in-out;
	-webkit-transition:all 0.3s ease-in-out;
	display: none;
}
.Learn-More i{ 
	padding-right:15px;
}

.Learn-More:hover, .Learn-More:focus{ 
	text-decoration:none;
	color: #111;
}


/* Portfolio
---------------------------------*/
.Portfolio-nav{
	padding:0;
	margin:0 0 45px 0;
	list-style:none;
	text-align:center;
}
.Portfolio-nav li{
	margin:0 10px;
	display:inline;
}
.Portfolio-nav li a{
	display:inline-block;
	padding:10px 22px;
	font-size:12px;
	line-height:20px;
	color:#222222;
	border-radius:4px;
	text-transform:uppercase;
	font-family: 'Electrolize', sans-serif;
	background:#f7f7f7;
	margin-bottom:5px;
	transition:all 0.3s ease-in-out;
	-moz-transition:all 0.3s ease-in-out;
	-webkit-transition:all 0.3s ease-in-out;
}
.Portfolio-nav li a:hover{
	background:#7cc576;
	color:#fff;
	text-decoration:none;
}

.portfolioContainer{
	margin:0 auto;
	padding-left:15px;
}

.Portfolio-box{
	text-align:center;
	margin-bottom:30px;
	height:350px;
	width:350px;
	overflow:hidden;
	float:left;
	padding:0;
}
.Portfolio-box img{
	margin-bottom:25px;
	transition:all 0.3s ease-in-out;
	-moz-transition:all 0.3s ease-in-out;
	-webkit-transition:all 0.3s ease-in-out;	
}

.Portfolio-box img:hover {
	opacity: 0.6;
}

.Portfolio-nav li a.current{
	background:#54A847;
	color:#fff;
	text-decoration:none;
}
img {
   max-width:100%;
}

/* no transition on .isotope container */

.isotope .isotope-item {
  /* change duration value to whatever you like */
  -webkit-transition-duration: 0.6s;
     -moz-transition-duration: 0.6s;
          transition-duration: 0.6s;
}

.isotope .isotope-item {
  -webkit-transition-property: -webkit-transform, opacity;
     -moz-transition-property:    -moz-transform, opacity;
          transition-property:         transform, opacity;
}

.main-section.paddind{
	padding-bottom:60px;
}

/* Clients
---------------------------------*/
.client-part{
	background:url(../img/section-bg1.jpg) center center no-repeat;
	background-size:cover;
	padding:55px 0;
	text-align:center;
}
.client-part-haead{
	color:#fdfdfd;
	font-size:28px;
	line-height:41px;
	margin:30px 0 10px;
	font-family: ''Electrolize',sans-serif';
	font-style: italic;
}
.client{
	padding:0;
	margin:20px 0 0;
	list-style:none;
	text-align:center;
}
.client li{
	display:inline;
	margin:0 15px;
}
.client li a{
	display:inline-block;
}
.client li a img{
	margin-bottom:15px;
	border-radius:50%;
}
.client li a:hover{
	text-decoration:none;
}
.client li a h3{
	color:#ffffff;
}
.client li a span{
	color:#f1f1f1;
}
.quote-right{
	font-style:normal;
	width:68px;
	height:68px;
	margin:0 auto;
	border:2px solid #7cc576;
	border-radius:50%;
	display:block;
	line-height:68px;
	text-align:center;
	font-size:27px;
	color:#7cc576;
	cursor: pointer;
	transition:all 0.3s ease-in-out;
	-moz-transition:all 0.3s ease-in-out;
	-webkit-transition:all 0.3s ease-in-out;
}

.quote-right:hover{
color: #fff;
border: 2px solid #fff;
}

.c-logo-part{
	background:#7cc576;
	padding:25px 0;
    filter: alpha(opacity=60);
}
.c-logo-part ul{
	padding:0;
	margin:0;
	list-style:none;
	text-align:center;
}
.c-logo-part ul li{
	display:inline;
	margin:0 25px;
}
.c-logo-part ul a{
	display:inline-block;
	margin: 0 20px;
}
.main-section.team{
	padding:85px 0;
}
.main-section.team h6{
	margin-bottom:40px;
}


/* Team
---------------------------------*/
.team-leader-block{
	max-width:993px;
	margin:0 auto;
}
.team-leader-box{
	width:30.66%;
	margin-right: 3.82979%;
	height: 490px;
	overflow: hidden;
	text-align: center;
	float: left;
}
.team-leader-box span{
	margin-bottom:24px;
	display:block;
}
.team-leader-box:nth-of-type(3n+0){ margin:0;}
.team-leader{
	width:auto;
	height:auto;
	position:relative;
	border-radius:50%;
	box-shadow:0px 0px 0px 7px rgba(241,241,241,0.80);
	margin:7px 7px 25px 7px;
	
}
.team-leader-shadow{
	transition:all 0.3s ease-in-out;
	-moz-transition:all 0.3s ease-in-out;
	-webkit-transition:all 0.3s ease-in-out;
	border-radius:50%;
	position:absolute;
	width:100%;
	height:100%;
	z-index:10;
	border-radius:50%;
}
.team-leader-shadow a{
	display:block;
	width:100%;
	height:100%;
}
.team-leader:hover .team-leader-shadow{
	box-shadow:inset  0px 0px 0px 148px rgba(17,17,17,0.80);
}
.team-leader:hover ul{ display:block; opacity:1}
.team-leader img{
	display:block;
	border-radius:50%;
}
.team-leader ul{
	display:block;
	opacity:0;
	padding:0;
	margin:0;
	list-style:none;
	position:absolute;
	left:0;
	top:50%;
	width:100%;
	text-align:center;
	margin-top:-14px;
	z-index:15;
	transition:all 0.6s ease-in-out;
	-moz-transition:all 0.6s ease-in-out;
	-webkit-transition:all 0.6s ease-in-out;
}
.team-leader ul li{
	display:inline;
	margin:0 11px;
}
.team-leader ul li a{
	font-family: 'Electrolize';
	display:inline-block;
	font-size:28px;
	color:#fff;	
	transition:all 0.3s ease-in-out;
	-moz-transition:all 0.3s ease-in-out;
	-webkit-transition:all 0.3s ease-in-out;
}
.team-leader ul li a:hover, .team-leader ul li a:focus{
	text-decoration:none;
}
.team-leader ul li a.fa-twitter:hover{
	color:#55acee;
}
.team-leader ul li a.fa-facebook:hover{
	color:#3b5998;
}
.team-leader ul li a.fa-pinterest:hover{
	color:#cb2026;
}
.team-leader ul li a.fa-google-plus:hover{
	color:#dd4b39;
}

/* Talk Business
---------------------------------*/
.business-talking{
	background:url(../img/section-bg2.jpg) top center no-repeat;
	background-size:cover;
	padding:60px 0 10px;
	text-align:center;
}
.business-talking h2{
	font-family: 'Electrolize', sans-serif;
	font-weight:700;
	padding:0;
	margin:20px 0 70px;
	text-transform:uppercase;
	font-size:42px;
	color:#fff;
}


/* Contact
---------------------------------*/
.main-section.contact{
	padding:90px 0 100px;
}

.main-section.contact{
	background:url(../img/bg-map.png) left 190px no-repeat;
}
.contact-info-box{
	font-size:15px;
	margin:0 0 14px 68px;
	padding-left:0;
}
.contact-info-box h3{
	font-size: 15px;
	font-weight:400;
	float:left;
	width:102px;
	margin-right:12px;
	line-height:28px;
}
.contact-info-box h3 i{
	font-style:normal;
	font-size:18px;
	color:#222222;
	font-family: 'Electrolize';
	font-weight:normal;
	margin-right:7px;
}
.contact-info-box span{
	line-height:28px;
	display:block;
	overflow:hidden;
}
.social-link{
	padding:35px 0;
	margin:0 0 0 68px;
	display:block;
	overflow:hidden;
	list-style:none;
}
.social-link li{
	float:left;
	margin-right:8px;
}
.social-link li a{
	display:block;
	width:50px;
	height:50px;
	text-align:center;
	font-family: 'Electrolize', sans-serif;
	line-height:50px;
	font-size:25px;
	color:#fff;
	background:#222222;
	border-radius:50%;
	transition:all 0.3s ease-in-out;
}
.social-link li a:hover, .social-link li a:focus{
	text-decoration:none;
}
.twitter a:hover {
	background: #55acee;
}
.facebook a:hover {
	background: #3b5998;
}
.pinterest a:hover {
	background: #cb2026;
}
.gplus a:hover {
	background: #dd4b39;
}
.dribbble a:hover {
	background: #ea4c89;
}

.form{
	margin:0 66px 0 30px;
}
.input-text{
	padding:15px 16px;
	border:1px solid #ccc;
	width:100%;
	height:50px;
	display:block;
	border-radius:4px;
	font-size:15px;
	color:#aaa;
	font-family: 'Electrolize', sans-serif;
	margin:0 0 15px 0;
	transition:all 0.3s ease-in-out;
	-moz-transition:all 0.3s ease-in-out;
	-webkit-transition:all 0.3s ease-in-out;
}
.input-text:focus {
	border: 1px solid #7cc576;
	outline:0;
	-webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(124, 197, 118, 0.3);
	-moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(124, 197, 118, 0.3);	
	box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(124, 197, 118, 0.3);
}

.input-text.text-area{
	height:165px;
	resize:none;
	overflow:auto;
	font-family: 'Electrolize', sans-serif;
}
.input-btn{
	width:175px;
	height:50px;
	background:#7cc576;
	border-radius:4px;
	color:#ffffff;
	font-size:14px;
	text-transform:uppercase;
	font-family: 'Electrolize';
	font-weight:400;
	border:0px;
	transition:all 0.3s ease-in-out;
	-moz-transition:all 0.3s ease-in-out;
	-webkit-transition:all 0.3s ease-in-out;
}

.input-btn:hover{
	background: #111;
	color: #fff;
	font-family: 'Electrolize', sans-serif;
}


/* Footer
---------------------------------*/

.footer{
	background:url(../img/pw_maze_black_2X.png) left top repeat;
	padding:35px 0 35px;
	font-family: 'Electrolize', sans-serif;
}
.footer-logo{
	margin:15px auto 35px;
	width: 76px;
}
.copyright{
	color:#cccccc;
	font-size:14px;
	display:block;
	text-align:center;
}
.copyright a{
	color:#7cc576;
	font-weight:600;
	text-decoration: none;
	transition:all 0.3s ease-in-out;
	-moz-transition:all 0.3s ease-in-out;
	-webkit-transition:all 0.3s ease-in-out;
}

.copyright a:hover {
	color: #fff;
}

.res-nav_click {
	line-height:38px;
	font-family: 'Electrolize';
	font-size:38px;
	text-decoration: none !important;
	color:#777777;
	font-style:normal;
	display:none;
	width:42px;
	height:27px;
	margin:20px auto;
	transition:all 0.3s ease-in-out;
	-moz-transition:all 0.3s ease-in-out;
	-webkit-transition:all 0.3s ease-in-out;
}

.res-nav_click:hover, .res-nav_click:active, .res-nav_click:focus {
	color: #7cc576 !important;
}

.portfolioContainer{
	max-width: 1140px;
}


/* Animation Timers
---------------------------------*/
.delay-02s { 
	animation-delay: 0.2s; 
	-webkit-animation-delay: 0.2s; 
}
.delay-03s { 
	animation-delay: 0.3s; 
	-webkit-animation-delay: 0.3s; 
}
.delay-04s { 
	animation-delay: 0.4s; 
	-webkit-animation-delay: 0.4s; 
}

.delay-05s { 
	animation-delay: 0.5s; 
	-webkit-animation-delay: 0.5s; 
}
.delay-06s { 
	animation-delay: 0.6s; 
	-webkit-animation-delay: 0.6s; 
}

.delay-07s { 
	animation-delay: 0.7s; 
	-webkit-animation-delay: 0.7s; 
}
.delay-08s { 
	animation-delay: 0.8s; 
	-webkit-animation-delay: 0.8s; 
}

.delay-09s { 
	animation-delay: 0.9s; 
	-webkit-animation-delay: 0.9s; 
}
.delay-1s { 
	animation-delay: 1s; 
	-webkit-animation-delay: 1s; 
}
.delay-12s { 
	animation-delay: 1.2s; 
	-webkit-animation-delay: 1.2s; 
}
