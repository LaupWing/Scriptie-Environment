<template>
   <div
      class="px-4 py-1 border rounded m-2"
      :class="`
         ${($store.state.isModerator && item.moderator) ||
            (!$store.state.isModerator && !item.moderator) ? 'ml-auto' : 'mr-auto'}
      `"
   >
      <h2 class="text-xs uppercase font-bold opacity-50">
         <span
            v-if="item.moderator"
            class="text-highlight"
         >
            Moderator
         </span>
         {{item.name}}
         <span
            :style="{fontSize: '10px'}"
         >
            {{ago(item.timestamp)}} - {{date(item.timestamp)}}
         </span>
      </h2>
      <div v-html="item.comment"></div>
   </div>
</template>

<script>
import moment from 'moment'

export default {
   name: 'Comment',
   props:{
      item:{
         type: Object,
         required: true
      },
      iframe:{
         type: HTMLIFrameElement,
         required: true
      }
   },
   methods:{
      ago(date){
         moment.locale('nl')
         return moment(date).fromNow()
      },
      date(date){
         return moment(date).format('L')
      },
   },
   mounted(){
      console.log(this.$el)
   }
}
</script>