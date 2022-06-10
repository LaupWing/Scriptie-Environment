<template>
   <app-backdrop
      v-on="$listeners"
   >
      <div 
         class="p-5 bg-background rounded-md mt-32"
         @click.stop
      >
         <slot/>
      </div>
   </app-backdrop>
</template>

<script>
export default {
   name: "Modal"
}
</script>