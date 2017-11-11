// @flow
import { IVector2 } from '@/specs/Vector2';
import type { Resource } from '@/specs/Types';
import Game from './Game';
import SceneManager from './SceneManager';

class ExternalGame {
  mGame: Game;

  constructor(size: IVector2, view : HTMLCanvasElement, options : Object) {
    this.mGame = new Game();
    this.mGame.init(size, view, options);
  }

  loadResources(resource: Resource, onProgress: Function, onDone: Function) : void {
    this.mGame.loadResources(resource, onProgress, onDone);
  }

  getSceneManager() : SceneManager {
    return this.mGame.getSceneManager();
  }

  update(deltaTime: number) {
    this.mGame.update(deltaTime);
  }
}

export default ExternalGame;
