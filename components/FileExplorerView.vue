<template>
  <div>
    <div class="mt-4 flex items-center justify-between rounded-md border border-gray-300 rounded-b-none bg-light-blue p-3">
      <div class="flex items-center space-x-2">
        <a href="#">
          <img src="https://avatars.githubusercontent.com/u/60117829?s=400&u=ed03e4379eedf7c54263d948e9e4e01b92dbb2a4&v=4" alt="Avatar"
            class="w-6 h-6 rounded-full"
          />
        </a>
        <a href="#" class="font-semibold hover:underline">Pedro-Henrique-Ferreti</a>
        <a href="#" class="hover:text-blue-600 hover:underline">App init</a>
      </div>
      <div class="flex items-center space-x-2">
        <a href="#" class="text-gray-600 text-xs hover:text-blue-600 hover:underline">52d7c6c</a>
        <a href="#" class="text-gray-600 hover:text-blue-600 hover:underline">17 hours ago</a>
        <a href="#" class="flex items-center pl-3 space-x-2 group">
          <svg aria-hidden="true" viewBox="0 0 16 16" class="fill-current w-4 group-hover:text-blue-600">
            <path fill-rule="evenodd" d="M1.643 3.143L.427 1.927A.25.25 0 000 2.104V5.75c0 .138.112.25.25.25h3.646a.25.25 0 00.177-.427L2.715 4.215a6.5 6.5 0 11-1.18 4.458.75.75 0 10-1.493.154 8.001 8.001 0 101.6-5.684zM7.75 4a.75.75 0 01.75.75v2.992l2.028.812a.75.75 0 01-.557 1.392l-2.5-1A.75.75 0 017 8.25v-3.5A.75.75 0 017.75 4z" />
          </svg>
          <span>
            <span class="font-semibold group-hover:text-blue-600">1</span>
            <span class="text-gray-600">branch</span>
          </span>
        </a>
      </div>
    </div>
    <div class="rounded-md rounded-t-none border border-gray-300 border-t-0 divide-y divide-gray-300">
      <div class="flex justify-between px-4 py-2 hover:bg-light-blue" v-for="n in 4" :key="n">
        <div class="w-4/12 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-6 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
          </svg>
          <a href="#" class="ml-4 hover:text-blue-600 hover:underline">folder</a>
        </div>
        <div class="w-6/12 truncate">
          <a href="#" class="text-gray-600 hover:text-blue-600 hover:underline">App init</a>
        </div>
        <div class="w-2/12 text-right text-gray-600">18 hours ago</div>
      </div>
    </div>
    <div class="mt-4 border border-gray-300 rounded-md p-4">
      <span class="font-semibold">README.md</span>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et quo modi nesciunt? Est quasi quas commodi iure voluptas nam doloremque tempora aliquam ipsum vero iusto dolorem vel at possimus autem nulla perspiciatis et, quo modi incidunt libero officia dignissimos ipsam. Cupiditate labore amet eum voluptatum.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FileExplorerView',
};
</script>