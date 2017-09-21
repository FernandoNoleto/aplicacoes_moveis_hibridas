import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

export class Itens {
	nome: string;
	produtos: Array<string> = new Array();
}

@Component({
  	selector: 'page-lista',
	templateUrl: 'listadecompras.html'
})


export class ListaPage {
	
	lista: FirebaseListObservable<any>;
	itens: Itens;
	
	/*itens de supermercado*/
	arroz: boolean;
	feijao: boolean;
	oleo: boolean;
	acucar: boolean;
	cafe: boolean;
	leiteempo: boolean;
	sal: boolean;
	macarrao: boolean;
	extratoTomate: boolean;
	tempero: boolean;
	achocolatado: boolean;
	molhoTomate: boolean;
	farinhaTrigo: boolean;
	gelatina: boolean;
	biscoito: boolean;
	milho: boolean;
	
	  
	constructor(public alertCtrl: AlertController, db: AngularFireDatabase,
		private storage: Storage, public navCtrl: NavController) {
			this.lista = db.list('/itens');
			this.itens = new Itens;
		}

	
	obterValor(){
		
		for(let i = 0; i < this.itens.produtos.length; i++){
			this.storage.get(this.itens.produtos[i]).then((val) => {
				console.log('Nome da lista é '+ this.itens.nome);
				console.log('Sua lista salva é', val);
				let alert = this.alertCtrl.create({
					title: this.itens.nome,
					subTitle: this.itens.produtos[i],
					buttons: ['OK']
				});
				alert.present();
			});
		}
		
	}

	cadastrar1(nome: string) {
		
		//this.itens.produtos.splice(0, this.itens.produtos.length);

		if(this.arroz)
			this.itens.produtos.push("arroz");		
		if(this.feijao)
			this.itens.produtos.push("feijao");		
		if(this.oleo)
			this.itens.produtos.push("oleo");
		if(this.acucar)
			this.itens.produtos.push("açúcar");
		if(this.sal)
			this.itens.produtos.push("sal");
		if(this.cafe)
			this.itens.produtos.push("cafe");
		if(this.leiteempo)
			this.itens.produtos.push("leite em pó");
		if(this.macarrao)
			this.itens.produtos.push("macarrão");
		if(this.extratoTomate)
			this.itens.produtos.push("extrato de tomate");
		if(this.tempero)
			this.itens.produtos.push("tempero completo");
		if(this.achocolatado)
			this.itens.produtos.push("Achocolatado em pó");
		if(this.molhoTomate)
			this.itens.produtos.push("molho de tomate");
		if(this.farinhaTrigo)
			this.itens.produtos.push("farinha de trigo");
		if(this.gelatina)
			this.itens.produtos.push("gelatina");
		if(this.biscoito)
			this.itens.produtos.push("biscoito");
		if(this.milho)
			this.itens.produtos.push("milho verde");
		
		
		this.itens.nome = nome;
		/*
		if(this.itens.nome == null){
			console.log('Null');
			this.itens = new Itens();
			return;
		}
		*/
		
		this.lista.push(this.itens).then(() =>{
			this.itens = new Itens();
		});
	}

	cadastrar() {

		var nome: string;

		let prompt = this.alertCtrl.create({
			title: 'Nova lista de compras',
			message: "Digite o nome da sua lista de compras",
			inputs: [{
				name: 'title',
				placeholder: 'Nome'
			}],
			buttons: [{
				text: 'Cancelar',
				handler: data => {
					nome = null;
					console.log('Cancel clicked');
				}
			},
			{
				text: 'Salvar',
				handler: data => {
					console.log('Save clicked');
					nome = data.title;
					this.cadastrar1(nome);
				}
			}
			]
		});
		prompt.present();

	}
	
}
