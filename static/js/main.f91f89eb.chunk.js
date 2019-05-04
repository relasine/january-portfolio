(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(34)},,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(7),i=a.n(r),c=(a(14),a(1)),s=a(2),l=a(4),m=a(3),d=a(5),u=(a(16),a(18),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).scrollMove=function(){window.pageYOffset<630&&e.setState({offset:window.pageYOffset/3})},e.state={offset:0},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.scrollMove)}},{key:"render",value:function(){var e={backgroundImage:"url(./images/clean-desk.jpg)",backgroundRepeat:"no-repeat",backgroundSize:"100vw",backgroundPositionY:this.state.offset};return o.a.createElement("header",{style:e,className:"header"},o.a.createElement("section",{style:{bottom:this.state.offset},className:"header-frame"},o.a.createElement("div",{className:"name-frame"},o.a.createElement("h1",{className:"header-name"},"Kevin Simpson"),o.a.createElement("h4",{className:"header-subtitle"},"Front End Developer"))))}}]),t}(n.Component)),p=(a(20),["I'm Kevin Simpson, a front end developer living in the north Denver metro area and current a front end/JavaScript developer with Trimble SketchUp in Boulder. I am a tenacious problem solver with a passion for React, CSS, unit testing, and teaching.","I push myself to learn something new about programming every day, and I take criticism with humility and grace."," In my free time I am a husband and father who enjoys chasing my son around the house, Mario Kart marathons, and 90s-era JRPGs."]),h=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=p.map(function(e,t){return o.a.createElement("p",{key:"about ".concat(t)},e," ",o.a.createElement("br",null),o.a.createElement("br",null))});return o.a.createElement("div",{className:"about-wrapper"},o.a.createElement("section",{className:"about-section"},o.a.createElement("article",{className:"about-hero ".concat(this.props.loadStatus)},o.a.createElement("h2",null,"about me"),o.a.createElement("img",{className:"hero-img",src:"./images/ksheadshotsmol.jpg",alt:"kevin simpson"}),o.a.createElement("div",{className:"social-icons"},o.a.createElement("a",{href:"https://www.linkedin.com/in/kevinjohnsimpson/",rel:"noopener noreferrer",target:"_blank"},o.a.createElement("i",{className:"fab fa-linkedin"})),o.a.createElement("a",{href:"https://www.github.com/relasine/",rel:"noopener noreferrer",target:"_blank"},o.a.createElement("i",{className:"fab fa-github"})),o.a.createElement("a",{href:"https://www.twitter.com/relasine/",rel:"noopener noreferrer",target:"_blank"},o.a.createElement("i",{className:"fab fa-twitter"})))),o.a.createElement("article",{className:"about-details ".concat(this.props.loadStatus)},o.a.createElement("div",null,e,o.a.createElement("a",{href:"https://docs.google.com/document/d/188aGmw_v47ugDNWau8qPsNtYaroqE2WWf0EwCevmQYE/edit?usp=sharing",rel:"noopener noreferrer",target:"_blank"},"resume")))))}}]),t}(n.Component),g=(a(22),a(24),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.data,t=e.title,a=e.imagePath,n=e.repo,r=e.deployed,i=e.details,c=e.stack;return o.a.createElement("article",{className:"project"},o.a.createElement("img",{src:a,alt:t,className:"project=image"}),o.a.createElement("h4",{className:"project-title"},t),o.a.createElement("a",{href:n,rel:"noopener noreferrer",target:"_blank",className:"project-repo"},"project repo"),o.a.createElement("a",{href:r,className:"project-deployed"},"deployed application"),o.a.createElement("p",{className:"project-details"},i),o.a.createElement("p",null,"Tech stack: ",o.a.createElement("span",null,c)))}}]),t}(n.Component)),f=[{title:"Pitch Battles",imagePath:"./images/pitch-battles.png",repo:"https://github.com/relasine/pitch-battles-frontend",deployed:"https://pitchbattles.herokuapp.com",details:"Pitch Battles is a full stack application designed as a highly-gamified teaching tool for young musicians learning to read music. It features dual interfaces for both teacher and student, a React Native teacher portal, student stat tracking, leaderboards and more.",stack:"Front End: React, React Native, CSS3, Photoshop, TravisCI, Heroku, JavaScript ES7, Jest/Enzyme"},{title:"Jedi Access Archives",imagePath:"./images/swapibox.png",repo:"https://github.com/relasine/SWAPIBox",deployed:"https://relasine.github.io/SWAPIBox/",details:"Jedi Access Archives is an interactive, narrative application experience built to allow users to explore information related to the Star Wars universe utilizing the Star Wars API.",stack:"React, React Router, CSS3, JavaScript ES7, Jest/Enzyme"},{title:"Colorado Kindercount",imagePath:"./images/kindercount.png",repo:"https://github.com/relasine/headcount2.0",deployed:"https://relasine.github.io/headcount2.0/",details:"Colorado Kindercount is a React application used to sort, display, and compare test score information for different Colorado school districts.",stack:"React, CSS3, Jest/Enzyme, JavaScript ES7"}],b=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=f.map(function(e){return o.a.createElement(g,{data:e,key:e.title})});return o.a.createElement("section",{className:"portfolio-section"},o.a.createElement("h1",{className:"".concat(this.props.loadStatus," portfolio-title")},"Portfolio"),o.a.createElement("div",{className:"projects-wrapper ".concat(this.props.loadStatus)},e))}}]),t}(n.Component),E=(a(26),a(28),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.data,t=e.title,a=e.imagePath,n=e.link;return o.a.createElement("article",{className:"blog"},o.a.createElement("a",{href:n,rel:"noopener noreferrer",target:"_blank"},o.a.createElement("img",{src:a,alt:"blog preview image"}),o.a.createElement("h4",null,t)))}}]),t}(n.Component)),v=[{id:"blog 2",title:"Things I Wish I Understood When I Started with React.js",imagePath:"./images/react-article.png",link:"https://medium.com/@relasine/things-i-wish-i-understood-when-i-started-with-react-js-d20b1cef7f81"},{id:"blog 3",title:"Build a Parallax Header in React",imagePath:"./images/parallax.png",link:"https://medium.com/@relasine/building-a-parallax-header-in-react-301d0ab9fd96"},{id:"blog 4",title:"The Basics of Testing a React Component - featured on gitconnected",imagePath:"./images/testing-article.png",link:"https://levelup.gitconnected.com/the-basics-of-testing-a-react-component-2ff635c99044"}],j=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=v.map(function(e){return o.a.createElement(E,{data:e,key:e.id})});return o.a.createElement("div",{className:"blog-section-backer"},o.a.createElement("section",{className:"blogs-section"},o.a.createElement("h2",{className:"".concat(this.props.loadStatus," blog-title")},"Blogs"),o.a.createElement("div",{className:"blog-wrapper ".concat(this.props.loadStatus)},e)))}}]),t}(n.Component),k=(a(30),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("section",{className:"footer"},o.a.createElement("p",null,"Kevin Simpson \xa92019 All Rights Reserved"))}}]),t}(n.Component)),w=(a(32),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"preloader"},o.a.createElement("img",{onLoad:this.props.toggleLoading,className:"preloader-background-image",src:"./images/clean-desk.jpg",alt:"loading-thing"}),o.a.createElement("img",{onLoad:this.props.toggleLoading,className:"preloader-background-image",src:"./images/ksheadshotsmol.jpg",alt:"loading-me"}))}}]),t}(n.Component)),O=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).scrollCheck=function(){window.pageYOffset>=900?e.setState({portfolioLoad:!0,blogLoad:!0,aboutLoad:!0}):window.pageYOffset>=400?e.setState({aboutLoad:!0,portfolioLoad:!0}):window.pageYOffset>=50&&e.setState({aboutLoad:!0})},e.toggleLoading=function(){e.state.loaded?e.setState({loading:!1}):(e.setState({loaded:e.state.loaded+1}),window.addEventListener("scroll",e.scrollCheck))},e.state={loading:!0,loaded:0,aboutLoad:!1,portfolioLoad:!1,blogLoad:!1},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},!this.state.loading&&o.a.createElement("main",{onScroll:this.scrollCheck},o.a.createElement(u,null),o.a.createElement(h,{loadStatus:this.state.aboutLoad}),o.a.createElement(b,{loadStatus:this.state.portfolioLoad}),o.a.createElement(j,{loadStatus:this.state.blogLoad}),o.a.createElement(k,null)),o.a.createElement(w,{toggleLoading:this.toggleLoading}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,2,1]]]);
//# sourceMappingURL=main.f91f89eb.chunk.js.map