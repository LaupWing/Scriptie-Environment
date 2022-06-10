<template>
<div>

</div>
    <!-- <div 
         class="flex items-center"
         v-if="document.denied.status"
      >
         <div class="rounded-full bg-red-500 text-white py-0.5 font-bold text-xs uppercase px-3">
            geweigerd
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
      <div 
         class="flex items-center"
         v-else-if="document.accepted.status"
      >
         <div class="rounded-full bg-green-500 text-white py-0.5 font-bold text-xs uppercase px-3">
            geaccepteerd
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
      <div 
         class="rounded-full bg-indigo-500 text-white py-0.5 font-bold text-xs uppercase px-3"
         v-else-if="document.changed && !document.pending.status"
      >
         te verzenden
      </div>
      <div 
         class="rounded-full bg-yellow-500 text-white py-0.5 font-bold text-xs uppercase px-3"
         v-else-if="document.pending.status"
      >
         afwachting
      </div> -->
</template>

<script>
export default {
   name: 'Legacy'
}
</script>