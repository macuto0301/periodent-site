<template>
    <div class="contacto">
        <section class="page-header">
            <div class="container">
                <h1>Contacto</h1>
            </div>
        </section>

        <servicios-list />
        <cta-final />
    </div>
</template>

<script>
import ServiciosList from '@/components/servicios/ServiciosList.vue';
import CtaFinal from '@/components/home/CtaFinal.vue';

export default {
    name: 'ContactoView',
    components: {
        ServiciosList,
        CtaFinal
    }
};
</script>
