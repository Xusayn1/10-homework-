// function youtube(title, time){
//     this.title = title
//     this.time= time
//     this.likes= Math.floor(Math.random()*1000)
//     this.dislike= Math.floor(Math.random()*1000)
//     this.views= Math.floor(Math.random()*1000)
// }

// console.log(new youtube("JavaScript Tutorial", "10:15"));

function Spotify(title, artist) {
    this.title = title 
    this.artist = artist
    this.listens =Math.floor(Math.random()*100000)
    this.duration =Math.floor(Math.random()*10)
    if (this.listens > 50_000)
        isPopular = true 
    else if (this.listens < 50_000)
        isPopular = false
    this.isPopular = this.isPopular 
}
console.log(Spotify('Shape of You', 'Ed Sheeran'))



