export function usePlayMP3() {
  if (typeof window === "undefined") {
    return { play: () => {}, pause: () => {}, stop: () => {} };
  }

  const filePath = "/videos/WindowsXpSound.mp3";
  const audio = new Audio(filePath);

  const play = async () => {
    try {
      await audio.play();
      console.log("Audio is playing...");
    } catch (error) {
      console.error("Error playing the audio:", error);
    }
  };

  const pause = () => {
    if (!audio.paused) {
      audio.pause();
      console.log("Audio is paused.");
    }
  };

  const stop = () => {
    audio.pause();
    audio.currentTime = 0;
    console.log("Audio is stopped.");
  };

  return { play, pause, stop };
}
