<template>
    <section class="contacto-section">
        <h1 class="page-title">Contacto - Agenda tu Cita Dental</h1>
        <div class="container">
            
            <div class="contacto-wrapper">
                <div class="contacto-info">
                    <h2>Contáctanos</h2>
                    <p>Estamos aquí para responder tus preguntas y programar tu cita. Completa el formulario y nos
                        pondremos en contacto contigo lo antes posible.</p>

                    <div class="info-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <div>
                            <h3>Nuestras Ubicaciones</h3>
                            <p>{{ clinicInfo.locations.biscucuy.address }}<br>{{ clinicInfo.locations.biscucuy.city }}</p>
                            <p>{{ clinicInfo.locations.chabasquen.address }}<br>{{ clinicInfo.locations.chabasquen.city }}</p>
                        </div>
                    </div>

                    <div class="info-item">
                        <i class="fas fa-phone-alt"></i>
                        <div>
                            <h3>Teléfonos</h3>
                            <p><a :href="clinicInfo.phoneHref">{{ clinicInfo.phone }}</a></p>
                        </div>
                    </div>

                    <div class="info-item">
                        <i class="fas fa-clock"></i>
                        <div>
                            <h3>Horario de Atención</h3>
                            <p>{{ clinicInfo.hours.weekdays }}</p>
                            <p>{{ clinicInfo.hours.saturday }}</p>
                            <p>{{ clinicInfo.hours.sunday }}</p>
                        </div>
                    </div>

                    <div class="social-links">
                        <a href="https://www.facebook.com/especialidadesodontologica.periodent/" target="_blank"
                            rel="noopener noreferrer" aria-label="Facebook de Periodent" class="social-link"><i class="fab fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/od.daigremarsalas/" target="_blank"
                            rel="noopener noreferrer" aria-label="Instagram de Periodent" class="social-link"> <i
                                class="fab fa-instagram"></i></a>
                        <a href="https://wa.me/584121553598?text=¡Hola!%20Estoy%20interesado%20en%20agendar%20una%20cita%20en%20su%20clínica%20dental."
                            target="_blank" rel="noopener noreferrer" aria-label="WhatsApp de Periodent" class="social-link"><i class="fab fa-whatsapp"></i></a>
                    </div>
                </div>

                <div class="contacto-form">
                    <h3>Envíanos un mensaje</h3>
                    <form @submit.prevent="enviarFormulario">
                        <div class="form-group">
                            <label for="nombre">Nombre completo*</label>
                            <input type="text" id="nombre" v-model="formulario.nombre" required
                                placeholder="Ingresa tu nombre completo">
                        </div>

                        <div class="form-group">
                            <label for="telefono">Teléfono*</label>
                            <input type="tel" id="telefono" v-model="formulario.telefono" required
                                placeholder="Ej: +58 412 1234567">
                        </div>

                        <div class="form-group">
                            <label for="email">Correo electrónico</label>
                            <input type="email" id="email" v-model="formulario.email"
                                placeholder="Ingresa tu correo electrónico">
                        </div>

                        <div class="form-group">
                            <label for="sede">Sede de preferencia</label>
                            <select id="sede" v-model="formulario.sede">
                                <option value="">Selecciona una sede</option>
                                <option value="biscucuy">Biscucuy</option>
                                <option value="chabasquen">Chabasquén</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="servicio">Servicio de interés</label>
                            <select id="servicio" v-model="formulario.servicio">
                                <option value="">Selecciona un servicio</option>
                                <option value="consulta">Consulta general</option>
                                <option value="limpieza">Limpieza dental</option>
                                <option value="ortodoncia">Ortodoncia</option>
                                <option value="implantes">Implantes dentales</option>
                                <option value="estetica">Estética dental</option>
                                <option value="endodoncia">Endodoncia</option>
                                <option value="cirugia">Cirugía oral</option>
                                <option value="otro">Otro</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="mensaje">Mensaje*</label>
                            <textarea id="mensaje" v-model="formulario.mensaje" required
                                placeholder="Describe brevemente tu consulta o el motivo de tu visita"
                                rows="4"></textarea>
                        </div>

                        <div class="form-trap" aria-hidden="true">
                            <label for="website">Sitio web</label>
                            <input id="website" v-model="formulario.website" type="text" tabindex="-1" autocomplete="off">
                        </div>

                        <div class="form-group checkbox-group">
                            <input type="checkbox" id="terminos" v-model="formulario.terminos" required>
                            <label for="terminos">Acepto la <NuxtLink to="/privacidad">política de privacidad</NuxtLink> y el tratamiento de mis datos personales para responder esta solicitud.</label>
                        </div>

                        <div class="contact-actions">
                            <button type="submit" class="btn btn-primary" :disabled="enviando">
                                <span v-if="!enviando">Enviar mensaje</span>
                                <span v-else>Enviando...</span>
                            </button>
                            <a class="whatsapp-link" :href="whatsappHref" target="_blank" rel="noopener noreferrer">
                                <i class="fab fa-whatsapp" aria-hidden="true"></i> Escribir por WhatsApp
                            </a>
                        </div>

                        <div v-if="mensajeExito" class="mensaje-exito">
                            <i class="fas fa-check-circle"></i> {{ mensajeExito }}
                        </div>

                        <div v-if="mensajeError" class="mensaje-error">
                            <i class="fas fa-exclamation-circle"></i> {{ mensajeError }}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { clinicInfo } from '@/data/clinic-info';

export default {
    name: 'ContactoForm',
    data() {
        return {
            clinicInfo,
            formulario: {
                nombre: '',
                telefono: '',
                email: '',
                sede: '',
                servicio: '',
                mensaje: '',
                website: '',
                terminos: false
            },
            enviando: false,
            mensajeExito: '',
            mensajeError: ''
        };
    },
    computed: {
        whatsappHref() {
            const details = [
                'Hola, vengo del sitio web periodent.com.ve y quiero agendar una cita en Periodent.',
                this.formulario.nombre && `Nombre: ${this.formulario.nombre}`,
                this.formulario.telefono && `Teléfono: ${this.formulario.telefono}`,
                this.formulario.sede && `Sede: ${this.formulario.sede}`,
                this.formulario.servicio && `Servicio: ${this.formulario.servicio}`,
                this.formulario.mensaje && `Mensaje: ${this.formulario.mensaje}`
            ].filter(Boolean);

            return `${clinicInfo.whatsappHref}?text=${encodeURIComponent(details.join('\n'))}`;
        }
    },
    methods: {
        async enviarFormulario() {
            if (this.formulario.website) return;

            this.enviando = true;
            this.mensajeExito = '';
            this.mensajeError = '';

            try {
                const apiBaseUrl = (this.$config.public.apiUrl || 'https://periodent.com.ve/api').replace(/\/+$/, '');
                const apiUrl = `${apiBaseUrl}/contacto.php`;

                // Enviar petición a la API
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(this.formulario)
                });

                const data = await response.json();

                if (response.ok && data.success) {
                    // Respuesta exitosa
                    this.mensajeExito = data.message;

                    // Resetear formulario tras 2 segundos
                    setTimeout(() => {
                        this.formulario = {
                            nombre: '',
                            telefono: '',
                            email: '',
                            sede: '',
                            servicio: '',
                            mensaje: '',
                            website: '',
                            terminos: false
                        };
                    }, 2000);

                } else {
                    // Error de validación o del servidor
                    if (data.errors) {
                        // Mostrar errores de validación
                        const erroresTexto = Object.values(data.errors).join('. ');
                        this.mensajeError = erroresTexto;
                    } else {
                        this.mensajeError = data.message || 'Error al enviar el mensaje. Por favor intenta nuevamente.';
                    }
                }

            } catch (error) {
                console.error('Error al enviar formulario:', error);
                this.mensajeError = 'No pudimos enviar el formulario. Verifica tu conexión o escríbenos directamente por WhatsApp usando el botón de abajo; tus datos ya están preparados.';

            } finally {
                this.enviando = false;
            }
        }
    }
};
</script>

<style scoped>
h1 {
    text-align: center;
    margin-bottom: 3rem;
    color: var(--accent-color);
    font-size: 2.5rem;
}
.contacto-section {
    padding: 80px 0;
    background-color: var(--light-bg);
}

.contacto-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    background-color: var(--white);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: var(--box-shadow);
}



.contacto-info {
    flex: 1;
    min-width: 300px;
    padding: 40px;
    background-color: var(--accent-color);
    color: var(--white);
}

.contacto-info h2 {
    font-size: 2.2rem;
    margin-bottom: 20px;
    color: var(--white);
}

.contacto-info>p {
    margin-bottom: 30px;
    line-height: 1.6;
}

.info-item {
    display: flex;
    margin-bottom: 25px;
}

.info-item i {
    font-size: 1.5rem;
    color: var(--primary-color);
    margin-right: 15px;
    margin-top: 5px;
}

.info-item h3 {
    font-size: 1.2rem;
    margin-bottom: 8px;
    color: var(--primary-color);
}

.info-item p {
    margin-bottom: 5px;
    font-size: 0.95rem;
}

.info-item a {
    color: var(--white);
    text-decoration: underline;
    text-underline-offset: 3px;
}

.social-links {
    display: flex;
    gap: 15px;
    margin-top: 30px;
}

.social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    color: var(--white);
    font-size: 1.2rem;
    transition: all 0.3s ease;
}

.social-link:hover {
    background-color: var(--primary-color);
    transform: translateY(-3px);
}

.contacto-form {
    flex: 1;
    min-width: 300px;
    padding: 40px;
}

.contacto-form h3 {
    font-size: 1.8rem;
    margin-bottom: 25px;
    color: var(--accent-color);
}

.form-group {
    margin-bottom: 20px;
}

.form-trap {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    white-space: nowrap;
}

.form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: var(--text-color);
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid var(--light-gray);
    border-radius: 5px;
    font-family: inherit;
    font-size: 1rem;
    transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    border-color: var(--primary-color);
    outline: none;
}

.checkbox-group {
    display: flex;
    align-items: flex-start;
}

.checkbox-group input {
    width: auto;
    margin-right: 10px;
    margin-top: 5px;
}

.checkbox-group label {
    font-size: 0.9rem;
    font-weight: normal;
}

.btn-primary {
    width: 100%;
    padding: 14px;
    font-size: 1rem;
    cursor: pointer;
}

.contact-actions {
    display: grid;
    gap: 12px;
}

.whatsapp-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    min-height: 48px;
    color: #237b3b;
    border: 2px solid #237b3b;
    border-radius: 5px;
    font-weight: 700;
    text-decoration: none;
}

.whatsapp-link:hover {
    color: var(--white);
    background-color: #237b3b;
}

.btn-primary:disabled {
    background-color: var(--dark-gray);
    cursor: not-allowed;
}

.mensaje-exito,
.mensaje-error {
    margin-top: 20px;
    padding: 12px;
    border-radius: 5px;
    font-size: 0.95rem;
}

.mensaje-exito {
    background-color: rgba(62, 153, 64, 0.1);
    color: var(--secondary-color);
}

.mensaje-error {
    background-color: rgba(236, 6, 106, 0.1);
    color: var(--primary-color);
}

.mensaje-exito i,
.mensaje-error i {
    margin-right: 8px;
}

@media (max-width: 768px) {
    .contacto-wrapper {
        flex-direction: column;
    }

    .contacto-info,
    .contacto-form {
        padding: 20px;
        min-width: 100%;
    }
}
</style>