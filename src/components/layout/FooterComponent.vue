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