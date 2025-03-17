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

<style scoped>
.cuidado-finanzas {
    position: relative;
    background: url('@/assets/img/mano-robot-diente-tecnologia5.webp') no-repeat center center / cover;
    color: var(--white);
    text-align: center;
    padding: 60px 0;
}

.cuidado-finanzas::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}

.cuidado-finanzas .container {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
}

.cuidado-finanzas h2 {
    flex: 0 0 60%;
    text-align: left;
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.beneficios {
    flex: 0 0 40%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 30px;
}

.beneficio {
    display: flex;
    align-items: center;
    margin: 10px 0;
    max-width: 300px;
}

.beneficio i {
    font-size: 1.8rem;
    color: var(--white);
    margin-right: 10px;
}

.beneficio p {
    text-align: left;
}

@media (max-width: 768px) {
    .cuidado-finanzas .container {
        flex-direction: column;
        text-align: center;
    }

    .cuidado-finanzas h2 {
        text-align: center;
    }

    .beneficio {
        margin: 10px auto;
    }
}
</style>