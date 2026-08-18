/* le JS est actif : on autorise l'apparition au scroll (sinon tout reste visible) */
document.documentElement.classList.add('js');

/* ============================================================
   DONNÉES PROJETS (modale)
   Modifie ici les textes. L'onglet "Contenus" liste des
   emplacements média : remplace les liens href="#" plus tard.
   ============================================================ */
const PROJETS = {
  roole:{
    type:"Relations presse · Éditorial · LinkedIn",
    title:"Roole",
    stats:[{v:"France 2",l:"partenariat média"},{v:"TF1 · M6",l:"JT nationaux"}],
    contexte:["Roole, c'est un club auto grand public. Ma mission : prendre des sujets un peu arides comme la mobilité, le pouvoir d'achat ou l'écologie, et les rendre audibles, autant dans les médias que sur LinkedIn."],
    fait:["Posts LinkedIn et éléments de langage.","Communiqués et contenus institutionnels.","Veille média, politique et sectorielle.","Relations journalistes et organisation d'événements."],
    contenus:[
      {t:"Retombée BFM (véhicule électrique)",a:"Voir la vidéo",video:"assets/videos/roole-bfm.mp4"},
      {t:"Démo Roole Map",a:"Voir la vidéo",video:"assets/videos/roole-map-demo.mp4"},
      {t:"Exemple de veille",a:"Ouvrir le PDF",href:"assets/pdfs/roole-veille.pdf",img:"assets/images/veille-presse.jpg"},
      {t:"Exemple de script",a:"Ouvrir le PDF",href:"assets/pdfs/roole-script.pdf",img:"assets/images/logo-roole-fond.png"},
      {t:"Article Le Figaro sur Roole Map",a:"Lire l'article",href:"https://www.lefigaro.fr/automobile/ce-waze-francais-cartonne-sur-l-app-store-et-google-play-ce-que-roole-map-fait-mieux-que-ses-concurrents-20260224",img:"assets/images/logo-figaro.png"}
    ],
    resultats:["Partenariats médias avec France 2.","Retombées dans des JT nationaux dont TF1 et M6.","Passage dans La Matinale de TF1.","Article dans Le Figaro sur Roole Map.","Prises de parole portées dans plusieurs médias."]
  },
  parisco:{
    type:"Communication · Innovation · Éditorial",
    title:"Paris&Co",
    stats:[{v:"20k → 50k",l:"abonnés LinkedIn"},{v:"Startups",l:"mises en avant"}],
    contexte:["Paris&Co, c'est l'agence d'innovation de la ville. Plein de projets urbains et climatiques qui méritent qu'on en parle, et des startups qu'il fallait sortir de l'ombre."],
    fait:["Rédaction de posts LinkedIn et d'articles.","Vidéos et formats social media.","Couverture des temps forts et événements.","Mise en avant des startups et partenaires."],
    contenus:[
      {t:"Vidéo rafraîchissement urbain",a:"Voir la vidéo",video:"assets/videos/parisco-rafraichissement.mp4"},
      {t:"Boîte à outils montage vidéo",a:"Ouvrir le PDF",href:"assets/pdfs/parisco-boite-outils-montage.pdf",img:"assets/images/logo-parisco.png"},
      {t:"Article entrepreneuriat féminin",a:"Lire l'article",href:"https://www.parisandco.com/elles-entreprennent-elles-transforment-elles-innovent-lessor-dun-entrepreneuriat-feminin-engage-et-inclusif/",img:"assets/images/logo-parisco.png"},
      {t:"Article gaspillage du mètre carré",a:"Lire l'article",href:"https://www.parisandco.com/reinventer-nos-metres-carres-donner-une-nouvelle-vie-aux-espaces-sous-utilises/",img:"assets/images/logo-parisco.png"},
      {t:"Portrait de Marion Apaire (Journal du Grand Paris)",a:"Voir le portrait",img:"assets/images/marion-apaire.jpg",href:"assets/images/marion-apaire.jpg"}
    ],
    resultats:["Croissance LinkedIn de 20k à 50k abonnés.","Valorisation de projets urbains et climatiques.","Contenus repris par partenaires et médias."]
  },
  secret:{
    type:"Social media · Vidéo · Influence",
    title:"Secret de Peau",
    stats:[{v:"+1M",l:"abonnés cumulés"},{v:"200k → 930k",l:"croissance"}],
    contexte:["Un compte skincare avec une grosse communauté, sur Instagram et TikTok. Le défi : sortir des vidéos qui accrochent vraiment et qui donnent envie de rester, pas seulement de scroller."],
    fait:["Hooks, scripts, tournage et montage.","Veille tendances et adaptation aux codes plateformes.","Suivi des performances : vues, rétention, engagement.","Campagnes promo et partenariats marques."],
    contenus:[
      {t:"Vidéo MP4",a:"Voir le contenu"},
      {t:"Lien Reel Instagram",a:"Voir le Reel"},
      {t:"Capture de performance",a:"Voir"},
      {t:"PDF de retombées presse",a:"Voir le PDF"},
      {t:"Script",a:"Lire"}
    ],
    resultats:["+1M d'abonnés cumulés.","Croissance de 200k à 930k abonnés.","Retombées : TF1, Marie-Claire, 20 Minutes, L'Express, Madame Figaro.","Collaborations : Sephora, Aroma-Zone, SVR, Avène, Carrefour."]
  },
  skincafeine:{
    type:"Paid content · Vidéo courte · Acquisition",
    title:"Skin Cafeine",
    stats:[{v:"100k+",l:"vues cumulées"},{v:"A/B",l:"tests créatifs"}],
    contexte:["Skin Cafeine, c'est un diagnostic de peau par IA. Ici tout tourne autour du paid : Meta, YouTube, Google. L'objectif est clair : acquérir et convertir, pas seulement faire du joli."],
    fait:["Angles problème/solution et démonstrations produit.","Formats éducatifs et vidéos courtes.","Déclinaison en plusieurs versions créatives.","Analyse des performances créatives."],
    contenus:[
      {t:"Vidéo publicitaire",a:"Voir le contenu"},
      {t:"Script court",a:"Lire"},
      {t:"Capture de reporting",a:"Voir"},
      {t:"Graphique de performance",a:"Voir"},
      {t:"Lien vers une campagne",a:"Voir"}
    ],
    resultats:["Campagnes à plusieurs centaines de milliers de vues cumulées.","Tests de hooks, messages et formats.","Contenus orientés conversion."]
  }
};

/* ===== MODE CLAIR / SOMBRE ===== */
const themeToggle=document.getElementById('theme-toggle');
const themeIcon=themeToggle?themeToggle.querySelector('.theme-icon'):null;
function applyTheme(mode){
  document.documentElement.setAttribute('data-theme',mode);
  if(themeIcon) themeIcon.textContent = (mode==='dark') ? '☀' : '☾';
}
if(themeToggle){
  themeToggle.addEventListener('click',()=>{
    const current=document.documentElement.getAttribute('data-theme')==='dark'?'dark':'light';
    applyTheme(current==='dark'?'light':'dark');
  });
}

/* ===== MENU MOBILE ===== */
const burger=document.getElementById('burger');
const menu=document.getElementById('menu');
burger.addEventListener('click',()=>menu.classList.toggle('open'));
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));

/* ===== FILTRES GÉNÉRIQUES =====
   Un seul moteur pour projets / presse / biblio.
   - projets filtrent sur data-tags (plusieurs mots)
   - presse & biblio filtrent sur data-cat (un mot)
*/
function setupFilters(filtersId, gridId, attr){
  const box=document.getElementById(filtersId);
  const grid=document.getElementById(gridId);
  if(!box||!grid) return;
  box.addEventListener('click',e=>{
    const btn=e.target.closest('.filter');
    if(!btn) return;
    box.querySelectorAll('.filter').forEach(f=>f.classList.remove('active'));
    btn.classList.add('active');
    const f=btn.dataset.filter;
    grid.querySelectorAll('[data-'+attr+']').forEach(card=>{
      const val=card.getAttribute('data-'+attr);
      const show=(f==='all')|| val.split(' ').includes(f);
      card.classList.toggle('hide',!show);
    });
  });
}
setupFilters('proj-filters','proj-grid','tags');

/* ===== MODALE PROJET ===== */
const overlay=document.getElementById('modal-overlay');
const mClose=document.getElementById('modal-close');

function fillList(id,arr){
  document.getElementById(id).innerHTML='<ul>'+arr.map(x=>'<li>'+x+'</li>').join('')+'</ul>';
}
function openProject(key){
  const p=PROJETS[key];
  if(!p) return;
  document.getElementById('m-type').textContent=p.type;
  document.getElementById('m-title').textContent=p.title;
  // chiffres clés mis en évidence dans l'en-tête de la modale
  document.getElementById('m-stats').innerHTML=(p.stats||[])
    .map(s=>'<div class="m-stat"><b>'+s.v+'</b><span>'+s.l+'</span></div>').join('');
  fillList('p-contexte',p.contexte);
  fillList('p-fait',p.fait);
  fillList('p-resultats',p.resultats);
  // onglet contenus = carrousel de placeholders média
  document.getElementById('p-contenus').innerHTML=
    '<h4>Contenus produits</h4><div class="carousel">'+
    p.contenus.map(c=>{
      const href=c.href||'#';
      const target=(href!=='#')?' target="_blank"':'';
      let thumb;
      if(c.video){
        // vidéo : aperçu muet en boucle, clic pour agrandir + son + contrôles
        thumb='<div class="slide-videowrap"><video class="slide-video" src="'+c.video+'" muted loop playsinline preload="metadata"></video><span class="slide-play">▶</span></div>';
      }else if(c.img){
        thumb='<div class="thumb thumb-img"><img src="'+c.img+'" alt="'+c.t+'"></div>';
      }else{
        thumb='<div class="thumb">'+c.t+'</div>';
      }
      // si vidéo : pas de lien externe, on ouvre le lecteur agrandi ; sinon lien classique
      const action=c.video
        ? '<a href="#" class="play-inline">Lire la vidéo →</a>'
        : '<a href="'+href+'"'+target+'>'+c.a+' →</a>';
      return '<div class="slide'+(c.video?' is-video':'')+'">'+thumb+'<div class="cap"><b>'+c.t+'</b>'+action+'</div></div>';
    }).join('')+
    '</div>';
  // média manquant : on retire proprement la vignette concernée
  document.querySelectorAll('#p-contenus .slide img').forEach(img=>{
    img.addEventListener('error',()=>{ const s=img.closest('.slide'); if(s) s.remove(); });
  });
  // activer les vidéos cliquables (aperçu au survol + agrandissement au clic)
  document.querySelectorAll('#p-contenus .slide.is-video').forEach(slide=>{
    const vid=slide.querySelector('video');
    // on ne retire la vignette que si le fichier est réellement absent (404),
    // jamais pour un simple souci de codec (le navigateur sait lire le fichier)
    vid.addEventListener('error',()=>{
      fetch(vid.currentSrc||vid.src,{method:'HEAD'})
        .then(r=>{ if(!r.ok) slide.remove(); })
        .catch(()=>{});
    });
    // aperçu au survol
    slide.addEventListener('mouseenter',()=>{ if(!slide.classList.contains('playing')) vid.play().catch(()=>{}); });
    slide.addEventListener('mouseleave',()=>{ if(!slide.classList.contains('playing')){ vid.pause(); vid.currentTime=0; } });
    // clic : agrandir sur place, activer son + contrôles
    const activate=(e)=>{
      e.preventDefault();
      slide.classList.toggle('playing');
      if(slide.classList.contains('playing')){
        vid.muted=false; vid.controls=true; vid.currentTime=0; vid.play().catch(()=>{});
      }else{
        vid.muted=true; vid.controls=false; vid.pause(); vid.currentTime=0;
      }
    };
    slide.querySelector('.slide-videowrap').addEventListener('click',activate);
    slide.querySelector('.play-inline').addEventListener('click',activate);
  });
  // reset onglets sur "Contexte"
  document.querySelectorAll('#m-tabs .tab').forEach(t=>t.classList.toggle('active',t.dataset.panel==='contexte'));
  document.querySelectorAll('.tab-panel').forEach(pn=>pn.classList.toggle('active',pn.dataset.panel==='contexte'));
  overlay.classList.add('open');
  document.body.style.overflow='hidden';
  // accessibilité : on mémorise le focus et on l'amène dans la modale
  lastFocused=document.activeElement;
  mClose.focus();
}
function closeModal(){
  overlay.classList.remove('open');
  document.body.style.overflow='';
  // on rend le focus à l'élément qui a ouvert la modale
  if(lastFocused&&lastFocused.focus) lastFocused.focus();
}
// piège à focus : Tab reste à l'intérieur de la modale tant qu'elle est ouverte
let lastFocused=null;
document.querySelector('.modal').addEventListener('keydown',e=>{
  if(e.key!=='Tab') return;
  const f=[...document.querySelectorAll('.modal a[href],.modal button:not([disabled]),.modal video[controls]')].filter(el=>el.offsetParent!==null);
  if(!f.length) return;
  const first=f[0], last=f[f.length-1];
  if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
  else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
});

document.querySelectorAll('.card[data-project]').forEach(card=>{
  // rendre la carte utilisable au clavier (focus + Entrée/Espace)
  card.setAttribute('role','button');
  card.setAttribute('tabindex','0');
  card.addEventListener('click',()=>openProject(card.dataset.project));
  card.addEventListener('keydown',e=>{
    if(e.key==='Enter'||e.key===' '){e.preventDefault();openProject(card.dataset.project);}
  });
});
mClose.addEventListener('click',closeModal);
overlay.addEventListener('click',e=>{if(e.target===overlay)closeModal()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});

/* onglets dans la modale */
document.getElementById('m-tabs').addEventListener('click',e=>{
  const tab=e.target.closest('.tab');
  if(!tab) return;
  document.querySelectorAll('#m-tabs .tab').forEach(t=>t.classList.remove('active'));
  tab.classList.add('active');
  const panel=tab.dataset.panel;
  document.querySelectorAll('.tab-panel').forEach(p=>p.classList.toggle('active',p.dataset.panel===panel));
});

/* ===== APPARITION AU SCROLL + compteurs légers ===== */
if('IntersectionObserver' in window){
  const io=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}});
  },{threshold:.14});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
}else{
  // navigateur sans IntersectionObserver : on affiche tout directement
  document.querySelectorAll('.reveal').forEach(el=>el.classList.add('in'));
}
