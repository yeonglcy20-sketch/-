const songs = [
  // ✅ JPOP
  { title: "晩餐歌 (만찬가)", singer: "tuki", level: 3, genre: "JPOP" },
  { title: "17さいのうた｡ (17살의 노래)", singer: "Yuika", level: 3, genre: "JPOP" },
  { title: "貴方の恋人になりたい (당신의 연인이 되고 싶어)", singer: "ChoQMay", level: 3, genre: "JPOP" },
  { title: "愛を伝えたいだとか (사랑을 전하고 싶다든가)", singer: "aimyon", level: 3, genre: "JPOP" },
  { title: "なんでもないや (아무것도 아니야)", singer: "RADWIMPS", level: 3, genre: "JPOP" },
  { title: "好きだから (좋아하니까)", singer: "Yuika", level: 3, genre: "JPOP" },
  { title: "Finale (피날레)", singer: "eill", level: 3, genre: "JPOP" },
  { title: "Marigold (메리골드)", singer: "aimyon", level: 3, genre: "JPOP" },
  { title: "たぶん (아마도)", singer: "YOASOBI", level: 3, genre: "JPOP" },
  { title: "アイドル (아이돌)", singer: "YOASOBI", level: 3, genre: "JPOP" },
  { title: "明日への手紙 (내일로 보내는 편지)", singer: "Teshima Aoi", level: 3, genre: "JPOP" },
  { title: "変わらないもの", singer: "Oku Hanako", level: 3, genre: "JPOP" },
  { title: "左右盲", singer: "Yorushika", level: 3, genre: "JPOP" },
  { title: "たばこ (타바코)", singer: "Koresawa", level: 3, genre: "JPOP" },


  // ✅ 애교송
  { title: "모찌송", singer: "모찌멜로디", level: 3, genre: "애교송" },
  
  // ✅ 인디/발라드
  { title: "봄 내음보다 너를", singer: "김나영", level: 3, genre: "인디/발라드" },
  { title: "가벼운 꿈", singer: "최유리", level: 3, genre: "인디/발라드" },
  { title: "물망초", singer: "로코베리", level: 3, genre: "인디/발라드" },
  { title: "선인장", singer: "심규선", level: 3, genre: "인디/발라드" },
  { title: "이것밖에", singer: "최유리", level: 3, genre: "인디/발라드" },
  { title: "혼잣말", singer: "손디아", level: 3, genre: "인디/발라드" },
  { title: "향기", singer: "백아", level: 3, genre: "인디/발라드" },
  { title: "화월", singer: "우예린", level: 3, genre: "인디/발라드" },
  { title: "달빛하늘", singer: "려", level: 3, genre: "인디/발라드" },
  { title: "그래도 사랑이라고", singer: "최인경", level: 3, genre: "인디/발라드" },
  { title: "사라질 모든 것들에게", singer: "시월십사일", level: 3, genre: "인디/발라드" },
  { title: "외로움이라는건", singer: "최유리", level: 3, genre: "인디/발라드" },
  { title: "바람", singer: "초승", level: 3, genre: "인디/발라드" },
  { title: "시계바늘", singer: "권진아", level: 3, genre: "인디/발라드" },
  { title: "없던 일처럼", singer: "윤하", level: 3, genre: "인디/발라드" },
  { title: "수면제", singer: "로코베리", level: 3, genre: "인디/발라드" },
{ title: "Like a Moonlight", singer: "진효정", level: 3, genre: "인디/발라드" },
{ title: "fine", singer: "다린", level: 3, genre: "인디/발라드" },
{ title: "소나기", singer: "이클립스", level: 3, genre: "인디/발라드" },
{ title: "화분", singer: "다린", level: 3, genre: "인디/발라드" },
{ title: "누군가의 마음이 되면", singer: "예빛", level: 3, genre: "인디/발라드" },
{ title: "그런 날", singer: "윈터", level: 3, genre: "인디/발라드" },
{ title: "I miss you", singer: "로코베리", level: 3, genre: "인디/발라드" },
{ title: "always", singer: "윤미래", level: 3, genre: "인디/발라드" },
{ title: "너와", singer: "n@di", level: 3, genre: "인디/발라드" },
{ title: "누구도 괜찮지 않은 밤", singer: "옥상달빛", level: 3, genre: "인디/발라드" },
{ title: "나의 대답", singer: "강아솔", level: 3, genre: "인디/발라드" },
{ title: "덧칠", singer: "다린", level: 3, genre: "인디/발라드" },
{ title: "잠깐 멈춰 바라볼 때", singer: "승희", level: 3, genre: "인디/발라드" },
{ title: "선잠", singer: "제이레빗", level: 3, genre: "인디/발라드" },
{ title: "가리워진 길", singer: "볼빨간사춘기", level: 3, genre: "인디/발라드" },
{ title: "태양계", singer: "성시경", level: 3, genre: "인디/발라드" },
{ title: "잊어야 한다는 마음으로", singer: "김광석", level: 3, genre: "인디/발라드" },
{ title: "편지", singer: "김광진", level: 3, genre: "인디/발라드" },
{ title: "사랑이 지나가면", singer: "아이유", level: 3, genre: "인디/발라드" },
{ title: "마음을 드려요", singer: "아이유", level: 3, genre: "인디/발라드" },
{ title: "정거장", singer: "아이유", level: 3, genre: "인디/발라드" },
{ title: "겨울잠", singer: "아이유", level: 3, genre: "인디/발라드" },
{ title: "무릎", singer: "아이유", level: 3, genre: "인디/발라드" },
{ title: "바람꽃", singer: "아이유", level: 3, genre: "인디/발라드" },
{ title: "언젠가 설명이 필요한 밤", singer: "안녕하신가영", level: 3, genre: "인디/발라드" },
{ title: "인공위성", singer: "안녕하신가영", level: 3, genre: "인디/발라드" },
{ title: "겨울에서 봄", singer: "안녕하신가영", level: 3, genre: "인디/발라드" },
{ title: "여름밤", singer: "헤르쯔아날로그", level: 3, genre: "인디/발라드" },
{ title: "내 맘을 볼 수 있나요", singer: "헤이즈", level: 3, genre: "인디/발라드" },
{ title: "숲", singer: "최유리", level: 3, genre: "인디/발라드" },
{ title: "동그라미", singer: "최유리", level: 3, genre: "인디/발라드" },
{ title: "잘지내자, 우리", singer: "최유리", level: 3, genre: "인디/발라드" },
{ title: "테두리", singer: "백아", level: 3, genre: "인디/발라드" },
{ title: "그렇게 살아가는 것", singer: "허회경", level: 3, genre: "인디/발라드" },
{ title: "빈야드", singer: "우효", level: 3, genre: "인디/발라드" },
{ title: "민들레", singer: "우효", level: 3, genre: "인디/발라드" },
{ title: "답답한 새벽", singer: "스웨덴세탁소", level: 3, genre: "인디/발라드" },
{ title: "목소리", singer: "스웨덴세탁소", level: 3, genre: "인디/발라드" },
  { title: "부디", singer: "심규선", level: 3, genre: "인디/발라드" },

  // ✅ POP
  { title: "listen before i go", singer: "Billie Eilish", level: 3, genre: "POP" },
  { title: "six feet under", singer: "Billie Eilish", level: 3, genre: "POP" },
  { title: "Idontwannabeyouanymore", singer: "Billie Eilish", level: 3, genre: "POP" },
  { title: "dancing with your ghost", singer: "Sasha Sloan", level: 3, genre: "POP" },
  { title: "angel", singer: "Sarah McLachlan", level: 3, genre: "POP" },
  { title: "over the rainbow", singer: "Judy Garland", level: 3, genre: "POP" },
  { title: "moon river", singer: "Audrey Hepburn", level: 3, genre: "POP" },
  { title: "close to you", singer: "Carpenters", level: 3, genre: "POP" },
  { title: "Remember", singer: "Becky Hill & David Guetta", level: 3, genre: "POP" },
  { title: "snow spectacle", singer: "이제", level: 3, genre: "POP" },
  { title: "Once in a moon", singer: "Sarah Kang", level: 3, genre: "POP" },
  { title: "Lost stars", singer: "Keira Knightley", level: 3, genre: "POP" },
  { title: "Love is gone", singer: "slander", level: 3, genre: "POP" },
  { title: "Reality", singer: "라붐ost", level: 3, genre: "POP" },
  { title: "Ocean Eyes", singer: "Billie Eilish", level: 3, genre: "POP" },
  { title: "Silent", singer: "Sam ock", level: 3, genre: "POP" },
  { title: "Somewhere only we know", singer: "Keane", level: 3, genre: "POP" },
  { title: "A thousand years", singer: "christina perri", level: 3, genre: "POP" },
  { title: "Falling slowly", singer: "Glen Hansard & Markéta Irglová", level: 3, genre: "POP" }
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
