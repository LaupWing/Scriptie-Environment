<template>
   <nav class="w-full border-b border-border h-16 justify-between flex items-center px-4">
      <div class="flex">
         <!-- <p
            class="ml-2 tracking-wide text-xs uppercase"
            v-for="(path, i) in paths"
            :key="i"
         >
            {{path}}
         </p> -->
      </div>
      <ul class="relative">
         <div 
            class="fixed left-0 top-0 w-screen h-screen z-10"
            v-if="show_menu"
            @click="show_menu=false"
         ></div>
         <app-avatar
            :src="$store.state.isModerator ? $store.state.moderator.img : $store.state.customer.img " 
            @click.native="show_menu=true"
            class="w-12 h-12 cursor-pointer"
         />
         <div 
            class="absolute bottom-0 right-0 w-52 transform translate-y-full bg-main text-left overflow-hidden shadow rounded z-50 text-font"
            v-if="show_menu"
         >
            <li class="py-3 px-2 border-b border-border">Fons van Kesteren</li>
            <li 
               class="cursor-pointer uppercase text-xs border-b border-border py-1 px-2 hover:bg-highlight hover:text-main"
            >
               profile
            </li>
            <li 
               class="cursor-pointer uppercase text-xs border-b border-border py-1 px-2 hover:bg-highlight hover:text-main" 
               @click="alert('Nog geen help sectie beschikbaar')"
            >
               help
            </li>
            <li 
               class="cursor-pointer uppercase text-xs py-1 px-2 hover:bg-highlight hover:text-main"
            >
               signout
            </li>
         </div>
      </ul>
   </nav>
</template>
<script>
export default {
   computed:{
      // paths(){
      //    return this.$route.path.split('/')
      // }
   },
   data(){
      return{
         show_menu: false
      }
   }
}
</script>
