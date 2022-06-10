<template>
   <div class="flex">
      <textarea 
         v-model="comment"
         placeholder="Opmerkingen"
         class="w-full border bg-gray-100 border-border resize-none rounded focus:outline-none focus:ring-2 focus:ring-highlight p-2 h-20"
      ></textarea>
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
      comparisonDocument:{
         type: Object,
         required: true
      }
   },
   data(){
      return{
         comment: ''
      }
   },
   methods:{
      addComment(){
         this.$store.dispatch('handboeken/addComment', 
            {  
               draft: this.comparisonDocument,
               comment: this.comment,
               connection: this.$route.query
            }
         )
         this.comment = ''
      },
   }
}
</script>