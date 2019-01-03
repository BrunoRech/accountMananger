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

  conta = {
    numero: "03229-11",
    agencia: "1234-5",
    saldo: "130.000",
    desc: "BANCO DO BRASIL"
  }

  total = {
    totalSaldo: "175.000"
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
    }
  }

  ionViewDidLoad() {
    this.carregarContas();
  }

  carregarContas() {
    this.openLoading();
    //aqui vai o update das contas
    /*this.contaProv.getContas().subscribe(
      data => {
        console.log(data);
        this.listaContas = (data as any).results;
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


    //deletar isso depois
    this.closeLoading();
    if (this.isRefreshing) {
      this.refresher.complete();
      this.isRefreshing = false;
    }

  }
}
