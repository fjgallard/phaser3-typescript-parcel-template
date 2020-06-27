export class GameSprite extends Phaser.Physics.Arcade.Sprite {
  
  constructor(scene: Phaser.Scene, x: number, y: number, key: string) {
    super(scene, x, y, key);
    scene.sys.updateList.add(this);
    scene.sys.displayList.add(this);

    scene.physics.world.enable(this);

    this.scale = 0.5;
    this.enableBody(true, x, y, true, true);
  }
}