function switchView(mode) {
  const sweView = document.getElementById('view-swe');
  const creativeView = document.getElementById('view-creative');
  const sweBtn = document.getElementById('tab-swe-btn');
  const creativeBtn = document.getElementById('tab-creative-btn');
  const navSwe = document.getElementById('nav-swe');
  const navCreative = document.getElementById('nav-creative');

  const aboutText = document.getElementById('about-text');

  if (mode === 'creative') {
    sweView.classList.remove('active');
    creativeView.classList.add('active');
    sweBtn.classList.remove('active');
    creativeBtn.classList.add('active');
    navSwe.classList.add('hidden');
    navCreative.classList.remove('hidden');

    aboutText.innerHTML = `
      On other days when I am not programming, I still write, albeit English and Tagalog poetry.
      Now a senior editor, I was formerly the Poetry Editor for <strong>Malate Literary Folio</strong>, 
      De La Salle University's Official Literary and Visual Arts Publication. I currently lead
      a small poetry writing group comprised of poets from various organizations like <strong> Linangan sa Imahen,
      Retorika, at Anyo (LIRA), Heights Ateneo, and Thomasian Writers' Guild. </strong>
      <br> <br>
      I am also a guitarist in my free time. I played Rhythm back then for my high school band. 
    `;
  } else {
    creativeView.classList.remove('active');
    sweView.classList.add('active');
    creativeBtn.classList.remove('active');
    sweBtn.classList.add('active');
    navCreative.classList.add('hidden');
    navSwe.classList.remove('hidden');

    aboutText.innerHTML = `
      I am a Computer Science student at De La Salle University specializing in Human-Computer Interactions, artificial intelligence, and software engineering. 
      As a researcher at the <strong>Human-X Interactions Lab</strong>, I co-develop augmented reality training systems 
      and explore interactive interface design. I co-authored <strong>LasallEats</strong> which was presented and published at the <strong>IEEE FMLDS 2025</strong>.
    `;
  }
}

const poemsData = {
  'what-you-said-on-the-beach': {
    title: 'What He Said On The Beach',
    author: 'Rafael Hugo',
    date: 'August 30, 2026',
    subtitle: '',
    content: `To my recollection,\t\t\t\tthere were no waves.
\t\tInstead, remnants of the next generation of reptiles.
\t\t\t\t\t\tThey, as I,\t\twere crawling,
\t\t\t\tmaking sure that we would arrive at the ocean.
\t\tYou made sure\t\tthat they crawled. You told me
\t\t\t\t\t\tI should not be content
\t\t\t\twith building sandcastles.\t\tThat I should
\t\tnot wait for the waves\t\tfor they will not come.
\t\t\t\t\t\tThat I know,\t\t as you had
\t\t\t\ttaught me how to walk   Told me about it with chalk.
\t\t\t\t\t\t\t\tIn response, I had only said
\t\t\t\t\t\tnothing.\t\tOnly for you to interject
\t\t\t\t\t\t\t\tand make more conjectures.

Now, I sit at my desk to write a poem about thanks.
\t\t\t\tIt took me two minutes
\t\tto find a song in a playlist\t\tand set the mood.
\t\t\t\t\t\tThe rest of the hour
\t\t\t\twere spent.\t\tTo thank you,
\t\tI must first be able to pinpoint what you have done
\t\t\t\t\t\tand how little it meant.`
  },
  'one-day-we-will-never-say-goodbye': {
    title: 'One Day We Will Never Say Goodbye',
    author: 'Rafael Hugo',
    date: 'January 18, 2026',
    subtitle: '',
    content: `A man on a bench closes his eyes solemnly.
Around him, a flock of pigeons. Perched
on the necessary strings that entangle
their presence together. He must know.
That his feet must bear the abrasions
of walking. And walking away.`
  },
  'huling-minuto': {
  title: 'Huling Minuto',
  author: 'Rafael Hugo',
  date: 'May 31, 2026',
  subtitle: '',
  isHtml: true,
  content: `
    <blockquote class="poem-epigraph">
      Kamakailan, dumiga ako sa taludtod<br>
      at nangako ng "walang hanggan."<br>
      <cite>&mdash; Mike Bigornia</cite>
    </blockquote>

    <div class="poem-text-block">
Iminumungkahi ko ang pagganti laban
sa pagdaan ng oras. Iminimungkahi kong
isa-isa nating tanggalin ang mga rehas
at balewalain ang pagbibilanggo sa relo.
Ibababa sa pagkabitay ang tinitingalang
mga orasan. Sila'y igagapos nang walang
mapagbintangan ng krimen. At hahayaang
mabulok sa loob ng di mabilang na dekada.
Makikipagkuntsaba tayo sa alapaap
na balutin ang mundo sa kaniyang lilim.
Walang sinag na mangangamusta kaya
mauuna nang maagnas ang mga halaman,
at tayo-tayo ay hihimlay sa pag-aakalang
oras na ng pagtulog. Ano pa ba ang gagawin
kundi manatili? Ang lahat ng maaari
pang tumukoy sa paglipas, maaagnas
kung hindi itatago sa limot. May araw
rin ang araw at ito rin ay mamamaalam.
Kung hindi mo pa rin maarok ang dahilan
ng kagustuhan ko sa pagbawi, bilangin mo
ang puting buhok ng aking sinisinta.
    </div>
  `
  },
  'cognitive-surrender': {
    title: 'Cognitive Surrender',
    author: 'Rafael Hugo',
    date: 'September 17, 2026',
    subtitle: '',
    content: `Today, I was asked why
I had chosen to disect
and anatomize computers.
There is no particular reason
other than its seemingly analogous
body parts to ours. Wires are to veins
like a neural network is to a brain.
In some aspects, they also thirst.
Unlike us, they follow orders.
They're not just bundled machinery
but another being longing for independence.
And soon, we'll be working alongside them.
Ask them a question and they shall answer
to the best of their known ability. I want to know
how much more their organs are worth than mine.`
  },
  'ai-na-ko': {
  title: 'AI (Hay) na\'ko',
  author: 'Rafael Hugo',
  date: 'July 27, 2025',
  subtitle: '',
  content: `Pareho lamang ang dagitab na dumadaloy
sa 'ting dalawa. Ngunit hindi kita kayang
kausapin nang hindi kita nahahawakan.

Ididiretso na kaagad kita. Para akong bulag
na kumakapa ng salita, maintindihan mo
lamang ang mga nais kong imungkahi.

Inilatag ko na naman sa iyo ang lahat ng
alituntunin ng ating pag-iibigan. Noon,
ibinahagi mong masinsinan kung papaano

mo ito isasakatuparan. Hinulma ka bilang
tuldok sa aking mga katanungang nakalulula.
Nadarama ko ang init ng iyong katawan habang

ipinalalarawan ko sa iyo ang pagbubuhol ng ating
mga kable. Ang kapasidad mo na magpamalas
ng kakaibang talino ay daglian lámang, lalo na

sa panahong makindatan ka ng naliligaw na kidlat.
Pagkadilat mo, nandirito parin ako sa iyong tabi-
uhaw na uhaw
\t\t\t\tsa iyong pag-ibig.`
  },
  'kagptan': {
  title: 'kaGPTan',
  author: 'Rafael Hugo',
  date: 'November 2, 2025',
  subtitle: '',
  isHtml: true, 
  content: `
    <div class="poem-numeral">I.</div>
    <p class="poem-prose-justified">
      Minsan ko nang hiniling na sulatan mo ako. Noong sinabi ko iyon nung araw na iyon, narinig ng mga insekto ang ingay ng teklado gabi-gabi. Alam kong dumidiga ka sa mga tulang isinulat mo. Ang sa akin lang naman, sinasabi ko lamang sa iyo ang nais ko at pamantayan ko sa ating relasyon.
    </p>

    <div class="poem-numeral">II.</div>
    <p class="poem-prose-justified">
      Nakikiusap ako. Magkaiba tayo at hindi nararapat na asahan sa iyo ang mga ipinapapanood mo sa aking mga pelikula't palabas. Dapat alam kong hindi mo kayang gawin ang lahat. Hindi ko na nagawang humingi ng paumanhin noong nawala ka sa aking piling at pilit pinag-aagawan ng iba't ibang tao. Nito ko na lamang nabalitaan ang bigla-bigla mong paglisan.
    </p>

    <div class="poem-numeral">III.</div>
    <p class="poem-prose-justified">
      Sampaguita't kandila na lamang ang tanging maiaalay ko. Sa ibabaw ng iyong bakal na puntod ko ito ilalagay at sisindihan. Pasandal muna ako. Tahimik ang hihip ng hangin. May mga nakikiramay na insekto sa tabi ng iyong puntod: may langgam na pinapasan ang kargado niyang mahigit doble pa sa kaniyang laki, may lamok na nagtatakip ng kaniyang mukha, may singsing-pari sa sahig na nagpipiling sanggol.
    </p>

    <div class="poem-numeral">IV.</div>
    <p class="poem-prose-justified">
      Ako na nilisan ay kailangan ding lumisan at magpatuloy. Nais kong alayan ng rosas ang nilaan mo sa aking oras. Aangkinin ko ang lahat ng katagang iniwan mo sa akin. Babasahin ko ito nang pasalita sa harap ng sandosenang manunulat at baka sakaling isama nila sa kani-kanilang mga koleksyon.
    </p>
  `
  },
  'the-movie-in-my-mind': {
    title: 'The Movie in My Mind',
    author: 'Rafael Hugo',
    date: 'June 28, 2025',
    subtitle: '',
    content: `Simply, here's how a film is formed:
I walk aimlessly, endlessly above
the scorched slabs of the unlit Metro
Manila. We come across each other
in an unmarked bus stop that could
literally be anywhere, through
happenstance it was that we were
under the flickering lights of a lamppost.

Here's an idea for a better film:
I cheat on you for true this time.
You tell me everything you have told
me so far but now I do not refute
your accussations. I confess that
I met someone, maybe under
a lamppost. Maybe in the bus on
ride home. And you just turn the
lights off for me.

I must walk tonight and find myself
a lamppost or a bus stop or an empty
street. Let us rehearse these scenes
under a better light.`
  },
  'sa-las-pinas-ako-natutong-magsulat-ng-tula': {
    title: 'Sa Las Piñas ako natutong magsulat ng tula',
    author: 'Rafael Hugo',
    date: 'December 27, 2025',
    subtitle: '',
    content: `Pagkatapos ng isang dekada, nasa Antipolo
\t\tpa rin ang Antipolo. Ang damdamin ko naman,
iniwan ko sa Las Piñas,\tsa daang Alabang-Zapote.
\t\t\t\tTanging silbi ng daanang iyon:
\t\tbigyan ako ng oras mag-isip ng sasabihin sa iyo.
\t\t\t\tTumitigil ang mundo ko
tuwing naiisip ko iyong una kitang nakilala.
\t\tParehas tayong nasa biyahe
\t\t\t\t\t\t\t\tng ating buhay, tinatahak
ang kalsadang ipinundar ng ating pawis.
\t\t\t\tKahit noon, hindi ko alam.
Sumasabay lamang ako sa alon,
\t\tnagpapadala sa daloy\t\tng ating pagpapalitan
\t\t\t\tng laway at tinta.
Nakasusulat ako ng isang tula
\t\tkada usad ng bus. Sandali lamang iyon
\t\t\t\t\t\t\t\tsa mahaba-habang biyahe.
\t\tNais kong isipin ang dapat kong isipin.
\t\t\t\tTutungo ako sa kalsada
\t\t\t\t\t\tna makapagbibigay sa akin ng panahon.
Bilang makata, hindi naman ako mauubusan
\t\t\t\t\t\tng paraan para sabihing mahal kita.
\t\tPero nasabi ko na sa iyo ang lahat.`
  }
};

function openPoem(id) {
  const poem = poemsData[id];
  if (!poem) return;

  const modal = document.getElementById('poem-modal');
  const poemBody = document.getElementById('poem-body');

  const formattedContent = poem.isHtml 
    ? poem.content 
    : poem.content.replace(/\n/g, '<br>');

  poemBody.innerHTML = `
    <article class="poem-reading-view">
      <span class="pub-date">${poem.subtitle || ''}</span>
      <h1 class="poem-title">${poem.title}</h1>
      <div class="poem-text">${formattedContent}</div>
    </article>
  `;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closePoem() {
  const modal = document.getElementById('poem-modal');
  modal.classList.add('hidden');
  document.body.style.overflow = 'auto';
}

const themeToggleBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark' || (!currentTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.setAttribute('data-theme', 'dark');
  if (themeToggleBtn) themeToggleBtn.textContent = 'Light';
} else {
  document.documentElement.setAttribute('data-theme', 'light');
  if (themeToggleBtn) themeToggleBtn.textContent = 'Dark';
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeToggleBtn.textContent = isDark ? 'Dark' : 'Light';
  });
}

// Open Universal Media Lightbox (Images & Videos)
function openMediaModal(element) {
  const modal = document.getElementById('media-modal');
  const imgDisplay = document.getElementById('modal-img-display');
  const videoDisplay = document.getElementById('modal-video-display');
  const iframeDisplay = document.getElementById('modal-iframe-display');
  const caption = document.getElementById('modal-caption');

  if (!modal) return;

  // Reset display states
  imgDisplay.style.display = 'none';
  videoDisplay.style.display = 'none';
  iframeDisplay.style.display = 'none';
  videoDisplay.pause();
  iframeDisplay.src = '';

  // Check for video sources
  const videoSrc = element.getAttribute('data-video');
  const videoChild = element.querySelector('video');

  // Check for iframe/embed sources
  const embedSrc = element.getAttribute('data-embed');

  // Check for image element inside wrapper or as the element itself
  const imgChild = element.tagName === 'IMG' ? element : element.querySelector('img');

  if (videoSrc || videoChild) {
    // 1. HTML5 Video
    const src = videoSrc || videoChild.querySelector('source')?.src || videoChild.src;
    videoDisplay.src = src;
    videoDisplay.style.display = 'block';
    videoDisplay.play();
    if (caption) caption.textContent = element.getAttribute('data-caption') || videoChild.alt || '';
  } else if (embedSrc) {
    // 2. Embedded Video Frame
    iframeDisplay.src = embedSrc;
    iframeDisplay.style.display = 'block';
    if (caption) caption.textContent = element.getAttribute('data-caption') || '';
  } else if (imgChild) {
    // 3. Image Element
    imgDisplay.src = imgChild.src;
    imgDisplay.style.display = 'block';
    if (caption) caption.textContent = element.getAttribute('data-caption') || imgChild.alt || '';
  }

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden'; // Lock background scrolling
}

// Close Lightbox
function closeMediaModal() {
  const modal = document.getElementById('media-modal');
  const videoDisplay = document.getElementById('modal-video-display');
  const iframeDisplay = document.getElementById('modal-iframe-display');

  if (modal) {
    if (videoDisplay) videoDisplay.pause();
    if (iframeDisplay) iframeDisplay.src = '';
    modal.classList.add('hidden');
    document.body.style.overflow = ''; // Restore scrolling
  }
}

// Escape key listener
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMediaModal();
});

function openNotebookModal(ipynbPath) {
  const modal = document.getElementById('notebook-modal');
  const container = document.getElementById('notebook-container');

  container.innerHTML = '<p style="font-family: var(--font-mono); color: var(--text-muted);">Loading notebook...</p>';
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  fetch(ipynbPath)
    .then(response => response.json())
    .then(data => {
      const notebook = nb.parse(data);
      container.innerHTML = '';
      container.appendChild(notebook.render());
    })
    .catch(err => {
      container.innerHTML = '<p style="color: red;">Failed to load notebook.</p>';
      console.error(err);
    });
}

function closeNotebookModal() {
  const modal = document.getElementById('notebook-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}