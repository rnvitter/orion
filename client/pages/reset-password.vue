<template>
  <!-- TODO: -->
  <!-- Note that we've set this configuration in the development environment.
  In production, we will want to have SSL, so we'll also need to install
  and configure an upstream proxy application, such as Nginx - and make Strapi aware of it. -->
  <div class="container">
    <div class="columns">
      <div class="column is-4 is-offset-4 max-w-md mx-auto bg-white border rounded px-8 pt-6 pb-8 my-4">
        <h1 class="title has-text-centered mb-3 font-bold text-xl">Reset Password</h1>
        <Notification v-if="success" :message="success" color="green" />
        <Notification v-if="error" :message="error" color="red" />
        <div class="flex items-center justify-between" v-if="success">
          <NuxtLink to="login">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit">
              Log In
            </button>
          </NuxtLink>
        </div>
        <form
          v-if="!success"
          method="post"
          @submit.prevent="resetPassword">
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              New Password
            </label>
            <input
              id="password1"
              v-model="password1"
              :class="inputClasses"
              type="password"
              placeholder="Password"
              required>
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Confirm New Password
            </label>
            <input
              id="password2"
              v-model="password2"
              :class="inputClasses"
              type="password"
              placeholder="Password"
              required>
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit">
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
const methods = {
  async resetPassword () {
    this.error = null
    if (this.password1 !== this.password2) {
      this.error = 'Passwords do not match.'
      return
    }
    try {
      await this.$axios.post('auth/reset-password', {
        code: this.code,
        password: this.password1,
        passwordConfirmation: this.password2
      })
      this.success =
      'Password updated successfully. You can now use it to log in to your account.'
    } catch (e) {
      this.error = e.response.data.message[0].messages[0].message
    }
  }
}

export default {
  layout: 'auth',
  middleware: 'guest',
  methods,
  asyncData(context) {
  if (!context.route.query.code) context.redirect('/forgot-password')
  else
    return {
    code: context.route.query.code
    }
  },
  data: () => ({
    password1: '',
    password2: '',
    success: '',
    error: null,
    inputClasses: 'appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
  })
}
</script>
