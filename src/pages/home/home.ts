import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';


@Component({
  	selector: 'page-home',
  	templateUrl: 'home.html'
})


export class HomePage {

	public base64Image: string;

  	constructor(public navCtrl: NavController, private camera: Camera) {

	}

	takePicture(){
        this.camera.getPicture({
        	destinationType: this.camera.DestinationType.DATA_URL,
        	targetWidth: 1000,
        	targetHeight: 1000
    	}).then((imageData) => {
      	// imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
    	}, (err) => {
	        console.log(err);
   		});
  	}

	pickImageFromGallery(){
		this.camera.getPicture({
			destinationType: this.camera.DestinationType.DATA_URL,
			sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
			targetHeight: 1000,
			targetWidth: 1000
		}).then((imageData) => {
			this.base64Image = "data:image/jpeg;base64," + imageData;
		}, (err) => {
			console.log(err);
		}); 
	}


}
