import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { INavigation } from '../interfaces/navigation.interface';


@Injectable({
  providedIn: 'root'
})
export class TransfertService {
  public navigation = new BehaviorSubject<INavigation[]>([])
  public navCust = this.navigation.asObservable()
  // public background = new BehaviorSubject<String>('');
  // public bgCust = this.background.asObservable()
  private renderer: Renderer2
  constructor(private rendererFactory: RendererFactory2) { 
    this.renderer = rendererFactory.createRenderer(null, null)
  }

  setBackground(background: String) {
    if(background === "none") 
      this.renderer.setStyle(document.body, "background-image", `none`);
    else 
      this.renderer.setStyle(document.body, "background-image", `url(${background})`);
  }

  setNavigation(nav: INavigation[]) {
    this.navigation.next(nav)
  }
}




