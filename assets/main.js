const API =
  "https://youtube-v31.p.rapidapi.com/search?channelId=UCSNuWS_BSlSU_dv0p5i8H0Q&part=snippet%2Cid&order=date&maxResults=50";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "49b47972ddmsh17c08cdb4f22e9bp1c859fjsn032ec7f98fe3",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

const content = "" || document.getElementById("content");

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const videos = await fetchData(API);
    let view = `
    ${videos.items
      .map(
        (video) => `
    <div class="group relative">
        <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.snippet.thumbnails.high.url}" alt=${video.snippet.description}"" class="w-full" />
        </div>
        <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
            </h3>
        </div>
    </div>
    `,
      )
      .slice(0, 4)
      .join("")}
    `;
    content.innerHTML = view;
  } catch (error) {
    console.error(error);
  }
})();
