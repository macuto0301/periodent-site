<template>
    <section class="info-clinica">
        <div class="info-wrapper">
            <div class="info-image">
                <img src="@/assets/img/dentista-trabajando.webp" alt="dentista con paciente en la silla Odontologica">
            </div>
            <div class="info-text">
                <h2>PERIODENT JUNTO A TI DESDE LA PRIMERA VISITA</h2>
                <div class="info-image1">
                    <img src="@/assets/img/dentista-trabajando.webp"
                        alt="dentista con paciente en la silla Odontologica">
                </div>
                <p>¿Qué es importante para ti al elegir una clínica? Nuestros pacientes destacan la calidad de la
                    consulta inicial, la atención de los médicos y el cuidado en los procedimientos...</p>
                <p>Mantenemos la atmósfera de la primera visita durante todo el tratamiento...</p>
                <p>Combinando las garantías de la clínica, el profesionalismo de los doctores y la tecnología
                    moderna, te damos la seguridad en el resultado...</p>

                <router-link to="/contacto" class="btn btn-primary">Solicitar cita</router-link>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'InfoClinica'
};
</script>

<style scoped>
.info-clinica {
    width: 100%;
    padding: 80px 0;
    background-color: var(--white);
}

.info-wrapper {
    display: flex;
    width: 100%;
    min-height: 500px;
}

.info-content {
    display: flex;
    align-items: flex-start;
    gap: 60px;
    width: 100%;
    max-width: 1200px;
}

.info-image {
    flex: 1;
    position: relative;
    overflow: hidden;
}

.info-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
}

.info-text {
    flex: 1;
    padding: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.info-text h2 {
    color: var(--accent-color);
    font-size: 2rem;
    margin-bottom: 1.2rem;
}

.info-text p {
    margin-bottom: 1rem;
    line-height: 1.6;
}

.info-text .btn {
    width: fit-content;
    min-width: 200px;
    text-align: center;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    display: block;
}

.info-image1 {
    display: none;
}

.info-image1 img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    margin: 20px 0;
}

@media (max-width: 768px) {
    .info-wrapper {
        flex-direction: column;
    }

    .info-image {
        display: none;
    }

    .info-image1 {
        display: block;
    }

    .info-text {
        padding: 20px;
    }
}
</style>