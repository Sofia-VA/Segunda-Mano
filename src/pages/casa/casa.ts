import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritosProvider } from '../../providers/favoritos/favoritos';

/**
 * Generated class for the CasaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-casa',
  templateUrl: 'casa.html',
})
export class CasaPage {
  casa = {} ;
  imgs = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public fav: FavoritosProvider) {
    this.casa= this.navParams.get('n');
    if (this.casa.ad.hasOwnProperty('images'))
    {
      this.imgs=this.casa.ad.images;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CasaPage');
  }

  favoritos(casa)
  {
    this.fav.addFavoritos(casa);
  }

}
