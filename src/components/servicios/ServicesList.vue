<template>
    <section class="services">
        <div class="container">
            <h2>Nuestros Servicios</h2>
            <div class="services-grid">
                <div class="service-card" v-for="(service, index) in services" :key="index">
                    <div class="service-icon">
                        <i :class="service.icon"></i>
                    </div>
                    <h3>{{ service.title }}</h3>
                    <p>{{ service.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ServicesList',
    data() {
        return {
            services: [
                {
                    title: 'Ortodoncia',
                    description: 'Corrección de la posición de los dientes y mejora de la mordida con brackets o alineadores.',
                    icon: 'fas fa-teeth'
                },
                {
                    title: 'Implantes Dentales',
                    description: 'Soluciones permanentes para reemplazar dientes perdidos con tecnología avanzada.',
                    icon: 'fas fa-tooth'
                },
                {
                    title: 'Endodoncia',
                    description: 'Tratamiento especializado del interior del diente para eliminar el dolor y salvar su diente natural.',
                    icon: 'fas fa-syringe'
                },
                {
                    title: 'Odontología Estética',
                    description: 'Mejore su sonrisa con carillas, blanqueamiento y restauraciones estéticas.',
                    icon: 'fas fa-smile'
                },
                {
                    title: 'Odontopediatría',
                    description: 'Cuidado dental especializado para niños en un ambiente amigable y seguro.',
                    icon: 'fas fa-baby'
                },
                {
                    title: 'Periodoncia',
                    description: 'Tratamiento de las encías y tejidos que sostienen los dientes.',
                    icon: 'fas fa-teeth-open'
                }
            ]
        }
    }
}
</script>

<style scoped>
.services {
    padding: 5rem 0;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}

h2 {
    text-align: center;
    margin-bottom: 3rem;
    color: #130663;
    font-size: 2.5rem;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 2rem;
}

.service-card {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    text-align: center;
}

.service-card:hover {
    transform: translateY(-5px);
}

.service-icon {
    font-size: 3rem;
    color: #4a90e2;
    margin-bottom: 1.5rem;
}

h3 {
    color: #333;
    margin-bottom: 1rem;
    font-size: 1.5rem;
}

p {
    color: #666;
    line-height: 1.6;
}

@media (max-width: 768px) {
    .services-grid {
        grid-template-columns: 1fr;
    }

    .service-card {
        margin: 0 1rem;
    }
}
</style>