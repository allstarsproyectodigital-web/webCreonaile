import Image from 'next/image';
import { Header, ContactForm } from './ui';
const wa = 'https://wa.me/34658160726';
const services = [
 ['TCC','Terapia Cognitivo-Conductual','Un espacio seguro para comprender lo que sientes, trabajar ansiedad, autoestima, duelo y procesos de cambio con objetivos claros.'],
 ['TRAUMA','Trauma y EMDR','Acompañamiento para procesar experiencias dolorosas, miedos, bloqueos y heridas emocionales sin quedarte atrapada/o en ellas.'],
 ['MAYORES','Mayores, memoria y demencias','Evaluación neuropsicológica, pautas de actuación y rehabilitación cognitiva presencial u online para cuidar autonomía y calidad de vida.'],
 ['FAMILIAS','Familias y cuidadores','Apoyo frente al estrés del cuidador y acompañamiento en decisiones relacionadas con tus padres o con una persona adulta mayor.'],
 ['SNOEZELEN','Terapia multisensorial','Método Snoezelen para favorecer estimulación, calma, regulación y conexión con el entorno a través de los sentidos.'],
 ['COMUNIDAD','Sesiones grupales','Grupos reducidos para compartir experiencias y trabajar gestión emocional, autoestima, duelo y crecimiento personal con respeto.'],
];
const plans = [
 {name:'Sesión individual',price:'47',detail:'Una sesión · 50 minutos',items:['Atención personalizada','Presencial u online','Objetivos adaptados']},
 {name:'Bono impulso · 4 sesiones',price:'176',detail:'44 € por sesión · Ahorras 12 €',items:['Continuidad en el proceso','Válido durante 2 meses','Seguimiento de objetivos']},
 {name:'Bono proceso · 8 sesiones',price:'336',detail:'42 € por sesión · Ahorras 40 €',items:['Proceso más profundo','Válido durante 4 meses','Revisión del progreso']},
];
export default function Home() {
 return <>
 <a className="skip-link" href="#contenido">Saltar al contenido</a><Header/>
 <main id="contenido">
 <section id="inicio" className="hero ocean"><div className="container hero-content">
 <p className="eyebrow">Psicología sanitaria · Pozuelo de Alarcón y online</p>
 <h1>Lo que te ocurre<br/>tiene un sentido.<br/><em>Vamos a comprenderlo.</em></h1>
 <p className="hero-lead">Un espacio sereno, profesional y cercano para cuidar tu bienestar<br className="desktop-break"/> emocional, tu memoria y tus relaciones.</p>
 <div className="hero-actions"><a href="#contacto" className="button">Primera toma de contacto gratuita ↗</a><a href="tel:+34658160726">+34 658 16 07 26</a></div>
 <p className="hero-credentials">Creonaile Ramos Noesi · Psicóloga General Sanitaria · Colegiada n.º 12.314</p>
 </div></section>
 <section id="servicios" className="section container">
 <div className="section-heading"><div><p className="eyebrow">Acompañamiento especializado</p><h2>Cada historia necesita<br/><em>una forma distinta de cuidado.</em></h2></div><p className="section-lead">Atención presencial y online con una mirada clínica, humana y adaptada a tu momento vital.</p></div>
 <div className="services-grid">{services.map(([tag,title,description],i)=><article key={tag} className="service-card">
 <Image src={'/images/service-'+(i+1)+'.webp'} alt="" fill sizes="(max-width: 650px) 100vw, (max-width: 900px) 50vw, 33vw" className="service-image"/>
 <div className="service-inner"><p className="service-tag">0{i+1} · {tag}</p><div><h3>{title}</h3><p>{description}</p><a href={wa+'?text='+encodeURIComponent('Hola Creonaile, me gustaría consultar el servicio de '+title+'.')} target="_blank" rel="noopener noreferrer" aria-label={'Consultar '+title+' por WhatsApp'}>Consultar este servicio ↗</a></div></div>
 </article>)}</div></section>
 <section className="process soft-gradient"><div className="container process-grid"><div><p className="eyebrow">Tu proceso</p><h2>Con calma<br/><em>y sin<br/>presión.</em></h2></div>{[
 ['Nos conocemos','Una primera conversación gratuita de 15 minutos para escuchar tu situación y resolver dudas.'],
 ['Definimos el camino','Elegimos el acompañamiento, la modalidad y una frecuencia que tengan sentido para ti.'],
 ['Avanzamos a tu ritmo','Un proceso profesional y respetuoso, con objetivos claros que revisamos contigo.'],
 ].map(([title,text],i)=><article className="process-step" key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
 <section id="sobre-mi" className="about soft-gradient"><div className="container about-grid">
 <figure className="portrait-panel"><div className="portrait"><Image src="/images/creonaile.webp" alt="Creonaile Ramos Noesi, psicóloga general sanitaria" fill sizes="(max-width: 650px) 85vw, 38vw"/></div><figcaption>Una trayectoria construida desde la escucha, el conocimiento y el respeto por cada historia.</figcaption><div className="experience"><strong>+25</strong><span>Años acompañando<br/>a personas y familias</span></div></figure>
 <div><p className="eyebrow">Sobre mí</p><h2>Soy Creonaile<br/>Ramos.</h2><p className="about-lead">Psicóloga General Sanitaria, especialista en gerontología, trauma y acompañamiento familiar.</p><p className="body-copy">Mi experiencia en centros sociosanitarios, evaluación e intervención psicológica me ha enseñado que detrás de cada diagnóstico hay una persona, una familia y una historia que merece ser escuchada.</p><ul className="credentials"><li>Psicóloga General Sanitaria · Col. 12.314</li><li>Especialista en Gerontología</li><li>Formación en EMDR y TCC</li><li>Máster en Dirección Sociosanitaria</li><li>Método Snoezelen · 2026</li><li>Docente, formadora y autora</li></ul></div>
 </div></section>
 <section id="sesiones" className="sessions section"><div className="container"><div className="section-heading"><div><p className="eyebrow">Sesiones y bonos</p><h2>Un proceso<br/><em>adaptado a ti.</em></h2></div><p className="section-lead">Presencialmente en Pozuelo de Alarcón u online. Empieza con una toma de contacto gratuita.</p></div>
 <div className="pricing-grid">{plans.map((p,i)=><article className={'price-card '+(i===1?'featured':'')} key={p.name}><h3>{p.name}</h3><p className="price">{p.price} €</p><p className="price-detail">{p.detail}</p><ul>{p.items.map(item=><li key={item}>{item}</li>)}</ul><a className="button" href={wa+'?text='+encodeURIComponent('Hola Creonaile, me gustaría recibir información sobre: '+p.name+'.')} target="_blank" rel="noopener noreferrer" aria-label={'Solicitar información: '+p.name}>Solicitar información ↗</a></article>)}</div>
 <div className="group-pricing"><div><p className="eyebrow">Espacios de comunidad</p><h3>Sesiones grupales</h3><p>Grupos reducidos · 75–90 minutos</p></div>{[['Sesión puntual','20'],['Bono 4 sesiones','68'],['Bono 8 sesiones','128']].map(([name,price])=><div className="group-price" key={name}><span>{name}</span><strong>{price} €</strong></div>)}</div>
 </div></section>
 <section className="section container book-section"><div className="book-visual"><Image src="/images/book.webp" alt="Portada de Mis abuelos se van a la residencia, de Creonaile Ramos Noesi" width={557} height={414} sizes="(max-width: 650px) 80vw, 32vw"/></div><div><p className="eyebrow">Recursos para acompañar</p><h2>También fuera<br/>de consulta.</h2><h3>Mis abuelos se van a la residencia</h3><p className="body-copy">Un cuento para explicar con sensibilidad los cambios en el cuidado de nuestros mayores. Una herramienta para familias, profesorado, profesionales de la psicología e instituciones.</p><dl className="book-facts"><div><dt>Páginas</dt><dd>28</dd></div><div><dt>Publicación</dt><dd>2025</dd></div><div><dt>Editorial</dt><dd>Apuleyo</dd></div></dl><a className="text-link" href="https://www.todostuslibros.com/libros/mis-abuelos-se-van-a-la-residencia_978-84-1060-539-8" target="_blank" rel="noopener noreferrer">Ver el libro y puntos de venta ↗</a></div></section>
 <section id="contacto" className="contact section ocean"><div className="container contact-grid"><div><p className="eyebrow">Cuando estés preparada/o</p><h2>No esperes a<br/>estar peor<br/><em>para empezar a cuidarte.</em></h2><p className="section-lead">La primera toma de contacto es gratuita. Cuéntame brevemente qué necesitas y te responderé personalmente.</p><div className="social-links"><a href={wa} target="_blank" rel="noopener noreferrer"><span className="social-icon">WA</span><span><small>Escríbeme directamente</small><strong>WhatsApp</strong></span><span>↗</span></a><a href="https://www.instagram.com/creonaileramos/" target="_blank" rel="noopener noreferrer"><span className="social-icon instagram">IG</span><span><small>Sígueme en Instagram</small><strong>@creonaileramos</strong></span><span>↗</span></a></div></div><ContactForm/></div></section>
 </main>
 <footer><div className="container footer-grid"><a className="brand" href="#inicio"><span className="brand-mark">CR</span><span>Creonaile Ramos<small>Psicóloga General Sanitaria</small></span></a><div><p>Colegiada n.º 12.314</p><p>Pozuelo de Alarcón · Atención online</p><p>© {new Date().getFullYear()} Creonaile Ramos Noesi</p></div><div className="footer-links"><a href="tel:+34658160726">+34 658 16 07 26</a><a href={wa} target="_blank" rel="noopener noreferrer">WhatsApp</a><a href="https://www.instagram.com/creonaileramos/" target="_blank" rel="noopener noreferrer">Instagram</a></div></div></footer>
 </>;
}
