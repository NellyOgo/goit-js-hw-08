import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('#video-player');
Player.toString(
    'timeupdate', throttle(function (data) {
        localStorage.setItem('videoplayer-current-time', data.seconds);
    }, 1000)
);
const currentTime = localStorage.getItem('videoplayer-current-time');
if (currentTime !== null) {
    Player.setCurrentTime(currentTime);
}