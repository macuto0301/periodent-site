<template>
    <section class="nuestros-valores">
        <h2>NUESTRO ENFOQUE</h2>
        <div class="container">
            <div class="valores-grid">
                <div v-for="(valor, index) in valores" :key="index" class="valor" :class="{ 'animate': true }"
                    :style="{ animationDelay: `${index * 0.2}s` }">
                    <img :src="require(`@/assets/img/${valor.imagen}`)" :alt="valor.alt">
                    <h3>{{ valor.titulo }}</h3>
                    <p>{{ valor.descripcion }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'NuestrosValores',
    data() {
        return {
            valores: [
                {
                    imagen: 'diente-1.svg',
                    alt: 'Ícono de diente',
                    titulo: 'Tratamiento integral',
                    descripcion: 'Sin procedimientos innecesarios'
                },
                {
                    imagen: 'diente2.svg',
                    alt: 'Ícono de calor',
                    titulo: 'Te tratamos con calidez',
                    descripcion: 'Y creamos condiciones cómodas'
                },
                {
                    imagen: 'silla-vector-3.svg',
                    alt: 'Ícono de equipo',
                    titulo: 'Usamos equipos avanzados',
                    descripcion: 'Para diagnóstico, tratamiento y prótesis'
                },
                {
                    imagen: 'diente-corona-4.svg',
                    alt: 'Ícono de evaluación',
                    titulo: 'Valoramos tu opinión',
                    descripcion: 'Y te garantizamos la calidad de nuestros servicios'
                }
            ]
        };
    }
};
</script>

<style scoped>
.nuestros-valores {
    padding: 40px 0;
    text-align: center;
}

.nuestros-valores h2 {
    color: var(--accent-color);
    font-size: 2rem;
    margin-bottom: 1.5rem;
}

.valores-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    margin-top: 30px;
}

.valor {
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.3s ease;
    opacity: 0;
    transform: translateY(30px);
    background-color: rgba(255, 255, 255, 0.6);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
    position: relative;
    overflow: hidden;
}

.valor::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: var(--primary-color);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
}

.valor:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    background-color: rgba(255, 255, 255, 0.9);
}

.valor:hover::before {
    transform: scaleX(1);
}

.valor:hover img {
    transform: scale(1.1) rotate(5deg);
}

.valor:hover h3 {
    color: var(--accent-color);
}

.valor img {
    width: 80px;
    height: 80px;
    margin-bottom: 20px;
    object-fit: contain;
    transition: transform 0.3s ease;
}

.valor.animate {
    animation: fadeInUp 0.8s ease forwards;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.valor:hover {
    transform: translateY(-5px);
}

.valor h3 {
    margin-top: 0;
    min-height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary-color);
    font-size: 1.2rem;
}

.valor img {
    width: 80px;
    height: 80px;
    margin-bottom: 20px;
    object-fit: contain;
}

.valor p {
    color: var(--text-color);
    font-size: 0.9rem;
}

@media (max-width: 768px) {
    .valores-grid {
        grid-template-columns: 1fr 1fr;
        padding: 0 20px;
    }
}

@media (max-width: 480px) {
    .valores-grid {
        grid-template-columns: 1fr;
    }
}
</style>