import Phaser from 'phaser'
import { initGamesValue } from "../services/storage.service";
import { W_SCREEN, H_SCREEN } from '../main';


export default class PlayGameScene extends Phaser.Scene {
    

    
    constructor() {
        super('PlayGameScene');
    }
        

    preload() {
        this.load.image('tutorial', 'images/maps/tutorial/Total Feasty Fuchsia.png');
        this.load.tilemapTiledJSON('map', 'images/maps/tutorial.json');

        this.pacmanSS = this.load.spritesheet('pacman-test',
            'spritesheet/pacman-right.png',
            {
                frameWidth: 34,
                frameHeight: 34
            }
        );

        this.load.atlas('pac-man-right', 'spritesheet/pac-man-hd.png', 'assets/animation.json');


    }

    create() {

        this.map = this.make.tilemap({key: 'map'});

        let frames = this.anims.generateFrameNumbers('pacman-test');
        console.log(frames);
        this.anims.create({
            key: 'pac-man-right-an',
            frames: frames,
            frameRate: 16,
            repeat: -1,
        })


        this.pacmanLeft = this.add.sprite(200, 200, 'pac-man-test')

        this.pacmanLeft.play("pac-man-right-an", true)

        
    }

    update(){
        

    }
}
