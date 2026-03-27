// Objeto con departamentos como llaves y arreglos de ciudades
const coberturaGratis = {
    "Antioquia": ["Abejorral", "Abriaquí", "Alejandría", "Amagá", "Amalfi", "Andes", "Angelópolis", "Angostura", "Apartadó", "Arboletes", "Armenia", "Barbosa", "Bello", "Betania", "Betulia", "Briceño", "Buriticá", "Cáceres", "Caicedo", "Caldas", "Campamento", "Cañasgordas", "Caracolí", "Caramanta", "Carepa", "Casabe", "Yondó", "Caucasia", "Chigorodó", "Cisneros", "Ciudad Bolívar", "Cocorná", "Concepción", "Concordia", "Copacabana", "Currulao", "Dabeiba", "Don Matías", "Doradal", "Ebéjico", "El Bagre", "El Carmen de Viboral", "El Santuario", "Entrerríos", "Envigado", "Fredonia", "Frontino", "Giraldo", "Girardota", "Gómez Plata", "Granada", "Guadalupe", "Guarne", "Guatapé", "Hispania", "Itagüí", "Ituango", "Jardín", "Jericó", "La Ceja", "La Estrella", "La Pintada", "La Unión", "Liborina", "Maceo", "Marinilla", "Medellín", "Montebello", "Murindó", "Mutatá", "Nariño", "Necoclí", "Nueva Colonia", "Olaya", "Peñol", "Peque", "Pueblorrico", "Puerto Berrío", "Puerto Nare", "Puerto Triunfo", "Remedios", "Retiro", "Rionegro", "Sabanalarga", "Sabaneta", "San Andrés de Cuerquia", "San Carlos", "San Jerónimo", "San Juan de Urabá", "San Luis", "San Pedro de los Milagros", "San Pedro de Urabá", "San Rafael", "San Roque", "Santa Bárbara", "Santa Fe de Antioquia", "Santa Rosa de Osos", "Santo Domingo", "San Vicente", "Segovia", "Sonsón", "Sopetrán", "Támesis", "Tarazá", "Tarso", "Titiribí", "Toledo", "Turbo", "Uramita", "Urrao", "Valdivia", "Valparaíso", "Vegachí", "Venecia", "Yalí", "Yarumal", "Yolombó", "Zaragoza"],
    "Cundinamarca": ["Agua de Dios", "Albán", "Anapoima", "Anolaima", "Apulo", "Arbeláez", "Beltrán", "Bituima", "Bogotá", "Bojacá", "Briceño", "Cabrera", "Cachipay", "Cajicá", "Caparrapí", "Capellanía", "Cáqueza", "Carmen de Carupa", "Chaguaní", "Chía", "Chipaque", "Choachí", "Chocontá", "Cogua", "Cota", "Cucunubá", "Mesitas del Colegio", "El Colegio", "Mesitas", "El Peñón", "El Rosal", "Facatativá", "Fómeque", "Fosca", "Funza", "Fúquene", "Fusagasugá", "Gachalá", "Gachancipá", "Gachetá", "Gama", "Girardot", "Guachetá", "Guaduas", "Guasca", "Guataquí", "Guatavita", "Guayabal de Síquima", "Guayabetal", "Gutiérrez", "Junín", "La Calera", "La Mesa", "La Palma", "La Peña", "La Vega", "Lenguazaque", "Machetá", "Madrid", "Manta", "Medina", "Mosquera", "Nariño", "Nemocón", "Nilo", "Nimaima", "Nocaima", "Pacho", "Paime", "Pandi", "Paratebueno", "Pasca", "Puerto Salgar", "Pulí", "Quebrada Negra", "Quetame", "Quipile", "Ricaurte", "San Antonio del Tequendama", "San Bernardo", "San Cayetano", "San Francisco", "Sasaima", "Sesquilé", "Sibaté", "Simijacá", "Soacha", "Sopó", "Subachoque", "Suesca", "Supatá", "Susa", "Sutatausa", "Tabio", "Tausa", "Tena", "Tenjo", "Tibacuy", "Tibiritá", "Tocaima", "Tocancipá", "Topaipí", "Ubalá", "Ubaque", "Ubaté", "Une", "Útica", "Venecia", "Vergara", "Vianí", "Villagómez", "Villapinzón", "Villeta", "Viotá", "Yacopí", "Zipacón", "Zipaquirá"],
    "Caldas": ["Aguadas", "Anserma", "Aranzazu", "Belalcázar", "Chinchiná", "Filadelfia", "La Dorada", "La Merced", "Manizales", "Manzanares", "Marmato", "Marquetalia", "Marulanda", "Neira", "Norcasia", "Pácora", "Palestina", "Pensilvania", "Riosucio", "Risaralda", "Salamina", "Samaná", "San José", "Supía", "Victoria", "Villamaría", "Viterbo"],
    "Tolima": ["Alpujarra", "Alvarado", "Ambalema", "Anzoátegui", "Armero", "Ataco", "Cajamarca", "Carmen de Apicalá", "Casabianca", "Chaparral", "Chicoral", "Coyaima", "Cunday", "Dolores", "Espinal", "Falan", "Flandes", "Fresno", "Guamo", "Herveo", "Honda", "Ibagué", "Icononzo", "Lérida", "Líbano", "Mariquita", "Melgar", "Murillo", "Ortega", "Palocabildo", "Piedras", "Planadas", "Prado", "Purificación", "Rioblanco", "Roncesvalles", "Rovira", "San Antonio", "San Luis", "Santa Isabel", "Santiago Pérez", "Suárez", "Valle de San Juan", "Venadillo", "Villahermosa"],
    "Boyacá": ["Almeida", "Aquitania", "Arcabuco", "Belén", "Berbeo", "Betéitiva", "Boavita", "Boyacá", "Briceño", "Buenavista", "Busbanzá", "Caldas", "Campohermoso", "Cerinza", "Chinavita", "Chiquinquirá", "Chíquiza", "Chiscas", "Chita", "Chitaráque", "Chivatá", "Chivor", "Ciénega", "Cómbita", "Cóper", "Corrales", "Covarachía", "Cucaita", "Cuítiva", "Duitama", "El Cocuy", "El Espino", "Firavitoba", "Floresta", "Gachantivá", "Garagoa", "Guacamayas", "Guateque", "Guayatá", "Güicán", "Iza", "Jenesano", "Jericó", "La Capilla", "La Uvita", "La Victoria", "Macanal", "Maripí", "Miraflores", "Mongua", "Monguí", "Moniquirá", "Motavita", "Muzo", "Nobsa", "Nuevo Colón", "Oicatá", "Otanche", "Pachavita", "Páez", "Paipa", "Pajarito", "Panqueba", "Pauna", "Paz de Río", "Pesca", "Puerto Boyacá", "Quípama", "Ramiriquí", "Ráquira", "Rondón", "Saboyá", "Sáchica", "Samacá", "San Eduardo", "San José de Pare", "San Luis de Gaceno", "San Mateo", "San Miguel de Sema", "San Pablo de Borbur", "Santa María", "Santana", "Santa Rosa de Viterbo", "Santa Sofía", "Sativanorte", "Sativasur", "Siachoque", "Soatá", "Socha", "Socotá", "Sogamoso", "Somondoco", "Sora", "Sotaquirá", "Sutamarchán", "Sutatenza", "Tasco", "Tenza", "Tibasosa", "Tinjacá", "Toca", "Togüí", "Tunja", "Tununguá", "Turmequé", "Tuta", "Tutazá", "Úmbita", "Ventaquemada", "Villa de Leyva", "Viracachá", "Zetaquira"],
    "Meta": ["Acacías", "Barranca de Upía", "Cabuyaro", "Castilla La Nueva", "Cubarral", "Cumaral", "El Calvario", "El Castillo", "El Dorado", "Fuente de Oro", "Granada", "Guamal", "Lejanías", "Mesetas", "Puerto Concordia", "Puerto Gaitán", "Puerto Lleras", "Puerto López", "Puerto Rico", "Restrepo", "San Carlos de Guaroa", "San Juan de Arama", "San Juanito", "San Martín", "Uribe", "Villavicencio"],
    "Casanare": ["Aguazul", "Hato Corozal", "La Salina", "Maní", "Monterrey", "Nunchía", "Orocué", "Paz de Ariporo", "Pore", "Recetor", "Sabanalarga", "San Luis de Palenque", "Támara", "Tauramena", "Trinidad", "Villanueva", "Yopal"],
    "Santander": ["Aguada", "Albania", "Barbosa", "Barichara", "Barrancabermeja", "Betulia", "Bolívar", "Bucaramanga", "California", "Capitanejo", "Carcasí", "Cerrito", "Charalá", "Charta", "Chima", "Chipatá", "Cimitarra", "Concepción", "Contratación", "Coromoro", "Curití", "El Carmen de Chucurí", "El Guacamayo", "El Peñón", "El Playón", "Enciso", "Florián", "Floridablanca", "Galán", "Gámbita", "Girón", "Guaca", "Guadalupe", "Guapotá", "Guavatá", "Guepsa", "Hato", "La Belleza", "Landázuri", "La Paz", "Lebrija", "Los Santos", "Macaravita", "Málaga", "Matanza", "Mogotes", "Molagavita", "Ocamonte", "Oiba", "Onzaga", "Palmar", "Palmas del Socorro", "Páramo", "Piedecuesta", "Pinchote", "Puente Nacional", "Puerto Parra", "Puerto Wilches", "Río Negro", "Sabana de Torres", "San Andrés", "San Gil", "San Joaquín", "San Miguel", "Santa Bárbara", "Santa Helena del Opón", "San Vicente de Chucurí", "Simacota", "Socorro", "Suaita", "Sucre", "Suratá", "Tona", "Valle de San José", "Vélez", "Vetas", "Villanueva"],
    "Risaralda": ["Apía", "Balboa", "Belén de Umbría", "Dosquebradas", "Guática", "La Celia", "La Virginia", "Marsella", "Pereira", "Pueblo Rico", "Quinchía", "Santa Rosa de Cabal", "Santuario"],
    "Quindío": ["Armenia", "Barcelona", "Buenavista", "Calarcá", "Circasia", "Córdoba", "Filandia", "Génova", "La Tebaida", "Montenegro", "Pijao", "Quimbaya", "Salento"],
    "Cauca": ["Almaguer", "Argelia", "Balboa", "Belalcázar", "Bolívar", "Buenos Aires", "Cajibío", "Caldono", "Caloto", "Coconuco", "Corinto", "El Bordo", "El Tambo", "Florencia", "Guachené", "Inzá", "Jambaló", "La Sierra", "La Vega", "Mercaderes", "Miranda", "Morales", "Piendamó", "Popayán", "Puerto Tejada", "Rosas", "San Sebastián", "Santander de Quilichao", "Silvia", "Suárez", "Sucre", "Timbío", "Toribío", "Totoró", "Villa Rica"],
    "Putumayo": ["Colón", "La Dorada", "La Hormiga", "Mocoa", "Orito", "Puerto Asís", "Puerto Caicedo", "Puerto Guzmán", "San Francisco", "Santiago", "Sibundoy", "Villa Garzón"],
    "Valle del Cauca": ["Alcalá", "Andalucía", "Ansermanuevo", "Argelia", "Bolívar", "Buenaventura", "Buga", "Bugalagrande", "Caicedonia", "Cali", "Candelaria", "Cartago", "Dagua", "Darién", "El Águila", "El Cairo", "El Cerrito", "El Dovio", "Florida", "Ginebra", "Guacarí", "Jamundí", "La Cumbre", "La Unión", "Obando", "Palmira", "Pradera", "Restrepo", "Riofrío", "Roldanillo", "San Pedro", "Sevilla", "Toro", "Trujillo", "Tuluá", "Ulloa", "Versalles", "Vijes", "Yotoco", "Yumbo", "Zarzal"],
    "Chocó": ["Certegui", "Condoto", "Itsmina", "Quibdó"],
    "Huila": ["Acevedo", "Agrado", "Aipe", "Algeciras", "Altamira", "Baraya", "Campoalegre", "Colombia", "Elías", "Garzón", "Gigante", "Guadalupe", "Hobo", "Íquira", "La Argentina", "La Plata", "Nátaga", "Neiva", "Oporapa", "Paicol", "Palermo", "Palestina", "Pital", "Pitalito", "Rivera", "Saladoblanco", "San Agustín", "Santa María", "Suaza", "Tarqui", "Tello", "Teruel", "Tesalia", "Timaná", "Villavieja", "Yaguará"],
    "Caquetá": ["Albania", "Belén de los Andaquíes", "Cartagena del Chairá", "Curillo", "El Doncello", "El Paujil", "Florencia", "La Montañita", "Milán", "Morelia", "Puerto Rico", "San José del Fragua", "San Vicente del Caguán", "Solano", "Solita", "Valparaíso"],
    "Norte de Santander": ["Ábrego", "Arboledas", "Bochalema", "Bucarasica", "Cáchira", "Chinácota", "Chitagá", "Convención", "Cúcuta", "Cucutilla", "Durania", "El Carmen", "El Tarra", "El Zulia", "Gramalote", "Hacarí", "Herrán", "Labateca", "La Esperanza", "La Playa", "Los Patios", "Lourdes", "Ocaña", "Pamplona", "Pamplonita", "Puerto Santander", "Ragonvalia", "Salazar", "San Calixto", "San Cayetano", "Santiago", "Sardinata", "Silos", "Tibú", "Toledo", "Villa Caro", "Villa del Rosario"],
    "Bolívar": ["Achí", "Arenal", "Arjona", "Calamar", "Cantagallo", "Cartagena", "Cicuco", "Clemencia", "El Carmen de Bolívar", "El Guamo", "El Peñón", "Magangué", "Mahates", "María La Baja", "Mompós", "Morales", "Río Viejo", "San Estanislao", "San Jacinto", "San Jacinto del Cauca", "San Juan Nepomuceno", "San Pablo", "Santa Ana", "Santa Catalina", "Santa Rosa de Lima", "Santa Rosa del Sur", "Simití", "Soplaviento", "Talaigua Nuevo", "Turbaco", "Turbana", "Villanueva", "Zambrano"],
    "Córdoba": ["Ayapel", "Buenavista", "Canalete", "Cereté", "Chima", "Chinú", "Ciénaga de Oro", "Cotorra", "La Apartada", "La Frontera", "Lorica", "Los Córdobas", "Momil", "Montería", "Montelíbano", "Planeta Rica", "Pueblo Nuevo", "Puerto Escondido", "Puerto Libertador", "Purísima", "Sahagún", "San Bernardo del Viento", "San Carlos", "San Pelayo", "Tierralta", "Tuchín", "Valencia"],
    "Sucre": ["Caimito", "Chalán", "Corozal", "Coveñas", "Galeras", "Guaranda", "La Unión", "Majagual", "Ovejas", "Sampués", "San Benito Abad", "San Juan de Betulia", "San Marcos", "San Onofre", "San Pedro", "Sincé", "Sincelejo", "Tolú", "Tolú Viejo"],
    "Cesar": ["Aguachica", "Astrea", "Becerril", "Bosconia", "Chimichagua", "Chiriguaná", "Codazzi", "Curumaní", "El Copey", "El Paso", "Gamarra", "La Gloria", "La Jagua de Ibirico", "La Paz", "Manaure", "Pailitas", "Pelaya", "Pueblo Bello", "Río de Oro", "San Alberto", "San Diego", "San Martín", "Tamalameque", "Valledupar"],
    "Magdalena": ["Algarrobo", "Aracataca", "Cerro San Antonio", "Concordia", "El Banco", "Fundación", "Guamal", "Pedraza", "Pivijay", "Plato", "Salamina", "San Ángel", "Santa Ana", "Santa Marta", "Tenerife"],
    "Atlántico": ["Baranoa", "Barranquilla", "Candelaria", "Galapa", "Juan de Acosta", "Luruaco", "Malambo", "Manatí", "Palmar de Varela", "Piojó", "Polonuevo", "Ponedera", "Puerto Colombia", "Repelón", "Sabanagrande", "Sabanalarga", "Santa Lucía", "Santo Tomás", "Soledad", "Suan", "Tubará", "Usiacurí"],
    "La Guajira": ["Albania", "Barrancas", "El Molino", "Fonseca", "Hatonuevo", "La Jagua del Pilar", "Maicao", "Manaure", "Riohacha", "San Juan del Cesar", "Uribia", "Urumita", "Villanueva"],
    "Nariño": ["Aldana", "Ancuya", "Barbacoas", "Belén", "Berruecos", "Buesaco", "Chachagüí", "Consacá", "Contadero", "Córdoba", "Cumbal", "El Peñol", "El Rosario", "El Tablón de Gómez", "El Tambo", "Funes", "Guachucal", "Guaitarilla", "Gualmatán", "Iles", "Imues", "Ipiales", "La Cruz", "La Florida", "La Llanada", "La Unión", "Linares", "Nariño", "Ospina", "Pasto", "Policarpa", "Potosí", "Providencia", "Puerres", "Pupiales", "Ricaurte", "Samaniego", "San Bernardo", "San Lorenzo", "San Pablo", "San Pedro de Cartago", "Sapuyes", "Taminango", "Tangua", "Tumaco", "Tuquerres", "Yacuanquer"]
};

// 1. Función para limpiar (usada para la búsqueda interna)
const normalizar = (t) => t.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();

// 2. Función para EMBELLECER (usada para responderle al cliente)
const capitalizarTexto = (texto) => {
    return texto.toLowerCase().trim().split(' ').map(palabra => 
        palabra.charAt(0).toUpperCase() + palabra.slice(1)
    ).join(' ');
};

function consultarEnvio() {
    // Capturamos lo que escribió el cliente
    const dptoBruto = document.getElementById('input-dpto').value;
    const ciudadBruta = document.getElementById('input-ciudad').value;
    const respuestaDiv = document.getElementById('resultado');

    if (!dptoBruto || !ciudadBruta) {
        respuestaDiv.innerHTML = "<p style='color:red;'>Por favor, complete ambos campos.</p>";
        return;
    }

    // CREAMOS LAS VERSIONES PROFESIONALES (Mayúsculas correctas)
    const dptoBonito = capitalizarTexto(dptoBruto);
    const ciudadBonita = capitalizarTexto(ciudadBruta);

    // CREAMOS LAS VERSIONES DE BÚSQUEDA (Minúsculas y sin tildes)
    const dptoBusqueda = normalizar(dptoBruto);
    const ciudadBusqueda = normalizar(ciudadBruta);

    const deptoEncontrado = Object.keys(coberturaGratis).find(k => normalizar(k) === dptoBusqueda);

    if (deptoEncontrado) {
        const tieneGratis = coberturaGratis[deptoEncontrado].some(c => normalizar(c) === ciudadBusqueda);

        if (tieneGratis) {
            // AQUÍ USAMOS LAS VARIABLES "BONITAS"
            respuestaDiv.innerHTML = `
                <div style="border: 2px solid #25d366; padding: 20px; border-radius: 15px; background: #f0fff4; margin-top:20px;">
                    <p style="color:#1b5e20; font-weight:bold;">✅ ¡Excelente! Usted tiene Envío Gratis para ${ciudadBonita}, ${dptoBonito}.</p>
                    <hr>
                    <p>Para asegurar que su rodillera le quede perfecta, <b>¿cuánto mide el diámetro de su rodilla?</b></p>
                    <input type="number" id="medida-rodilla" placeholder="Ej: 35" style="padding:10px; width:80px; border-radius:5px; border:1px solid #ccc;"> <b>cm</b>
                    <br><br>
                    <button type="button" class="btn-consultar" onclick="verificarMedida('${ciudadBonita}', '${dptoBonito}')">
                        Confirmar Medida
                    </button>
                </div>
            `;
        } else {
            respuestaDiv.innerHTML = `<p style="color:orange;">📍 Para ${ciudadBonita}, el envío tiene un costo adicional.</p>`;
        }
    } else {
        respuestaDiv.innerHTML = `<p style="color:red;">❌ No encontramos cobertura para ${dptoBonito}.</p>`;
    }
}

// Asegúrese de que esta función esté ABAJO de la anterior
function verificarMedida(ciudad, dpto) {
    const medida = document.getElementById('medida-rodilla').value;
    const respuestaDiv = document.getElementById('resultado');

    if (!medida || medida <= 0) {
        alert("Por favor, ingrese una medida válida.");
        return;
    }

    if (parseFloat(medida) <= 40) {
        const mensajeWA = `Hola vivo en ${ciudad}, ${dpto}. Deseo el par de rodilleras por $58.000 con envío gratis.`;
        const urlWA = `https://wa.me/573113171127?text=${encodeURIComponent(mensajeWA)}`;

        respuestaDiv.innerHTML = `
            <div style="border: 2px solid #007bff; padding: 20px; border-radius: 15px; background: #eef6ff; margin-top:20px;">
                <p><b>¡Excelente!</b> Sus medidas son aptas para nuestras rodilleras.</p>
                <p>¿Le gustaría encargar el par de rodilleras por solo <b>$58.000 pesos con envío gratis</b> hasta ${ciudad}, ${dpto}?</p>
                <a href="${urlWA}" target="_blank" class="btn-pedido-final";>
                    Pedir por WhatsApp ahora
                </a>
            </div>
        `;
    } else {
        respuestaDiv.innerHTML = `<p style="color:red;">⚠️ <b>Nuestras rodilleras solo sirven para medidas inferiores a 40 cm de diámetro</b> </p>`;
    }
}
