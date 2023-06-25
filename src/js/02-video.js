import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const player_current_time = 'videoplayer-current-time';
const playerEl = document.querySelector('#vimeo-player');
const player = new Player(playerEl);
const saveCurrentTtime = throttle(() => {
    player.getCurrentTime().then(currentTime => {
        localStorage.setItem(player_current_time, JSON.stringify(currentTime));
    })
}, 1000);
player.on('timeupdate', saveCurrentTtime);

function restorPlaybackTime() {
    const currentTime = localStorage.getItem(player_current_time);
    player.setCurrentTime(currentTime || 0);
}
restorePlaybackTime();