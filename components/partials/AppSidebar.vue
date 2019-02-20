<template lang="html">
  <section class="app-sidebar">
    <nav id="sidebar" class="sidebar sidebar-offcanvas">
      <ul class="nav">
        <li class="nav-item nav-profile">
          <div class="nav-link">
            <div class="profile-image">
              <img src="~/static/images/faces/face4.jpg" alt="image"> <span class="online-status online" />
            </div>
            <div class="profile-name">
              <p class="name">
                Richard V.Welsh
              </p>
              <p class="designation">
                Manager
              </p>
              <div class="badge badge-teal mx-auto mt-3">
                Online
              </div>
            </div>
          </div>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/">
            <img class="menu-icon" src="~/static/images/menu_icons/01.png" alt="menu icon"><span class="menu-title">Dashboard</span>
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/widgets/">
            <img class="menu-icon" src="~/static/images/menu_icons/02.png" alt="menu icon"><span class="menu-title">Widgets</span>
          </nuxt-link>
        </li>
        <li class="nav-item">
          <span v-b-toggle="'sample-pages'" class="nav-link">
            <img class="menu-icon" src="~/static/images/menu_icons/08.png" alt="menu icon"><span class="menu-title">Sample Pages</span><i class="menu-arrow" />
          </span>
          <b-collapse id="sample-pages">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/sample-pages/login/">
                  login
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/sample-pages/register/">
                  register
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/sample-pages/error-404/">
                  404
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/sample-pages/error-500/">
                  500
                </nuxt-link>
              </li>
            </ul>
          </b-collapse>
        </li>
        <li class="nav-item">
          <span v-b-toggle="'ui-components'" class="nav-link">
            <img class="menu-icon" src="~/static/images/menu_icons/03.png" alt="menu icon"><span class="menu-title">UI Components</span><i class="menu-arrow" />
          </span>
          <b-collapse id="ui-components">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/ui-components/alerts/">
                  Alerts
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/ui-components/buttons/">
                  Button
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/ui-components/badges/">
                  Badges
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/ui-components/breadcrumbs/">
                  Breadcrumbs
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/ui-components/carousel/">
                  Carousel
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/ui-components/dropdowns/">
                  Dropdowns
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/ui-components/typography/">
                  Typography
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/ui-components/paginations/">
                  Paginations
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/ui-components/tooltips/">
                  Tooltips
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/ui-components/progress/">
                  Progress
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/ui-components/tabs/">
                  Tabs
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/ui-components/modals/">
                  Modals
                </nuxt-link>
              </li>
            </ul>
          </b-collapse>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/ui-components/tables/">
            <img class="menu-icon" src="~/static/images/menu_icons/06.png" alt="menu icon"><span class="menu-title">Tables</span>
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/ui-components/icons/">
            <img class="menu-icon" src="~/static/images/menu_icons/07.png" alt="menu icon"><span class="menu-title">Icons</span>
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/forms/forms/">
            <img class="menu-icon" src="~/static/images/menu_icons/04.png" alt="menu icon"><span class="menu-title">Forms</span>
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script lang="js">
export default {
  name: 'AppSidebar'
}
</script>

<style scoped lang="scss">
.app-sidebar {
}
</style>
