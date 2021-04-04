<template>
  <div class="card" :class="{'border-success':item.isAvailable(),'border-warning':!item.isAvailable()}">
    <!--          <Book :item="item" v-if="typeOfItem==='Book'"></Book>-->
    <!--          <Movie :item="item" v-if="typeOfItem==='Movie'"></Movie>-->
    <component :is="typeOfItem" :item="item" class="card-body"></component>
    <div class="card-footer">
      <button v-if="item.isAvailable()" @click="addToBag" class="btn btn-success">Add To Bag</button>
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
import musicVideo from "@/components/MusicVideo";
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
  methods:{
    addToBag() {
      console.log("adding "+this.item+" to bag");
      this.$emit('add-to-bag',Object.assign(Object.create(Object),this.item));
    }
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
    musicVideo,
    song,
    software,
    tvEpisode
  }
}
</script>

<style scoped>

</style>