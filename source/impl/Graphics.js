// @flow
import * as PIXI from 'pixi.js';
import { IGraphics } from '@/specs/Graphics';
import { ISprite } from '@/specs/Sprite';
import { ICamera } from '@/specs/Camera';
import { IVector2 } from '@/specs/Vector2';
import { ISpriteFactory } from '@/specs/SpriteFactory';
import { ITextureFactory } from '@/specs/TextureFactory';
import type { TextureId } from '@/specs/Types';
import Sprite from './Sprite';
import SpriteFactory from './SpriteFactory';
import TextureFactory from './TextureFactory';
import Texture from './Texture';
import Camera from './Camera';
import Vector2 from './Vector2';

class Graphics implements IGraphics {
  mRenderer: PIXI.WebGLRenderer;
  mContainer: PIXI.Container;
  mSpriteFactory: ISpriteFactory;
  mTextureFactory: ITextureFactory;
  mCamera: ICamera;

  render() : void {
    this.mRenderer.render(this.mContainer);
  }

  getCamera () : ICamera {
    return this.mCamera;
  }

  getSprite(textureId: TextureId) : ISprite {
    const texture : Texture =
      (this.mTextureFactory.getTexture(textureId) : any);
    return this.mSpriteFactory.createSprite(texture);
  }

  init(size: IVector2, view : HTMLCanvasElement, options : Object = {}) : void {
    this.mRenderer = PIXI.autoDetectRenderer(
      size.getX(),
      size.getY(),
      Object.assign(options, { view }),
    );
    this.mContainer = new PIXI.Container();
    this.mSpriteFactory = new SpriteFactory();
    this.mTextureFactory = new TextureFactory();
    this.mCamera = new Camera();
    this.mCamera.init(
      new Vector2(0.0, 0.0),
      size,
      new Vector2(0.0, 0.0) // bounds are not in use
    );
  }

  getSpriteFactory() : ISpriteFactory {
    return this.mSpriteFactory;
  }

  getTextureFactory() : ITextureFactory {
    return this.mTextureFactory;
  }

  drawSprite(sprite : ISprite) : void {
    const cSprite : Sprite = (sprite : any);
    this.mContainer.addChild(cSprite.getPixiSprite());
  }
}

export default Graphics;
