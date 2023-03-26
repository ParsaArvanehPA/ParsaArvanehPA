"use strict";(self.webpackChunkangular_boilerplate=self.webpackChunkangular_boilerplate||[]).push([[83],{83:(Bn,re,d)=>{d.r(re),d.d(re,{SkillsPageModule:()=>Nn});var c=d(6895),pt=d(6976),r=d(8274),S=d(96),ie=d(4032);let ht=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=r.Xpm({type:n,selectors:[["app-skills-main-text"]],decls:19,vars:19,consts:[[3,"fancyTag"],[1,"text-wrapper"],[3,"innerHTML"]],template:function(e,i){1&e&&(r._UZ(0,"app-fancy-html-tag-in-plain-text",0),r.TgZ(1,"h2"),r._uU(2),r.ALo(3,"translate"),r.qZA(),r._UZ(4,"app-fancy-html-tag-in-plain-text",0)(5,"app-fancy-html-tag-in-plain-text",0),r.TgZ(6,"div",1)(7,"p"),r._uU(8),r.ALo(9,"translate"),r.qZA(),r.TgZ(10,"p"),r._uU(11),r.ALo(12,"translate"),r.qZA(),r.TgZ(13,"p"),r._uU(14),r.ALo(15,"translate"),r.qZA(),r._UZ(16,"p",2),r.ALo(17,"translate"),r.qZA(),r._UZ(18,"app-fancy-html-tag-in-plain-text",0)),2&e&&(r.Q6J("fancyTag","h2"),r.xp6(2),r.Oqu(r.lcZ(3,9,"SkillsPage.Skills")),r.xp6(2),r.Q6J("fancyTag","h2/"),r.xp6(1),r.Q6J("fancyTag","p"),r.xp6(3),r.Oqu(r.lcZ(9,11,"SkillsPage.Skills1")),r.xp6(3),r.Oqu(r.lcZ(12,13,"SkillsPage.Skills2")),r.xp6(3),r.Oqu(r.lcZ(15,15,"SkillsPage.Skills3")),r.xp6(2),r.Q6J("innerHTML",r.lcZ(17,17,"SkillsPage.Skills4"),r.oJD),r.xp6(2),r.Q6J("fancyTag","p/"))},dependencies:[S.g,ie.X$],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column}[_nghost-%COMP%]   .text-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--gap-between-paragraphs)}[_nghost-%COMP%]   h2[_ngcontent-%COMP%]{font-size:4rem;color:var(--clr-secondary)}[_nghost-%COMP%]     a{color:var(--clr-secondary)}[_nghost-%COMP%]   p[_ngcontent-%COMP%]{max-width:75ch}"]}),n})();function gt(n,t){if(1&n&&(r.TgZ(0,"div")(1,"p"),r._uU(2),r.qZA(),r._UZ(3,"figure"),r.qZA()),2&n){const e=t.$implicit;r.xp6(2),r.Oqu(e.name),r.xp6(1),r.Udp("--value",e.score)}}let ft=(()=>{class n{constructor(){this.skillRank=[{name:translate("SkillsPage.Angular"),score:1},{name:translate("SkillsPage.SCSS"),score:1},{name:translate("SkillsPage.TypeScript"),score:.9},{name:translate("SkillsPage.PWA"),score:.75},{name:translate("SkillsPage.React"),score:.5}]}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=r.Xpm({type:n,selectors:[["app-skills-chart"]],decls:3,vars:3,consts:[[3,"fancyTag"],[4,"ngFor","ngForOf"]],template:function(e,i){1&e&&(r._UZ(0,"app-fancy-html-tag-in-plain-text",0),r.YNc(1,gt,4,3,"div",1),r._UZ(2,"app-fancy-html-tag-in-plain-text",0)),2&e&&(r.Q6J("fancyTag","figure"),r.xp6(1),r.Q6J("ngForOf",i.skillRank),r.xp6(1),r.Q6J("fancyTag","figure/"))},dependencies:[c.sg,S.g],styles:['[_nghost-%COMP%]{display:flex;flex-direction:column;gap:var(--gap-between-paragraphs)}[_nghost-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.5rem}[_nghost-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:700}[_nghost-%COMP%]   div[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]{width:100%;height:3px;background-color:var(--clr-gray-dark);position:relative}[_nghost-%COMP%]   div[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]:after{content:"";position:absolute;inset-block:0;inset-inline-start:0;background-color:var(--clr-secondary);width:calc(100% * var(--value));transform:scaleX(0);transform-origin:right;animation:skills-chart-fill-chart-animation 1s ease-out forwards}@keyframes skills-chart-fill-chart-animation{0%{transform:scaleX(0)}to{transform:scaleX(1)}}']}),n})();function mt(n,t){if(1&n&&(r.ynx(0),r.TgZ(1,"div")(2,"p",1),r._uU(3),r.qZA()(),r.TgZ(4,"div")(5,"p"),r._uU(6),r.qZA(),r.TgZ(7,"p"),r._uU(8),r.qZA()(),r.TgZ(9,"div")(10,"p"),r._uU(11),r.qZA()(),r.BQk()),2&n){const e=r.oxw();r.xp6(3),r.Oqu(e.experienceBox.title),r.xp6(3),r.Oqu(e.experienceBox.workSpace),r.xp6(2),r.Oqu(e.experienceBox.year),r.xp6(3),r.Oqu(e.experienceBox.description)}}let _t=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=r.Xpm({type:n,selectors:[["app-skills-experience-box"]],inputs:{experienceBox:"experienceBox"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"title"]],template:function(e,i){1&e&&r.YNc(0,mt,12,4,"ng-container",0),2&e&&r.Q6J("ngIf",i.experienceBox)},dependencies:[c.O5],styles:["[_nghost-%COMP%]{padding:2.5rem;display:flex;flex-direction:column;gap:1rem;background-color:var(--clr-primary-16)}[_nghost-%COMP%]   .title[_ngcontent-%COMP%]{color:var(--clr-white);font-weight:700}[_nghost-%COMP%]   p[_ngcontent-%COMP%]:not(.title){color:var(--clr-gray-light);font-size:1.4rem}"]}),n})();function yt(n,t){if(1&n&&(r.TgZ(0,"p"),r._uU(1),r.qZA()),2&n){const e=t.$implicit;r.xp6(1),r.Oqu(e)}}function Ct(n,t){if(1&n){const e=r.EpF();r.TgZ(0,"label")(1,"input",6),r.NdJ("change",function(){const s=r.CHM(e).$implicit,a=r.oxw();return r.KtG(a.changeSelectedSkill(s))}),r.qZA(),r.TgZ(2,"div",7),r._UZ(3,"img",8),r.qZA()()}if(2&n){const e=t.$implicit,i=t.index,o=r.oxw();r.xp6(1),r.Q6J("name",o.skillsWrapper.title)("checked",e.isSelected),r.xp6(1),r.Udp("--index",i),r.xp6(1),r.Q6J("className",e.className)("src",e.image,r.LSH)}}let vt=(()=>{class n{ngOnChanges(e){e.skillsWrapper&&e.skillsWrapper.currentValue&&(this.selectedSkill=this.skillsWrapper.skillItems[0].title)}changeSelectedSkill(e){const i=this.skillsWrapper.skillItems.find(o=>o.isSelected);i&&(i.isSelected=!1),e.isSelected=!0,this.selectedSkill=e.title,this.selectedSkillClassName=e.className??""}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=r.Xpm({type:n,selectors:[["app-skills-wrapper"]],inputs:{skillsWrapper:"skillsWrapper"},features:[r.TTD],decls:13,vars:9,consts:[[1,"selected-skill-watermark",3,"ngClass"],[1,"text-wrapper"],[3,"fancyTag"],[1,"description-wrapper"],[4,"ngFor","ngForOf"],[1,"skill-items-wrapper"],["type","radio",3,"name","checked","change"],[1,"img-wrapper"],["alt","icon",3,"className","src"]],template:function(e,i){1&e&&(r.TgZ(0,"p",0),r._uU(1),r.qZA(),r.TgZ(2,"div",1),r._UZ(3,"app-fancy-html-tag-in-plain-text",2),r.TgZ(4,"h2"),r._uU(5),r.qZA(),r._UZ(6,"app-fancy-html-tag-in-plain-text",2)(7,"app-fancy-html-tag-in-plain-text",2),r.TgZ(8,"div",3),r.YNc(9,yt,2,1,"p",4),r.qZA(),r._UZ(10,"app-fancy-html-tag-in-plain-text",2),r.qZA(),r.TgZ(11,"div",5),r.YNc(12,Ct,4,6,"label",4),r.qZA()),2&e&&(r.Q6J("ngClass",i.selectedSkillClassName),r.xp6(1),r.Oqu(i.selectedSkill),r.xp6(2),r.Q6J("fancyTag","h2"),r.xp6(2),r.Oqu(i.skillsWrapper.title),r.xp6(1),r.Q6J("fancyTag","h2/"),r.xp6(1),r.Q6J("fancyTag","p"),r.xp6(2),r.Q6J("ngForOf",i.skillsWrapper.description),r.xp6(1),r.Q6J("fancyTag","p/"),r.xp6(2),r.Q6J("ngForOf",i.skillsWrapper.skillItems))},dependencies:[c.mk,c.sg,S.g],styles:["[_nghost-%COMP%]{height:60vh;display:flex;position:relative;padding:5rem 10rem}[_nghost-%COMP%]   .text-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column}[_nghost-%COMP%]   .text-wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:4rem;color:var(--clr-secondary)}[_nghost-%COMP%]   .text-wrapper[_ngcontent-%COMP%]   .description-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--gap-between-paragraphs)}[_nghost-%COMP%]   .skill-items-wrapper[_ngcontent-%COMP%]{direction:ltr;position:relative;margin-inline-end:auto;display:flex;flex-direction:column;flex-wrap:wrap;gap:4rem;justify-content:center}[_nghost-%COMP%]   .skill-items-wrapper[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]   .skill-items-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ .img-wrapper[_ngcontent-%COMP%]{filter:none}[_nghost-%COMP%]   .skill-items-wrapper[_ngcontent-%COMP%]   .img-wrapper[_ngcontent-%COMP%]{cursor:pointer;width:13rem;aspect-ratio:1;display:flex;align-items:center;justify-content:center;background-color:var(--clr-secondary);border-radius:30% 70% 70% 30%/30% 30% 70% 70%;animation:morphing 10s infinite;animation-delay:calc(var(--index) * .5s);filter:grayscale(1);transition:filter .2s ease-in}[_nghost-%COMP%]   .skill-items-wrapper[_ngcontent-%COMP%]   .img-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:60%;-webkit-user-select:none;user-select:none}[_nghost-%COMP%]   .skill-items-wrapper[_ngcontent-%COMP%]   .img-wrapper[_ngcontent-%COMP%]   img.react-image[_ngcontent-%COMP%], [_nghost-%COMP%]   .skill-items-wrapper[_ngcontent-%COMP%]   .img-wrapper[_ngcontent-%COMP%]   img.react-native-image[_ngcontent-%COMP%], [_nghost-%COMP%]   .skill-items-wrapper[_ngcontent-%COMP%]   .img-wrapper[_ngcontent-%COMP%]   img.kendo-image[_ngcontent-%COMP%]{filter:brightness(.5)}[_nghost-%COMP%]   .skill-items-wrapper[_ngcontent-%COMP%]   .img-wrapper[_ngcontent-%COMP%]   img.module-federation-image[_ngcontent-%COMP%]{border-radius:50%;background-color:var(--clr-white)}[_nghost-%COMP%]   .skill-items-wrapper[_ngcontent-%COMP%]   .img-wrapper[_ngcontent-%COMP%]   img.material-image[_ngcontent-%COMP%], [_nghost-%COMP%]   .skill-items-wrapper[_ngcontent-%COMP%]   .img-wrapper[_ngcontent-%COMP%]   img.ogma-image[_ngcontent-%COMP%], [_nghost-%COMP%]   .skill-items-wrapper[_ngcontent-%COMP%]   .img-wrapper[_ngcontent-%COMP%]   img.e-charts-image[_ngcontent-%COMP%], [_nghost-%COMP%]   .skill-items-wrapper[_ngcontent-%COMP%]   .img-wrapper[_ngcontent-%COMP%]   img.antv-g6-image[_ngcontent-%COMP%], [_nghost-%COMP%]   .skill-items-wrapper[_ngcontent-%COMP%]   .img-wrapper[_ngcontent-%COMP%]   img.cypress-image[_ngcontent-%COMP%], [_nghost-%COMP%]   .skill-items-wrapper[_ngcontent-%COMP%]   .img-wrapper[_ngcontent-%COMP%]   img.jest-image[_ngcontent-%COMP%]{border-radius:50%}[_nghost-%COMP%]   .selected-skill-watermark[_ngcontent-%COMP%]{position:absolute;top:-7rem;left:24rem;font-size:25rem;letter-spacing:-30px;opacity:.05;-webkit-user-select:none;user-select:none}[_nghost-%COMP%]   .selected-skill-watermark.module-federation-image[_ngcontent-%COMP%]{text-align:left;line-height:22rem;top:2rem}@keyframes morphing{0%{border-radius:30% 70% 70% 30%/30% 30% 70% 70%}25%{border-radius:58% 42% 75% 25%/76% 46% 54% 24%}50%{border-radius:50% 50% 33% 67%/55% 27% 73% 45%}75%{border-radius:33% 67% 58% 42%/63% 68% 32% 37%}}"]}),n})();function Vt(n,t){if(1&n&&(r.ynx(0),r._UZ(1,"app-skills-experience-box",6),r.BQk()),2&n){const e=t.$implicit;r.xp6(1),r.Q6J("experienceBox",e)}}function Mt(n,t){if(1&n&&(r.ynx(0),r._UZ(1,"app-skills-wrapper",7),r.BQk()),2&n){const e=t.$implicit;r.xp6(1),r.Q6J("skillsWrapper",e)}}let At=(()=>{class n{constructor(){this.experienceModelBox=[{title:translate("SkillsPage.Freelancer"),workSpace:"",year:translate("SkillsPage.YearOfFreelancing"),description:translate("SkillsPage.DescriptionOfFreelancing")},{title:translate("SkillsPage.FrontendDeveloper"),workSpace:translate("SkillsPage.MohaymenICT"),year:translate("SkillsPage.YearOfFrontendDeveloping"),description:translate("SkillsPage.DescriptionForMohaymen")}],this.skillsWrapper=[{title:translate("SkillsPage.SkillsWrapper.Frameworks.Title"),description:[translate("SkillsPage.SkillsWrapper.Frameworks.Description.Description1"),translate("SkillsPage.SkillsWrapper.Frameworks.Description.Description2"),translate("SkillsPage.SkillsWrapper.Frameworks.Description.Description3")],skillItems:[{title:translate("SkillsPage.SkillsWrapper.Frameworks.Items.Angular"),image:"assets/images/angular.svg",isSelected:!0},{title:translate("SkillsPage.SkillsWrapper.Frameworks.Items.React"),image:"assets/images/react.svg",isSelected:!1,className:"react-image"},{title:translate("SkillsPage.SkillsWrapper.Frameworks.Items.Svelte"),image:"assets/images/svelte.svg",isSelected:!1},{title:translate("SkillsPage.SkillsWrapper.Frameworks.Items.NextJs"),image:"assets/images/next-js.svg",isSelected:!1}]},{title:translate("SkillsPage.SkillsWrapper.MicroFrontend.Title"),description:[translate("SkillsPage.SkillsWrapper.MicroFrontend.Description.Description1"),translate("SkillsPage.SkillsWrapper.MicroFrontend.Description.Description2")],skillItems:[{title:translate("SkillsPage.SkillsWrapper.MicroFrontend.Items.NxNarwhale"),image:"assets/images/nx.svg",isSelected:!0},{title:translate("SkillsPage.SkillsWrapper.MicroFrontend.Items.ModuleFederation"),image:"assets/images/module-federation.svg",isSelected:!1,className:"module-federation-image"}]},{title:translate("SkillsPage.SkillsWrapper.Mobile.Title"),description:[translate("SkillsPage.SkillsWrapper.Mobile.Description.Description1"),translate("SkillsPage.SkillsWrapper.Mobile.Description.Description2")],skillItems:[{title:translate("SkillsPage.SkillsWrapper.Mobile.Items.PWA"),image:"assets/images/pwa.svg",isSelected:!0},{title:translate("SkillsPage.SkillsWrapper.Mobile.Items.Ionic"),image:"assets/images/ionic.svg",isSelected:!1},{title:translate("SkillsPage.SkillsWrapper.Mobile.Items.ReactNative"),image:"assets/images/react-native.svg",isSelected:!1,className:"react-native-image"}]},{title:translate("SkillsPage.SkillsWrapper.DesignSystems.Title"),description:[translate("SkillsPage.SkillsWrapper.DesignSystems.Description.Description1"),translate("SkillsPage.SkillsWrapper.DesignSystems.Description.Description2")],skillItems:[{title:translate("SkillsPage.SkillsWrapper.DesignSystems.Items.NgZorro"),image:"assets/images/ng-zorro.svg",isSelected:!0},{title:translate("SkillsPage.SkillsWrapper.DesignSystems.Items.AngularMaterial"),image:"assets/images/angular-material.svg",isSelected:!1},{title:translate("SkillsPage.SkillsWrapper.DesignSystems.Items.Kendo"),image:"assets/images/kendo.svg",isSelected:!1,className:"kendo-image"},{title:translate("SkillsPage.SkillsWrapper.DesignSystems.Items.Material"),image:"assets/images/material-design.svg",isSelected:!1,className:"material-image"},{title:translate("SkillsPage.SkillsWrapper.DesignSystems.Items.Bootstrap"),image:"assets/images/bootstrap.svg",isSelected:!1}]},{title:translate("SkillsPage.SkillsWrapper.DataVisualization.Title"),description:[translate("SkillsPage.SkillsWrapper.DataVisualization.Description.Description1")],skillItems:[{title:translate("SkillsPage.SkillsWrapper.DataVisualization.Items.OgmaLinkurious"),image:"assets/images/ogma.svg",isSelected:!0,className:"ogma-image"},{title:translate("SkillsPage.SkillsWrapper.DataVisualization.Items.HighCharts"),image:"assets/images/high-charts.svg",isSelected:!1},{title:translate("SkillsPage.SkillsWrapper.DataVisualization.Items.ECharts"),image:"assets/images/e-charts.png",isSelected:!1,className:"e-charts-image"},{title:translate("SkillsPage.SkillsWrapper.DataVisualization.Items.AntG6"),image:"assets/images/antv-g6.svg",isSelected:!1,className:"antv-g6-image"},{title:translate("SkillsPage.SkillsWrapper.DataVisualization.Items.MapboxGL"),image:"assets/images/mapbox-gl.png",isSelected:!1}]},{title:translate("SkillsPage.SkillsWrapper.UnitTesting.Title"),description:[translate("SkillsPage.SkillsWrapper.UnitTesting.Description.Description1"),translate("SkillsPage.SkillsWrapper.UnitTesting.Description.Description2"),translate("SkillsPage.SkillsWrapper.UnitTesting.Description.Description3")],skillItems:[{title:translate("SkillsPage.SkillsWrapper.UnitTesting.Items.Karma"),image:"assets/images/karma.svg",isSelected:!0},{title:translate("SkillsPage.SkillsWrapper.UnitTesting.Items.Cypress"),image:"assets/images/cypress.jpg",isSelected:!1,className:"cypress-image"},{title:translate("SkillsPage.SkillsWrapper.UnitTesting.Items.Jest"),image:"assets/images/jest.svg",isSelected:!1,className:"jest-image"}]}]}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=r.Xpm({type:n,selectors:[["app-skills-page"]],decls:10,vars:4,consts:[[1,"skills-page-main-section"],[1,"skill-chart-experience-wrapper"],[3,"fancyTag"],[1,"experience-box-wrapper"],[4,"ngFor","ngForOf"],[1,"skills-section-wrapper"],[3,"experienceBox"],[3,"skillsWrapper"]],template:function(e,i){1&e&&(r.TgZ(0,"section",0),r._UZ(1,"app-skills-main-text"),r.TgZ(2,"div",1),r._UZ(3,"app-skills-chart")(4,"app-fancy-html-tag-in-plain-text",2),r.TgZ(5,"div",3),r.YNc(6,Vt,2,1,"ng-container",4),r.qZA(),r._UZ(7,"app-fancy-html-tag-in-plain-text",2),r.qZA()(),r.TgZ(8,"section",5),r.YNc(9,Mt,2,1,"ng-container",4),r.qZA()),2&e&&(r.xp6(4),r.Q6J("fancyTag","app-skills-experience-box"),r.xp6(2),r.Q6J("ngForOf",i.experienceModelBox),r.xp6(1),r.Q6J("fancyTag","app-skills-experience-box/"),r.xp6(2),r.Q6J("ngForOf",i.skillsWrapper))},dependencies:[c.sg,ht,ft,S.g,_t,vt],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;position:relative}[_nghost-%COMP%]   .skills-page-main-section[_ngcontent-%COMP%]{display:flex;gap:2rem;padding:20rem 10rem}[_nghost-%COMP%]   .skills-page-main-section[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:1}[_nghost-%COMP%]   .skills-page-main-section[_ngcontent-%COMP%]   .experience-box-wrapper[_ngcontent-%COMP%]{display:flex;gap:.5rem}[_nghost-%COMP%]   .skills-page-main-section[_ngcontent-%COMP%]   .experience-box-wrapper[_ngcontent-%COMP%]   app-skills-experience-box[_ngcontent-%COMP%]{flex:1}[_nghost-%COMP%]   .skills-section-wrapper[_ngcontent-%COMP%]   app-skills-wrapper[_ngcontent-%COMP%]:nth-child(odd){background-color:var(--clr-primary-dark)}"]}),n})();var O=d(7706);let St=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({imports:[c.ez,O.n,ie.aw]}),n})(),Ot=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({imports:[c.ez,O.n]}),n})(),kt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({imports:[c.ez]}),n})();d(2076),d(4128),d(4004);let ze=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({}),n})(),wn=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({imports:[ze]}),n})(),Fn=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({imports:[wn]}),n})(),Pn=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({imports:[c.ez,O.n,Fn]}),n})();const En=[{path:"",component:At}];let Nn=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({imports:[pt.Bz.forChild(En),c.ez,St,Ot,O.n,kt,Pn]}),n})()}}]);