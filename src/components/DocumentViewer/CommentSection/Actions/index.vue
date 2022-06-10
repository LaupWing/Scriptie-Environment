<template>
   <div 
      class="flex justify-center items-center py-2" 
   >
      <moderator-actions 
         v-if="$store.state.permissions.isModerator"
         :document="comparisonDocument"
      />
      <customer-actions
         :document="comparisonDocument"
         v-else
      />
   </div>
</template>

<script>
import ModeratorActions from './ModeratorActions'
import CustomerActions from './CustomerActions'

export default {
   name: 'Actions',
   components:{
      ModeratorActions,
      CustomerActions
   },
   props:{
      comparisonDocument:{
         type: Object,
         required: true
      }
   },
   data(){
      return{
         seen: false,
         sended: this.comparisonDocument.pending.status
      }
   },
   methods:{
      async toggleSeen(){
         await this.$store.dispatch('handboeken/updateDraft', {
            connection: this.$route.query,
            updates:{
               pending: {
                  seen: false,
                  status: true
               }
            }
         })
      }
   }
}
</script>