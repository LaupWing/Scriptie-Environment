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
import DocumentViewer from './components/DocumentViewer'
import TopNav from './components/TopNav'
import './registerGlobals'

export default {
	name: 'App',
	components: {
      SideNav,
      DocumentViewer,
      TopNav
	}
}
</script>

<style>
:root {
	--font-color: #2c3e50;
	--main-color: #ffff;
	--light-main-color: #fafafa;
	--dark-main-color: #dadce0;
	--pop-color: #b1b1b1;
	--background-color: #ebf1f6;
	--background-color2: #f8f9fa;
	--border-color: #ced2d9;
	--highlight-color: #2EA3F2;
	--highlight-color-darker: #778da3;
	--warning-color: #ff4f59;
	--accept-color: #7cf382;
}
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

* > .tox.tox-tinymce{
   border: none;
}
* >>> .tox.tox-tinymce .tox-toolbar__primary {
   background: var(--main-color);
   border-bottom: 1px solid var(--border-color);
}
* >>> .tox .tox-toolbar__group:not(:last-of-type) {
   border-color: var(--border-color);
}
</style>
