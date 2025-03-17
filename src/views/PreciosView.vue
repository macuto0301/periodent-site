<template>
    <div class="precios">
        <section class="page-header">

            <div class="header-content">

                <img src="@/assets/img/precios-header.webp" alt="Precios de servicios dentales" class="header-image">
            </div>

        </section>
        <navigation-component />
        <precios-table />
        <cta-final />
    </div>
</template>

<script>
import PreciosTable from '@/components/precios/PreciosTable.vue';
import CtaFinal from '@/components/home/CtaFinal.vue';
import NavigationComponent from '@/components/layout/NavigationComponent.vue';

export default {
    name: 'PreciosView',
    components: {
        NavigationComponent,
        PreciosTable,
        CtaFinal
    }
};
</script>

<style scoped>
.precios {
    min-height: 100vh;
}

.header-content {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
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