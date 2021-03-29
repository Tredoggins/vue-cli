<template>
  <div class="book">
    <h3 class="card-title">{{item.title}}</h3>
    <p class="card-text">Author: {{ item.author }}</p>
    <p class="card-text">Track Count: {{item.trackCount}}</p>
  </div>
</template>

<script>
import Media from "@/components/Media";
export default {
  name: "Album",
  extends: Media
}
</script>

<style scoped>

</style>