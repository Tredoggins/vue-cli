<template>
  <div class="book">
    Song
    <h3 class="card-title"><a :href="item.trackViewUrl">{{item.trackName}}</a><br><a :href="item.collectionViewUrl">{{item.collectionName}}</a></h3>
    <p class="card-text">Artist: <a :href="item.artistViewUrl">{{ item.artistName }}</a></p>
  </div>
</template>

<script>
import Media from "@/components/Media";
export default {
  name: "Song",
  extends: Media
}
</script>

<style scoped>

</style>