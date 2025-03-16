<template>
    <div class="precios">
        <section class="page-header">
            <div class="container">
                <h1>Nuestros Precios</h1>
            </div>
        </section>

        <precios-table />
        <cta-final />
    </div>
</template>

<script>
import PreciosTable from '@/components/precios/PreciosTable.vue';
import CtaFinal from '@/components/home/CtaFinal.vue';

export default {
    name: 'PreciosView',
    components: {
        PreciosTable,
        CtaFinal
    }
};
</script>