import{f as v}from"./repositories-d0917b5a.js";import{_ as p,o as i,c as r,a as e,F as x,r as g,e as m,d as h,t as u,b as f}from"./index-b0a31aa6.js";const b="/showcase-webpage/assets/roberto-f0403955.jpg";const y={data(){return{repositories:[]}},created(){v().then(s=>{this.repositories=s}).catch(s=>{console.error("Error fetching repositories data:",s)})},methods:{generateBadgeUrl(s,_){const c="https://img.shields.io/badge/",n=s.replace(/\s+/g,"_"),l="",o="defaultColor",t="plastic",d=s.toLowerCase();return`${c}${n}-${l}-${o}?style=${t}&logo=${d}`}}},w={class:"flex bg-gray-700 text-white h-screen"},j=m('<div class="flex flex-col h-screen w-2/6"><div class="h-1/6"></div><div class="flex flex-col items-center justify-end"><div class="w-3/4 justify-center"><img class="rounded-xl" src="'+b+'" alt=""></div></div><div class="flex flex-row p-5 sm:text-base text-xs"><div class="w-1/5"></div><div class="w-2/3 justify-start items-end"><div class="text-yellow-200 font-semibold tracking-wide hover:text-blue-400"> Data Scientist | AI Engineer </div><div><div class="pt-2 text-gray-400 hover:text-gray-900"> Statistical Modeling | Data Mining </div><div class="text-gray-200 font-light"> Unleashing the Power of Data and AI </div></div><p class="text-white pt-1"> Currently based in <b> Paris</b></p></div></div></div>',1),k={class:"flex flex-col w-4/6 pr-5 pb-14 h-full overflow-scroll hide-scrollbar"},$=e("div",{class:"sticky top-0 z-20 pb-4 bg-gray-700"},[e("h1",{class:"m-3 text-center text-2xl sm:text-5xl text-white-900 font-sans font-light"}," Latest Projects "),e("h1",{class:"m-0 sm:m-2 text-center text-lg md:text-3xl text-blue-400 font-extralight"},[h(" Data Scientist | ML Engineer | AI developer "),e("br")]),e("div",{class:"h-1/6 z-5 bg-gray-700 border-b-2 border-yellow-300"})],-1),C={class:"relative flex flex-col p-5 md:justify-normal py-2"},S={key:0,class:"relative flex flex-col p-5 md:justify-normal py-2"},B={class:"flex justify-start p-2 pl-0 md:text-xl color-1"},D=["innerHTML"],L={key:0,class:"pt-2"},M=["href"],P=e("svg",{class:"github-icon mr-2 -ml-1 w-5 h-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor"},[e("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.86 2.33.66.07-.52.28-.86.51-1.06-1.8-.2-3.69-.9-3.69-4 0-.88.31-1.6.82-2.17-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.57.82 1.29.82 2.17 0 3.1-1.89 3.8-3.69 4 .29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"})],-1),A={class:"p-3 flex flex-wrap"},E=["src","alt"],N=e("div",{class:"flex justify-center pt-8"},[e("hr")],-1);function V(s,_,c,n,l,o){return i(),r("div",w,[j,e("div",k,[$,(i(!0),r(x,null,g(l.repositories,(t,d)=>(i(),r("div",C,[t.in_startpage?(i(),r("div",S,[e("div",B,u(t.title),1),e("div",{class:"text-sm md:text-base",innerHTML:t.description},null,8,D),t.git_link?(i(),r("div",L,[e("a",{href:t.git_link,target:"_blank",class:"inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700"},[P,h(" Github Repository ")],8,M)])):f("",!0),e("div",A,[(i(!0),r(x,null,g(t.technologies,a=>(i(),r("img",{key:a,src:o.generateBadgeUrl(a),alt:a,class:"h-6 mr-2 mt-2"},null,8,E))),128))]),N])):f("",!0)]))),256))])])}const T=p(y,[["render",V]]);export{T as default};
