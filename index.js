const api_key=`AIzaSyDy6eT6JBDFbzXvO3JqgOpIhJCdekop2UE`
const searchVideos=async ()=>{

      //3.fetch
try{
     const query=document.getElementById("query").value;
     const res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?autoplay=1&part=snippet&maxResults=20&chart=mostPopular&regionCode=us&key=${api_key}&q=${query}`)
    // const res=await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=20&chart=mostPopular&regionCode=us&key=${api_key}&q=${query}`);
    const data=await res.json();
    const actual_data=data.items
      console.log(actual_data)
       appendVideos(actual_data)
    
} catch(err){
    console.log('err',err);
}
}
 searchVideos()
const appendVideos= (data)=>{
document.getElementById("container").innerHTML=null;
data.forEach(({ snippet, id:{videoId}})=>{


const title=snippet.title;



const thumbnails=snippet.thumbnails.high.url;

const channelName=snippet.channelTitle;


const div=document.createElement("div");

const img=document.createElement('img');
img.src=thumbnails

const name=document.createElement('h4');
name.innerText=title;

const channel=document.createElement('h5');
channel.innerText=channelName;


let data={
  id:videoId,
  snippet:snippet
 }

 div.onclick=()=>{
  storeClickedvideo(data)

 }



div.append(img,name,channel);
document.getElementById("container").append(div);


})

}
function storeClickedvideo(data){
  localStorage.setItem('clicked_videos',JSON.stringify(data));

window.location.href='video.html';
}