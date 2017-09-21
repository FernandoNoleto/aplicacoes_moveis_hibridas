import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';
import { IonicStorageModule } from '@ionic/storage';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MapaPage } from '../pages/mapa/mapa';
import { ListaPage } from '../pages/listadecompras/listadecompras';
//import { ListaSalvasPage } from '../pages/listassalvas/listassalvas';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDgf-dUG_gcr608Jpm1m1p_zs2vzP2JizY",
    authDomain: "previa-1.firebaseapp.com",
    databaseURL: "https://previa-1.firebaseio.com",
    projectId: "previa-1",
    storageBucket: "previa-1.appspot.com",
    messagingSenderId: "816587470633"
  };
  

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MapaPage,
    ListaPage
    //ListaSalvasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MapaPage,
    ListaPage
    //ListaSalvasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
