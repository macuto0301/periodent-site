<template>
    <section class="tecnologias">
        <h2>TECNOLOGÍAS AVANZADAS DE TRATAMIENTO</h2>
        <div class="container">
            <div class="tecnologias-grid">
                <div v-for="(tecnologia, index) in tecnologias" :key="index" class="tecnologia">
                    <h3>{{ tecnologia.titulo }}</h3>
                    <p>{{ tecnologia.descripcion }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ListTecnologias',
    data() {
        return {
            tecnologias: [
                {
                    titulo: 'Ozonitron',
                    descripcion: 'Tecnología innovadora no invasiva para el tratamiento de dientes y encías. Tiene un efecto inmunomodulador y antiinflamatorio sin efectos secundarios. Repara eficazmente y por mucho tiempo los tejidos dañados.'
                },
                {
                    titulo: 'Piezocirugía',
                    descripcion: 'Sistema ultrasónico de alta precisión que permite realizar cirugías en modo suave, sin dolor ni quemaduras de tejidos, reduciendo la inflamación postoperatoria y acortando el tiempo de rehabilitación.'
                },
                {
                    titulo: 'Corrección de la mordida',
                    descripcion: 'Restauramos tu mordida natural utilizando las técnicas más actuales y sistemas ortodóncicos, que puedes elegir según tu presupuesto y el tiempo disponible para el tratamiento.'
                },
                {
                    titulo: 'Fotoprotocolo',
                    descripcion: 'La macrofotografía dental se utiliza en tratamientos complejos de ortodoncia y prótesis, donde es crucial el efecto estético. Para nosotros, esto es clave para establecer una relación de confianza a largo plazo y controlar el trabajo realizado.'
                },
                {
                    titulo: 'Diseño 3D de sonrisa',
                    descripcion: 'Utilizamos el protocolo digital Smile Design (DSD). Te permitimos visualizar el resultado final y discutir todos los detalles con el médico antes de iniciar el tratamiento o fabricar costosas restauraciones.'
                },
                {
                    titulo: 'Microimplantes',
                    descripcion: 'Esta tecnología aumenta la precisión y reduce el tiempo de uso de aparatos ortodóncicos cuando es necesario cambiar significativamente la posición de uno o varios dientes. Después del tratamiento, los microimplantes se retiran fácilmente de los tejidos.'
                },
                {
                    titulo: 'Tratamiento de conductos',
                    descripcion: 'Aplicamos una técnica indolora para tratar los conductos utilizando un motor endodóntico moderno y materiales de obturación suizos. Reducimos los casos de retratamientos y desobturaciones dentales.'
                },
                {
                    titulo: 'Prótesis estética',
                    descripcion: 'Creamos una estética individual para tu sonrisa, ofreciendo varias tecnologías modernas de prótesis, desde cerámica sin metal E-max hasta dióxido de circonio. Elige junto con el médico.'
                }
            ]
        };
    }
};
</script>

<style scoped>
.tecnologias {
    padding: 50px 0;
    background-color: #f9f9f9;
    text-align: center;
}

.tecnologias h2 {
    color: var(--accent-color);
    font-size: 2rem;
    margin-bottom: 2rem;
}

.tecnologias-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 30px;
}

.tecnologia {
    background-color: var(--white);
    padding: 20px;
    border-radius: 5px;
    box-shadow: var(--box-shadow);
    transition: transform 0.3s ease;
}

.tecnologia:hover {
    transform: translateY(-5px);
}

.tecnologia h3 {
    color: var(--primary-color);
    margin-bottom: 10px;
    font-size: 1.2rem;
}

.tecnologia p {
    color: var(--text-color);
    font-size: 0.9rem;
    line-height: 1.5;
}

@media (max-width: 768px) {
    .tecnologias-grid {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }

    .tecnologia {
        margin-bottom: 20px;
    }
}
</style>