<template>
   <button
      class="border-2 py-1 px-4 text-sm rounded duration-300 uppercase font-semibold outline-none select-none"
      :class="set_class"
      :type="type"
   >
      <slot/>
   </button>
</template>

<script>
export default {
   props:{
      hollow:{
         type: Boolean
      },
      disabled:{
         type: Boolean
      },
      type:{
         type: String,
         default: 'button'
      },
   },
   computed:{
      set_class(){
         if(this.disabled){
            return 'bg-gray-300 text-gray-400 pointer-events-none border-gray-300'
         }
         else if(!this.hollow && !this.disabled){
            return 'bg-highlight text-font hover:border-highlightDark hover:bg-highlightDark border-highlight'
         }
         if(this.hollow){
            return 'bg-transparent text-highlight border-highlight hover:text-main hover:bg-highlight'
         }
      }
   }
}
</script>