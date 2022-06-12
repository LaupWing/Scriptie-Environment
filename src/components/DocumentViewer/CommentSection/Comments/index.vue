<template>
   <div class="flex flex-col mb-4 overflow-y-auto">
      <comment
         v-for="(item,i) in comments"
         :item="item"
         :key="i"
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
      }
   }
}
</script>