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
            src="data:image/jpeg;base64,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" 
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
