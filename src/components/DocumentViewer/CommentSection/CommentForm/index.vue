<template>
   <div class="flex">
      <used-templates
         v-if="showed_used_templates"
         :templates="templates"
         :template_items="template_items"
         @close="showed_used_templates = false"
      />
      <div 
         class="w-full border bg-gray-100 border-border resize-none rounded focus:outline-none focus:ring-2 focus:ring-highlight p-2 h-20"
         contenteditable="true"
         @input="setContent"
      >
         
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
import UsedTemplates from './UsedTemplates'

export default {
   name: 'CommentForm',
   components:{
      UsedTemplates
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
         place_to_insert: null
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
      setContent(e){
         const splitted = e.target.innerText.split('') 
         const hashtags = splitted.map(x=> x === '#' ? '#' : null)
         if(hashtags.length){
            hashtags.forEach((x,i)=>{
               if(x){
                  if(!splitted[i+1] || splitted[i+1].trim() === ''){
                     this.showed_used_templates = true
                     e.target.blur()
                     this.place_to_insert = i
                  }else{
                     this.place_to_insert = null
                  }
               }
               
            })
         }
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