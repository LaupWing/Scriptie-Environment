<template>
   <div 
      class="absolute z-50 top-20 left-0 p-3 text-xs text-left flex flex-col flex-1 mb-2"
      :class="show ? 'bg-white border border-border' : ''"
   >
      <icon-menu 
         class="m-4 hover:text-highlight cursor-pointer"
         v-if="!show"
         @click.native="show = true"
      />
      <div
         v-else
      >
         <icon-close 
            class="ml-auto w-5 mb-2 cursor-pointer hover:text-highlight"
            @click.native="show = false"
         />
         <ul class="flex flex-col overflow-y-auto max-h-96">
            <li
               v-for="(h, i) in editor_items.headings"
               class="w-72 p-1 hover:bg-highlight hover:text-white duration-200 cursor-pointer z-50"
               @click="scrollTo(h)"
               :key="i"
            >
               {{h.textContent}}
            </li>
         </ul>
      </div>
   </div>
</template>

<script>
export default {
   name: "HeadingMenu",
   props:{
      editor_items:{
         type: Object,
         required: true
      }
   },
   data(){
      return {
         show: false
      }
   },
   methods:{
      scrollTo(heading){
         this.editor_items.iframe.contentWindow.scrollTo(0, heading.offsetTop - 10)
      }
   },
   created(){
      console.log(this.editor_items)
   }
}
</script>