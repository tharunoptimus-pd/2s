let qs=e=>document.querySelector(e),pages=[{src:"/pages/paint.webp",speed:1.2,type:"Landing Page",location:"https://newpaint.netlify.app",name:"Paint"},{src:"/pages/blog.webp",speed:1.6,type:"Blog",location:"https://thatblog.netlify.app",name:"That Blog"},{src:"/pages/fire.webp",speed:1.7,type:"Landing Page",location:"https://fireoauth.netlify.app",name:"Fire OAuth"},{src:"/pages/cool.webp",speed:.8,type:"Code Generator",location:"https://coolsw.pages.dev",name:"Cool SW"},{src:"/pages/idly.webp",speed:1.4,type:"Landing Page",location:"https://idly1.netlify.app",name:"Idly"}],fa=e=>{let t="",n=pages[e-1];return t+=` <div class="contentPhase">\n        <div class="siteImageContainer">\n            <img src="${n.src}" alt="${n.name}" height="400" width="556">\n        </div>\n        <div class="siteInfoContainer">\n            <span class="pageSpeed">⚡${n.speed}s</span>\n            <span class="pageType">${n.type}</span>\n            <a class="pageLocation" rel="noopener noreferrer" href="${n.location}">Link ⛳</a>\n            <div class="controlPhase">\n                <button type="button" class="prevButton" data-prev="${e}" aria-label="prev">Previous</button>\n                <button type="button" class="nextButton" data-prev="${e}" aria-label="next">Next</button>\n            </div>\n        </div>\n    </div>`,t};document.addEventListener("click",e=>{let t=e.target;if(t.classList.contains("prevButton")||t.classList.contains("nextButton")){let n=t.dataset.prev,a=n;t.classList.contains("prevButton")?a--:a++,a<=0&&(a=5),a>5&&(a=1);let s=fa(a);qs(".sitesContainer").innerHTML=s,e.stopPropagation()}}),qs(".rightsReserved").textContent=`All Rights Reserved © ${(new Date).getFullYear()} by <2 Seconds`;