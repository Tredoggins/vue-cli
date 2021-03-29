<template>
  <div class="card-columns">
    <library-item v-for="(thing,i) in library" :item="thing" :key="i"></library-item>
    <!--            <div class="card" v-for="thing in library">-->
    <!--            <h3 class="card-title">{{thing.title}}</h3>
                    <p class="card-text" v-if="thing.pages">Pages: {{ thing.pages }}</p>
                    <p class="card-text" v-if="thing.runtime">Runtime: {{ thing.runtime }}</p>-->
    <!--            <Book :item="thing" v-if="typeOfItem(thing)=='Book'"></Book>-->
    <!--            <Movie :item="thing" v-if="typeOfItem(thing)=='Movie'"></Movie>-->
    <!--            </div>-->
  </div>
</template>

<script>
import LibraryItem from "@/components/LibraryItem";
export default {
  name: "Library",
  components:{
    LibraryItem
  },
  props:{
    library:{
      type:Object,
      required:true
    }
  }
}
</script>

<style scoped>

</style>