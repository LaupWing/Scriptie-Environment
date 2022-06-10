<template>
   <img
      class="rounded-full object-cover border border-border"
      :src="src"
      alt="avatar"
   />
</template>

<script>
export default {
   props: {
      src: {
         type: String,
         required: true,
      }
   }
}
</script>
