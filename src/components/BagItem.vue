<template>
  <div class="card">
    <!--          <Book :item="item" v-if="typeOfItem==='Book'"></Book>-->
    <!--          <Movie :item="item" v-if="typeOfItem==='Movie'"></Movie>-->
    <component :is="typeOfItem" :item="item" class="card-body"></component>
    <div class="card-footer">
      <button v-if="item.remove" class="btn btn-danger" @click="item.remove()">Delete</button>
    </div>
  </div>
</template>

<script>
import book from "@/components/Book";
import featureMovie from "@/components/Movie";
import album from "@/components/Album";
import audiobook from "@/components/AudioBook";
import ebook from "@/components/EBook";
import podcast from "@/components/Podcast";
import song from "@/components/Song";
import software from "@/components/Software";
import tvEpisode from "@/components/TVEpisode";
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
      return this.item.kind;
    }
  },
  components:{
    book,
    featureMovie,
    album,
    audiobook,
    ebook,
    podcast,
    song,
    software,
    tvEpisode
  }
}
</script>

<style scoped>

</style>