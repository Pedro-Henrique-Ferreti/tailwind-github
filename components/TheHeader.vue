<template>
  <nav class="bg-gray-800 text-white px-7 py-4 flex items-center justify-between">
    <div class="flex items-center space-x-4">
      <logo />
      <the-header-search-input />
      <the-header-links />
    </div>
    <div class="flex items-center space-x-4 text-white">
      <the-header-bell-button />
      <the-header-details />
      <the-header-profile />
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TheHeader',
};
</script>
