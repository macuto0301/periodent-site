<template>
    <header>
        <div class="container">
            <div class="info-superior">
                <div class="direccion">
                    <i class="fas fa-map-marker-alt"></i>&nbsp;Carrera 1 Bolivar, entre calle Paez y Negro Primero. <br>
                    Al lado de la antigua Casa Blanca.
                    <br> Biscucuy-Portuguesa.
                </div>
                <div class="direccion">
                    <i class="fas fa-map-marker-alt"></i>&nbsp;Final calle Bolívar. Sector de la peñita. <br> A 2
                    cuadras
                    de la plaza Bolívar.
                    <br> Chabasquen-Portuguesa.
                </div>
                <div class="telefonos">
                    <i class="fas fa-phone"></i> +58 (412) 155 35 98 / <br>+58 (412) 155 35 98
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'HeaderComponent'
};
</script>

<style scoped>
header {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
    background: transparent;
}

.info-superior {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: var(--primary-color);
    color: var(--white);
    padding: 10px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
}

.info-superior .direccion,
.info-superior .telefonos {
    padding: 0 15px;
    font-size: 0.9rem;
    line-height: 1.4;
}

.info-superior i {
    margin-right: 8px;
}

.info-superior-direccion,
.info-superior-telefonos,
.info-superior-estacionamiento {
    display: flex;
    align-items: center;
    margin-right: 2rem;
}

@media (max-width: 1080px) {
    .info-superior .telefonos {
        display: none;
    }
}

@media (max-width: 768px) {

    .info-superior .direccion:nth-child(2),
    .info-superior .telefonos {
        display: none;
    }

    .info-superior .direccion:first-child {
        font-size: 0.8rem;
        line-height: 1.3;
        padding: 5px 10px;
    }

    .info-superior {
        padding: 5px 0;
    }
}

@media (max-width: 480px) {
    .info-superior .direccion:first-child {
        font-size: 0.75rem;
        line-height: 1.3;
    }
}

@media (max-width: 350px) {
    .info-superior .telefonos {
        display: none;
    }

    .info-superior .direccion {
        display: flex;
        font-size: 0.65rem;
        padding: 2px 5px;
        min-width: 350px;
    }
}

@media (max-width: 338px) {
    .info-superior .telefonos {
        display: none;
    }

    .info-superior .direccion {
        display: flex;
        font-size: 0.3rem;
    }
}
</style>