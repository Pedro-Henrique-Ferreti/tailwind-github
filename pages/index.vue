<template>
  <div class="text-gray-900 text-sm min-h-screen flex flex-col">
    <the-header />
    <div class="w-full bg-light-blue">
      <repository-stats />
      <repository-nav />
    </div>
    <div class="container mx-auto my-8 px4 flex">
      <file-explorer />
      <sidebar />
    </div>
    <the-footer />
  </div>
</template>

<script>
export default {}
</script>
