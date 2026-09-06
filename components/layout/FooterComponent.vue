<template>
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Especialidades Odontologica Periodent</h3>
                    <div class="footer-logo">
                        <img src="/img/logo-periodent-vector-biscucuy-dentista.svg" alt="Periodent - Especialidades Odontológicas en Biscucuy y Chabasquén" loading="lazy" width="180" height="54" class="footer-img" />
                    </div>


                    <p>Clínica dental especializada en tratamientos integrales con tecnología avanzada.</p>
                    <div class="social-icons">
                        <a href="https://www.facebook.com/especialidadesodontologica.periodent" target="_blank" aria-label="Síguenos en Facebook"><i
                            class="fab fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/od.daigremarsalas/" target="_blank" aria-label="Síguenos en Instagram"><i
                            class="fab fa-instagram"></i></a>
                        <a href="https://api.whatsapp.com/send/?phone=584121553598&text=%C2%A1Hola%21+Estoy+interesado+en+agendar+una+cita+en+su+cl%C3%ADnica+dental.&type=phone_number&app_absent=0"
                            target="_blank" aria-label="Escríbenos por WhatsApp"><i class="fab fa-whatsapp"></i></a>
                    </div>
                </div>

                <div class="footer-section">
                    <h3>Contacto</h3>
                    <div class="ubicacion-item">
                        <p><strong>Biscucuy:</strong></p>
                        <p><i class="fas fa-map-marker-alt"></i> {{ clinicInfo.locations.biscucuy.address }} {{ clinicInfo.locations.biscucuy.city }}</p>
                    </div>
                    <div class="ubicacion-item">
                        <p><strong>Chabasquén:</strong></p>
                        <p><i class="fas fa-map-marker-alt"></i> {{ clinicInfo.locations.chabasquen.address }} {{ clinicInfo.locations.chabasquen.city }}</p>
                    </div>
                    <p><i class="fas fa-phone"></i> <a :href="clinicInfo.phoneHref">{{ clinicInfo.phone }}</a></p>
                    <p><i class="fas fa-envelope"></i> info@periodent.com.ve</p>
                    <NuxtLink to="/ubicacion" class="footer-btn">Ver ubicaciones</NuxtLink>
                </div>

                <div class="footer-section">
                    <h3>Horario</h3>
                    <p>{{ clinicInfo.hours.weekdays }}</p>
                    <p>{{ clinicInfo.hours.saturday }}</p>
                    <p>{{ clinicInfo.hours.sunday }}</p>
                </div>

                <div class="footer-section">
                    <h3>Enlaces rápidos</h3>
                    <ul class="footer-links">
                        <li><NuxtLink to="/">Inicio</NuxtLink></li>
                        <li><NuxtLink to="/servicios">Servicios</NuxtLink></li>
                        <li><NuxtLink to="/precios">Precios</NuxtLink></li>
                        <li><NuxtLink to="/blog">Blog</NuxtLink></li>
                        <li><NuxtLink to="/preguntas-frecuentes">Preguntas Frecuentes</NuxtLink></li>
                        <li><NuxtLink to="/ubicacion">Ubicaciones</NuxtLink></li>
                        <li><NuxtLink to="/contacto">Contacto</NuxtLink></li>
                        <li><NuxtLink to="/privacidad">Política de privacidad</NuxtLink></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="bottom-bar">
            <div class="bottom-bar-content">
                <p>© {{ currentYear }}. Especialidades Odontologica Periodent CA.</p>
                <p><NuxtLink to="/privacidad">Política de privacidad</NuxtLink></p>
                <p><a href="https://compumobilechabas.com/">Desarrollado por Compu Mobile Chabas</a></p>
            </div>
        </div>
    </footer>
</template>

<script>
    import PrimaryButton from '@/components/ui/PrimaryButton.vue';
    import { clinicInfo } from '@/data/clinic-info';
export default {
    name: 'FooterComponent',
    data() {
        return { clinicInfo };
    },
    computed: {
        currentYear() {
            return new Date().getFullYear();
        }
    }
};
</script>

<style scoped>
footer {
    background-color: var(--text-color);
    color: var(--white);
    padding: 40px 0 0 0;
}

.footer-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 30px;
}

.footer-section {
    width: 23%;
    margin-bottom: 20px;
}

.footer-section h3 {
    color: var(--primary-color);
    margin-bottom: 15px;
    font-size: 1.2rem;
}

.footer-section p {
    color: var(--white);
    margin-bottom: 10px;
    font-size: 0.9rem;
    line-height: 1.5;
}

.social-icons {
    margin-top: 15px;
}

.social-icons a {
    color: var(--white);
    margin-right: 15px;
    font-size: 1.2rem;
    transition: color 0.3s;
}

.social-icons a:hover {
    color: var(--primary-color);
}

.footer-links {
    list-style: none;
    padding: 0;
}

.footer-links li {
    margin-bottom: 8px;
}

.footer-links a {
    color: var(--white);
    text-decoration: none;
    transition: color 0.3s;
}

.footer-links a:hover {
    color: var(--primary-color);
}

.footer-logo {
    display: flex;
    justify-content: start;
    align-items: center;
    margin-bottom: 20px;
}

.footer-img {
    max-width: 200px;
    height: auto;
    align-items: left;
}

.ubicacion-item {
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.ubicacion-item p {
    margin: 5px 0;
}

.footer-section p a {
    color: var(--primary-color);
    text-decoration: none;
    transition: color 0.3s ease;
}

.footer-section p a:hover {
    color: var(--white);
    text-decoration: underline;
}

.footer-btn {
    display: inline-block;
    background: var(--primary-color);
    color: var(--white);
    padding: 8px 15px;
    border-radius: 20px;
    text-decoration: none;
    font-size: 0.85rem;
    font-weight: 600;
    margin-top: 10px;
    transition: all 0.3s ease;
}

.footer-btn:hover {
    background: var(--accent-color);
    transform: translateY(-2px);
}

.bottom-bar {
    background-color: var(--text-color);
    padding: 15px 0;
    text-align: center;
    width: 100%;
}

.bottom-bar-content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    text-align: center;
    font-size: 0.9rem;
    color: #ddd;
}

.bottom-bar p {
    margin: 8px 0;
}

.bottom-bar a {
    color: var(--primary-color);
    text-decoration: none;
    transition: color 0.3s ease;
}

.bottom-bar a:hover {
    color: var(--white);
}

@media (max-width: 991px) {
    .footer-section {
        width: 48%; /* 2 columns on tablet */
        margin-bottom: 30px;
    }
}

@media (max-width: 768px) {
    .footer-content {
        flex-direction: column;
    }

    .footer-section {
        width: 100%;
        margin-bottom: 30px;
    }

    .bottom-bar-content {
        flex-direction: column;
    }

    .bottom-bar-content p {
        margin-bottom: 10px;
    }
}
</style>