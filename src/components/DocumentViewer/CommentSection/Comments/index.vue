<template>
   <div class="flex flex-col mb-4 overflow-y-auto">
      <div
         class="px-4 py-1 border rounded m-2"
         :class="`
            ${$store.state.isModerator ? 'ml-auto' : 'mr-auto'}
         `"
         v-for="(item,i) in comments"
         :key="i"
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
         <p>{{item.comment}}</p>
      </div>
   </div>
</template>

<script>
import moment from 'moment'

export default {
   name: 'Comments',
   props:{
      comments:{
         type: Array,
         required: true
      }

   },
   methods:{
      ago(date){
         moment.locale('nl')
         return moment(date.seconds*1000).fromNow()
      },
      date(date){
         return moment(date.seconds*1000).format('L')
      },
   }
}
</script>