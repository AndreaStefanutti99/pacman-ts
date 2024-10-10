import Phaser from 'phaser'

export default class SplashScreenScene extends Phaser.Scene
{
	constructor()
	{
		super('SplashScreenScene')
	}

	preload()
    {
        console.log("entra in splash")
       
    }

    create()
    {
        const helloButton = this.add.text(100, 100, 'Go to play', { fill: '#0f0' });
        helloButton.setInteractive();
        
        helloButton.on('pointerdown', () => { this.scene.switch('PlayGameScene') });
   
    }

    update(){
        
        console.log("rientra in splash")
    }
}
