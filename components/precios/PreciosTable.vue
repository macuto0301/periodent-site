<template>
    <section class="precios-section">
        <div class="container">
            <h1>Tratamientos dentales</h1>
           
            <p class="precios-intro">Conoce nuestros tratamientos y solicita una orientación personalizada según tus necesidades. Cada caso requiere una evaluación, diagnóstico y plan de tratamiento.</p>

            <div class="precios-tabs">
                <button v-for="(categoria, index) in categorias" :key="index"
                    :class="['tab-btn', { active: categoriaActiva === index }]" @click="categoriaActiva = index">
                    {{ categoria.nombre }}
                </button>
            </div>

            <div class="precios-tabla-container">
                <table class="precios-tabla">
                    <thead>
                        <tr>
                            <th>Servicio</th>
                            <th>Descripción</th>
                            <th>Consulta</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(servicio, index) in categorias[categoriaActiva].servicios" :key="index">
                            <td class="servicio-nombre">{{ servicio.nombre }}</td>
                            <td class="servicio-descripcion">{{ servicio.descripcion }}</td>
                            <td class="servicio-consulta">
                                <NuxtLink to="/contacto" class="consulta-btn">Consultar</NuxtLink>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="precios-nota">
                <p><i class="fas fa-info-circle"></i> Los precios pueden variar según la complejidad del caso. Consulta
                    con nuestros especialistas para un presupuesto personalizado.</p>
                <router-link to="/contacto" class="btn btn-primary">Solicitar presupuesto</router-link>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'PreciosTable',
    data() {
        return {
            categoriaActiva: 0,
            categorias: [
                {
                    nombre: 'Odontología General',
                    servicios: [
                        {
                            nombre: 'Consulta y diagnóstico',
                            descripcion: 'Evaluación completa, radiografías y plan de tratamiento',
                        },
                        {
                            nombre: 'Limpieza dental profesional',
                            descripcion: 'Eliminación de placa y sarro, pulido dental',
                        },
                        {
                            nombre: 'Empaste simple',
                            descripcion: 'Restauración de caries pequeñas con material de composite',
                        },
                        {
                            nombre: 'Empaste complejo',
                            descripcion: 'Restauración de caries extensas con reconstrucción parcial',
                        },
                        {
                            nombre: 'Extracción simple',
                            descripcion: 'Extracción de diente sin complicaciones',
                        }
                    ]
                },
                {
                    nombre: 'Endodoncia',
                    servicios: [
                        {
                            nombre: 'Tratamiento de conducto (incisivo/canino)',
                            descripcion: 'Tratamiento completo de conducto en dientes frontales',
                        },
                        {
                            nombre: 'Tratamiento de conducto (premolar)',
                            descripcion: 'Tratamiento completo de conducto en premolares',
                        },
                        {
                            nombre: 'Tratamiento de conducto (molar)',
                            descripcion: 'Tratamiento completo de conducto en molares',
                        },
                        {
                            nombre: 'Retratamiento endodóntico',
                            descripcion: 'Corrección de tratamientos previos fallidos',
                        }
                    ]
                },
                {
                    nombre: 'Cirugía Oral',
                    servicios: [
                        {
                            nombre: 'Extracción quirúrgica',
                            descripcion: 'Extracción de dientes con complicaciones',
                        },
                        {
                            nombre: 'Extracción de muela del juicio',
                            descripcion: 'Extracción de terceros molares',
                        },
                        {
                            nombre: 'Extracción de diente retenido',
                            descripcion: 'Extracción de diente retenido, distópico o supernumerario',
                        },
                        {
                            nombre: 'Cirugía periodontal',
                            descripcion: 'Tratamiento quirúrgico de encías',
                        }
                    ]
                },
                {
                    nombre: 'Estética Dental',
                    servicios: [
                        {
                            nombre: 'Blanqueamiento dental en consultorio',
                            descripcion: 'Procedimiento completo en una sesión',
                        },
                        {
                            nombre: 'Kit de blanqueamiento para casa',
                            descripcion: 'Incluye férulas personalizadas y gel blanqueador',
                        },
                        {
                            nombre: 'Carillas de composite',
                            descripcion: 'Por diente, material de resina',
                        },
                        {
                            nombre: 'Carillas de porcelana',
                            descripcion: 'Por diente, material cerámico de alta durabilidad',
                        }
                    ]
                },
                {
                    nombre: 'Prótesis Dental',
                    servicios: [
                        {
                            nombre: 'Corona de porcelana',
                            descripcion: 'Corona individual de cerámica sobre metal',
                        },
                        {
                            nombre: 'Corona de zirconio',
                            descripcion: 'Corona individual de zirconio de alta estética',
                        },
                        {
                            nombre: 'Prótesis removible parcial',
                            descripcion: 'Dependiendo del número de piezas',
                        },
                        {
                            nombre: 'Prótesis removible completa',
                            descripcion: 'Prótesis total para maxilar superior o inferior',
                        }
                    ]
                },
                {
                    nombre: 'Ortodoncia',
                    servicios: [
                        {
                            nombre: 'Brackets metálicos',
                            descripcion: 'Tratamiento completo, incluye controles mensuales',
                        },
                        {
                            nombre: 'Brackets estéticos',
                            descripcion: 'Brackets de cerámica o zafiro, tratamiento completo',
                        },
                        {
                            nombre: 'Ortodoncia invisible',
                            descripcion: 'Tratamiento con alineadores transparentes',
                        },
                        {
                            nombre: 'Retenedor fijo/removible',
                            descripcion: 'Post-tratamiento ortodóncico',
                        }
                    ]
                }
            ]
        };
    }
};
</script>

<style scoped>
.precios-section {
    padding: 80px 0;
    background-color: var(--light-bg);
}

@media (max-width: 768px) {
    .precios-section {
        padding: 40px 0;
    }
}

.precios-section h1 {
    text-align: center;
    color: var(--accent-color);
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
}

.precios-intro {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 40px;
    color: var(--text-color);
    font-size: 1.1rem;
}

.precios-tabs {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 30px;
}

.tab-btn {
    padding: 12px 20px;
    background-color: var(--white);
    border: 1px solid var(--light-gray);
    border-radius: 5px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s ease;
    color: var(--text-color);
}

.tab-btn:hover {
    background-color: var(--light-gray);
}

.tab-btn.active {
    background-color: var(--primary-color);
    color: var(--white);
    border-color: var(--primary-color);
}

.precios-tabla-container {
    overflow-x: auto;
    margin-bottom: 40px;
    box-shadow: var(--box-shadow);
    border-radius: 8px;
}

.precios-tabla {
    width: 100%;
    border-collapse: collapse;
    background-color: var(--white);
}

.precios-tabla th {
    background-color: var(--accent-color);
    color: var(--white);
    padding: 15px;
    text-align: left;
}

.precios-tabla th:first-child {
    border-top-left-radius: 8px;
}

.precios-tabla th:last-child {
    border-top-right-radius: 8px;
}

.precios-tabla td {
    padding: 15px;
    border-bottom: 1px solid var(--light-gray);
}

.servicio-nombre {
    font-weight: 600;
    color: var(--primary-color);
    width: 25%;
}

.servicio-descripcion {
    color: var(--text-color);
    width: 50%;
}

.servicio-consulta {
    font-weight: 600;
    width: 25%;
    text-align: right;
}

.consulta-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 40px;
    padding: 8px 16px;
    border-radius: 6px;
    background-color: var(--primary-color);
    color: var(--white);
    text-decoration: none;
    font-weight: 700;
    transition: background-color 0.2s ease, transform 0.2s ease;
}

.consulta-btn:hover,
.consulta-btn:focus-visible {
    background-color: var(--primary-strong, #4A148C);
    transform: translateY(-1px);
}

.precios-tabla tr:hover {
    background-color: rgba(236, 6, 106, 0.05);
}

.precios-nota {
    background-color: var(--white);
    padding: 20px;
    border-radius: 8px;
    box-shadow: var(--box-shadow);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
}

.precios-nota p {
    flex: 1;
    margin: 0;
}

.precios-nota i {
    color: var(--primary-color);
    margin-right: 8px;
}

@media (max-width: 768px) {
    .precios-tabs {
        flex-direction: column;
        align-items: center;
    }

    .tab-btn {
        width: 100%;
        max-width: 300px;
    }

    .precios-nota {
        flex-direction: column;
        text-align: center;
    }

    .servicio-nombre,
    .servicio-descripcion,
    .servicio-consulta {
        width: auto;
        text-align: left;
    }
}
</style>