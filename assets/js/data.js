// assets/js/data.js
// Fuente única de datos para el sitio estático de Sama Vintage
// Precios según web WordPress: proyecto1.ndtvirtual.com

const SAMA_PRODUCTOS = [
  // ── BROCHES ──────────────────────────────────────────────────────────
  { id:1,  nombre:'Broche Mariposa Dorado',                              precio:90,  categoria:'broches',   destacado:true,
    img:'BORCHE-MARIPOSA-DORADO-1.png',
    imagenes:['BORCHE-MARIPOSA-DORADO-1.png','BORCHE-MARIPOSA-DORADO-2.png','BORCHE-MARIPOSA-DORADO-3.png'],
    descripcion:'Elegante broche en forma de mariposa con acabado dorado. Perfecto para añadir un toque vintage a cualquier outfit. Pieza de los años 70.' },

  { id:2,  nombre:'Broche Estrella de Mar Brillante',                    precio:90,  categoria:'broches',   destacado:true,
    img:'BROCHE-BRILANTE-ESTRELLA-DE-MAR-PIEDRA-BLANCA-1.png',
    imagenes:['BROCHE-BRILANTE-ESTRELLA-DE-MAR-PIEDRA-BLANCA-1.png','BROCHE-BRILANTE-ESTRELLA-DE-MAR-PIEDRA-BLANCA-2.png','BROCHE-BRILANTE-ESTRELLA-DE-MAR-PIEDRA-BLANCA-3.png','BROCHE-BRILANTE-ESTRELLA-DE-MAR-PIEDRA-BLANCA-4.png'],
    descripcion:'Deslumbrante broche en forma de estrella de mar con piedra blanca central y acabado brillante. Pieza única de colección.' },

  { id:3,  nombre:'Broche Caballo Dorado',                               precio:90,  categoria:'broches',   destacado:false,
    img:'Broche-Caballo-Dorado-1.png',
    imagenes:['Broche-Caballo-Dorado-1.png','Broche-Caballo-Dorado-2.png','Broche-Caballo-Dorado-3.png','Broche-Caballo-Dorado-4.png'],
    descripcion:'Majestuoso broche con figura de caballo en tonos dorados con piedras blancas. Ideal para amantes de los animales y el estilo ecuestre.' },

  { id:4,  nombre:'Broche Camaleón Con Piedras Verdes, Rosas Y Turquesas', precio:90, categoria:'broches',  destacado:true,
    img:'BROCHE-CAMALEON-CON-PIEDRAS-VERDES-ROSAS-Y-TURQUESAS-1.png',
    imagenes:['BROCHE-CAMALEON-CON-PIEDRAS-VERDES-ROSAS-Y-TURQUESAS-1.png','BROCHE-CAMALEON-CON-PIEDRAS-VERDES-ROSAS-Y-TURQUESAS-2.png','BROCHE-CAMALEON-CON-PIEDRAS-VERDES-ROSAS-Y-TURQUESAS-3.png'],
    descripcion:'Original broche de camaleón con piedras verdes, rosas y turquesas. Una pieza explosiva de color que no dejará indiferente a nadie.' },

  { id:5,  nombre:'Broche Con Cabeza Dorada Y Paneles Dorados',           precio:150, categoria:'broches',  destacado:false,
    img:'BROCHE-CON-CABEZA-DORADA-Y-PANELES-DORADOS-1.png',
    imagenes:['BROCHE-CON-CABEZA-DORADA-Y-PANELES-DORADOS-1.png','BROCHE-CON-CABEZA-DORADA-Y-PANELES-DORADOS-2.png'],
    descripcion:'Sofisticado broche con cabeza dorada y paneles decorativos. Estilo art déco de los años 30.' },

  { id:6,  nombre:'Broche Dorado Egipcio De Mujer Con Alas',              precio:130, categoria:'broches',  destacado:true,
    img:'Broche-Dorado-Egipcio-De-Mujer-Con-Alas-1.png',
    imagenes:['Broche-Dorado-Egipcio-De-Mujer-Con-Alas-1.png','Broche-Dorado-Egipcio-De-Mujer-Con-Alas-2.png','Broche-Dorado-Egipcio-De-Mujer-Con-Alas-3.png'],
    descripcion:'Diseño inspirado en el arte egipcio con figura femenina y alas doradas. Una pieza de gran impacto visual e histórico.' },

  { id:7,  nombre:'Broche En Forma De Corona Con Piedras De Colores',     precio:80,  categoria:'broches',  destacado:false,
    img:'Broche-En-Forma-De-Corona-1.png',
    imagenes:['Broche-En-Forma-De-Corona-1.png','Broche-En-Forma-De-Corona-2.png'],
    descripcion:'Elegante broche en forma de corona con piedras de colores rojos, verdes, azules y blancas. Para quienes deseen un toque regio.' },

  { id:8,  nombre:'Broche Estrella Dorado Con Piedra Roja Central',       precio:130, categoria:'broches',  destacado:false,
    img:'BROCHE-FORMA-DE-ESTRELLA-DORADO-CON-PIEDRA-ROJA-CENTRAL-Y-PIEDRITAS-BLANCAS-1.png',
    imagenes:['BROCHE-FORMA-DE-ESTRELLA-DORADO-CON-PIEDRA-ROJA-CENTRAL-Y-PIEDRITAS-BLANCAS-1.png','BROCHE-FORMA-DE-ESTRELLA-DORADO-CON-PIEDRA-ROJA-CENTRAL-Y-PIEDRITAS-BLANCAS-2.png'],
    descripcion:'Brillante broche en forma de estrella con piedra roja central y pequeñas piedritas blancas alrededor.' },

  { id:9,  nombre:'Broche Estrella Con Piedras Blancas Y Gota Azul',      precio:120, categoria:'broches',  destacado:false,
    img:'BROCHE-FORMA-ESTRELLA-1.png',
    imagenes:['BROCHE-FORMA-ESTRELLA-1.png','BROCHE-FORMA-ESTRELLA-2.png','BROCHE-FORMA-ESTRELLA-3.png'],
    descripcion:'Clásico broche estrella dorada con piedras blancas y una gota con piedra azul oscuro.' },

  { id:10, nombre:'Broche Gato Plata Brillante',                           precio:150, categoria:'broches',  destacado:true,
    img:'Broche-Gato-Plata-Brillante-Con-Perlitas-Brillantes-Y-Negras-1.png',
    imagenes:['Broche-Gato-Plata-Brillante-Con-Perlitas-Brillantes-Y-Negras-1.png','Broche-Gato-Plata-Brillante-Con-Perlitas-Brillantes-Y-Negras-2.png'],
    descripcion:'Adorable broche de gato en plata con perlitas brillantes y negras.' },

  { id:11, nombre:'Broche Jaguar Brillantes Amoldable Al Hombro',          precio:180, categoria:'broches',  destacado:true,
    img:'Broche-Jaguar-Brillantes-1.png',
    imagenes:['Broche-Jaguar-Brillantes-1.png','Broche-Jaguar-Brillantes-2.png','Broche-Jaguar-Brillantes-3.png'],
    descripcion:'Feroz broche de jaguar con brillantes, amoldable al hombro. Una pieza de impacto máximo.' },

  { id:12, nombre:'Broche Jarrón De Flores Con Piedra Verde Y Flores Rosa', precio:110, categoria:'broches', destacado:false,
    img:'BROCHE-JARRON-DE-FLORES-CON-PIEDRA-VERDE-Y-FLORES-ROSA-1.png',
    imagenes:['BROCHE-JARRON-DE-FLORES-CON-PIEDRA-VERDE-Y-FLORES-ROSA-1.png','BROCHE-JARRON-DE-FLORES-CON-PIEDRA-VERDE-Y-FLORES-ROSA-2.png','BROCHE-JARRON-DE-FLORES-CON-PIEDRA-VERDE-Y-FLORES-ROSA-3.png','BROCHE-JARRON-DE-FLORES-CON-PIEDRA-VERDE-Y-FLORES-ROSA-4.png'],
    descripcion:'Delicado broche con diseño de jarrón floral, piedra verde y flores rosas.' },

  { id:13, nombre:'Broche Jirafas Dorado',                                  precio:90,  categoria:'broches',  destacado:false,
    img:'BROCHE-JIRAFAS-DORADO-1.png',
    imagenes:['BROCHE-JIRAFAS-DORADO-1.png'],
    descripcion:'Tierno broche con figura de jirafas en dorado.' },

  { id:14, nombre:'Broche Pavo Real',                                       precio:90,  categoria:'broches',  destacado:true,
    img:'BROCHE-PAVO-REAL-1.png',
    imagenes:['BROCHE-PAVO-REAL-1.png','BROCHE-PAVO-REAL-2.png','BROCHE-PAVO-REAL-3.png','BROCHE-PAVO-REAL-4.png'],
    descripcion:'Espectacular broche de pavo real con múltiples colores y brillantes.' },

  { id:15, nombre:'Broche Piedras Azules En Forma De Nudo',                 precio:90,  categoria:'broches',  destacado:false,
    img:'BROCHE-PIEDRAS-AZULES-EN-FORMA-DE-NUDO-1.png',
    imagenes:['BROCHE-PIEDRAS-AZULES-EN-FORMA-DE-NUDO-1.png','BROCHE-PIEDRAS-AZULES-EN-FORMA-DE-NUDO-2.png','BROCHE-PIEDRAS-AZULES-EN-FORMA-DE-NUDO-3.png','BROCHE-PIEDRAS-AZULES-EN-FORMA-DE-NUDO-4.png'],
    descripcion:'Elegante broche en forma de nudo con llamativas piedras azules.' },

  { id:16, nombre:'Broche Plata Entero De Piedra Blanca',                   precio:90,  categoria:'broches',  destacado:false,
    img:'BROCHE-PLATA-ENTERO-DE-PIEDRA-BANCA-1.png',
    imagenes:['BROCHE-PLATA-ENTERO-DE-PIEDRA-BANCA-1.png','BROCHE-PLATA-ENTERO-DE-PIEDRA-BANCA-2.png','BROCHE-PLATA-ENTERO-DE-PIEDRA-BANCA-3.png'],
    descripcion:'Sofisticado broche completamente de plata con piedra blanca.' },

  { id:17, nombre:'Broche Ratón Dorado Con Piedras',                        precio:90,  categoria:'broches',  destacado:false,
    img:'BROCHE-RATON-DORADO-CON-PIEDRAS-BLANCAS-ROJAS-Y-AZULES-1.png',
    imagenes:['BROCHE-RATON-DORADO-CON-PIEDRAS-BLANCAS-ROJAS-Y-AZULES-1.png','BROCHE-RATON-DORADO-CON-PIEDRAS-BLANCAS-ROJAS-Y-AZULES-2.png','BROCHE-RATON-DORADO-CON-PIEDRAS-BLANCAS-ROJAS-Y-AZULES-3.png'],
    descripcion:'Divertido broche de ratón dorado con piedras blancas, rojas y azules.' },

  { id:18, nombre:'Broche Regalo Dorado Con Lazo Negro',                    precio:90,  categoria:'broches',  destacado:false,
    img:'BROCHE-REGALO-DORADO-CON-LAZO-EN-NEGRO-Y-PIEDRAS-MULTICOLOR-1.png',
    imagenes:['BROCHE-REGALO-DORADO-CON-LAZO-EN-NEGRO-Y-PIEDRAS-MULTICOLOR-1.png','BROCHE-REGALO-DORADO-CON-LAZO-EN-NEGRO-Y-PIEDRAS-MULTICOLOR-2.png'],
    descripcion:'Original broche en forma de regalo con lazo negro y piedras multicolor.' },

  // ── COLLARES ─────────────────────────────────────────────────────────
  { id:19, nombre:'Colgante Dorado Nudo',                                   precio:890, categoria:'collares', destacado:true,
    img:'COLGANTE-DORADO-NUDO-1.png',
    imagenes:['COLGANTE-DORADO-NUDO-1.png','COLGANTE-DORADO-NUDO-2.png','COLGANTE-DORADO-NUDO-3.png'],
    descripcion:'Elegante colgante dorado en forma de nudo. Minimalista y sofisticado, perfecto para cualquier ocasión. Años 20, pieza exclusiva.' },

  // ── PENDIENTES ───────────────────────────────────────────────────────
  { id:20, nombre:'Pendiente Con Piedra Rosa Y Círculos Dorados',           precio:90,  categoria:'pendientes',destacado:true,
    img:'PENDIENTE-CIRCULAR-CON-PIEDRA-ROSA-NUDE-Y-FRANJA-DORADA-Y-CIRCULOS-DORADOS-1.png',
    imagenes:['PENDIENTE-CIRCULAR-CON-PIEDRA-ROSA-NUDE-Y-FRANJA-DORADA-Y-CIRCULOS-DORADOS-1.png','PENDIENTE-CIRCULAR-CON-PIEDRA-ROSA-NUDE-Y-FRANJA-DORADA-Y-CIRCULOS-DORADOS-3.png'],
    descripcion:'Elegantes pendientes circulares con piedra rosa nude, franja dorada y círculos dorados.' },

  { id:21, nombre:'Pendiente de Oro Con Cuadros Negros y Dorados',          precio:90,  categoria:'pendientes',destacado:true,
    img:'PENDIENTE-DORADO-ESTILO-TABLERO-DE-AJEDREZ-CON-CUADRADOS-NEGROS-Y-DORADOS-1.png',
    imagenes:['PENDIENTE-DORADO-ESTILO-TABLERO-DE-AJEDREZ-CON-CUADRADOS-NEGROS-Y-DORADOS-1.png','PENDIENTE-DORADO-ESTILO-TABLERO-DE-AJEDREZ-CON-CUADRADOS-NEGROS-Y-DORADOS-2.png','PENDIENTE-DORADO-ESTILO-TABLERO-DE-AJEDREZ-CON-CUADRADOS-NEGROS-Y-DORADOS-3.png','PENDIENTE-DORADO-ESTILO-TABLERO-DE-AJEDREZ-CON-CUADRADOS-NEGROS-Y-DORADOS-4.png'],
    descripcion:'Originales pendientes dorados estilo tablero de ajedrez. Arte geométrico de los años 60.' },

  { id:22, nombre:'Pendiente Dorado Circular En Forma Cadena',              precio:80,  categoria:'pendientes',destacado:false,
    img:'PENDIENTE-DORADO-CIRCULAR-EN-FORMA-CADENA-1.png',
    imagenes:['PENDIENTE-DORADO-CIRCULAR-EN-FORMA-CADENA-1.png','PENDIENTE-DORADO-CIRCULAR-EN-FORMA-CADENA-2.png','PENDIENTE-DORADO-CIRCULAR-EN-FORMA-CADENA-3.png','PENDIENTE-DORADO-CIRCULAR-EN-FORMA-CADENA-4.png'],
    descripcion:'Pendientes dorados circulares con diseño de cadena entrelazada.' },

  { id:23, nombre:'Pendiente Dorado Colgante En Negro Con Hueco',           precio:90,  categoria:'pendientes',destacado:false,
    img:'Pendiente-Dorado-Colgante-En-Negro-Con-Hueco-1.png',
    imagenes:['Pendiente-Dorado-Colgante-En-Negro-Con-Hueco-1.png','Pendiente-Dorado-Colgante-En-Negro-Con-Hueco-2.png','Pendiente-Dorado-Colgante-En-Negro-Con-Hueco-3.png'],
    descripcion:'Pendientes dorados colgantes en negro con diseño de hueco calado.' },

  { id:24, nombre:'Pendiente Dorado Con Bolitas Negras',                    precio:80,  categoria:'pendientes',destacado:false,
    img:'PENDIENTE-DORADO-CON-BOLITAS-NEGRAS-1.png',
    imagenes:['PENDIENTE-DORADO-CON-BOLITAS-NEGRAS-1.png','PENDIENTE-DORADO-CON-BOLITAS-NEGRAS-2.png','PENDIENTE-DORADO-CON-BOLITAS-NEGRAS-3.png','PENDIENTE-DORADO-CON-BOLITAS-NEGRAS-4.png'],
    descripcion:'Pendientes dorados con bolitas negras geométricas. Diseño de los años 80.' },

  { id:25, nombre:'Pendiente Dorado Con Flor De Pétalos Coral',             precio:70,  categoria:'pendientes',destacado:false,
    img:'PENDIENTE-DORADO-CON-FLOR-DE-PETALOS-CORAL-1.png',
    imagenes:['PENDIENTE-DORADO-CON-FLOR-DE-PETALOS-CORAL-1.png','PENDIENTE-DORADO-CON-FLOR-DE-PETALOS-CORAL-2.png','PENDIENTE-DORADO-CON-FLOR-DE-PETALOS-CORAL-3.png','PENDIENTE-DORADO-CON-FLOR-DE-PETALOS-CORAL-4.png'],
    descripcion:'Románticos pendientes con flor de pétalos coral en tonos dorados.' },

  { id:26, nombre:'Pendiente Dorado Con Perlas En Línea Vertical',          precio:80,  categoria:'pendientes',destacado:true,
    img:'PENDIENTES-CABEZA-DORADA-Y-PANELES-PLATEADOS-1.png',
    imagenes:['PENDIENTES-CABEZA-DORADA-Y-PANELES-PLATEADOS-1.png','PENDIENTES-CABEZA-DORADA-Y-PANELES-PLATEADOS-2.png','PENDIENTES-CABEZA-DORADA-Y-PANELES-PLATEADOS-3.png','PENDIENTES-CABEZA-DORADA-Y-PANELES-PLATEADOS-4.png'],
    descripcion:'Sofisticados pendientes dorados con perlas en línea vertical.' },

  { id:27, nombre:'Pendiente Dorado Cuadrado Estampado Mármol',             precio:80,  categoria:'pendientes',destacado:false,
    img:'PENDIENTE-DORADO-CUADRADO-ESTAMPADO-MARMOL-1.png',
    imagenes:['PENDIENTE-DORADO-CUADRADO-ESTAMPADO-MARMOL-1.png','PENDIENTE-DORADO-CUADRADO-ESTAMPADO-MARMOL-2.png','PENDIENTE-DORADO-CUADRADO-ESTAMPADO-MARMOL-3.png','PENDIENTE-DORADO-CUADRADO-ESTAMPADO-MARMOL-4.png'],
    descripcion:'Pendientes dorados cuadrados con estampado de mármol natural.' },

  { id:28, nombre:'Pendiente Dorado En Forma De Gota Con Franja Negra',     precio:90,  categoria:'pendientes',destacado:false,
    img:'PENDIENTE-DORADO-EN-FORMA-DE-GOTA-CON-FRANJA-NEGRA-1.png',
    imagenes:['PENDIENTE-DORADO-EN-FORMA-DE-GOTA-CON-FRANJA-NEGRA-1.png','PENDIENTE-DORADO-EN-FORMA-DE-GOTA-CON-FRANJA-NEGRA-2.png','PENDIENTE-DORADO-EN-FORMA-DE-GOTA-CON-FRANJA-NEGRA-3.png','PENDIENTE-DORADO-EN-FORMA-DE-GOTA-CON-FRANJA-NEGRA-4.png'],
    descripcion:'Elegantes pendientes dorados en forma de gota con franja negra.' },

  { id:29, nombre:'Pendiente Dorado Piedras Verdes Y Moradas',              precio:70,  categoria:'pendientes',destacado:false,
    img:'PENDIENTE-DORADO-PIEDRAS-VERDES-Y-MORADAS-1.png',
    imagenes:['PENDIENTE-DORADO-PIEDRAS-VERDES-Y-MORADAS-1.png','PENDIENTE-DORADO-PIEDRAS-VERDES-Y-MORADAS-2.png','PENDIENTE-DORADO-PIEDRAS-VERDES-Y-MORADAS-3.png','PENDIENTE-DORADO-PIEDRAS-VERDES-Y-MORADAS-4.png'],
    descripcion:'Coloridos pendientes dorados con piedras verdes y moradas.' },

  { id:30, nombre:'Pendiente En Forma Dorada Con Hojas Rayadas',            precio:70,  categoria:'pendientes',destacado:false,
    img:'PENDIENTE-DORADOS-FORMA-CIRCULAR-CON-HOJAS-Y-CUADRADOS-RAYADOS-1.png',
    imagenes:['PENDIENTE-DORADOS-FORMA-CIRCULAR-CON-HOJAS-Y-CUADRADOS-RAYADOS-1.png','PENDIENTE-DORADOS-FORMA-CIRCULAR-CON-HOJAS-Y-CUADRADOS-RAYADOS-2.png','PENDIENTE-DORADOS-FORMA-CIRCULAR-CON-HOJAS-Y-CUADRADOS-RAYADOS-3.png','PENDIENTE-DORADOS-FORMA-CIRCULAR-CON-HOJAS-Y-CUADRADOS-RAYADOS-4.png'],
    descripcion:'Pendientes dorados circulares con diseño de hojas y cuadrados rayados.' },

  { id:31, nombre:'Pendiente Estilo Aro Negro',                             precio:70,  categoria:'pendientes',destacado:false,
    img:'PENDIENTE-ESTILO-ARO-NEGRO-1.png',
    imagenes:['PENDIENTE-ESTILO-ARO-NEGRO-1.png','PENDIENTE-ESTILO-ARO-NEGRO-2.png'],
    descripcion:'Clásicos pendientes estilo aro en negro. Un básico del armario.' },

  { id:32, nombre:'Pendiente Hoja Dorada Con Piedras Circulares Azules',    precio:70,  categoria:'pendientes',destacado:false,
    img:'PENDIENTE-DORADO-FORMA-DE-HOJA-Y-PIEDRITAS-CIRCULARES-AZULES-1.png',
    imagenes:['PENDIENTE-DORADO-FORMA-DE-HOJA-Y-PIEDRITAS-CIRCULARES-AZULES-1.png','PENDIENTE-DORADO-FORMA-DE-HOJA-Y-PIEDRITAS-CIRCULARES-AZULES-2.png','PENDIENTE-DORADO-FORMA-DE-HOJA-Y-PIEDRITAS-CIRCULARES-AZULES-3.png','PENDIENTE-DORADO-FORMA-DE-HOJA-Y-PIEDRITAS-CIRCULARES-AZULES-4.png'],
    descripcion:'Naturales pendientes dorados en forma de hoja con piedritas circulares azules.' },

  { id:33, nombre:'Pendiente Piedras Rosas Y Ramas Doradas',                precio:50,  categoria:'pendientes',destacado:false,
    img:'PENDIENTE-PIEDRAS-ROSAS-CIRCULARES-Y-DOS-RAMAS-DORADAS-1.png',
    imagenes:['PENDIENTE-PIEDRAS-ROSAS-CIRCULARES-Y-DOS-RAMAS-DORADAS-1.png','PENDIENTE-PIEDRAS-ROSAS-CIRCULARES-Y-DOS-RAMAS-DORADAS-2.png','PENDIENTE-PIEDRAS-ROSAS-CIRCULARES-Y-DOS-RAMAS-DORADAS-3.png','PENDIENTE-PIEDRAS-ROSAS-CIRCULARES-Y-DOS-RAMAS-DORADAS-4.png'],
    descripcion:'Románticos pendientes con piedras rosas circulares y dos ramas doradas.' },

  { id:34, nombre:'Pendiente Plata En Forma De Punta Con Brillantes',       precio:80,  categoria:'pendientes',destacado:true,
    img:'PENDIENTE-PLATA-EN-FORMA-DE-PUNTA-CON-BRILLANTES-1.png',
    imagenes:['PENDIENTE-PLATA-EN-FORMA-DE-PUNTA-CON-BRILLANTES-1.png','PENDIENTE-PLATA-EN-FORMA-DE-PUNTA-CON-BRILLANTES-2.png'],
    descripcion:'Modernos pendientes de plata en forma de punta con brillantes.' },

  { id:35, nombre:'Pendiente Rombo Blanco Con Flores En Su Interior',       precio:70,  categoria:'pendientes',destacado:false,
    img:'PENDIENTE-ROMBO-BLANCO-CON-FLORES-EN-SU-INTERIOR-1.png',
    imagenes:['PENDIENTE-ROMBO-BLANCO-CON-FLORES-EN-SU-INTERIOR-1.png','PENDIENTE-ROMBO-BLANCO-CON-FLORES-EN-SU-INTERIOR-2.png','PENDIENTE-ROMBO-BLANCO-CON-FLORES-EN-SU-INTERIOR-3.png','PENDIENTE-ROMBO-BLANCO-CON-FLORES-EN-SU-INTERIOR-4.png'],
    descripcion:'Delicados pendientes en forma de rombo blanco con flores en su interior.' },

  { id:36, nombre:'Pendientes Circulares Negros',                           precio:70,  categoria:'pendientes',destacado:false,
    img:'PENDIENTES-CIRCULARES-NEGROS-1.png',
    imagenes:['PENDIENTES-CIRCULARES-NEGROS-1.png','PENDIENTES-CIRCULARES-NEGROS-2.png','PENDIENTES-CIRCULARES-NEGROS-3.png','PENDIENTES-CIRCULARES-NEGROS-4.png'],
    descripcion:'Elegantes pendientes circulares totalmente negros.' },

  { id:37, nombre:'Pendientes Dorados Circulares Con Franja Negra Y Brillantes', precio:90, categoria:'pendientes', destacado:true,
    img:'PENDIENTES-DORADOS-CIRCULARES-CON-FRANJA-NEGRA-Y-BRILLANTES-1.png',
    imagenes:['PENDIENTES-DORADOS-CIRCULARES-CON-FRANJA-NEGRA-Y-BRILLANTES-1.png','PENDIENTES-DORADOS-CIRCULARES-CON-FRANJA-NEGRA-Y-BRILLANTES-2.png','PENDIENTES-DORADOS-CIRCULARES-CON-FRANJA-NEGRA-Y-BRILLANTES-3.png','PENDIENTES-DORADOS-CIRCULARES-CON-FRANJA-NEGRA-Y-BRILLANTES-4.png','PENDIENTES-DORADOS-CIRCULARES-CON-FRANJA-NEGRA-Y-BRILLANTES-5.png'],
    descripcion:'Deslumbrantes pendientes dorados circulares con franja negra y brillantes.' },

  { id:38, nombre:'Pendientes Dorados Circulares Con Piedra Roja',          precio:80,  categoria:'pendientes',destacado:false,
    img:'PENDIENTES-DORADOS-CIRCULARES-CON-PIEDRA-ROJA-CIRCULAR-CENTRO-1.png',
    imagenes:['PENDIENTES-DORADOS-CIRCULARES-CON-PIEDRA-ROJA-CIRCULAR-CENTRO-1.png','PENDIENTES-DORADOS-CIRCULARES-CON-PIEDRA-ROJA-CIRCULAR-CENTRO-2.png','PENDIENTES-DORADOS-CIRCULARES-CON-PIEDRA-ROJA-CIRCULAR-CENTRO-3.png','PENDIENTES-DORADOS-CIRCULARES-CON-PIEDRA-ROJA-CIRCULAR-CENTRO-4.png'],
    descripcion:'Pendientes dorados circulares con piedra roja circular en el centro.' },

  { id:39, nombre:'Pendientes Dorados Circulares Rayados Hacia El Centro',  precio:70,  categoria:'pendientes',destacado:false,
    img:'PENDIENTES-DORADOS-CIRCULARES-RAYADOS-HACIA-EL-CENTRO-1.png',
    imagenes:['PENDIENTES-DORADOS-CIRCULARES-RAYADOS-HACIA-EL-CENTRO-1.png','PENDIENTES-DORADOS-CIRCULARES-RAYADOS-HACIA-EL-CENTRO-2.png','PENDIENTES-DORADOS-CIRCULARES-RAYADOS-HACIA-EL-CENTRO-3.png'],
    descripcion:'Pendientes dorados circulares con rayado en espiral hacia el centro.' },

  { id:40, nombre:'Pendientes Dorados Colgantes Con Piedra Roja Y Perla',   precio:90,  categoria:'pendientes',destacado:true,
    img:'PENDIENTES-DORADOS-COLGANTES-CON-PIEDRA-ROJA-Y-PERLA-1.png',
    imagenes:['PENDIENTES-DORADOS-COLGANTES-CON-PIEDRA-ROJA-Y-PERLA-1.png','PENDIENTES-DORADOS-COLGANTES-CON-PIEDRA-ROJA-Y-PERLA-2.png'],
    descripcion:'Elegantes pendientes dorados colgantes con piedra roja y perla.' },

  { id:41, nombre:'Pendientes Dorados Colgantes Estilo Nudo',               precio:80,  categoria:'pendientes',destacado:false,
    img:'PENDIENTES-DORADOS-COLGANTES-ESTILO-NUDO-1.png',
    imagenes:['PENDIENTES-DORADOS-COLGANTES-ESTILO-NUDO-1.png','PENDIENTES-DORADOS-COLGANTES-ESTILO-NUDO-2.png','PENDIENTES-DORADOS-COLGANTES-ESTILO-NUDO-3.png','PENDIENTES-DORADOS-COLGANTES-ESTILO-NUDO-4.png'],
    descripcion:'Sofisticados pendientes dorados colgantes en estilo nudo.' },

  { id:42, nombre:'Pendientes Dorados Con Cruces Y Medallas De Vírgenes',   precio:90,  categoria:'pendientes',destacado:false,
    img:'PENDIENTES-DORADOS-CON-CRUCES-Y-DOS-MEDALLAS-DE-VIRGENES-1.png',
    imagenes:['PENDIENTES-DORADOS-CON-CRUCES-Y-DOS-MEDALLAS-DE-VIRGENES-1.png','PENDIENTES-DORADOS-CON-CRUCES-Y-DOS-MEDALLAS-DE-VIRGENES-2.png','PENDIENTES-DORADOS-CON-CRUCES-Y-DOS-MEDALLAS-DE-VIRGENES-3.png','PENDIENTES-DORADOS-CON-CRUCES-Y-DOS-MEDALLAS-DE-VIRGENES-4.png','PENDIENTES-DORADOS-CON-CRUCES-Y-DOS-MEDALLAS-DE-VIRGENES-5.png'],
    descripcion:'Religiosos pendientes dorados con cruces y dos medallas de vírgenes.' },

  { id:43, nombre:'Pendientes Dorados Con Perlas Colgantes Y Piedra Negra Y Roja', precio:385, categoria:'pendientes', destacado:true,
    img:'PENDIENTES-DORADOS-CON-PERLAS-COLGANTES-Y-PIEDRA-NEGRA-Y-ROJA-1.png',
    imagenes:['PENDIENTES-DORADOS-CON-PERLAS-COLGANTES-Y-PIEDRA-NEGRA-Y-ROJA-1.png','PENDIENTES-DORADOS-CON-PERLAS-COLGANTES-Y-PIEDRA-NEGRA-Y-ROJA-2.png','PENDIENTES-DORADOS-CON-PERLAS-COLGANTES-Y-PIEDRA-NEGRA-Y-ROJA-3.png','PENDIENTES-DORADOS-CON-PERLAS-COLGANTES-Y-PIEDRA-NEGRA-Y-ROJA-4.png','PENDIENTES-DORADOS-CON-PERLAS-COLGANTES-Y-PIEDRA-NEGRA-Y-ROJA-5.png'],
    descripcion:'Elegantes pendientes dorados con perlas colgantes y piedra negra y roja. Pieza de alta joyería vintage, circa 1900.' },

  { id:44, nombre:'Pendientes Dorados Con Tres Piedritas Rojas Y Negras',   precio:70,  categoria:'pendientes',destacado:false,
    img:'PENDIENTES-DORADOS-CON-TRES-PIEDRITAS-ROJAS-Y-NEGRAS-1.png',
    imagenes:['PENDIENTES-DORADOS-CON-TRES-PIEDRITAS-ROJAS-Y-NEGRAS-1.png','PENDIENTES-DORADOS-CON-TRES-PIEDRITAS-ROJAS-Y-NEGRAS-2.png','PENDIENTES-DORADOS-CON-TRES-PIEDRITAS-ROJAS-Y-NEGRAS-3.png','PENDIENTES-DORADOS-CON-TRES-PIEDRITAS-ROJAS-Y-NEGRAS-4.png'],
    descripcion:'Coloridos pendientes dorados con tres piedritas rojas y negras.' },

  { id:45, nombre:'Pendientes Dorados En Forma De C Con Piedras Multicolor', precio:245, categoria:'pendientes', destacado:true,
    img:'Pendientes-Dorados-En-Forma-De-C-Con-Piedras-Morada-Rosa-Azul-Blanca-Y-Perla-1.png',
    imagenes:['Pendientes-Dorados-En-Forma-De-C-Con-Piedras-Morada-Rosa-Azul-Blanca-Y-Perla-1.png','Pendientes-Dorados-En-Forma-De-C-Con-Piedras-Morada-Rosa-Azul-Blanca-Y-Perla-2.png','Pendientes-Dorados-En-Forma-De-C-Con-Piedras-Morada-Rosa-Azul-Blanca-Y-Perla-3.png','Pendientes-Dorados-En-Forma-De-C-Con-Piedras-Morada-Rosa-Azul-Blanca-Y-Perla-4.png'],
    descripcion:'Juguetones pendientes dorados en forma de C con piedras morada, rosa, azul, blanca y perla. Época Victoriana.' },

  { id:46, nombre:'Pendientes Dorados En Forma De Cruz Con Piedras',        precio:90,  categoria:'pendientes',destacado:false,
    img:'PENDIENTES-DORADOS-EN-FORMA-DE-CRUZ-CON-PIEDRAS-ROJAS-VERDES-Y-PERLAS-1.png',
    imagenes:['PENDIENTES-DORADOS-EN-FORMA-DE-CRUZ-CON-PIEDRAS-ROJAS-VERDES-Y-PERLAS-1.png','PENDIENTES-DORADOS-EN-FORMA-DE-CRUZ-CON-PIEDRAS-ROJAS-VERDES-Y-PERLAS-2.png','PENDIENTES-DORADOS-EN-FORMA-DE-CRUZ-CON-PIEDRAS-ROJAS-VERDES-Y-PERLAS-3.png','PENDIENTES-DORADOS-EN-FORMA-DE-CRUZ-CON-PIEDRAS-ROJAS-VERDES-Y-PERLAS-4.png','PENDIENTES-DORADOS-EN-FORMA-DE-CRUZ-CON-PIEDRAS-ROJAS-VERDES-Y-PERLAS-5.png'],
    descripcion:'Religiosos pendientes dorados en forma de cruz con piedras rojas, verdes y perlas.' },

  { id:47, nombre:'Pendientes Dorados En Forma De Lámpara Con Cadenas',     precio:90,  categoria:'pendientes',destacado:false,
    img:'PENDIENTES-DORADOS-EN-FORMA-DE-LAMPARA-CON-CADENAS-Y-PERLITAS-1.png',
    imagenes:['PENDIENTES-DORADOS-EN-FORMA-DE-LAMPARA-CON-CADENAS-Y-PERLITAS-1.png','PENDIENTES-DORADOS-EN-FORMA-DE-LAMPARA-CON-CADENAS-Y-PERLITAS-2.png','PENDIENTES-DORADOS-EN-FORMA-DE-LAMPARA-CON-CADENAS-Y-PERLITAS-3.png','PENDIENTES-DORADOS-EN-FORMA-DE-LAMPARA-CON-CADENAS-Y-PERLITAS-4.png'],
    descripcion:'Únicos pendientes dorados en forma de lámpara con cadenas y perlitas colgantes.' },

  { id:48, nombre:'Pendientes Dorados En Forma De V Con Líneas Negras',     precio:70,  categoria:'pendientes',destacado:false,
    img:'PENDIENTES-DORADOS-EN-FORMA-DE-V-CON-LINEAS-NEGRAS-1.png',
    imagenes:['PENDIENTES-DORADOS-EN-FORMA-DE-V-CON-LINEAS-NEGRAS-1.png','PENDIENTES-DORADOS-EN-FORMA-DE-V-CON-LINEAS-NEGRAS-2.png','PENDIENTES-DORADOS-EN-FORMA-DE-V-CON-LINEAS-NEGRAS-3.png','PENDIENTES-DORADOS-EN-FORMA-DE-V-CON-LINEAS-NEGRAS-4.png'],
    descripcion:'Modernos pendientes dorados en forma de V con líneas negras.' },

  { id:49, nombre:'Pendientes Dorados Estilo Aro Con Franja Negra',         precio:70,  categoria:'pendientes',destacado:false,
    img:'PENDIENTES-DORADOS-ESTILO-ARO-CON-FRANJA-NEGRA-Y-ARQUEADOS-1.png',
    imagenes:['PENDIENTES-DORADOS-ESTILO-ARO-CON-FRANJA-NEGRA-Y-ARQUEADOS-1.png','PENDIENTES-DORADOS-ESTILO-ARO-CON-FRANJA-NEGRA-Y-ARQUEADOS-2.png','PENDIENTES-DORADOS-ESTILO-ARO-CON-FRANJA-NEGRA-Y-ARQUEADOS-3.png'],
    descripcion:'Clásicos pendientes dorados estilo aro con franja negra y forma arqueada.' },

  { id:50, nombre:'Pendientes Dorados Rayados',                             precio:70,  categoria:'pendientes',destacado:false,
    img:'PENDIENTES-DORADOS-RAYADOS-1.png',
    imagenes:['PENDIENTES-DORADOS-RAYADOS-1.png','PENDIENTES-DORADOS-RAYADOS-2.png','PENDIENTES-DORADOS-RAYADOS-3.png','PENDIENTES-DORADOS-RAYADOS-4.png'],
    descripcion:'Pendientes dorados con textura rayada, diseño minimalista y atemporal.' },

  { id:51, nombre:'Pendientes Dorados Rectangulares Con Círculo Negro',     precio:70,  categoria:'pendientes',destacado:false,
    img:'Pendientes-Dorados-Rectangulares-Pequenos-Con-Circulo-Negro-En-El-Centro-1.png',
    imagenes:['Pendientes-Dorados-Rectangulares-Pequenos-Con-Circulo-Negro-En-El-Centro-1.png','Pendientes-Dorados-Rectangulares-Pequenos-Con-Circulo-Negro-En-El-Centro-2.png'],
    descripcion:'Geométricos pendientes dorados rectangulares pequeños con círculo negro en el centro.' },

  { id:52, nombre:'Pendientes Dorados Y Negros Circulares Con Trazas',      precio:80,  categoria:'pendientes',destacado:false,
    img:'PENDIENTES-DORADOS-Y-NEGROS-CIRCULARES-CON-TRAZAS-DORADAS-1.png',
    imagenes:['PENDIENTES-DORADOS-Y-NEGROS-CIRCULARES-CON-TRAZAS-DORADAS-1.png','PENDIENTES-DORADOS-Y-NEGROS-CIRCULARES-CON-TRAZAS-DORADAS-2.png','PENDIENTES-DORADOS-Y-NEGROS-CIRCULARES-CON-TRAZAS-DORADAS-3.png','PENDIENTES-DORADOS-Y-NEGROS-CIRCULARES-CON-TRAZAS-DORADAS-4.png'],
    descripcion:'Artísticos pendientes dorados y negros circulares con trazas doradas.' },

  { id:53, nombre:'Pendientes Negros Estilo Piedra Circular',               precio:70,  categoria:'pendientes',destacado:false,
    img:'PENDIENTES-NEGROS-ESTILO-PIEDRA-CIRCULAR-1.png',
    imagenes:['PENDIENTES-NEGROS-ESTILO-PIEDRA-CIRCULAR-1.png','PENDIENTES-NEGROS-ESTILO-PIEDRA-CIRCULAR-2.png','PENDIENTES-NEGROS-ESTILO-PIEDRA-CIRCULAR-3.png'],
    descripcion:'Naturales pendientes negros con aspecto de piedra circular.' },
];

// ── CARRITO (localStorage) ────────────────────────────────────────────

const Carrito = {
  _key: 'sv_carrito',

  getAll() {
    try { return JSON.parse(localStorage.getItem(this._key)) || []; }
    catch { return []; }
  },

  save(items) {
    localStorage.setItem(this._key, JSON.stringify(items));
    this._updateBadge();
  },

  add(productId, cantidad = 1) {
    const items = this.getAll();
    const idx = items.findIndex(i => i.id === productId);
    if (idx >= 0) items[idx].cantidad += cantidad;
    else items.push({ id: productId, cantidad });
    this.save(items);
  },

  remove(productId) {
    this.save(this.getAll().filter(i => i.id !== productId));
  },

  update(productId, cantidad) {
    if (cantidad <= 0) { this.remove(productId); return; }
    const items = this.getAll();
    const idx = items.findIndex(i => i.id === productId);
    if (idx >= 0) { items[idx].cantidad = cantidad; this.save(items); }
  },

  clear() { localStorage.removeItem(this._key); this._updateBadge(); },

  count() { return this.getAll().reduce((s, i) => s + i.cantidad, 0); },

  total() {
    return this.getAll().reduce((s, i) => {
      const p = SAMA_PRODUCTOS.find(p => p.id === i.id);
      return s + (p ? p.precio * i.cantidad : 0);
    }, 0);
  },

  items() {
    return this.getAll().map(i => {
      const p = SAMA_PRODUCTOS.find(p => p.id === i.id);
      return p ? { ...p, cantidad: i.cantidad, subtotal: p.precio * i.cantidad } : null;
    }).filter(Boolean);
  },

  _updateBadge() {
    const c = this.count();
    document.querySelectorAll('.cart-count, #cartCount').forEach(el => {
      el.textContent = c;
      el.classList.toggle('visible', c > 0);
    });
  }
};

// ── HELPERS ───────────────────────────────────────────────────────────

function formatPrice(n) {
  return parseFloat(n).toFixed(2).replace('.', ',') + ' €';
}

function getImgPath(filename, prefix = '') {
  return `${prefix}assets/images/${filename}`;
}

function mostrarNotificacion(msg) {
  document.querySelectorAll('.sv-notif').forEach(n => n.remove());
  const n = document.createElement('div');
  n.className = 'sv-notif';
  n.textContent = msg;
  n.style.cssText = 'position:fixed;top:90px;right:20px;background:#1a1a1a;color:#D4A574;padding:13px 20px;border-radius:4px;z-index:10000;font-size:.84rem;letter-spacing:.5px;box-shadow:0 6px 20px rgba(0,0,0,.18);animation:svIn .3s ease';
  document.body.appendChild(n);
  setTimeout(() => { n.style.animation = 'svOut .3s ease forwards'; setTimeout(() => n.remove(), 300); }, 2800);
}

// Inyectar keyframes una vez
if (!document.getElementById('sv-anim')) {
  const s = document.createElement('style');
  s.id = 'sv-anim';
  s.textContent = '@keyframes svIn{from{transform:translateX(110%);opacity:0}to{transform:translateX(0);opacity:1}}@keyframes svOut{from{transform:translateX(0);opacity:1}to{transform:translateX(110%);opacity:0}}';
  document.head.appendChild(s);
}

// Actualizar badge al cargar cualquier página
document.addEventListener('DOMContentLoaded', () => Carrito._updateBadge());
