<template>
    <div class="servicios">
        <section class="page-header">

            <div class="header-content">
                <div class="overlay"></div>
                <img src="@/assets/img/servicios-header.webp" alt="Servicios dentales profesionales"
                    class="header-image">
            </div>

        </section>
        <navigation-component />
        <services-list />
        <cta-final />
    </div>
</template>

<script>
import NavigationComponent from '@/components/layout/NavigationComponent.vue';
import ServicesList from '@/components/servicios/ServicesList.vue';
import CtaFinal from '@/components/home/CtaFinal.vue';

export default {
    name: 'ServiciosView',
    components: {
        NavigationComponent,
        ServicesList,
        CtaFinal
    }
};
</script>

<style scoped>
.servicios {
    min-height: 100vh;
    background-color: #f5f5f5;
}

.header-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    position: relative;

}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(19, 14, 141, 0.2);
    z-index: 1;
}

.header-image {
    width: 100%;
    height: 400px;
    box-shadow: var(--box-shadow);
    object-fit: cover;
}



@media (max-width: 768px) {
    .header-image {
        height: auto;
    }
}
</style>