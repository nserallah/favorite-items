<template>
  <div>
    <h1>Items</h1>
    <div class="container">
      <div class="fav-counter mb-3 text-left">
          <i class="far fa-heart fa-lg"></i> {{favItems.length}} items
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div v-for="(item, index) in items" :key="item.index" class="col">
          <div class="item">
            <div class="img-container">
              <img :src="item.imgSrc" alt="" title="">
            </div>
            <h3 class="">{{item.name}}</h3>
            <p>{{ item.price }} $</p>
            <div class="icons">
              <i :class="{fas : item.add}" @click="addFav(index)" class="far fa-heart fa-lg float-left"></i>
              <i class="fas fa-info fa-lg float-right"></i>
            </div>
          </div>
        </div>
      </div>

      <div class="fav-item mt-5">
         <div class="row border-bottom">
            <div class="col">Item Name</div>
            <div class="col">Price</div>
          </div>
          <p v-if="favItems.length == 0" class="mb-0 p-3 text-danger">Not found favorit Items</p>
        <div v-for="(fav, index) in favItems" :key="fav.index" class="item-row">  
          
          <div class="row">
            <div class="col-3">
              <div class="item-img">
                <img :src="fav.imgSrc" alt="" title="">
              </div>
            </div>
            <div class="col-3 horisontal-centering">{{ fav.name }}</div>
            <div class="col-3 horisontal-centering">
              <span>{{fav.price}} $</span>
            </div>
            <div class="col-3 horisontal-centering">
             
              <button  @click="removeFave(index)" type="button" class="btn btn-danger mr-2">Delete Item</button>
              <button type="button" class="btn btn-primary">Action</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import swal from 'sweetalert'
export default {
  name: "Items",
  data() {
    return {
      items: [
        {name: "item1", imgSrc: "/img/item-img3.e81a2fe2.png", price: 20, add: false, id: 0},
        {name: "item2", imgSrc: "/img/item-img4.292d8f7c.png", price: 30, add: false, id: 1},
        {name: "item3", imgSrc: "/img/item-img5.1e8ccf82.png", price: 40, add: false, id: 2},
        {name: "item4", imgSrc: "/img/item-img6.32c2628b.png", price: 50, add: false, id: 3},
        {name: "item5", imgSrc: "/img/item-img7.96114222.png", price: 60, add: false, id: 4},
      ],
      favItems: [],
      favColorIcon: true,
      
    }
    
  },
  methods: {
    addFav(index) {
      
      if (this.favItems.length < this.items.length && this.items[index].add == false) {
        this.favItems.push(this.items[index])
         
      }

      this.items[index].add = true;

      localStorage.setItem('store', JSON.stringify(this.items))
      localStorage.setItem('favItem', JSON.stringify(this.favItems))
    },
    removeFave(index) {
      swal("Are you sure you want delete from favorite?", {
      buttons: ["No", "Yes"],
      }).then(willDelete => {
        if(willDelete){
           this.items[this.favItems[index].id].add = false;
          this.favItems.splice(index, 1)
          localStorage.setItem('store', JSON.stringify(this.items))
          localStorage.setItem('favItem', JSON.stringify(this.favItems))
        }
       
      })
      
    }
  },
  mounted() {
    
    this.items = localStorage.getItem('store') ?
                        JSON.parse(localStorage.getItem('store')) : 
                        this.items
    
    this.favItems = localStorage.getItem('favItem') ?
                       JSON.parse(localStorage.getItem('favItem')) : 
                        this.favItems
    

  }
}

</script>
<style>
  * {
    box-sizing: border-box;
  }
  .item {
    border: 1px solid #333;
    border-radius: 20px;
  }
  .item .img-container{
    height: 200px;
    border-bottom: 1px solid #777;
  }

  .item .img-container img {
    height:100%;
    width:100%
  }

  .item .icons {
    overflow: hidden;
    padding: 10px 20px 10px;
  }

  .item .icons i, .fav-counter i{
    cursor: pointer;
  }

  .item .icons .fa-heart {
    color: #f00
  }

/* Start fav-icon */
.fav-item {
  border: 2px solid #ccc;
  padding:13px
} 

.fav-item .border-bottom{border-bottom: 2px solid #ccc; padding: 10px}

.fav-item .item-img {
  width: 130px;
  height: 130px;
  background-color: #fff;
  padding: 2px;
  border: 1px solid #ccc
}

.fav-item .item-img img {
  width: 100%;
  height:100%
}

.fav-item .item-row{
  border-bottom: 2px solid #ccc;
  padding: 10px;
  
}

.fav-item .item-row:last-child{border-bottom:none}

.horisontal-centering {
  line-height:130px
}
  
</style>
