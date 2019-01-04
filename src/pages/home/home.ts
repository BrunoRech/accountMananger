import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { ContaProvider } from '../../providers/conta/conta';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ContaProvider]
})

export class HomePage {
  listaContas = new Array<any>();
  valorConta;
  conta = {
    numero: "",
    agencia: "",
    saldo: 0,
    desc: ""
  }

  total = {
    totalSaldo: 0
  }

  loader: any;
  refresher: any;
  isRefreshing: boolean = false;
  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    private contaProv: ContaProvider) {
  }

  openLoading() {//animacao do loading
    this.loader = this.loadingCtrl.create({
      content: "Carregando contas...",
    });
    this.loader.present();
  }

  closeLoading() {
    this.loader.dismiss();
  }

  doRefresh(refresher: any) {
    this.refresher = refresher;
    this.isRefreshing = true;
    this.carregarContas();
  }

  sumSaldo() {
    for (let conta of this.listaContas) {
      this.total.totalSaldo += conta.saldo;
      //console.log(this.total.totalSaldo);
    }
  }

  ionViewDidLoad() {
    this.carregarContas();
  }

  carregarContas() {
    this.openLoading();
    //teste
    this.listaContas = [this.conta = {
      numero: "03229-11",
      agencia: "1234-5",
      saldo: -60000,
      desc: "Banco do Brasil"
    },this.conta = {
      numero: "3133-3",
      agencia: "1112-5",
      saldo: -10000,
      desc: "Banco Unisul"
    },this.conta = {
      numero: "8273-13",
      agencia: "1425-9",
      saldo: 30000,
      desc: "Itau"
    },this.conta = {
      numero: "24819-7",
      agencia: "1341-1",
      saldo: 20000,
      desc: "Bradesco"
    },];
    this.sumSaldo();
    //fim teste

    //aqui vai o update das contas
    /*this.contaProv.getContas().subscribe(
      data => {
        console.log(data);
        this.listaContas = (data as any).results;
        console.log(this.listaContas);
        this.sumSaldo();
        this.closeLoading();
        if (this.isRefreshing) {
          this.refresher.complete();
          this.isRefreshing = false;
        }
      },
      error => {
        console.log(error);
        this.closeLoading();
      }
    )*/


    ///////////

    //deletar isso depois
    this.closeLoading();
    if (this.isRefreshing) {
      this.refresher.complete();
      this.isRefreshing = false;
      
      //////////
    }

  }
}
