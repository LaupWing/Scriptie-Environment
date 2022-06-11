<template>
   <editor
      :initial-value="content"
      :disabled="false"
      @onInit="init"
      :init="settings"
      apiKey="xn239ptealgyuo6l4ot46xmqbchajcpljt111a6r5ljnw51z"
   >
   </editor>
</template>

<script>
import Editor from "@tinymce/tinymce-vue"
import not_allowed from './settings/not_allowed'

export default {
   name: "Editor",
   props: {
      content: {
         required: true,
         type: String,
      },
   },
   components: {
      editor: Editor,
   },
   computed:{
      settings(){
         return not_allowed
      }
   },
   data(){
      return {
         loaded: false
      }
   },
   methods: {
      init() {
         let _dummyNode
         const destroy = function(node){
            if (!node.parentNode)   return
            if(!_dummyNode) _dummyNode = document.createElement('div');
            _dummyNode.appendChild(node.parentNode.removeChild(node));
            _dummyNode.innerHTML = "";
         }
         const body = document.querySelector("iframe")
            .contentWindow
            .document
            .body
         body.setAttribute("contenteditable", false) 
         body.querySelectorAll('img').forEach(img=>{
            img.onerror = ()=>{
               destroy(img)
            }
         })
         this.updateMenuHeadings()
         this.setTemplates()
      },
      updateMenuHeadings(){
         const iframe = document.querySelector("iframe")
         const body = document.querySelector("iframe")
            .contentWindow
            .document
            .body;
         this.$emit("set-menu-headings", {
            iframe,
            headings: Array.from(body
               .querySelectorAll("h1, h2, h3, h4, h5, h6"))
               .filter(x=>{
                  return x.textContent !== '' && !x.closest('article')
               }
            )
         })
      },
      setTemplates(){
         const body = document.querySelector("iframe")
            .contentWindow
            .document
            .body
         console.log(Array.from(body.querySelectorAll('article')).map(x=>x.dataset.id))
      },
      updateContent(obj) {
         const newContent = obj.level.content
         this.$emit("update:content", newContent)
         this.updateMenuHeadings()
      },
   },
   mounted() {
      import("./ruler")
   }
};
</script>
