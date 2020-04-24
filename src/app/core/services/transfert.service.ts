import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransfertService {
  // public background = new BehaviorSubject<String>('');
  // public bgCust = this.background.asObservable()
  private renderer: Renderer2
  constructor(private rendererFactory: RendererFactory2) { 
    this.renderer = rendererFactory.createRenderer(null, null)
  }

  setBackground(background: String) {
    this.renderer.setStyle(document.body, "background-image", `url(${background})`);
  }
}
