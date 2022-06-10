<template>
   <div class="flex items-center justify-between flex-1">
      <div class="flex space-x-1 ml-auto">
         <button
            class="rounded w-10 h-10 border-2 flex items-center justify-center"
            :class="status"
            @click="sendDraft"
         >
            <icon-mail class="w-6 h-6"/>
         </button>
         <!-- <button
            class="border-2 border-red-500 font-bold text-xs uppercase px-4 rounded-full flex items-center justify-center"
            :class="document.denied.status ? 'bg-red-500 text-white' : 'text-red-500'"
            @click="denied"
         >
            {{document.denied.status ? 'geweigerd' : 'weigeren' }}
         </button>
         <button
            class="rounded-full border-green-500 px-4 border-2 flex items-center justify-center font-bold text-xs uppercase"
            :class="document.accepted.status ? 'bg-green-500 text-white' : 'text-green-500' "
            @click="accept"
         >
            {{document.accepted.status ? 'geaccepteerd' : 'accepteren' }}
         </button> -->
      </div>
   </div>
</template>

<script>
export default {
   name: 'ModeratorActions',
   props:{
      document:{
         type: Object,
         required: true
      }
   },
   computed:{
      status(){
         if(!this.document.changed || this.document.status === 'denied'){
            return 'bg-gray-200 text-gray-300 border-gray-300 pointer-events-none'
         }
         return this.sended ? 
            'bg-transparent text-highlight border-highlight':  
            'bg-highlight text-white border-highlight'
      }
   },
   data(){
      return {
         seen: false
      }
   },
   methods:{
      async sendDraft(){
         this.sended = !this.sended
         await this.$store.dispatch('handboeken/updateDraft', {
            connection: this.$route.query,
            updates:{
               status: 'pending'
            }
         })
         if(this.sended){
            this.$notify({
               group: 'notification',
               title: 'Verzonden:handboek draft verzonden',
               text: `Handboek draft is verzonden`,
               type: 'send'
            })
         }else{
            this.$notify({
               group: 'notification',
               title: 'Geannuleerd:handboek draft verzonden is geannuleerd',
               text: `Handboek draft is verzonden is geannuleerd`,
               type: 'send'
            })
         }
         this.$emit('sended_draft')
      }
   }
}
</script>