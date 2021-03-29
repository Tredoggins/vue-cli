<template>
  <div>
    <nav class="navbar bg-dark text-light">
      <span class="navbar-brand"><i class="fas fa-shopping-bag mx-2"></i> CHECK IT OUT!</span>
    </nav>

    <div id="app" class="container-fluid mt-3">
      <Library :library="library" v-on:add-to-bag="addToBag"></Library>
      <LibraryItem v-for="(item,i) in bag" :item="item" :key="i"></LibraryItem>
      <button @click="checkOutItems">Check Out</button>
    </div>
  </div>
</template>

<script>
import Library from "@/components/Library";
import LibraryCollection from "@/models/LibraryCollection";
import BagCollection from "@/models/BagCollection";
import {Book,Movie,Album} from "@/models/LibraryItems";
import LibraryItem from "@/components/LibraryItem";

export default {
  name: 'App',

  components: {
    LibraryItem,
    Library
  },

  data() {
    return {
      library:new LibraryCollection()
          .addItem(new Book("Book Title 1",120))
          .addItem(new Book("Book Title 2",200))
          .addItem(new Movie("Movie Title 1",118))
          .addItem(new Movie("Movie Title 2",92))
          .addItem(new Album("Album Title 1","Artist 1",12))
          .addItem(new Album("Album Title 2","Artist 1",13)),
      bag:new BagCollection()
          // .addItem(new Album("Album Title 3","Artist 2",11))
    }
  },
  methods:{
    addToBag(item){
      console.log(item);
      this.bag.addItem(Object.create(item));
    },
    checkOutItems(){
      console.log(this.bag);
      for (let i=this.bag.length-1;i>=0;i--) {
        this.library[this.library.findIndex(el=>Object.values(el)===Object.values(this.bag[i]))].checkOut();
        this.bag.splice(i,1);
      }
    }
  },
  mounted() {
    //this.library.remove(this.library[3]);
  }
};
</script>
<style lang="scss">
  div{
    h3{
      text-transform: uppercase;
    }
  }
</style>
