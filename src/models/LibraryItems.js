function LibraryItem(media,removeMethod){
    const STATUSES = {CHECKED_OUT:"out",AVAILABLE:'in'};
    media.status=STATUSES.AVAILABLE;
    media.checkIn=function () {
        this.status=STATUSES.AVAILABLE;
    };
    media.checkOut=function () {
        this.status=STATUSES.CHECKED_OUT;
    };
    media.isAvailable=function () {
        return this.status===STATUSES.AVAILABLE;
    }
    if(removeMethod){
        // media.remove=function(){
        //     removeMethod(this);
        // }
        media.remove=removeMethod;
    }
    return media;
}
function Book(title,pages){
    this.title=title;
    this.pages=pages;
    this.type=Book;
}
class Movie{
    constructor(title,runtime){
        this.title=title;
        this.runtime=runtime;
        this.type=Movie;
    }
}
function Album(title,artist,trackCount){
    this.title=title;
    this.artist=artist;
    this.trackCount=trackCount;
    this.type=Album;
}
export {LibraryItem,Book,Movie,Album};