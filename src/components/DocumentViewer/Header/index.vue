<template>
   <header class="flex bg-background border-b border-border">
      <div class="flex justify-center items-center px-4 border-r border-border bg-main">
         <p>3.0.1 <span class="mx-1 font-bold">></span>4.0.0</p>
      </div>
      <h1 class="flex items-center pl-4 bg-main text-left flex-1 text-font">
         {{ title }}
      </h1>
      <close
         class="w-10 h-10 p-2 flex justify-center items-center border border-highlight text-highlight hover:bg-warning cursor-pointer hover:text-white duration-200"
      />
   </header>
</template>

<script>
import Close from "./Close"

export default {
   name: "EditorHeader",
   props: {
      title: {
         type: String,
         required: true
      }
   },
   components: {
      Close
   }
};
</script>