import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  CalendarDays,
  Clock,
  Coffee,
  Mail,
  MapPin,
  Phone,
  Utensils
} from 'lucide-react'

import logoRevolucion from './assets/logo-revolucion.jpg'
import logoVillaquil from './assets/logo-villaquil.jpg'
import logoBonanza from './assets/logo-bonanza.jpg'
import ubicacionImg from './assets/ubicacion.jpg'

function App() {
  const [lang, setLang] = useState('es')
  const [experience, setExperience] = useState(null)

  const copy = useMemo(() => ({
    es: {
      brand: 'Re-Volución Boutique',
      nav: ['Inicio', 'Villaquil', 'Bonanza', 'Menú', 'Reservaciones', 'Ubicación'],
      heroKicker: 'Colección Villaquil',
      heroTitle: 'Herencia, tradición y vanguardia.',
      heroText: 'Una colección gastronómica en el corazón de la Colonia Centro: cocina mexicana contemporánea, café de altura y una estética boutique inspirada en el legado revolucionario.',
      reserve: 'Reservar experiencia',
      explore: 'Explorar experiencias',
      collection: 'Un legado. Dos experiencias. Una misma historia.',
      villaquilTitle: 'La Casa de Villaquil',
      villaquilText: 'Restaurante mexicano de raíz tradicional con presentación contemporánea, pensado para una experiencia cálida, elegante y memorable.',
      bonanzaTitle: 'Bonanza Café',
      bonanzaText: 'Café de altura, bebidas de autor, alimentos ligeros y terraza para disfrutar el Centro con calma y carácter.',
      menuTitle: 'Menú de la colección',
      menuSubtitle: 'Precios de referencia para demo comercial.',
      selectMenu: 'Selecciona una experiencia para ver su menú.',
      reservationTitle: 'Reserva tu lugar',
      reservationText: 'Formulario demo para reservar en La Casa de Villaquil o Bonanza Café. Horario de atención de lunes a domingo de 9:00 AM a 10:00 PM.',
      locationTitle: 'Centro Histórico, Ciudad de México',
      locationText: 'Artículo 123 #88, Col. Centro, CDMX.',
      footer: 'Estilo con historia. Gastronomía, café y legado mexicano con un toque contemporáneo.',
      fields: {
        name: 'Nombre completo',
        phone: 'Teléfono',
        email: 'Correo electrónico',
        guests: 'Personas',
        notes: 'Comentarios',
        submit: 'Enviar reservación demo'
      }
    },
    en: {
      brand: 'Re-Volución Boutique',
      nav: ['Home', 'Villaquil', 'Bonanza', 'Menu', 'Reservations', 'Location'],
      heroKicker: 'Villaquil Collection',
      heroTitle: 'Heritage, tradition and vanguard.',
      heroText: 'A gastronomic collection in the heart of Colonia Centro: contemporary Mexican cuisine, specialty coffee and a boutique aesthetic inspired by revolutionary legacy.',
      reserve: 'Book experience',
      explore: 'Explore experiences',
      collection: 'One legacy. Two experiences. One story.',
      villaquilTitle: 'La Casa de Villaquil',
      villaquilText: 'A Mexican restaurant rooted in tradition with a contemporary presentation, created for a warm, elegant and memorable experience.',
      bonanzaTitle: 'Bonanza Café',
      bonanzaText: 'Specialty coffee, signature drinks, light bites and a terrace to enjoy downtown with calm and character.',
      menuTitle: 'The collection menu',
      menuSubtitle: 'Reference pricing for commercial demo.',
      selectMenu: 'Select an experience to view its menu.',
      reservationTitle: 'Book your table',
      reservationText: 'Demo booking form for La Casa de Villaquil or Bonanza Café. Open daily from 9:00 AM to 10:00 PM.',
      locationTitle: 'Historic Downtown, Mexico City',
      locationText: 'Artículo 123 #88, Col. Centro, CDMX.',
      footer: 'Style with history. Gastronomy, coffee and Mexican legacy with a contemporary touch.',
      fields: {
        name: 'Full name',
        phone: 'Phone',
        email: 'Email',
        guests: 'Guests',
        notes: 'Comments',
        submit: 'Send demo reservation'
      }
    }
  }), [])

  const menus = {
    es: {
      villaquil: [
        ['Chilaquiles Verdes Villaquil', '$145', 'Totopos con salsa verde, crema, queso fresco y cebolla. Proteína: pollo, huevo o carne.'],
        ['Chilaquiles Rojos de la Casa', '$145', 'Salsa roja artesanal, crema, queso, cebolla y proteína a elegir.'],
        ['Chilaquiles Revolucionarios', '$165', 'Verdes o rojos con doble proteína y toque de la casa.'],
        ['Café de Olla Tradicional', '$55', 'Canela, piloncillo y aroma de cocina mexicana.'],
        ['Jugo Natural', '$65', 'Naranja o toronja.'],
        ['Limonada', '$55 / $65', 'Natural o mineral.'],
        ['Agua Mineral', '$45', 'Servicio individual.'],
        ['Refresco', '$45', 'Variedad de sabores.']
      ],
      bonanza: [
        ['Americano Bonanza', '$55', 'Café negro de extracción limpia.'],
        ['Latte de la Hacienda', '$72', 'Espresso con leche vaporizada.'],
        ['Capuchino Revolución', '$72', 'Espresso, espuma de leche y toque de cacao.'],
        ['Moka del General', '$78', 'Chocolate oscuro, espresso y leche cremosa.'],
        ['Cold Brew Bonanza', '$75', 'Extracción fría, suave y refrescante.'],
        ['Caramel Bonanza Frappe', '$89', 'Café, caramelo, leche y crema batida.'],
        ['Mollete de la Casa', '$92', 'Pan artesanal, frijol, queso gratinado y pico de gallo.'],
        ['Croissant Villaquil', '$88', 'Croissant con jamón de pavo, queso y aderezo de la casa.'],
        ['Panqué de Elote', '$65', 'Postre tradicional con presentación boutique.'],
        ['Pastel Bonanza', '$85', 'Chocolate o temporada.']
      ]
    },
    en: {
     villaquil: [
  ['Chilaquiles Verdes Villaquil', '$145', 'Tortilla chips with green salsa, cream, fresh cheese and onion. Protein: chicken, egg or beef.'],
  ['Chilaquiles Rojos de la Casa', '$145', 'Artisanal red salsa, cream, cheese, onion and protein of choice.'],
  ['Chilaquiles Revolucionarios', '$165', 'Green or red chilaquiles with double protein and house touch.'],
  ['Café de Olla Tradicional', '$55', 'Cinnamon, piloncillo and Mexican kitchen aroma.'],
  ['Jugo Natural', '$65', 'Orange or grapefruit.'],
  ['Limonada', '$55 / $65', 'Still or sparkling.'],
  ['Agua Mineral', '$45', 'Individual service.'],
  ['Refresco', '$45', 'Assorted flavors.']
],
    bonanza: [
  ['Americano Bonanza', '$55', 'Clean and aromatic black coffee.'],
  ['Latte de la Hacienda', '$72', 'Espresso with steamed milk.'],
  ['Capuchino Revolución', '$72', 'Espresso, milk foam and cocoa touch.'],
  ['Moka del General', '$78', 'Dark chocolate, espresso and creamy milk.'],
  ['Cold Brew Bonanza', '$75', 'Smooth and refreshing cold extraction.'],
  ['Caramel Bonanza Frappe', '$89', 'Coffee, caramel, milk and whipped cream.'],
  ['Mollete de la Casa', '$92', 'Artisanal bread, beans, melted cheese and pico de gallo.'],
  ['Croissant Villaquil', '$88', 'Croissant with turkey ham, cheese and house dressing.'],
  ['Panqué de Elote', '$65', 'Traditional dessert with boutique presentation.'],
  ['Pastel Bonanza', '$85', 'Chocolate or seasonal flavor.']
]
    }
  }

  const t = copy[lang]
  const activeMenu = experience ? menus[lang][experience] : []

  const openMenu = (selectedExperience) => {
    setExperience(selectedExperience)

    setTimeout(() => {
      document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  const sendReservation = (event) => {
    event.preventDefault()
    alert(lang === 'es' ? 'Reservación demo enviada.' : 'Demo reservation sent.')
  }

  return (
    <div className="site">
      <header className="navbar">
        <div className="navbar-inner">
        <a href="#inicio" className="brand-area">
  <div className="brand-mark image-brand-mark">
    <img src={logoRevolucion} alt="Re-Volución Boutique" />
  </div>

  <div>
    <div className="brand-name">{t.brand}</div>
    <div className="brand-subtitle">Villaquil · Bonanza</div>
  </div>
</a>
          <nav className="nav-links">
            <a href="#inicio">{t.nav[0]}</a>
            <a href="#villaquil">{t.nav[1]}</a>
            <a href="#bonanza">{t.nav[2]}</a>
            <a href="#menu">{t.nav[3]}</a>
            <a href="#reservaciones">{t.nav[4]}</a>
            <a href="#ubicacion">{t.nav[5]}</a>
          </nav>

          <button className="lang-button" onClick={() => setLang(lang === 'es' ? 'en' : 'es')}>
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
        </div>
      </header>

      <section id="inicio" className="hero">
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <div className="kicker">{t.heroKicker}</div>
    <h1>{t.heroTitle}</h1>
    <p>{t.heroText}</p>

    <div className="hero-actions">
      <a href="#reservaciones" className="primary-button">
        {t.reserve}
      </a>

      <a href="#experiencias" className="secondary-button">
        {t.explore}
      </a>
    </div>
  </motion.div>

  <motion.div
    className="logo-card"
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.9, delay: 0.15 }}
  >
    <div className="logo-display">
      <img
        className="hero-logo-real"
        src={logoRevolucion}
        alt="Re-Volución Boutique"
      />

      <p>{t.collection}</p>
    </div>
  </motion.div>
</section>  

<section className="collection-section">
  <div className="container">
    <motion.div
      className="collection-card"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="collection-content">
        <div className="kicker">
          {lang === 'es' ? 'Colección Villaquil' : 'Villaquil Collection'}
        </div>

        <h2>
          {lang === 'es'
            ? 'Una marca boutique con dos experiencias gastronómicas.'
            : 'A boutique brand with two gastronomic experiences.'}
        </h2>

        <p>
          {lang === 'es'
            ? 'Re-Volución Boutique reúne el carácter histórico de la cocina mexicana con una propuesta contemporánea: La Casa de Villaquil como restaurante de planta alta y Bonanza Café como cafetería de planta baja.'
            : 'Re-Volución Boutique brings together the historical character of Mexican cuisine with a contemporary proposal: La Casa de Villaquil as the upper-floor restaurant and Bonanza Café as the ground-floor coffee house.'}
        </p>
      </div>

      <div className="collection-pillars">
        <div className="pillar">
          <span>01</span>
          <strong>{lang === 'es' ? 'Herencia' : 'Heritage'}</strong>
          <p>
            {lang === 'es'
              ? 'Inspiración mexicana, memoria histórica y detalles tradicionales.'
              : 'Mexican inspiration, historical memory and traditional details.'}
          </p>
        </div>

        <div className="pillar">
          <span>02</span>
          <strong>{lang === 'es' ? 'Tradición' : 'Tradition'}</strong>
          <p>
            {lang === 'es'
              ? 'Sabores reconocibles, recetas familiares y servicio cálido.'
              : 'Recognizable flavors, familiar recipes and warm service.'}
          </p>
        </div>

        <div className="pillar">
          <span>03</span>
          <strong>{lang === 'es' ? 'Vanguardia' : 'Vanguard'}</strong>
          <p>
            {lang === 'es'
              ? 'Presentación boutique, ambiente elegante y experiencia memorable.'
              : 'Boutique presentation, elegant atmosphere and memorable experience.'}
          </p>
        </div>
      </div>
    </motion.div>
  </div>
</section>

<section id="experiencias" className="section section-dark">
  <div className="container">
    <div className="experiences">
      <ExperienceCard
        id="villaquil"
        icon={<Utensils />}
        label="Restaurant"
        title={t.villaquilTitle}
        text={t.villaquilText}
        buttonText={lang === 'es' ? 'Ver menú Villaquil' : 'View Villaquil menu'}
        onClick={() => openMenu('villaquil')}
      />

      <ExperienceCard
        id="bonanza"
        icon={<Coffee />}
        label="Coffee House"
        title={t.bonanzaTitle}
        text={t.bonanzaText}
        buttonText={lang === 'es' ? 'Ver menú Bonanza' : 'View Bonanza menu'}
        onClick={() => openMenu('bonanza')}
      />
    </div>
  </div>
</section>

      <section id="menu" className="section">
        <div className="container">
          <div className="menu-header">
            <div>
              <div className="kicker">
                {experience === 'villaquil'
                  ? 'La Casa de Villaquil'
                  : experience === 'bonanza'
                    ? 'Bonanza Café'
                    : lang === 'es'
                      ? 'Menú'
                      : 'Menu'}
              </div>

              <h2 className="section-title">
                {experience === 'villaquil'
                  ? lang === 'es'
                    ? 'Menú de La Casa de Villaquil'
                    : 'La Casa de Villaquil Menu'
                  : experience === 'bonanza'
                    ? lang === 'es'
                      ? 'Menú de Bonanza Café'
                      : 'Bonanza Café Menu'
                    : t.menuTitle}
              </h2>

              <p className="section-description">
                {experience ? t.menuSubtitle : t.selectMenu}
              </p>
            </div>

            <div className="menu-tabs">
              <button
                className={experience === 'villaquil' ? 'menu-tab active' : 'menu-tab'}
                onClick={() => setExperience('villaquil')}
              >
                La Casa de Villaquil
              </button>

              <button
                className={experience === 'bonanza' ? 'menu-tab active' : 'menu-tab'}
                onClick={() => setExperience('bonanza')}
              >
                Bonanza Café
              </button>
            </div>
          </div>

          {experience ? (
            <motion.div
              key={experience + lang}
              className="menu-grid"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              {activeMenu.map((item) => (
                <div className="menu-item" key={item[0]}>
                  <div className="menu-item-top">
                    <div>
                      <h3>{item[0]}</h3>
                      <p>{item[2]}</p>
                    </div>
                    <div className="price">{item[1]}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <div className="empty-menu">
              {lang === 'es'
                ? 'Selecciona La Casa de Villaquil o Bonanza Café para desplegar su menú.'
                : 'Select La Casa de Villaquil or Bonanza Café to display its menu.'}
            </div>
          )}
        </div>
      </section>
      <section className="gallery-section">
  <div className="container">
    <div className="gallery-header">
      <div>
        <div className="kicker">
          {lang === 'es' ? 'Ambiente boutique' : 'Boutique Atmosphere'}
        </div>

        <h2 className="section-title">
          {lang === 'es'
            ? 'Una experiencia visual con alma mexicana.'
            : 'A visual experience with Mexican soul.'}
        </h2>
      </div>

      <p className="section-description">
        {lang === 'es'
          ? 'Talavera, ladrillo rojo, detalles dorados y una atmósfera contemporánea pensada para elevar cada visita.'
          : 'Talavera, red brick, golden details and a contemporary atmosphere designed to elevate every visit.'}
      </p>
    </div>

    <div className="gallery-grid">
      <div className="gallery-card gallery-large">
        <span>{lang === 'es' ? 'Talavera artesanal' : 'Artisanal Talavera'}</span>
        <h3>{lang === 'es' ? 'Raíz mexicana' : 'Mexican Roots'}</h3>
      </div>

      <div className="gallery-card gallery-brick">
        <span>{lang === 'es' ? 'Ladrillo rojo' : 'Red Brick'}</span>
        <h3>{lang === 'es' ? 'Calidez histórica' : 'Historic Warmth'}</h3>
      </div>

      <div className="gallery-card gallery-coffee">
        <span>{lang === 'es' ? 'Bonanza Café' : 'Bonanza Café'}</span>
        <h3>{lang === 'es' ? 'Café de altura' : 'Specialty Coffee'}</h3>
      </div>

      <div className="gallery-card gallery-food">
        <span>{lang === 'es' ? 'Villaquil' : 'Villaquil'}</span>
        <h3>{lang === 'es' ? 'Cocina mexicana' : 'Mexican Cuisine'}</h3>
      </div>

      <div className="gallery-card gallery-gold">
        <span>{lang === 'es' ? 'Negro & dorado' : 'Black & Gold'}</span>
        <h3>{lang === 'es' ? 'Detalle boutique' : 'Boutique Detail'}</h3>
      </div>
    </div>
  </div>
</section>

      <section id="reservaciones" className="section section-dark">
        <div className="container reservation-layout">
          <div>
            <div className="kicker">Reservations</div>
            <h2 className="section-title">{t.reservationTitle}</h2>
            <p className="section-description">{t.reservationText}</p>

            <div className="info-list">
              <Info icon={<Clock />} text="Lunes a domingo · 9:00 AM - 10:00 PM" />
              <Info icon={<Phone />} text="+52 55 0000 0000" />
              <Info icon={<Mail />} text="reservaciones@revolucionboutique.mx" />
            </div>
          </div>

          <div className="form-card">
            <form className="reservation-form" onSubmit={sendReservation}>
              <input className="input-lux" placeholder={t.fields.name} required />
              <input className="input-lux" placeholder={t.fields.phone} required />
              <input className="input-lux" type="email" placeholder={t.fields.email} required />

              <select className="input-lux">
                <option>La Casa de Villaquil</option>
                <option>Bonanza Café</option>
              </select>

              <input className="input-lux" type="date" required />
              <input className="input-lux" type="time" required />
              <input className="input-lux" type="number" min="1" placeholder={t.fields.guests} required />

              <select className="input-lux">
                <option>{lang === 'es' ? 'Restaurante planta alta' : 'Upper floor restaurant'}</option>
                <option>{lang === 'es' ? 'Cafetería planta baja' : 'Ground floor coffee shop'}</option>
                <option>{lang === 'es' ? 'Para llevar' : 'Takeaway'}</option>
              </select>

              <textarea className="input-lux" placeholder={t.fields.notes}></textarea>

              <button className="submit-button" type="submit">
                {t.fields.submit}
              </button>
            </form>
          </div>
        </div>
      </section>

      <section id="ubicacion" className="section">
        <div className="container location-grid">
          <div>
            <div className="kicker">Location</div>
            <h2 className="section-title">{t.locationTitle}</h2>
            <p className="section-description">{t.locationText}</p>

            <div className="info-list">
              <Info icon={<MapPin />} text="Artículo 123 #88, Col. Centro, CDMX" />
            </div>
          </div>
          <div>
  <div className="map-demo map-demo-photo">
    <img
      src={ubicacionImg}
      alt="Ubicación Re-Volución Boutique"
    />
  </div>

  <p className="map-demo-note">
    {lang === 'es'
      ? 'Google Maps se conecta en la versión productiva.'
      : 'Google Maps will be connected in the production version.'}
  </p>
</div>

         
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div>
            <div className="footer-brand">Re-Volución Boutique</div>
            <div className="footer-text">{t.footer}</div>
          </div>

          <div className="info-row">
            <CalendarDays />
            Demo POC · Vercel
          </div>
        </div>
      </footer>
    </div>
  )
}

function ExperienceCard({ id, icon, label, title, text, buttonText, onClick }) {
  return (
    <motion.div
      id={id}
      className="experience-card"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div>
        <div className="icon-circle">{icon}</div>
        <div className="kicker">{label}</div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>

      <button className="experience-button" onClick={onClick}>
        {buttonText}
      </button>
    </motion.div>
  )
}

function Info({ icon, text }) {
  return (
    <div className="info-row">
      {icon}
      <span>{text}</span>
    </div>
  )
}

export default App
