<template>
    <div class="home">
        <navigation-component />
        <hero-slider />
        <info-clinica />
        <nuestros-valores />
        <list-tecnologias />
        <cuidado-finanzas />
        <user-testimonios />
        <cta-final />
    </div>
</template>

<script>
import NavigationComponent from '@/components/layout/NavigationComponent.vue';
import HeroSlider from '@/components/home/HeroSlider.vue';
import InfoClinica from '@/components/home/InfoClinica.vue';
import NuestrosValores from '@/components/home/NuestrosValores.vue';
import ListTecnologias from '@/components/home/ListTecnologias.vue';
import CuidadoFinanzas from '@/components/home/CuidadoFinanzas.vue';
import UserTestimonios from '@/components/home/UserTestimonios.vue';
import CtaFinal from '@/components/home/CtaFinal.vue';

export default {
    name: 'HomeView',
    components: {
        NavigationComponent,
        HeroSlider,
        InfoClinica,
        NuestrosValores,
        ListTecnologias,
        CuidadoFinanzas,
        UserTestimonios,
        CtaFinal
    }
};
</script>