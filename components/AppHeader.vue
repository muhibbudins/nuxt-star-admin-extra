<template lang="html">
  <b-navbar class="fixed-top" toggleable="md" type="dark" variant="info">
    <div class="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
      <a class="navbar-brand brand-logo" href="/"><img src="~/static/images/logo.svg" alt="logo"></a>
      <a class="navbar-brand brand-logo-mini" href="/"><img src="~/static/images/logo-mini.svg" alt="logo"></a>
    </div>
    <b-collapse id="nav_collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right class="preview-list">
          <template slot="button-content">
            <div class="count-indicator">
              <i class="icon mdi mdi-email-variant" />
              <span class="count">0</span>
            </div>
          </template>
          <b-dropdown-item class="preview-item" href="#">
            <p class="mb-0 font-weight-normal float-left">
              You have 0 new mail
            </p>
            <span class="badge badge-pill badge-warning float-right">View all</span>
          </b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown right class="preview-list">
          <template slot="button-content">
            <div class="count-indicator">
              <i class="icon mdi mdi-bell-ring" />
              <span class="count">4</span>
            </div>
          </template>
          <b-dropdown-item class="preview-item" href="#">
            <p class="mb-0 font-weight-normal float-left">
              You have 4 new notifications
            </p>
            <span class="badge badge-pill badge-warning float-right">View all</span>
          </b-dropdown-item>
          <b-dropdown-item class="preview-item" href="#">
            <div class="preview-thumbnail">
              <div class="preview-icon bg-success">
                <i class="mdi mdi-alert-circle-outline mx-0" />
              </div>
            </div>
            <div class="preview-item-content">
              <h6 class="preview-subject font-weight-medium">
                Application Error
              </h6>
              <p class="font-weight-light small-text">
                Just now
              </p>
            </div>
          </b-dropdown-item>
          <b-dropdown-item class="preview-item" href="#">
            <div class="preview-thumbnail">
              <div class="preview-icon bg-warning">
                <i class="mdi mdi-comment-text-outline mx-0" />
              </div>
            </div>
            <div class="preview-item-content">
              <h6 class="preview-subject font-weight-medium">
                Settings
              </h6>
              <p class="font-weight-light small-text">
                Private message
              </p>
            </div>
          </b-dropdown-item>
          <b-dropdown-item class="preview-item" href="#">
            <div class="preview-thumbnail">
              <div class="preview-icon bg-info">
                <i class="mdi mdi-email-outline mx-0" />
              </div>
            </div>
            <div class="preview-item-content">
              <h6 class="preview-subject font-weight-medium">
                New user registration
              </h6>
              <p class="font-weight-light small-text">
                2 days ago
              </p>
            </div>
          </b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown right>
          <template slot="button-content">
            <img class="img-xs rounded-circle" src="~/static/images/faces/face4.jpg" alt="profile image">
          </template>
          <b-dropdown-item href="#">
            Profile
          </b-dropdown-item>
          <b-dropdown-item href="#">
            Signout
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script lang="js">
export default {
  name: 'AppHeader'
}
</script>

<style scoped lang="scss">
.app-header {
}
</style>
