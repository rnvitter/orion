<template>
  <!-- TODO: -->
  <!-- Note that we've set this configuration in the development environment.
  In production, you'll probably want to have SSL, so you'll also need to install
  and configure an upstream proxy application, such as Nginx - and make Strapi aware of it. -->
  <div class="container">
    <div class="columns">
      <div class="column is-4 is-offset-4 max-w-md mx-auto bg-white border rounded px-8 pt-6 pb-8 my-4">
        <h1 class="title has-text-centered mb-3 font-bold text-xl">Register</h1>
        <Notification v-if="success" :message="success" color="green" />
        <Notification v-if="error" :message="error" color="red" />
        <form
          v-if="!success"
          method="post"
          @submit.prevent="register">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              Username
            </label>
            <input
              id="username"
              v-model="username"
              :class="inputClasses"
              type="text"
              placeholder="Username"
              required>
          </div>
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
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input
              id="password"
              v-model="password"
              :class="inputClasses"
              type="password"
              placeholder="Password"
              required>
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit">
              Register
            </button>
            <!-- <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              Forgot Password?
            </a> -->
          </div>
        </form>

        <div class="has-text-centered text-sm" style="margin-top: 20px">
          Already got an account? <nuxt-link to="/login" :class="linkClasses">Log In</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const methods = {
  async register() {
    this.error = null
    try {
      this.$axios.setToken(false)
      await this.$axios.post('auth/local/register', {
        username: this.username,
        email: this.email,
        password: this.password,
      })
      this.success = `A confirmation link has been sent to your email account. Please click on the link to complete the registration process.`
    } catch (e) {
      this.error = e.response.data.message[0].messages[0].message
    }
  }
}

export default {
  layout: 'auth',
  middleware: 'guest',
  methods,
  data: () => ({
    username: '',
    email: '',
    password: '',
    success: null,
    error: null,
    // TODO: abstract these out to components?
    linkClasses: 'inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800',
    inputClasses: 'appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
  })
}
</script>
