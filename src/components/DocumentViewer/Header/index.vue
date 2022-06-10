<template>
   <header class="flex bg-background border-b border-border">
      <div class="flex justify-center items-center px-4 border-r border-border bg-main">
         <select 
            class="p-1 focus:border-black outline-none border border-black rounded"
            v-model="current_version_proxy"
         >
            <option 
               v-for="(v, i) in versions_display" 
               :key="i" 
               :value="v"
            >
               {{ v }}
            </option>
         </select>
      </div>
      <h1 class="flex items-center pl-4 bg-main text-left flex-1 text-font">
         {{ title }}
      </h1>
      <close
         class="w-10 h-10 p-2 flex justify-center items-center border border-highlight text-highlight hover:bg-warning cursor-pointer hover:text-white duration-200"
         @click.native.stop="$emit('close')"
      />
   </header>
</template>

<script>
import Close from "./Close"

export default {
   name: "EditorHeader",
   props: ["title", "versions", "current_version"],
   components: {
      Close
   },
   computed:{
      versions_display() {
         return this.versions.map((x) => `${x.mayor}.${x.sub}.${x.minor}`)
      },
      current_version_proxy: {
         get() {
            return `${this.current_version.mayor}.${this.current_version.sub}.${this.current_version.minor}`;
         },
         set(value) {
            const [mayor, sub, minor] = value.split(".");
            const version = {
               mayor: Number(mayor),
               sub: Number(sub),
               minor: Number(minor),
            };
            this.$emit("update:current_version", version)
         },
      },
   }
};
</script>