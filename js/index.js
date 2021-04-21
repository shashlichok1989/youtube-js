const API_KEY = 'AIzaSyB-QvEgrC08s2Oj_Zlfk652wOgPBl0NBoc';
const CLIENT_ID = '970151019314-jnee9u3re8teamgm82d8ntbi152fr1ni.apps.googleusercontent.com';

const gloAcademyList = document.querySelector('.glo-academy-list');
const trendingList = document.querySelector('.trending-list');
const musicList = document.querySelector('.music-list');


const createCard = (dataVideo) => {
  console.log(dataVideo);

  const imgUrl = dataVideo.snippet.thumbnails.high.url;
  const videoId = dataVideo.id.videoId;
  const titleVideo = dataVideo.snippet.title;
  const dateVideo = dataVideo.snippet.publishedAt;
  const channelTitle = dataVideo.snippet.channelTitle;

  const card = document.createElement('div');
  card.classList.add('video-card');
  card.innerHTML = `
            <div class="video-thumb">
              <a class="link-video youtube-modal" href="https://youtu.be/${videoId}">
                <img src="${imgUrl}" alt="" class="thumbnail">
              </a>
            </div>
            <h3 class="video-title">${titleVideo}</h3>
            <div class="video-info">
              <span class="video-counter">
              <span class="video-date">${dateVideo}</span>
              </span>
              <span class="video-channel">${channelTitle}</span>
            </div>
          `;

  return card;
}

const createList = (wrapper, listVideo) => {
  wrapper.textContent = '';

  listVideo.forEach(item => {
    const card = createCard(item);
    wrapper.append(card)
  });
      //for (let i = 0; i < listVideo.length; i++) {
      //wrapper += listVideo[i]; } - второй вариант функции для просмотра каждого элемента массива
};

createList(gloAcademyList, gloAcademy);
createList(trendingList, trending);
createList(musicList, music);