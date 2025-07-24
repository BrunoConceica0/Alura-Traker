export default function formatTime(seconds: number): string {
  const min = String(Math.floor(seconds / 60)).padStart(2, "0");
  const sec = String(seconds % 60).padStart(2, "0");
  return `00:${min}:${sec}`;
}
