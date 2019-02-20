<template lang="html">
  <section class="carousel">
    <div class="row">
      <div class="col-md-6 grid-margin">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">
              Basic Carousel
            </h4>
            <b-carousel
              id="carousel1"
              v-model="slide"
              controls
              indicators
              background="#ababab"
              :interval="4000"
            >
              <b-carousel-slide>
                <img slot="img" src="~/static/images/carousel/banner_1.jpg" alt="slide image">
              </b-carousel-slide>
              <b-carousel-slide>
                <img slot="img" src="~/static/images/carousel/banner_2.jpg" alt="slide image">
              </b-carousel-slide>
              <b-carousel-slide>
                <img slot="img" src="~/static/images/carousel/banner_3.jpg" alt="slide image">
              </b-carousel-slide>
              <b-carousel-slide>
                <img slot="img" src="~/static/images/carousel/banner_4.jpg" alt="slide image">
              </b-carousel-slide>
            </b-carousel>
          </div>
        </div>
      </div>
      <div class="col-md-6 grid-margin">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">
              Carousel With Captions
            </h4>
            <b-carousel
              id="carousel2"
              v-model="slide"
              controls
              indicators
              background="#ababab"
              :interval="3000"
            >
              <b-carousel-slide>
                <img slot="img" src="~/static/images/carousel/banner_5.jpg" alt="slide image">
                <h3>Hello world!</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </b-carousel-slide>
              <b-carousel-slide>
                <img slot="img" src="~/static/images/carousel/banner_6.jpg" alt="slide image">
                <h3>Hello world!</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </b-carousel-slide>
              <b-carousel-slide>
                <img slot="img" src="~/static/images/carousel/banner_7.jpg" alt="slide image">
                <h3>Hello world!</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </b-carousel-slide>
              <b-carousel-slide>
                <img slot="img" src="~/static/images/carousel/banner_8.jpg" alt="slide image">
                <h3>Hello world!</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </b-carousel-slide>
            </b-carousel>
          </div>
        </div>
      </div>
      <div class="col-md-6 grid-margin">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">
              Carousel Without Controls
            </h4>
            <b-carousel id="carousel3" v-model="slide" background="#ababab" :interval="2500">
              <b-carousel-slide>
                <img slot="img" src="~/static/images/carousel/banner_9.jpg" alt="slide image">
              </b-carousel-slide>
              <b-carousel-slide>
                <img slot="img" src="~/static/images/carousel/banner_8.jpg" alt="slide image">
              </b-carousel-slide>
              <b-carousel-slide>
                <img slot="img" src="~/static/images/carousel/banner_10.jpg" alt="slide image">
              </b-carousel-slide>
              <b-carousel-slide>
                <img slot="img" src="~/static/images/carousel/banner_11.jpg" alt="slide image">
              </b-carousel-slide>
            </b-carousel>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="js">
export default {
  name: 'Carousel'
}
</script>

<style scoped lang="scss">
</style>
