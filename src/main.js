//* Sticky Nav Logic
const nav = document.querySelector(".nav");
const hero = document.querySelector(".hero");
const topOfNav = nav.offsetTop;

function fixNav() {
  const offsetTop = window.scrollY;
  

  if (offsetTop >= topOfNav - 5) {
    document.body.classList.add("fixed-nav");
    document.body.style.paddingTop = nav.offsetHeight + "px";
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove("fixed-nav");
  }
}

window.addEventListener("scroll", fixNav);
//* Parallax effect Mobile *//
document.addEventListener("scroll", function () {

  if (window.innerWidth <= 480) {
    const scrolled = window.scrollY;
    const parallax1 = document.querySelectorAll(".parallax1");
    const parallax2 = document.querySelectorAll(".parallax2");
    console.log(parallax1);
    console.log(parallax2);
    const totalParallax = [...parallax1, ...parallax2]
    console.log({totalParallax});
    
    totalParallax.forEach((e) => {
      e.style.backgroundPositionY = `${scrolled * 0.5}px`;
    }
    )
  }
  
});

//*Show and hidde MobileMenu Modal */
const mobileMenu = document.getElementById("navBar_mobileMenu");

const hamburguerBtn = document.getElementById("hamburger-btn");

const closeModalBtn = document.getElementById("closeModalBtn");

function openModalMenu() {
  mobileMenu.style.display = "block";
  setTimeout(() => {
    mobileMenu.style.opacity = 1;
  }, 10);
}

function closeModalMenu() {
  mobileMenu.style.opacity = 0;
  setTimeout(() => {
    mobileMenu.style.display = "none";
  }, 500);
}

window.onclick = function (e) {
  if (e.target === mobileMenu) {
    mobileMenu.style.opacity = 0;
    setTimeout(() => {
      mobileMenu.style.display = "none";
    }, 500);
  }
};


hamburguerBtn.addEventListener("click", openModalMenu);

closeModalBtn.addEventListener("click", closeModalMenu);

const moreinfoHeroBtn = document.getElementById("moreInfoHero");
const targetSection = document.querySelector(".whatIsSachaInchi");

moreinfoHeroBtn.addEventListener("click", () => {
  targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
});

//* Close Benefit Modals

const benefitCloseBtns = document.querySelectorAll('.closeBenefitModal')

console.log(benefitCloseBtns);

benefitCloseBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    console.log(btn.parentNode);
    const parentNode = btn.parentNode
    parentNode.style.visibility = 'hidden'
  })
})

//* ENGLISH/SPANISH SWITCH LOGIC

const translations = {
  en: {
    section1: {
      subtitle: "Amazon’s Superfood for a Healthier You!",
      description:
        "Discover the natural goodness of sustainable nutrition rich in omegas 3, 6 and 9",
      cta: "Discover the Amazon's Secret",
    },
    section2: {
      home: "Home",
      aboutUs: "About Us",
      contact: "Contact",
    },
    section3: {
      title: "What is Sacha Inchi?",
      p1: "Native to the Amazon forest of Ecuador, Colombia and Peru, Sacha Inchi has been treasured for centuries for its incredible nutritional benefits.Packed with omega - 3s, protein, fiber, vitamin E, and antioxidants, it’s a true powerhouse for your health.",
      p2: " Sacha inchi's precious oil is a treasure trove of nutrients, sought after for its unparalleled health benefits. Embrace its goodness in your kitchen, in your skin care routine, or as a daily supplement and experience the magic of this Amazonian wonder!",
    },
    section4: {
      title: "Sacha Inchi",
      subtitle: "Is a SuperFood",
      benefit1Title: "Anti-Inflamatory",
      benefit2Title: "Muscle Recovery",
      benefit3Title: "Cardiovascular Health",
      benefit4Title: "Skin Benefits",
      // Card1
      benefit1CardTitle: "Soothe Inflammation and Boost Your Health Naturally",
      benefit1Cardp1:
        "Sacha Inchi is a powerful source of Omega-3 fatty acids and Vitamin E, offering anti-inflammatory and antioxidantproperties.",
      benefit1Cardp2:
        "These nutrients work together to reduce inflammation, easing joint pain, muscle soreness, and symptoms of conditions like arthritis, while also protecting cells from oxidative stress and damage.",
      //Card2
      benefit2CardTitle: "Fuel Your Muscles, Recover Faster, and Grow Stronger",
      benefit2Cardp1:
        "Rich in high-quality protein for muscle repair, recovery, and growth. After workouts, its protein helps rebuild muscle tissue, reduce soreness, and speed up recovery.",
      benefit2Cardp2:
        "Packed with magnesium and potassium, it prevents cramps,supports muscle function, and restores electrolyte balance. Its anti-inflammatory properties and Omega-3 fatty acids reduce muscle inflammation, helping you recover faster, perform better, and build strong, lean muscles naturally.",
      //Card3
      benefit3CardTitle: "Support a Stronger Heart, Naturally",
      benefit3Cardp1:
        "Packed with Omega-3 fatty acids, phytosterols, and antioxidants that work together to boost cardiovascular health. Its Omega-3s help lower bad cholesterol (LDL), increase good cholesterol (HDL), and reduce blood pressure, promoting healthy blood flow and protecting against heart disease.",
      benefit3Cardp2:
        "The antioxidants, including Vitamin E, shield your heart and arteries from oxidative stress, while its anti-inflammatory properties support overall heart function. Incorporating Sacha Inchi into your diet is a natural way to maintain a healthier, stronger heart.",
      //Card4
      benefit4CardTitle: "Glow Naturally with Nourished, Healthy Skin",
      benefit4Cardp1:
        " Sacha Inchi oil is a beauty secret powered by nature. Rich in Vitamin E and Omega-3 fatty acids, it deeply hydrates,restores skin elasticity, and fights signs of aging like fine lines and wrinkles. Its antioxidants protect your skin from environmental stress and free radical damage, promoting a radiant and even complexion.",
      benefit4Cardp2:
        " With its lightweight texture and anti-inflammatory properties, Sacha Inchi oil soothes irritation and balances oil production, making it perfect for all skin types. Reveal your natural glow with this Amazonian treasure.",
      //Parallax Text
      parallaxText: "Nature’s Superfood for a Healthier, Happier You",
    },
    section5: {
      title: "Discover Our Products",
      //Product 1
      product1Title: "Oil",
      product1p1:
        "Sacha Inchi Oil is a nutrient-rich treasure packed with Omega-3s, Vitamin E, and powerful antioxidants.",
      product1Subtitle: "How To Use It",
      product1p2:
        "Perfect for drizzling over salads, or as a supplement, it supports heart health, glowing skin, and overall vitality.",
      //Product 2
      product2Title: "Protein Powder",
      product2p1:
        "Sacha Inchi Protein Powder is a plant-based powerhouse loaded with essential amino acids.",
      product2Subtitle: "How To Use It",
      product2p2:
        "Add it to smoothies, baked goods, or post-workout shakes for natural muscle recovery and sustained energy.",
      //Product 3
      product3Title: "Snacks",
      product3p1:
        "Toasted Sacha Inchi Seeds are a crunchy, satisfying snack packed with protein, fiber, and healthy fats.",
      product3Subtitle: "How To Use It",
      product3p2:
        "Perfect for guilt-free munching while boosting your energy and overall health.",
    },
    section6: {
      title: "Awards for Sacha Inchi",
      description:
        "Recognized Excellence: Award-Winning Sacha Inchi Oil Through the Years",
    },
    section7: {
      title: "Experience the Benefits of Sacha Inchi",
      description:
        "Take the first step towards better health and wellness with this award-winning Amazonian treasure. Learn more to start your journey.",
      button: "Learn More",
    },
    section8: {
      description:
        "Discover the natural benefits of Sacha Inchi, the Amazonian treasure for your health and wellness.",
      home: "Home",
      aboutUs: "About Us",
      products: "Products",
      contact: "Contact",
      followUs: "Follow Us",
    },
  },

  es: {
    section1: {
      subtitle: "El Superalimento del Amazonas para una Vida Más Saludable.",
      description:
        "Descubre la bondad natural de una nutrición sostenible y rica en omegas 3, 6 y 9.",
      cta: "Descubre el Secreto del Amazonas!",
    },
    section2: {
      home: "Inicio",
      aboutUs: "Acerca de Nosotros",
      contact: "Contactanos",
    },
    section3: {
      title: "Qué es Sacha Inchi?",
      p1: "Originario de la selva amazónica de Ecuador, Colombia y Perú, el Sacha Inchi ha sido apreciado durante siglos por sus increíbles beneficios nutricionales. Repleto de omega-3, proteínas, fibra, vitamina E y antioxidantes, es un verdadero tesoro para tu salud.",
      p2: "El valioso aceite de Sacha Inchi es un tesoro de nutrientes, conocido por sus incomparables beneficios para la salud. Disfruta de su bondad en tu cocina, en tu rutina de cuidado de la piel o como un suplemento diario, y experimenta la magia de esta maravilla amazónica.",
    },
    section4: {
      title: "Sacha Inchi",
      subtitle: "es un Super Alimento",
      benefit1Title: "Anti-Inflamatorio",
      benefit2Title: "Desarrollo Muscular",
      benefit3Title: "Salud Cardiovascular",
      benefit4Title: "Beneficios para la Piel",
      //Card1
      benefit1CardTitle:
        "Alivia la inflamación y mejora tu salud de forma natural",
      benefit1Cardp1:
        "Sacha Inchi es una poderosa fuente de ácidos grasos Omega-3 y vitamina E, que ofrece propiedades antiinflamatorias y antioxidantes.",
      benefit1Cardp2:
        "Estos nutrientes trabajan en conjunto para reducir la inflamación, aliviar el dolor articular, la rigidez muscular y los síntomas de afecciones como la artritis, además de proteger las células del estrés oxidativo y el daño.",
      //Card2
      benefit2CardTitle:
        "Nutre tus músculos, recupérate más rápido y crece más fuerte",
      benefit2Cardp1:
        "Rico en proteínas de alta calidad para la reparación, recuperación y crecimiento muscular. Después del ejercicio, su proteína ayuda a reconstruir el tejido muscular, reducir el dolor y acelerar la recuperación.",
      benefit2Cardp2:
        "Cargado de magnesio y potasio, previene calambres, apoya la función muscular y restaura el equilibrio de electrolitos. Sus propiedades antiinflamatorias y ácidos grasos Omega-3 reducen la inflamación muscular, ayudándote a recuperarte más rápido, rendir mejor y desarrollar músculos fuertes y definidos de forma natural.",
      //Card3
      benefit3CardTitle: "Apoya un corazón más fuerte, de forma natural",
      benefit3Cardp1:
        "Cargado con ácidos grasos Omega-3, fitoesteroles y antioxidantes que trabajan juntos para mejorar la salud cardiovascular. Sus Omega-3 ayudan a reducir el colesterol malo (LDL), aumentar el colesterol bueno (HDL) y disminuir la presión arterial, promoviendo un flujo sanguíneo saludable y protegiendo contra enfermedades del corazón.",
      benefit3Cardp2:
        "Los antioxidantes, incluida la vitamina E, protegen tu corazón y arterias del estrés oxidativo, mientras que sus propiedades antiinflamatorias respaldan la función general del corazón. Incorporar Sacha Inchi en tu dieta es una forma natural de mantener un corazón más saludable y fuerte.",
      //Card4
      benefit4CardTitle: "Luce naturalmente con una piel nutrida y saludable",
      benefit4Cardp1:
        "El aceite de Sacha Inchi es un secreto de belleza impulsado por la naturaleza. Rico en vitamina E y ácidos grasos Omega-3, hidrata profundamente, restaura la elasticidad de la piel y combate los signos de envejecimiento como las líneas finas y las arrugas. Sus antioxidantes protegen tu piel del estrés ambiental y los daños de los radicales libres, promoviendo un cutis radiante y uniforme.",
      benefit4Cardp2:
        "Con su textura ligera y propiedades antiinflamatorias, el aceite de Sacha Inchi calma la irritación y equilibra la producción de grasa, lo que lo hace perfecto para todo tipo de piel. Descubre tu brillo natural con este tesoro amazónico.",
      //ParallaxText
      parallaxText:
        "El Superalimento de la Naturaleza para una Vida más Saludable y Feliz",
    },
    section5: {
      title: "Descubre Nuestros Productos",
      // Product 1
      product1Title: "Aceite",
      product1p1:
        "El aceite de Sacha Inchi es un tesoro rico en nutrientes, cargado de Omega-3, vitamina E y potentes antioxidantes.",
      product1Subtitle: "Cómo usarlo",
      product1p2:
        "Perfecto para aderezar ensaladas o como suplemento, apoya la salud del corazón, una piel radiante y el bienestar general.",

      // Product 2
      product2Title: "Proteína en Polvo",
      product2p1:
        "La proteína en polvo de Sacha Inchi es una fuente vegetal poderosa cargada de aminoácidos esenciales.",
      product2Subtitle: "Cómo usarla",
      product2p2:
        "Agrégala a batidos, productos horneados o bebidas post-entrenamiento para una recuperación muscular natural y energía sostenida.",

      // Product 3
      product3Title: "Snacks",
      product3p1:
        "Las semillas tostadas de Sacha Inchi son un snack crujiente y satisfactorio, rico en proteínas, fibra y grasas saludables.",
      product3Subtitle: "Cómo usarlas",
      product3p2:
        "Perfectas para un antojo sin culpa mientras impulsas tu energía y tu salud en general.",
    },
    section6: {
      title: "Reconocimientos Recibidos Por Sacha Inchi",
      description:
        "Excelencia Reconocida: Aceite de Sacha Inchi Ganador de Premios a lo Largo de los Años",
    },
    section7: {
      title: "Experimenta los Beneficios de Sacha Inchi",
      description:
        "Da el primer paso hacia una mejor salud y bienestar con este tesoro amazónico galardonado. Aprende más para comenzar tu viaje.",
      button: "Aprende Más",
    },
    section8: {
      description:
        "Descubre los beneficios naturales del Sacha Inchi, el tesoro amazónico para tu salud y bienestar.",
      home: "Inicio",
      aboutUs: "Acerca de Nosotros",
      products: "Productos",
      contact: "Contactanos",
      followUs: "Siguenos",
    },
  },
};

function updateTranslations(language) {
  console.log(`activated`);

  Object.keys(translations[language]).forEach((sectionId) => {
    const sectionData = translations[language][sectionId];
    const section = document.getElementById(sectionId);

    if (section) {
      Object.keys(sectionData).forEach((role) => {
        const element = section.querySelector(`[data-role=${role}]`);
        if (element) {
          element.textContent = sectionData[role];
        }
      });
    }
  });
}

const languageToggle = document.getElementById("languageToggle");

languageToggle.addEventListener("change", (event) => {
  const selectedLanguage = event.target.checked ? "es" : "en";
  console.log("Selected Language:", selectedLanguage);
  updateTranslations(selectedLanguage); // Call your translation function
});

// Set default language
const userLanguage = navigator.language.startsWith("es") ? "es" : "en";

languageToggle.checked = userLanguage === "es";
updateTranslations(userLanguage);

// window.addEventListener("load",() => updateTranslations(userLanguage))
