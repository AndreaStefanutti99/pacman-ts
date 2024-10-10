import Phaser from 'phaser'
import { initGamesValue } from "../services/storage.service";
import {W_SCREEN, H_SCREEN} from './../main'

export default class HelloWorldScene extends Phaser.Scene
{
	constructor()
	{
		super('HelloWorldScene')
	}

	preload()
    {

        this.load.image('nonintendo', 'images/nonintendo.png');
        this.load.image('background', 'images/background.png');

    }

    create()
    {
        //TODO: jump tu game : REMOVE NEXT
        this.scene.switch('PlayGameScene')


        this.add.image(400 , 400, 'background').setScale(1.2);
        // this.add.image(400, 300, 'sky')

        // const particles = this.add.particles('red')

        // const emitter = particles.createEmitter({
        //     speed: 100,
        //     scale: { start: 1, end: 0 },
        //     blendMode: 'ADD'
        // })

        // const logo = this.physics.add.image(400, 100, 'logo')

        // logo.setVelocity(100, 200)
        // logo.setBounce(1, 1)
        // logo.setCollideWorldBounds(true)
        const helloButton = 
        this.add.image(W_SCREEN/2 , H_SCREEN/2, 'nonintendo').setScale(0.2);
        helloButton.setInteractive();
        
        helloButton.on('pointerdown', () => { this.scene.switch('SplashScreenScene') });

    }
}
