<template>
   <div class="flex">
      <app-backdrop>
         <div class="bg-background p-2 m-auto rounded max-w-xl flex flex-col">
            <header class="flex justify-between">
               <h2 class="uppercase font-bold text-font">
                  Gebruikte templates
               </h2>
               <icon-close class="w-6"/>
            </header>
            <ul 
               class="bg-main overflow-auto flex flex-col border border-border m-2"
               :style="{
                  maxHeight: '70vh'
               }"
            >
               <li
                  v-for="template in used_templates"
                  class="p-1 text-sm border-b border-border hover:bg-highlight hover:text-main cursor-pointer duration-200"
                  :key="template.id"
               >
                  <span class="font-semibold">{{template.shortcode}}</span>
                  {{template.name}}
               </li>
            </ul>
         </div>
      </app-backdrop>
      <div 
         class="w-full border bg-gray-100 border-border resize-none rounded focus:outline-none focus:ring-2 focus:ring-highlight p-2 h-20"
         contenteditable="true"
         @input="e => comment = e.target.innerText"
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
export default {
   name: 'CommentForm',
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
         comment: ''
      }
   },
   computed:{
      used_templates(){
         return this.templates.filter(x=>this.template_items.templates.includes(x.id))
      }
   },
   methods:{
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
   },
   created(){
      console.log(this.used_templates)
   }
}
</script>