<template>
   <router-link 
      :to="path"
      active-class="text-font"
   >
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
         <unread v-if="path.name.includes('Update')" :path="path"/>
      </li>
   </router-link>
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
      path:{
         type: Object,
         required: true
      },
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
         const path = this.$route.path
         if(path.includes('handboek')){
            return this.name.toLowerCase() === 'users'
         }
         return path.includes(this.name.slice(0, this.name.length -2).toLowerCase())
      }
   }
}
</script>
