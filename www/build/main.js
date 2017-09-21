webpackJsonp([0],{

/***/ 144:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 144;

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 185;

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(227);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl, camera) {
        this.navCtrl = navCtrl;
        this.camera = camera;
    }
    HomePage.prototype.takePicture = function () {
        var _this = this;
        this.camera.getPicture({
            destinationType: this.camera.DestinationType.DATA_URL,
            targetWidth: 1000,
            targetHeight: 1000
        }).then(function (imageData) {
            // imageData is a base64 encoded string
            _this.base64Image = "data:image/jpeg;base64," + imageData;
        }, function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.pickImageFromGallery = function () {
        var _this = this;
        this.camera.getPicture({
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            targetHeight: 1000,
            targetWidth: 1000
        }).then(function (imageData) {
            _this.base64Image = "data:image/jpeg;base64," + imageData;
        }, function (err) {
            console.log(err);
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/fernando/Documentos/UFT/Hibridos/previa_1/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Home</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  \n    <ion-header>\n        <ion-navbar>\n            <ion-title>Recomendado para você</ion-title>\n        </ion-navbar>\n    </ion-header>\n\n    <ion-card>\n        <img src="assets/img/brasao.jpg"/>\n        <ion-card-content>\n            <ion-card-title>\n                Universidade Federal do Tocantins\n            </ion-card-title>\n            <p>\n                The most popular industrial group ever, and largely\n                responsible for bringing the music to a mass audience.\n            </p>\n        </ion-card-content>\n    </ion-card>\n\n<ion-card>\n    <img src="assets/img/extra.jpg"/>\n    <ion-card-content>\n        <ion-card-title>\n            Universidade Federal do Tocantins\n        </ion-card-title>\n        <p>\n            The most popular industrial group ever, and largely\n            responsible for bringing the music to a mass audience.\n        </p>\n    </ion-card-content>\n</ion-card>\n\n<ion-card>\n  <img src="assets/img/atacadao.png"/>\n  <ion-card-content>\n    <ion-card-title>\n      Universidade Federal do Tocantins\n      </ion-card-title>\n    <p>\n      The most popular industrial group ever, and largely\n      responsible for bringing the music to a mass audience.\n    </p>\n  </ion-card-content>\n</ion-card>\n\n<ion-card>\n  <img src="assets/img/carrefour.png"/>\n  <ion-card-content>\n    <ion-card-title>\n      Universidade Federal do Tocantins\n      </ion-card-title>\n    <p>\n      The most popular industrial group ever, and largely\n      responsible for bringing the music to a mass audience.\n    </p>\n  </ion-card-content>\n</ion-card>\n\n<ion-card-content>\n      Latest Picture:\n      <img [src]="base64Image" *ngIf="base64Image" />\n</ion-card-content>\n\n<ion-fab right bottom>\n    <button ion-fab color="dark">\n        <ion-icon name="add"></ion-icon>\n    </button>\n    <ion-fab-list side="top">\n        <button ion-fab (click)="takePicture()"><ion-icon name="camera"></ion-icon></button>\n        <button ion-fab (click)="pickImageFromGallery()"><ion-icon name="photos"></ion-icon></button>\n    </ion-fab-list>\n</ion-fab>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/fernando/Documentos/UFT/Hibridos/previa_1/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(225);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapaPage = (function () {
    function MapaPage(navCtrl, geolocation) {
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.ionViewDidLoad();
    }
    MapaPage.prototype.ionViewDidLoad = function () {
        this.loadMap();
    };
    MapaPage.prototype.loadMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
        }, function (err) {
            console.log(err);
        });
    };
    MapaPage.prototype.addMarker = function () {
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter()
        });
        var content = "<h4>Information!</h4>";
        this.addInfoWindow(marker, content);
    };
    MapaPage.prototype.addInfoWindow = function (marker, content) {
        var _this = this;
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
        });
    };
    return MapaPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], MapaPage.prototype, "mapElement", void 0);
MapaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'mapa-page',template:/*ion-inline-start:"/home/fernando/Documentos/UFT/Hibridos/previa_1/src/pages/mapa/mapa.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>\n        Mapa\n    </ion-title>\n        <ion-buttons end>\n            <button ion-button (click)="addMarker()"><ion-icon name="add"></ion-icon>Add Marker</button>\n        </ion-buttons>  \n    </ion-navbar>\n</ion-header>\n \n<ion-content>\n  <div style="width:100%; height:100%" #map id="map"></div>  \n</ion-content>'/*ion-inline-end:"/home/fernando/Documentos/UFT/Hibridos/previa_1/src/pages/mapa/mapa.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
], MapaPage);

//# sourceMappingURL=mapa.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Itens */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(234);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Itens = (function () {
    function Itens() {
        this.produtos = new Array();
    }
    return Itens;
}());

var ListaPage = (function () {
    function ListaPage(alertCtrl, db, storage, navCtrl) {
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.lista = db.list('/itens');
        this.itens = new Itens;
    }
    ListaPage.prototype.obterValor = function () {
        var _this = this;
        var _loop_1 = function (i) {
            this_1.storage.get(this_1.itens.produtos[i]).then(function (val) {
                console.log('Nome da lista é ' + _this.itens.nome);
                console.log('Sua lista salva é', val);
                var alert = _this.alertCtrl.create({
                    title: _this.itens.nome,
                    subTitle: _this.itens.produtos[i],
                    buttons: ['OK']
                });
                alert.present();
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.itens.produtos.length; i++) {
            _loop_1(i);
        }
    };
    ListaPage.prototype.cadastrar1 = function (nome) {
        //this.itens.produtos.splice(0, this.itens.produtos.length);
        var _this = this;
        if (this.arroz)
            this.itens.produtos.push("arroz");
        if (this.feijao)
            this.itens.produtos.push("feijao");
        if (this.oleo)
            this.itens.produtos.push("oleo");
        if (this.acucar)
            this.itens.produtos.push("açúcar");
        if (this.sal)
            this.itens.produtos.push("sal");
        if (this.cafe)
            this.itens.produtos.push("cafe");
        if (this.leiteempo)
            this.itens.produtos.push("leite em pó");
        if (this.macarrao)
            this.itens.produtos.push("macarrão");
        if (this.extratoTomate)
            this.itens.produtos.push("extrato de tomate");
        if (this.tempero)
            this.itens.produtos.push("tempero completo");
        if (this.achocolatado)
            this.itens.produtos.push("Achocolatado em pó");
        if (this.molhoTomate)
            this.itens.produtos.push("molho de tomate");
        if (this.farinhaTrigo)
            this.itens.produtos.push("farinha de trigo");
        if (this.gelatina)
            this.itens.produtos.push("gelatina");
        if (this.biscoito)
            this.itens.produtos.push("biscoito");
        if (this.milho)
            this.itens.produtos.push("milho verde");
        this.itens.nome = nome;
        /*
        if(this.itens.nome == null){
            console.log('Null');
            this.itens = new Itens();
            return;
        }
        */
        this.lista.push(this.itens).then(function () {
            _this.itens = new Itens();
        });
    };
    ListaPage.prototype.cadastrar = function () {
        var _this = this;
        var nome;
        var prompt = this.alertCtrl.create({
            title: 'Nova lista de compras',
            message: "Digite o nome da sua lista de compras",
            inputs: [{
                    name: 'title',
                    placeholder: 'Nome'
                }],
            buttons: [{
                    text: 'Cancelar',
                    handler: function (data) {
                        nome = null;
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Salvar',
                    handler: function (data) {
                        console.log('Save clicked');
                        nome = data.title;
                        _this.cadastrar1(nome);
                    }
                }
            ]
        });
        prompt.present();
    };
    return ListaPage;
}());
ListaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-lista',template:/*ion-inline-start:"/home/fernando/Documentos/UFT/Hibridos/previa_1/src/pages/listadecompras/listadecompras.html"*/'\n<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Lista de compras</ion-title>\n        <ion-buttons end>\n            <button ion-button (click)="obterValor()">listas salvas</button>\n        </ion-buttons> \n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n        \n    <ion-list>\n        <ion-item *ngFor="let item of lista | async">\n            <h2>{{itens.nome}}</h2>\n            <h3>{{itens.produtos}}</h3>\n        </ion-item>\n    </ion-list>\n              \n\n    <ion-item>\n        <ion-label>Arroz</ion-label>\n        <ion-checkbox color="dark" [(ngModel)]="arroz"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Feijão</ion-label>\n        <ion-checkbox color="dark" [(ngModel)]="feijao"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Óleo</ion-label>\n        <ion-checkbox color="dark" [(ngModel)]="oleo"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Açúcar</ion-label>\n        <ion-checkbox color="dark" [(ngModel)]="acucar"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Café</ion-label>\n        <ion-checkbox color="dark" [(ngModel)]="cafe"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Leite em pó</ion-label>\n        <ion-checkbox color="dark" [(ngModel)]="leiteempo"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Sal</ion-label>\n        <ion-checkbox color="dark" [(ngModel)]="sal"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Macarrão</ion-label>\n        <ion-checkbox color="dark"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Extrato de tomate</ion-label>\n        <ion-checkbox color="dark"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Tempero completo</ion-label>\n        <ion-checkbox color="dark"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Achocolatado em pó</ion-label>\n        <ion-checkbox color="dark"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Molho de tomate</ion-label>\n        <ion-checkbox color="dark"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Farinha de trigo</ion-label>\n        <ion-checkbox color="dark"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Gelatina</ion-label>\n        <ion-checkbox color="dark"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Biscoito</ion-label>\n        <ion-checkbox color="dark"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Milho verde</ion-label>\n        <ion-checkbox color="dark"></ion-checkbox>\n    </ion-item> \n    \n    <ion-fab right bottom>\n        <button ion-fab color="dark" (click)="cadastrar()">\n            <ion-icon name="add"></ion-icon>\n        </button>\n    </ion-fab>\n\n</ion-content>'/*ion-inline-end:"/home/fernando/Documentos/UFT/Hibridos/previa_1/src/pages/listadecompras/listadecompras.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _d || Object])
], ListaPage);

var _a, _b, _c, _d;
//# sourceMappingURL=listadecompras.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(289);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_mapa_mapa__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_listadecompras_listadecompras__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(268);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












//import { ListaSalvasPage } from '../pages/listassalvas/listassalvas';


// Initialize Firebase
var config = {
    apiKey: "AIzaSyDgf-dUG_gcr608Jpm1m1p_zs2vzP2JizY",
    authDomain: "previa-1.firebaseapp.com",
    databaseURL: "https://previa-1.firebaseio.com",
    projectId: "previa-1",
    storageBucket: "previa-1.appspot.com",
    messagingSenderId: "816587470633"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_mapa_mapa__["a" /* MapaPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_listadecompras_listadecompras__["a" /* ListaPage */]
            //ListaSalvasPage
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["b" /* AngularFireDatabaseModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_mapa_mapa__["a" /* MapaPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_listadecompras_listadecompras__["a" /* ListaPage */]
            //ListaSalvasPage
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_mapa_mapa__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_listadecompras_listadecompras__ = __webpack_require__(271);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import { ListaSalvasPage } from '../pages/listassalvas/listassalvas';
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Mapa', component: __WEBPACK_IMPORTED_MODULE_5__pages_mapa_mapa__["a" /* MapaPage */] },
            { title: 'Lista de compras', component: __WEBPACK_IMPORTED_MODULE_6__pages_listadecompras_listadecompras__["a" /* ListaPage */] }
            //{ title: 'Lista de compras salvas', component: ListaSalvasPage }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/fernando/Documentos/UFT/Hibridos/previa_1/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/fernando/Documentos/UFT/Hibridos/previa_1/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[272]);
//# sourceMappingURL=main.js.map