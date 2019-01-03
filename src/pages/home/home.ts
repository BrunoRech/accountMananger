import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { ContaProvider } from '../../providers/conta/conta';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[ContaProvider]
})
export class HomePage {
  conta = {
    numero: "03229-11",
    agencia: "1234-5",
    saldo: "130.000",
    desc: "Banco do Brasil",
    totalSaldo: "175.000"
  }
  
  loader;
  refresher;
  isRefreshing: boolean = false;
  constructor(public navCtrl: NavController, 
    public loadingCtrl: LoadingController/*,
    private contaProv: ContaProvider*/) {
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
  teste(){
    console.log("teste");
  }
  doRefresh(refresher:any) {
    this.refresher = refresher;
    this.isRefreshing = true;
    this.carregarContas();
  }

  sumSaldo(saldo){
    this.conta.totalSaldo += saldo;
  }

  carregarContas() {
    this.openLoading();
    //aqui vai o update das contas
    this.closeLoading();
    if(this.isRefreshing){
      this.refresher.complete();
      this.isRefreshing = false;
    }
  }
}
