(function(n,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(n=typeof globalThis<"u"?globalThis:n||self,e(n.VueFormComponents={},n.Vue))})(this,function(n,e){"use strict";var p=0,u={},m={};const a=function(t,l){return l!==void 0?m[l]===void 0?(m[l]=0,l):(m[l]++,l+"-"+m[l]):t!==void 0?u[t]===void 0?(u[t]=0,"form-id-"+t):(u[t]++,"form-id-"+t+"-"+u[t]):(p++,"form-id-"+p)},f=(t,l)=>{const s=t.__vccOpts||t;for(const[c,i]of l)s[c]=i;return s};var b=["lg","sm"],y=["text","email","file","password","textarea","color"];const x={data(){return{formId:"",text:"",inputTypeTag:"input",arialabel:void 0,describedby:void 0}},props:["label","size","type","placeholder","describe","id","disabled","rows","readonly","value","modelValue","aria-label","aria-describedby","autofocus"],emits:["focusout","keyup","update:modelValue"],computed:{inputType:function(){var t="text";if(this.type!="textarea")return this.type&&y.indexOf(this.type)!==-1&&(t=this.type),t},inputClasses:function(){var t="form-control";return this.readonly&&(t="form-control-plaintext"),this.type=="color"&&(t="form-control form-control-color"),this.size&&b.indexOf(this.size)!==-1&&(t=t+" form-control-"+this.size),t}},watch:{text:function(t){if(t!=null)return this.$emit("update:modelValue",t)}},updated:function(){this.disabled?this.$refs.input.disabled=!0:this.$refs.input.disabled=!1,this.modelValue!==void 0&&this.text!=this.modelValue&&(this.text=this.modelValue)},created:function(){this.formId=a(this.inputType,this.id),this.text=this.modelValue,this.type=="textarea"&&(this.inputTypeTag="textarea"),this.value&&(this.text=this.value),this.ariaLabel&&(this.arialabel=this.ariaLabel),this.ariaDescribedby&&(this.describedby=this.ariaDescribedby),this.describe&&(this.describedby=this.formId+"-described")},mounted:function(){this.disabled&&(this.$refs.input.disabled=!0),this.autofocus&&this.$refs.input.focus()}},k=["for"],V=["id","placeholder","aria-describedby","type","readonly","aria-label"],_=["id","placeholder","aria-describedby","aria-label","rows","readonly"],I=["id"];function g(t,l,s,c,i,r){return e.openBlock(),e.createElementBlock(e.Fragment,null,[s.label?(e.openBlock(),e.createElementBlock("label",{key:0,for:i.formId,class:"form-label"},e.toDisplayString(s.label),9,k)):e.createCommentVNode("",!0),i.inputTypeTag=="input"?e.withDirectives((e.openBlock(),e.createElementBlock("input",{key:1,id:i.formId,ref:"input",class:e.normalizeClass(r.inputClasses),placeholder:s.placeholder,"aria-describedby":i.describedby,type:r.inputType,readonly:s.readonly,"onUpdate:modelValue":l[0]||(l[0]=o=>i.text=o),"aria-label":i.arialabel,onFocusout:l[1]||(l[1]=o=>t.$emit("focusout"))},null,42,V)),[[e.vModelDynamic,i.text]]):e.createCommentVNode("",!0),i.inputTypeTag=="textarea"?e.withDirectives((e.openBlock(),e.createElementBlock("textarea",{key:2,id:i.formId,ref:"input",class:e.normalizeClass(r.inputClasses),placeholder:s.placeholder,"aria-describedby":i.describedby,"aria-label":i.arialabel,"onUpdate:modelValue":l[2]||(l[2]=o=>i.text=o),rows:s.rows,readonly:s.readonly},null,10,_)),[[e.vModelText,i.text]]):e.createCommentVNode("",!0),s.describe?(e.openBlock(),e.createElementBlock("div",{key:3,id:i.formId+"-described",class:"form-text"},e.toDisplayString(s.describe),9,I)):e.createCommentVNode("",!0)],64)}const B=f(x,[["render",g]]);var C=["lg","sm"];const E={data(){return{formId:"",text:"",type:"select"}},props:["label","size","describe","multiple","id","disabled","readonly","value","options","modelValue"],emits:["update:modelValue"],computed:{describedby:function(){if(this.describe)return this.formId+"-described"},inputClasses:function(){var t="form-select";return this.readonly&&(t="form-select-plaintext"),this.type=="color"&&(t="form-select form-select-color"),this.size&&C.indexOf(this.size)!==-1&&(t=t+" form-select-"+this.size),t}},watch:{text:function(t){if(t!=null)return this.$emit("update:modelValue",t)}},updated:function(){this.disabled?this.$refs.input.disabled=!0:this.$refs.input.disabled=!1,this.modelValue!==void 0&&this.text!=this.modelValue&&(this.text=this.modelValue)},created:function(){this.formId=a(this.type,this.id),this.text=this.modelValue,this.value&&(this.text=this.value)},mounted:function(){this.disabled&&(this.$refs.input.disabled=!0)}},D=["for"],F=["id","aria-describedby","readonly","multiple"],T=["value"],z=["id"];function S(t,l,s,c,i,r){return e.openBlock(),e.createElementBlock(e.Fragment,null,[s.label?(e.openBlock(),e.createElementBlock("label",{key:0,for:i.formId,class:"form-label"},e.toDisplayString(s.label),9,D)):e.createCommentVNode("",!0),e.withDirectives(e.createElementVNode("select",{id:i.formId,ref:"input",class:e.normalizeClass(r.inputClasses),"aria-describedby":r.describedby,readonly:s.readonly,"onUpdate:modelValue":l[0]||(l[0]=o=>i.text=o),multiple:s.multiple},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(s.options,(o,d)=>(e.openBlock(),e.createElementBlock("option",{key:d,value:d},e.toDisplayString(o),9,T))),128))],10,F),[[e.vModelSelect,i.text]]),s.describe?(e.openBlock(),e.createElementBlock("div",{key:1,id:i.formId+"-described",class:"form-text"},e.toDisplayString(s.describe),9,z)):e.createCommentVNode("",!0)],64)}const N=f(E,[["render",S]]),w={data(){return{formId:"",text:!1,type:"checkbox"}},props:["label","id","disabled","value","modelValue"],emits:["update:modelValue"],computed:{inputClasses:function(){var t="form-check-input";return t}},watch:{text:function(t){return this.$emit("update:modelValue",t)}},updated:function(){this.disabled?this.$refs.input.disabled=!0:this.$refs.input.disabled=!1,this.modelValue?this.text=!0:this.text=!1},created:function(){this.formId=a(this.type,this.id),this.modelValue?this.text=!0:this.$emit("update:modelValue",!1),this.value&&(this.text=!0)},mounted:function(){this.disabled&&(this.$refs.input.disabled=!0)}},R={class:"form-check"},M=["id"],O=["for"];function U(t,l,s,c,i,r){return e.openBlock(),e.createElementBlock("div",R,[e.withDirectives(e.createElementVNode("input",{id:i.formId,ref:"input",class:e.normalizeClass(r.inputClasses),type:"checkbox","onUpdate:modelValue":l[0]||(l[0]=o=>i.text=o)},null,10,M),[[e.vModelCheckbox,i.text]]),s.label?(e.openBlock(),e.createElementBlock("label",{key:0,for:i.formId,class:"form-check-label"},e.toDisplayString(s.label),9,O)):e.createCommentVNode("",!0)])}const L=f(w,[["render",U]]);var h=-1,j=function(){var t="form-radio";return h==-1?(h++,t):(h++,t+"-"+h)};const q={data(){return{formId:"",type:"select",name:"",selected:0,generatedIds:{}}},props:["id","disabled","readonly","value","options","modelValue"],emits:["update:modelValue"],computed:{},watch:{selected:function(t){return this.$emit("update:modelValue",t)}},methods:{getRadioId:function(t){return this.generatedIds[t]?this.generatedIds[t]:(this.generatedIds[t]=a("radio"),this.generatedIds[t])},IsDisabled:function(t){if(this.disabled&&this.disabled.indexOf&&this.disabled.indexOf(t)!==-1)return!0}},updated:function(){this.modelValue!==void 0&&this.text!=this.modelValue&&(this.selected=this.modelValue)},created:function(){this.formId=a(this.type,this.id),this.name=j(),this.selected=this.modelValue,this.value&&(this.selected=this.value)},mounted:function(){}},P=["id","readonly","value","name","disabled"],A=["for"];function G(t,l,s,c,i,r){return e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(s.options,(o,d)=>(e.openBlock(),e.createElementBlock("div",{class:"form-check",key:d},[e.withDirectives(e.createElementVNode("input",{id:r.getRadioId(d),ref_for:!0,ref:"input",class:"form-check-input",readonly:s.readonly,"onUpdate:modelValue":l[0]||(l[0]=Y=>i.selected=Y),value:d,name:i.name,type:"radio",disabled:r.IsDisabled(d)},null,8,P),[[e.vModelRadio,i.selected]]),e.createElementVNode("label",{for:r.getRadioId(d),class:"form-check-label"},e.toDisplayString(o),9,A)]))),128)}const H=f(q,[["render",G]]),J={data(){return{formId:"",text:0,type:"range"}},props:["label","id","min","max","step","disabled","value","modelValue"],emits:["update:modelValue"],computed:{inputClasses:function(){var t="form-range";return t}},watch:{text:function(t){return t%1===0?this.$emit("update:modelValue",parseInt(t)):this.$emit("update:modelValue",parseFloat(t))}},updated:function(){this.disabled?this.$refs.input.disabled=!0:this.$refs.input.disabled=!1,this.modelValue&&this.text!=this.modelValue&&(this.text=this.modelValue)},created:function(){this.formId=a(this.type,this.id),this.modelValue&&(this.text=this.modelValue),this.value&&(this.text=this.value)},mounted:function(){this.disabled&&(this.$refs.input.disabled=!0)}},K=["for"],Q=["id","min","max","step"];function W(t,l,s,c,i,r){return e.openBlock(),e.createElementBlock(e.Fragment,null,[s.label?(e.openBlock(),e.createElementBlock("label",{key:0,for:i.formId,class:"form-check-label"},e.toDisplayString(s.label),9,K)):e.createCommentVNode("",!0),e.withDirectives(e.createElementVNode("input",{id:i.formId,ref:"input",class:e.normalizeClass(r.inputClasses),type:"range","onUpdate:modelValue":l[0]||(l[0]=o=>i.text=o),min:s.min,max:s.max,step:s.step},null,10,Q),[[e.vModelText,i.text]])],64)}const X=f(J,[["render",W]]);n.FormCheckbox=L,n.FormInput=B,n.FormRadio=H,n.FormRange=X,n.FormSelect=N,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});
