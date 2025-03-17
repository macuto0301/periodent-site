<template>
    <section class="precios-section">
        <div class="container">
            <h2>Nuestros Precios</h2>
            <p class="precios-intro">Ofrecemos tratamientos de alta calidad a precios accesibles. Todos nuestros
                servicios incluyen consulta inicial, diagnóstico y plan de tratamiento.</p>

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
                            <th>Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(servicio, index) in categorias[categoriaActiva].servicios" :key="index">
                            <td class="servicio-nombre">{{ servicio.nombre }}</td>
                            <td class="servicio-descripcion">{{ servicio.descripcion }}</td>
                            <td class="servicio-precio">{{ servicio.precio }}</td>
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
                            precio: 'Bs. 100'
                        },
                        {
                            nombre: 'Limpieza dental profesional',
                            descripcion: 'Eliminación de placa y sarro, pulido dental',
                            precio: 'Bs. 300'
                        },
                        {
                            nombre: 'Empaste simple',
                            descripcion: 'Restauración de caries pequeñas con material de composite',
                            precio: 'Desde Bs. 250'
                        },
                        {
                            nombre: 'Empaste complejo',
                            descripcion: 'Restauración de caries extensas con reconstrucción parcial',
                            precio: 'Desde Bs. 400'
                        },
                        {
                            nombre: 'Extracción simple',
                            descripcion: 'Extracción de diente sin complicaciones',
                            precio: 'Desde Bs. 300'
                        }
                    ]
                },
                {
                    nombre: 'Endodoncia',
                    servicios: [
                        {
                            nombre: 'Tratamiento de conducto (incisivo/canino)',
                            descripcion: 'Tratamiento completo de conducto en dientes frontales',
                            precio: 'Bs. 1.200'
                        },
                        {
                            nombre: 'Tratamiento de conducto (premolar)',
                            descripcion: 'Tratamiento completo de conducto en premolares',
                            precio: 'Bs. 1.500'
                        },
                        {
                            nombre: 'Tratamiento de conducto (molar)',
                            descripcion: 'Tratamiento completo de conducto en molares',
                            precio: 'Bs. 2.000'
                        },
                        {
                            nombre: 'Retratamiento endodóntico',
                            descripcion: 'Corrección de tratamientos previos fallidos',
                            precio: 'Desde Bs. 2.500'
                        }
                    ]
                },
                {
                    nombre: 'Cirugía Oral',
                    servicios: [
                        {
                            nombre: 'Extracción quirúrgica',
                            descripcion: 'Extracción de dientes con complicaciones',
                            precio: 'Desde Bs. 800'
                        },
                        {
                            nombre: 'Extracción de muela del juicio',
                            descripcion: 'Extracción de terceros molares',
                            precio: 'Desde Bs. 1.500'
                        },
                        {
                            nombre: 'Extracción de diente retenido',
                            descripcion: 'Extracción de diente retenido, distópico o supernumerario',
                            precio: 'Bs. 6.000'
                        },
                        {
                            nombre: 'Cirugía periodontal',
                            descripcion: 'Tratamiento quirúrgico de encías',
                            precio: 'Desde Bs. 1.200'
                        }
                    ]
                },
                {
                    nombre: 'Estética Dental',
                    servicios: [
                        {
                            nombre: 'Blanqueamiento dental en consultorio',
                            descripcion: 'Procedimiento completo en una sesión',
                            precio: 'Bs. 2.000'
                        },
                        {
                            nombre: 'Kit de blanqueamiento para casa',
                            descripcion: 'Incluye férulas personalizadas y gel blanqueador',
                            precio: 'Bs. 1.200'
                        },
                        {
                            nombre: 'Carillas de composite',
                            descripcion: 'Por diente, material de resina',
                            precio: 'Desde Bs. 500'
                        },
                        {
                            nombre: 'Carillas de porcelana',
                            descripcion: 'Por diente, material cerámico de alta durabilidad',
                            precio: 'Desde Bs. 1.800'
                        }
                    ]
                },
                {
                    nombre: 'Prótesis Dental',
                    servicios: [
                        {
                            nombre: 'Corona de porcelana',
                            descripcion: 'Corona individual de cerámica sobre metal',
                            precio: 'Desde Bs. 2.000'
                        },
                        {
                            nombre: 'Corona de zirconio',
                            descripcion: 'Corona individual de zirconio de alta estética',
                            precio: 'Desde Bs. 2.500'
                        },
                        {
                            nombre: 'Prótesis removible parcial',
                            descripcion: 'Dependiendo del número de piezas',
                            precio: 'Desde Bs. 3.000'
                        },
                        {
                            nombre: 'Prótesis removible completa',
                            descripcion: 'Prótesis total para maxilar superior o inferior',
                            precio: 'Desde Bs. 5.000'
                        }
                    ]
                },
                {
                    nombre: 'Ortodoncia',
                    servicios: [
                        {
                            nombre: 'Brackets metálicos',
                            descripcion: 'Tratamiento completo, incluye controles mensuales',
                            precio: 'Desde Bs. 8.000'
                        },
                        {
                            nombre: 'Brackets estéticos',
                            descripcion: 'Brackets de cerámica o zafiro, tratamiento completo',
                            precio: 'Desde Bs. 10.000'
                        },
                        {
                            nombre: 'Ortodoncia invisible',
                            descripcion: 'Tratamiento con alineadores transparentes',
                            precio: 'Desde Bs. 15.000'
                        },
                        {
                            nombre: 'Retenedor fijo/removible',
                            descripcion: 'Post-tratamiento ortodóncico',
                            precio: 'Desde Bs. 800'
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

.precios-section h2 {
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

.servicio-precio {
    font-weight: 600;
    color: var(--accent-color);
    width: 25%;
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
    .servicio-precio {
        width: auto;
    }
}
</style>