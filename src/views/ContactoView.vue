<template>
    <div class="contacto">
        <section class="page-header">
            <div class="header-content">
                <img src="@/assets/img/contacto-header.webp" alt="Contáctanos para tu cita dental" class="header-image">
            </div>
        </section>
        <navigation-component />
        <ContactoForm />
        <cta-final />
    </div>
</template>

<script>
import NavigationComponent from '@/components/layout/NavigationComponent.vue';
import ContactoForm from "@/components/contacto/ContactoForm.vue";
import CtaFinal from "@/components/home/CtaFinal.vue";

export default {
    name: 'ContactoView',
    components: {
        NavigationComponent,
        ContactoForm,
        CtaFinal
    }
};
</script>

<style scoped>
.contacto {
    min-height: 100vh;
}

.header-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
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