<template>
  <div class="flex items-center justify-between px-8 py-4">
    <div class="flex">
      <svg aria-hidden="true" viewBox="0 0 16 16" class="w-4 fill-current text-gray-600">
        <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
      </svg>
      <div class="flex items-center text-xl ml-2">
        <a href="#" class="text-blue-600 hover:underline">tailwindcss</a>
        <span class="ml-1">/</span>
        <a href="#" class="text-blue-600 hover:underline font-semibold">tailwindcss</a>
      </div>
    </div>
    <div class="flex space-x-2">
      <div class="flex text-xs">
        <button type="button" class="border border-gray-300 rounded-md rounded-r-none px-3 py-1 flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-600 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
          <div>Star</div>
        </button>
        <a href="#" class="bg-white border border-gray-300 rounded-md rounded-l-none border-l-0 font-semibold hover:text-blue-600 px-3 py-1">430</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RepositoryStats',
};
</script>
