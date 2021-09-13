export default function() {
  return {
    robots: localStorage.getItem("robots")
      ? JSON.parse(localStorage.getItem("robots"))
      : JSON.parse(JSON.stringify([])),
    robotsTasks: localStorage.getItem("robotsTasks")
      ? JSON.parse(localStorage.getItem("robotsTasks"))
      : [],
  };
}
