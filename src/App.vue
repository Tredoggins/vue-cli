<template>
  <div>
    <nav class="navbar bg-dark text-light">
      <span class="navbar-brand"><i class="fas fa-shopping-bag mx-2"></i> CHECK IT OUT!</span><span class="input-group w-25"><span class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></span><input type="text" class="form-control" placeholder="Search" v-model="search" @keyup="get"></span>
    </nav>

    <div id="app" class="container-fluid mt-3">
      <Library :library="library" v-on:add-to-bag="addToBag"></Library>
<!--      <div v-if="bag.length>0">-->
      {{bag.length}}
        <BagItem v-for="(item,i) in bag" :item="item" :key="i"></BagItem>
        <button @click="checkOutItems">Check Out</button>
<!--      </div>-->
    </div>
  </div>
</template>

<script>
import Library from "@/components/Library";
import LibraryCollection from "@/models/LibraryCollection";
import BagCollection from "@/models/BagCollection";
//import {Book,Movie,Album} from "@/models/LibraryItems";
import BagItem from "@/components/BagItem";
import axios from "axios";

export default {
  name: 'App',

  components: {
    Library,
    BagItem
  },

  data() {
    return {
      library:new LibraryCollection().addItem({}),
          // .addItem(new Book("Book Title 1",120))
          // .addItem(new Book("Book Title 2",200))
          // .addItem(new Movie("Movie Title 1",118))
          // .addItem(new Movie("Movie Title 2",92))
          // .addItem(new Album("Album Title 1","Artist 1",12))
          // .addItem(new Album("Album Title 2","Artist 1",13)),
      bag:new BagCollection().addItem({}),
          //.addItem(new Album("Album Title 3","Artist 2",11)),
      search:""
    }
  },
  methods:{
    addToBag(item){
      //console.log(item);
      //console.log(this.bag);
      this.bag.addItem(item);
    },
    checkOutItems(){
      //console.log(this.bag);
      for (let i=this.bag.length-1;i>=0;i--) {
        //let vals=Object.values(this.bag[i]);
        // this.library[this.library.findIndex(el=>Object.values(el).every((val)=>{
        //   if(typeof val==="number"||typeof val==="string"){
        //     //console.log(val,vals);
        //     return vals.indexOf(val)>-1;
        //   }
        //   return true;
        // }))].checkOut();
        this.library.find(el=>{
          if(this.bag[i].trackId){
            return (el.trackId===this.bag[i].trackId);
          }
          else if(el.collectionId){
            return el.collectionId===this.bag[i].collectionId;
          }
          return false;
        }).checkOut();
        console.log(this.library.find(el=>{
          if(this.bag[i].trackId){
            return (el.trackId===this.bag[i].trackId);
          }
          else if(el.collectionId){
            return el.collectionId===this.bag[i].collectionId;
          }
          return false;
        }));
        this.bag.splice(i,1);
      }
    },
    get(){
      this.library.splice(0,this.library.length);
      if(this.search){
        let url="https://itunes.apple.com/search";
        let config={
          params:{
            term:this.search,
            country:"US",
            limit:12,
            media:"software"
          }
        }
        axios.get(url,config)
            .then((response)=>{
              console.log(response);
              for(let i=0;i<response.data.resultCount;i++){
                if(response.data.results[i].wrapperType==="audiobook"){
                  response.data.results[i].kind="audiobook";
                }
                this.library.addItem(response.data.results[i]);
              }
            });
      }
    }
  },
  computed:{

  },
  mounted() {
    //this.library.remove(this.library[3]);
    this.library.splice(0,this.library.length);
    this.bag.splice(0,this.bag.length);
    //this.get();
  },
  created() {
    this.get();
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
