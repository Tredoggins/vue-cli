import {LibraryItem} from "@/models/LibraryItems";

export default function LibraryCollection() {
    this.__proto__=[];
    this.addItem=function(item){
        this.push(new LibraryItem(item,
            //(item)=>this.remove(item)
            ((collection)=>function(){
                collection.remove(this)
            })(this)
        ));
        return this;
    }
    this.remove=function(item){
        this.splice(this.indexOf(item),1);
        return this;
    }
}