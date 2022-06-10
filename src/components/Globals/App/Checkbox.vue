<template>
   <div>
      <input
         type="checkbox"
         :id="`checkbox_drones_${index}`"
         :value="value"
         v-model="edit_proxy"
         class="hidden"
      />
      <label 
         class="block text-sm cursor-pointer w-full border border-highlight rounded py-2 px-3 my-4"
         :class="is_checked ? 'text-white bg-highlight' : 'text-highlight' "
         :for="`checkbox_drones_${index}`"
      >
         {{value}}
      </label>
   </div>
</template>

<script>
export default {
   name: 'Checkbox',
   props:{
      edit:{
         type: Array,
         required: true
      },
      value:{
         type: String,
         required: true
      },
      index:{
         type: Number,
         required: true
      },
   },
   computed:{
      is_checked(){
         return this.edit.find(x=>x === this.value)
      },
      edit_proxy:{
         get(){
            return this.edit
         },
         set(value){
            this.$emit('update:edit', value)
         }
      }
   }
}
</script>