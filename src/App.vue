<template>
	<div id="app" class="w-screen h-screen text-center flex flex-col items-center overflow-hidden bg-background">
		<img alt="Vue logo" src="./assets/logo.png">
	</div>
</template>

<script>

export default {
	name: 'App',
	components: {
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
