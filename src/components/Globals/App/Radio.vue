<template>
   <div>
      <input
         type="radio"
         :id="`radio_drones_${index}`"
         :value="value"
         v-model="edit_proxy"
         class="hidden"
      />
      <label 
         class="block cursor-pointer w-full border border-highlight rounded py-1 px-3 my-4 text-sm capitalize"
         :class="value === edit ? 'text-white bg-highlight' : 'text-highlight' "
         :for="`radio_drones_${index}`"
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
         type: String,
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