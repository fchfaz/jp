const RAW = [
  ["aimasu", "bertemu, berjumpa", "あいます", 1],
  ["asobimasu", "bermain", "あそびます", 1],
  ["araimasu", "mencuci (tangan)", "あらいます", 1],
  ["arimasu", "ada", "あります", 1],
  ["arukimasu", "berjalan kaki", "あるきます", 1],
  ["chikaimasu", "bersumpah, berjanji", "ちかいます", 1],
  ["dashimasu", "mengeluarkan, mengirim (surat), menyerahkan", "だします", 1],
  ["furimasu", "turun (hujan, salju)", "ふります", 1],
  ["haraimasu", "membayar", "はらいます", 1],
  ["hashirimasu", "berlari", "はしります", 1],
  ["hatarakimasu", "bekerja", "はたらきます", 1],
  ["hikimasu", "menarik", "ひきます", 1],
  ["hikarimasu", "bersinar", "ひかります", 1],
  ["hirakimasu", "membuka", "ひらきます", 1],
  ["hodokimasu", "membuka ikatan, melepas ikatan", "ほどきます", 1],
  ["iimasu", "berkata, mengatakan", "いいます", 1],
  ["ikimasu", "pergi", "いきます", 1],
  ["irimasu", "memerlukan", "いります", 1],
  ["isogimasu", "terburu-buru", "いそぎます", 1],
  ["kaburimasu", "memakai (topi)", "かぶります", 1],
  ["kaeshimasu", "mengembalikan", "かえします", 1],
  ["kaerimasu", "pulang", "かえります", 1],
  ["kaimasu", "membeli", "かいます", 1],
  ["kakarimasu", "memerlukan, memakan (waktu, uang)", "かかります", 1],
  ["kakimasu", "menulis, menggambar, melukis", "かきます", 1],
  ["kashimasu", "meminjamkan", "かします", 1],
  ["katsumasu", "menang", "かつます", 1],
  ["keshimasu", "menghapus", "けします", 1],
  ["kikimasu", "mendengar, bertanya", "ききます", 1],
  ["kirimasu", "memotong, menggunting", "きります", 1],
  ["koorimasu", "membeku", "こおります", 1],
  ["koshimasu", "menyaring", "こします", 1],
  ["kurimasu", "memutar", "くります", 1],
  ["machimasu", "menunggu", "まちます", 1],
  ["magarimasu", "belok (kanan, kiri)", "まがります", 1],
  ["mairimasu", "datang", "まいります", 1],
  ["mamorimasu", "melindungi", "まもります", 1],
  ["mawashimasu", "memutar", "まわします", 1],
  ["mochimasu", "memegang, membawa, memiliki", "もちます", 1],
  ["modorimasu", "kembali", "もどります", 1],
  ["moraimasu", "menerima", "もらいます", 1],
  ["motteikimasu", "pergi membawa", "もっていきます", 1],
  ["narabimasu", "berbaris", "ならびます", 1],
  ["naraimasu", "belajar", "ならいます", 1],
  ["narimasu", "menjadi", "なります", 1],
  ["negaimasu", "berharap", "ねがいます", 1],
  ["noborimasu", "mendaki", "のぼります", 1],
  ["nomimasu", "minum", "のみます", 1],
  ["norimasu", "naik", "のります", 1],
  ["nugimasu", "membuka, melepaskan", "ぬぎます", 1],
  ["okurimasu", "mengirim, mengantar", "おくります", 1],
  ["omoidashimasu", "teringat", "おもいだします", 1],
  ["omoimasu", "mengira, merasa", "おもいます", 1],
  ["oshimasu", "menekan, mendorong", "おします", 1],
  ["owarimasu", "habis, selesai", "おわります", 1],
  ["oyogimasu", "berenang", "およぎます", 1],
  ["sagashimasu", "mencari", "さがします", 1],
  ["sawarimasu", "menyentuh, memegang", "さわります", 1],
  ["shikarimasu", "memarahi", "しかります", 1],
  ["shinobimasu", "bersembunyi, menyelinap", "しのびます", 1],
  ["shirimasu", "tahu, mengetahui", "しります", 1],
  ["suimasu", "merokok, menghisap", "すいます", 1],
  ["sumimasu", "tinggal, bermukim", "すみます", 1],
  ["suwarimasu", "duduk", "すわります", 1],
  ["tachimasu", "berdiri", "たちます", 1],
  ["tomarimasu", "menginap, bermalam", "とまります", 1],
  ["torimasu", "mengambil, memotret", "とります", 1],
  ["tsukaimasu", "memakai, menggunakan", "つかいます", 1],
  ["tsukimasu", "tiba, sampai", "つきます", 1],
  ["tsukurimasu", "membuat, memproduksi", "つくります", 1],
  ["tsureteikimasu", "pergi mengantar (orang lain)", "つれていきます", 1],
  ["ugokimasu", "bergerak", "うごきます", 1],
  ["umimasu", "melahirkan", "うみます", 1],
  ["urimasu", "menjual", "うります", 1],
  ["utaimasu", "bernyanyi", "うたいます", 1],
  ["wakarimasu", "mengerti", "わかります", 1],
  ["watarimasu", "menyeberang", "わたります", 1],
  ["watashimasu", "memberikan", "わたします", 1],
  ["yakunitachimasu", "berguna, berfaedah, bermanfaat", "やくにたちます", 1],
  ["yasumimasu", "beristirahat", "やすみます", 1],
  ["yobimasu", "memanggil", "よびます", 1],
  ["yomimasu", "membaca", "よみます", 1],
  ["abimasu", "mandi", "あびます", 2],
  ["agemasu", "memberikan", "あげます", 2],
  ["akemasu", "membuka", "あけます", 2],
  ["atsumemasu", "mengumpulkan", "あつめます", 2],
  ["chigaimasu", "berbeda", "ちがいます", 2],
  ["dekakemasu", "pergi keluar, berangkat keluar", "でかけます", 2],
  ["dekimasu", "dapat, bisa, mampu", "できます", 2],
  ["demasu", "keluar", "でます", 2],
  ["fumimasu", "menginjak", "ふみます", 2],
  ["furemasu", "menyentuh", "ふれます", 2],
  ["hairimasu", "masuk", "はいります", 2],
  ["hajimemasu", "memulai", "はじめます", 2],
  ["hakimasu", "memakai (sepatu, celana)", "はきます", 2],
  ["hanashimasu", "berbicara", "はなします", 2],
  ["imasu", "ada", "います", 2],
  ["iremasu", "memasukkan", "いれます", 2],
  ["kaemasu", "mengganti, menukar, mengubah", "かえます", 2],
  ["kakaemasu", "menyandang, membawa", "かかえます", 2],
  ["kakemasu", "menelepon", "かけます", 2],
  ["kakuremasu", "bersembunyi", "かくれます", 2],
  ["kangaemasu", "memikirkan", "かんがえます", 2],
  ["katazukemasu", "merapikan", "かたづけます", 2],
  ["kimasu", "memakai (pakaian)", "きます", 2],
  ["kiotsukemasu", "berhati-hati", "きをつけます", 2],
  ["konashimasu", "menjalankan", "こなします", 2],
  ["kotaemasu", "menjawab", "こたえます", 2],
  ["kubemasu", "memasukkan (ke dalam wadah)", "くべます", 2],
  ["kuremasu", "memberi (kepada saya)", "くれます", 2],
  ["makemasu", "kalah", "まけます", 2],
  ["manemasu", "meniru", "まねます", 2],
  ["miemasu", "terlihat", "みえます", 2],
  ["mimasu", "melihat, menonton", "みます", 2],
  ["misemasu", "memperlihatkan", "みせます", 2],
  ["mochiagemasu", "mengangkat barang", "もちあげます", 2],
  ["moukemasu", "menghasilkan", "もうけます", 2],
  ["mukaemasu", "menjemput", "むかえます", 2],
  ["nakushimasu", "hilang, kehilangan", "なくします", 2],
  ["naoshimasu", "memperbaiki, membetulkan", "なおします", 2],
  ["nemasu", "tidur", "ねます", 2],
  ["norikaemasu", "ganti kendaraan, pindah kendaraan", "のりかえます", 2],
  ["oboemasu", "mengingat, menghapal", "おぼえます", 2],
  ["okimasu", "bangun", "おきます", 2],
  ["orimasu", "turun", "おります", 2],
  ["oshiemasu", "mengajar, memberitahukan (alamat)", "おしえます", 2],
  ["otoshimasu", "menjatuhkan", "おとします", 2],
  ["shiagemasu", "menyelesaikan", "しあげます", 2],
  ["shimemasu", "menutup", "しめます", 2],
  ["shirabemasu", "memeriksa, menyelidiki", "しらべます", 2],
  ["sodatemasu", "membesarkan", "そだてます", 2],
  ["soroemasu", "menyusun", "そろえます", 2],
  ["suemasu", "menempatkan", "すえます", 2],
  ["sutemasu", "membuang", "すてます", 2],
  ["tabemasu", "makan", "たべます", 2],
  ["tarimasu", "cukup, mencukupi", "たります", 2],
  ["tasukemasu", "menyelamatkan, menolong", "たすけます", 2],
  ["tatemasu", "membangun", "たてます", 2],
  ["tetsudaimasu", "membantu", "てつだいます", 2],
  ["tojimasu", "menutup", "とじます", 2],
  ["tomemasu", "menghentikan", "とめます", 2],
  ["tsukaremasu", "capek, lelah", "つかれます", 2],
  ["tsukemasu", "menyalakan", "つけます", 2],
  ["tsutaemasu", "menyampaikan", "つたえます", 2],
  ["umaremasu", "lahir, dilahirkan", "うまれます", 2],
  ["wasuremasu", "lupa", "わすれます", 2],
  ["yaburimasu", "merusak", "やぶります", 2],
  ["yamemasu", "berhenti, meninggalkan (perusahaan)", "やめます", 2],
  ["annaishimasu", "mengantarkan untuk melihat-lihat", "あんないします", 3],
  ["anteishimasu", "menstabilkan", "あんていします", 3],
  ["benkyoushimasu", "belajar", "べんきょうします", 3],
  ["chuumokushimasu", "berfokus pada", "ちゅうもくします", 3],
  ["denwashimasu", "menelepon", "でんわします", 3],
  ["enchoushimasu", "memperpanjang", "えんちょうします", 3],
  ["henshinshimasu", "berubah bentuk", "へんしんします", 3],
  ["hikkoshimasu", "pindah rumah", "ひっこします", 3],
  ["houkyuushimasu", "memasok ulang, mengisi ulang", "ほきゅうします", 3],
  ["kaimonoshimasu", "berbelanja", "かいものします", 3],
  ["kekkonshimasu", "menikah", "けっこんします", 3],
  ["kengakushimasu", "meninjau", "けんがくします", 3],
  ["kenkyuushimasu", "meneliti", "けんきゅうします", 3],
  ["kimasu", "datang", "きます", 3],
  ["kopiishimasu", "mengcopy", "コピーします", 3],
  ["koukanshimasu", "bertukar", "こうかんします", 3],
  ["kurikaeshimasu", "mengulang", "くりかえします", 3],
  ["mottekimasu", "membawa, datang membawa", "もってきます", 3],
  ["renshuushimasu", "berlatih", "れんしゅうします", 3],
  ["ryuugakushimasu", "belajar di luar negeri", "りゅうがくします", 3],
  ["sankashimasu", "berpartisipasi, mengikuti, ikut serta", "さんかします", 3],
  ["sanposhimasu", "berjalan-jalan santai", "さんぽします", 3],
  ["sekkeishimasu", "merancang", "せっけいします", 3],
  ["sentakushimasu", "mencuci (pakaian)", "せんたくします", 3],
  ["setsumeishimasu", "menjelaskan, menerangkan", "せつめいします", 3],
  ["shihaishimasu", "memerintah, menguasai", "しはいします", 3],
  ["shigotoshimasu", "bekerja", "しごとします", 3],
  ["shijimasu", "memerintah", "しじます", 3],
  ["shikenshimasu", "menguji", "しけんします", 3],
  ["shimasu", "mengerjakan, berbuat, melakukan", "します", 3],
  ["shinpaishimasu", "khawatir, cemas", "しんぱいします", 3],
  ["shitsumonshimasu", "bertanya", "しつもんします", 3],
  ["shokujishimasu", "makan", "しょくじします", 3],
  ["shoukaishimasu", "memperkenalkan", "しょうかいします", 3],
  ["shucchoushimasu", "dinas keluar kota", "しゅっちょうします", 3],
  ["shuugoushimasu", "berkumpul", "しゅうごうします", 3],
  ["shuurishimasu", "memperbaiki", "しゅうりします", 3],
  ["soujishimasu", "membersihkan (kamar)", "そうじします", 3],
  ["taiikushimasu", "berolahraga", "たいいくします", 3],
  ["tsuretekimasu", "membawa, datang mengantar (orang)", "つれてきます", 3],
  ["untenshimasu", "mengemudikan, menjalankan", "うんてんします", 3],
  ["yoyakushimasu", "memesan", "よやくします", 3],
  ["zangyoushimasu", "lembur (kerja)", "ざんぎょうします", 3]
];

const VOCAB = [];
const seen = new Set();
RAW.forEach(([jp,id,hira,group]) => {
  const key = jp + '|' + id + '|' + group;
  if (!seen.has(key)) { seen.add(key); VOCAB.push({jp, id, hira, group, status: 'unseen'}); }
});

let deck = [...VOCAB.map((_,i) => i)];
let cur = 0;
let flipped = false;
let cardFilter = 'all';
let listFilter = 'all';
let listSearch = '';
let fcSearch = '';
let showHira = false;
let groupFilter = 'all';
let qCorrect = 0, qWrong = 0, qAnswered = false;

function getGroupIndices() {
  if (groupFilter === 'all') return VOCAB.map((_,i) => i);
  return VOCAB.map((_,i) => i).filter(i => String(VOCAB[i].group) === groupFilter);
}

function getFiltered() {
  let indices = getGroupIndices();
  if (cardFilter === 'known') indices = indices.filter(i => VOCAB[i].status === 'known');
  else if (cardFilter === 'unknown') indices = indices.filter(i => VOCAB[i].status !== 'known');
  if (fcSearch) {
    const s = fcSearch.toLowerCase();
    indices = indices.filter(i => VOCAB[i].jp.toLowerCase().includes(s) || VOCAB[i].id.toLowerCase().includes(s));
  }
  return indices;
}

function setGroup(g) {
  groupFilter = g;
  ['all','1','2','3'].forEach(k => {
    document.getElementById('gbtn-'+k).classList.toggle('active', k === g);
  });
  updateStats();
  initDeck();
  renderList();
  initQuiz();
}

function toggleHiragana() {
  showHira = !showHira;
  const btn = document.getElementById('toggle-hira-btn');
  btn.classList.toggle('on', showHira);
  btn.innerHTML = `<span class="hira-preview">あ</span> ${showHira ? 'Sembunyikan' : 'Tampilkan'} Hiragana`;
  const hiraEl = document.getElementById('fc-hira');
  hiraEl.classList.toggle('visible', showHira);
}

function updateStats() {
  const pool = getGroupIndices().map(i => VOCAB[i]);
  const known = pool.filter(v => v.status === 'known').length;
  const unknown = pool.filter(v => v.status === 'unknown').length;
  const unseen = pool.filter(v => v.status === 'unseen').length;
  document.getElementById('stat-known').textContent = known + ' hafal';
  document.getElementById('stat-unknown').textContent = unknown + ' belum';
  document.getElementById('stat-unseen').textContent = unseen + ' belum dilihat';
}

function initDeck() {
  deck = getFiltered();
  cur = 0;
  flipped = false;
  document.getElementById('flip-card').classList.remove('flipped');
  document.getElementById('done-screen').style.display = 'none';
  document.getElementById('flip-container').style.display = 'block';
  document.querySelectorAll('.card-controls, .shuffle-btn, .kb-hints').forEach(el => el.style.display = '');
  renderCard();
}

function renderCard() {
  if (deck.length === 0) { showDone(); return; }
  const idx = deck[cur];
  const v = VOCAB[idx];
  document.getElementById('fc-jp').textContent = v.jp;
  document.getElementById('fc-hira').textContent = v.hira || v.jp;
  document.getElementById('fc-id').textContent = v.id;
  document.getElementById('fc-num').textContent = cur + 1;
  document.getElementById('fc-num2').textContent = cur + 1;
  document.getElementById('fc-hint2').textContent = v.jp;
  document.getElementById('card-cur').textContent = cur + 1;
  document.getElementById('card-total').textContent = deck.length;
  const pct = deck.length > 1 ? (cur / (deck.length - 1)) * 100 : 100;
  document.getElementById('prog-fill').style.width = pct + '%';
  flipped = false;
  document.getElementById('flip-card').classList.remove('flipped');
}

function flipCard() {
  flipped = !flipped;
  document.getElementById('flip-card').classList.toggle('flipped', flipped);
}

function nextCard() {
  if (cur < deck.length - 1) { cur++; renderCard(); }
  else showDone();
}

function prevCard() {
  if (cur > 0) { cur--; renderCard(); }
}

function markCard(known) {
  const idx = deck[cur];
  VOCAB[idx].status = known ? 'known' : 'unknown';
  updateStats();
  renderList();
  nextCard();
}

function shuffleCards() {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  cur = 0; renderCard();
}

function showDone() {
  document.getElementById('done-screen').style.display = 'block';
  document.getElementById('flip-container').style.display = 'none';
  document.querySelectorAll('.card-controls, .shuffle-btn, .kb-hints').forEach(el => el.style.display = 'none');
  const known = VOCAB.filter(v => v.status === 'known').length;
  const unknown = VOCAB.filter(v => v.status === 'unknown').length;
  document.getElementById('done-known').textContent = known;
  document.getElementById('done-unknown').textContent = unknown;
}

function restartCards() {
  initDeck();
}

function setFilter(f) {
  cardFilter = f;
  ['all','unknown','known'].forEach(k => {
    document.getElementById('fbtn-'+k).classList.toggle('active', k === f);
  });
  initDeck();
}

function doSearch(val) {
  fcSearch = val;
  initDeck();
}

let quizPool = [];
let quizIdx = 0;

function initQuiz() {
  quizPool = shuffle([...getGroupIndices()]);
  quizIdx = 0; qCorrect = 0; qWrong = 0;
  updateQuizScore();
  renderQuiz();
}

function shuffle(arr) {
  for (let i = arr.length-1; i > 0; i--) {
    const j = Math.floor(Math.random()*(i+1));
    [arr[i],arr[j]] = [arr[j],arr[i]];
  }
  return arr;
}

function renderQuiz() {
  if (quizIdx >= quizPool.length) {
    document.getElementById('q-hira').textContent = '';
    document.getElementById('q-word').textContent = '🎉 Selesai!';
    document.getElementById('q-options').innerHTML = '';
    document.getElementById('q-feedback').textContent = `Skor: ${qCorrect} benar dari ${qCorrect+qWrong} soal`;
    document.getElementById('q-next-btn').textContent = 'Mulai Lagi';
    document.getElementById('q-next-btn').style.display = 'inline-flex';
    document.getElementById('q-next-btn').onclick = () => { initQuiz(); };
    return;
  }

  qAnswered = false;
  const idx = quizPool[quizIdx];
  const correct = VOCAB[idx];
  const askId = Math.random() > 0.5;
  document.getElementById('q-direction').textContent = askId ? 'Apa arti kata ini?' : 'Kotoba apa yang artinya:';
  document.getElementById('q-word').textContent = askId ? correct.jp : correct.id;
  const qHira = document.getElementById('q-hira');
  qHira.textContent = askId ? (correct.hira || '') : '';

  let wrongPool = getGroupIndices().filter(i => i !== idx).map(i => VOCAB[i]);
  if (wrongPool.length < 3) wrongPool = VOCAB.filter((_,i) => i !== idx);
  shuffle(wrongPool);
  const wrongs = wrongPool.slice(0, 3);

  const container = document.getElementById('q-options');
  container.innerHTML = '';

  if (askId) {
    const opts = shuffle([...wrongs.map(v => v.id), correct.id]);
    opts.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'quiz-opt';
      btn.textContent = opt;
      btn.onclick = () => checkAnswerText(btn, opt, correct.id, container);
      container.appendChild(btn);
    });
  } else {
    const allOpts = shuffle([...wrongs.map(v => ({jp: v.jp, hira: v.hira})), {jp: correct.jp, hira: correct.hira}]);
    allOpts.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'quiz-opt';
      btn.innerHTML = `<span class="quiz-opt-hira">${opt.hira || opt.jp}</span><span class="quiz-opt-rom">${opt.jp}</span>`;
      btn.dataset.jp = opt.jp;
      btn.onclick = () => checkAnswerJp(btn, opt.jp, correct.jp, container, correct.hira);
      container.appendChild(btn);
    });
  }

  document.getElementById('q-feedback').textContent = '';
  document.getElementById('q-feedback').className = 'quiz-feedback';
  document.getElementById('q-next-btn').style.display = 'none';
}

function checkAnswerText(btn, chosen, correct, container) {
  if (qAnswered) return;
  qAnswered = true;
  const isCorrect = chosen === correct;
  if (isCorrect) { btn.classList.add('correct'); qCorrect++; }
  else {
    btn.classList.add('wrong');
    Array.from(container.children).forEach(b => {
      if (b.textContent === correct) b.classList.add('correct');
    });
    qWrong++;
  }
  Array.from(container.children).forEach(b => b.disabled = true);
  const fb = document.getElementById('q-feedback');
  fb.textContent = isCorrect ? '✓ Benar!' : `✗ Salah. Jawabannya: ${correct}`;
  fb.className = 'quiz-feedback ' + (isCorrect ? 'right' : 'wrong');
  updateQuizScore();
  document.getElementById('q-next-btn').style.display = 'inline-flex';
  document.getElementById('q-next-btn').onclick = nextQuiz;
}

function checkAnswerJp(btn, chosen, correct, container, correctHira) {
  if (qAnswered) return;
  qAnswered = true;
  const isCorrect = chosen === correct;
  if (isCorrect) { btn.classList.add('correct'); qCorrect++; }
  else {
    btn.classList.add('wrong');
    Array.from(container.children).forEach(b => {
      if (b.dataset.jp === correct) b.classList.add('correct');
    });
    qWrong++;
  }
  Array.from(container.children).forEach(b => b.disabled = true);
  const fb = document.getElementById('q-feedback');
  fb.textContent = isCorrect ? '✓ Benar!' : `✗ Salah. Jawabannya: ${correctHira || correct} (${correct})`;
  fb.className = 'quiz-feedback ' + (isCorrect ? 'right' : 'wrong');
  updateQuizScore();
  document.getElementById('q-next-btn').style.display = 'inline-flex';
  document.getElementById('q-next-btn').onclick = nextQuiz;
}

function nextQuiz() {
  quizIdx++;
  renderQuiz();
}

function updateQuizScore() {
  document.getElementById('q-correct').textContent = qCorrect;
  document.getElementById('q-wrong').textContent = qWrong;
  document.getElementById('q-total-q').textContent = qCorrect + qWrong;
}

function renderList() {
  let items = getGroupIndices().map(i => ({...VOCAB[i], i}));
  if (listFilter === 'known') items = items.filter(v => v.status === 'known');
  else if (listFilter === 'unknown') items = items.filter(v => v.status !== 'known');
  if (listSearch) {
    const s = listSearch.toLowerCase();
    items = items.filter(v => v.jp.toLowerCase().includes(s) || v.id.toLowerCase().includes(s));
  }
  const grid = document.getElementById('vocab-grid');
  grid.innerHTML = items.map(v => `
    <div class="vocab-item ${v.status === 'known' ? 'known' : v.status === 'unknown' ? 'unknown' : ''}">
      <div class="vocab-jp">${v.jp}</div>
      ${v.hira ? `<div class="vocab-hira">${v.hira}</div>` : ''}
      <div class="vocab-id">${v.id}</div>
      <span class="vocab-mark">${v.status === 'known' ? '✓' : v.status === 'unknown' ? '✗' : ''}</span>
    </div>
  `).join('');
}

function filterList(val) {
  listSearch = val;
  renderList();
}

function setListFilter(f) {
  listFilter = f;
  ['all','unknown','known'].forEach(k => {
    document.getElementById('lbtn-'+k).classList.toggle('active', k === f);
  });
  renderList();
}

function setMode(mode) {
  ['flashcard','quiz','list'].forEach(m => {
    document.getElementById('mode-'+m).style.display = m === mode ? 'block' : 'none';
  });
  document.querySelectorAll('.tab').forEach((t,i) => {
    t.classList.toggle('active', ['flashcard','quiz','list'][i] === mode);
  });
  if (mode === 'quiz') initQuiz();
  if (mode === 'list') renderList();
}

document.addEventListener('keydown', e => {
  const mode = document.getElementById('mode-flashcard').style.display !== 'none' ? 'flashcard' : 
               document.getElementById('mode-quiz').style.display !== 'none' ? 'quiz' : 'list';
  if (mode === 'flashcard') {
    if (e.code === 'Space') { e.preventDefault(); flipCard(); }
    if (e.code === 'ArrowRight') nextCard();
    if (e.code === 'ArrowLeft') prevCard();
    if (e.key.toLowerCase() === 'y') markCard(true);
    if (e.key.toLowerCase() === 'n') markCard(false);
  }
});

document.addEventListener('DOMContentLoaded', function() {
  updateStats();
  initDeck();
});
