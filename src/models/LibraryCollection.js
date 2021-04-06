import {LibraryItem} from "@/models/LibraryItems";

export default function LibraryCollection() {
    let arr=[];
    arr.addItem=function(item){
        this.push(new LibraryItem(item,
            //(item)=>this.remove(item)
            ((collection)=>function(){
                collection.remove(this)
            })(this)
        ));
        return this;
    }
    arr.remove=function(item){
        this.splice(this.indexOf(item),1);
        return this;
    }
    return arr;
}