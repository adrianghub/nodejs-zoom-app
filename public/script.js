const videoGrid = document.getElementById('video-grid');

let videoStream;

const video = document.createElement('video');
video.muted = true; 

navigator.mediaDevices.getUserMedia({
  video: true,
  audio: true
}).then(stream => {
  videoStream = stream;
  addVideoStream(video, stream);
})

const addVideoStream = (video, stream) => {
  video.srcObject = stream;
  video.addEventListener('loadedmetadata', () => {
    video.play();
  })
  videoGrid.append(video);
}

