<template>
    <section class="contacto-section">
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
                            <p>Carrera 1 Bolivar, entre calle Paez y Negro Primero.<br>Biscucuy-Portuguesa.</p>
                            <p>Final calle Bolívar. Sector de la peñita.<br>Chabasquen-Portuguesa.</p>
                        </div>
                    </div>

                    <div class="info-item">
                        <i class="fas fa-phone-alt"></i>
                        <div>
                            <h3>Teléfonos</h3>
                            <p>+58 (412) 155 35 98</p>
                            <p>+58 (412) 155 35 98</p>
                        </div>
                    </div>

                    <div class="info-item">
                        <i class="fas fa-clock"></i>
                        <div>
                            <h3>Horario de Atención</h3>
                            <p>Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                            <p>Sábados: 8:00 AM - 2:00 PM</p>
                            <p>Domingos: Cerrado</p>
                        </div>
                    </div>

                    <div class="social-links">
                        <a href="https://www.facebook.com/especialidadesodontologica.periodent/" target="_blank"
                            class="social-link"><i class="fab fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/periodent.od/" target="_blank" class="social-link"> <i
                                class="fab fa-instagram"></i></a>
                        <a href="https://wa.me/584121553598?text=¡Hola!%20Estoy%20interesado%20en%20agendar%20una%20cita%20en%20su%20clínica%20dental."
                            target="_blank" class="social-link"><i class="fab fa-whatsapp"></i></a>
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

                        <div class="form-group checkbox-group">
                            <input type="checkbox" id="terminos" v-model="formulario.terminos" required>
                            <label for="terminos">Acepto la política de privacidad y el tratamiento de mis datos
                                personales</label>
                        </div>

                        <button type="submit" class="btn btn-primary" :disabled="enviando">
                            <span v-if="!enviando">Enviar mensaje</span>
                            <span v-else>Enviando...</span>
                        </button>

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
export default {
    name: 'ContactoForm',
    data() {
        return {
            formulario: {
                nombre: '',
                telefono: '',
                email: '',
                servicio: '',
                mensaje: '',
                terminos: false
            },
            enviando: false,
            mensajeExito: '',
            mensajeError: ''
        };
    },
    methods: {
        enviarFormulario() {
            this.enviando = true;
            this.mensajeExito = '';
            this.mensajeError = '';

            // Simulación de envío de formulario
            setTimeout(() => {
                // Aquí iría la lógica real de envío del formulario a un backend
                // Por ahora solo simulamos una respuesta exitosa
                this.enviando = false;
                this.mensajeExito = 'Tu mensaje ha sido enviado correctamente. Nos pondremos en contacto contigo pronto.';

                // Resetear formulario
                this.formulario = {
                    nombre: '',
                    telefono: '',
                    email: '',
                    servicio: '',
                    mensaje: '',
                    terminos: false
                };
            }, 1500);
        }
    }
};
</script>

<style scoped>
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