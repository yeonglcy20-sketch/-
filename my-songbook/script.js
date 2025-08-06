const songs = [
  { title: "밤하늘의 별을", singer: "마크툽", level: 5, genre: "인디/발라드" },
  { title: "썸", singer: "소유 & 정기고", level: 3, genre: "POP" },
  { title: "좋은날", singer: "아이유", level: 4, genre: "인디/발라드" },
  { title: "벚꽃엔딩", singer: "버스커버스커", level: 2, genre: "인디/발라드" },
  { title: "Pretender", singer: "Official髭男dism", level: 4, genre: "JPOP" }
];

function updateFilters() {
  const keyword = document.getElementById('searchInput').value.toLowerCase();
  const level = parseInt(document.getElementById('levelFilter').value);
  const genre = document.getElementById('genreFilter').value;
  const sortBy = document.getElementById('sortBy').value;

  let filtered = songs.filter(song => {
    const matchesSearch =
      song.title.toLowerCase().includes(keyword) ||
      song.singer.toLowerCase().includes(keyword);

    const matchesLevel = level === 0 || song.level === level;
    const matchesGenre = genre === "all" || song.genre === genre;

    return matchesSearch && matchesLevel && matchesGenre;
  });

  // 정렬 처리
  filtered.sort((a, b) => {
    if (sortBy === 'title-asc') {
      return a.title.localeCompare(b.title);
    } else if (sortBy === 'title-desc') {
      return b.title.localeCompare(a.title);
    } else if (sortBy === 'singer-asc') {
      return a.singer.localeCompare(b.singer);
    } else if (sortBy === 'singer-desc') {
      return b.singer.localeCompare(a.singer);
    }
    return 0;
  });

  displaySongs(filtered);
}

function displaySongs(filteredSongs) {
  const list = document.getElementById('songList');
  list.innerHTML = '';

  filteredSongs.forEach(song => {
    const row = document.createElement('div');
    row.className = 'song-row';

    let starsHTML = '';
    for (let i = 1; i <= 5; i++) {
      starsHTML += `<span class="star ${i <= song.level ? 'filled' : ''}">★</span>`;
    }

    row.innerHTML = `
      <div class="col title">${song.title}</div>
      <div class="col singer">${song.singer}</div>
      <div class="col genre">${song.genre}</div>
      <div class="col level"><div class="stars">${starsHTML}</div></div>
    `;

    list.appendChild(row);
  });
}

document.getElementById('searchInput').addEventListener('input', updateFilters);
window.onload = updateFilters;
