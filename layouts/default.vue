<template lang="html">
  <div id="app">
    <div class="container-scroller">
      <app-header />
      <div class="container-fluid page-body-wrapper">
        <app-sidebar />
        <div class="main-panel">
          <div class="content-wrapper">
            <nuxt />
          </div>
          <!-- content wrapper ends -->
          <app-footer />
        </div>
        <!-- main panel ends -->
      </div>
      <!-- page-body-wrapper ends -->
    </div>
  </div>
</template>

<script lang="js">
import AppHeader from '~/components/partials/AppHeader'
import AppSidebar from '~/components/partials/AppSidebar'
import AppFooter from '~/components/partials/AppFooter'

export default {
  components: {
    AppHeader,
    AppSidebar,
    AppFooter
  }
}
</script>
