<template>
  <div class="relative">
  <input
    type="text"
    class="rounded bg-transparent border border-gray-600 placeholder-white w-72 px-3 py-1"
    placeholder="Search or jump to..."
  />
  <div class="absolute top-0 right-0 flex items-center h-full">
    <div class="border border-gray-600 rounded text-xs text-gray-400 px-2 mr-2">/</div>
  </div>
</div>
</template>

<script>
export default {
  name: 'TheHeaderSearchInput',
};
</script>
