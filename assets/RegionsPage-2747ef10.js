import{a}from"./appData-3eeeb57c.js";import{_ as l,r as d,o as n,c as i,F as f,e as p,f as m,w as u,d as o,t as g}from"./index-7b5085d3.js";const h={props:{faction:{type:String,default:""}},data(){return a},computed:{regions(){if(!this.faction){let e=[];return a.factions.forEach(s=>{e=[...e,...s.regions.map(r=>({...r,faction:s.name}))]}),e}return a.factions.find(e=>e.name===this.faction).regions.map(e=>({...e,faction:this.faction}))}}},k={class:"regions-container"},v={class:"regions"},x=["src"],y={class:"title"};function B(e,s,r,R,$,c){const _=d("router-link");return n(),i("div",k,[(n(!0),i(f,null,p(c.regions,t=>(n(),m(_,{class:"link",key:t.name,to:{name:"region-cities",params:{region:t.name,faction:t.faction}}},{default:u(()=>[o("div",v,[o("img",{class:"image",src:t.img},null,8,x),o("h2",y,g(t.name),1)])]),_:2},1032,["to"]))),128))])}const D=l(h,[["render",B],["__scopeId","data-v-f960ed73"]]);export{D as default};
