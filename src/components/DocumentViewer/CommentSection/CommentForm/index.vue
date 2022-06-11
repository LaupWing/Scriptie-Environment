<template>
   <div class="flex">
      <!-- <textarea 
         v-model="comment"
         placeholder="Opmerkingen"
         class="w-full border bg-gray-100 border-border resize-none rounded focus:outline-none focus:ring-2 focus:ring-highlight p-2 h-20"
      ></textarea> -->
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
      console.log(this.templates.filter(x=>this.template_items.templates.includes(x.id)))
      console.log(this.template_items)
   }
}
</script>