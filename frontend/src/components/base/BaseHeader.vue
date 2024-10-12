<template>

  <header
    class="flex justify-between border-b border-zinc-200 px-6 py-4"
  >
    <div class="flex items-center flex-cols gap-4">
    	<img alt="Vue logo" src="@/assets/logo_todz.svg" width="300" height="300" />
    	<h1 class="pl-4 text-5xl font-medium text-blue-400">Stichting Spring of Life</h1>
    </div>
    <slot />
  </header>

</template>