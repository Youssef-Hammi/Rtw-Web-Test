function updateVideoSource() {
  const videoSource = document.getElementById("video-source");
  const video = document.getElementById("bg-video");

  // Check if the elements exist before updating the source
  if (videoSource && video) {
    if (window.innerWidth <= 768) { // Change based on your breakpoint
      videoSource.src = "assets/vidBgMb.mp4"; // Mobile version of the video
    } else {
      videoSource.src = "assets/Untitled video - Made with Clipchamp.mp4"; // Default desktop version
    }

    video.load(); // Reload the video with the new source
  }
}

// Update video source on page load
window.addEventListener('load', updateVideoSource);

// Update video source on window resize
window.addEventListener('resize', updateVideoSource);
