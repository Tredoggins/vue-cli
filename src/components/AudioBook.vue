<template>
  <div class="book">
    Audiobook
    <h3 class="card-title"><a :href="item.collectionViewUrl">{{item.collectionName}}</a></h3>
    <p class="card-text">Author: <a :href="item.artistViewUrl">{{ item.artistName }}</a></p>
  </div>
</template>

<script>
import Media from "@/components/Media";
export default {
  name: "audiobook",
  extends: Media
}
</script>

<style scoped>

</style>