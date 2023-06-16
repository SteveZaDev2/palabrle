let protoWordsArray = [
  { 
    cat: "5-Letter Words",
    sel: true,
    parent: "",  /* Á   É    Í  Ó   Ú   Ñ */
    numOfItems: 0,
    items: ["ABABA", "ABACÁ", "ÁBACO", "ABAJO", "ABANO", "ABAYA", "ABECÉ", "ABEJA", "ABETO", "ABONO", "ABRIL", "ABRIR", "ÁBSIT", "ABUSO", "ÁCANA", "ÁCARO", "ACASO", "ACEBO", "ACEDO", "ACEÑA", "ACENO", "ACERA", "ACERO", "ÁCERO", "ÁCIDO", "ACOSO", "ACTOR", "ADIÓS", "ADIVE", "ADOBE", "AERAR", "AÉREO", "AFEAR", "ÁFIDO", "AFIJO", "ÁGAPE", "ÁGATE", "AGORA", "ÁGORA", "AGRAZ", "AGRIO", "AGUAR", "AGUAS", "AGUDO", "AGUJA", "AHÍTO", "AHOGO", "AHORA", "AIRAR", "AIRES", "AJADO", "AJENO", "AJUAR", "ALADO", "ALAJÚ", "ÁLAMO", "ALANO", "ÁLBUM", "ALBUR", "ALDEA", "ALEAR", "ALERO", "ALETA", "ALFIL", "ALGAR", "ALIAR", "ALIAS", "ALIÑO", "ALISO", "ALMEZ", "ALTAR", "ALZAR", "AMATE", "ÁMBAR", "AMBOS", "AMEBA", "AMENO", "AMIGA", "AMIGO", "AMINA", "AMINO", "ÁNADE", "ANANÁ", "ANCHO", "ANCLA", "ANDAR", "ANDÉN", "ANEJO", "AÑEJO", "ANEXO", "ÁNGEL", "ÁNIMA", "ÁNIMO", "AÑITO", "ÁNODO", "ÁNSAR", "ANSIA", "ANTES", "ANTRO", "ANUAL", "AORTA", "APEAR", "APEGO", "APERO", "ÁPICE", "APODO", "APOYO", "APURO", "AQUEL", "AQUÉL", "ARADO", "ARAÑA", "ÁRBOL", "ARCÉN", "ARDER", "ARDID", "ARDOR", "ARDUO", "ARENA", "AREPA", "ARETE", "ARFIL", "ARGÓN", "ARGOT", "ÁRIDO", "ARILO", "ARMAR", "ARNÉS", "AROMA", "ARPÍA", "ARPÓN", "ARREA", "ARROZ", "ASADO", "ASCUA", "ASEAR", "ASILO", "ASNAL", "ÁSPID", "ASPRO", "ÁSTER", "ASTIL", "ASTRO", "ATADO", "ATAJO", "ATAÚD", "ÁTICO", "ATLAS", "ATOLE", "ÁTAMO", "ÁTONO", "ATRÁS", "ATROZ", "AUDAZ", "AUDIO", "AUNAR", "AUPAR", "ÁUERO", "AUTOR", "AVARA", "AVARO", "AVENA", "AVIAR", "ÁVIDO", "AVIÓN", "AVISO", "AXILA", "AYATE", "AYOTE", "AYUDA", "AYUNO", "AYUSO", "AZADA", "AZOTE", "ZAFAR", "ZAFIO", "ZAGAL", "ZAINO", "ZANCO", "ZANJA", "ZAPAR", "ZAPEO", "ZARPA", "ZARZA", "ZÍPER", "ZOMBI", "ZONZO", "ZORRA", "ZORRO", "ZUECO", "ZULLA", "ZUMBA", "ZUNGA", "ZURDO", "ZUZAR", "YAPAR", "YARDA", "YEDRA", "YEGUA", "YELMO", "YERMO", "YERNO", "YERRO", "YERTO", "YESCA", "YIHAD", "YOGUI", "YOGUR", "YUCAL", "YUNTA", "YURTA", "BABOR", "BACÁN", "BACHE", "BACÓN", "BAGRE", "BAHÍA", "BAILE", "BAJAR", "BAJÍO", "BAJÓN", "BALAR", "BALDA", "BALDE", "BALÓN", "BALSA", "BAMBA", "BANAL", "BAÑAR", "BANCA", "BANCO", "BANDA", "BANDO", "BANJO", "BARBA", "BARCA", "BARCO", "BARDA", "BARÓN", "BARRA", "BARRO", "BASAR", "BASTA", "BASTO", "BATÁN", "BATEA", "BATIR", "BAZAR", "BEATO", "BEBER", "BECAR", "BEDEL", "BEIGE", "BELÉN", "BELLO", "BEODO", "BERMA", "BERRO", "BERZA", "BESAR", "BETÚN", "BICHO", "BIDÓN", "BILIS", "BINGO", "BÍPER", "BISTÉ", "BIZCO", "BLADA", "BLEDO", "BLUSA", "BOCIO", "BOCÓN", "BOINA", "BOLLO", "BOLOS", "BOLSA", "BOLSO", "BOMBA", "BOMBO", "BONZO", "BÓRAX", "BORDA", "BORDE", "BORDO", "BORDÓ", "BORLA", "BORRA", "BOTAR", "BOTÍN", "BOTÓN", "BOXEO", "BOZAL", "BRAGA", "BRAMA", "BRASA", "BRAVO", "BRAZA", "BRAZO", "BREAR", "BRETE", "BREVA", "BREVE", "BREZO", "BRIDA", "BRISA", "BROMA", "BROMO", "BROTE", "BRUJA", "BRUJO", "BRUMA", "BRUTO", "BUCEO", "BUCLE", "BUDÍN", "BUENO", "BUFAR", "BUFÓN", "BUJÍA", "BULBO", "BULÍN", "BULLA", "BULTO", "BUNGY", "BUQUE", "BURKA", "BURLA", "BURRA", "BURRO", "BUSCA", "BUSTO", "BUZÓN", "CABAL", "CABER", "CABLE", "CABRA", "CABRO", "CACAO", "CACHO", "CACLE", "CACTO", "CAGAR", "CAGÓN", "CAÍDA", "CAÍDO", "CAJÓN", "CALAR", "CALCO", "CALDO", "CÁLIZ", "CALLE", "CALLO", "CALMA", "CALMO", "CALOR", "CALVA", "CALVO", "CAMPO", "CANAL", "CAÑAR", "CANJE", "CANOA", "CANON", "CAÑÓN", "CANTO", "CAOBA", "CAPAZ", "CAPÓN", "CAQUI", "CARCA", "CARDO", "CAREY", "CARGA", "CARGO", "CARIZ", "CARNE", "CARNÉ", "CARPA", "CARRO", "CARTA", "CARVI", "CASAL", "CASAR", "CASCO", "CASPA", "CASTA", "CASTO", "CATAR", "CATRE", "CAUCE", "CAUSA", "CAUTO", "CAVAR", "CAZAR", "CEBAR", "CEBRA", "CECEO", "CEDER", "CEDRO", "CEGAR", "CEJAR", "CELAR", "CELDA", "CENAR", "CEÑIR", "CENIT", "CÉNIT", "CENSO", "CERCA", "CERDA", "CERDO", "CERRO", "CESAR", "CÉSAR", "CESIO", "CESTA", "CETRO", "CHACO", "CHAFA", "CHALA", "CHALE", "CHALÉ", "CHAMO", "CHANA", "CHAPA", "CHAPE", "CHATO", "CHELA", "CHELE", "CHELO", "CHICA", "CHICO", "CHIDO", "CHILE", "CHINA", "CHINO", "CHITO", "CHIVA", "CHIVO", "CHOCO", "CHOLA", "CHOLO", "CHORA", "CHORO", "CHOZA", "CHULO", "CHUPE", "CHUPI", "CICLO", "CIDRO", "CIEGO", "CIELO", "CIENO", "CIFRA", "CIMAR", "CINCO", "CINTA", "CINTO", "CIRCO", "CIRIO", "CISMA", "CISNE", "CITAR", "CIVIL", "CLARA", "CLARO", "CLASE", "CLAVA", "CLAVE", "CLAVO", "CLERO", "CLIMA", "CLORO", "CLOWN", "COALA", "COATÍ", "COBRA", "COBRE", "COCER", "COCHE", "COFIA", "COFRE", "COGER", "COIMA", "COITO", "COJÍN", "COLAR", "COLMO", "COLON", "COLOR", "COMAL", "COMBO", "COMER", "CÓMIC", "COMPA", "COMÚN", "COÑAC", "CONDE", "COPAL", "COPAR", "COPAS", "COPIA", "COPLA", "COQUE", "CORAL", "CORDA", "CORNO", "CORRO", "CORSÉ", "CORTE", "CORTO", "COSER", "COSTA", "COSTE", "COSTO", "COXAL", "CRACK", "CRASO", "CREAR", "CREDO", "CREER", "CREMA", "CREPA", "CRIAR", "CRIBA", "CROAR", "CROMO", "CRUCE", "CRUDO", "CRUEL", "CUAJO", "CUASI", "CUATE", "CUBIL", "CUERO", "CUEVA", "CUICA", "CUICO", "CUITA", "CULPA", "CULTO", "CUOTA", "CUPÓN", "CURAL", "CURAR", "CURDA", "CURRO", "CURRY", "CURSI", "CURSO", "CURVA", "CURVO", "CUYAS", "DABLE", "DALIA", "DAÑAR", "DANDI", "DANZA", "DARDO", "DATAR", "DÁTIL", "DEBER", "DÉBIL", "DEBUT", "DECIR", "DEDAL", "DEJAR", "DELLA", "DELLO", "DELTA", "DEMÁS", "DENSO", "DESDE", "DESEO", "DEUDA", "DIANA", "DICHA", "DICHO", "DIETA", "DIGNO", "DIODO", "DIQUE", "DISCO", "DOBLE", "DÓCIL", "DOCTO", "DOGMA", "DOLAR", "DÓLAR", "DOLER", "DOLOR", "DOMAR", "DONAR", "DONDE", "DÓNDE", "DOPAR", "DORAR", "DORSO", "DOSIS", "DOTAR", "DRAGO", "DRAMA", "DROGA", "DUCHA", "DUCHO", "DUDAR", "DUELO", "DUEÑA", "DUEÑO", "DULCE", "DUQUE", "DURAR", "ÉBANO", "EBRIO", "ECHAR", "EDEMA", "ÉGIDA", "EJIDO", "EJOTE", "ELITE", "ÉLITE", "ELLAS", "ELLOS", "ELOTE", "ENANA", "ENANO", "ENEMA", "ENOJO", "ENTRE", "ENVÉS", "ENVIO", "ÉPICA", "ÉPICO", "ÉPOCA", "ERIZO", "ERRAR", "ERROR", "ESMOG", "ESNOB", "ESPÍA", "ESPÍN", "ESQUÍ", "ESTAR", "ESTAS", "ÉSTAS", "ESTÍO", "ESTOS", "ESTRO", "ETANO", "ETAPA", "ÉTICA", "ÉTICO", "ETNIA", "ÉXITO", "ÉXODO", "EXTRA", "EXTRA", "FACHA", "FÁCIL", "FAENA", "FAJAR", "FALDA", "FALLA", "FALLO", "FALSO", "FALTA", "FALTO", "FANGO", "FAROL", "FARRA", "FARSA", "FATAL", "FATUA", "FATUO", "FAUNA", "FAVOR", "FECHA", "FELIZ", "FELPA", "FÉMUR", "FÉNIX", "FERIA", "FEROZ", "FERRI", "FETAL", "FETÉN", "FIADO", "FIBRA", "FICAR", "FICHA", "FIDEO", "FIERA", "FIJAR", "FILAR", "FILME", "FILÓN", "FINAL", "FINCA", "FINIR", "FIRMA", "FIRME", "FLACA", "FLACO", "FLEMA", "FLETE", "FLIRT", "FLOJO", "FLOTA", "FLOTE", "FLUIR", "FLUJO", "FLÚOR", "FOBIA", "FOGÓN", "FOLIO", "FONDO", "FOQUE", "FORAL", "FORJA", "FORMA", "FORRO", "FÓSIL", "FOTÓN", "FRASE", "FRENO", "FREÓN", "FRESA", "FRIKI", "FRITO", "FROGA", "FRUTA", "FRUTO", "FUEGO", "FUERA", "FUFAR", "FUGAR", "FUGAZ", "FUMAR", "FUNDA", "FUNDO", "FUÑIR", "FURIA", "FUSCA", "FUSIL", "FUSTA", "FÚTIL", "GABÁN", "GACHO", "GAFAR", "GAFAS", "GAITA", "GALÁN", "GALGO", "GALLO", "GALÓN", "GAMBA", "GAMMA", "GANAR", "GANGA", "GAÑIR", "GANSO", "GARBO", "GARRA", "GARZA", "GASTO", "GEMIR", "GENIO", "GENTE", "GEODA", "GESTO", "GIRAR", "GLIFO", "GLOBO", "GNOMO", "GOFRE", "GOLFO", "GOLPE", "GOMAS", "GORDA", "GORDO", "GORRA", "GORRO", "GOZAR", "GRADA", "GRADO", "GRAFO", "GRAMA", "GRAMO", "GRANO", "GRAPA", "GRASA", "GRATO", "GRAVA", "GRAVE", "GRELO", "GREÑA", "GRIAL", "GRIFO", "GRIPA", "GRIPE", "GRITO", "GRUMO", "GRUPO", "GRUTA", "GUAJE", "GUAPO", "GUASA", "GUATA", "GUAYO", "GUETTO", "GÚGOL", "GUIAR", "GUIJA", "GUIÑO", "GUION", "GUIÓN", "GUIRI", "GUISA", "GUISO", "GUITA", "GUSTO", "HABAR", "HABER", "HABÍA", "HÁBIL", "HABLA", "HACER", "HACHA", "HACIA", "HAIKU", "HALAR", "HAMPA", "HANZO", "HARÉN", "HARTO", "HASTA", "HEBRA", "HECHO", "HEDER", "HEDOR", "HELAR", "HELIO", "HENAR", "HEÑIR", "HERIR", "HÉROE", "HERTZ", "HEVEA", "HIATO", "HIDRA", "HIELO", "HIENA", "HILAR", "HIMNO", "HIPAR", "HOBBY", "HOGAR", "HOLÁN", "HONDA", "HONDO", "HONGO", "HONOR", "HORCA", "HORDA", "HORMA", "HORNO", "HORRO", "HOSCO", "HOTEL", "HOUSE", "HOZAR", "HUASO", "HUCHA", "HUECO", "HUESO", "HUEVA", "HUEVO", "HUIDA", "HUILO", "HULLA", "HUMOR", "HURÓN", "HURTO", "HÚSAR", "ÍBICE", "ICONO", "IDEAL", "IDEAR", "ÍDOLO", "IDOSA", "ÍGNEO", "IGUAL", "ÍLEON", "ILESO", "ILOTA", "IMPAR", "INANE", "INCHA", "INGLE", "INUIT", "ISTMO", "ITRIO", "IZOTE", "JABÓN", "JACAL", "JADEO", "JAIBA", "JALAO", "JALAR", "JALEA", "JALEO", "JALÓN", "JAMÁS", "JAMÓN", "JAQUE", "JARRA", "JARRO", "JAULA", "JEANS", "JEJÉN", "JEQUE", "JERBO", "JEREZ", "JERGA", "JIBIA", "JIOTE", "JIRÓN", "JODER", "JOLÍN", "JOVEN", "JOYEL", "JUBÓN", "JUDÍA", "JUEGO", "JUEZA", "JUGAR", "JUNCO", "JUNTA", "JUNTO", "JURAR", "JUSTA", "JUSTO", "KARMA", "KÉFIR", "KOALA", "LABIO", "LABOR", "LABRA", "LACHA", "LACHO", "LACIO", "LACÓN", "LACRA", "LADRO", "LAMER", "LANDA", "LANZA", "LÁPIZ", "LAPSO", "LARGO", "LASCA", "LÁTEX", "LATIR", "LATÓN", "LAVAR", "LAXAR", "LAZAR", "LECHA", "LECHE", "LECHO", "LEGAL", "LEGAR", "LEGUA", "LEÍDO", "LEJÍA", "LEJOS", "LÉMUR", "LENTE", "LENTO", "LEONA", "LEPRA", "LESNA", "LETAL", "LETRA", "LIBAR", "LIBRE", "LIBRO", "LICEO", "LICOR", "LÍDER", "LIGAR", "LIGHT", "LIGRE", "LIJAR", "LIMAR", "LIMBO", "LIMEN", "LIMÓN", "LINAR", "LINCE", "LINDO", "LÍNEA", "LINFA", "LIRIO", "LISTA", "LISTO", "LITAR", "LITIO", "LITRO", "LIVOR", "LLAGA", "LLAMA", "LLANA", "LLANO", "LLAVE", "LLENO", "LOCAL", "LOCUS", "LOGAR", "LOGIA", "LOGRO", "LUCHA", "LUCIO", "LUCIR", "LUCRO", "LUEGO", "LUGAR", "LUNAR", "MACHA", "MACHO", "MACIS", "MADRE", "MAESO", "MAFIA", "MAGIA", "MAGNO", "MAGRO", "MAJAR", "MALLA", "MALLO", "MALTA", "MALVA", "MAMAR", "MAMBA", "MAMBO", "MAMÓN", "MAMUT", "MANAR", "MANCO", "MANDA", "MANDO", "MANGA", "MANGO", "MANGÚ", "MANÍA", "MANSO", "MANTA", "MANTO", "MARCA", "MAREA", "MAREO", "MARTA", "MASAR", "MATAR", "MATEO", "MATES", "MATIZ", "MATÓN", "MAYOR", "MECER", "MECHA", "MEDIA", "MEDIO", "MEDIR", "MEIGO", "MEJOR", "MELLA", "MELÓN", "MENOR", "MENOS", "MENSO", "MENTA", "MENTE", "MESÓN", "METAL", "METER", "METRO", "MICRO", "MIEDO", "MILPA", "MIMAR", "MINAR", "MIOPE", "MIRAR", "MIRLO", "MIRÓN", "MIRRA", "MISIL", "MÍSIL", "MISMO", "MITAD", "MITIN", "MITRA", "MIXTO", "MOCHO", "MODAL", "MÓDEM", "MOFAR", "MOJAR", "MOJÓN", "MOLAR", "MOLDE", "MOLER", "MOLLA", "MOMIA", "MONDO", "MONGO", "MONJA", "MONJE", "MONTE", "MONTO", "MORAL", "MORBO", "MÓREO", "MORIR", "MORRO", "MORSA", "MOSCA", "MOSCO", "MOSTO", "MOTEL", "MOTÍN", "MOTOR", "MOVER", "MÓVIL", "MUCHO", "MUDAR", "MUECA", "MUELA", "MUFLA", "MUGER", "MUGIR", "MUGRE", "MUJER", "MÚJOL", "MULTA", "MUNDO", "MUÑIR", "MUÑÓN", "MURAL", "MURAR", "MUSEO", "MUSGO", "MUSLO", "MUTAR", "MUTUO", "NABAL", "NABAR", "NÁCAR", "NACER", "NADAL", "NADAR", "NADIE", "NAFTA", "NAGUA", "NAIPE", "NALGA", "ÑANDU", "ÑANGO", "NARCO", "NARIZ", "NASAL", "NATAL", "NATÍO", "NAVAL", "NAVÍO", "NECIO", "NEGAR", "NEGRA", "NEGRO", "ÑENGO", "NERDO", "NESGA", "NEVAR", "NICHO", "NIETA", "NIETO", "NIEVE", "NIÑEZ", "NINFA", "NIVEL", "NÍVEO", "NOBLE", "NOCHE", "NOGAL", "NOMÁS", "NORIA", "NORMA", "NORTE", "NOTAR", "NOVEL", "NOVIA", "NOVIO", "NUERA", "NUEVA", "NUEVO", "NUMEN", "NUNCA", "OBESA", "OBESO", "OBLEA", "OBRAR", "OBVIO", "OCASO", "OCOTE", "ODIAR", "OESTE", "OHMIO", "OÍBLE", "OIDOR", "OJALÁ", "OJEAR", "OJETE", "OJITO", "OGIVA", "OJOTA", "OKUPA", "OLIVA", "OLIVO", "OLOTE", "OMISO", "ÓPALO", "ÓPERA", "OPIMO", "OPTAR", "ÓRALE", "ORATE", "ORDEN", "OREAR", "ORGÍA", "ORINA", "ORLAR", "ORNAR", "ORUGA", "OSADO", "OSITO", "OSTIA", "OSTRA", "OTEAR", "OTERO", "OTOÑO", "OTRAS", "ÓVALO", "OVEJA", "ÓVULO", "ÓXIDO", "OZONO", "PACER", "PACOS", "PACTO", "PADRE", "PAGAR", "PAJAR", "PALCO", "PALMA", "PALTA", "PALTO", "PAMPA", "PANAL", "PAÑAL", "PANDA", "PANDO", "PANEL", "PANTY", "PANZA", "PAPEL", "PARAR", "PARDO", "PARED", "PARÓN", "PARRA", "PARTE", "PARTO", "PASAR", "PASEO", "PASTA", "PASTE", "PASTO", "PATÁN", "PATÍN", "PATIO", "PAUSA", "PAUTA", "PAVÓN", "PAVOR", "PEAJE", "PEBRE", "PECAR", "PECHO", "PECIO", "PEDAL", "PEDIR", "PEGAR", "PEINE", "PELAR", "PELEA", "PELÍN", "PELÓN", "PENAL", "PENAR", "PENCA", "PENOL", "PERAL", "PERCA", "PERLA", "PERNO", "PERRA", "PERRO", "PESAR", "PESAS", "PESCA", "PESTE", "PETAR", "PEUCA", "PEUCO", "PIADA", "PIANO", "PIARA", "PIBIL", "PIBÓN", "PICAR", "PÍCEA", "PICLE", "PIEZA", "PIFIA", "PILAR", "PILLO", "PILÓN", "PIÑÓN", "PINTA", "PINTO", "PINZA", "PIOJO", "PIOLA", "PIPÓN", "PIQUE", "PIRAR", "PISAR", "PISCA", "PISCO", "PISTA", "PITAR", "PITÓN", "PÍVOT", "PIZCA", "PIZZA", "PLACA", "PLAGA", "PLANO", "PLATA", "PLATO", "PLATÓ", "PLAYA", "PLAZA", "PLAZO", "PLEBE", "PLENO", "PLOMO", "PLUMA", "POBRE", "POCHO", "PODAR", "PODER", "PODIO", "POEMA", "POETA", "PÓKER", "POLAR", "POLEA", "POLEN", "POLIR", "POLLA", "POLLO", "POLVO", "POMPA", "POMPO", "PONER", "PONGO", "PORFA", "PORNO", "PORRA", "PORRO", "PORTE", "POSAR", "POSTA", "POSTE", "POTRA", "POTRO", "PRADO", "PRESA", "PRESO", "PRIMA", "PRIMO", "PRISA", "PROSA", "PROTA", "PUCHA", "PUDIN", "PUDÍN", "PUDOR", "PÚGIL", "PUJAR", "PULGA", "PULIR", "PULLA", "PULPO", "PULSO", "PUÑAL", "PUÑAR", "PUNIR", "PUNTA", "PUNTO", "PUZLE", "QUARK", "QUEDA", "QUEDO", "QUEJA", "QUEMA", "QUEME", "QUENA", "QUESO", "QUIEN", "QUIÉN", "QUITE", "QUIZÁ", "RABIA", "RABÓN", "RACHA", "RADAR", "RADIO", "RADÓN", "RAJAR", "RALEA", "RALLO", "RAMAL", "RAMÓN", "RAMPA", "RANGO", "RAPAR", "RAPAZ", "RAPEL", "RÁPEL", "RAPTO", "RASCA", "RASGO", "RATÓN", "RAYAR", "RAZÓN", "REATA", "RECIO", "RECTA", "RECTO", "REDIL", "REGAR", "REGIO", "REGIR", "REGLA", "REHÉN", "REINA", "REINO", "RELOJ", "REMAR", "REÑIR", "RENTA", "RESMA", "RESTA", "RESTO", "RETAR", "REUMA", "REVÉS", "REZAR", "RIADA", "RIEGO", "RIFAR", "RIFLE", "RIGOR", "RIGUA", "RIMAR", "RÍMEL", "RIÑON", "RITMO", "RIVAL", "RIZAR", "ROBAR", "ROBLE", "ROBOT", "ROCÍN", "ROCÍO", "RODAR", "RODEO", "ROGAR", "ROLLO", "ROMBO", "RONCO", "RONDA", "ROQUE", "ROSAL", "ROSCA", "ROTAR", "ROZAR", "RUBIA", "RUBIO", "RUEDA", "RUEDO", "RUGIR", "RUIDO", "RUINA", "RULAR", "RUMBA", "RUMBO", "RUMOR", "RURAL", "SABER", "SABIA", "SABIO", "SABLE", "SABOR", "SACAR", "SACIO", "SACRO", "SAETA", "SAGAZ", "SAJAR", "SAJÓN", "SALAR", "SALAZ", "SALDO", "SALIR", "SALMO", "SALÓN", "SALSA", "SALSO", "SALTO", "SALUD", "SALVO", "SANAR", "SANTO", "SAQUE", "SARRO", "SAUCE", "SAÚCO", "SAVIA", "SAYAL", "SAZÓN", "SECAR", "SECTA", "SEDAL", "SEDAR", "SEGAR", "SEGÚN", "SELLO", "SELVA", "SEMEN", "SEÑAL", "SENDA", "SENIL", "SEÑOR", "SERIE", "SERIO", "SESGO", "SEXMO", "SEXTO", "SIBIL", "SIDRA", "SIETE", "SIFÓN", "SIGLA", "SIGLO", "SIGNO", "SILBO", "SILLA", "SÍMIL", "SIMIO", "SIMÓN", "SINPA", "SISAR", "SISEO", "SISMO", "SITIO", "SOBAR", "SOBRA", "SOBRE", "SOCIO", "SODIO", "SOGÚN", "SOLAR", "SOLER", "SONAR", "SOÑAR", "SONDA", "SOPAR", "SOPLO", "SOPOR", "SORBO", "SORDO", "SOTOL", "SUAVE", "SUBIR", "SUCIO", "SUDAR", "SUDOR", "SUELA", "SUENO", "SUEÑO", "SUERO", "SUITE", "SUMAR", "SUMIR", "SÚPER", "SURTO", "SUSHI", "SUSTO", "SUTIL", "SUYAS", "SUYOS"], /* ÁÉÍÓÚÑ */
    def: ["RED POPPY", "ABACA", "ABACUS", "DOWN", "CEILING FAN", "ABAYA", "PRIMER", "BEE", "FIR", "FERTILIZER", "YEARS OF AGE", "TO OPEN OPENING", "GO AWAY!", "ABUSE", "ACANA TREE", "MITE", "PERHAPS", "HOLLY", "SOUR", "WATER MILL", "ACENE", "PAVEMENT SIDEWALK", "STEEL", "HORNLESS", "ACIDIC", "HARASSMENT", "ACTOR", "GOODBYE", "JACKAL", "ADOBE", "TO AIR", "AERIAL", "TO MAKE UGLY", "APHID", "AFFIX", "SPIRITUAL LOVE", "AGATE", "NOW", "AGORA", "UNPLEASANT", "SOUR", "TO WATER", "BE CAREFUL!", "SHARP WITTY", "HAND OF A CLOCK", "SATIATED", "ANGUISH", "NOW", "TO ANGER", "AIRS", "FRAYED", "DISTANT ALIEN", "DOWRY", "WINGED", "SWEET ALMOND PASTE", "WHITE POPLAR", "MASTIFF", "ALBUM", "BLEAK FISH", "VILLAGE", "TO ALLOY", "EAVE", "PROPELLER BLADE", "BISHOP", "CAVE GROTTO", "TO ALLY", "ALIAS", "SPICE", "ALDER TREE", "TREE SHRUB", "ALTAR", "TO REVOLT", "AMATE ART FORM", "AMBER", "BOTH", "AMOEBA", "PLEASANT", "FRIEND", "FRIEND", "AMINE", "AMINO", "DUCK", "PINEAPPLE", "PROUD", "ANCHOR", "TO WALK", "PLATFORM SIDEWALK", "ATTACHED", "AGED (FOOD)", "ATTACHED", "ANGEL", "SOUL", "COURAGE!", "YEAR", "ANODE", "WILD GOOSE", "ANXIETY", "BEFORE", "UNTIDY LOCATION", "ANNUAL", "AORTA", "TO REMOVE", "FONDNESS", "TOOL", "APEX", "NICKNAME", "SUPPORT", "DIFFICULTY", "THAT (OVER THERE)", "ANYONE/ANYTHING", "PLOUGH", "SPIDER", "TREE", "EDGE", "TO BURN", "BRAVE", "ARDOUR", "ARDUOUS", "ARENA", "PANCAKE", "EARRING", "BISHOP (CHESS PIECE)", "ARGON", "SLANG", "ARID", "ARIL", "TO PROVOKE", "HARNESS", "AROMA", "HARPY", "HARPOON", "GET MOVING!", "RICE", "BROILED", "EMBER", "TO WASH", "ASYLUM", "BRUTISH", "ASP", "TURKISH CURRENCY", "ASTER", "ARROW SHAFT", "CELESTIAL BODY", "BIASED", "SHORTCUT", "COFFIN", "ATTIC", "ATLAS", "ATOLE", "ATOM", "ATONIC", "BACK IN TIME", "ATROCIOUS", "BOLD", "AUDIO", "TO UNITE", "TO LIFT", "GOLD", "AUTHOR", "MISER", "AVARICIOUS", "OAT", "AVIAN", "ANXIOUS", "PLANE", "ANNOUNCEMENT", "ARMPIT", "CLOAK", "PUMPKIN", "HELP", "FASTING", "DOWN", "HOE", "SCOURGE", "TO LOOSEN", "COARSE", "LAD", "CHESTNUT COLOR", "STILT", "TRENCH", "TO SAP", "CHANNEL HOPPING", "CLAW PAW", "BRAMBLE", "ZIPPER", "ZOMBIE", "IDIOT", "VIXEN", "SLY FOX", "CLOG SHOE", "HONEYSUCKLE", "BASHING", "THONG", "LEFT-HANDED", "TO INCITE", "ADD A BIT EXTRA", "YARD", "IVY", "MARE", "HELMET", "BARREN", "SON-IN-LAW", "ERROR", "STIFF", "TINDER", "JIHAD", "YOGI", "YOGURT", "YUCAA PLANTATION", "CUFFLINK", "YURT", "PORT SIDE", "LUXURIOUS", "POTHOLE", "BACON", "CATFISH", "BAY", "DANCE", "TO DESCEND", "SHALLOWS", "BASSOON", "TO BLEAT", "SHELF", "BUCKET", "BALL", "BALSA", "SNEAKER", "BANAL", "TO BATHE", "FINANCIAL SYSTEM", "BANK", "BADGE",  "EDICT", "BANJO", "BEARD", "SMALL BOAT", "BOAT", "FENCE", "BARON", "BAR", "CLAY", "TO BASE", "ENOUGH", "ROUGH", "MILL", "TRAY", "TO BEAT OVERCOME", "BAZAAR", "PIOUS", "TO DRINK", "TO GRANT", "JANITOR", "BEIGE", "NATIVITY", "BEAUTIFUL", "DRUNK", "BERM", "WATERCRESS", "CABBAGE", "TO KISS", "BITUMEN", "VERMIN", "BARREL", "BILE", "BINGO", "PAGER", "STEAK", "CROSSEYED", "SYCAMORE", "INSIGNIFICANT", "BLOUSE", "GOITER", "BOASTFUL", "BERET", "CHAOS", "BOWLING", "PURSE", "PURSE", "BOMB", "RECKLESS", "BHUDDIST MONK", "BORAX", "GUNWALE", "RIM", "DAM", "MAROON COLOR", "TASSEL", "ROUGH WOOL", "TO BOUNCE", "PREY", "BUTTON", "BOXING", "MUZZLE", "WOMANS SLIP", "RUT MATING SEASON", "EMBER", "BOLD", "BREASTSTROKE", "ARM", "TO ABUSE", "DIFFICULT SITUATION", "FIG", "SHORT", "HEATH", "BRILE", "BREEZE", "JOKE", "BROMINE", "SPROUT", "WITCH", "WARLOCK", "HAZE", "BRUTE", "DIVE", "LOCK OF HAIR", "PUDDING", "GOOD", "TO SNORT", "JESTER", "CANDLE", "BULB", "BOWLINE", "RUCKUS", "LUGGAGE", "BUNGEE JUMPING", "SHIP", "BURKA", "PRANK", "SHE-ASS", "DONKEY", "SEARCH", "BUST", "MAILBOX", "UPRIGHT", "TO FIT", "CABLE", "FEMALE GOAT", "MALE GOAT", "CACAO", "PIECE", "SHOE", "CACTUS", "TO FAIL", "COWARD", "FALL", "FALLEN", "DRAWER", "LIMESTONE", "COPY", "BROTH", "CHALICE", "STREET", "CALLUS", "CALM", "CALM", "HEAT", "BALD PATCH", "BALD", "COUNTRYSIDE", "CHANNEL (TELEVISION)", "GROUP OF REEDS", "EXCHANGE", "CANOE", "CANON (LITERARY WORK)", "CANNON", "CHANT", "MAHOGANY (COLOR)", "ABLE", "CASTRATED", "PERSIMMON", "NARROW MINDED", "THISTLE", "TORTOISESHELL", "BURDEN", "CARGO", "APPEARANCE", "MEAT", "ID CARD", "CARP (FISH)", "CART", "DOCUMENT", "CARAWAY", "MATING PAIR", "TO MARRY", "CROWN", "DANDRUFF", "CASTE", "CHASTE", "TO LOOK AT", "COT", "RIVERBED", "CAUSE", "CAUTIOUS", "TO EXCAVATE", "TO HUNT", "TO BAIT", "ZEBRA", "LISP", "TO CEDE", "CEDAR", "TO BLIND", "TO FORFEIT", "TO CONCEAL", "CELL", "TO DINE", "TO ADJUST CLOTHING", "ZENITH", "ZENITH", "CENSUS", "FENCE", "BRISTLE", "DIRTY", "HILL", "TO CEAST", "CAESAR", "CESIUM", "BASKET", "SCEPTER", "FARM", "CHEAP", "SANDAL", "NO!", "CHALET", "KID", "SLUT", "BADGE", "TRESS", "PUG-NOSED", "FAIR-SKINNED", "CENT", "FAIR-SKINNED", "GIRL", "BOY", "COOL", "CHILI", "FEMALE SERVANT", "CURLY", "HUSH", "GOATEE", "AWESOME", "WITH UNCLOTHED ARMS", "MESTIZA", "MESTIZO", "RUDE PERSON", "COOL", "HUT", "PRETTY", "SOUP", "FAB", "CYCLE", "CITRON TREE", "BLIND PERSON", "SKY", "SILT", "AMOUNT", "TO CROP", "FIVE", "RIBBON", "BELT", "CIRCUS", "WAX CANDLE", "SCHISM", "SWAN", "TO CITE", "CIVIL", "EGG WHITE", "CLEAR", "CLASS", "CLUB (WEAPON)", "CLEF", "CLOVE", "CLERGY", "CLIMATE", "CHLORINE", "CLOWN", "COALA", "COATI", "COBRA", "COPPER", "TO BOIL", "CAR", "NURSE CAP", "SAFE", "TO HARVEST", "BRIBE", "INTERCOURSE", "CUSHION", "TO MAKE COFFEE", "HEIGHT", "COLON", "CHARACTER", "GRIDDLE", "PUNCH", "TO EAT", "COMIC", "BUDDY", "COMMON", "COGNAC", "COUNT (NOBILITY)", "COPAL", "TO TAKE", "CROWNS", "ABUNDANCE", "COUPLET", "COKE COAL", "CHORALE", "ROPE", "HORN (INSTRUMENT)", "RING", "CORSET", "COURT", "SHORT LENGTH OF TIME", "TO SEW", "EXPENSE", "COST", "COSTO", "HIP BONE", "EXCELLENT SPORTSMAN", "CRASS", "TO CREATE", "CREED", "TO BELIEVE", "CREAM", "CREPE", "TO REAR", "SIEVE", "TO RIBBIT", "CHROMIUM", "CROSSROADS", "RARE", "CRUEL", "CURD", "QUASI", "TWIN", "LAIR", "ANIMAL SKIN", "CAVE", "RICH SNOB", "RICH SNOB", "WORRY", "FAULT", "CULT", "INSTALLMENT", "COUPON", "PAROCHIAL", "TO BLEACH", "DRUNENNESS", "HANDSOME", "CURRY", "CORNY", "COURSE", "CURVE", "CURVED", "WHOSE", "FEASIBLE", "DAHLIA", "TO DAMAGE", "DANDY", "DANCE", "DART", "TO DATE", "DATE FRUIT", "DUTY", "WEAK", "DEBUT", "TO CALL", "THIMBLE", "TO GROW", "CONTRACTION OD DE ELLA", "CONTRACTION OF DE ELLO", "RIVER DELTA", "BESIDES", "THICK", "SINCE", "DESIRE", "DEBT", "ARCHERY TARGET", "BLISS", "PROVERB", "DIET", "DIGNIFIED", "DIODE", "DAM", "DISCO", "DOUBLE", "DOCILE", "ERUDITE", "DOGMA", "TO PLANE", "DOLLAR", "TO GRIEVE", "PAIN", "TO TAME", "TO DONATE", "WHERE", "WHERE", "TO DOPE", "TO BROWN", "BACKSTROKE", "DOSE", "TO ENDOW", "DRAGON TREE", "DRAMA", "DRUG", "SHOWER", "SILLED", "TO DOUBT", "DUEL", "MISTRESS", "MASTER", "SWEET", "DUKE", "TO LAST", "EBONY", "DRUNK", "TO POUR", "EDEMA", "AEGIS", "COMMON LAND", "GREEN BEAN", "ELITE", "ELITE", "THEY", "THEY", "EAR OF CORN", "DWARF", "DWARF", "ENEMA", "ANGER", "BETWEEN", "BACK", "SHIPMENT", "EPIC", "EPIC", "EPOCH", "HEDGEHOG", "TO MISS", "ERROR", "SMOG", "SNOB", "SPY", "SPIN", "SKI", "TO HAVE", "THOSE", "THOSE", "SUMMER", "THESE", "ESTRUS", "ETHANE", "STAGE OF JOURNEY", "ETHIC", "ETHICAL", "ETHNIC GROUP", "POPULAR", "EXODUS", "EXTRA", "EXTRAORDINARY", "CLOTHING (POOR CONDITION)", "EASY", "DIRTY TRICK", "TO WRAP", "SKIRT", "FLAW", "FAILURE", "FALSE", "FAULT", "LACKING", "MUD", "LANTERN", "CAROUSAL", "FARCE", "FATAL", "FATWA", "VAIN", "FAUNA", "FAVOR", "DATE (TIME)", "HAPPY", "FELT", "FEMUR", "PHOENIX", "FAIR (CELEBRATION)", "FIERCE", "FERRY", "FETAL", "GREAT", "CREDET", "FIBER", "TO STAY", "CHIP", "NOODLE", "WILD ANIMAL", "TO FASTEN", "TO BE ONTO", "FILM", "LODE", "FINAL", "FARM", "TO END", "BUSINESS", "FIRM", "SKINNY WOMAN", "THIN MAN", "PHLEGM", "FREIGHT", "FLIRTING", "LAZY", "FLEET", "AFLOAT", "TO FLOW", "FLUX", "FLUORINE", "PHOBIA", "FIREPLACE", "FOLIO", "BACK", "JIB", "LOCAL GOVERNMENT", "FORGE", "SHAPE", "LINING", "FOSSIL", "PHOTON", "SENTENCE", "BRAKE", "FREON", "STRAWBERRY", "FREAKY", "FRIED", "BRICKWORKS", "FRUIT", "VEGETABLE", "FIRE", "OUTSIDE", "TO HISS", "TO ESCAPE", "FLEETING", "TO SMOKE", "WRAPPING", "COUNTRY ESTATE", "TO GET IN A MESS", "FURY", "GUN", "RIFLE", "WHIP", "INSIGNIFICANT", "OVERCOAT", "BENT", "TO JINX", "EYEGLASSES", "BAGPIPES", "GALLANT", "GREYHOUND", "ROOSTER", "BRAID", "LEG", "GAMMA", "TO WIN", "BARGAIN", "TO CAW", "GANDER", "GRACE", "CLAW", "HERON", "COST", "TO GROAN", "GENIUS", "PEOPLEE", "GEODE", "GESTURE", "TO TURN", "GLYPH", "GLOBE", "GNOME", "WAFFLE", "DISHONEST", "HIT", "BREASTS", "FAT WOMAN", "FAT", "BASEBALL CAP", "CAP", "TO ENJOY", "STEP OF STAIRCASE", "DEGREE", "GRAPH", "GRASS", "GRAM", "GRAIN", "CLAMP", "GREASE", "GRATEFUL", "GRAVEL", "GRAVE", "TURNIP GREENS", "TANGLED HAIR", "GRAIL", "GRIFFIN", "FLU", "FLU", "SCREAM", "LUMP", "GUILE", "GROTTO", "FOOLISH", "HANDSOME", "DULLNESS", "PADDING", "GRATER", "GHETTO", "GOOGOL", "TO ADVISE", "PEBBLE", "WINK", "SCENARIO", "SCRIPT", "TYPE OF PLANT", "MANNER", "STEW", "MONEY", "ENTHUSIASM", "HABAR", "BEAN PATCH", "THERE WAS", "DEFT", "SPEAKING", "MAKE", "AXE", "TOWARDS", "HAIKU", "TO HAUL", "UNDERWORLD (CRIME)", "HAPPY", "HAREM", "SATED", "UNTIL", "FIBER", "COMPLETED", "TO STINK", "STENCH", "TO FREEZE", "HELIUM", "HAYFIELD", "TO KNEAD", "TO WOUND", "HERO", "HERTZ", "RUBBER TREE", "HIATUS", "HYDRA", "ICE", "HYENA", "TO SPIN", "HYMM", "TO HICCUP", "HOBBY", "HEARTH", "FRILL", "SLING", "DEEP", "BOWLER HAT", "HONOR", "GALLOWS", "HORDE", "FORM", "FURNACE", "CATTLE", "SULLEN", "HOTEL", "HOUSE", "TO ROOT", "RURAL PERSON", "PIGGY BANK", "HOLLOW", "BONE", "SPAWN", "EGG", "ACT OF FLEEING", "CRIPPLED", "BITUMINOUS COAL", "HUMOR", "FERRET", "THEFT", "HUSSAR", "IBEX", "ICON", "IDEAL", "TO DEVISE", "IDOL", "IDOSE", "IGNEOUS", "EQUAL", "ILEUM", "UNHARMED", "HELOT", "ODD", "INANE", "SOCCER FAN", "GROIN", "INUIT", "ISTHMUS", "YTTRIUM", "SPECIES OF YUCCA", "SOAP", "JACAL", "A GASP", "CRAB", "SWEET FROM COCONUTS", "TO PUTT TOGETHER", "JELLY", "APPLAUSE", "LANDMARK", "EVER", "HAM", "CHECK", "JUG", "STEIN", "CAGE", "JEANS", "GNAT", "SHEIK", "GERBIL", "SHERRY", "STRAW MAT", "CUTTLEFISH", "RASH", "SHRED", "TO ANNOY", "EXPRESS SURPRISE", "YOUTHFUL", "SMALL JEWEL", "DOUBLET", "BEAN", "GAME", "FEMALE JUDGE", "TO PLAY", "CHINESE BOAT", "COUNCIL", "JOINED", "TO CURSE", "JOUST", "EXACTLY", "KARMA", "FERMENTED MILK", "KOALA", "LIP", "LABOR", "WORKING", "SHAME", "WOMANIZER", "LANGUID", "PORK SHOULDER", "DEFECT", "WOOF", "TO LICK", "SANDY PLAIN", "LANCE", "PENCIL", "LAPSE", "LONG", "STONE CHIP", "LATEX", "TO THROB", "BRASS", "TO WASH", "TO EASE", "TO LASSO", "MILT", "MILK", "BED", "LEGAL", "TO HAND DOWN", "LEAGUE", "WELL READ", "LYE", "FAR", "LEMUR", "LENS", "SLOW", "LIONESS", "LEPROSY", "AWL", "LETHAL", "LETTER", "TO SWIG", "FREE", "BOOK", "HIGH SCHOOL", "LIQUEUR", "LEADER", "TO FLIRT", "LIGHT", "LION TIGER CROSS", "TO SAND", "TO FILE (RASP)", "LIMBO", "DOORSTEP", "LEMON", "FLAX", "LYNX", "PRETTY", "COMMAND", "LYMPH", "IRIS", "LIST", "ALERT", "TO SACRIFICE TO GODS", "LITHIUM", "LITER", "MALICE", "SORE", "LLAMA", "TOWEL", "EVEN FLAT", "KEY", "FULL", "LOCAL", "LOCUS", "PLACE", "LODGE", "SICCESS", "FIGHT", "BRIGHT", "TO SHINE", "LUCRE", "LATER", "PLACE", "LUNAR", "EDIBLE MOLLUSK", "BRAVE", "MACE SPICE", "MOTHER", "MASTER", "MAFIA", "MAGIC", "GREAT", "WITHOUT FAT", "TO CRUSH", "MESH (CLOTH)", "A KIND OF GAME", "MALT", "MAUVE", "TO SUCK", "MAMBA", "MAMBO", "SUCKING", "MAMMOTH", "GUSH FORTH", "OARLESS", "VOW", "COMMMAND", "SLEEVE", "MANGO", "COOKED PLANTAINS", "MANIA", "MEEK", "BLANKET", "LAYER SURFACE", "MARK", "TIDE", "VERTIGO", "MARTEN", "TO KNEAD", "TO KILL", "GEEKY", "MATHS", "NUANCE", "THUG", "BIGGER", "TO MILK", "WICK", "HALF AN HOUR", "HALF", "TO MEASURE", "PERSON WHO MADE PACT WITH DEVIL", "BETTER", "DENT", "MELON", "SMALLER", "MINUS", "FOOLISH", "MINT (PLANT)", "MIND", "TAVERN", "METAL", "TO INSERT", "METRO", "MINIBUS", "FEAAR", "CORNFIELD", "TO PAMPER", "TO MINE", "MYOPIC", "TO LOOK AT", "BLACKBIRD", "NOSY", "MYRRH", "MISSILE", "MISSILE", "SAME", "HALF", "MEETING", "MITRE", "COMPOUND", "HORNLESS", "MODAL", "MODEM", "TO TAUNT", "TO TOAST", "LANDMARK", "MOLAR", "MOLD CAST", "TO GRIND", "FLESH OF FRUIT", "MUMMY", "WORLD", "IDIOT", "NUN", "MONK", "MOUNTAIN", "AMOUNT", "MORAL", "MORBID", "DISEASE", "TO DIE", "HILL", "WALRUS", "FLY", "MOSQUITO", "FRUIT JUICE", "MOTEL", "MUTINY", "ENGINE", "TO MOVE", "CELL PHONE", "A LOT OF", "TO CHANGE CLOTHES", "GRIMACE", "MOLAR", "MUFFLE", "WOMAN", "TO MOO", "FILTH", "WOMAN", "MULLET", "FINE (FEE)", "WORLD", "TO ARRANGE", "STUMP OF A LIMB", "MURAL", "TO SURROUND WITH A WALL", "MUSEUM", "MOSS", "THIGH", "TO MUTATE", "MUTUAL", "TURNIPS", "TURNIPS", "NACRE", "TO BE BORN", "CHRISTMAS DAY", "TO SWIM", "NO ONE", "GASOLINE", "SKIRT", "DECK OF CARDS", "BUTTOCK", "RHEA", "SICKLY", "DRUG DEALER", "NOSE", "NASAL", "HOME", "NATIVE", "NAVAL", "LARGE SHIOP", "STUPID", "TO DENY", "BAD LUCK", "BLACK", "SICKLY", "NERD", "GONE", "TO SNOW", "NICHE", "GRANDDAUGHTER", "GRANDSON", "SNOW", "CHILDHOOD", "NYMPH", "LEVEL", "SNOWY", "NOBLE", "NIGHT", "WALNUT TREE", "ONLY JUST", "FERRIS WHEEL", "RULE", "NORTH", "TO NOTE", "NOVEL", "GIRLFRIEND", "BOYFRIEND", "DAUGHTER-IN-LAW", "NEWS", "NEW", "MUSE", "NEVER", "FAT WOMAN", "FAT MAN", "BISCUIT", "TO PRODUCE", "OBVIOUS", "SUNSET", "SPECIES OF PINE", "TO HATE", "WEST", "OHM", "AUDIBLE", "HEARER", "HOPEFULLY", "TO OGLE", "EYE HOLE", "DIMINUTIVE OF OJO", "WARHEAD", "FLIP-FLOP", "SQUAT", "OLIVE FRUIT", "OLIVE TREE", "CORNCOB", "CARELESS", "OPAL", "OPERA", "FERTILE", "TO OPT", "HURRY", "CRAZY PERSON", "ORDER", "TO AIR", "ORGY", "URINE", "TO TRIM", "TO ADORN", "ARUGULA", "DARING", "LITTLE BEAR", "OYSTER", "OYSTER", "TO SURVEY", "KNOLL", "AUTUMN", "OTHERS", "OVAL", "SHEEP", "OVUM", "OXIDE", "OZONE", "TO NIBBLE", "POLICE", "PACT", "FATHER", "TO PAY", "HAYSTACK", "BENCH", "PALM", "AVACADO FRUIT", "AVACACO TREE", "PAMPA", "HONEYCOMB", "DIAPER", "PANDA", "CROOKED", "PANEL", "PANTYHOSE", "PAUNCH", "PAPER", "TO LIFT", "BROWN IN COLOR", "WALL", "STOP", "GRAPEVINE", "SECTION", "CHILDBIRTH", "TO PASS", "PROMENADE", "PASTA", "TYPE OF PIE", "GRASS", "BOOR", "ROLLER SKATE", "PATIO", "PAUSE", "GUIDELINE", "PEACOCK", "FRIGHT", "TOLL", "PEPPER", "TO SIN", "CHEST", "SHIPWRECK", "PEDAL", "TO ASK FOR SOMETHING", "TO GLUE", "COMB", "TO CUT HAIR", "STRUGGLE", "BIT", "SHORT HAIR", "PENAL", "TO PUNISH", "LOUSY", "YARDARM", "PEAR TREE", "BASS", "PEARL", "BOLT", "DOG", "DOG", "REGRET", "DUMBBELL", "FISHING", "PLAGUE", "TO PLEASE", "SWEETHEART", "HAWK", "CHIRPING", "PIANO", "HERD", "WRAPPED IN BANANA LEAVES", "ATTRACTIVE WOMAN", "TO BITE", "SPRUCE", "PICKLED", "PART", "MISTAKE", "PILLAR", "IMPUDENT", "A GIFT", "PINE NUT", "SMALL SPOT", "CLEVER", "CLAW", "LOUSE", "AGREEABLE", "SATED", "GRUDGE MATCH", "TO GO AWAY", "TO STEP", "A BIT", "TURKEY", "CLUE", "TO WHISTLE", "PYTHON", "CENTER", "A PINCH", "PIZZA", "BADGE", "PLAGUE", "FLAT", "SILVER", "PLATE", "MOVIE SET", "BEACH", "PLAZA", "TIME LIMIT", "COMMON PEOPLE", "BROAD", "GREY", "FEATHER", "POOR", "SICK", "TO PRUNE", "AUTHORIZATION", "PODIUM", "POEM", "POET", "POKER", "POLAR", "PULLY", "POLLEN", "TO POLISH", "YOUNG HEN", "CHICKEN", "POWDER", "OSTENTATION", "BLUNT", "TO PLAY", "ORANGUTAN", "PLEASE", "PORN", "CLUB STICK", "STUPID", "CARRIAGE", "TO POSE", "TRUTHA", "POST OF WOOD", "MARE", "COLT", "MEADOW", "CAPTURE", "IMPRISONED", "COUSIN", "FIRST", "RUSH", "PROSE", "FILM STAR", "SYMPATHY", "PUDDING", "PUDDING", "MODESTY", "BOXER", "TO PUSH", "FLEA", "TO POLISH", "A GIBE", "OCTOPUS", "PULSE", "DISPUTE", "TO FIGHT", "TO PUNISH", "END", "POINT", "PUZZLE", "QUARK", "CURFEW", "QUIET", "COMPLAINT", "BURNING", "BURNOUT", "PAN FLUTE", "CHEESE", "WHO", "WHO", "SIDESTEP", "PERHAPS", "RAGE", "BOBTAILED", "GUST OF WIND", "RADAR", "RADIO", "RADON", "TO SPLIT", "SORT", "GRATER", "BRANCH OF AN ORGANIZATION", "HACKBERRY", "RAMP", "RANK", "TO CROP", "RAPACIOUS", "RAPPELLLING", "RAPPELLING", "ADDUCTION", "VULGAR", "CHARACTERISTIC", "MOUSE", "TO SCRATCH", "REASON", "LASSO", "LOUD", "STRAIGHT", "HONEST", "SHEEPFOLD", "TO IRRIGATE", "ROYAL", "TO RULE", "RULER", "HOSTAGE", "QUEEN", "KINGDOM", "CLOCK", "TO  PADDLE", "TO FIGHT", "RENT", "REAM (PAPER)", "SUBTRACTION", "REMAINDER", "TO DEFY", "RHEUMATISM", "REVERSE SIDE", "TO PRAY", "FLOOD", "IRRIGATION", "TO RAFFLE OFF", "RIFLE", "RIGOUR", "TORTILLA", "TO RHYME", "MASCARA", "KIDNEY", "RHYTHM", "RIVAL", "TO CURL", "TO ROB", "OAK", "ROBOT", "NAG HORSE", "DEW", "TO FILM", "RODEO", "TO BEG", "NONSENSE", "RHOMBUS", "SNARL", "ROUND", "ROOK", "ROSE SHRUB", "DOUGHNUT", "TO SPIN", "TO GRAZE", "BLOND", "BLOND", "WHEEL", "HEM", "TO BELLOW", "NOISE", "RUINS", "TO GO ROUND", "RUMBA", "HEADING", "RUMOR", "RURAL", "TO KNOW", "LEARNED PERSON", "WISE", "SABER", "FLAVOR", "TO SERVE", "SATED", "SACRED", "ARROW", "ASTUTE", "TO SLICE OPEN", "SAXON", "TO SALT", "SALACIOUS", "BALANCE", "TO APPEAR", "PSALM", "LOUNGE", "SALSA", "SALTY", "LEAP", "HEALTH", "SAFE", "TO HEAL", "HOLY", "EXPULSION", "MILDEW", "WILLOW", "ELDER TREE", "SAP", "SACKCLOTH", "SEASONING", "TO DRY", "CULT", "STRING", "TO SEDATE", "TO HARVEST", "ACCORDING TO", "POSTAGE STAMP", "FOREST", "SEMEN", "LANDMARK", "FOOTPATH", "SENILE", "GENTLEMAN", "SERIES", "TRUE", "SLANTING", "SPANISH DISTRICT", "SIXTH", "UNDERGROUND HOLLOW", "CIDER", "SEVEN", "SIPHON", "INITIAL", "CENTURY", "SIGN", "WHISTLE", "CHAIR", "SIMILAR", "SIMIAN", "HACKNEY CAB", "NOT PAYING FOR", "TO FILCH", "HISS", "EARTHQUAKE", "PLACE", "TO HIT", "TRASH", "ABOUT", "MEMBER", "SODIUM", "SHOGUN", "SOLAR", "ACCUSTOMED TO", "TO SOUND", "TO DREAM", "PROBE", "TO MAKE SOUP", "SIGH", "DROWSINESS", "SIP", "VOICELESS", "ALL SENSES", "SMOOTH", "TO CLIMB", "FILTHY", "TO SWEAT", "SWEAT", "SOLE", "SOUND", "DREAM", "SERUM", "SUITE", "TO ADD", "TO SUBMERGE", "SUPERB", "CALM", "SUSHI", "FRIGHT", "SUBTLE", "YOURS", "YOURS"] 
    },
    {
    cat: "6-Letter Words",
    sel: false,
    parent: "",
    numOfItems: 0,
    items: ["ABUELO", "ACCESO", "ACTIVO", "ADORNO", "AGENTE", "ALGUNO", "ALPACA", "ARROYO", "AUNQUE", "AZALEA", "BARRIO", "BISTRE", "BLANCO"],
    def: ["GRANDMOTHER", "ACCESO", "ACTIVO", "ADORNO", "AGENTE", "ALGUNO", "ALPACA", "ARROYO", "AUNQUE", "AZALEA", "BARRIO", "BISTRE", "BLANCO"]
    },
    {
      cat: "7-Letter Words",
      sel: false,
      parent: "",
      numOfItems: 0,
      items: ["ABACERO", "ABARRAR", "ABASTAR", "ABIERTO", "ABOGADA", "ABOGADO", "ABRASAR", "ABRUPTO", "ACEBIBE", "ACEPTAR", "ACIERTO", "ACLAMAR", "ACORDAR", "ACUARIO", "ACUERDO", "ADENTRO", "ADOPTAR", "ADOSADA"],
      def: ["GROCER", "TO THROW", "TO SUPPLY", "OPEN", "LAWYER", "LAWYER", "TO BURN", "ABRUPT", "RAISIN", "TO ACCEPT", "SUCCESS", "TO ACCLAIM", "TO AGREE", "AQUARIUM", "AGREEMENT", "INSIDE", "TO ADOPT", "TOWNHOUSE"]
      },
    {
      cat: "8-Letter Words",
      sel: false,
      parent: "",
      numOfItems: 0,
      items: ["ABALORIO", "ABATATAR", "ABEJORRO", "ABERTURA", "ABNEGADO", "ABOLENGO", "ABOMINAR", "ABORIGEN", "ABRASIVO", "ABREVIAR", "ABSOLUTO", "ABSOLVER", "ABSORBER", "ABSTEMIO", "ABSTRUSO", "ABUNDOSO", "ACADEMIA", "ACAMPADA", "ACEITOSO", "ACERTIJO", "ACICALAR", "ACOGEDOR", "ACOSADOR", "ACUMULAR", "ADELANTE", "ADELANTE", "ADIVINAR", "ADJETIVO"],
      def: ["GLASS BEADS", "TO EMBARRASS", "BUMBLEBEE", "OPENING", "UNSELFISH", "ANCESTRY", "TO ABHOR", "ABORIGINAL", "ABBRASIVE", "TO ABBREVIATE", "ABSOLUTE", "TO ACQUIT", "TO USE UP", "TEETOTALLER", "ABSTRUSE", "ABUNDANT", "ACADEMY", "CAMPING", "OILY", "RIDDLE", "TO POLISH", "COZY", "BULLY", "TO ACCUMULATE", "FORWARD", "COME IN!", "TO FORTELL", "ADJECTIVE"]
      },      
    {
    cat: "test",
    sel: false,
    parent: "",
    numOfItems: 0,
    items: ["ADIÓS", "ÍÍÍÁÁÁÁÁ"],
    def: ["GOODBYE", "?????", "?"]
    } ]

const backgroundImagesPortrait=[
  "https://www.fulltimetravel.co/wp-content/uploads/2018/12/Madrid-@josudelagandara.jpg",
  "http://getwallpapers.com/wallpaper/full/6/b/7/1088049-barcelona-city-wallpapers-1080x1920-for-mobile-hd.jpg",
  "https://i.pinimg.com/originals/fd/d2/86/fdd28654dbbd4e881e16ef21149b9441.jpg",
  "https://i.pinimg.com/originals/7e/ed/c3/7eedc3c4e9356966772c2cc7d44fefd9.jpg",
  "https://img.wallpapersafari.com/tablet/768/1024/78/88/3zGPmY.jpg",
  "https://windows10spotlight.com/wp-content/uploads/2020/03/c6151fb1318fcec04f048e024389bc53.jpg"
]

const backgroundImagesLandscape=[
  "https://cdn.wallpapersafari.com/36/18/n60bJD.jpg",
  "https://images8.alphacoders.com/354/354497.jpg",
  "https://wallpaperaccess.com/full/1353170.png",
  "https://wallpaperaccess.com/full/1667456.jpg",
  "https://wallpapercave.com/wp/wp1989929.jpg",
  "https://wallpapercave.com/wp/LCu6uYY.jpg"
]



const audios=[ {name: "default",
                link: "./auds/bgmusic.mp3",
                vol: .105
              },
              {name: "Dream",
              link: "./auds/dream.mp3",
              vol: .25
            },
            {name: "Ambition",
            link: "./auds/mixkitdrivingambition.mp3",
            vol: .25
          }
             ]

let helpText = `PALABRLE is a Spanish version of Wordle with an option of choosing the length of your words. Select the Categories icon (2nd from right) and choose words from 5 to 12 letters long. If you choose multiple word lengths, each game will randomly choose between the lengths you have chosen. 
<br>
\u00A0\u00A0\u00A0I have not been able to find a free dictionary api to validate the guessed words, so any combination of letters will be accepted. Of course, your can limit yourself by entering only valid words. If Spanish is not your native tongue or as more letters are included and it gets more difficult to think up words, you can use the following lists to find valid words. -
<br>
\u00A0\u00A0\u00A0 <a href="https://howismyspanish.com/5-letter-spanish-words/" target="_blank">5-Letter Words</a>
<br>
\u00A0\u00A0\u00A0 <a href="https://www.wordnik.com/lists/6-letter-spanish-words/" target="_blank">6-Letter Words</a>
<br>
\u00A0\u00A0\u00A0 <a href="https://howismyspanish.com/7-letter-spanish-words/" target="_blank">7-Letter Words</a>
<br>
\u00A0\u00A0\u00A0 <a href="https://howismyspanish.com/8-letter-spanish-words/" target="_blank">8-Letter Words</a>
<br>
\u00A0\u00A0\u00A0 <a href="https://howismyspanish.com/9-letter-spanish-words//" target="_blank">9-Letter Words</a>
<br>
\u00A0\u00A0\u00A0 <a href="https://howismyspanish.com/10-letter-spanish-words/" target="_blank">10-Letter Words</a>
<br>
\u00A0\u00A0\u00A0 <a href="https://howismyspanish.com/11-letter-spanish-words//" target="_blank">11-Letter Words</a>
<br>
\u00A0\u00A0\u00A0 <a href="https://howismyspanish.com/12-letter-spanish-words/" target="_blank">12-Letter Words</a>
<br>
<br>
\u00A0\u00A0\u00A0You can customize the game to some degree by selecting the second icon from the left. In the "Choose Background" section, select a varying background by clicking on the top image with 6 smaller images inside. Each time you start a new game, the background will be one of those pics, selected at random. Or, choose one of the 6 larger images to set that as your background. A third option is to grab a direct link to any image on the web and to paste that link into the field provided.   
<br>
- You can change the background audio 
<br>
- Chameleon Mode varies the colors of the tiles that indicate inclusion and correct placement of the letters.
<br>
- You can also toggle whether you want the words you enter to be valid words. As mentioned above, since no dictionary is available this option would check what you enter against the words defined within this site. This option makes sense only if a large amount of words are in the category chosen. There are currently ${protoWordsArray[0].items.length} 5-letter words and ${protoWordsArray[1].items.length} 6-letter words defined.
<br>    
<br>
<br>
`

let viewHelpText = `Thanks for playing PALABRLE. Please view the Help "?" icon for useful tips and hints `

let sound = true;
let soundPlayer = "";
let randomAudioIdx = Math.floor(Math.random()*audios.length)
soundPlayer = new Audio (audios[randomAudioIdx].link);
let audioName = audios[randomAudioIdx].name;
soundPlayer.loop = true;
soundPlayer.volume = audios[randomAudioIdx].vol
soundPlayer.currentTime = 1;
const maxLettersNarrowScreen = 21;
let chameleon = false;
let validate = false;
DANCE_ANIMATION_DURATION = 1500;
MAX_HISTORY_ITEMS = 500;

let wordFound = true;
let fullScreen = false;
let wordsArray=[]
let keyboardClicks = false;

let playButtonEl = ""
const containerEl = document.getElementById('container')

// in local storage
let currentWordIndex = 0;
let guessedWordCount = 0;
let guessedWords = [[]]
let availableSpace = 1; 
// end local storage


let numofLetters = 5
let numofGuesses = 6
let wordle = ""
let definition = ""
let gameInProgress = false;
let atLeastOneGuessMade = false;
let gameActive = true;
let freeSpaces = false;

let randomArray = 0;
let randomWordle = 0;
let revealLetterNum = 0;
const messageContainerEl = document.getElementById('message-container')

/*let categoryPreferences = [
  true, false, false, false, false, false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false, false, false, false
];*/

let categoryPreferences = [
];

let resultsArray = []
let resultObj = {
  date: 0,
  wordle: "",
  guesses: 0
}

document.addEventListener("DOMContentLoaded", () => {
    initPreferencesModal();
    initCategories();
    initHelpModal();
    initViewHelpModal();
    initStatsModal();
    initCategoriesModal();
    initCategoriesModalBtn();
   
    initLook();
    


  // THIS WORKS IN CASE I WANT TO RANDOMIZE TILE COLORS 
  /*
    let r = document.querySelector(':root');
    let colorNum = Math.floor(Math.random()*120);
    let randomColor = "";
    randomColor =  "hsl(" + colorNum + ", 51%, 47%)"
    r.style.setProperty('--incorrectLetter', randomColor);
    
    colorNum = colorNum + 120;
    randomColor =  "hsl(" + colorNum + ", 51%, 47%)"
    r.style.setProperty('--correctLetter', randomColor);
    colorNum = colorNum + 120;

    randomColor =  "hsl(" + colorNum + ", 51%, 47%)"
    r.style.setProperty('--correctLetterInPlace', randomColor);*/
   
    playButtonEl = document.getElementById("start")
    randCatEl = document.getElementById("randcat")
   

    playButtonEl.addEventListener("click", ({ target }) => {
       letsPlay()
     })

     randCatEl.addEventListener("click", ({ target }) => {
       console.log("clicked on category display");
       if (gameInProgress){
        if (wordsArray){
        messageContainerEl.innerText = "Current category is " + wordsArray[randomArray].cat;
        }
      }
     })
    });




function letsPlay() {
  messageContainerEl.innerText = ""
  // Clear the classes of the keyboard that were set in any previous Wordle
   initClasses();

   playMusic();

// INIT
// 230223wordsArray=[]

currentWordIndex = 0;
guessedWordCount = 0;
revealLetterNum = 0;
guessedWords = [[]]
availableSpace = 1; 
numofLetters = 5
numofGuesses = 6
wordle = ""
gameInProgress = true;





  setColors();


// END OF INIT
  
//


  messageContainerEl.innerText = ""
  wordsArray = []
  for (i=0; i<protoWordsArray.length; i++){
    if (protoWordsArray[i].sel){
      if (protoWordsArray[i].parent != "parent"){
       wordsArray.push(protoWordsArray[i])
      }
    }
  }
  console.log("Checking wordsArray which is equal to " + wordsArray)
  if (wordsArray.length === 0){
    messageContainerEl.innerText = "Please select at least 1 category";
    return;
  }

  playButtonEl.style.display = "none";
  messageContainerEl.innerText = ""

  // LOOP THRU RANDOMLY SELECTED CATEGORIES UNTIL WE FIND ONE THAT HAS AN ACCEPTABLE ITEM
  let foundCategory = false;
  do {
    randomArray = Math.floor(Math.random()*wordsArray.length);
    if(wordsArray[randomArray].numOfItems > 0){
      foundCategory = true;
    }
  } while (!foundCategory)


  const randomArrayWork = window.localStorage.getItem("randomArrayEsp") || 0;
  if (randomArrayWork){
    randomArray = randomArrayWork;
  }

  
  
  randomWordle = Math.floor(Math.random()*(wordsArray[randomArray].items).length);
  // Loop thru words in the randomly chosen array of categories until a word that is not greater than maxCharacters is found or
  // 3500 times thru  
  /*
  let searchingForWord = true;
  let count = 0;
  do {
    randomWordle = Math.floor(Math.random()*(wordsArray[randomArray].items).length);
    console.log ("*within searchingForWord do loop - randomWordle = " + randomWordle )
    console.log ("*length of word is  = " + (wordsArray[randomArray].items[randomWordle]).length)
    count++;
 //   if ((wordsArray[randomArray].items[randomWordle]).length < Number(maxCharacters + 1)){
      if ((wordsArray[randomArray].items[randomWordle]).length < Number(maxCharacters) + 1 ){
      searchingForWord = false;
      console.log("1 set search to false")
    } else {
      if (count > 3500){
        console.log ("count > 3500")
        wordsArray[randomArray].items[randomWordle] = wordsArray[randomArray].items[randomWordle].slice(0, maxCharacters);
      console.log("2 set search to false")

        searchingForWord = false;
      }
    }
  }
  while (searchingForWord);*/
  
  console.log("randomArray = " + randomArray) 
  console.log("wordsArray category = " + wordsArray[randomArray].cat)
  console.log("randomWordle = " + randomWordle) 


  guessedWords = [[]]
  availableSpace = 1; 


 // calcLettersandGuesses();


  loadLocalStorage();

  //createSquares();

  


  

  function initClasses(){
  /*  let keys = document.getElementsByClassName('correct-letter-in-place');
    if (keys){
    keys.forEach(key => {
      key.classList.remove("correct-letter-in-place")  
    });
    }
*/
    const allElements = document.querySelectorAll('*');
    
allElements.forEach((element) => {
  element.classList.remove('correct-letter-in-place');
  element.classList.remove('correct-letter');
  element.classList.remove('incorrect-letter');
});



  }
 
 // createSquares();

//  loadLocalStorage();
  // Check to see if keyboard click event listener has already been set via the first game of the session  
  if (!keyboardClicks){
    console.log("about to call addKeyboard")
    addKeyboardClicks();
    document.addEventListener('keydown', function(event) {
      console.log ("key pressed was " + event.key)
      handleKeystroke(event.key)
      });
  }

  /* pinned off on 4/25
  guessedWords = [[]]
  availableSpace = 1; 
  */

  const keys = document.querySelectorAll('.keyboard-row button')


  function getCurrentWordArr() {
    console.log("entered getcurrentwordarr")
    const numberOfGuessedWords = guessedWords.length;
    console.log("guessed words = " + numberOfGuessedWords)

    return guessedWords[numberOfGuessedWords - 1]
  }

  function updateGuessedLetters(letter){
    console.log("guessedwordsA = " + guessedWords)
    console.log("updateGuessedLetter letter = " + letter)
    console.log("availableSpace = " + availableSpace)
    const currentWordArr = getCurrentWordArr()
    console.log('current array = ' + currentWordArr)
    console.log("numofLetters = " + numofLetters )
    if (currentWordArr && currentWordArr.length < numofLetters){
      currentWordArr.push(letter)
      const availableSpaceEl = document.getElementById(availableSpace)
      availableSpace++;
      console.log("availableSpace = " + availableSpace)
      availableSpaceEl.textContent = letter;
    }
  }

  function getIndicesOfLetter(letter, arr){
    const indices = [];
    let idx = arr.indexOf(letter);
    while (idx != -1){
      indices.push(idx);
      idx = arr.indexOf(letter, idx+1);
    }
    return indices;
  } // END OF getIndicesOfLetter

  function getTileClass(letter, index, currentWordArr) {
    const isCorrectLetter = wordle
      .toUpperCase()
      .includes(letter.toUpperCase());
      if (!isCorrectLetter){
        return "incorrect-letter";
      }

      const letterInThatPosition = wordle.charAt(index);
      const isCorrectPosition = letter.toLowerCase() === letterInThatPosition.toLowerCase();
      if (isCorrectPosition){
        return "correct-letter-in-place";
      }

  
       const isGuessedMoreThanOnce =
       currentWordArr.filter((l) => l === letter).length > 1;

       if (!isGuessedMoreThanOnce) {
        return "correct-letter";
      }

      const existsMoreThanOnce = wordle.split("").filter((l) => l === letter).length > 1;

    // is guessed more than once and exists more than once
    if (existsMoreThanOnce) {
      return "correct-letter";
    }

    const hasBeenGuessedAlready = currentWordArr.indexOf(letter) < index;

    const indices = getIndicesOfLetter(letter, wordle.split(""));
    const otherIndices = indices.filter((i) => i !== index);
    const isGuessedCorrectlyLater = otherIndices.some(
      (i) => i > index && currentWordArr[i] === letter
    );

    if (!hasBeenGuessedAlready && !isGuessedCorrectlyLater) {
      return "correct-letter";
    }

    return "incorrect-letter";


} // END OF getTileClass


  function handleSubmitWord(){
    console.log("entered handlesubmitword ")
    const currentWordArr = getCurrentWordArr();
    const guessedWord = currentWordArr.join("");
    let word = guessedWord;
    if (guessedWord.length !== numofLetters){
      messageContainerEl.innerText = (`You entered ${currentWordArr.length} letters which is less than the ${numofLetters} needed`);
      return;
    }
  
    if (validate){
      for (i=0; i<wordsArray[randomArray].items.length; i++){
        console.log(wordsArray[randomArray].items[i])
      }
    

      if (!wordsArray[randomArray].items.includes(guessedWord.toUpperCase())){
        messageContainerEl.innerText = (`${guessedWord.toUpperCase()} was not found in dictionary`);
        return;
      }
    }


    


/*  logic to place in handleword
const DICTIONARY_API_BASE_URL =
'https://api.dictionaryapi.dev/api/v2/entries/en/';
  fetch(DICTIONARY_API_BASE_URL + word)
  .then(response => {
      return response.json();
  })
  .then(word => {
      var singleWordDefinition = word[0].meanings[0].definitions[0].definition;
      console.log("SINGLE: " + singleWordDefinition);
      const currentWordArr = getCurrentWordArr();
    
     // const guessedWord = currentWordArr.join("");
        // XXXXXXXXXXXXXXXXXXXXXX*/

        window.navigator.vibrate(450);
        //flipTile();
        gameActive = true;
        atLeastOneGuessMade = true;
        let checkWordle = wordle;
        const guess = [];
        console.log("point 2 in  handleRest")
        currentWordArr.forEach(tile => {
          console.log("pushing letter onto guess array - letter = " + tile)
        //  guess.push({letter: tile, color: 'dontknow'});
          guess.push({letter: tile, color: 'incorrect-letter'});
        } )
    
        console.log("");
        console.log("");
        console.log("About to loop thru to look for Greys")
        guess.forEach(guess => {
          if (!checkWordle.includes(guess.letter.toUpperCase())){
            guess.color = 'incorrect-letter'
            console.log ("set grey overlay")
            }
        })
    
    
    
    
    
        console.log("About to loop thru to look for Greens")
        guess.forEach((guess, index) => {
          console.log("guess letter = " + guess.letter + "   wordle letter = " + wordle[index])
          if (guess.letter == wordle[index].toLowerCase()){
            guess.color = 'correct-letter-in-place'
       //     console.log("guess letter2 = " + guess.letter + "   wordle letter = " + wordle[index])
            console.log ("set green overlay")
            checkWordle = checkWordle.replace(guess.letter.toUpperCase(), '')
            console.log ("guess array = " + guess + " checkWordle = " + checkWordle)
            console.log (" ")
          }
        })
    
        console.log("COLORS AFTER GREEN LOGIC")
        guess.forEach(guess => {
          console.log("guess letter = " + guess.letter);
          console.log("guess color = " + guess.color);
        })
    
    
        console.log(" ");
        console.log(" ");
        console.log("About to loop thru to look for Yellows")
        guess.forEach(guess => {
          console.log("guess letter = " + guess.letter);
          if (checkWordle.includes(guess.letter.toUpperCase())){
            console.log ("guess.color before setting to yellow = " + guess.color)
            if (guess.color === "correct-letter-in-place"){
    
            } else {
            guess.color = 'correct-letter'
            console.log ("set yellow overlay")
            checkWordle = checkWordle.replace(guess.letter.toUpperCase(), '')
            console.log ("guess array = " + guess + " checkWordle = " + checkWordle)
            console.log (" ")
          }
          }
        })
    
    
    
    
    
      
        let result = guessedWord.toUpperCase();
    
        const firstLetterId = guessedWordCount * numofLetters + 1;
        let interval = 2500 / numofLetters;
    
        localStorage.setItem("availableSpaceEsp", availableSpace);
    
    
    
    
    
    
    
    
        currentWordArr.forEach((tile, index) => {
        
          setTimeout(() => {
        //    tile.classList.add("animate__flipInX")
        //    tile.classList.add(guess[index].color)
            const letterId = firstLetterId + index;
            const letterEl = document.getElementById(letterId);
         //   if (letter === " "){
         //     letter = "space"
         //   }
         //  let keyboardLetter = letter.toLowerCase();
         //  const keyboardLetterEl = document.querySelector("[data-key=" + keyboardLetter + "]");
     
    
         //   console.log("keyboard letter = " + keyboardLetterEl)
            letterEl.classList.add(guess[index].color)
            letterEl.classList.add("animate__flipInX")
        //    addColorToKey(guess[index].letter, guess[index].color)
            if (tile === " "){
              tile = "space"
            }
    
        const keyboardEl = document.querySelector(`[data-key=${tile}]`);
        console.log ("keyboardEl = " + keyboardEl + " tile = " + tile);
        keyboardEl.classList.add(guess[index].color);
    
            if (index === (numofLetters-1)){
              if (gameActive){
                preserveGameState();
              }
            }
    
          }, interval * index)
      
        })
    
        guessedWordCount += 1;
        window.localStorage.setItem('guessedWordCountEsp', guessedWordCount);
    
        let date = new  Date();
    //    resultObj.date = date.toString()
        resultObj.date = new Date();
        console.log("New date = " + resultObj.date)
        console.log("New date is of type " + typeof(resultObj.date))
        resultObj.wordle = wordle;
        console.log("guessed word = " + guessedWord + "  wordle = " + wordle)
        let guessedWordUpper = guessedWord.toUpperCase();
        if (guessedWordUpper === wordle){
          messageContainerEl.innerText = "Congratulations! " + wordle + " means " + definition
          gameActive = false;
          const audio = new Audio ("./auds/success.mp3");
          audio.play()
          danceTiles(currentWordArr, firstLetterId);
          resultObj.guesses = guessedWordCount;
          let resultsArrayTemp = JSON.parse(window.localStorage.getItem('resultsEsp'));
          if (resultsArrayTemp){
              resultsArray = JSON.parse(window.localStorage.getItem('resultsEsp'));
              console.log("New date right before push = " + resultObj.date)
              resultsArray.push(resultObj);
              console.log("Array after push = " + resultsArray);
              console.log ("item date just added = " + resultsArray[resultsArray.length-1].date);
              window.localStorage.setItem('resultsEsp', JSON.stringify(resultsArray));
          } else {
            resultsArray[0] = resultObj;
            window.localStorage.setItem('resultsEsp', JSON.stringify(resultsArray));
          }
    
          setTimeout(function(){
            playButtonEl.innerText = "Play Again?";
            playButtonEl.style.display = "block";
           // messageContainerEl.innerText = ""
        }, 4500);
          const totalWins = window.localStorage.getItem("totalWinsEsp") || 0;
          window.localStorage.setItem("totalWinsEsp", Number(totalWins) + 1);
    
          const currentStreak = window.localStorage.getItem("currentStreakEsp") || 0;
          const maxStreak = window.localStorage.getItem("maxStreakEsp") || 0;
          let text = "currenStreak = " + currentStreak + " maxStreak = " + maxStreak
       //   window.alert(text)
          window.localStorage.setItem("currentStreakEsp", Number(currentStreak) + 1);
          if ((Number(currentStreak)+1) > Number(maxStreak)){
       //     window.alert("updating max")
            window.localStorage.setItem("maxStreakEsp", Number(currentStreak) + 1);
          }
          updateTotalGames();
          resetGameState();
        //  removeKeyboardListeners();
         return;
        } // END OF CORRECT WORD LOGIC
    
        if (guessedWords.length ===  numofGuesses && guessedWord !== wordle) {
          resultObj.guesses = 10;
          let resultsArrayTemp = JSON.parse(window.localStorage.getItem('resultsEsp'));
          if (resultsArrayTemp){
              resultsArray = JSON.parse(window.localStorage.getItem('resultsEsp'));
              resultsArray.push(resultObj);
              window.localStorage.setItem('resultsEsp', JSON.stringify(resultsArray));
          } else {
            resultsArray[0] = resultObj;
            window.localStorage.setItem('resultsEsp', JSON.stringify(resultsArray));
          }
    
          messageContainerEl.innerText = (`Sorry, no more guesses. The palabrle is ${wordle} which means ${definition}`)
          gameActive = false;
          window.localStorage.setItem("currentStreakEsp", 0);
          const audio = new Audio ("./auds/negative.mp3");
          audio.play()
          updateTotalGames();     setTimeout(function(){
         //   messageContainerEl.innerText = ""
            playButtonEl.innerText = "Play Again?";
            playButtonEl.style.display = "block";
        }, 4500);
    
        resetGameState();
    
    
        //  removeKeyboardListeners();
          return;
        } 
    
        const audio = new Audio ("./auds/ascending.mp3");
        audio.play()
        guess.forEach(guess => {
          console.log("letter = " + guess.letter + " color = " + guess.color)
        }
        )
    
    
    
        console.log("guessedwords2 = " + guessedWords)
        guessedWords.push([]);
        console.log("guessedwords3 = " + guessedWords)
        console.log("Guessedwords length = " + guessedWords.length)
    


/*
      const wordDefinitionArr = word[0].meanings;
      wordDefinitionArr.forEach(wordDefinition => {
          console.log("FROM ARRAY: " + wordDefinition.definitions[0].definition);
      });*/

      /*
  }).catch(() => {
   // window.alert("word not recognized")
    messageContainerEl.innerText = (`You entered ${word} which could not be found`);
  })*/




















  } // END OF handleSubmitWord   XXXXXXXXXXXXXXXXXXXXXXXX

  function updateTotalGames(){
    const totalGames = window.localStorage.getItem("totalGamesEsp") || 0;
    window.localStorage.setItem("totalGamesEsp", Number(totalGames) + 1);
    gameInProgress = false;
    atLeastOneGuessMade = false;
  }




  function handleDelete(){
    const currentWordArr = getCurrentWordArr()
    console.log(currentWordArr)
    if (currentWordArr.length === 0){
      console.log("blank array")
      return;
    }
    currentWordArr.pop();

    guessedWords[guessedWords.length - 1] = currentWordArr

    const lastLetterEl = document.getElementById(availableSpace - 1)

    lastLetterEl.innerHTML = ""   
    availableSpace--; 

  } // END OF handleDelete


  function removeKeyboardListeners(){
    console.log("entered remove listeners")
    const keys = document.querySelectorAll(".keyboard-row button");
    for (let i = 0; i < keys.length; i++) {
      console.log("keyboard count = " + i)
      keys[i].removeEventListener("click")
    }
   }

  function addKeyboardClicks(){    
      keyboardClicks = true;
      const keys = document.querySelectorAll(".keyboard-row button");
      for (let i = 0; i < keys.length; i++) {
        keys[i].addEventListener("click", ({ target }) => {
          if (!gameInProgress){
            return;
          }
      
          messageContainerEl.innerText = ""

          let key = target.getAttribute("data-key");
          target.blur() 
  
 
          if (key === "enter") {
            const audio = new Audio ("./auds/hard-keypress.wav");
            audio.play()
            handleSubmitWord();
            return;
          }
  
          if (key === "del") {
            const audio = new Audio ("./auds/hard-keypress.wav");
            audio.play()
            handleDelete();
            return;
          }

          if (key === "space") {
            const audio = new Audio ("./auds/keypress2.wav");
            audio.play()
            key = " "
          }
          const audio = new Audio ("./auds/keypress2.wav");
          audio.play()
          updateGuessedLetters(key);
        });
      }  // END OF FOR KEYBOARD LOOP

      const titleEl = document.querySelector(".title")
      titleEl.addEventListener("click", ({ target }) => {
      if (!atLeastOneGuessMade){
         console.log("site thinks no guesses have been made")
         return;
        }
        populateRow();
      });
    


        // holdSpaceDel();
        initMisc();




    } // END OF Ians addKeyboardClicks 

function populateRow(){
  console.log("add code to place any green tiles from above onto the current row")
  const allSquaresEl = document.querySelectorAll(".square")
  const currentWordArr = getCurrentWordArr()
  guessedWords[guessedWords.length - 1] = [];
  availableSpace = guessedWordCount * numofLetters + 1;
  console.log ("available spacei in  pop row is " + availableSpace)


  for (i=0; i<numofLetters; i++){
 //   for (i=0; i<4; i++){
    // check for equal modulus values that would indicate the same column, if find correct letter in correct space class output it
    // get id then check class
   // element.classList.contains(class);
 //   updateGuessedLetters('x');
    // loop thru checking all columns except for the last
    let foundGreen = false;
    for (j=0; j<numofGuesses; j++){
    //  let idNum = Number(allSquaresEl[(i*j)-1].id)
      let idNum = (i)+(j*numofLetters)
      console.log ("id num in populateRow function = " + idNum)
      if (allSquaresEl[idNum].classList.contains("correct-letter-in-place")){
        console.log("correct letter in place - that letter is " + allSquaresEl[idNum].innerText )
       /* if (j%numofLetters === i){*/
           foundGreen = (allSquaresEl[idNum].innerText.toLowerCase())
           console.log("FOUNDGREEN SET TO " + foundGreen )
      /*  }*/
      } 
      } // end of for j
    if (foundGreen){
      updateGuessedLetters(foundGreen)
    } else {
      updateGuessedLetters(' ')
    }
  }
} //END OF POPULATE ROW


function initMisc(){

}




    function holdSpaceDel(){
          // The item (or items) to press and hold on
    let itemSpace = document.querySelector(".space-button");
    let itemDel = document.querySelector(".del-button");

    let timerID;
    let counter = 0;

    let spaceHoldEvent = new CustomEvent("spaceHold");
    let delHoldEvent = new CustomEvent("delHold");  

    // Increase or decreae value to adjust how long
    // one should keep pressing down before the pressHold
    // event fires
    let pressHoldDuration = 50;

    // Listening for the mouse and touch events    
    itemSpace.addEventListener("mousedown", pressingDown, false);
    itemSpace.addEventListener("mouseup", notPressingDown, false);
    itemSpace.addEventListener("mouseleave", notPressingDown, false);

    itemSpace.addEventListener("touchstart", pressingDown, false);
    itemSpace.addEventListener("touchend", notPressingDown, false);
    // Listening for our custom pressHold event
    itemSpace.addEventListener("spaceHold", spaces, false);

        // Listening for the mouse and touch events on Delete    
        itemDel.addEventListener("mousedown", pressingDown2, false);
        itemDel.addEventListener("mouseup", notPressingDown2, false);
        itemDel.addEventListener("mouseleave", notPressingDown2, false);
    
        itemDel.addEventListener("touchstart", pressingDown2, false);
        itemDel.addEventListener("touchend", notPressingDown2, false);
        // Listening for our custom pressHold event
    //    itemDel.addEventListener("delHold", deletes, false);

    function pressingDown(e) {
      // Start the timer
      requestAnimationFrame(timer);
      console.log ("e key = " + e.key)
      e.preventDefault();

      console.log("Pressing!");
    }

    function notPressingDown(e) {
      // Stop the timer
      cancelAnimationFrame(timerID);
      counter = 0;

      console.log("Not pressing!");
    }

    //
    // Runs at 60fps when you are pressing down
    //
    function timer() {
      console.log("Timer tick!");

      if (counter < pressHoldDuration) {
        timerID = requestAnimationFrame(timer);
        counter++;
      } else {
        console.log("Press threshold reached!");
        itemSpace.dispatchEvent(spaceHoldEvent);
      }
    }




    function pressingDown2(e) {
      // Start the timer
      requestAnimationFrame(timer2);
      e.preventDefault();

      console.log("Pressing del!");
    }

    function notPressingDown2(e) {
      // Stop the timer
      cancelAnimationFrame(timerID);
      counter = 0;

      console.log("Not pressing del!");
    }

    //
    // Runs at 60fps when you are pressing down
    //
    function timer2() {
      console.log("Timer2 tick!");

      if (counter < pressHoldDuration) {
        timerID = requestAnimationFrame(timer2);
        counter++;
      } else {
        console.log("Del Press threshold reached!");
        itemDel.dispatchEvent(delHoldEvent);
      }
    }

    function spaces(e) {
 //     console.log("pressHold event fired on spaces!");
   //   for (i=1; i<maxCharacters; i++){
   //     updateGuessedLetters('x');
   //   }
   //   console.log("done with loop of spaces");
      // submit all the spaces
      // handleSubmitWord();
     }



    }





/*   MAY WANT TO ADD SOME OF THIS INTO ABOVE FUNCTION

      var audio = new Audio("./keypress.wav");
      audio.play();
      //let containerEl = document.getElementById('container')
      //containerEl.requestFullscreen();
      if (letter === "enter" ){
        handleSubmitWord();
        return;
      }

      if (letter === "del" ){
        console.log("available space = " + availableSpace)
        handleDeleteLetter();
        return;
      }

      if (letter === 'space'){
        letter = ' ';
      }
      console.log('clicked letter = ' + letter )
      updateGuessedWords(letter);
    }  // END OF addKeyboardClicks 
*/


  function handleKeystroke(letter){
    if (!gameInProgress){
      return;
    }

    console.log ("key in handleKeystroke function - "  + letter)
    messageContainerEl.innerText = "";
    let containerEl = document.getElementById('container')
  //  containerEl.requestFullscreen();

  if (letter === "Enter" || letter === "Delete"){
    console.log ("key in handleKeystroke function2 - "  + letter)
  } else {
      let alpha = "abcdefghijklmnñopqurstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ ";
      let result = alpha.includes(letter);
      if (!result){
        return;
      }
    }
    if (letter === "Enter" ){
      console.log ("about to submitword")
      handleSubmitWord();
      return;
    }

    if (letter === "Delete" ){
      console.log("available space = " + availableSpace)
      handleDelete();
      return;
    }


    console.log("dont want to reach here")
    letter = letter.toLowerCase();
    updateGuessedLetters(letter);

  }

}

// THIS LOGIC IS TAKEN FROM ANIA KUBOWS WORDLE CLONE - ITS COLOR LOGIC WORKS CORRECTLY 
const flipTile = () => {
  // pick up at 
  const rowTiles = document.querySelector('#guessRow-' + currentRow).childNodes;

  let checkWordle = wordle;
  const guess = [];

  rowTiles.forEach(tile => {
    guess.push({letter: tile.getAttribute('data'), color: 'grey-overlay'})
  })

  guess.forEach((guess, index) => {
    if (guess.letter == wordle[index]){
      guess.color = 'green-overlay'
      checkWordle = checkWordle.replace(guess.letter, '')
    }
  })

  guess.forEach(guess => {
    if (checkWordle.includes(guess.letter)){
      guess.color = 'yellow-overlay'
      checkWordle = checkWordle.replace(guess.letter, '')
    }
  })

  rowTiles.forEach((tile, index) => {
    
    setTimeout(() => {
      tile.classList.add('flip')
      tile.classList.add(guess[index].color)
      addColorToKey(guess[index].letter, guess[index].color)
    }, 500 * index)

  })
}


function initHelpModal() {
  const modal = document.getElementById("help-modal");
 // modal.textContent = "Explanation of this version of WORDLE"
  // Get the button that opens the modal
  const btn = document.getElementById("help");

  // Get the <span> element that closes the modal
  const span = document.getElementById("close-help");


  // When the user clicks on the button, open the modal
  btn.addEventListener("click", function () {
    console.log("just clicked on help button")
    modal.style.display = "block";
    helpEl = document.querySelector(".modal-body")
    helpEl.innerHTML = helpText
    const audio = new Audio ("./auds/stats.mp3");
    audio.play()
    window.localStorage.setItem('viewedhelpEsp', "viewed");
 //   helpEl.requestFullscreen();
  });

  // When the user clicks on <span> (x), close the modal
  span.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
}



function initViewHelpModal() {
  const modal = document.getElementById("view-help-modal");

  // Get the <span> element that closes the modal
  const span = document.getElementById("close-view-help");


  // Open the modal if the user has not read the help
    if (!window.localStorage.getItem("viewedhelpEsp")){
      modal.style.display = "block";
      console.log("initViewHelpModal")
      viewHelpEl = document.getElementById("view-help")
      viewHelpEl.innerHTML = viewHelpText
    } else {
      return;
    }
  //  const audio = new Audio ("./auds/stats.mp3");
  //  audio.play()


  // When the user clicks on <span> (x), close the modal
  span.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
}

function updateStatsModal(){
  const currentStreak = window.localStorage.getItem("currentStreakEsp");
  const maxStreak = window.localStorage.getItem("maxStreakEsp");
  const totalWins = window.localStorage.getItem("totalWinsEsp");
  const totalGames = window.localStorage.getItem("totalGamesEsp");
  const audio = new Audio ("./auds/stats.mp3");
  audio.play()

  document.getElementById('total-played').textContent = totalGames;
  document.getElementById('total-wins').textContent = totalWins;
  document.getElementById('current-streak').textContent = currentStreak;
  document.getElementById('max-streak').textContent = maxStreak;

  const winPct = Math.round((totalWins / totalGames) * 100) || 0
  document.getElementById('win-pct').textContent = winPct;

}

function initStatsModal() {
  const modal = document.getElementById("stats-modal");
  // Get the button that opens the stats modal
  const btn = document.getElementById("stats");

  // Get the <span> element that closes the modal
  const span = document.getElementById("close-stats");
  const delEl = document.getElementById("delete-stats");
  const delBodyEl = document.getElementById("delete-body");
  const delModal = document.getElementById("delete-modal");
  const closeDel = document.getElementById("close-delete");
  const yesEl = document.getElementById("yes");
  const noEl = document.getElementById("no");

  // Get the element that shows results
  const resultsEl = document.querySelector(".results")
  const resultsButton = document.getElementById("stats-info");


  // When the user clicks on the button, open the modal
  btn.addEventListener("click", function () {
    console.log("just clicked on stats button classlist = " + btn.classList)
    updateStatsModal();
    modal.style.display = "block";
    helpEl = document.getElementById("stats-modal")
 //   helpEl.requestFullscreen();
  });

  // When the user clicks on <span> (x), close the modal
  span.addEventListener("click", function () {
    modal.style.display = "none";
    resultsEl.style.display = "none";
  });


    // When the user clicks on delete stats <span> (x), display confirmation box
    delEl.addEventListener("click", function () {
      delModal.style.display = "block";
    });


      // When the user clicks on <span> (x), close the delete modal
    closeDel.addEventListener("click", function () {
      delModal.style.display = "none";
    });

      // When the user clicks on Yes, clear history via localstorage clear the results tray and close delete modal
      yesEl.addEventListener("click", function () {
        localStorage.removeItem("resultsEsp")
        localStorage.removeItem("currentStreakEsp")
        localStorage.removeItem("maxStreakEsp")
        localStorage.removeItem("totalWinsEsp")
        localStorage.removeItem("totalGamesEsp")
        const resultsTrayEl = document.getElementById("results-tray");
        resultsTrayEl.innerHTML = ""
        delModal.style.display = "none";
        resultsArray = [];
      });

      // When the user clicks on No, close delete modal
      noEl.addEventListener("click", function () {
        delModal.style.display = "none";
      });
      

  

    // When the user clicks on stats info (i) show results
    resultsButton.addEventListener("click", function () {
      console.log("just clicked on results button")
      resultsEl.style.display = "block";
      buildResults();
    });

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      resultsEl.style.display = "none";
    }
  });
}

function buildResults(){
  console.log("entered build results")
  const resultsTrayEl = document.getElementById("results-tray")


/* 
// TEMP CODE TO FIND 4 WORD MOVIE THAT STARTS WITH 'TH'
for (i=0; i<protoWordsArray[4].numOfItems; i++){
  const myArray = protoWordsArray[4].items[i].split(" ");
  if (myArray.length != 4){
    
  } else {

  if (myArray[0].substring(0,2) === "TH"){

  let resultItemEl = document.createElement('div')
  resultsTrayEl.appendChild(resultItemEl)
  resultItemEl.innerText = protoWordsArray[4].items[i]
  }
}
return;
*/

  // LOOP THRU RESULTS IN REVERSE ORDER

  let resultItemEl = document.createElement('div')
//      resultItemEl.innerText = "here are where results will go"
//  resultsTrayEl.appendChild(resultItemEl)

  let resultsArrayTemp = JSON.parse(window.localStorage.getItem('resultsEsp'));
  if (resultsArrayTemp){
      if (resultsArrayTemp.length > MAX_HISTORY_ITEMS){
        let numToDelete = resultsArrayTemp.length - MAX_HISTORY_ITEMS;
        resultsArrayTemp.splice(0, numToDelete)
        window.localStorage.setItem('resultsEsp', JSON.stringify(resultsArrayTemp));
      }

      resultsArray = JSON.parse(window.localStorage.getItem('resultsEsp'));
      console.log("resultsArray =  " + resultsArray);
      console.log("results array date = " + resultsArray[resultsArray.length-1].date)
      date = new Date(resultsArray[resultsArray.length-1].date);
      const year = date.getFullYear();
      const hours = date.getHours();
      console.log("after getfullyear function year = " + year + " hours = " + hours)
      resultsTrayEl.innerHTML = ""
      let resultItemEl = document.createElement('div')
      resultItemEl.innerText = "Date"
      resultItemEl.style.fontWeight = "bold"
      resultsTrayEl.appendChild(resultItemEl)
      resultItemEl = document.createElement('div')
      resultItemEl.innerText = "Wordle"
      resultItemEl.style.fontWeight = "bold"
      resultsTrayEl.appendChild(resultItemEl)
      resultItemEl = document.createElement('div')
      resultItemEl.innerText = "#"
      resultItemEl.style.fontWeight = "bold"
      resultsTrayEl.appendChild(resultItemEl)

      for (i=resultsArray.length - 1; i>-1; i--){
        let resultItemEl = document.createElement('div')
        let date = new Date(resultsArray[i].date);
        let year = date.getFullYear();
        let yy = year.toString().slice(2);
        let month = date.getMonth() + 1;
        let day = date.getDate();
        resultItemEl.innerText = month + "/" + day + "/" + yy
        if (resultsArray[i].guesses === 10){
          resultItemEl.style.color = "red";  
        }
        let screenWidth = window.innerWidth;
        resultsTrayEl.appendChild(resultItemEl)
        resultItemEl = document.createElement('div')
        resultItemEl.innerText = resultsArray[i].wordle
        if (resultsArray[i].wordle.length > maxLettersNarrowScreen){
          if (screenWidth < 400){
             resultItemEl.innerText = resultsArray[i].wordle.slice(0, maxLettersNarrowScreen - 1) + ".."
          }
        }
        if (resultsArray[i].guesses === 10){
          resultItemEl.style.color = "red";  
        }
        resultsTrayEl.appendChild(resultItemEl)
        resultItemEl = document.createElement('div')
        resultItemEl.innerText = resultsArray[i].guesses
        if (resultsArray[i].guesses === 10){
          resultItemEl.innerText = "-"  
          resultItemEl.style.color = "red";
        }
        resultsTrayEl.appendChild(resultItemEl)
      }
      // write out buffer for padding
      resultItemEl = document.createElement('div')
      resultItemEl.innerText = "a"
      resultItemEl.style.color = "transparent"
      resultsTrayEl.appendChild(resultItemEl)
      resultItemEl = document.createElement('div')
      resultItemEl.innerText = "a"
      resultItemEl.style.color = "transparent"
      resultsTrayEl.appendChild(resultItemEl)
      resultItemEl = document.createElement('div')
      resultItemEl.innerText = "a"
      resultItemEl.style.color = "transparent"
      resultsTrayEl.appendChild(resultItemEl)

  }

}

function updateCategoriesModal(){

let categories = document.querySelectorAll(".category")
for (i=0; i<categories.length; i++){
  if (protoWordsArray[i].sel){
    categories[i].style.color = "black";
    categories[i].style.fontWeight = "bold";

  } else {
     categories[i].style.color = "grey";
     categories[i].style.fontWeight = "normal";

  }
  if (protoWordsArray[i].parent==="parent"){
    categories[i].style.color = "green";
    categories[i].style.fontWeight = "normal";
    calcTotalParentItems(protoWordsArray[i].cat, i)
  }
 }
}

function calcTotalParentItems(parentCat, i){
  console.log("total all of the children of " + parentCat)
  let childClass = (".child" + parentCat)
  const childEls = document.querySelectorAll(childClass)
  console.log("lenght of children = " + childEls.length)
  let total = 0; 
  for (j=0; j<childEls.length; j++){
    if(protoWordsArray[i+j+1].sel){
  //    total = total + protoWordsArray[i+j+1].items.length;
      total = total + protoWordsArray[i+j+1].numOfItems;
      console.log("total = " + total)
    }
  }
  const category = document.querySelector("."+parentCat)
  category.innerText = `${protoWordsArray[i].cat} ${total}...`;
  if(total>0){
    category.innerText = `${protoWordsArray[i].cat} ${total}...`;
    category.style.fontWeight = "bold";
  } else {
    category.innerText = `${protoWordsArray[i].cat}...`;
    category.style.fontWeight = "normal";
  }
}

function initCategoriesModal() {
  // Look for category preferences in localstorage
  // if found apply those values to the protoarray
  console.log("add category local storage get logic")
  let categoryPreferencesTemp = JSON.parse(window.localStorage.getItem('categoryPreferencesEsp'));

  if (categoryPreferencesTemp) {
    categoryPreferences = JSON.parse(window.localStorage.getItem('categoryPreferencesEsp'))
    console.log("prefernces = " + categoryPreferences)
    for (i=0; i<protoWordsArray.length; i++){
      protoWordsArray[i].sel = categoryPreferences[i]
      if (protoWordsArray[i].parent === "parent"){
        protoWordsArray[i].sel = false; 
      }
    }
    
}
  const modal = document.getElementById("categories-modal");
  // Get the button that opens the categories modal
  const btn = document.getElementById("categories");

  // Get the <span> element that closes the modal
  const span = document.getElementById("close-categories");


  let categoriesContainerEl = document.getElementById("categories-body")
  categoriesContainerEl.innerHTML = ""

  for (i=0; i<protoWordsArray.length; i++){
    let category = document.createElement("div");
  //  category.innerText = `${protoWordsArray[i].cat} ${protoWordsArray[i].items.length}`;
    category.innerText = `${protoWordsArray[i].cat} ${protoWordsArray[i].numOfItems}`;
    if (protoWordsArray[i].parent === "parent"){
      category.innerText = protoWordsArray[i].cat + "...";
    }

    category.classList.add("category")
    // Add class of parent or child
    if (protoWordsArray[i].parent === "parent"){
      category.classList.add("parent")
      category.classList.add(protoWordsArray[i].cat)
      console.log("parent")
    }
    if (protoWordsArray[i].parent === "Music"){
      category.classList.add("child")
      category.classList.add("child")
      category.classList.add("childMusic")
      console.log("child")
    }
    if (protoWordsArray[i].parent === "Sports"){
      category.classList.add("child")
      category.classList.add("childSports")
      console.log("child")
    }    
    category.id = i;
    categoriesContainerEl.appendChild(category);
    category.addEventListener("click", ({ target }) => {
       // window.alert(category.innerText + category.id)
        protoWordsArray[category.id].sel = !(protoWordsArray[category.id].sel)
        if (protoWordsArray[category.id].sel){
          const audio = new Audio ("./auds/shortgood.mp3");
          audio.play()
        } 
        else {
          const audio = new Audio ("./auds/pop39222.mp3");
          audio.play()     
        }
        if (protoWordsArray[category.id].parent==="parent"){
          let children = document.querySelectorAll(".child"+protoWordsArray[category.id].cat)
          console.log("category = " + protoWordsArray[category.id].cat)
          if (protoWordsArray[category.id].sel){
            for (l=0; l<children.length; l++){
              children[l].style.display = "block"
            }
          } else {
            for (l=0; l<children.length; l++){
              children[l].style.display = "none"
            }
          } 
        }

        updateCategoriesModal()
      });
  }

  // When the user clicks on the button, open the modal
 /* console.log("right before categores button add event click listener")
  btn.addEventListener("click", function () {
    console.log("just clicked on categories button")
    updateCategoriesModal();
    const audio = new Audio ("./auds/stats.mp3");
    audio.play()
    modal.style.display = "block";
    helpEl = document.getElementById("categories-modal")
   });*/

  // When the user clicks on <span> (x), close the modal
  span.addEventListener("click", function () {
    modal.style.display = "none";
    preserveCategories();

  });

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
}

function initCategoriesModalBtn(){
    // When the user clicks on the button, open the modal
    const modal = document.getElementById("categories-modal");
    const btn = document.getElementById("categories");
    console.log("right before categores button add event click listener")
    btn.addEventListener("click", function () {
      console.log("just clicked on categories button")
      updateCategoriesModal();
      const audio = new Audio ("./auds/stats.mp3");
      audio.play()
      modal.style.display = "block";
      helpEl = document.getElementById("categories-modal")
     });
  
}

function preserveCategories(){
  console.log("add category local storage update logic in preserve function")
    for (i=0; i<protoWordsArray.length; i++){
      console.log(protoWordsArray[i].sel)
      console.log(categoryPreferences[i])
      categoryPreferences[i] = protoWordsArray[i].sel
    }
    window.localStorage.setItem('categoryPreferencesEsp', JSON.stringify(categoryPreferences));
}





function revealLetter(){
  console.log ("entered reveal letter function")
 // const currentWordArr = getCurrentWordArr()

  const numberOfGuessedWords = guessedWords.length;
  currentWordArr = guessedWords[numberOfGuessedWords - 1]
  let letter = wordle[revealLetterNum]
  console.log('current array = ' + currentWordArr)
  console.log("numofLetters = " + numofLetters )
    currentWordArr[revealLetterNum] = letter;
    //const availableSpaceEl = document.getElementById(revealLetterNum)
  //  availableSpaceEl.textContent = letter;
    const availableSpaceEl = document.getElementById(revealLetterNum+1)
    availableSpaceEl.textContent = letter;
    revealLetterNum++

}

function initLook(){
      // Select background image based on portrait or landscape mode but first check for default
      const body = document.getElementsByTagName('body')[0];
      let backgroundImage  = JSON.parse(window.localStorage.getItem('backgroundEsp'));
      console.log("background from localstorage = " + backgroundImage)
  //    window.localStorage.setItem('background', JSON.stringify(resultsArray));
      if (backgroundImage === "Random" || !backgroundImage){
        if (window.innerHeight > window.innerWidth){
          let randomImg = Math.floor(Math.random()*backgroundImagesPortrait.length)
  //        const body = document.getElementsByTagName('body')[0];
          body.style.backgroundImage = "url(" + backgroundImagesPortrait[randomImg] + ")";
        } else {  
          let randomImg = Math.floor(Math.random()*backgroundImagesLandscape.length)
    //      const body = document.getElementsByTagName('body')[0];
          body.style.backgroundImage = "url(" + backgroundImagesLandscape[randomImg] + ")";
      }
    } else {
      body.style.backgroundImage = "url(" + backgroundImage + ")";
    }


      initAudio()
    }



function initAudio(){
let icon = document.querySelector(".fa-volume-up");

icon.onclick = function (){
    music();
    console.log("classlist when clicked = " + icon.classList)
    if(icon.classList.contains("fa-volume-up")){
        icon.classList.replace("fa-volume-up", "fa-volume-off");
    }
    else{
        icon.classList.replace("fa-volume-off", "fa-volume-up");
    }
}
}


function music(){
  console.log("entered music toggle")
  sound = !sound;
  if (sound===false){
    if (soundPlayer){
      soundPlayer.pause();
    }
  }
  if (sound===true){
    if (soundPlayer){
      soundPlayer.play();
    }
  }
}


function playMusic(){
  if (sound){
  soundPlayer.play();
  }
}


function initPreferencesModal() {


  const modal = document.getElementById("preferences-modal");
  // Get the button that opens the preferences modal
  const btn = document.getElementById("preferences");
  const rndLandscapeEl = document.getElementById("random-bg-container");
  const rndPortraitEl = document.getElementById("portrait-random-bg-container");
 
  // Get the <span> element that closes the modal 
  const span = document.getElementById("close-preferences");


  const preferencesContainerEl = document.getElementById("preferences-body")
  const portraitPreferencesContainerEl = document.getElementById("portrait-preferences-body")

  const textAreaEl = document.querySelector("textarea");
 // preferencesContainerEl.style.display="none"
  portraitPreferencesContainerEl.style.display="none"


  let randomImagesEl = document.querySelectorAll('#random-bg-container img');
for (i=0; i<6; i++){
  randomImagesEl[i].src = backgroundImagesLandscape[i];
}


let oneImagesEl = document.querySelectorAll('#one-bg-container img');
for (i=0; i<6; i++){
  oneImagesEl[i].src = backgroundImagesLandscape[i];
}


  // When the user clicks on the button, open the modal
  btn.addEventListener("click", function () {
    console.log("just clicked on preferences button")
    const audio = new Audio ("./auds/stats.mp3");
    audio.play()
    modal.style.display = "block";
    helpEl = document.getElementById("preferences-modal")
  });

  // When the user clicks on <span> (x), close the modal
  span.addEventListener("click", function () {
    modal.style.display = "none";
    initCategories();
    initCategoriesModal();
  });

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });

 

  textAreaEl.addEventListener("selectionchange", function (event) {
        const body = document.getElementsByTagName('body')[0];
        body.style.backgroundImage = "url(" + textAreaEl.value + ")"
        window.localStorage.setItem('backgroundEsp', JSON.stringify(textAreaEl.value));
      }
    );


    // When the user clicks on the random landscpape - randomly change the background
    rndLandscapeEl.addEventListener("click", function (event) {
      console.log("add code to randomly change background")
      let randomImg = Math.floor(Math.random()*backgroundImagesLandscape.length)
      const body = document.getElementsByTagName('body')[0];
      body.style.backgroundImage = "url(" + backgroundImagesLandscape[randomImg] + ")"
      window.localStorage.setItem('backgroundEsp', JSON.stringify("Random"));
    });

        // When the user clicks on the random portrait - randomly change the background
        rndPortraitEl.addEventListener("click", function (event) {
          console.log("add code to randomly change background")
          let randomImg = Math.floor(Math.random()*backgroundImagesLandscape.length)
          const body = document.getElementsByTagName('body')[0];
          body.style.backgroundImage = "url(" + backgroundImagesLandscape[randomImg] + ")"
          window.localStorage.setItem('backgroundEsp', JSON.stringify("Random"));
        });
    


    const bgs = document.querySelectorAll(".maxi-img");
    for (let i = 0; i < bgs.length; i++) {
      bgs[i].addEventListener("click", ({ target }) => {

        let bg = target.getAttribute("src");
        console.log("bg = " + bg )
        const body = document.getElementsByTagName('body')[0];
        body.style.backgroundImage = "url(" + bg + ")"
        window.localStorage.setItem('backgroundEsp', JSON.stringify(bg));

      });
      }


      initBgAudios();
      initChameleon();
      initValidate();
 
    }




    
function initBgAudios() {

  const audioContainerEl = document.getElementById("audios-body")
  let bgAudio = document.createElement("div");
 // bgAudio.innerText = "Random"
//  bgAudio.style.color = "gray";
//  audioContainerEl.appendChild(bgAudio);
  for (i=0; i<audios.length; i++){
    let bgAudio = document.createElement("div");
    bgAudio.innerText = audios[i].name;
    
    bgAudio.id = i;
    bgAudio.style.color = "gray";
    bgAudio.classList.add("audio")
    audioContainerEl.appendChild(bgAudio);  


    bgAudio.addEventListener("click", ({ target }) => {
      const toggleAudios = document.querySelectorAll(".audio");
      for (i=0; i<audios.length; i++){
        toggleAudios[i].style.color = "gray"
        toggleAudios[i].style.fontWeight = "normal"
      }
      soundPlayer.setAttribute('src',audios[target.id].link); //change the source
      bgAudio.style.color = 'black';
      bgAudio.style.fontWeight = 'bold';
      let audioName = audios[target.id].name
      soundPlayer.volume = audios[target.id].vol
      playMusic()
          });
  }
}


function initChameleon() {

  const chameleonEl = document.getElementById("chameleon")
    console.log("entered initchameleon")

    chameleonEl.addEventListener("click", ({ target }) => {
      console.log("clicked initchameleon")
        chameleon = !chameleon;
        if (chameleon){
          chameleonEl.style.color = 'black';
          chameleonEl.style.fontWeight = 'bold';
          const audio = new Audio ("./auds/shortgood.mp3");
          audio.play()
        } else {
          chameleonEl.style.color = 'gray'; 
          chameleonEl.style.fontWeight = 'normal';
          const audio = new Audio ("./auds/pop39222.mp3");
          audio.play() 
        }
          });
  }


  function initValidate() {

    const validateEl = document.getElementById("validate")
  

    // Check validate value in localstorage
    validate = JSON.parse(window.localStorage.getItem('validateEsp'));
    


    if (validate){
        validateEl.style.color = 'black';
        validateEl.style.fontWeight = 'bold';
      } else {
        validateEl.style.color = 'gray'; 
        validateEl.style.fontWeight = 'normal';
      }
  
      validateEl.addEventListener("click", ({ target }) => {
        console.log("clicked validate")
          validate = !validate;
          if (validate) {
            window.localStorage.setItem("validateEsp", "true");
          } else {
            window.localStorage.setItem("validateEsp", "false");
          } 

          if (validate){
            validateEl.style.color = 'black';
            validateEl.style.fontWeight = 'bold';
            const audio = new Audio ("./auds/shortgood.mp3");
            audio.play()
          } else {
            validateEl.style.color = 'gray'; 
            validateEl.style.fontWeight = 'normal';
            const audio = new Audio ("./auds/pop39222.mp3");
            audio.play() 
          }
            });
    }
  


  // DANCE TILES FROM WEBDEV SIMPLIFIED
function danceTiles(tiles, firstLetterId){

  tiles.forEach((tile, index) => {
    setTimeout(() => {
    const letterId = firstLetterId + index;
    const letterEl = document.getElementById(letterId);
    letterEl.classList.add("dance")
    letterEl.addEventListener(
      "animationend",
      () => {
        letterEl.classList.remove("dance")
        console.log("removed dance class")
      },
      {once: true}
      )
    }, index * DANCE_ANIMATION_DURATION / tiles.length)
  })
}

function setColors(){
  
  let r = document.querySelector(':root');
  if (chameleon){
      let colorNum1 = Math.floor(Math.random()*280);
      let colorNum2 = Math.floor(Math.random()*299);
      // Make sure color hues are sufficiently different
      if (colorNum2 > colorNum1){
        if ((colorNum2-colorNum1) < 60){
          colorNum2 = colorNum2 + 60;
        }
      } else {
        if ((colorNum1-colorNum2) < 60){
          colorNum1 = colorNum1 + 60;
        }
      }
      let randomColor = "";
  
      randomColor =  "hsl(" + colorNum1 + ", 60%, 55%)"
      r.style.setProperty('--correctLetter', randomColor);
  
      randomColor =  "hsl(" + colorNum2 + ", 60%, 35%)"
      r.style.setProperty('--correctLetterInPlace', randomColor);
      r.style.setProperty('--freeSpace', randomColor);
    } else { // Set default Wordle colors 
      r.style.setProperty('--correctLetter', 'rgb(181, 159, 59)');
      r.style.setProperty('--correctLetterInPlace', 'rgb(83, 141, 78)');
      r.style.setProperty('--freeSpace', 'rgb(83, 141, 78)');
    }
}

function initCategories(){
  // LOOP THRU EACH CATEGORY
  for(i=0; i<protoWordsArray.length; i++){
    let workcount = 0;
    for(j=0; j<protoWordsArray[i].items.length; j++){
        workcount++;
    }
    protoWordsArray[i].numOfItems = workcount;
    console.log("items for array " + protoWordsArray[i].cat + " equals " + workcount)
  } 
}

function preserveGameState(){
  console.log("entered preserveGameState")
  window.localStorage.setItem('guessedWordsEsp', JSON.stringify(guessedWords));
  const keyboardContainer = document.getElementById('keyboard-container');
  window.localStorage.setItem("keyboardContainerEsp", keyboardContainer.innerHTML);
  const boardContainer = document.getElementById('board-container');
  window.localStorage.setItem("boardContainerEsp", boardContainer.innerHTML);
  const board = document.getElementById('board');
  window.localStorage.setItem("boardEsp", board.innerHTML);
  window.localStorage.setItem('randomArrayEsp', Number(randomArray));
  
}

function loadLocalStorage(){
  let kContainer = window.localStorage.getItem("keyboardContainerEsp");
  wordle =window.localStorage.getItem("wordleEsp");
  definition =window.localStorage.getItem("definitionEsp");
  if (kContainer){
    calcLettersandGuesses();
    messageContainerEl.innerText = "Last Palabrle game was interrupted - continue at point it was lost";
    atLeastOneGuessMade = true;
    setTimeout(function(){
  }, 4500);
  } else {
    wordle = wordsArray[randomArray].items[randomWordle];
    definition = wordsArray[randomArray].def[randomWordle];
    console.log("randomarray = "+ randomArray)
    console.log("about to call calcLettersandGuesses")

    window.localStorage.setItem("wordleEsp", wordle);
    window.localStorage.setItem("definitionEsp", definition);
    calcLettersandGuesses();
    createSquares();
  }

  guessedWordCount = Number(window.localStorage.getItem('guessedWordCountEsp')) || guessedWordCount
  availableSpace = Number(window.localStorage.getItem('availableSpaceEsp')) || availableSpace
  console.log("available space = " + availableSpace)
  guessedWords = JSON.parse(window.localStorage.getItem('guessedWordsEsp')) || guessedWords
  

  const storedBoardContainer = window.localStorage.getItem("boardContainerEsp");
  if (storedBoardContainer){
    document.getElementById("board-container").innerHTML = storedBoardContainer;
  }

  const storedBoard = window.localStorage.getItem("boardEsp");
  if (storedBoard){
    document.getElementById("board").innerHTML = storedBoard;
  }

  const storedKeyboardContainer = window.localStorage.getItem("keyboardContainerEsp");
  if (storedKeyboardContainer){
    document.getElementById("keyboard-container").innerHTML = storedKeyboardContainer;
  }


}

function resetGameState(){
  console.log("entered resetGameState")
  localStorage.removeItem('wordleEsp')
  localStorage.removeItem('definitionEsp')
  localStorage.removeItem('guessedWordCountEsp')
  localStorage.removeItem('keyboardContainerEsp')
  localStorage.removeItem('boardContainerEsp')
  localStorage.removeItem('boardEsp')
  localStorage.removeItem('availableSpaceEsp')
  localStorage.removeItem('guessedWordsEsp')
  localStorage.removeItem('randomArrayEsp')
}

function calcLettersandGuesses(){

  numofLetters = wordle.length;
  if(window.innerWidth < 900){
    if (numofLetters > maxLettersNarrowScreen){
      messageContainerEl.innerText = "Mobile Screen - " + numofLetters + " character Wordle has been truncated to " + maxLettersNarrowScreen;
      setTimeout(function(){
   //     messageContainerEl.innerText = ""
    }, 4500);
      numofLetters = maxLettersNarrowScreen;
      wordle = wordle.slice(0, maxLettersNarrowScreen);
    }
  }
  console.log("wordle = " + wordle +  " num of letters = " + numofLetters)
 // let guessedWordCount = 0;
  numofGuesses = 6;
  if (numofLetters > 6){
    numofGuesses = 7;
  }
  if (numofLetters > 7){
    numofGuesses = 8;
  }


}



  function createSquares(){
    console.log("entered createSquares")
    let screenWidth = window.innerWidth;
    if (screenWidth > 900){
      screenWidth = 900;
    }
    let screenHeight = window.innerHeight;

    console.log ("createSquares  screenWidth = " + screenWidth + "  screenHeight = " + screenHeight);

    const gameBoard = document.getElementById("board")


    // Clear out any elements of class "square"
    let squares = document.getElementsByClassName('square');
    while (squares[0]){
      squares[0].parentNode.removeChild(squares[0]);
    }

    for (let i = 0; i < (numofLetters*numofGuesses); i++) {
      let square = document.createElement("div");
      square.classList.add("square");
      square.classList.add("animate__animated");
      square.setAttribute("id", i + 1);
      gameBoard.appendChild(square)
    }  

    //  FROM HERE TO END OF FUNCTION ADDED BECAUSE NUMBER OF LETTERS IN WORDLE CAN VARY
    const board = document.getElementById("board")
    const square = document.querySelectorAll(".square")
    console.log(square)
    square.forEach(square => {
      square.style.width = (screenWidth / (numofLetters + 4) + 'px');
      square.style.height = ((screenHeight / 15) + 'px');
      square.style.height = (screenWidth / (numofLetters + 4) + 'px');
      square.style.fontSize = (screenWidth / (numofLetters + 4) + 'px');
      if (screenWidth > screenHeight){
        square.style.height = ((screenHeight / 15) + 'px');
        square.style.fontSize = ((screenHeight / 20) + 'px');

      }
    });
    board.style.gridTemplateColumns = 'repeat(' + numofLetters + ', 1fr)'
  
  } // END OF createSquares 

  function showSpacesForFree(){
    console.log ("add free space logic")

    let checkWordle = wordle;
    const guess = [];
  
    // set guess equal to an array of numofletters spaces
    for (i=0; i<numofLetters; i++){
      guess.push({letter: ' ', color: 'incorrect-letter'});
    }

  
    console.log("About to loop thru to look for Greens")
    guess.forEach((guess, index) => {
      console.log("guess letter = " + guess.letter + "   wordle letter = " + wordle[index])
      if (guess.letter == wordle[index].toLowerCase()){
        console.log ("free space")
        guess.color = 'free-space'
      }
    })


    const firstLetterId = guessedWordCount * numofLetters + 1;

    guess.forEach((tile, index) => {
    
   
        const letterId = firstLetterId + index;
        const letterEl = document.getElementById(letterId);
        letterEl.classList.add(guess[index].color)
    //    addColorToKey(guess[index].letter, guess[index].color)
        if (tile === " "){
          tile = "space"
        }

    })

  }
