// @flow
import { IGraphics } from '@/specs/Graphics';
import { IVector2 } from '@/specs/Vector2';
import type { Resource } from '@/specs/Types';
import Graphics from './Graphics';
import SceneManager from './SceneManager';

class Game {
  static Graphics: IGraphics;
  mSceneManager: SceneManager;

  constructor() {
    this.mSceneManager = new SceneManager();
  }

  init(size: IVector2, view : HTMLCanvasElement, options : Object) : void {
    Game.getGraphics().init(size, view, options);
  }

  static getGraphics() : IGraphics {
    return Game.Graphics;
  }

  getSceneManager() : SceneManager {
    return this.mSceneManager;
  }

  loadResources(resource: Resource, onProgress: Function, onDone: Function) : void {
    const graphics : Graphics = (Game.getGraphics() : any);
    graphics.getTextureFactory()
      .load(resource, onProgress, onDone);
  }

  update(deltaTime : number) : void {
    this.mSceneManager.update(deltaTime);
    Game.getGraphics().render();
  }
}

Game.Graphics = new Graphics();

export default Game;
