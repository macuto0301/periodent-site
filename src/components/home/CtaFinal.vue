<template>
    <section class="cta-final">
        <div class="cta-wrapper">
            <div class="cta-text">
                <h2>¡Ven a nuestra <span>primera consulta gratuita</span> y prepárate para un tratamiento cómodo!</h2>
                <a href="#" class="btn btn-primary">Reservar una cita</a>
            </div>
            <div class="cta-image">
                <img src="@/assets/img/mujer-cruzando-dedos.avif" alt="Mujer con dientes blancos cruzando los dedos">
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
    font-size: 2rem;
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