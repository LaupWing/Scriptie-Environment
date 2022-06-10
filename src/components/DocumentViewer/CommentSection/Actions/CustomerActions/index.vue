<template>
   <div class="flex items-center justify-between flex-1">
      <div class="flex items-center">
         <div class="rounded-full bg-highlight text-white py-0.5 font-bold text-xs uppercase px-3">
            {{seen ? 'gelezen' : 'ongelezen'}}
         </div>
         <icon-eye-cross 
            v-if="seen"
            @click.native="seen = false"
            class="text-font select-none w-6 h-6 ml-2 cursor-pointer"
         />
         <icon-eye 
            v-else
            @click.native="seen = true"
            class="text-font select-none w-6 h-6 ml-2 cursor-pointer"
         />
      </div>
      <div class="flex space-x-1">
         <button
            class="rounded w-10 h-10 border-2 flex items-center justify-center"
            :class="document.denied.status ? 'bg-red-500 text-white' : 'text-red-500'"
            @click="denied"
         >
            <icon-close class="w-6 h-6"/>
         </button>
         <button
            class="rounded w-10 h-10 border-2 flex items-center justify-center"
            :class="document.accepted.status ? 'bg-green-500 text-white' : 'text-green-500' "
            @click="accept"
         >
            <icon-check class="w-6 h-6"/>
         </button>
      </div>
   </div>
</template>

<script>
export default {
   name: 'CustomerActions',
   props:{
      document:{
         type: Object,
         required: true
      }
   },
   data(){
      return {
         seen: false
      }
   },
   methods:{
      async accept(){
         await this.$store.dispatch('handboeken/updateDraft', {
            connection: this.$route.query,
            updates:{
               status: 'accepted'
            }
         })
         this.$notify({
            group: 'notification',
            title: 'Verzonden:handboek draft geaccepteerd.',
            text: `Handboek draft is geaccepteerd. De moderator gaat de handboek live zetten`,
            type: 'send'
         })
         this.$emit('answered')
      },
      async denied(){
         await this.$store.dispatch('handboeken/updateDraft', {
            connection: this.$route.query,
            updates:{
               status: 'denied'
            }
         })
         this.$notify({
            group: 'notification',
            title: 'Verzonden:handboek draft geweigerd.',
            text: `Handboek draft is geweigerd. Plaats eventuele opmerkingen bij wat de reden is voor de weigering. De moderator gaat hiernaar kijken!`,
            type: 'send'
         })
         this.$emit('answered')
      },
   }
}
</script>