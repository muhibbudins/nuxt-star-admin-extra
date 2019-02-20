<template lang="html">
  <section class="register">
    <div class="wrapper d-flex align-items-center auth register-full-bg">
      <div class="row w-100">
        <div class="col-lg-6 mx-auto">
          <div class="auth-form-light text-left p-5">
            <h2>Register</h2>
            <h4 class="font-weight-light">
              Hello! let's get started
            </h4>
            <form class="pt-4">
              <form>
                <div class="form-group">
                  <label for="exampleInputEmail1">Username</label>
                  <input id="exampleInputEmail1" type="email" class="form-control" aria-describedby="emailHelp" placeholder="Username">
                  <i class="mdi mdi-account" />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input id="exampleInputPassword1" type="password" class="form-control" placeholder="Password">
                  <i class="mdi mdi-eye" />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword2">Password</label>
                  <input id="exampleInputPassword2" type="password" class="form-control" placeholder="Confirm password">
                  <i class="mdi mdi-eye" />
                </div>
                <div class="mt-5">
                  <a class="btn btn-block btn-primary btn-lg font-weight-medium" href="../../index.html">Register</a>
                </div>
                <div class="mt-2 w-75 mx-auto">
                  <b-form-checkbox id="checkbox1" v-model="status" value="accepted" unchecked-value="not_accepted">
                    I accept the terms and use
                  </b-form-checkbox>
                </div>
                <div class="mt-2 text-center">
                  <a href="login.html" class="auth-link text-black">Already have an account? <span class="font-weight-medium">Sign in</span></a>
                </div>
              </form>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="js">
export default {
  name: 'Register'
}
</script>

<style scoped lang="scss">
.register {
}
</style>
