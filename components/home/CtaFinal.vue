<template>
    <section class="cta-final">
        <div class="cta-wrapper">
            <div class="cta-text">
                <h2>¡Ven a nuestra <span>primera consulta gratuita</span> y prepárate para un tratamiento cómodo!</h2>
                <PrimaryButton to="/contacto" class="btn btn-primary">Reservar una cita</PrimaryButton>
            </div>
            <div class="cta-image">
                <NuxtImg src="/img/mujer-cruzando-dedos.avif"
                    alt="Sonrisa perfecta y dientes blancos - Resultados de tratamiento dental en Periodent"
                    format="webp"
                    loading="lazy"
                    width="350"
                    height="245"
                    sizes="350px"
                />
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'CtaFinal'
};
</script>

<style scoped>
.cta-final {
    background-color: var(--white);
    color: var(--accent-color);
    padding: 0;
    overflow: hidden;
}

.cta-wrapper {
    display: flex;
    align-items: center;
    min-height: 400px;
}

.cta-text {
    flex: 0 0 50%;
    padding: 60px;
    padding-left: 20%;
}

.cta-text h2 {
    font-size: clamp(1.9rem, 3vw, 2.8rem);
    line-height: 1.12;
    font-weight: 700;
    margin-bottom: 40px;
    max-width: 500px;
}

.cta-final h2 span {
    color: var(--primary-color);
}

.cta-image {
    flex: 0 0 50%;
    height: 100%;
    min-height: 600px;
    position: relative;
}

.cta-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    right: 0;
}

@media (max-width: 768px) {
    .cta-wrapper {
        flex-direction: column;
    }

    .cta-text,
    .cta-image {
        flex: 0 0 100%;
    }

    .cta-text {
        padding: 40px 20px;
        text-align: center;
    }

    .cta-image {
        min-height: 300px;
    }
}
</style>