<template>
   <li
      class="py-3 px-5 font-bold tracking-widest flex select-none items-center uppercase relative text-pop hover:bg-mainLight"
      :class="minimize ? 'justify-center' : '' "
      :style="{ fontSize: '10px'}"
   >
      <component 
         v-bind:is="icon"
         :class="activeRoute ? 'text-highlight' : '' "
      />
      <p 
         class="overflow-hidden duration-500"
         :class="
            `${minimize ? 'm-0 max-w-0' : 'max-w-lg ml-4'} ${activeRoute ? 'text-font' : ''}`
         "
      >
         {{ name }}
      </p>
   </li>
</template>
<script>
import TemplateIcon from "./Icons/Template.vue"
import UsersIcon from "./Icons/Users.vue"
import DossiersIcon from "./Icons/Dossiers.vue"
import SignIcon from "./Icons/Sign.vue"
import DefaultsIcon from "./Icons/Defaults.vue"
import UpdatesIcon from "./Icons/Updates.vue"
import ChatsIcon from "./Icons/Chats.vue"

export default {
   name: "Link",
   components: {
      "templates-icon": TemplateIcon,
      "users-icon": UsersIcon,
      "dossiers-icon": DossiersIcon,
      "sign-icon": SignIcon,
      "updates-icon": UpdatesIcon,
      "defaults-icon": DefaultsIcon,
      "chats-icon": ChatsIcon,
   },
   props:{
      icon:{
         type: String,
         required: true
      },
      name:{
         type: String,
         required: true
      },
      minimize:{
         type: Boolean
      },
   },
   data(){
      return{
         unread: false
      }
   },
   computed:{
      activeRoute(){
         return this.name === 'Users' || this.name === 'Documents'
      }
   }
}
</script>
