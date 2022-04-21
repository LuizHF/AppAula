import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-navegacao2',
  templateUrl: './navegacao2.page.html',
  styleUrls: ['./navegacao2.page.scss'],
})
export class Navegacao2Page implements OnInit {

  constructor( private navegacaoController: NavController) { }

  ngOnInit() {
  }

    showPagenavegacao1(){
      this.navegacaoController.navigateForward('navegacao');
    }
}