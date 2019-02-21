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
            <span class="menu-icon mdi mdi-home" />
            <span class="menu-title">Dashboard</span>
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/widgets/">
            <span class="menu-icon mdi mdi-apps" />
            <span class="menu-title">Widgets</span>
          </nuxt-link>
        </li>
        <li class="nav-item">
          <span v-b-toggle="'charts'" class="nav-link">
            <span class="menu-icon mdi mdi-airplay" />
            <span class="menu-title">Charts</span><i class="menu-arrow" />
          </span>
          <b-collapse id="charts">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/charts/chart-js/">
                  Chart JS
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/charts/echarts/">
                  Echarts
                </nuxt-link>
              </li>
            </ul>
          </b-collapse>
        </li>
        <li class="nav-item">
          <span v-b-toggle="'ui-components'" class="nav-link">
            <span class="menu-icon mdi mdi-airballoon" />
            <span class="menu-title">Components</span><i class="menu-arrow" />
          </span>
          <b-collapse id="ui-components">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/components/alerts/">
                  Alerts
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/components/badges/">
                  Badges
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/components/breadcrumbs/">
                  Breadcrumbs
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/components/buttons/">
                  Button
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/components/cards/">
                  Card
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/components/carousel/">
                  Carousel
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/components/dropdowns/">
                  Dropdowns
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/components/forms/">
                  Forms
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/components/modals/">
                  Modals
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/components/paginations/">
                  Paginations
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/components/popovers/">
                  Popovers
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/components/progress/">
                  Progress
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/components/tables/">
                  Tables
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/components/tabs/">
                  Tabs
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/components/tooltips/">
                  Tooltips
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/components/typography/">
                  Typography
                </nuxt-link>
              </li>
            </ul>
          </b-collapse>
        </li>
        <li class="nav-item">
          <span v-b-toggle="'element'" class="nav-link">
            <span class="menu-icon mdi mdi-access-point" />
            <span class="menu-title">Element UI</span><i class="menu-arrow" />
          </span>
          <b-collapse id="element">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/element/buttons/">
                  Buttons
                </nuxt-link>
              </li>
            </ul>
          </b-collapse>
        </li>
        <li class="nav-item">
          <span v-b-toggle="'icons'" class="nav-link">
            <span class="menu-icon mdi mdi-barley" />
            <span class="menu-title">Icons</span><i class="menu-arrow" />
          </span>
          <b-collapse id="icons">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/icons/material-icon/">
                  Material Icon
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/icons/simple-line-icon/">
                  Simple Line Icons
                </nuxt-link>
              </li>
            </ul>
          </b-collapse>
        </li>
        <li class="nav-item">
          <span v-b-toggle="'sample-pages'" class="nav-link">
            <span class="menu-icon mdi mdi-beach" />
            <span class="menu-title">Sample Pages</span><i class="menu-arrow" />
          </span>
          <b-collapse id="sample-pages">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/sample/login/">
                  Login
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/sample/register/">
                  Register
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/sample/404/">
                  Page 404
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/sample/500/">
                  Page 500
                </nuxt-link>
              </li>
            </ul>
          </b-collapse>
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
