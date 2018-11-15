class YouTube {
  async getVideo(val, next) {
    const client_key = 'AIzaSyBW5DP-_idvY_0A9HFzdxKYZJvZApbVJ5I';
    let idsResponce;
    if (!next) {
      idsResponce = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${client_key}&type=video&part=snippet&maxResults=15&q=${val}`);
    } else {
      idsResponce = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${client_key}&type=video&part=snippet&maxResults=15&pageToken=${next}&q=${val}`);
    }
    const videosId = await idsResponce.json();
    const nextpage = videosId.nextPageToken;
    const ids = [];
    videosId.items.forEach(item => {
      ids.push(item.id.videoId);
    });
    ids.join(",");
    const videoResponce = await fetch(`https://www.googleapis.com/youtube/v3/videos?id=${ids}&key=${client_key}&part=snippet,statistics`);
    const videos = await videoResponce.json();
    return [videos, nextpage];
  }
}