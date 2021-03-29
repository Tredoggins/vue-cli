<template>
  <div class="card" :class="{'border-success':item.isAvailable(),'border-warning':!item.isAvailable()}">
    <!--          <Book :item="item" v-if="typeOfItem==='Book'"></Book>-->
    <!--          <Movie :item="item" v-if="typeOfItem==='Movie'"></Movie>-->
    <component :is="typeOfItem" :item="item" class="card-body"></component>
    <div class="card-footer">
      <button v-if="item.remove" class="btn btn-danger" @click="item.remove()">Delete</button>
    </div>
  </div>
</template>

<script>
import Book from "@/components/Book";
import Movie from "@/components/Movie";
import Album from "@/components/Album";
export default {
  name: "LibraryItem",
  props:{
    item:{
      type:Object,
      required:true
    },
  },
  computed:{
    typeOfItem(){
      return this.item.constructor.name;
    }
  },
  components:{
    Book,
    Movie,
    Album
  }
}
</script>

<style scoped>

</style>