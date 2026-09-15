'use client';
import { useState, type FormEvent } from 'react';
export function Header(){
 const [open,setOpen]=useState(false);
 return <header className="site-header"><div className="header-inner"><a href="#inicio" className="brand" onClick={()=>setOpen(false)}><span className="brand-mark">CR</span><span>Creonaile Ramos<small>Psicología sanitaria</small></span></a><button className="menu-toggle" aria-expanded={open} aria-controls="main-nav" onClick={()=>setOpen(!open)}>{open?'Cerrar ✕':'Menú ☰'}</button><nav aria-label="Navegación principal" id="main-nav" className={open?'nav is-open':'nav'}>{[['servicios','Cómo puedo ayudarte'],['sobre-mi','Sobre mí'],['sesiones','Sesiones'],['contacto','Contacto']].map(([id,label])=><a href={'#'+id} key={id} onClick={()=>setOpen(false)}>{label}</a>)}</nav><a className="whatsapp-button" href="https://wa.me/34658160726" target="_blank" rel="noopener noreferrer"><span>WA</span>WhatsApp ↗</a></div></header>;
}
export function ContactForm(){
 const [prepared,setPrepared]=useState(false);
 function submit(event:FormEvent<HTMLFormElement>){
  event.preventDefault();
  const data=new FormData(event.currentTarget);
  const message='Hola Creonaile, me gustaría solicitar una primera toma de contacto gratuita.\nNombre: '+String(data.get('nombre')).trim()+'\nTeléfono: '+String(data.get('telefono')).trim()+'\nModalidad: '+data.get('modalidad')+'\n'+String(data.get('mensaje')).trim();
  window.open('https://wa.me/34658160726?text='+encodeURIComponent(message),'_blank','noopener,noreferrer');
  setPrepared(true);
 }
 return <form className="contact-form" onSubmit={submit}><div className="form-row"><label>Nombre<input name="nombre" autoComplete="given-name" placeholder="Tu nombre" maxLength={100} required/></label><label>Teléfono<input name="telefono" type="tel" autoComplete="tel" placeholder="Tu número" minLength={7} maxLength={20} required/></label></div><label className="modality">Modalidad<select name="modalidad" defaultValue="" required><option value="" disabled>Selecciona</option><option>Presencial en Pozuelo de Alarcón</option><option>Online</option><option>Por decidir</option></select></label><label>¿En qué puedo ayudarte?<textarea name="mensaje" placeholder="Cuéntame brevemente qué necesitas" rows={4} maxLength={1200}/></label><label className="consent"><input name="consentimiento" type="checkbox" required/><span>Acepto que mis datos se utilicen únicamente para responder a esta solicitud.</span></label><button className="button" type="submit">Solicitar toma de contacto gratuita ↗</button><p className="form-note">Se abrirá WhatsApp con un mensaje dirigido a Creonaile. Podrás revisarlo antes de enviarlo.</p><p className="form-status" role="status">{prepared?'Mensaje preparado en WhatsApp. La solicitud se enviará cuando pulses Enviar allí.':''}</p></form>;
}
