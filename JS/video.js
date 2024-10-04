// 1. Fetch, Load and show categories on html;

// create load categories;
const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error))
};

const loadVideos = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos))
    .catch((error) => console.log(error))
};
const displayCategories= (categories) => {
    const categoryContainer = document.getElementById('categories');

categories.forEach((item) => {
    console.log(item);
    
    // create a button;
    const button = document.createElement('button');
    button.classList = 'btn font-bold';
    button.innerText = item.category;


    // add btn to the html nav;
    categoryContainer.append(button);
    

})
}

// const cardDemo = {
//     "category_id": "1001",
//     "video_id": "aaaa",
//     "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//     "title": "Shape of You",
//     "authors": [
//             {
//                     "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
//                     "profile_name": "Olivia Mitchell",
//                     "verified": ""
//             }
//     ],
//     "others": {
//             "views": "100K",
//             "posted_date": "16278"
//     },
//     "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
// };
    



const displayVideos = (videos) => {
// console.log(videos);

const videoContainer = document.getElementById('videos-section');

videos.forEach((video) => {
    console.log(video);
    const card = document.createElement('div');
    card.classList = 'card card-compact' 
    card.innerHTML = `
     <figure class= "h-[200px]">
    <img
      src=${video.thumbnail}
      alt="Shoes" class="h-full w-full object-cover"/>
  </figure>
  <div class="px-0 py-2 flex gap-5 items-center">
    <div> <img class= "w-10 h-10 rounded-full object-cover" src = ${video.authors[0].profile_picture}> </div>
    <div> 
    <h2 class= "font-bold">${video.title}</h2>
    <div class="flex gap-2">
      <p>${video.authors[0].profile_name}</P>
      <img class= "w-5 h-5" src = "https://img.icons8.com/?size=100&id=D9RtvkuOe31p&format=png&color=000000"/>
    </div>
  
    </div>

  </div>
    `
    videoContainer.append(card);

})
};


loadCategories();
loadVideos();
