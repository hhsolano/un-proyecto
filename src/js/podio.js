/**
 * ==========================================================================
 * DATOS Y LÓGICA DEL PODIO - LOS TRES MEJORES CICLISTAS DE LA ACTUALIDAD
 * ==========================================================================
 */

// Datos de los 3 mejores ciclistas de la actualidad (Tadej Pogačar, Jonas Vingegaard, Remco Evenepoel)
const cyclistsData = [
  {
    id: 'pogacar',
    rank: 1,
    positionClass: 'first-place',
    positionLabel: 'Campeón Mundial & Triple Corona',
    name: 'Tadej Pogačar',
    nickname: '"Pogi"',
    country: 'Eslovenia',
    flag: '🇸🇮',
    team: 'UAE Team Emirates',
    age: 26,
    // Soporte para ruta local y respaldo de Wikimedia
    image: '../assets/images/pogacar.jpg',
    rootImage: 'src/assets/images/pogacar.jpg',
    fallbackImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/2022_Tour_of_Slovenia_%28Stage_3%2C_Tadej_Poga%C4%8Dar_celebrating_victory_on_Celje_Castle_v2%29.jpg/800px-2022_Tour_of_Slovenia_%28Stage_3%2C_Tadej_Poga%C4%8Dar_celebrating_victory_on_Celje_Castle_v2%29.jpg',
    pedestalHeight: '190px',
    stats: {
      tours: '3 Tours',
      monumentos: '7 Monum.',
      victorias: '88+ Pros'
    },
    shortBio: 'Indiscutible número 1 del mundo. En 2024 conquistó la histórica "Triple Corona" del ciclismo (Giro de Italia, Tour de Francia y Campeonato Mundial de Ruta), un hito legendario reservado para los más grandes de todos los tiempos.',
    fullBio: 'Tadej Pogačar (Komenda, 1998) es el prodigio esloveno que ha revolucionado el ciclismo moderno gracias a su valentía, potencia y estilo de ataque a larga distancia. Con apenas 26 años, acumula 3 victorias generales en el Tour de Francia (2020, 2021 y 2024), 1 Giro de Italia (2024 con 6 etapas ganadas) y el Campeonato del Mundo de Ciclismo en Ruta 2024 tras una escapada solitaria de 100 km. Además, domina los Monumentos históricos como Il Lombardia, Lieja-Bastoña-Lieja, Tour de Flandes y Amstel Gold Race. Su voracidad competitiva recuerda a Eddy Merckx.',
    palmares: [
      '🏆 3× Tour de Francia (2020, 2021, 2024)',
      '🏆 1× Giro de Italia (2024)',
      '🌈 Campeón del Mundo en Ruta UCI (2024)',
      '⚡ 7 Monumentos (4× Il Lombardia, 2× Lieja, 1× Flandes)',
      '🥇 N.º 1 en el Ranking Mundial UCI de forma ininterrumpida'
    ]
  },
  {
    id: 'vingegaard',
    rank: 2,
    positionClass: 'second-place',
    positionLabel: 'Bicampeón del Tour de Francia',
    name: 'Jonas Vingegaard',
    nickname: '"El Pescador de las Cumbres"',
    country: 'Dinamarca',
    flag: '🇩🇰',
    team: 'Team Visma | Lease a Bike',
    age: 28,
    image: '../assets/images/vingegaard.jpg',
    rootImage: 'src/assets/images/vingegaard.jpg',
    fallbackImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/David_Gaudu%2C_Tadej_Poga%C4%8Dar%2C_Jonas_Vingegaard%2C_2023_Paris-Nice_%2852929456925%29_%28cropped2%29.jpg/800px-David_Gaudu%2C_Tadej_Poga%C4%8Dar%2C_Jonas_Vingegaard%2C_2023_Paris-Nice_%2852929456925%29_%28cropped2%29.jpg',
    pedestalHeight: '140px',
    stats: {
      tours: '2 Tours',
      etapasGT: '5 Etapas',
      podios: '4 Podios GT'
    },
    shortBio: 'Bicampeón consecutivo del Tour de Francia (2022 y 2023) y el escalador más letal en las grandes etapas de alta montaña. Su disciplina férrea y temple mental lo convierten en el rival más temido.',
    fullBio: 'Jonas Vingegaard (Hillerslev, 1996) encarna la resistencia extrema y la excelencia en carreras por etapas de tres semanas. Con un pasado de trabajo en una fábrica procesadora de pescado mientras entrenaba como aficionado, demostró una tenacidad inquebrantable. Protagonizó duelos históricos frente a Tadej Pogačar en los Alpes y Pirineos, coronándose campeón del Tour en 2022 y 2023 con demostraciones colosales en el Col du Granon y la crono de Combloux. Su capacidad de recuperación día a día lo posiciona como uno de los mejores vueltómanos de la era moderna.',
    palmares: [
      '🏆 2× Tour de Francia (2022, 2023)',
      '🥈 2× Subcampeón del Tour de Francia (2021, 2024)',
      '🥈 1× Subcampeón de la Vuelta a España (2023)',
      '🥇 Campeón de O Gran Camiño, Itzulia Basque Country y Tirreno-Adriático',
      '⛰️ Considerado el mejor escalador puro de fondo de alta montaña'
    ]
  },
  {
    id: 'evenepoel',
    rank: 3,
    positionClass: 'third-place',
    positionLabel: 'Doble Campeón Olímpico',
    name: 'Remco Evenepoel',
    nickname: '"El Pequeño Caníbal"',
    country: 'Bélgica',
    flag: '🇧🇪',
    team: 'Soudal Quick-Step',
    age: 25,
    image: '../assets/images/evenepoel.jpg',
    rootImage: 'src/assets/images/evenepoel.jpg',
    fallbackImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Remco_Evenepoel_WC_2022.jpg/800px-Remco_Evenepoel_WC_2022.jpg',
    pedestalHeight: '100px',
    stats: {
      olimpicos: '2 Oros 🥇',
      vuelta: '1 Vuelta',
      mundiales: '3 Arcoíris'
    },
    shortBio: 'Histórico doble campeón olímpico en París 2024 (Ruta y Crono). Ganador de La Vuelta, Campeón Mundial de Ruta y Crono, y podio del Tour de Francia. Un fenómeno todoterreno sin límites.',
    fullBio: 'Remco Evenepoel (Schepdaal, 2000) es un prodigio irrepetible. Exfutbolista de las divisiones menores de la selección de Bélgica y el Anderlecht, cambió al ciclismo y rápidamente asombró al planeta. En los Juegos Olímpicos de París 2024 logró la proeza nunca antes vista en categoría masculina: colgarse el oro olímpico en la Contrarreloj Individual y en la Carrera de Ruta. Cuenta además con la Vuelta a España 2022, el Mundial de Ruta 2022, dos Mundiales de Contrarreloj (2023, 2024), múltiples Lieja-Bastoña-Lieja y el tercer puesto del podio en el Tour de Francia 2024.',
    palmares: [
      '🥇🥇 2× Campeón Olímpico en París 2024 (Ruta y Contrarreloj)',
      '🏆 1× Vuelta a España (2022)',
      '🥉 3.º Lugar en el Tour de Francia 2024 + Maillot Blanco al Mejor Joven',
      '🌈 Campeón Mundial de Ruta (2022) y Contrarreloj (2023, 2024)',
      '⚡ 2× Lieja-Bastoña-Lieja (2022, 2023) y 3× Clásica San Sebastián'
    ]
  }
];

/**
 * Función que detecta si el archivo se ejecuta desde /src/js o desde la raíz
 */
function resolveImagePath(cyclist) {
  // Si estamos en un archivo dentro de src/js/ la ruta relativa al assets es ../assets/images/...
  // Si estamos en la raíz index.html, es src/assets/images/...
  const currentPath = window.location.pathname.toLowerCase();
  if (currentPath.includes('/src/js') || currentPath.includes('\\src\\js')) {
    return cyclist.image;
  }
  return cyclist.rootImage;
}

/**
 * Renderizado del Podio
 */
function renderPodium() {
  const container = document.getElementById('podiumContainer');
  if (!container) return;

  // Orden olímpico tradicional para el HTML: 2º (Izquierda), 1º (Centro), 3º (Derecha)
  // El arreglo ya tiene primero Pogačar (1º), luego Vingegaard (2º), luego Evenepoel (3º)
  const orderedForDisplay = [
    cyclistsData.find(c => c.rank === 2),
    cyclistsData.find(c => c.rank === 1),
    cyclistsData.find(c => c.rank === 3)
  ];

  container.innerHTML = orderedForDisplay.map(cyclist => {
    const isFirst = cyclist.rank === 1;
    const imgSrc = resolveImagePath(cyclist);
    
    // Estadísticas
    const statsHtml = Object.entries(cyclist.stats).map(([key, val]) => `
      <div class="stat-item">
        <div class="stat-value">${val}</div>
        <div class="stat-label">${key}</div>
      </div>
    `).join('');

    return `
      <div class="podium-column ${cyclist.positionClass}" data-id="${cyclist.id}">
        <!-- Tarjeta del Ciclista -->
        <article class="cyclist-card" onclick="openBioModal('${cyclist.id}')" title="Clic para ver la biografía completa">
          ${isFirst ? '<div class="crown-icon">👑</div>' : ''}
          <div class="rank-badge">${cyclist.rank}º</div>
          
          <div class="photo-wrapper">
            <div class="photo-halo"></div>
            <img 
              src="${imgSrc}" 
              alt="${cyclist.name}" 
              onerror="this.onerror=null; this.src='${cyclist.fallbackImage}';"
              loading="lazy"
            />
          </div>

          <div class="cyclist-info">
            <div class="country-tag">
              <span>${cyclist.flag}</span>
              <span>${cyclist.country}</span>
              <span>• ${cyclist.age} años</span>
            </div>
            
            <h2 class="cyclist-name">${cyclist.name}</h2>
            <p class="cyclist-team">${cyclist.team}</p>

            <div class="mini-stats">
              ${statsHtml}
            </div>

            <p class="bio-preview">
              "${cyclist.shortBio}"
            </p>

            <button class="btn-view-bio" type="button">
              <span>Ver Biografía Completa</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </article>

        <!-- Bloque Físico del Pedestal -->
        <div class="podium-pedestal">
          <span class="pedestal-number">${cyclist.rank}</span>
          <span class="pedestal-text">${cyclist.rank === 1 ? 'CAMPEÓN' : cyclist.rank === 2 ? 'SUB-CAMPEÓN' : '3ER LUGAR'}</span>
        </div>
      </div>
    `;
  }).join('');
}

/**
 * Control del Modal de Biografía
 */
function openBioModal(cyclistId) {
  const cyclist = cyclistsData.find(c => c.id === cyclistId);
  if (!cyclist) return;

  const modal = document.getElementById('bioModal');
  const modalAvatar = document.getElementById('modalAvatar');
  const modalName = document.getElementById('modalName');
  const modalSubtitle = document.getElementById('modalSubtitle');
  const modalBio = document.getElementById('modalBio');
  const modalPalmares = document.getElementById('modalPalmares');

  const imgSrc = resolveImagePath(cyclist);
  modalAvatar.src = imgSrc;
  modalAvatar.onerror = () => { modalAvatar.src = cyclist.fallbackImage; };
  
  modalName.textContent = `${cyclist.name} ${cyclist.nickname}`;
  modalSubtitle.innerHTML = `${cyclist.flag} ${cyclist.country} | 🚴 ${cyclist.team} | ${cyclist.positionLabel}`;
  modalBio.textContent = cyclist.fullBio;

  modalPalmares.innerHTML = cyclist.palmares.map(item => `
    <li>${item}</li>
  `).join('');

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeBioModal() {
  const modal = document.getElementById('bioModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Inicialización de eventos
document.addEventListener('DOMContentLoaded', () => {
  renderPodium();

  // Cerrar modal al hacer clic en el botón de cerrar
  const closeBtn = document.getElementById('closeModalBtn');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeBioModal);
  }

  // Cerrar modal al hacer clic en el fondo oscuro
  const modal = document.getElementById('bioModal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeBioModal();
      }
    });
  }

  // Cerrar modal con tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeBioModal();
    }
  });
});
