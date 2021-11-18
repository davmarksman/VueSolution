<template>
  <div class="container-fluid pageContainer">
    <div class="row mx-auto d-flex">
      <div class="card mb-3 mx-auto d-flex productCard">
        <div class="row no-gutters">
          <!--Product Image-->
          <div class="col-md-6 productImage">
            <img :src="imgSrc" class="card-img embed-responsive-item"
              :alt="theProduct.productTitle"
            />
          </div>
          <div class="col-md-6 productInfo">
            <div class="card-body">
              <!--Product Info-->
              <div class="productPageIntro">
                <h1>{{ theProduct.productTitle }}</h1>
                <h4>£{{ theProduct.productPrice }}</h4>
              </div>
              <div class="productDescription">
                <p>{{ theProduct.productDescription }} </p>
              </div>
              
              <div class="checkout">
                  <button class="btn btn-primary">Add To Basket</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
  },
  computed: {
    index() {
      // as the array below is 0 index based
      return parseInt(this.id) - 1;
    },
    theProduct() {
      return this.products[this.index];

      // another way of doing this:
      //for (let idx = 0; idx < this.products.length; idx++) {
      //  if(this.products[idx].id === parseInt(this.id)){
      //    return this.products[idx];
      //  }
      //}
      //throw 'Product not found';
    },
    imgSrc() {
      return (
        'https://tbhpwebdevapi.azurewebsites.net/' + this.theProduct.productImage.replace('./', '')
      );
    },
    imgSrcLocal() {
      return this.publicPath + this.theProduct.productImage.replace('./', '');
    },
  },
  data() {
    return {
      products: [
        {
          id: 1,
          productTitle: 'Chinese Juniper Itagawa',
          productPrice: 2000,
          productDescription:
            'Spectacular Itoigawa Chinese Juniper Tree, approximately 35-39cm tall and in a ceramic bonsai pot.',
          productImage: './img/OutdoorBonsai/OutdoorBonsai_1.jpg',
          checkoutOptions: ['Tools', 'Soil', 'Care'],
        },
        {
          id: 2,
          productTitle: 'Large Chinese Juniper Itagawa',
          productPrice: 1495,
          productDescription:
            'Lovely Large Itoigawa Chinese Juniper Tree, approximately 98-100cm tall.',
          productImage: './img/OutdoorBonsai/OutdoorBonsai_2.jpg',
          checkoutOptions: ['Tools', 'Soil', 'Care'],
        },
        {
          id: 3,
          productTitle: '35-38cm Itagawa',
          productPrice: 3250,
          productDescription:
            'Beautiful Chinese Itiogawa Juniper, approximately 35-38cm tall and planted in an oval ceramic bonsai pot.',
          productImage: './img/OutdoorBonsai/OutdoorBonsai_3.jpg',
          checkoutOptions: ['Tools', 'Soil', 'Care'],
        },
        {
          id: 4,
          productTitle: 'Brussels Bonsai',
          productPrice: 195,
          productDescription:
            'Lovely Brussels Bonsai Tree in a ceramic bonsai pot, approximately 27-29cm tall.',
          productImage: './img/OutdoorBonsai/OutdoorBonsai_4.jpg',
          checkoutOptions: ['Tools', 'Care'],
        },
        {
          id: 5,
          productTitle: 'Satsuki Azalea ',
          productPrice: 595,
          productDescription:
            'Gorgeous Satsuki Azalea  Bonsai Tree, approximately 28-33cm tall and planted in an unglazed oval ceramic bonsai pot.',
          productImage: './img/OutdoorBonsai/OutdoorBonsai_5.jpg',
          checkoutOptions: ['Tools', 'Care'],
        },
      ],
    };
  },
};
</script>

<style scoped>


.productInfo    {
    padding-left: 0;
    padding-right: 10%;
    padding-top: 10%;
    height: 80vh;
}
@media (max-width: 1200px){
    .productInfo   {
    padding-top: 10%;
        padding-right: 0%;
        }
}



.productDescription {
    padding-top: 20%;
}




</style>
