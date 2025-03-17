<template>
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Periodent</h3>
                    <p>Clínica dental especializada en tratamientos integrales con tecnología avanzada.</p>
                    <div class="social-icons">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-whatsapp"></i></a>
                    </div>
                </div>

                <div class="footer-section">
                    <h3>Contacto</h3>
                    <p><i class="fas fa-map-marker-alt"></i> Carrera 1 Bolivar, Biscucuy-Portuguesa</p>
                    <p><i class="fas fa-map-marker-alt"></i> Final calle Bolívar, Chabasquen-Portuguesa</p>
                    <p><i class="fas fa-phone"></i> +58 (412) 155 35 98</p>
                    <p><i class="fas fa-envelope"></i> info@periodent.com.ve</p>
                </div>

                <div class="footer-section">
                    <h3>Horario</h3>
                    <p>Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                    <p>Sábados: 8:00 AM - 2:00 PM</p>
                    <p>Domingos: Cerrado</p>
                </div>

                <div class="footer-section">
                    <h3>Enlaces rápidos</h3>
                    <ul class="footer-links">
                        <li><router-link to="/">Inicio</router-link></li>
                        <li><router-link to="/servicios">Servicios</router-link></li>
                        <li><router-link to="/precios">Precios</router-link></li>
                        <li><router-link to="/contacto">Contacto</router-link></li>
                        <li><router-link to="/privacidad">Política de privacidad</router-link></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="bottom-bar">
            <div class="bottom-bar-content">
                <p>© {{ currentYear }}. Especialidades Odontologica Periodent CA.</p>
                <p><router-link to="/privacidad">Política de privacidad</router-link></p>
                <p><a href="https://www.instagram.com/compumobilechabas/">Desarrollado por Compu Mobile Chabas</a></p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterComponent',
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