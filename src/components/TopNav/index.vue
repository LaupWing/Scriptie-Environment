<template>
   <nav class="w-full border-b border-border h-16 justify-between flex items-center px-4">
      <div 
         class="flex items-center tracking-wide text-xs uppercase"
         v-if="$store.state.isModerator"
      >
         <p>
            Users
         </p>
         <p class="font-bold mx-2">></p>
         <p>
            Marije ten Brink
         </p>
         <p class="font-bold mx-2">></p>
         <p>
            Documenten
         </p>
         <p class="font-bold mx-2">></p>
         <p>
            Standaard Handboek Droneconsultancy
         </p>
      </div>
      <div 
         class="flex items-center tracking-wide text-xs uppercase"
         v-else
      >
         <p>
            Documents
         </p>
         <p class="font-bold mx-2">></p>
         <p>
            Standaard Handboek Droneconsultancy
         </p>
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
            <li class="py-3 px-2 border-b border-border">{{$store.state.isModerator? $store.state.moderator.name : $store.state.customer.name}}</li>
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
   data(){
      return{
         show_menu: false
      }
   }
}
</script>
