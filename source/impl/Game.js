// @flow
import { IGraphics } from '@/specs/Graphics';
import { ICamera } from '@/specs/Camera';
import { IVector2 } from '@/specs/Vector2';
import type { Resource } from '@/specs/Types';
import Graphics from './Graphics';
import SceneManager from './SceneManager';
import Vector2 from './Vector2';
import Camera from './Camera';

class Game {
  static Graphics: IGraphics;
  static Camera: ICamera;
  mSceneManager: SceneManager;

  constructor() {
    this.mSceneManager = new SceneManager();
  }

  init(size: IVector2, view : HTMLCanvasElement, options : Object) : void {
    Game.getGraphics().init(size, view, options);
    Game.getCamera().init(
      new Vector2(0.0, 0.0),
      size,
      new Vector2(0.0, 0.0) // bounds are not in use
    );
  }

  static getGraphics() : IGraphics {
    return Game.Graphics;
  }

  static getCamera () : ICamera {
    return Game.Camera;
  }

  getSceneManager() : SceneManager {
    return this.mSceneManager;
  }

  loadResources(resources: Array<Resource>, onProgress: Function, onDone: Function) : void {
    const graphics : Graphics = (Game.getGraphics() : any);
    graphics.getTextureFactory()
      .load(resources, onProgress, onDone);
  }

  update(deltaTime : number) : void {
    this.mSceneManager.update(deltaTime);
    Game.getGraphics().render();
  }
}

Game.Graphics = new Graphics();
Game.Camera = new Camera();

export default Game;
