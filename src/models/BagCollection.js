function BagItem(media,removeMethod){
    if(removeMethod){
        // media.remove=function(){
        //     removeMethod(this);
        // }
        media.remove=removeMethod;
    }
    return media;
}

export default function BagCollection() {
    let arr=[];
    arr.addItem=function(item){
        this.push(new BagItem(item,
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