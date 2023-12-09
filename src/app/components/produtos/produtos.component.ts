import { Component } from '@angular/core';
import { CarrinhoService } from 'src/app/services/carrinho.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {

  constructor(
    public carrinhoService: CarrinhoService
  ){}

  public p: number = 1;

  public produtos: any[] = [

    {
      nome: 'Smartphone LG K62 LMK520BMW 64GB Câmera Quádrupla',
      valor: 1080,
      img: './assets/imgs/SmartphoneLG.jpg',
    },
    {
      nome: 'Smartphone Samsung Galaxy S23 5G SM-S911B 128GB Câmera Tripla',
      valor: 2300,
      img: './assets/imgs/SmartphonrSam.jpg',
    },
    {
      nome: 'Monitor Gamer LED 55 " Curva Samsung 4K Odyssey Ark LS55BG970NLXZD',
      valor: 13300,
      img: './assets/imgs/MonitorGamer.jpg',
    },
    {
      nome: 'Headset Gamer com Microfone Redragon Zeus X H510-RGB',
      valor: 250,
      img: './assets/imgs/Zeus.jpg',
    },
    {
      nome: 'Mouse Gamer Óptico USB Deathadder Essential - Razer',
      valor: 125,
      img: './assets/imgs/Razer.jpg',
    },
    {
      nome: 'Smart TV LED 60" LG ThinQ AI 4K HDR 60UQ8050PSB.AWZ',
      valor: 2812,
      img: './assets/imgs/SmartTV.jpg',
    },
    {
      nome: 'All in One Dell 24 5000 Intel Core i7 1255U 16 GB 512 23,8" Inspiron',
      valor: 4000,
      img: './assets/imgs/allinone.jpg',
    },
    {
      nome: 'Smart TV LED 50" Samsung Crystal 4K HDR',
      valor: 2099,
      img: './assets/imgs/SmartTV2.jpg',
    },
    {
      nome: 'Macbook Air Apple M1 8GB de RAM SSD 256 GB Tela de Retina 13,3" Mac OS A2337',
      valor: 6390,
      img: './assets/imgs/Macbook.jpg',
    },
    {
      nome: 'Macbook Apple Macbook Air MLY13BZ/A Apple M2 13,6" 8GB SSD 256 GB Mac OS Leitor Biométrico',
      valor: 7146,
      img: './assets/imgs/MacbookM2.jpg',
    },
    {
      nome: 'Geladeira Brastemp BRM44HK Frost Free Duplex 375 Litros cor Inox',
      valor: 2789,
      img: './assets/imgs/GeladeiraBras.jpg',
    },
    {
      nome: 'Geladeira Consul CRM44AB Frost Free Duplex 386 Litros',
      valor: 2546,
      img: './assets/imgs/GeladeiraCon.jpg',
    },
    {
      nome: 'Console Xbox Series S 512 GB Microsoft',
      valor: 2700,
      img: './assets/imgs/XboxSS.jpg',
    },
    {
      nome: 'Console Xbox Series X 1 TB Microsoft',
      valor: 4300,
      img: './assets/imgs/XboxSX.jpg',
    },
    {
      nome: 'Console Portátil Switch OLED com Joy Con Nintendo',
      valor: 2099.99,
      img: './assets/imgs/Nitendo.jpg',
    },
    {
      nome: 'Ar-Condicionado Portátil Philco 12000 BTUs Quente/Frio PAC12000QF5',
      valor: 3039,
      img: './assets/imgs/Arcondicionado.jpg',
    },
    {
      nome: 'Smartphone Apple iPhone 14 128GB Câmera Dupla',
      valor: 4454,
      img: './assets/imgs/Iphone14.jpg',
    },
    {
      nome: 'Smartphone Apple iPhone 13 128GB Câmera Dupla',
      valor: 3900,
      img: './assets/imgs/Iphone13.jpg',
    },
    {
      nome: 'Fogão de Piso Brastemp BFS6NCB 6 Bocas Acendimento Automático',
      valor: 2070,
      img: './assets/imgs/FogaoBras.jpg',
    },
    {
      nome: 'Cadeira Gamer Reclinável TGC12 ThunderX3',
      valor: 999,
      img: './assets/imgs/Cadeiragamer.jpg',
    },

  ]


}
