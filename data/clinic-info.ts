export const clinicInfo = {
  phone: '+58 (412) 155 35 98',
  phoneHref: 'tel:+584121553598',
  whatsappHref: 'https://wa.me/584121553598',
  hours: {
    weekdays: 'Lunes a Viernes: 8:00 AM - 5:00 PM',
    saturday: 'Sábados: 9:00 AM - 1:00 PM',
    sunday: 'Domingos: Cerrado'
  },
  locations: {
    biscucuy: {
      name: 'Biscucuy',
      address: 'Carrera 1 Bolívar, entre calle Páez y Negro Primero. Al lado de la antigua Casa Blanca.',
      city: 'Biscucuy, Portuguesa, Venezuela',
      path: '/ubicacion/biscucuy'
    },
    chabasquen: {
      name: 'Chabásquen',
      address: 'Avenida Sucre con Calle Córdoba y Arismendi, Edificio del Señor Chelopez, planta baja, local 5.',
      city: 'Chabásquen, Portuguesa, Venezuela',
      path: '/ubicacion/chabasquen'
    }
  }
} as const
