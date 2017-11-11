// @flow
import Scene from './Scene';

class SceneManager {
  mCurrentScene: ?Scene;

  constructor() {
    this.mCurrentScene = null;
  }

  update(deltaTime: number) : void {
    if (this.mCurrentScene) {
      this.mCurrentScene.update(deltaTime);
    }
  }

  setScene(scene: Scene) {
    if (this.mCurrentScene) {
      this.mCurrentScene.destroyed();
    }
    this.mCurrentScene = scene;
    this.mCurrentScene.mounted();
  }
}

export default SceneManager;
