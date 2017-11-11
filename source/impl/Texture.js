// @flow

import * as PIXI from 'pixi.js';
import { ITexture } from '@/specs/Texture';

class Texture implements ITexture {
  mPixiTexture : PIXI.Texture;

  constructor(pixiTexture : PIXI.Texture, rectangle : PIXI.Rectangle = null) {
    this.mPixiTexture = pixiTexture;
    if (rectangle) {
      this.mPixiTexture.frame = rectangle;
    }
  }

  setSource(source : HTMLImageElement) : void {
    const baseTexture = new PIXI.BaseTexture(source, PIXI.settings.SCALE_MODE, 1);
    this.mPixiTexture = new PIXI.Texture(baseTexture);
  }

  getSubTexture(x: number, y: number, width: number, height: number) : ITexture {
    return new Texture(this.mPixiTexture, new PIXI.Rectangle(x, y, width, height));
  }

  getWidth() : number {
    return this.mPixiTexture.realWidth;
  }

  getHeight() : number {
    return this.mPixiTexture.realHeight;
  }

  getPixiTexture() {
    return this.mPixiTexture;
  }
}

export default Texture;
