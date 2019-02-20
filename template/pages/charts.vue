<template lang="html">
  <section class="charts">
    <div class="row">
      <div class="col-lg-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <line-chart />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="js">
import Line from "~/components/Chart/Line";

export default {
  name: 'Charts',
  components: {
    'line-chart': Line
  }
}
</script>

<style scoped lang="scss">
.charts {
}
</style>
