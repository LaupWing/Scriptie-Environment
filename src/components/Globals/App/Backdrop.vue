<template>
   <div 
      class="fixed top-0 left-0 z-50 flex justify-center items-start w-full h-full" 
      :class="transparent ? '' : 'bg-black bg-opacity-50' "
      @click="$emit('close')"
   >
      <slot></slot>
   </div>
</template>

<script>
export default {
   name: "Backdrop",
   props:{
      transparent:{
         type: Boolean
      }
   }
};
</script>