<template>
    <section class="info-clinica">
        <div class="info-wrapper">
            <div class="info-image">
                <NuxtImg src="/img/dentista-trabajando.webp"
                    alt="Dentista profesional atendiendo paciente en Periodent - Clínica dental moderna en Portuguesa"
                    format="webp"
                    loading="lazy"
                    width="400"
                    height="218"
                    sizes="(max-width: 768px) calc(100vw - 40px), 50vw"
                />
            </div>
            <div class="info-text">
                <h2>Periodent junto a ti desde la primera visita</h2>
                <div class="info-image1">
                    <NuxtImg src="/img/dentista-trabajando-mobile.webp"
                        alt="Atención dental profesional en Periodent Biscucuy y Chabasquén"
                        format="webp"
                        loading="lazy"
                        width="640"
                        height="360"
                        sizes="(max-width: 768px) calc(100vw - 40px), 50vw"
                    />
                </div>
                <p>¿Qué es importante para ti al elegir una clínica? Nuestros pacientes destacan la calidad de la
                    consulta inicial, la atención de los médicos y el cuidado en los procedimientos...</p>
                <p>Mantenemos la atmósfera de la primera visita durante todo el tratamiento...</p>
                <p>Combinando la atención del equipo y las herramientas disponibles, te explicamos cada etapa para
                    que puedas tomar decisiones informadas sobre tu tratamiento...</p>

                <PrimaryButton to="/contacto" class="btn btn-primary">Solicitar cita</PrimaryButton>
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
    font-size: clamp(1.8rem, 3vw, 2.6rem);
    line-height: 1.12;
    font-weight: 700;
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
    height: auto;
    aspect-ratio: 16 / 9;
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