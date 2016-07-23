(function () {
    // col-xs-12 col-sm-4 col-md-4
    function controller() {
        this.type = 'landing';
        this.newspapers = [
            {
                name: 'Faro de Vigo',
                url: 'http://farodevigo.es',
                image: './images/nacionales/farovigo.jpg',
                type: ['landing', 'national']
            }, {
                name: 'Marca',
                url: 'http://www.marca.com/',
                image: './images/deportivos/marca.jpg',
                type: ['landing', 'sport']
            }, {
                name: 'Mundo Deportivo',
                url: 'http://www.mundodeportivo.com/',
                image: './images/deportivos/mundodeportivo.jpg',
                type: ['landing']
            }, {
                name: 'El País',
                url: 'http://elpais.com/',
                image: './images/nacionales/elpais.jpg',
                type: ['landing', 'national']
            }, {
                name: 'El Mundo',
                url: 'http://www.elmundo.es/',
                image: './images/nacionales/elmundo.jpg',
                type: ['landing', 'national']
            }, {
                name: 'Voz Pópuli',
                url: 'http://vozpopuli.com/',
                image: './images/digitales/vozpopuli.jpg',
                type: ['landing', 'digital']
            }, {
                name: 'La voz de Galicia',
                url: 'http://www.lavozdegalicia.es/',
                image: './images/nacionales/vozgalicia.jpg',
                type: ['landing', 'national']
            }, {
                name: 'El Confidencial',
                url: 'http://www.elconfidencial.com/',
                image: './images/digitales/elconfidencial.jpeg',
                type: ['landing', 'digital']
            }, {
                name: 'El Economista',
                url: 'http://www.eleconomista.es/',
                image: './images/digitales/eleconomista.jpg',
                type: ['landing', 'digital', 'magazine']
            }, {
                name: 'ABC',
                url: 'http://www.abc.es/',
                image: './images/nacionales/abc.png',
                type: ['national']
            }, {
                name: 'El progreso',
                url: 'http://elprogreso.galiciae.com/gl',
                image: './images/nacionales/progreso.png',
                type: ['national']
            }, {
                name: 'Diario de Pontevedra',
                url: 'http://diariodepontevedra.galiciae.com/',
                image: './images/nacionales/diario_pontevedra.jpg',
                type: ['national']
            }, {
                name: 'Atlántico Diario',
                url: 'http://www.atlantico.net/"',
                image: './images/nacionales/atlantico.png',
                type: ['national']
            }, {
                name: 'El Correo Gallego',
                url: 'http://www.elcorreogallego.es/',
                image: './images/nacionales/elCorreoGallego.png',
                type: ['national']
            }, {
                name: 'Cinco Días',
                url: 'http://cincodias.com/',
                image: './images/digitales/cincodias.jpg',
                type: ['digital']
            }, {
                name: 'Público',
                url: 'http://www.publico.es/',
                image: './images/digitales/publico.png',
                type: ['digital']
            }, {
                name: '20 Minutos',
                url: 'http://www.20minutos.es/"',
                image: './images/digitales/20minutos.jpg',
                type: ['digital']
            }, {
                name: 'El Español',
                url: 'http://www.elespanol.com/"',
                image: './images/digitales/elespanol.jpg',
                type: ['digital']
            }, {
                name: 'AS',
                url: 'http://as.com/',
                image: './images/deportivos/as.jpg',
                type: ['sport']
            }, {
                name: 'Mundo Deportivo',
                url: 'http://www.mundodeportivo.com/',
                image: './images/deportivos/mundodeportivo.jpg',
                type: ['sport']
            }, {
                name: 'Motor 16',
                url: 'http://www.motor16.com/',
                image: './images/deportivos/motor16.jpg',
                type: ['sport']
            }, {
                name: 'Autobild',
                url: 'http://www.autobild.es/',
                image: './images/deportivos/autobild.png',
                type: ['sport']
            }, {
                name: 'Autopista',
                url: 'http://www.autopista.es/',
                image: './images/deportivos/autopista.jpg',
                type: ['sport']
            }, {
                name: 'Autofácil',
                url: 'http://www.autofacil.es/',
                image: './images/deportivos/autofacil.jpg',
                type: ['sport']
            }, {
                name: 'Solomoto',
                url: 'http://solomoto.es/',
                image: './images/deportivos/SOLOMOTO.png',
                type: ['sport']
            }, {
                name: 'MarcaMotor',
                url: 'http://www.marca.com/motor.html',
                image: './images/deportivos/marca motor.png',
                type: ['sport']
            }, {
                name: 'Hola',
                url: 'http://www.hola.com/',
                image: './images/revistas/hola2.jpg',
                type: ['magazine']
            }, {
                name: 'Pronto',
                url: 'http://www.pronto.es/"',
                image: './images/revistas/pronto.jpeg',
                type: ['magazine']
            }, {
                name: 'Quo',
                url: 'http://www.quo.es/',
                image: './images/revistas/quo.jpeg',
                type: ['magazine']
            }, {
                name: 'Mujer hoy',
                url: 'http://www.mujerhoy.com/',
                image: './images/revistas/mujerhoy.jpeg',
                type: ['magazine']
            }, {
                name: 'Muy interesante',
                url: 'http://www.muyinteresante.es/',
                image: './images/revistas/muyinteresante.jpg',
                type: ['magazine']
            }, {
                name: 'Jot Down',
                url: 'http://www.jotdown.es/',
                image: './images/revistas/jotdown.jpg',
                type: ['magazine']
            }, {
                name: 'Magazine',
                url: 'http://www.magazinedigital.com/',
                image: './images/revistas/magazine.png',
                type: ['magazine']
            }, {
                name: 'The Objective',
                url: 'http://theobjective.com/',
                image: './images/revistas/theobjective.png',
                type: ['magazine']
            }
        ];

        this.myFilter = function (type) {
            return function (item) {
                return (item.type.indexOf(type) != -1)
            }
        };

        this.setType = function (type) {
            this.type = type;
        }

    }
    angular.module('prensa').controller('Controller', controller);

} ());