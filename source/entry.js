import ExternalGame from '@/impl/ExternalGame';
import Vector2 from '@/impl/Vector2';
import Scene from '@/impl/Scene';
import Component from '@/impl/Component';
import Entity from '@/impl/Entity';
import { IGraphics } from '@/specs/Graphics';
import { IVector2 } from '@/specs/Vector2';
import { ISprite } from '@/specs/Sprite';
import type { TextureId } from '@/specs/Types';

const Game = ExternalGame;

export default {
  Game,
  Vector2,
  Scene,
  Component,
  Entity,
  IGraphics,
  IVector2,
  ISprite,
  TextureId,
};
