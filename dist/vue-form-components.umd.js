(function(r,i){typeof exports=="object"&&typeof module!="undefined"?module.exports=i():typeof define=="function"&&define.amd?define(i):(r=typeof globalThis!="undefined"?globalThis:r||self,r.VueFormComponents=i())})(this,function(){"use strict";var r=0,i={},n={};const s=function(e,t){return t!==void 0?n[t]===void 0?(n[t]=0,t):(n[t]++,t+"-"+n[t]):e!==void 0?i[e]===void 0?(i[e]=0,"form-id-"+e):(i[e]++,"form-id-"+e+"-"+i[e]):(r++,"form-id-"+r)},a=["for"],u=["id","placeholder","aria-describedby","type","readonly"],o=["id","placeholder","aria-describedby","rows","readonly"],f=["id"];var c=["lg","sm"],m=["text","email","file","password","textarea"];const p=Object.assign({data(){return{formId:"",text:"",inputTypeTag:"input"}},computed:{describedby:function(){if(!!this.describe)return this.formId+"-described"},inputType:function(){var e="text";if(this.type!="textarea")return this.type&&m.indexOf(this.type)!==-1&&(e=this.type),e},inputClasses:function(){var e="form-control";return this.readonly&&(e="form-control-plaintext"),this.size&&c.indexOf(this.size)!==-1&&(e=e+" form-control-"+this.size),e}},watch:{text:function(e){return this.$emit("update:modelValue",e)}},updated:function(){this.disabled?this.$refs.input.disabled=!0:this.$refs.input.disabled=!1,this.modelValue!==void 0&&(this.text=this.modelValue)},created:function(){this.formId=s(this.inputType,this.id),this.text=this.modelValue,this.type=="textarea"&&(this.inputTypeTag="textarea"),this.value&&(this.text=this.value)},mounted:function(){this.disabled&&(this.$refs.input.disabled=!0)}},{__name:"FormControl",props:{label:{required:!1},size:{required:!1},type:{required:!1},placeholder:{required:!1},describe:{required:!1},id:{required:!1},disabled:{required:!1},rows:{required:!1},readonly:{required:!1},value:{required:!1},modelValue:{required:!1}},setup(e){return(t,d)=>(Vue.openBlock(),Vue.createElementBlock(Vue.Fragment,null,[e.label?(Vue.openBlock(),Vue.createElementBlock("label",{key:0,for:t.formId,class:"form-label"},Vue.toDisplayString(e.label),9,a)):Vue.createCommentVNode("",!0),t.inputTypeTag=="input"?Vue.withDirectives((Vue.openBlock(),Vue.createElementBlock("input",{key:1,id:t.formId,ref:"input",class:Vue.normalizeClass(t.inputClasses),placeholder:e.placeholder,"aria-describedby":t.describedby,type:t.inputType,readonly:e.readonly,"onUpdate:modelValue":d[0]||(d[0]=l=>Vue.isRef(text)?text.value=l:null)},null,10,u)),[[Vue.vModelDynamic,t.text]]):Vue.createCommentVNode("",!0),t.inputTypeTag=="textarea"?Vue.withDirectives((Vue.openBlock(),Vue.createElementBlock("textarea",{key:2,id:t.formId,ref:"input",class:Vue.normalizeClass(t.inputClasses),placeholder:e.placeholder,"aria-describedby":t.describedby,"onUpdate:modelValue":d[1]||(d[1]=l=>Vue.isRef(text)?text.value=l:null),rows:e.rows,readonly:e.readonly},null,10,o)),[[Vue.vModelText,t.text]]):Vue.createCommentVNode("",!0),e.describe?(Vue.openBlock(),Vue.createElementBlock("div",{key:3,id:t.formId+"-described",class:"form-text"},Vue.toDisplayString(e.describe),9,f)):Vue.createCommentVNode("",!0)],64))}});var h={install:function(e){e.component("form-control",p)}};return h});
