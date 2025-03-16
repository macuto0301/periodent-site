<template>
    <div class="servicios">
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
</style>