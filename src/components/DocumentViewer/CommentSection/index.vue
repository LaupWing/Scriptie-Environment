<template>
   <section class="w-full relative flex bg-main text-gray-400 text-left p-4 border-t border-border">
      <button 
         class="absolute top-0 right-28 transform -translate-y-full bg-white uppercase font-bold text-sm px-2 py-1 border-r border-t border-l border-gray-300 rounded-t"
         @click="show = !show"
      >
         {{show ? 'verbergen' : 'laten zien'}}
      </button>
      <div 
         class="px-2 flex-1 flex flex-col text-font"
         v-if="show"
         :style="{
            maxHeight: '40vh'
         }"
      >
         <comments
            :comments="handboek_draft.comments"
         />
         <comment-form
            :handboek_draft="handboek_draft"
         />
      </div>
   </section>
</template>

<script>
import Comments from './Comments'
import CommentForm from './CommentForm'

export default {
   name: 'CommentSection',
   components:{
      Comments,
      CommentForm
   },
   props:{
      handboek_draft:{
         type: Object,
         required: true
      }
   },
   data(){
      return{
         show: true
      }
   }
}
</script>