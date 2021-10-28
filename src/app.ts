import "phaser";
import { GameScene } from "./gameScene";
import { ScoreScene } from "./scoreScene";
import { WelcomeScene } from "./welcomeScene";

// https://phaser.discourse.group/t/how-use-phaser-3-17s-new-config-object-in-typescript/2548
// GameConfig not found then use Phaser.Types.Core.GameConfig inplace of GameConfig

const config: Phaser.Types.Core.GameConfig = {
  // title: "Starfall",
  // width: 800,
  // height: 600,
  // parent: "game",
  // backgroundColor: "#18216D"
  title: "Starfall",
  width: 800,
  height: 600,
  parent: "game", //id="game" in index.html
  scene: [WelcomeScene, GameScene, ScoreScene],
  physics: {
    default: "arcade",
    arcade: {
      debug: false
    }
  },
  backgroundColor: "#000033"
};
export class StarfallGame extends Phaser.Game {
  // Phaser.Types.Core.GameConfig
  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config);
  }
}
window.onload = () => {
  var game = new StarfallGame(config);
};
