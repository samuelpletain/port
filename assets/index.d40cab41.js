(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const y="/flags/assets/flag.66322f04.svg",Q="/flags/assets/flashcard.8493b3e9.svg",C="/flags/assets/quiz.aa5c915a.svg",p={saveData(m,t){window.localStorage.setItem(m,JSON.stringify(t))},getSavedData(m){return JSON.parse(window.localStorage.getItem(m))}};class F{constructor(t){p.getSavedData("flags")||p.saveData("flags",t),this.dataset=t,this.regions=[],this.setRegions(this.dataset)}static async build(t){const e=p.getSavedData("flags")??await this.getFlags(t);return new F(e)}static async getFlags(t){let e;await fetch(t).then(s=>s.json()).then(s=>e=s).catch(s=>console.log(s));let n=[];for(let s of e)n.push((({name:r,flags:a,region:i})=>({name:r,flags:a,region:i}))(s));return n.sort((s,r)=>s.name.common.localeCompare(r.name.common)),n}getDataset(){return this.dataset}setRegions(t){let e={};for(let n of t)n.region in e?e[n.region].push(n):e[n.region]=[n];this.regions=e}getRegions(){return this.regions}getRegionFlags(t){return this.regions[t]}getFilteredDataset(t){return this.dataset.filter(e=>e.name.common.toLowerCase().includes(t))}getFilteredDatasetRegion(t){return this.dataset.filter(e=>console.log(e.region!==t))}}class b{constructor(t,e){this.size=e,this.dataset=t,this.score=0,this.currentQuestion=0,this.quiz=this.generateQuiz(e)}resetQuiz(){this.score=0,this.currentQuestion=0,this.quiz=this.generateQuiz(this.size)}getRandomFlag(){return this.dataset[Math.floor(Math.random()*this.dataset.length)]}generateRandomFlags(t){let e=0,n=[];for(;e<t;){const s=this.getRandomFlag();n.some(r=>r.name.common===s.name.common)||(n.push(s),e++)}return n}generateQuestion(t){const e=[];e.push(t);let n=0;for(;n<3;){const s=this.getRandomFlag();t.name.common!==s.name.common&&!e.some(r=>r.name.common===s.name.common)&&(e.push(s),n++)}return e}generateQuiz(t){t=t>=this.dataset.length?this.dataset.length:t;const e={};e.answers=this.generateRandomFlags(t);const n=[];for(let s=0;s<t;s++){const r=this.shuffle(this.generateQuestion(e.answers[s]));n.push(r)}return e.set=n,e}shuffle(t){let e=t.length,n;for(;e!==0;)n=Math.floor(Math.random()*e),e--,[t[e],t[n]]=[t[n],t[e]];return t}checkAnswer(t){return this.checkAnswerWithId(t)?(this.score++,this.currentQuestion++,!0):(this.currentQuestion++,!1)}checkAnswerWithId(t){return this.quiz.set[this.currentQuestion][t].name.common===this.quiz.answers[this.currentQuestion].name.common}generateQuestionType(){return Math.random()<.5}getAnswerCountry(){return this.quiz.answers[this.currentQuestion].name.common}getAnswerFlag(){return this.quiz.answers[this.currentQuestion].flags.png}getChoicesCountries(){let t=[];for(let e of this.quiz.set[this.currentQuestion])t.push(e.name.common);return t}getChoicesFlags(){let t=[];for(let e of this.quiz.set[this.currentQuestion])t.push(e.flags.png);return t}}const A="/flags/assets/previous.b678a156.svg",I="/flags/assets/next.7159e859.svg",S="/flags/assets/back.67bb6026.svg",R="/flags/assets/filter.df107750.svg";class ${constructor(){this.region="",this.scores=p.getSavedData("scores")??{Europe:0,Asia:0,All:0,Africa:0,Antarctic:0,Oceania:0,Americas:0}}updateScore(t){t>this.scores[this.region]&&(this.scores[this.region]=t,p.saveData("scores",this.scores))}getScore(t){return this.scores[t]}setRegion(t){this.region=t}}class k{constructor(t,e){this.flags=e,this.parent=t,this.flashcardPos=0,this.flashcardX=0,this.links=[],this.scores=new $,this.filtered=e.dataset,this.filter=""}l;static async build(t,e){const n=await F.build(t);return new k(e,n)}createElem(t,e,n=null){const s=document.createElement(t);return s.classList.add(e),n&&(s.textContent=n),s}renderHome(t){this.links=t,this.parent.innerHTML="";const e=this.createElem("main","main"),n=this.createElem("h1","title","Fun with Flags"),s=this.createElem("div","cards_container");for(let r of this.links){const a=this.createElem("div","card"),i=this.createElem("img","icon");i.src=r.icon;const c=this.createElem("h2","category",r.title);a.append(i,c),a.addEventListener("click",()=>{r.render(this.parent)}),s.append(a)}e.append(n,s),this.parent.append(e)}renderFlags(){this.parent.innerHTML="",this.filter="",this.filtered=this.flags.dataset;const t=this.filtered,e=this.createElem("main","main"),n=this.createElem("div","mainDiv");n.id="mainDiv";const s=this.createElem("div","titleContainer"),r=this.createElem("h1","title","Flags"),a=this.createElem("img","filter_icon"),i=this.renderFilterForm(this.flags.regions);s.append(r,a);const c=this.renderFlagContainer(t);c.id="flag_container",n.append(s,c),e.append(n,i);const o=this.renderFooter();this.parent.append(e,o)}renderFlashcards(){this.parent.innerHTML="";const t=this.createElem("main","main"),e=this.createElem("h1","title","Flashcards"),n=this.createElem("div","region_container");for(let r in this.flags.getRegions()){const a=this.createElem("div","region"),i=this.createElem("img","region__image");i.src=`./img/${r}.svg`;const c=this.createElem("a","region__name",r);a.append(i,c),a.dataset.region=r,i.dataset.region=r,c.dataset.region=r,a.addEventListener("click",o=>{this.renderFlashcard(o.target.dataset.region)}),n.append(a)}t.append(e,n);const s=this.renderFooter();this.parent.append(t,s)}renderQuizzes(){this.parent.innerHTML="";const t=this.createElem("main","main"),e=this.createElem("h1","title","Quizzes"),n=this.createElem("div","region_container"),s=this.createElem("div","region"),r=this.createElem("img","region__image");r.src="./img/earth.jpg";const a=this.createElem("a","region__name","All"),i=this.createElem("div","region_cont"),c=this.createElem("p","best_score","Best score: "),o=this.scores.getScore("All"),l=this.createElem("span","score_bad",`${o}/15`);l.classList.add(o<5?"score_bad":o<10?"score_medium":"score_good"),c.append(l),i.append(a,c),s.append(r,i),s.dataset.region="All",s.addEventListener("click",d=>{this.scores.setRegion("All"),this.renderQuiz(s.dataset.region)}),n.append(s);for(let d in this.flags.getRegions()){const g=this.createElem("div","region"),f=this.createElem("img","region__image");f.src=`./img/${d}.svg`;const u=this.createElem("div","region_cont"),_=this.createElem("a","region__name",d),w=this.createElem("p","best_score","Best score: "),E=this.scores.getScore(d),L=this.createElem("span","score_bad",`${this.scores.getScore(d)}/${d==="Antarctic"?5:15}`);d==="Antarctic"?L.classList.add(E<2?"score_bad":E<4?"score_medium":"score_good"):L.classList.add(E<5?"score_bad":E<10?"score_medium":"score_good"),w.append(L),u.append(_,w),g.append(f,u),g.dataset.region=d,g.addEventListener("click",T=>{this.scores.setRegion(d),this.renderQuiz(g.dataset.region)}),n.append(g)}t.append(e,n);const h=this.renderFooter();this.parent.append(t,h)}renderQuiz(t){const e=this.renderBackLink("Quizzes");e.addEventListener("click",()=>{this.renderQuizzes()});const n=t==="All"?new b(this.flags.getDataset(),15):new b(this.flags.getRegionFlags(t),15);this.parent.innerHTML="";const s=this.createElem("main","main"),r=this.createElem("h1","title",`Quiz - ${t}`),a=this.createElem("p","score","Score: "),i=this.createElem("span","score_bad",`0/${n.quiz.answers.length}`);a.append(i);const c=this.createElem("div","question_container");this.renderQuestion(c,n,i);const o=this.createElem("button","reset_button","Start Over");o.id="reset",o.classList.add("is-hidden"),o.addEventListener("click",()=>{this.renderQuiz(t)}),s.append(e,r,c,a,o);const l=this.renderFooter();this.parent.append(s,l)}renderQuestion(t,e,n){t.innerHTML="";const s=this.createElem("p","question_number",`Question ${e.currentQuestion+1}/${e.quiz.answers.length}`),r=this.createElem("p","question"),a=this.createElem("div","answer"),i=this.createElem("div","answers_container");if(i.id="answers_container",e.generateQuestionType()){r.textContent=`What is the flag of ${e.getAnswerCountry()}?`;const c=e.getChoicesFlags();for(let o=0;o<c.length;o++){const l=this.createElem("div","flag_card");l.dataset.id=o;const h=this.createElem("img","flag");h.src=c[o],h.dataset.id=o,l.addEventListener("click",d=>this.addAnswerEventListener(d,e,n,t,l)),l.append(h),i.append(l)}t.append(s,r,a,i)}else{r.textContent="To what contry does this flag belong?";const c=this.createElem("img","flag_question");c.src=e.getAnswerFlag();const o=e.getChoicesCountries();for(let l=0;l<o.length;l++){const h=this.createElem("p","country_answer",o[l]);h.dataset.id=l,h.addEventListener("click",d=>{this.addAnswerEventListener(d,e,n,t,h)}),i.append(h)}t.append(s,r,c,i)}return t}renderFlashcard(t){this.flashcardPos=0,this.parent.innerHTML="";const e=this.flags.getRegionFlags(t),n=this.renderBackLink("Flashcards");n.addEventListener("click",()=>{this.renderFlashcards()});const s=this.createElem("main","main");s.style.overflowX="hidden";const r=this.createElem("h1","title",e[0].region),a=this.createElem("div","flashcards_container"),i=this.createElem("div","flashcard");a.addEventListener("click",w=>{i.classList.toggle("is-flipped")});const c=this.createElem("p","flashcard__name",e[0].name.common),o=this.createElem("img","flashcard__flag");o.src=e[0].flags.png;const l=this.createElem("div","flashcard_front"),h=this.createElem("div","flashcard_back");l.append(o),h.append(c),i.append(l,h),a.append(i);const d=this.createElem("div","navigation"),g=this.createElem("img","navigation__arrow");g.src=A;const f=this.createElem("p","navigation__content",`${this.flashcardPos+1}/${e.length}`),u=this.createElem("img","navigation__arrow");u.src=I,g.addEventListener("click",()=>{this.flashcardPos>0&&(i.classList.remove("is-flipped"),setTimeout(()=>{this.flashcardPos--,c.textContent=e[this.flashcardPos].name.common,o.src=e[this.flashcardPos].flags.png,f.textContent=`${this.flashcardPos+1}/${e.length}`},125))}),u.addEventListener("click",()=>{this.flashcardPos<e.length-1&&(i.classList.remove("is-flipped"),setTimeout(()=>{this.flashcardPos++,c.textContent=e[this.flashcardPos].name.common,o.src=e[this.flashcardPos].flags.png,f.textContent=`${this.flashcardPos+1}/${e.length}`},125))}),d.append(g,f,u),s.append(n,r,a,d);const _=this.renderFooter();this.parent.append(s,_)}renderBackLink(t){const e=this.createElem("img","back_icon");e.src=S;const n=this.createElem("a","back_link",t);return n.prepend(e),n}renderFooter(){const t=this.createElem("footer","footer");for(let e of this.links){const n=this.createElem("img","footer_icon");n.src=e.icon,n.addEventListener("click",()=>{window.scrollTo(0,0),e.render(this.parent),this.filter="",this.filtered=this.flags.dataset}),t.append(n)}return t}addAnswerEventListener(t,e,n,s,r){document.getElementById("answers_container").childNodes.forEach(l=>{e.checkAnswerWithId(l.dataset.id)&&(l.style.borderColor="#13AE19")}),e.checkAnswer(t.target.dataset.id)?r.classList.add("right"):r.classList.add("wrong"),n.textContent=`${e.score}/${e.quiz.answers.length}`;let i="";e.quiz.answers.length===5?i=e.score<2?"score_bad":e.score<4?"score_medium":"score_good":i=e.score<5?"score_bad":e.score<10?"score_medium":"score_good",n.className=i;const c=s,o=s.cloneNode(!0);s.parentNode.replaceChild(o,c),e.quiz.answers.length===e.currentQuestion&&(document.getElementById("reset").classList.remove("is-hidden"),this.scores.updateScore(e.score)),setTimeout(()=>{e.quiz.answers.length>e.currentQuestion&&this.renderQuestion(o,e,n)},2e3)}renderFilterForm(t){const e=this.createElem("form","filter_form");e.classList.add("is-closed"),e.addEventListener("click",()=>{e.classList.remove("is-closed"),document.getElementById("mainDiv").addEventListener("click",()=>{e.classList.add("is-closed")})});const n=this.createElem("label","label"),s=this.createElem("img","filter_icon");s.src=R,n.append(s);const r=this.createElem("input","search");return r.placeholder="Type a country name...",r.value=this.filter,r.addEventListener("input",()=>{this.filter=r.value,this.filtered=this.flags.getFilteredDataset(r.value);const a=document.getElementById("flag_container");document.getElementById("mainDiv").replaceChild(this.renderFlagContainer(this.filtered),a)}),e.append(n,r),e}renderFlagContainer(t){const e=this.createElem("div","flags_container");e.id="flag_container";for(let n of t){const s=this.createElem("div","country"),r=this.createElem("div","flag_container"),a=this.createElem("img","country__flag");a.src=n.flags.png;const i=this.createElem("p","country__name",n.name.common);r.append(a),s.append(r,i),e.append(s)}return e}}const D="https://restcountries.com/v3.1/all",z=document.getElementById("app"),v=await k.build(D,z),P=[{title:"Flags",icon:y,render:function(m){v.renderFlags()}},{title:"Flashcards",icon:Q,render:function(m){v.renderFlashcards()}},{title:"Quizzes",icon:C,render:function(m){v.renderQuizzes(m)}}];v.renderHome(P);
