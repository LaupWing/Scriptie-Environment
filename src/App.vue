<template>
	<div id="app" class="w-screen h-screen text-center flex flex-col items-center overflow-hidden bg-background">
      <div class="w-full h-full bg-background flex">
         <side-nav/>
         <div class="flex-1 flex flex-col items-start overflow-y-hidden max-h-full">
            <top-nav/>
            <document-viewer/>
         </div>
      </div>
	</div>
</template>

<script>
import SideNav from './components/SideNav'
import TopNav from './components/TopNav'
import './registerGlobals'

export default {
	name: 'App',
	components: {
      SideNav,
      TopNav
	}
}
</script>

<style>
/* width */
::-webkit-scrollbar {
	width: 8px;
   height: 8px;
}

/* Track */
::-webkit-scrollbar-track {
	border-radius: 10px;
	background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
	background: rgb(201, 200, 200);
	border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
	background: rgb(180, 180, 180);
}
</style>
