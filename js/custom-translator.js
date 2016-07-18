angular.module('app', ['pascalprecht.translate'])
.config(['$translateProvider', function($translateProvider){
	
	
	  
	var loc_lang = localStorage.getItem('loc_lang');
	if(!loc_lang){
		localStorage.setItem('loc_lang', 'es_ES');	
	}
	setTimeout(function(){ $translateProvider.preferredLanguage(loc_lang); }, 1000); 
  	$translateProvider.preferredLanguage(loc_lang);	
	
	
  // Adding a translation table for the English language
  $translateProvider.translations('en_US', {
    "TITLE"     : "Ola y Carlos 30.7.2016",
    "HOME"		: "Home",
    "ABOUT"		: "About",
    "GALERIA"	: "Gallery",
    "FAQ"		: "Faq",
    "SERV"		: "Services",
    "CONTACT"	: "Contact",
    "DETAILS"	: "La Boda",
    "LOCATION"	: "Como llegar"
    
  });
  // Adding a translation table for the other language
  $translateProvider.translations('es_ES', {
    "TITLE"     : "Ola y Carlos 30.7.2016",
    "HOME"      : "Inicio",
    "ABOUT"		: "Sobre",
    "GALERIA"	: "Galería",
    "FAQ"		: "Faq",
    "SERV"		: "Más Info",
    "CONTACT"	: "Turismo",
    "DETAILS"	: "La Boda",
    "LOCATION"	: "Como llegar",
    
    "INDEX_1"	: "Después de tantos viajes, vuelos, video llamadas, ahora ven tú, ahora voy yo, me voy a España, me voy a Polonia,...",
    "INDEX_2"	: "NOS CASAMOS!!!",
    "INDEX_3"	: "Estamos muy felices, flotando en una nube y queremos compartir con vosotros este momento. Por eso estamos preparando una ceremonia y celebración para pasarlo genial ese día tan importante.",
    "INDEX_4"	: "Estamos preparando una bonita ceremonia y una gran fiesta al estilo polaco, con sus tradiciones, bailes, juegos,...",
    "INDEX_5"	: "Esperamos compartir con vosotros este día tan importante!!!",
    "INDEX_6"	: "Información de la boda",
    "INDEX_7"	: "Os ponemos información de cómo es una boda polaca y sus costumbres. Además tienes información sobre cuando y donde. Por último detalles para confirmar tu asistencia.",
    "INDEX_8"	: "Más info",
    "INDEX_9"	: "Como llegar",
    "INDEX_10"	: "No queremos que os perdáis. Aquí podrás encontrar las indicaciones para llegar a la boda.",
    "INDEX_11"	: "Turismo",
    "INDEX_12"	: "Sitios turísticos que os recomendamos, hoteles, peluquerías, ocio y que hacer en los alrededores.",
    "INDEX_13"	: "\"Sí, quiero!!!\"",
    
    "LABODA_1"	: "Una boda polaca",
    "LABODA_2"	: "Nos casamos en Polonia y seguimos sus tradiciones y costumbres.",
    "LABODA_3"	: "En Polonia tenemos varias costumbres que nos diferencian de otros países. Como la boda es hispano-polaca, hemos decidido que haremos un mix de costumbres que nos gustan de cada país. Para que no os sorprenda nada, os las vamos a explicar a continuación.",
    "LABODA_4"	: "La ceremonia religiosa es igual que en España, pero en polaco ;). Lo que pasa después, es un poco diferente.",
    "LABODA_5"	: "Cuando termina la ceremonia en la iglesia, la gente espera fuera delante de la puerta. En Polonia se tira arroz, flores y unas moneditas de 1 grosz (es el céntimo de la moneda polaca złoty PLN). Los novios tienen que recoger todas las moneditas, se puede ayudar a los novios, porque a veces dura bastante tiempo. Después todos los asistentes, empezando por los padres y familiares se ponen en cola y así tienen un momento para felicitar a los novios. Si alguien quiere dar algún regalo, ese es el mejor momento. Normalmente el padrino y madrina de la boda se colocan detrás de la pareja para ayudarlos con los regalos. Generalmente el padrino lleva un cofre en el que se guardan sobres dinero. También se suelen regalar flores y últimamente en lugar de flores, un cd, un libro, una botella de vino. Aprovecharemos ese momento para tomar una foto de grupo.",
    "LABODA_6"	: "Cuando termina este momento, los invitados se dirigen al autobús que os llevara al restaurante. Nosotros seremos los últimos en llegar.",
    "LABODA_7"	: "Mientras tanto los invitados esperan delante del restaurante la llegada de novios. Los padres de los novios esperan a los novios frente a la puerta del restaurante con un pan y sal (es un símbolo para que nunca les falte pan). Después de esto los novios beben champán o vodka y tiran los vasos hacia detrás para que se rompan. AVISO IMPORTANTE!!! No hay que ponerse detrás de los novios en este momento, porque los vasos se tienen que romper, es un símbolo de buena suerte.  Después llega la prueba de condición física del novio, porque tiene que entrar a la novia en brazos por la puerta del restaurante. Detrás de los novios todos se dirigen a la sala de boda. Donde se canta el primer “Sto lat” (“deseo de cien años”) y se hace un brindis. Acordaros del “Sto lat” porque es una de las canciones más frecuentes. En las bodas polacas casi siempre hay una orquesta que lleva la fiesta, también suelen animar para tomar un chupito :)",
    "LABODA_8"	: "En general en las bodas de Polonia se bebe y come bastante durante toda la noche. Siempre hay comida en las mesas y nunca falta el vodka frío. Después del brindis se puede comenzar la cena, es tradición comenzar con una sopa ya que Polonia es conocida como el país de las mil sopas. Durante toda la cena hay platos fríos/entrantes en las mesas y durante la noche van llegando los platos calientes, cada 2 horas.  Como en España, aquí también hay una tarta de boda y la cortan los novios. Lo diferente empieza a las 12 de la noche. Esa es la hora en la que empieza “Oczepiny”. Son los juegos de la boda. Empiezan las chicas solteras, que bailan en círculo. Mientras tanto la novia con su velo está sentada en el medio. Cuando termina música, la novia tira el velo. La afortunada que lo coja, se va a casar en el próximo año. Después pasa lo mismo con los chicos solteros, el novio y su corbata. AVISO IMPORTANTE!!! El velo y corbata se devuelve a los novios, aunque os los dejaremos durante la noche. Otro de los juegos tradicionales es que los chicos pueden comprar un baile con novia, y las chicas con novio. El dinero que se gana, esta para comprar el carrito de niño :) El resto de juegos es un secreto. Esperamos que la disfrutéis.",
    "LABODA_9"	: "Nuestro gran dia",
    "LABODA_10"	: "Queremos compartir con vosotros el día más especial de nuestra vida",
    "LABODA_11"	: "Cuando",
    "LABODA_12"	: "Sábado, 30 de Julio, 2016",
    "LABODA_13"	: "Ceremonia",
    "LABODA_14"	: "16:00",
    "LABODA_15"	: "Banquete",
    "LABODA_16"	: "18:00",
    "LABODA_17"	: "Donde",
    "LABODA_18"	: "Iglesia",
    "LABODA_19"	: "Basílica de los Dominicos",
    "LABODA_20"	: "Bazylika Ojców Dominikanów",
    "LABODA_21"	: "ul. Złota 9,",
    "LABODA_22"	: "20-112 Lublin, Polska",
    "LABODA_23"	: "Restaurante",
    "LABODA_24"	: "Restaurante Etiuda",
    "LABODA_25"	: "Ul. Nałęczowska, Szerokie 123,",
    "LABODA_26"	: "20-050 Lublin, Polska",
    "LABODA_27"	: "CONFIRMACION - RSVP",
    "LABODA_28"	: "Estamos muy contentos de celebrarlo con vosotros. Por favor confirma tu asistencia y cuantas personas vendréis antes del",
    "LABODA_29"	: "30 de Junio 2016",
    "LABODA_30"	: "para asegurarnos de que tendremos suficiente comida y Vodka. Podéis hacérnoslo saber mediante:",
    "LABODA_31"	: "Teléfono: ",
    "LABODA_32"	: "Email: ",
    
    "LLEGAR_1"	: "Como llegar a la boda",
    "LLEGAR_2"	: "¡Os lo queremos poner fácil! Aquí os iremos haciendo un listado con las direcciones de todos los lugares relacionados con nuestra boda. Iremos actualizando la información. ¡Vamos! Que quien se pierda es porque quiere perderse. Os indicamos el lugar exacto con el teléfono, por si tenéis dudas y queréis llamar, una pequeña descripción de cómo llegar y alguna que otra fotillo.",
    "LLEGAR_3"	: "Llegar a Polonia",
    "LLEGAR_4"	: "Desde extranjero se puede llegar a Polonia con varias compañías. Hay que tener en cuenta que en Varsovia hay dos aeropuertos. El aeropuesto de Aeropuerto Modlin (lotnisko Modlin) y el Aeropuerto Chopin (lotnisko Chopin). Desde Londres lo más fácil es llegar directamente a Lublin.",
    "LLEGAR_5"	: "Desde Espana con:",
    "LLEGAR_6"	: "El aeropuerto de Chopin esta dentro de Varsovia. De allí al centro se puede llegar en varias maneras:",
    "LLEGAR_7"	: "en autobús (billete 4,4 zł)",
    "LLEGAR_8"	: "en taxi (más o menos 30 zł) sugerimos preguntar antes el precio.",
    "LLEGAR_9"	: "El aeropuerto de Modlin está 0,5-1 hora del centro de Varsovia:",
    "LLEGAR_10"	: "en autobus  www.modlinbus.pl/en (9-35 zł)",
    "LLEGAR_11"	: "en transporte privado-taxi (mas o menos 100 zł)",
    "LLEGAR_12"	: "Si vais a saber vuestra ruta y fechas, por favor avísanos. Así podemos ayudaros a elegir manera más fácil a llegar a su destino u organizar la recogida del aeropuerto. O si llegáis varios en el mismo vuelo podemos buscaros un transporte en grupo.",
    "LLEGAR_13"	: "Llegar a Lublin desde Varsovia",
    "LLEGAR_14"	: "Desde Varsovia se puede ir en coche, tren o autobús. Aproximadamente se tarda unas 3 horas. Cuando se acerque la fecha de la boda y sepamos cuanta gente, buscaremos un autobús para ir en grupo.",
    "LLEGAR_15"	: "En coche",
    "LLEGAR_16"	: "Os recomendamos salir con tiempo ya que Varsovia suele tener atascos en horas puntas. Hay que ir dirección sureste por la carretera 17. Si os interesa alquilar os dejamos una compañía que hablan en español. Echar un vistazo al mapa.",
    "LLEGAR_17"	: "Alquiler de coches - http://pol-spain.eu (solo dentro de Polonia)",
    "LLEGAR_18"	: "En tren",
    "LLEGAR_19"	: "Es una manera más tranquila y económica para viajar dentro de Polonia. La empresa de trenes se llama PKP. Aquí podéis mirar horarios y comprar billetes. Si necesitáis ayuda avísanos. Los precios del billete varían, pero no hay mucha diferencia entre primera y segunda clase. La estacion central de Varsovia se llama Warszawa Centralna.",
    "LLEGAR_20"	: "PKP Polska (Web de trenes polacos) - http://www.intercity.pl",
    "LLEGAR_21"	: "En autobus",
    "LLEGAR_22"	: "En autobús es más complicado, porque hay varias empresas y en Varsovia os podéis liar buscando la estación, cada empresa tiene un sitio distinto de recogida de pasajeros.",
    "LLEGAR_23"	: "Llegar a la iglesia",
    "LLEGAR_24"	: "La iglesia de los Dominicos esta en el casco antiguo de Lublin. Hay varias maneras para llegar aunque ese día, como hay un festival en la ciudad, os aconsejamos ir en taxi o andando. En coche no se podrá llegar directamente hasta la puerta, pero se puede aparcar en un parking que hay enfrente a la catedral o castillo. Desde ahí se llega andando enseguida. Os ponemos el mapa y una foto de la iglesia de los Dominicos.",
    "LLEGAR_25"	: "Basílica de los Dominicos (Bazylika Ojców Dominikanów)",
    "LLEGAR_26"	: "Llegar al Restaurante Etudia",
    "LLEGAR_27"	: "Después de la ceremonia pondremos un autobús para ir hasta el restaurante. En cuanto se acerque la fecha os indicaremos donde nos recogerá. Pero en caso de que alguien quiera ir en coche, os ponemos el mapa. Dentro del recinto del restaurante hay un parking.",
    "LLEGAR_28"	: "",
    
    "TURISMO_1"	: "Que visitar en Polonia",
    "TURISMO_2"	: "Lo primero de todo Lublin.",
    "TURISMO_3"	: "Os iremos actualizando la web con más información por si queréis hacer turismo.",
    "TURISMO_4"	: "Lublin",
    "TURISMO_5"	: "Esperamos que aprovechando que la boda tendrá lugar en Lublin, podéis visitar esta bonita ciudad. Es una ciudad universitaria de 400.000 habitantes, que tiene un precioso casco antiguo. Adicionalmente, si llegáis un día antes, podréis aprovechar también para disfrutar del ambiente del festival de malabaristas y magos, que tendrá lugar justo ese fin de semana por las calles de Lublin ( 28-31 Julio).",
    "TURISMO_6"	: "Carnaval Sztukmistrzów - sztukmistrze.eu",
    "TURISMO_7"	: "Que visitar",
    "TURISMO_8"	: "Si decidís quedaros unos días en Lublin os recomendamos que visitéis algunos de estos lugares.",
    "TURISMO_9"	: "Casco antiguo de Lublin (Stare miasto)",
    "TURISMO_10"	: "Lublin es una ciudad medieval y mantiene su casco histórico. Es muy colorido y tiene un encanto que os puede transportar a otras épocas. Durante todo el día hay mucho ambiente y por la noche es una de las zonas para salir a tomar algo, tiene muchos restaurantes y terrazas. La iglesia de los Dominicos se encuentra en este casco histórico, muy cerca de la plaza Rynek.",
    "TURISMO_11"	: "Carnaval Sztukmistrzów - sztukmistrze.eu (Stare miasto)",
    "TURISMO_12"	: "Desde el jueves 28 hasta el domingo 31 de Julio las calles de Lublin serán un carnaval. Es un festival que muestra el arte carnavalesco, circo y música en la calle de artistas de toda Europa. Durante este carnaval podréis ver malabaristas, equilibristas, acróbatas, payasos, mimos, músicos, artistas por todos los rincones de la ciudad. La mayoría de las representaciones serán en el casco antiguo. El ambiente durante esos días es increíble. Os aconsejamos que aprovechéis esos días para ver este carnaval.",
    "TURISMO_13"	: "Carnaval Sztukmistrzów - sztukmistrze.eu",
    "TURISMO_14"	: "Campo de Concentración Majdanek Museo",
    "TURISMO_15"	: "Para los amantes de la historia y de la segunda guerra mundial, este iba a ser el campo de concentración más grande de Europa pero su construcción se paró poco antes de finalizar la guerra. Este situado cerca de Lublin a unos 2 Km, se puede llegar en transporte público. Para los que tengan pensado visitar Auschwitz esta puede ser una buena alternativa. Os avisamos que la experiencia es intensa.",
    "TURISMO_16"	: "Museo Rural- Muzeum Wsi Lubelskiej",
    "TURISMO_17"	: "Web Muzeum Wsi Lubelskiej",
    "TURISMO_18"	: "El castillo de Lublin con Capilla de la Santa Trinidad y el Torreón",
    "TURISMO_19"	: "La capilla es una fusión del estilo gótico y ruso bizantino. Se encuentra en la categoría cero de la UNESCO.",
    "TURISMO_20"	: "Torre Trinitaria",
    "TURISMO_21"	: "Se puede subir al torreón para tener una buena vista panorámica de Lublin.",
    "TURISMO_22"	: "Zalew Zemborzycki",
    "TURISMO_23"	: "Es un lago que se encuentra a las afueras de Lublin, es un buen lugar para pasar una tarde de verano. Se puede practicar deportes náuticos, tiene piscinas y zona de barbacoas.",
    "TURISMO_24"	: "Restaurantes",
    "TURISMO_25"	: "Os aconsejamos algunos de los restaurante en Lublin.",
    "TURISMO_26"	: "Perłowa Pijalnia Piwa: alli podriais hacer degustacion de las cervezas de Lublin, Perła.",
    "TURISMO_27"	: "Stół i Wół: Un buen filete de carne.",
    "TURISMO_28"	: "Sielsko Anielsko: Comida tradicional polaca.",
    "TURISMO_29"	: "Czarcia Łapa: una de los restaurantes más viejos de Lublin.",
    "TURISMO_30"	: "Św. Michał Pub Regionalny: Comida polaca.",
    "TURISMO_31"	: "Ceska Pivnica: Comida y cerveza de Republica Checa.",
    "TURISMO_32"	: "Trybunalska",
    "TURISMO_33"	: "Grodzka 15: Cerveza artesanal",
    "TURISMO_34"	: "G20: Comida española",
    "TURISMO_35"	: "Hoteles",
    "TURISMO_36"	: "Os aconsejamos algunos de los hoteles en Lublin.",
    "TURISMO_37"	: "Peluquerias",
    "TURISMO_38"	: "Sabemos que hay gente interesada en peluquería para ese día.",
    "TURISMO_39"	: "",
    
    "MASINFO_1"	: "Más info",
    "MASINFO_2"	: "Durante los próximos días iremos actualizando esta página con más información.",

    "MASINFO_3"	: "App Fotos Movil",
    "MASINFO_4"	: "Con esta app nos puedes ayudar a compartir las fotos de los mejores momentos. Descárgatela e introduce en código de nuestro álbum. Después solo tienes que subir ahí las fotos.",
    "MASINFO_5"	: "Accede a este ",
    "MASINFO_6"	: "link",
    "MASINFO_7"	: " y descarga la aplicación para móvil desde esta web.",
	"MASINFO_8"	: "Recuerda utilizar el código de nuestro álbum: ",

    
    "GALERIA_1"	: "Galería",
    "GALERIA_2"	: "Momentos de la boda"
    
    
  });
  

  
  // Adding a translation table for the other language
  $translateProvider.translations('pl_PL', {
    "TITLE"     : "Ola i Carlos 30.7.2016",
    "HOME"      : "Start",
    "ABOUT"		: "O",
    "GALERIA"	: "Galeria",
    "FAQ"		: "Faq",
    "SERV"		: "Więcej info",
    "CONTACT"	: "Turystyka",
    "DETAILS"	: "Ślub",
    "LOCATION"	: "Jak dojechać",
    
    "INDEX_1"	: "Po tylu latach, podróżach, lotach, po tylu wygadanych minutach, rozmowach na skypie....nareszcie!",
    "INDEX_2"	: "BIERZEMY ŚLUB!!!",
    "INDEX_3"	: "Jesteśmy bardzo szczęśliwi, dlatego chcemy abyście z nami uczestniczyli w tym specjalnym dniu. Przygotowujemy uroczystość, aby ten dzień był wyjątkowy.",
    "INDEX_4"	: "Jeśli chcecie uczestniczyć w wielkim polsko-hiszpańskim weselu, zapraszamy serdecznie :)",
    "INDEX_5"	: "Chcemy móc z wami spędzić ten dzień!!!",
    "INDEX_6"	: "Informacje odnośnie ślubu",
    "INDEX_7"	: "Zamieszczamy informację o ślubie, weselu, o zwyczajach, wskazówkach dotyczących dojazdu i wszelkich sprawach organizacyjnych, które pojawią się w międzyczasie...",
    "INDEX_8"	: "Więcej info",
    "INDEX_9"	: "Jak dojechać",
    "INDEX_10"	: "Nie chcemy abyście się zgubili. Tutaj znajdziecie informację jak dojechać na ślub.",
    "INDEX_11"	: "Turystyka",
    "INDEX_12"	: "Miejsca w Lublinie, które Wam polecamy (wydarzenia, hotele, restauracje, salony fryzjerskie,...).",
    "INDEX_13"	: "\"Tak, chcę!!!\"",
    
    "LABODA_1"	: "Wesele hiszpańskie (zwyczaje)",
    "LABODA_2"	: "Świadomie podjeliśmy decyzję aby wesele było w Polsce i aby to było polskie wesele :) Znając rodzinę i znajomych z Hiszpanii, z pewnością są oni ciekawi naszych zwyczajów i tradycji.",
    "LABODA_3"	: "Postanowiliśmy wybrać najwspanialsze zwyczaje hiszpańskie i polskie i stworzyć mix, który według nas sprawi że wszyscy będą się czuli zadowoleni.",
    "LABODA_4"	: "Ceremonia w kościele w Hiszpanii odbywa sie podobnie do naszej, tylko jest po hiszpańsku ;). Dokładamy wszelkich starań, aby nasz ślub mógł być dwujęzyczny, przynajmniej jeśli chodzi o przysięgę (aby każdy rozumiał co przysięga ;) ). Odmienne jest jedynie wejście do kośioła, kiedy to Pan Młody jest wprowadzany przez mamę, zaś po nim wchodzi Panna Młoda ze swoim tatą.",
    "LABODA_5"	: "Wszystko co następuje po ślubie, czyli składanie życzeń pod kościołem, dla Hiszpanów będzie czymś nowym. Co chcielibyśmy wprowadzić z tradycji hiszpańskich, to zdjęcie grupowe pod kościołem.",
    "LABODA_6"	: "Wesele będzie niemal w całości polskie ;) W Hiszpanii nie ma zbyt wielu tradycji dotyczących samego świętowania. Te, które się pojawią niech będą dla was niespodzianką :) Mamy jednak ogromną prośbę. Zagraniczni goście mogą się czuć odrobinę wyobcowani i zaskoczeni w pewnych sytuacjach. Prosimy abyście ich ciepło przyjęli i służyli pomocą w tłumaczeniu, gdy będzie taka potrzeba. Mamy nadzieje, że będą to dla Was niezapomniane chwile, bo dla nas na pewno ;) Czekamy na Was z niecierpliwością.",
    "LABODA_7"	: "",
    "LABODA_8"	: "",
    "LABODA_9"	: "Nasz Wielki Dzień",
    "LABODA_10"	: "Chcemy spędzić z Wami ten wyjątkowy dla nas dzień! ",
    "LABODA_11"	: "Kiedy",
    "LABODA_12"	: "Sobota, 30 lipca, 2016",
    "LABODA_13"	: "Ślub",
    "LABODA_14"	: "16:00",
    "LABODA_15"	: "Wesele",
    "LABODA_16"	: "18:00",
    "LABODA_17"	: "Gdzie",
    "LABODA_18"	: "Kościół",
    "LABODA_19"	: "Bazylika Ojców Dominikanów",
    "LABODA_20"	: "Bazylika Ojców Dominikanów",
    "LABODA_21"	: "ul. Złota 9,",
    "LABODA_22"	: "20-112 Lublin, Polska",
    "LABODA_23"	: "Restauracja",
    "LABODA_24"	: "Restauracja Etiuda",
    "LABODA_25"	: "Ul. Nałęczowska, Szerokie 123,",
    "LABODA_26"	: "20-050 Lublin, Polska",
    "LABODA_27"	: "POTWIERDZENIE - RSVP",
    "LABODA_28"	: "Jesteśmy bardzo szczęśliwi, że możemy spędzieć ten dzień z Wami. Bardzo prosimy o potwierdzenie przybycia przed",
    "LABODA_29"	: "30 czerwca 2016",
    "LABODA_30"	: "abyśmy byli pewni, że będzie wystarczająca ilość jedzenia i wódki na stołach.",
    "LABODA_31"	: "Telefon: ",
    "LABODA_32"	: "Email: ",
    
    "LLEGAR_1"	: "Jak dojechać na ślub/ wesele",
    "LLEGAR_2"	: "Chcemy ułatwić Wam dotarcie na ślub. Tutaj będziemy zamieszczeć informacje związane z dojazdem i pobytem w Lublinie. Będziemy aktualizować informacje. Os indicamos el lugar exacto con el teléfono, por si tenéis dudas y queréis llamar, una pequeña descripción de cómo llegar y alguna que otra fotillo.",
    "LLEGAR_3"	: "Przylot do Polski",
    "LLEGAR_4"	: "Informacje dotyczące przyjazdu do Polski dotyczą głównie gości z Hiszpanii, ale są i Polacy, którzy wybierają się do nas z daleka. ",
    "LLEGAR_5"	: "Przylot z Hiszpanii:",
    "LLEGAR_6"	: "Lotnisko Chopina jest wewnątrz Warszawy. Z lotniska do centrum można dojechać:",
    "LLEGAR_7"	: "autobusem (bilet 4,4 zł)",
    "LLEGAR_8"	: "taksówką (ok. 30 zł)",
    "LLEGAR_9"	: "Lotnisko w Modlinie jest 0,5-1 godzinę od centrum Warszawy:",
    "LLEGAR_10"	: "autbusem  www.modlinbus.pl/en (9-35 zł)", 
    "LLEGAR_11"	: "taksówka (ok.100 zł)",
    "LLEGAR_12"	: "Jeśli będziecie znali datę waszego przyjazdu, dajcie znać. W ten sposób będziemy Wam mogli pomóc dojechać do Warszawy, Lublina z lotniska. ",
    "LLEGAR_13"	: "Dojazd z Lublina do Warszawy",
    "LLEGAR_14"	: "Z Warszawy do Lublina można dojechać busem, pociągiem lub samochodem (ew. samolotem). Dojazd trwa od 2,5-3 godzin. Niestety skupimy się tylko na trasie Warszawa-Lublin, gdyż w przypadku pozostałych miast nie posiadamy pewnych informacji, a nie chcemy wprowadzić Was w błąd.",
    "LLEGAR_15"	: "Samochód",
    "LLEGAR_16"	: "Sugerujemy wyjechać wcześniej z Warszawy, gdyż trasa Warszawa-Lublin jest dość zakorkowana w godzinach szczytowych, szczególnie w piątek. Dojazd do Lublina trasą S17.",
    "LLEGAR_17"	: "",
    "LLEGAR_18"	: "Pociąg",
    "LLEGAR_19"	: "Naszym zdaniem najspokojniejsza forma dojazdu do Lublina. Sugerujemy kupić bilet wcześniej.",
    "LLEGAR_20"	: "PKP Polska - http://www.intercity.pl",
    "LLEGAR_21"	: "Autobus/ Bus",
    "LLEGAR_22"	: "Kolejną opcją dojazdu do Lublina jest autobus. Należy jednak brać pod uwagę dłuższy czas dojazdu w godzinach szczytowych (Polski Bus, Contbus, Bigbus, Lux Bus)",
    "LLEGAR_23"	: "Dojazd do kościoła",
    "LLEGAR_24"	: "Bazylika Ojców Dominikanów znajduje się na Starym Mieście w Lublinie. Ponieważ w dniu ślubu w centrum Lublina będzie odbywał się Carnaval Sztukmistrzów, sugerujemy zostawiać samochód w domu, aby nie spóźnić się na ceremonię szukając miejsca do zaparkowania :). Jeśli jednak zdecydujecie się na tą formę dojazdu, najbliższy parking znajduje się przy katedrze lub pod zamkiem lubelskim. Załączamy zdjęcie kościoła, aby łatwiej Wam było trafić.",
    "LLEGAR_25"	: "Bazylika Ojców Dominikanów",
    "LLEGAR_26"	: "Dojazd do Etiudy",
    "LLEGAR_27"	: "Po ślubie zapewniony będzie autokar, który dowiezie was do Etiudy. Miejsce podstawienia autokaru jest jeszcze wielką niewiadomą, ale zbliżając się do dnia ślubu, zamieścimy na stronie taką informację. Jeśli zdecydujecie się na dojazd samochodem, należy kierować się na Nałęczów. Pod domem weselnym można zaparkować.",
    "LLEGAR_28"	: "",


    "TURISMO_1"	: "Co zwiedzić w Polsce",
    "TURISMO_2"	: "Po pierwsze Lublin.",
    "TURISMO_3"	: "Strona będzie aktualizowana o nowe informacje.",
    "TURISMO_4"	: "Lublin",
    "TURISMO_5"	: "Mamy nadzieję, że korzystając z faktu, że ślub jest w Lublinie, będziecie mieli okazję zwiedzić to piękne miasto. Lublin jest miastem akademickim z bardzo klimatycznym Starym Miastem. Znajduje się tu szereg zabytków. Co najbardziej polecamy to spacer jego ulicami w letni dzień. Szczególnie, że dokładnie w tych samych dniach co wesele, wypada Carnaval Sztukmistrzów ( 28-31 Lipca).",
    "TURISMO_6"	: "Carnaval Sztukmistrzów - sztukmistrze.eu",
    "TURISMO_7"	: "Co zwiedzić w Lublinie",
    "TURISMO_8"	: "Jeśli zdecydujecie się przyjechać wcześniej do Lublina, polecamy Wam zwiedzić te miejsca.",
    "TURISMO_9"	: "Stare miasto",
    "TURISMO_10"	: "Lublin jest miastem średniowiecznym i posiada piękne, kolorowe Stare Miasto... ",
    "TURISMO_11"	: "Carnaval Sztukmistrzów - sztukmistrze.eu (Stare miasto)",
    "TURISMO_12"	: "Od czwartku 28 lipca do niedzieli 31 w Lublinie odbywać się będzie Carnaval Sztukmistrzów. Jest to niepowtarzalne wydarzenie, które na pewno przypadnie Wam do gustu.",
    "TURISMO_13"	: "Carnaval Sztukmistrzów - sztukmistrze.eu",
    "TURISMO_14"	: "Obóz koncentracyjny Majdanek",
    "TURISMO_15"	: "...",
    "TURISMO_16"	: "Muzeum Wsi Lubelskiej",
    "TURISMO_17"	: "Web Muzeum Wsi Lubelskiej",
    "TURISMO_18"	: "Zamek Lubelski i Kaplica Świętej Trójcy",
    "TURISMO_19"	: "",
    "TURISMO_20"	: "Wieża Trynitarska",
    "TURISMO_21"	: "...",
    "TURISMO_22"	: "Zalew Zemborzycki",
    "TURISMO_23"	: "...",
    "TURISMO_24"	: "Restauracje",
    "TURISMO_25"	: "Lista polecanych barów/ restauracji w Lublinie",
    "TURISMO_26"	: "Perłowa Pijalnia Piwa: tutaj możecie spróbować wszystkich typów lubelskiego piwa",
    "TURISMO_27"	: "Stół i Wół",
    "TURISMO_28"	: "Sielsko anielsko: polskie jedzenie",
    "TURISMO_29"	: "Czarcia Łapa: jedna z najstarszych restauracji w Lublinie.",
    "TURISMO_30"	: "Św. Michał Pub Regionalny",
    "TURISMO_31"	: "Ceska Pivnica: czeskie piwo i jedzdenie",
    "TURISMO_32"	: "Trybunalska",
    "TURISMO_33"	: "Grodzka 15: dobre, warzone na miejscu piwo",
    "TURISMO_34"	: "G20: hiszpańskie jedzenie",
    "TURISMO_35"	: "Hotele",
    "TURISMO_36"	: "Jeśli zdecydujecie się na odwiedzenie Lublina na dłużej niż weekend, polecamy Wam te hotele.",
    "TURISMO_37"	: "Salony fryzjerskie",
    "TURISMO_38"	: "Wiemy, że niektórzy z Was będą potrzebować usług fryzjerskich",
    "TURISMO_39"	: "",
    
    "MASINFO_1"	: "Więcej informacji",
    "MASINFO_2"	: "Wkrótce będziemy aktualizować stronę o brakujące informacje.",
    
    "MASINFO_3"	: "App Fotos Movil",
    "MASINFO_4"	: "Con esta app nos puedes ayudar a compartir las fotos de los mejores momentos. Descárgatela e introduce en código de nuestro álbum. Después solo tienes que subir ahí las fotos.",
    "MASINFO_5"	: "Accede a este ",
    "MASINFO_6"	: "link",
    "MASINFO_7"	: " y descarga la aplicación para móvil desde esta web.",
	"MASINFO_8"	: "Recuerda utilizar el código de nuestro álbum: ",

    "GALERIA_1"	: "Galeria",
    "GALERIA_2"	: "Zdjęcia z wesela"
   
  });  
  


}])
.controller('ctrl', ['$scope', '$translate', function($scope, $translate) {
  $scope.tlData = {
    staticValue : 42,
    randomValue : Math.floor(Math.random() * 1000)
  };
  $scope.jsTrSimple = $translate.instant('SERVICE');
  $scope.jsTrParams = $translate.instant('SERVICE_PARAMS', $scope.tlData);
  $scope.setLang = function(langKey) {
	localStorage.setItem('loc_lang', langKey);
    // You can change the language during runtime
    $translate.use(langKey);
    // A data generated by the script have to be regenerated
    $scope.jsTrSimple = $translate.instant('SERVICE');
    $scope.jsTrParams = $translate.instant('SERVICE_PARAMS', $scope.tlData);
  };
}]);
