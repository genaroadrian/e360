(()=>{"use strict";var e,v={},m={};function a(e){var c=m[e];if(void 0!==c)return c.exports;var r=m[e]={exports:{}};return v[e](r,r.exports,a),r.exports}a.m=v,e=[],a.O=(c,r,f,n)=>{if(!r){var d=1/0;for(t=0;t<e.length;t++){for(var[r,f,n]=e[t],u=!0,b=0;b<r.length;b++)(!1&n||d>=n)&&Object.keys(a.O).every(p=>a.O[p](r[b]))?r.splice(b--,1):(u=!1,n<d&&(d=n));if(u){e.splice(t--,1);var o=f();void 0!==o&&(c=o)}}return c}n=n||0;for(var t=e.length;t>0&&e[t-1][2]>n;t--)e[t]=e[t-1];e[t]=[r,f,n]},a.d=(e,c)=>{for(var r in c)a.o(c,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:c[r]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce((c,r)=>(a.f[r](e,c),c),[])),a.u=e=>(8592===e?"common":e)+"."+{74:"20aaec06bbe29578",315:"e331fee3ea2f2de6",601:"1803427a539e7bfe",639:"c1bcd63462b05cd0",966:"a1173f526036b47c",1122:"e27403c01ed586f9",1168:"43336f5a7a6c19dc",1192:"be05ec8ca5f0cd85",1312:"2e5956927db38410",1732:"2e78b4ac576ca8f0",2043:"299cc6decc66ef8d",2151:"a2901b0962133d6a",2582:"3fdd73c0b82f247d",2752:"f16a0ec87c9e5ac7",2795:"0c00e14a166e53fd",2811:"e10a14aa9d98edac",3280:"faba4ff62325ef09",3693:"0ab7bbc251b9c391",3722:"daab31a466ca125c",3794:"e9a6e9306b8d9352",4055:"3cc9f4f3948b7b32",4104:"b7dafe8ccde85e1f",4506:"6a2de1729b5d9c47",4670:"350b9fbd3c71c44e",5186:"e64dfc2bb119258a",5289:"531cc6e096f1e7d9",5373:"bf8d76d4bc485acb",5584:"9d1d42e1fc3393fe",5587:"c57c27ac96158880",5821:"975197b6d8cd5930",5832:"4ca6953fcceabdae",5938:"e922b55e93557819",6022:"fc04ad8e9dd7e9b8",6056:"8e87b2e853dbff70",6068:"609c94b148e542a8",6324:"cbfcd252db0b8fb4",6426:"4750cdd435619170",6824:"95a34a85b5817590",6942:"1dd9d1f1d2d879dc",7039:"442074a4d8c2dbea",7203:"4f1ae9a3796e47cc",7294:"dc91cba783a8731b",7471:"6d8e321ecd1a54b0",7493:"5206159c68d632c0",7853:"6f50e6cbb2a340de",7986:"9ed150c15f30ab29",8099:"7a69e5196a446214",8118:"d3c53f739c0ced68",8592:"72e25e3da54066d3",8628:"6afce6c691e60c90",9389:"6f1ea76d52009f22",9502:"44bf4e3932bb90b2",9552:"30a351dee952e01e"}[e]+".js",a.miniCssF=e=>{},a.o=(e,c)=>Object.prototype.hasOwnProperty.call(e,c),(()=>{var e={},c="sakai-ng:";a.l=(r,f,n,t)=>{if(e[r])e[r].push(f);else{var d,u;if(void 0!==n)for(var b=document.getElementsByTagName("script"),o=0;o<b.length;o++){var i=b[o];if(i.getAttribute("src")==r||i.getAttribute("data-webpack")==c+n){d=i;break}}d||(u=!0,(d=document.createElement("script")).type="module",d.charset="utf-8",d.timeout=120,a.nc&&d.setAttribute("nonce",a.nc),d.setAttribute("data-webpack",c+n),d.src=a.tu(r)),e[r]=[f];var l=(g,p)=>{d.onerror=d.onload=null,clearTimeout(s);var _=e[r];if(delete e[r],d.parentNode&&d.parentNode.removeChild(d),_&&_.forEach(h=>h(p)),g)return g(p)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=l.bind(null,d.onerror),d.onload=l.bind(null,d.onload),u&&document.head.appendChild(d)}}})(),a.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;a.tt=()=>(void 0===e&&(e={createScriptURL:c=>c},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),a.tu=e=>a.tt().createScriptURL(e),a.p="",(()=>{var e={3666:0};a.f.j=(f,n)=>{var t=a.o(e,f)?e[f]:void 0;if(0!==t)if(t)n.push(t[2]);else if(3666!=f){var d=new Promise((i,l)=>t=e[f]=[i,l]);n.push(t[2]=d);var u=a.p+a.u(f),b=new Error;a.l(u,i=>{if(a.o(e,f)&&(0!==(t=e[f])&&(e[f]=void 0),t)){var l=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.src;b.message="Loading chunk "+f+" failed.\n("+l+": "+s+")",b.name="ChunkLoadError",b.type=l,b.request=s,t[1](b)}},"chunk-"+f,f)}else e[f]=0},a.O.j=f=>0===e[f];var c=(f,n)=>{var b,o,[t,d,u]=n,i=0;if(t.some(s=>0!==e[s])){for(b in d)a.o(d,b)&&(a.m[b]=d[b]);if(u)var l=u(a)}for(f&&f(n);i<t.length;i++)a.o(e,o=t[i])&&e[o]&&e[o][0](),e[o]=0;return a.O(l)},r=self.webpackChunksakai_ng=self.webpackChunksakai_ng||[];r.forEach(c.bind(null,0)),r.push=c.bind(null,r.push.bind(r))})()})();