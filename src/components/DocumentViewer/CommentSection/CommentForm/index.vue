<template>
   <div class="flex">
      <used-templates
         v-if="showed_used_templates"
         :templates="templates"
         :template_items="template_items"
         @set-link="setLink"
         @close="showed_used_templates = false"
      />
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
         hashtag_place: null,
         settings
      }
   },
   computed:{
      used_templates(){
         return this.templates
            .filter(x=>this.template_items.templates.includes(x.id))
            .filter(x=>x.name.includes(this.searching))
      },
      splitted(){
         const container = document.createElement('div')
         container.innerHTML = this.comment
         const splitted = container.querySelector('p').innerHTML.split('')
         return splitted
      }
   },
   methods:{
      checkHashtags(){
         const splitted = this.splitted
         const hashtags = splitted.map(x=> x === '@' ? '@' : null)
         if(hashtags.length){
            hashtags.forEach((x,i)=>{
               if(x){
                  if(!splitted[i+1] || splitted[i+1].trim() === ''){
                     this.showed_used_templates = true
                     this.hashtag_place = i
                  }
               }
            })
         }
      },
      setLink(e){
         const splitted = this.splitted
         splitted[this.hashtag_place] = `<span class="mceNonEditable underline cursor-pointer hover:text-highlight" data-id="${e.id}">@${e.shortcode} ${e.name}</span>`
         this.comment = `<p>${splitted.join('')}</p>`
         this.showed_used_templates = false
         this.hashtag_place = null
      },
      addComment(){
         this.$store.dispatch('addComment', 
            {  
               draft: this.handboek_draft,
               comment: this.comment
            }
         )
         this.comment = ''
      },
   }
}
</script>