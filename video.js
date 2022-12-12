const video_detailsdiv=document.getElementById('video_details')
    
const playVideo=()=>{

let {id}=JSON.parse(localStorage.getItem('clicked_videos'));


let iframe=document.createElement('iframe');
// we need to pass videoid?but which
// jispe click hua

iframe.src=`https://www.youtube.com/embed/${id}?`;
iframe.width='100%';
iframe.height='100%';
iframe.setAttribute('allowfullscreen',true)



video_detailsdiv.append(iframe);
// show video
// show videottitle
// show description
}