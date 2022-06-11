<template>
   <div class="flex">
      <used-templates
         v-if="showed_used_templates"
         :templates="templates"
         :template_items="template_items"
         @set-link="setLink"
         @close="showed_used_templates = false"
      />
      <!-- <div 
         class="w-full border bg-gray-100 border-border resize-none rounded focus:outline-none focus:ring-2 focus:ring-highlight p-2 h-20"
         contenteditable="true"
         @input="setContent"
      >
      </div> -->
      <div class="w-full border border-border resize-none rounded overflow-hidden">
         <editor
            :init="settings"
            apiKey="xn239ptealgyuo6l4ot46xmqbchajcpljt111a6r5ljnw51z"
            v-model="comment"
            @input="checkHashtags"
         >
         </editor>
      </div>
      <app-button 
         class="mt-auto flex-shrink-0 ml-2"
         @click.native="addComment"
      >
         Opmerking plaatsen
      </app-button>
   </div>
</template>

<script>
import Editor from "@tinymce/tinymce-vue"
import UsedTemplates from './UsedTemplates'
import settings from './settings'

export default {
   name: 'CommentForm',
   components:{
      UsedTemplates,
      Editor
   },
   props:{
      handboek_draft:{
         type: Object,
         required: true
      },
      templates:{
         type: Array,
         required: true
      },
      template_items:{
         type: Object,
         required: true
      },
   },
   data(){
      return{
         comment: '',
         showed_used_templates: false,
         settings
      }
   },
   computed:{
      used_templates(){
         return this.templates
            .filter(x=>this.template_items.templates.includes(x.id))
            .filter(x=>x.name.includes(this.searching))
      }
   },
   methods:{
      checkHashtags(){
         const container = document.createElement('div')
         container.innerHTML = this.comment
         const splitted = container.querySelector('p').textContent.split('')
         console.log(splitted)
         const hashtags = splitted.map(x=> x === '#' ? '#' : null)
         if(hashtags.length){
            hashtags.forEach((x,i)=>{
               if(x){
                  if(!splitted[i+1] || splitted[i+1].trim() === ''){
                     this.showed_used_templates = true
                  }
               }
               
            })
         }
      },
      setLink(e){
         const splitted = this.comment.split('') 
         splitted[this.place_to_insert] = `#<strong>${e.shortcode} ${e.name}</strong>`
         this.comment = splitted.join('')
         this.target.innerHtml = splitted.join('')
         this.target.innerHtml = ''
         this.showed_used_templates = false
      },
      addComment(){
         console.log(this.comment)
         // this.$store.dispatch('handboeken/addComment', 
         //    {  
         //       draft: this.comparisonDocument,
         //       comment: this.comment,
         //       connection: this.$route.query
         //    }
         // )
         // this.comment = ''
      },
   }
}
</script>