export class GameImage extends Phaser.GameObjects.Image {
  constructor(scene: Phaser.Scene, x: number, y: number, key: string) {
    super(scene, x, y, key);
    // scene.sys.updateList.add(this);
    scene.sys.displayList.add(this);
  }
}