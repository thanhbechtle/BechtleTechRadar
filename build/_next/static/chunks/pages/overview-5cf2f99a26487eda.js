(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[709],{9308:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/overview",function(){return r(8231)}])},7377:function(e,t,r){"use strict";r.d(t,{Ct:function(){return h},iP:function(){return d},wI:function(){return g}});var u=r(5893),i=r(7294),s=r(8588),n=r.n(s),l=r(9284),c=r(390),a=r(2753),o=r(1492);function h(e){let{children:t,color:r,size:s="medium",selectable:l,selected:c,...a}=e,h=(0,i.useMemo)(()=>r?{"--badge":r}:void 0,[r]),d=a.onClick?"button":"span";return(0,u.jsx)(d,{...a,style:h,className:(0,o.cn)(a.className,n().badge,n()["size-".concat(s)],r&&n().colored,l&&n().selectable,c&&n().selected),children:t})}function d(e){let{ring:t,release:r,...i}=e,s=(0,l.VU)(t);if(!s)return null;let n=r?"".concat(s.title," | ").concat((0,c.vf)(r)):s.title;return(0,u.jsx)(h,{color:s.color,...i,children:n})}function g(e){let{flag:t,short:r,...i}=e;if(t===a.W.Default)return null;let s=(0,l.r0)(t);return s&&"color"in s&&"title"in s&&"titleShort"in s?(0,u.jsx)(h,{color:s.color,size:"small",...i,children:r?s.titleShort:s.title}):null}},6797:function(e,t,r){"use strict";r.d(t,{s:function(){return h}});var u=r(5893),i=r(1664),s=r.n(i),n=r(5685),l=r.n(n),c=r(7377),a=r(9284),o=r(1492);function h(e){let{items:t,activeId:r,size:i="default",hideRing:n=!1,className:h}=e;return(0,u.jsx)("ul",{className:(0,o.cn)(l().list,h,{[l().isSmall]:"small"===i,[l().isLarge]:"large"===i}),children:t.map(e=>{var t;return(0,u.jsx)("li",{className:l().item,children:(0,u.jsxs)(s(),{className:(0,o.cn)(l().link,{[l().isFadedOut]:!e.featured,[l().isActive]:e.id===r}),href:"/".concat(e.quadrant,"/").concat(e.id),children:[(0,u.jsx)("span",{className:l().title,children:e.title}),(0,u.jsx)(c.wI,{className:l().flag,flag:e.flag,short:"small"==i}),"large"===i&&(0,u.jsxs)("div",{className:l().info,children:[(0,u.jsx)("span",{className:l().quadrant,children:null===(t=(0,a.VM)(e.quadrant))||void 0===t?void 0:t.title}),!n&&(0,u.jsx)(c.iP,{className:l().ring,ring:e.ring,size:"small"})]})]})},e.id)})})}},2753:function(e,t,r){"use strict";var u,i;r.d(t,{W:function(){return u}}),(i=u||(u={})).New="new",i.Changed="changed",i.Default="default"},8231:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return ex}});var u=r(5893);function i(e){return Array.isArray?Array.isArray(e):"[object Array]"===h(e)}let s=1/0;function n(e){return"string"==typeof e}function l(e){return"number"==typeof e}function c(e){return"object"==typeof e}function a(e){return null!=e}function o(e){return!e.trim().length}function h(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}let d=e=>`Invalid value for key ${e}`,g=e=>`Pattern length exceeds max of ${e}.`,f=e=>`Missing ${e} property in key`,p=e=>`Property 'weight' in key '${e}' must be a positive integer`,A=Object.prototype.hasOwnProperty;class m{constructor(e){this._keys=[],this._keyMap={};let t=0;e.forEach(e=>{let r=_(e);this._keys.push(r),this._keyMap[r.id]=r,t+=r.weight}),this._keys.forEach(e=>{e.weight/=t})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function _(e){let t=null,r=null,u=null,s=1,l=null;if(n(e)||i(e))u=e,t=C(e),r=x(e);else{if(!A.call(e,"name"))throw Error(f("name"));let i=e.name;if(u=i,A.call(e,"weight")&&(s=e.weight)<=0)throw Error(p(i));t=C(i),r=x(i),l=e.getFn}return{path:t,id:r,weight:s,src:u,getFn:l}}function C(e){return i(e)?e:e.split(".")}function x(e){return i(e)?e.join("."):e}var E={isCaseSensitive:!1,ignoreDiacritics:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1,includeMatches:!1,findAllMatches:!1,minMatchCharLength:1,location:0,threshold:.6,distance:100,useExtendedSearch:!1,getFn:function(e,t){let r=[],u=!1,o=(e,t,d)=>{if(a(e)){if(t[d]){var g,f;let p=e[t[d]];if(a(p)){if(d===t.length-1&&(n(p)||l(p)||!0===(g=p)||!1===g||c(f=g)&&null!==f&&"[object Boolean]"==h(g)))r.push(null==p?"":function(e){if("string"==typeof e)return e;let t=e+"";return"0"==t&&1/e==-s?"-0":t}(p));else if(i(p)){u=!0;for(let e=0,r=p.length;e<r;e+=1)o(p[e],t,d+1)}else t.length&&o(p,t,d+1)}}else r.push(e)}};return o(e,n(t)?t.split("."):t,0),u?r:r[0]},ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};let y=/[^ ]+/g;class F{constructor({getFn:e=E.getFn,fieldNormWeight:t=E.fieldNormWeight}={}){this.norm=function(e=1,t=3){let r=new Map,u=Math.pow(10,t);return{get(t){let i=t.match(y).length;if(r.has(i))return r.get(i);let s=parseFloat(Math.round(1/Math.pow(i,.5*e)*u)/u);return r.set(i,s),s},clear(){r.clear()}}}(t,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((e,t)=>{this._keysMap[e.id]=t})}create(){!this.isCreated&&this.docs.length&&(this.isCreated=!0,n(this.docs[0])?this.docs.forEach((e,t)=>{this._addString(e,t)}):this.docs.forEach((e,t)=>{this._addObject(e,t)}),this.norm.clear())}add(e){let t=this.size();n(e)?this._addString(e,t):this._addObject(e,t)}removeAt(e){this.records.splice(e,1);for(let t=e,r=this.size();t<r;t+=1)this.records[t].i-=1}getValueForItemAtKeyId(e,t){return e[this._keysMap[t]]}size(){return this.records.length}_addString(e,t){if(!a(e)||o(e))return;let r={v:e,i:t,n:this.norm.get(e)};this.records.push(r)}_addObject(e,t){let r={i:t,$:{}};this.keys.forEach((t,u)=>{let s=t.getFn?t.getFn(e):this.getFn(e,t.path);if(a(s)){if(i(s)){let e=[],t=[{nestedArrIndex:-1,value:s}];for(;t.length;){let{nestedArrIndex:r,value:u}=t.pop();if(a(u)){if(n(u)&&!o(u)){let t={v:u,i:r,n:this.norm.get(u)};e.push(t)}else i(u)&&u.forEach((e,r)=>{t.push({nestedArrIndex:r,value:e})})}}r.$[u]=e}else if(n(s)&&!o(s)){let e={v:s,n:this.norm.get(s)};r.$[u]=e}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function B(e,t,{getFn:r=E.getFn,fieldNormWeight:u=E.fieldNormWeight}={}){let i=new F({getFn:r,fieldNormWeight:u});return i.setKeys(e.map(_)),i.setSources(t),i.create(),i}function D(e,{errors:t=0,currentLocation:r=0,expectedLocation:u=0,distance:i=E.distance,ignoreLocation:s=E.ignoreLocation}={}){let n=t/e.length;if(s)return n;let l=Math.abs(u-r);return i?n+l/i:l?1:n}let v=String.prototype.normalize?e=>e.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g,""):e=>e;class M{constructor(e,{location:t=E.location,threshold:r=E.threshold,distance:u=E.distance,includeMatches:i=E.includeMatches,findAllMatches:s=E.findAllMatches,minMatchCharLength:n=E.minMatchCharLength,isCaseSensitive:l=E.isCaseSensitive,ignoreDiacritics:c=E.ignoreDiacritics,ignoreLocation:a=E.ignoreLocation}={}){if(this.options={location:t,threshold:r,distance:u,includeMatches:i,findAllMatches:s,minMatchCharLength:n,isCaseSensitive:l,ignoreDiacritics:c,ignoreLocation:a},e=l?e:e.toLowerCase(),e=c?v(e):e,this.pattern=e,this.chunks=[],!this.pattern.length)return;let o=(e,t)=>{this.chunks.push({pattern:e,alphabet:function(e){let t={};for(let r=0,u=e.length;r<u;r+=1){let i=e.charAt(r);t[i]=(t[i]||0)|1<<u-r-1}return t}(e),startIndex:t})},h=this.pattern.length;if(h>32){let e=0,t=h%32,r=h-t;for(;e<r;)o(this.pattern.substr(e,32),e),e+=32;if(t){let e=h-32;o(this.pattern.substr(e),e)}}else o(this.pattern,0)}searchIn(e){let{isCaseSensitive:t,ignoreDiacritics:r,includeMatches:u}=this.options;if(e=t?e:e.toLowerCase(),e=r?v(e):e,this.pattern===e){let t={isMatch:!0,score:0};return u&&(t.indices=[[0,e.length-1]]),t}let{location:i,distance:s,threshold:n,findAllMatches:l,minMatchCharLength:c,ignoreLocation:a}=this.options,o=[],h=0,d=!1;this.chunks.forEach(({pattern:t,alphabet:r,startIndex:f})=>{let{isMatch:p,score:A,indices:m}=function(e,t,r,{location:u=E.location,distance:i=E.distance,threshold:s=E.threshold,findAllMatches:n=E.findAllMatches,minMatchCharLength:l=E.minMatchCharLength,includeMatches:c=E.includeMatches,ignoreLocation:a=E.ignoreLocation}={}){let o;if(t.length>32)throw Error(g(32));let h=t.length,d=e.length,f=Math.max(0,Math.min(u,d)),p=s,A=f,m=l>1||c,_=m?Array(d):[];for(;(o=e.indexOf(t,A))>-1;)if(p=Math.min(D(t,{currentLocation:o,expectedLocation:f,distance:i,ignoreLocation:a}),p),A=o+h,m){let e=0;for(;e<h;)_[o+e]=1,e+=1}A=-1;let C=[],x=1,y=h+d,F=1<<h-1;for(let u=0;u<h;u+=1){let s=0,l=y;for(;s<l;)D(t,{errors:u,currentLocation:f+l,expectedLocation:f,distance:i,ignoreLocation:a})<=p?s=l:y=l,l=Math.floor((y-s)/2+s);y=l;let c=Math.max(1,f-l+1),o=n?d:Math.min(f+l,d)+h,g=Array(o+2);g[o+1]=(1<<u)-1;for(let s=o;s>=c;s-=1){let n=s-1,l=r[e.charAt(n)];if(m&&(_[n]=+!!l),g[s]=(g[s+1]<<1|1)&l,u&&(g[s]|=(C[s+1]|C[s])<<1|1|C[s+1]),g[s]&F&&(x=D(t,{errors:u,currentLocation:n,expectedLocation:f,distance:i,ignoreLocation:a}))<=p){if(p=x,(A=n)<=f)break;c=Math.max(1,2*f-A)}}if(D(t,{errors:u+1,currentLocation:f,expectedLocation:f,distance:i,ignoreLocation:a})>p)break;C=g}let B={isMatch:A>=0,score:Math.max(.001,x)};if(m){let e=function(e=[],t=E.minMatchCharLength){let r=[],u=-1,i=-1,s=0;for(let n=e.length;s<n;s+=1){let n=e[s];n&&-1===u?u=s:n||-1===u||((i=s-1)-u+1>=t&&r.push([u,i]),u=-1)}return e[s-1]&&s-u>=t&&r.push([u,s-1]),r}(_,l);e.length?c&&(B.indices=e):B.isMatch=!1}return B}(e,t,r,{location:i+f,distance:s,threshold:n,findAllMatches:l,minMatchCharLength:c,includeMatches:u,ignoreLocation:a});p&&(d=!0),h+=A,p&&m&&(o=[...o,...m])});let f={isMatch:d,score:d?h/this.chunks.length:1};return d&&u&&(f.indices=o),f}}class k{constructor(e){this.pattern=e}static isMultiMatch(e){return w(e,this.multiRegex)}static isSingleMatch(e){return w(e,this.singleRegex)}search(){}}function w(e,t){let r=e.match(t);return r?r[1]:null}class b extends k{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){let t=e===this.pattern;return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}class N extends k{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){let t=-1===e.indexOf(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}class j extends k{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){let t=e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}class I extends k{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){let t=!e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}class L extends k{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){let t=e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class S extends k{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){let t=!e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}class $ extends k{constructor(e,{location:t=E.location,threshold:r=E.threshold,distance:u=E.distance,includeMatches:i=E.includeMatches,findAllMatches:s=E.findAllMatches,minMatchCharLength:n=E.minMatchCharLength,isCaseSensitive:l=E.isCaseSensitive,ignoreDiacritics:c=E.ignoreDiacritics,ignoreLocation:a=E.ignoreLocation}={}){super(e),this._bitapSearch=new M(e,{location:t,threshold:r,distance:u,includeMatches:i,findAllMatches:s,minMatchCharLength:n,isCaseSensitive:l,ignoreDiacritics:c,ignoreLocation:a})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class R extends k{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let t,r=0,u=[],i=this.pattern.length;for(;(t=e.indexOf(this.pattern,r))>-1;)r=t+i,u.push([t,r-1]);let s=!!u.length;return{isMatch:s,score:s?0:1,indices:u}}}let O=[b,R,j,I,S,L,N,$],z=O.length,q=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,P=new Set([$.type,R.type]);class T{constructor(e,{isCaseSensitive:t=E.isCaseSensitive,ignoreDiacritics:r=E.ignoreDiacritics,includeMatches:u=E.includeMatches,minMatchCharLength:i=E.minMatchCharLength,ignoreLocation:s=E.ignoreLocation,findAllMatches:n=E.findAllMatches,location:l=E.location,threshold:c=E.threshold,distance:a=E.distance}={}){this.query=null,this.options={isCaseSensitive:t,ignoreDiacritics:r,includeMatches:u,minMatchCharLength:i,findAllMatches:n,ignoreLocation:s,location:l,threshold:c,distance:a},e=t?e:e.toLowerCase(),e=r?v(e):e,this.pattern=e,this.query=function(e,t={}){return e.split("|").map(e=>{let r=e.trim().split(q).filter(e=>e&&!!e.trim()),u=[];for(let e=0,i=r.length;e<i;e+=1){let i=r[e],s=!1,n=-1;for(;!s&&++n<z;){let e=O[n],r=e.isMultiMatch(i);r&&(u.push(new e(r,t)),s=!0)}if(!s)for(n=-1;++n<z;){let e=O[n],r=e.isSingleMatch(i);if(r){u.push(new e(r,t));break}}}return u})}(this.pattern,this.options)}static condition(e,t){return t.useExtendedSearch}searchIn(e){let t=this.query;if(!t)return{isMatch:!1,score:1};let{includeMatches:r,isCaseSensitive:u,ignoreDiacritics:i}=this.options;e=u?e:e.toLowerCase(),e=i?v(e):e;let s=0,n=[],l=0;for(let u=0,i=t.length;u<i;u+=1){let i=t[u];n.length=0,s=0;for(let t=0,u=i.length;t<u;t+=1){let u=i[t],{isMatch:c,indices:a,score:o}=u.search(e);if(c){if(s+=1,l+=o,r){let e=u.constructor.type;P.has(e)?n=[...n,...a]:n.push(a)}}else{l=0,s=0,n.length=0;break}}if(s){let e={isMatch:!0,score:l/s};return r&&(e.indices=n),e}}return{isMatch:!1,score:1}}}let W=[];function J(e,t){for(let r=0,u=W.length;r<u;r+=1){let u=W[r];if(u.condition(e,t))return new u(e,t)}return new M(e,t)}let K={AND:"$and",OR:"$or"},Q={PATH:"$path",PATTERN:"$val"},H=e=>!!(e[K.AND]||e[K.OR]),V=e=>!!e[Q.PATH],X=e=>!i(e)&&c(e)&&!H(e),U=e=>({[K.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function Y(e,t,{auto:r=!0}={}){let u=e=>{let s=Object.keys(e),l=V(e);if(!l&&s.length>1&&!H(e))return u(U(e));if(X(e)){let u=l?e[Q.PATH]:s[0],i=l?e[Q.PATTERN]:e[u];if(!n(i))throw Error(d(u));let c={keyId:x(u),pattern:i};return r&&(c.searcher=J(i,t)),c}let c={children:[],operator:s[0]};return s.forEach(t=>{let r=e[t];i(r)&&r.forEach(e=>{c.children.push(u(e))})}),c};return H(e)||(e=U(e)),u(e)}function Z(e,t){let r=e.matches;t.matches=[],a(r)&&r.forEach(e=>{if(!a(e.indices)||!e.indices.length)return;let{indices:r,value:u}=e,i={indices:r,value:u};e.key&&(i.key=e.key.src),e.idx>-1&&(i.refIndex=e.idx),t.matches.push(i)})}function G(e,t){t.score=e.score}class ee{constructor(e,t={},r){this.options={...E,...t},this.options.useExtendedSearch,this._keyStore=new m(this.options.keys),this.setCollection(e,r)}setCollection(e,t){if(this._docs=e,t&&!(t instanceof F))throw Error("Incorrect 'index' type");this._myIndex=t||B(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){a(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){let t=[];for(let r=0,u=this._docs.length;r<u;r+=1){let i=this._docs[r];e(i,r)&&(this.removeAt(r),r-=1,u-=1,t.push(i))}return t}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:t=-1}={}){let{includeMatches:r,includeScore:u,shouldSort:i,sortFn:s,ignoreFieldNorm:c}=this.options,a=n(e)?n(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return!function(e,{ignoreFieldNorm:t=E.ignoreFieldNorm}){e.forEach(e=>{let r=1;e.matches.forEach(({key:e,norm:u,score:i})=>{let s=e?e.weight:null;r*=Math.pow(0===i&&s?Number.EPSILON:i,(s||1)*(t?1:u))}),e.score=r})}(a,{ignoreFieldNorm:c}),i&&a.sort(s),l(t)&&t>-1&&(a=a.slice(0,t)),function(e,t,{includeMatches:r=E.includeMatches,includeScore:u=E.includeScore}={}){let i=[];return r&&i.push(Z),u&&i.push(G),e.map(e=>{let{idx:r}=e,u={item:t[r],refIndex:r};return i.length&&i.forEach(t=>{t(e,u)}),u})}(a,this._docs,{includeMatches:r,includeScore:u})}_searchStringList(e){let t=J(e,this.options),{records:r}=this._myIndex,u=[];return r.forEach(({v:e,i:r,n:i})=>{if(!a(e))return;let{isMatch:s,score:n,indices:l}=t.searchIn(e);s&&u.push({item:e,idx:r,matches:[{score:n,value:e,norm:i,indices:l}]})}),u}_searchLogical(e){let t=Y(e,this.options),r=(e,t,u)=>{if(!e.children){let{keyId:r,searcher:i}=e,s=this._findMatches({key:this._keyStore.get(r),value:this._myIndex.getValueForItemAtKeyId(t,r),searcher:i});return s&&s.length?[{idx:u,item:t,matches:s}]:[]}let i=[];for(let s=0,n=e.children.length;s<n;s+=1){let n=r(e.children[s],t,u);if(n.length)i.push(...n);else if(e.operator===K.AND)return[]}return i},u=this._myIndex.records,i={},s=[];return u.forEach(({$:e,i:u})=>{if(a(e)){let n=r(t,e,u);n.length&&(i[u]||(i[u]={idx:u,item:e,matches:[]},s.push(i[u])),n.forEach(({matches:e})=>{i[u].matches.push(...e)}))}}),s}_searchObjectList(e){let t=J(e,this.options),{keys:r,records:u}=this._myIndex,i=[];return u.forEach(({$:e,i:u})=>{if(!a(e))return;let s=[];r.forEach((r,u)=>{s.push(...this._findMatches({key:r,value:e[u],searcher:t}))}),s.length&&i.push({idx:u,item:e,matches:s})}),i}_findMatches({key:e,value:t,searcher:r}){if(!a(t))return[];let u=[];if(i(t))t.forEach(({v:t,i:i,n:s})=>{if(!a(t))return;let{isMatch:n,score:l,indices:c}=r.searchIn(t);n&&u.push({score:l,key:e,value:t,idx:i,norm:s,indices:c})});else{let{v:i,n:s}=t,{isMatch:n,score:l,indices:c}=r.searchIn(i);n&&u.push({score:l,key:e,value:i,norm:s,indices:c})}return u}}ee.version="7.1.0",ee.createIndex=B,ee.parseIndex=function(e,{getFn:t=E.getFn,fieldNormWeight:r=E.fieldNormWeight}={}){let{keys:u,records:i}=e,s=new F({getFn:t,fieldNormWeight:r});return s.setKeys(u),s.setIndexRecords(i),s},ee.config=E,ee.parseQuery=Y,function(...e){W.push(...e)}(T);var et=r(9008),er=r.n(et),eu=r(1163),ei=r(7294),es=r(1581),en=r.n(es),el=r(3018),ec=r(340),ea=r.n(ec),eo=r(9284);function eh(e){let{value:t,onChange:r}=e,[i,s]=(0,ei.useState)(t);return(0,ei.useEffect)(()=>{s(t)},[t]),(0,u.jsxs)("div",{className:ea().filter,children:[(0,u.jsx)("input",{className:ea().input,id:"search",type:"search",placeholder:(0,eo.id)("searchPlaceholder"),value:i,onChange:e=>{s(e.target.value),r(e.target.value)}}),(0,u.jsx)("button",{className:ea().button,type:"submit",children:(0,u.jsx)(el.Z,{className:ea().icon})})]})}var ed=r(5839),eg=r.n(ed),ef=r(7377),ep=r(1492);function eA(e){let{value:t,onChange:r,className:i}=e,s=(0,eo.TX)();return(0,u.jsxs)("ul",{className:(0,ep.cn)(eg().filter,i),children:[(0,u.jsx)("li",{children:(0,u.jsx)(ef.Ct,{size:"large",selectable:!0,selected:!t,onClick:()=>{r("")},children:"All"})}),s.map(e=>(0,u.jsx)("li",{children:(0,u.jsx)(ef.iP,{ring:e.id,size:"large",selectable:!0,selected:t===e.id,onClick:()=>r(e.id)})},e.id))]})}function em(e){let{query:t,onQueryChange:r,ring:i,onRingChange:s}=e;return(0,u.jsxs)("div",{className:en().filter,children:[(0,u.jsx)(eh,{value:t,onChange:r}),(0,u.jsx)(eA,{value:i,onChange:s})]})}var e_=r(6797),eC=r(390),ex=()=>{let e=(0,eo.id)("pageOverview"),t=(0,eu.useRouter)(),r=t.query.ring,i=t.query.query||"",s=(0,ei.useCallback)(e=>{t.push({query:{...t.query,ring:e,query:i}})},[t,i]),n=(0,ei.useCallback)(e=>{t.replace({query:{...t.query,ring:r,query:e}})},[t,r]),{items:l,index:c}=(0,ei.useMemo)(()=>{let e=(0,eo.kk)().filter(e=>!r||e.ring===r),t=new ee(e,{threshold:.4,distance:600,includeScore:!0,keys:[{name:"title",weight:1.5},{name:"tags",weight:1},{name:"body",weight:.9},{name:"revision.body",weight:.7}]});return{items:e,index:t}},[r]),a=(0,ei.useMemo)(()=>i?c.search(i).map(e=>e.item):l,[i,c,l]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(er(),{children:(0,u.jsx)("title",{children:(0,eC.Ui)(e)})}),(0,u.jsx)("h1",{children:e}),(0,u.jsx)(em,{query:i,ring:r,onRingChange:s,onQueryChange:n}),(0,u.jsx)(e_.s,{items:a,size:"large",hideRing:!!r})]})}},8588:function(e){e.exports={badge:"Badge_badge__ohf_O","size-small":"Badge_size-small__teuB6","size-large":"Badge_size-large__DeqRJ",colored:"Badge_colored__mE0M_",selectable:"Badge_selectable__5w_Rj",selected:"Badge_selected__YN95i"}},1581:function(e){e.exports={filter:"Filter_filter__O7_TR"}},340:function(e){e.exports={filter:"QueryFilter_filter__cqem2",input:"QueryFilter_input__XzPMz",button:"QueryFilter_button__T2yYk",icon:"QueryFilter_icon__rTwOB"}},5839:function(e){e.exports={filter:"RingFilter_filter__3jVYs"}},5685:function(e){e.exports={list:"ItemList_list__OfyPI",item:"ItemList_item__w1fOT",flag:"ItemList_flag__MHJJn",ring:"ItemList_ring__KNwTe",quadrant:"ItemList_quadrant__37v7e",info:"ItemList_info__hEN5c",link:"ItemList_link__vRvOH",isFadedOut:"ItemList_isFadedOut__WESte",isActive:"ItemList_isActive__r0pNl",isSmall:"ItemList_isSmall__CwDlJ",isLarge:"ItemList_isLarge__CNy_c"}},1163:function(e,t,r){e.exports=r(6036)}},function(e){e.O(0,[888,774,179],function(){return e(e.s=9308)}),_N_E=e.O()}]);