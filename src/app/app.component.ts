import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
    { title: 'Navegação', url: '/navegacao', icon: 'code' },
    { title: 'Botões', url: '/botao', icon: 'construct' },
    { title: 'Botão1', url: '/botao1', icon: 'construct' },
    { title: 'Botão2', url: '/botao2', icon: 'construct' },
    { title: 'Botão3', url: '/botao3', icon: 'construct' },
    { title: 'Botão4', url: '/botao4', icon: 'construct' },
    { title: 'Botão5', url: '/botao5', icon: 'construct' },
    { title: 'Navegação2', url: '/navegacao2', icon: 'code' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
