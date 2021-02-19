<template>
  <!-- TODO: -->
  <!-- Note that we've set this configuration in the development environment.
  In production, we will want to have SSL, so we'll also need to install
  and configure an upstream proxy application, such as Nginx - and make Strapi aware of it. -->
  <div class="container">
    <div class="columns">
      <div class="column is-4 is-offset-4 max-w-md mx-auto bg-white border rounded px-8 pt-6 pb-8 my-4">
        <h1 class="title has-text-centered mb-3 font-bold text-xl">Forgot Password</h1>
        <Notification v-if="success" :message="success" color="green" />
        <Notification v-if="error" :message="error" color="red" />
        <form
          v-if="!success"
          method="post"
          @submit.prevent="forgotPassword">
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Email
            </label>
            <input
              id="email"
              v-model="email"
              :class="inputClasses"
              type="email"
              placeholder="Email"
              required>
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit">
              Email me a reset link
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
const methods = {
  async forgotPassword () {
    await this.$axios.post('auth/forgot-password', {
      email: this.email
    })
    this.error = null
    this.success = `A reset password link has been sent to your email account. \
    Please click on the link to complete the password reset.`
  }
}

export default {
  layout: 'auth',
  middleware: 'guest',
  methods,
  data: () => ({
    email: '',
    success: '',
    error: null,
    inputClasses: 'appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
  })
}
</script>
