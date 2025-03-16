<template>
    <section class="nuestros-valores">
        <h2>NUESTRO ENFOQUE</h2>
        <div class="container">
            <div class="valores-grid">
                <div v-for="(valor, index) in valores" :key="index" class="valor">
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