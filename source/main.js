// @flow

import ExternalGame from '@/impl/ExternalGame';
import Vector2 from '@/impl/Vector2';
import Scene from '@/impl/Scene';
import Component from '@/impl/Component';
import Entity from '@/impl/Entity';
import { IGraphics } from '@/specs/Graphics';
import { IVector2 } from '@/specs/Vector2';
import { ISprite } from '@/specs/Sprite';
import type { TextureId } from '@/specs/Types';

class Renderer extends Component {
  mSprite: ISprite;
  mGraphics: IGraphics;

  init() {
    this.mGraphics = this.getGraphics();
  }

  setTexture(textureId: TextureId) {
    this.mSprite = this.mGraphics.getSprite(textureId);

    this.mSprite.setPosition(new Vector2(this.getEntity().getX(), this.getEntity().getY()));
    this.mGraphics.drawSprite(this.mSprite);

    //this.mGraphics.test();
  }

  // eslint-disable-next-line
  update(deltaTime : number) : void {
    //const pos = new Vector2(this.getEntity().getX(), this.getEntity().getY());
    // center camera in player
    //this.mGraphics.getCamera().center(pos, this.mSprite.getDimensions());
    const pos = this.getEntity().getPosition();
    this.mSprite.setPosition(this.getCamera().getPositionInCameraCoords(pos));
  }
}

class MyEntity extends Entity {
  constructor(position : IVector2, size: IVector2) {
    super(position, size);
    const RendererComp = new Renderer(this);
    RendererComp.init();
    RendererComp.setTexture('cat');
    this.addComponent(RendererComp);
  }

  update(deltaTime: number) {
    ExternalGame.getCamera().center(this.getPosition(), this.getDimensions());

    super.update(deltaTime);
    // this.setX(this.getX() + 2); movement
  }
}

class MyScene extends Scene {
  mounted() {
    super.mounted();
    const entity = new MyEntity(new Vector2(0.0, 0.0), new Vector2(64.0, 64.0));
    this.addEntity(entity);
  }
}

const canvas : HTMLCanvasElement = (document.getElementById('app') : any);
const game = new ExternalGame(
  new Vector2(200, 200),
  canvas,
  {},
);

function GameLoop() {
  requestAnimationFrame(GameLoop);

  game.update(0.1);
}

game.loadResources([['cat', 'images/cat.png']], () => null, () => {
  console.log('Resources loaded!');

  const scene = new MyScene();

  game.getSceneManager().setScene(scene);

  GameLoop();
  // game.update(0.0);
});
