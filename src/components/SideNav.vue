<template>
   <nav class="bg-main flex flex-col border-r border-border">
      <div class="px-5 h-16 flex items-center border-b border-border">
         <icon-logo class="w-9"/>
         <div 
            class="flex items-start flex-col text-sm overflow-hidden duration-500 text-font font-bold" 
            :class="minimize ? 'max-w-0 ml-0' : 'max-w-lg ml-2'"
         >
            <p>Drone</p>
            <p>Consultancy</p>
         </div>
      </div>
      <ul class="py-5 border-b border-border">
         <side-nav-link
            v-for="(link, index) in links"
            :key="index"
            :icon="link.icon"
            :name="link.name"
            :path="link.path"
            :minimize="minimize"
            :pending_drafts="pending_drafts"
         />
      </ul>
      <div
         class="hover:bg-mainLight border-b border-border cursor-pointer flex items-center justify-center py-3"
         @click="()=>{minimize = !minimize}"
         
      >
         <icon-chevron 
            class="w-4 text-font transform duration-300"
            :class="minimize ? 'rotate-0' : 'rotate-180'" 
         />
      </div>
   </nav>
</template>

<script>
import Link from './Link'

export default {
   components:{
      'side-nav-link': Link
   },
   computed:{
      links(){
         if(this.$store.state.permissions.isModerator){
            return this.moderatorLinks
         }
         return this.customerLinks
      }
   },
   data(){
      return {
         show_images_info: false,
         moderatorLinks: [
            {
               name: "Templates",
               icon: "templates-icon",
               path: {
                  name: "TemplatesOverview",
               },
            },
            {
               name: "Users",
               icon: "users-icon",
               path: {
                  name: "UsersOverview",
               },
            },
            {
               name: "Defaults",
               icon: "defaults-icon",
               path: {
                  name: "DefaultsOverview",
               },
            },
            {
               name: "Dossiers",
               icon: "dossiers-icon",
               path: {
                  name: "DossiersOverview",
               },
            },
            {
               name: "Updates",
               icon: "updates-icon",
               path: {
                  name: "UpdatesModeratorUsers",
               },
            }
         ],
         customerLinks: [
            {
               name: "Documents",
               icon: "dossiers-icon",
               path: {
                  name: "Documents",
               },
            },
            {
               name: "Profile",
               icon: "users-icon",
               path: {
                  name: "Profile",
               },
            },
            {
               name: "Updates",
               icon: "updates-icon",
               path: {
                  name: "UpdatesCustomer",
               },
            }
         ],
         minimize: false
      }
   },
   async created(){
      this.minimize = this.$store.state.site_settings.minimize
   }
}
</script>
