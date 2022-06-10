<template>
   <div class="flex items-center text-highlight font-bold w-full p-1 my-1 justify-between">
      <slot>Toggle</slot>
      <label 
         class="opacity-70 mr-2 relative inline-block w-12 h-7" 
         v-if="!disableSwitch"
      >
         <input 
            type="checkbox" 
            v-model="inputVal" 
            class="opacity-0 w-0 h-0"
         />
         <span class="slider round"></span>
      </label>
   </div>
</template>

<script>
export default {
   props: {
      value: {
         type: Boolean,
         required: true,
      },
      disableSwitch: {
         type: Boolean,
      },
   },
   computed: {
      inputVal: {
         get() {
            return this.value;
         },
         set(val) {
            this.$emit("update:value", val);
         },
      },
   },
};
</script>

<style scoped>
.slider {
   position: absolute;
   cursor: pointer;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background-color: #ccc;
   -webkit-transition: 0.4s;
   transition: 0.4s;
}

.slider:before {
   position: absolute;
   content: "";
   height: 20px;
   width: 20px;
   left: 4px;
   bottom: 4px;
   background-color: white;
   transition: 0.4s;
}

input:checked + .slider {
   background-color: var(--highlight-color);
}

input:focus + .slider {
   box-shadow: 0 0 1px var(--highlight-color);
}

input:checked + .slider:before {
   transform: translateX(20px);
}

.slider.round {
   border-radius: 28px;
}

.slider.round:before {
   border-radius: 50%;
}
</style>