let activeModal = null;

function setupModal(btnId, modalSelector) {
  const btn = document.getElementById(btnId);
  const modal = document.querySelector(modalSelector);

  if (!btn || !modal) return;

  const closeBtn = modal.querySelector(".close-btn");

  const openModal = (e) => {
    e.preventDefault();
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
    activeModal = modal;
  };

  const closeModal = () => {
    modal.classList.remove("show");
    document.body.style.overflow = "";
    if (activeModal === modal) activeModal = null;
  };

  btn.addEventListener("click", openModal);
  closeBtn?.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
}

// IMPORTANT: you must CALL it
setupModal("bio-learn-btn", ".bioCourse");
setupModal("chem-learn-btn", ".chemCourse");
setupModal("phys-learn-btn", ".physCourse");

setupModal("bio-dropdown-btn", ".bioCourse");
setupModal("chem-dropdown-btn", ".chemCourse");
setupModal("phys-dropdown-btn", ".physCourse");

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && activeModal) {
    activeModal.classList.remove("show");
    document.body.style.overflow = "";
    activeModal = null;
  }
});

const unitHeaders = document.querySelectorAll(".unit-header");

unitHeaders.forEach((header) => {

  header.addEventListener("click", () => {

    const unitCard = header.parentElement;

    unitCard.classList.toggle("active");

  });

});

// TRANSLATION SECTION


const enButton = document.getElementById("en");
const ptButton = document.getElementById("pt");
const esButton = document.getElementById("es");
const frButton = document.getElementById("fr");



const bioTitle =
  document.getElementById("bio-course-title");

const chemistryTitle =
  document.getElementById("chemistry-course-title");

const physicsTitle =
  document.getElementById("physics-course-title");

const subtitleTitle =
  document.getElementById("subtitle-title");

const courseTab =
  document.getElementById("course-tab");

const languageTab =
  document.getElementById("language-tab");

const bioDropdownBtn =
  document.getElementById("bio-dropdown-btn");

const chemDropdownBtn =
  document.getElementById("chem-dropdown-btn");

const physDropdownBtn =
  document.getElementById("phys-dropdown-btn");

const signIn =
  document.getElementById("sign-in");

const bioCourseDescription =
  document.getElementById("bio-course-description");

const chemCourseDescription =
  document.getElementById("chem-course-description");

const physCourseDescription =
  document.getElementById("phys-course-description");

const bioLearnBtn =
  document.getElementById("bio-learn-btn");

const chemLearnBtn =
  document.getElementById("chem-learn-btn");

const physLearnBtn =
  document.getElementById("phys-learn-btn");

const learnAboutUs =
  document.getElementById("learn-about-us");

const learnAboutUsDescriptionOne =
  document.getElementById("learn-about-us-description-one");

const learnAboutUsDescriptionTwo =
  document.getElementById("learn-about-us-description-two");

const bioHeadTitle =
  document.getElementById("bio-head-title");

const chemHeadTitle =
  document.getElementById("chem-head-title");

const physHeadTitle =
  document.getElementById("phys-head-title");

const bioU1Title = 
  document.getElementById("bio-u1-title");

const bioU1C1 =
  document.getElementById("bio-u1-c1");

const bioU1C2 =
  document.getElementById("bio-u1-c2");

const bioU1C3 =
  document.getElementById("bio-u1-c3");

const bioU1C4 =
  document.getElementById("bio-u1-c4");

const bioU1C5 =
  document.getElementById("bio-u1-c5");

const bioU2Title =
  document.getElementById("bio-u2-title");

const bioU2C1 =
  document.getElementById("bio-u2-c1");

const bioU2C2 =
  document.getElementById("bio-u2-c2");

const bioU2C3 =
  document.getElementById("bio-u2-c3");

const bioU3Title =
  document.getElementById("bio-u3-title");

const bioU3C1 =
  document.getElementById("bio-u3-c1");

const bioU3C2 =
  document.getElementById("bio-u3-c2");

const bioU3C3 =
  document.getElementById("bio-u3-c3");

const chemU1Title =
  document.getElementById("chem-u1-title");

const chemU1C1 =
  document.getElementById("chem-u1-c1");

const chemU1C2 =
  document.getElementById("chem-u1-c2");

const chemU1C3 =
  document.getElementById("chem-u1-c3");

const chemU1C4 =
  document.getElementById("chem-u1-c4");

const chemU2Title =
  document.getElementById("chem-u2-title");

const chemU2C1 =
  document.getElementById("chem-u2-c1");

const chemU2C2 =
  document.getElementById("chem-u2-c2");

const chemU2C3 =
  document.getElementById("chem-u2-c3");

const chemU2C4 =
  document.getElementById("chem-u2-c4");

const chemU3Title =
  document.getElementById("chem-u3-title");

const chemU3C1 =
  document.getElementById("chem-u3-c1");

const chemU3C2 =
  document.getElementById("chem-u3-c2");

const chemU3C3 =
  document.getElementById("chem-u3-c3");

const chemU3C4 =
  document.getElementById("chem-u3-c4");

const chemU3C5 =
  document.getElementById("chem-u3-c5");

const chemU3C6 =
  document.getElementById("chem-u3-c6");

const physU1Title =
  document.getElementById("phys-u1-title");

const physU1C1 =
  document.getElementById("phys-u1-c1");

const physU1C2 =
  document.getElementById("phys-u1-c2");

const physU1C3 =
  document.getElementById("phys-u1-c3");

const physU1C4 =
  document.getElementById("phys-u1-c4");

const physU1C5 =
  document.getElementById("phys-u1-c5");

const physU2Title =
  document.getElementById("phys-u2-title");

const physU2C1 =
  document.getElementById("phys-u2-c1");

const physU2C2 =
  document.getElementById("phys-u2-c2");

const physU2C3 =
  document.getElementById("phys-u2-c3");

const physU2C4 =
  document.getElementById("phys-u2-c4");

const physU2C5 =
  document.getElementById("phys-u2-c5");

const physU3Title =
  document.getElementById("phys-u3-title");

const physU3C1 =
  document.getElementById("phys-u3-c1");

const physU3C2 =
  document.getElementById("phys-u3-c2");

const physU3C3 =
  document.getElementById("phys-u3-c3");

const physU3C4 =
  document.getElementById("phys-u3-c4");

const physU3C5 =
  document.getElementById("phys-u3-c5");

const physU3C6 =
  document.getElementById("phys-u3-c6");

const physU3C7 =
  document.getElementById("phys-u3-c7");





// TRANSLATION DATABASE

const translations = {

  en: {

    bioCourseTitle: "Biology",
    chemistryCourseTitle: "Chemistry",
    physicsCourseTitle: "Physics",
    subtitleTitle: "Learn Biology, Chemistry and Physics for free!",
    courseTab: "Courses ▾",
    languageTab: "Languages ▾",
    bioDropdownBtn: "Biology",
    chemDropdownBtn: "Chemistry",
    physDropdownBtn: "Physics",
    signIn: "Sign in",
    bioCourseDescription: "Discover life, anatomy, ecosystems, fungi, reproduction, photosynthesis and much more!",
    chemCourseDescription: "Learn about atoms, elements, pH, solubility, bonding and more!",
    physCourseDescription: "Dive into Newton's Laws, energy, momentum, gravity and more!",
    bioLearnBtn: "Learn more!",
    chemLearnBtn: "Learn more!",
    physLearnBtn:"Learn more!",
    learnAboutUs: "Learn About Us",
    learnAboutUsDescriptionOne: "Science is everywhere! It connects people, schools, dreams and innovation.",
    learnAboutUsDescriptionTwo: "Our mission is to make science accessible and enjoyable for students worldwide.",
    bioHeadTitle: "Biology",
    chemHeadTitle: "Chemistry",
    physHeadTitle: "Physics",
    bioU1Title: "Unit 1: Introduction to Biology",
    bioU1C1: "What is Biology?",
    bioU1C2: "Characteristics of Life",
    bioU1C3: "Taxonomy & classifications",
    bioU1C4: "The Scientific Method",
    bioU1C5: "Lab Instruments & Safety",
    bioU2Title: "Unit 2: Biochemistry",
    bioU2C1: "All is Matter!",
    bioU2C2: "Water in Biology",
    bioU2C3: "Organic Atoms, Molecules & Structures",
    bioU3Title: "Unit 3: Structure, Function & Energy of Cells",
    bioU3C1: "Cell Structure & Organization",
    bioU3C2: "Cell Transport & Homeostasis",
    bioU3C3: "Cellular Energy and Respiration",
    chemU1Title: "Unit 1: Introduction to Chemistry",
    chemU1C1: "What is Chemistry?",
    chemU1C2: "The Scientific Method",
    chemU1C3: "Lab Tools & Safety",
    chemU1C4: "SI Units",
    chemU2Title: "Unit 2: Matter is Everywhere",
    chemU2C1: "Matter & Its Properties",
    chemU2C2: "States of Matter",
    chemU2C3: "Physical vs Chemical Properties & Changes",
    chemU2C4: "Atoms, Elements, Atomic Number & Mass",
    chemU3Title: "Unit 3: Atomic Models & Charge",
    chemU3C1: "The History of Atomic Models",
    chemU3C2: "Electron Configuration",
    chemU3C3: "Valence Electrons",
    chemU3C4: "The Periodic Table",
    chemU3C5: "Periodic Trends",
    chemU3C6: "Electronegativity",
    physU1Title: "Unit 1: Introduction to Physics",
    physU1C1: "What is Physics?",
    physU1C2: "Scalars vs Vectors",
    physU1C3: "Distance, Displacement, Speed, Velocity",
    physU1C4: "Acceleration Basics",
    physU1C5: "Interpreting Motion Graphs (s–t, v–t)",
    physU2Title: "Unit 2: Forces & Newton's Laws of Motion",
    physU2C1: "What is a Force?",
    physU2C2: "Newton's First Law of Motion",
    physU2C3: "Newton's Second Law of Motion",
    physU2C4: "Newton's Third Law of Motion",
    physU2C5: "Friction, Centripetal Force, Buoyancy, Electromagnetic Forces and Density",
    physU3Title: "Unit 3: Gravity & Motion in Space",
    physU3C1: "Gravity Basics",
    physU3C2: "Orbits & Circular Motion",
    physU3C3: "Weight vs Mass",
    physU3C4: "Kepler's Laws",
    physU3C5: "Projectile Motion",
    physU3C6: "The Solar System",
    physU3C7: "Space Exploration",

  },
  

  pt: {

    bioCourseTitle: "Biologia",
    chemistryCourseTitle: "Química",
    physicsCourseTitle: "Física",
    subtitleTitle: "Aprenda Biologia, Química e Física de forma gratuita!",
    courseTab: "Cursos ▾",
    languageTab: "Idiomas ▾",
    bioDropdownBtn: "Biologia",
    chemDropdownBtn: "Química",
    physDropdownBtn: "Física",
    signIn: "Entrar",
    bioCourseDescription: "Descubra a vida, a anatomia, os ecossistemas, os fungos, a reprodução, a fotossíntese e muito mais!",
    chemCourseDescription: "Aprenda sobre átomos, elementos, pH, solubilidade, ligações químicas e muito mais!",
    physCourseDescription: "Explore as Leis de Newton, energia, quantidade de movimento, gravidade e muito mais!",
    bioLearnBtn: "Saiba mais!",
    chemLearnBtn: "Saiba mais!",
    physLearnBtn: "Saiba mais!",
    learnAboutUs: "Conheça-nos",
    learnAboutUsDescriptionOne: "A ciência está em toda parte! Ela conecta pessoas, escolas, sonhos e inovação.",
    learnAboutUsDescriptionTwo: "Nossa missão é tornar a ciência acessível e agradável para estudantes de todo o mundo.",
    bioHeadTitle: "Biologia",
    chemHeadTitle: "Química",
    physHeadTitle: "Física",
    bioU1Title: "Unidade 1: Introdução à Biologia",
    bioU1C1: "O que é Biologia?",
    bioU1C2: "Características da Vida",
    bioU1C3: "Taxonomia e Classificação",
    bioU1C4: "O Método Científico",
    bioU1C5: "Instrumentos de Laboratório e Segurança",

    bioU2Title: "Unidade 2: Bioquímica",
    bioU2C1: "Tudo é Matéria!",
    bioU2C2: "A Água na Biologia",
    bioU2C3: "Átomos, Moléculas e Estruturas Orgânicas",

    bioU3Title: "Unidade 3: Estrutura, Função e Energia das Células",
    bioU3C1: "Estrutura e Organização Celular",
    bioU3C2: "Transporte Celular e Homeostase",
    bioU3C3: "Energia Celular e Respiração",

    chemU1Title: "Unidade 1: Introdução à Química",
    chemU1C1: "O que é Química?",
    chemU1C2: "O Método Científico",
    chemU1C3: "Ferramentas de Laboratório e Segurança",
    chemU1C4: "Unidades do SI",

    chemU2Title: "Unidade 2: A Matéria Está Por Toda Parte",
    chemU2C1: "Matéria e suas Propriedades",
    chemU2C2: "Os Estados da Matéria",
    chemU2C3: "Propriedades e Transformações Físicas e Químicas",
    chemU2C4: "Átomos, Elementos, Número Atômico e Massa Atômica",

    chemU3Title: "Unidade 3: Modelos Atômicos e Carga Elétrica",
    chemU3C1: "A História dos Modelos Atômicos",
    chemU3C2: "Configuração Eletrônica",
    chemU3C3: "Elétrons de Valência",
    chemU3C4: "A Tabela Periódica",
    chemU3C5: "Propriedades Periódicas",
    chemU3C6: "Eletronegatividade",

    physU1Title: "Unidade 1: Introdução à Física",
    physU1C1: "O que é Física?",
    physU1C2: "Grandezas Escalares e Vetoriais",
    physU1C3: "Distância, Deslocamento, Rapidez e Velocidade",
    physU1C4: "Conceitos Básicos de Aceleração",
    physU1C5: "Interpretação de Gráficos do Movimento (s–t, v–t)",

   physU2Title: "Unidade 2: Forças e Leis de Newton",
   physU2C1: "O que é Força?",
   physU2C2: "A Primeira Lei de Newton",
   physU2C3: "A Segunda Lei de Newton",
   physU2C4: "A Terceira Lei de Newton",
   physU2C5: "Atrito, Força Centrípeta, Empuxo, Forças Eletromagnéticas e Densidade",

   physU3Title: "Unidade 3: Gravidade e Movimento no Espaço",
   physU3C1: "Fundamentos da Gravidade",
   physU3C2: "Órbitas e Movimento Circular",
   physU3C3: "Peso vs Massa",
   physU3C4: "Leis de Kepler",
   physU3C5: "Lançamento Oblíquo",
   physU3C6: "O Sistema Solar",
   physU3C7: "Exploração Espacial",


  },
  

  es: {

    bioCourseTitle: "Biología",
    chemistryCourseTitle: "Química",
    physicsCourseTitle: "Física",
    subtitleTitle: "¡Aprende Biología, Química y Física gratis!",
    courseTab: "Cursos ▾",
    languageTab: "Idiomas ▾",
    bioDropdownBtn: "Biología",
    chemDropdownBtn: "Química",
    physDropdownBtn: "Física",
    signIn: "Iniciar sesión",
    bioCourseDescription: "Descubre la vida, la anatomía, los ecosistemas, los hongos, la reproducción, la fotosíntesis y mucho más.",
    chemCourseDescription: "Aprende sobre átomos, elementos, pH, solubilidad, enlaces químicos y mucho más.",
    physCourseDescription: "Explora las leyes de Newton, la energía, el momento, la gravedad y mucho más.",
    bioLearnBtn: "¡Más información!",
    chemLearnBtn: "¡Más información!",
    physLearnBtn: "¡Más información!",
    learnAboutUs: "Conócenos",
    learnAboutUsDescriptionOne: "¡La ciencia está en todas partes! Conecta a las personas, las escuelas, los sueños y la innovación.",
    learnAboutUsDescriptionTwo: "Nuestra misión es hacer que la ciencia sea accesible y agradable para estudiantes de todo el mundo.",
    bioHeadTitle: "Biología",
    chemHeadTitle: "Química",
    physHeadTitle: "Física",
    bioU1Title: "Unidad 1: Introducción a la Biología",
    bioU1C1: "¿Qué es la Biología?",
    bioU1C2: "Características de la Vida",
    bioU1C3: "Taxonomía y Clasificación",
    bioU1C4: "El Método Científico",
    bioU1C5: "Instrumentos de Laboratorio y Seguridad",

    bioU2Title: "Unidad 2: Bioquímica",
    bioU2C1: "¡Todo es Materia!",
    bioU2C2: "El Agua en la Biología",
    bioU2C3: "Átomos, Moléculas y Estructuras Orgánicas",

   bioU3Title: "Unidad 3: Estructura, Función y Energía de las Células",
   bioU3C1: "Estructura y Organización Celular",
   bioU3C2: "Transporte Celular y Homeostasis",
   bioU3C3: "Energía Celular y Respiración",

   chemU1Title: "Unidad 1: Introducción a la Química",
   chemU1C1: "¿Qué es la Química?",
   chemU1C2: "El Método Científico",
   chemU1C3: "Herramientas de Laboratorio y Seguridad",
   chemU1C4: "Unidades del SI",

   chemU2Title: "Unidad 2: La Materia Está por Todas Partes",
   chemU2C1: "La Materia y sus Propiedades",
   chemU2C2: "Estados de la Materia",
   chemU2C3: "Propiedades y Cambios Físicos y Químicos",
   chemU2C4: "Átomos, Elementos, Número Atómico y Masa Atómica",

   chemU3Title: "Unidad 3: Modelos Atómicos y Carga Eléctrica",
   chemU3C1: "La Historia de los Modelos Atómicos",
   chemU3C2: "Configuración Electrónica",
   chemU3C3: "Electrones de Valencia",
   chemU3C4: "La Tabla Periódica",
   chemU3C5: "Propiedades Periódicas",
   chemU3C6: "Electronegatividad",

   physU1Title: "Unidad 1: Introducción a la Física",
   physU1C1: "¿Qué es la Física?",
   physU1C2: "Magnitudes Escalares y Vectoriales",
   physU1C3: "Distancia, Desplazamiento, Rapidez y Velocidad",
   physU1C4: "Conceptos Básicos de la Aceleración",
   physU1C5: "Interpretación de Gráficas del Movimiento (s–t, v–t)",

   physU2Title: "Unidad 2: Fuerzas y Leyes de Newton",
   physU2C1: "¿Qué es 'Fuerza'?",
   physU2C2: "Primera Ley de Newton",
   physU2C3: "Segunda Ley de Newton",
   physU2C4: "Tercera Ley de Newton",
   physU2C5: "Fricción, Fuerza Centrípeta, Empuje, Fuerzas Electromagnéticas y Densidad",

   physU3Title: "Unidad 3: Gravedad y Movimiento en el Espacio",
   physU3C1: "Fundamentos de la Gravedad",
   physU3C2: "Órbitas y Movimiento Circular",
   physU3C3: "Peso y Masa",
   physU3C4: "Leyes de Kepler",
   physU3C5: "Movimiento de Proyectiles",
   physU3C6: "El Sistema Solar",
   physU3C7: "Exploración Espacial",


  },
  
};

  
  

// MAIN TRANSLATION FUNCTION

function changeLanguage(language) {

  bioTitle.textContent =
    translations[language].bioCourseTitle;

  chemistryTitle.textContent =
    translations[language].chemistryCourseTitle;

  physicsTitle.textContent =
    translations[language].physicsCourseTitle;
  
   subtitleTitle.textContent =
    translations[language].subtitleTitle;
  
   courseTab.textContent =
    translations[language].courseTab;
  
  languageTab.textContent =
    translations[language].languageTab;
  
  bioDropdownBtn.textContent =
    translations[language].bioDropdownBtn;
  
  chemDropdownBtn.textContent =
    translations[language].chemDropdownBtn;
  
  physDropdownBtn.textContent =
    translations[language].physDropdownBtn;
  
  signIn.textContent =
    translations[language].signIn;
  
  bioCourseDescription.textContent =
    translations[language].bioCourseDescription;
  
  chemCourseDescription.textContent =
    translations[language].chemCourseDescription;
  
  physCourseDescription.textContent =
    translations[language].physCourseDescription;
  
  bioLearnBtn.textContent =
    translations[language].bioLearnBtn;
  
  chemLearnBtn.textContent =
    translations[language].chemLearnBtn;
  
  physLearnBtn.textContent =
    translations[language].physLearnBtn;
  
  learnAboutUs.textContent =
    translations[language].learnAboutUs;
  
  learnAboutUsDescriptionOne.textContent =
    translations[language].learnAboutUsDescriptionOne;
  
  learnAboutUsDescriptionTwo.textContent =
    translations[language].learnAboutUsDescriptionTwo;
  
  bioHeadTitle.textContent =
    translations[language].bioHeadTitle;
  
   chemHeadTitle.textContent =
    translations[language].chemHeadTitle;
  
   physHeadTitle.textContent =
    translations[language].physHeadTitle;
  
  bioU1Title.textContent =
  translations[language].bioU1Title;

bioU1C1.textContent =
  translations[language].bioU1C1;

bioU1C2.textContent =
  translations[language].bioU1C2;

bioU1C3.textContent =
  translations[language].bioU1C3;

bioU1C4.textContent =
  translations[language].bioU1C4;

bioU1C5.textContent =
  translations[language].bioU1C5;

bioU2Title.textContent =
  translations[language].bioU2Title;

bioU2C1.textContent =
  translations[language].bioU2C1;

bioU2C2.textContent =
  translations[language].bioU2C2;

bioU2C3.textContent =
  translations[language].bioU2C3;

bioU3Title.textContent =
  translations[language].bioU3Title;

bioU3C1.textContent =
  translations[language].bioU3C1;

bioU3C2.textContent =
  translations[language].bioU3C2;

bioU3C3.textContent =
  translations[language].bioU3C3;

chemU1Title.textContent =
  translations[language].chemU1Title;

chemU1C1.textContent =
  translations[language].chemU1C1;

chemU1C2.textContent =
  translations[language].chemU1C2;

chemU1C3.textContent =
  translations[language].chemU1C3;

chemU1C4.textContent =
  translations[language].chemU1C4;

chemU2Title.textContent =
  translations[language].chemU2Title;

chemU2C1.textContent =
  translations[language].chemU2C1;

chemU2C2.textContent =
  translations[language].chemU2C2;

chemU2C3.textContent =
  translations[language].chemU2C3;

chemU2C4.textContent =
  translations[language].chemU2C4;

chemU3Title.textContent =
  translations[language].chemU3Title;

chemU3C1.textContent =
  translations[language].chemU3C1;

chemU3C2.textContent =
  translations[language].chemU3C2;

chemU3C3.textContent =
  translations[language].chemU3C3;

chemU3C4.textContent =
  translations[language].chemU3C4;

chemU3C5.textContent =
  translations[language].chemU3C5;

chemU3C6.textContent =
  translations[language].chemU3C6;

physU1Title.textContent =
  translations[language].physU1Title;

physU1C1.textContent =
  translations[language].physU1C1;

physU1C2.textContent =
  translations[language].physU1C2;

physU1C3.textContent =
  translations[language].physU1C3;

physU1C4.textContent =
  translations[language].physU1C4;

physU1C5.textContent =
  translations[language].physU1C5;

physU2Title.textContent =
  translations[language].physU2Title;

physU2C1.textContent =
  translations[language].physU2C1;

physU2C2.textContent =
  translations[language].physU2C2;

physU2C3.textContent =
  translations[language].physU2C3;

physU2C4.textContent =
  translations[language].physU2C4;

physU2C5.textContent =
  translations[language].physU2C5;

physU3Title.textContent =
  translations[language].physU3Title;

physU3C1.textContent =
  translations[language].physU3C1;

physU3C2.textContent =
  translations[language].physU3C2;

physU3C3.textContent =
  translations[language].physU3C3;

physU3C4.textContent =
  translations[language].physU3C4;

physU3C5.textContent =
  translations[language].physU3C5;

physU3C6.textContent =
  translations[language].physU3C6;

physU3C7.textContent =
  translations[language].physU3C7;
  
  
  
};


// BUTTON EVENTS

enButton.addEventListener("click", () => {

  changeLanguage("en");

});

ptButton.addEventListener("click", () => {

  changeLanguage("pt");

});

esButton.addEventListener("click", () => {
  changeLanguage("es");
});