<template>
  <div class="card col-sm-4">
   <!-- can use imgSrcLocal or imgSrc -->
    <img class="card-img-top" :src="imgSrc" /> 
    <div class="card-body">
      <h5 class="card-title">{{ productTitle }}</h5>
      <p class="card-text">£{{ productPrice }}.00</p>
      <a :href="'/product/' + id"  class="btn btn-primary">More Info</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    productImage: String,
    productTitle: String,
    productPrice: String,
  },
  data() {
    return {
      publicPath: process.env.BASE_URL
    }
  },
  computed: {
    imgSrc() {
      return 'https://tbhpwebdevapi.azurewebsites.net/' + this.productImage.replace('./','')
    },
    imgSrcLocal() {
      return this.publicPath + this.productImage.replace('./','')
    }
  },
};
</script>

<style scoped>
/*
This is just an example of some styles can add
*/
.card:hover img {
  opacity: 0.6;
  transition: 0.3s;
}

.card-title {
  font-weight: 300;
  font-size: 1.5rem;
}
</style>
