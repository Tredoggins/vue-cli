<template>
  <div class="book">
    Music Video
    <h3 class="card-title"><a :href="item.trackViewUrl">{{item.trackName}}</a></h3>
    <p class="card-text">Artist: <a :href="item.artistViewUrl">{{ item.artistName }}</a></p>
  </div>
</template>

<script>
import Media from "@/components/Media";
export default {
  name: "musicVideo",
  extends: Media
}
</script>

<style scoped>

</style>