<template>
  <div class="w-3/4 mr-8">
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-3">
        <button type="button" class="border border-gray-300 rounded-md px-4 py-1 flex items-center space-x-1 bg-light-blue">
          <svg aria-hidden="true" viewBox="0 0 16 16" class="fill-current text-gray-600 w-4">
            <path fill-rule="evenodd" d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z" />
          </svg>
          <div>master</div>
          <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-600 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <a href="#" class="flex items-center space-x-2 group">
          <svg aria-hidden="true" viewBox="0 0 16 16" class="fill-current w-4 group-hover:text-blue-600">
            <path fill-rule="evenodd" d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z" />
          </svg>
          <span>
            <span class="font-semibold group-hover:text-blue-600">1</span>
            <span class="text-gray-600">branch</span>
          </span>
        </a>
        <a href="#" class="flex items-center space-x-2 group">
          <svg aria-hidden="true" class="fill-current w-4 group-hover:text-blue-600" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 7.775V2.75a.25.25 0 01.25-.25h5.025a.25.25 0 01.177.073l6.25 6.25a.25.25 0 010 .354l-5.025 5.025a.25.25 0 01-.354 0l-6.25-6.25a.25.25 0 01-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 010 2.474l-5.026 5.026a1.75 1.75 0 01-2.474 0l-6.25-6.25A1.75 1.75 0 011 7.775zM6 5a1 1 0 100 2 1 1 0 000-2z"></path>
          </svg>
          <span>
            <span class="font-semibold group-hover:text-blue-600">79</span>
            <span class="text-gray-600">tags</span>
          </span>
        </a>
      </div>
      <div class="flex items-center space-x-3">
        <button type="button" class="border border-gray-300 rounded-md px-4 font-semibold py-1 flex items-center space-x-1 bg-light-blue">Go to file</button>
        <button type="button" class="border border-gray-300 rounded-md px-4 font-semibold py-1 flex items-center space-x-1 bg-light-blue">
          <div>Add file</div>
          <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-600 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <button type="button" class="text-white font-semibold rounded-md px-4 py-1 flex items-center space-x-1 bg-github-green">
          <div>Code</div>
          <svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
    <file-explorer-view />
  </div>
</template>

<script>
export default {
  name: 'FileExplorer',
};
</script>
