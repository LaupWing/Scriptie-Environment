<template>
   <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      class="stroke-current text-highlight stroke-2"
   >
      <circle
         cx="50"
         cy="50"
         fill="none"
         r="34"
         stroke-dasharray="160.22122533307947 55.40707511102649"
      >
         <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="2s"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
         ></animateTransform>
      </circle>
   </svg>
</template>

<script>
export default {
   name: "Loading"
};
</script>