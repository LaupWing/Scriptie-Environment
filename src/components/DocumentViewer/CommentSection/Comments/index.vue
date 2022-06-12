<template>
   <div class="flex flex-col mb-4 overflow-y-auto scroll-smooth">
      <comment
         v-for="(item,i) in comments"
         :item="item"
         :key="i"
         :iframe="iframe"
      />
   </div>
</template>

<script>
import Comment from './Comment'

export default {
   name: 'Comments',
   components:{
      Comment
   },
   props:{
      comments:{
         type: Array,
         required: true
      },
      iframe:{
         type: HTMLIFrameElement,
         required: true
      }
   },
   mounted(){
      setTimeout(()=>{
         const container = this.$el
         container.scrollTop = container.scrollHeight
      },2000)
   }
}
</script>