<template>
   <div 
      class="border border-solid rounded flex relative mt-4" 
      :class="not_correct ? 
         'border-warning' : focus ? 
            'border-highlight' : 
            'border-border'
      "
   >
      <label 
         v-if="static_label" 
         class="static_label"
      >
         {{ label }}
      </label>
      <label
         v-else
         class="absolute capitalize opacity-60  text-highlight pointer-events-none transition-all duration-300 transform select-none"
         :class="focus || inputVal.length > 0 ? 
            'focus' : 
            '' 
         "
      >
         {{ label }}
      </label>
      <input
         class="outline-none p-2 text-base bg-transparent w-full"
         v-if="isTextInput()"
         :type="type"
         autocomplete="off"
         v-model="inputVal"
         @focus="focus = true"
         @blur="focus = false"
         spellcheck="off"
         required
         @input="()=>{
            removeError()
            this.$emit('input')
         }"
      />
      <select 
         class="w-full py-1 px-2 bg-transparent"
         v-model="inputVal" 
         v-if="type === 'select'"
         @change="$emit('change')"
      >
         <option v-for="(option, i) in options" :key="i" :value="option">
            {{ option }}
         </option>
      </select>
   </div>
</template>

<script>
export default {
   name: "Field",
   props:{
      type:{
         type: String,
         default: 'text'
      },
      value:{
         type: [String, Number],
         required: true
      },
      label:{
         type: String
      },
      errors:{
         type: Object
      },
      static_label:{
         type: Boolean
      },
      options:{
         type: Array
      }
   },
   computed:{
      inputVal:{
         get(){
            return this.value
         },
         set(newValue){
            this.$emit('update:value', newValue)
         }
      },
      not_correct(){
         return this.errors && this.errors.list.find(x=>x === this.errors.value)
      }
   },
   data(){
      return {
         focus: false
      }
   },
   methods:{
      isTextInput(){
         return [
            "text",
            "password",
            "email",
         ].includes(this.type)
      },
      removeError(){
         if(this.errors){
            const removed = this.errors.list.filter(x=>x !== this.errors.value)
            this.$emit('update:errors', removed)
         }
      }
   }
}
</script>
<style scoped>
label {
   left: 10px;
   top: 10px;
   transition: all 0.25s;
}
label.focus {
   padding: 2px 5px;
   transform: translateY(-100%);
   left: 0;
   top: 0;
   font-size: 0.8em;
   font-weight: bold;
}
</style>