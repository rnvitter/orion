<template>
  <nav>
    <div class="max-w-7xl mx-auto mb-2">
      <div class="relative flex items-center justify-between h-12">
        <div class="flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0 flex items-center">
            <div class="flex-none font-extrabold text-lg uppercase">Orion</div>
          </div>
        </div>

        <div class="flex flex-grow justify-center">
          <input
            type="text"
            placeholder="Search"
            class="px-3 py-2 placeholder-gray-600 text-gray-700 relative bg-gray-200 outline-none rounded text-sm focus:shadow-outline w-full"
            style="max-width: 300px;"/>
        </div>

        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <!-- Profile dropdown -->
          <div class="ml-3 relative" v-if="isAuthenticated">
            <div>
              <button
                class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                id="user-menu"
                aria-haspopup="true"
                @click="showMenu = !showMenu">
                <span class="sr-only">Open user menu</span>
                <div class="h-8 w-8 rounded-full flex items-center justify-center text-white font-bold text-xs">
                  RV
                </div>
              </button>
            </div>
            <!--
              Profile dropdown panel, show/hide based on dropdown state.

              Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            -->
            <div
              v-if="showMenu"
              class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 z-10"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu">
              <!-- <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</a> -->
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" @click="logout">Log out</a>
            </div>
          </div>

          <template v-else>
            <NuxtLink to="register">
              <button class="bg-blue-500 hover:bg-blue-700 text-white text-sm font-medium py-2 px-3 rounded focus:outline-none">
                Sign Up
              </button>
            </NuxtLink>

            <NuxtLink to="login">
              <button class="ml-2 bg-gray-300 hover:bg-blue-700 text-sm font-medium py-2 px-3 rounded">
                Log In
              </button>
            </NuxtLink>
          </template>
        </div>
      </div>

      <ul class="flex-grow flex space-x-1 mt-2">
        <nav-item
          href="/"
          :isActive="$route.name === 'index'">
          Home
        </nav-item>
        <nav-item
          v-for="collection in collections"
          :key="collection.id"
          :href="collection.id.toString()"
          :isActive="$route.params.collection === collection.id.toString()">
          {{ collection.name }}
        </nav-item>
      </ul>
    </div>

    <!--
      Mobile menu, toggle classes based on menu state.

      Menu open: "block", Menu closed: "hidden"
    -->
    <div class="hidden sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</a>
        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>
        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>
        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
      </div>
    </div>
  </nav>
  <!--  -->
</template>

<script>
import { mapGetters } from 'vuex'

const computed = {
  ...mapGetters(['isAuthenticated', 'loggedInUser'])
}

const methods = {
  async logout() {
    await this.$auth.logout()
  }
}

export default {
  computed,
  methods,
  data: () => ({
    collections: [
      { id: 1, name: 'Black Lives Matter' },
      { id: 2, name: 'Climate Change' }
    ],
    showMenu: false
  })
}
</script>
