import Phaser from 'phaser';

import HelloWorldScene from './scenes/HelloWorldScene'
import SplashScreenScene from './scenes/SplashScreenScene'
import BeforeStartGameScene from './scenes/BeforeStartGameScene'
import PlayGameScene from './scenes/PlayGameScene'
import WinTitleScene from './scenes/WinTitleScene'
import GameOverScene from './scenes/GameOverScene'
import RankingScreenScene from './scenes/RankingScreenScene'
import SettingsScene from './scenes/SettingsScene'
import { initGamesValue } from "./services/storage.service";


export var W_SCREEN= 850;
export var H_SCREEN= 850;

initGamesValue();

const config = {
	type: Phaser.AUTO,
    width: W_SCREEN,
    height: H_SCREEN,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 }
		}
	},
	scene: [
		HelloWorldScene,
		SplashScreenScene, 
		BeforeStartGameScene,
		PlayGameScene,
		WinTitleScene,
		GameOverScene,
		RankingScreenScene,
		SettingsScene
		],
	// 		scale: {
	// 	mode: Phaser.Scale.ScaleModes.FIT,
	// 	autoCenter: Phaser.Scale.CENTER_BOTH
	// }
}

export default new Phaser.Game(config)
