import Phaser from 'phaser'
import { initGamesValue } from "../services/storage.service";
import { W_SCREEN, H_SCREEN } from './../main';

export default class PlayGameScene extends Phaser.Scene {
    constructor() {
        super('PlayGameScene')
    }

    preload() {
        this.load.spritesheet('pac-man-hd',
            'spritesheet/pac-man-hd.png',
            {
                frameWidth: 50,
                frameHeight: 50
            }
        );

        this.load.spritesheet('pacman-test',
            'spritesheet/pacman-left.png',
            {
                frameWidth: 30,
                frameHeight: 30
            }
        );

        this.load.atlas('pac-man-left', 'spritesheet/pac-man-hd.png', 'assets/animation.json');


    }

    create() {

        this.add.sprite(150, 150, 'pac-man-left')
        //this.add.image(10 , 10, 'pac-man-hd').setScale(1);

        let frames = this.anims.generateFrameNumbers('pacman-test', { frames: [0, 1, 2, 3, 4, 5] });
        console.log(frames);
        this.anims.create({
            key: 'pac-man-left-an',
            frames: frames,
            frameRate: 12,
            repeat: -1,
        })


        this.pacmanLeft = this.add.sprite(100, 100, 'pac-man-test')

        this.pacmanLeft.play("pac-man-left-an", true)

    }
}
