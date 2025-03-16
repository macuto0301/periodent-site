<template>
    <section class="cuidado-finanzas">
        <div class="cuidado-finanzas-bg"></div>
        <div class="container">
            <h2>CUIDAMOS TUS RECURSOS <br> Y TU TIEMPO</h2>
            <div class="beneficios">
                <div v-for="(beneficio, index) in beneficios" :key="index" class="beneficio">
                    <i class="fas fa-check-circle"></i>
                    <h3>
                        <p>{{ beneficio.texto }}</p>
                    </h3>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'CuidadoFinanzas',
    data() {
        return {
            beneficios: [
                { texto: 'Seleccionamos técnicas según tu presupuesto' },
                { texto: 'Proporcionamos documentos para la deducción fiscal' },
                { texto: 'Organizamos espacio en un estacionamiento vigilado gratuito' }
            ]
        };
    }
};
</script>