import { Component, ElementRef, Inject, ViewChild } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './app-game.component.html',
  styleUrls: ['./app-game.component.scss'],
  providers: [{ provide: Window, useValue: window }],
})
export class AppGameComponent {
  constructor(@Inject(Window) private readonly window: Window) {}

  @ViewChild('gameCanvas', { static: false }) canvas!: ElementRef;

  public ctx!: CanvasRenderingContext2D | null;
  public player = { x: 175, y: 450, width: 50, height: 10, speed: 20 };
  public fallingObject = {
    x: Math.random() * 350,
    y: 0,
    width: 20,
    height: 20,
    speed: 3,
  };
  public score = 0;

  ngOnInit(): void {
    document.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft' && this.player.x > 0)
        this.player.x -= this.player.speed;
      if (
        event.key === 'ArrowRight' &&
        this.player.x < this.canvas!.nativeElement.width - this.player.width
      )
        this.player.x += this.player.speed;
    });
  }

  ngAfterViewInit(): void {
    this.canvas.nativeElement.width = 500; // Set width dynamically
    this.canvas.nativeElement.height = 600; // Set height dynamically
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.gameLoop(); // Start game loop here
  }

  update(): void {
    this.fallingObject.y += this.fallingObject.speed;
    if (this.fallingObject.y > this.canvas.nativeElement.height) {
      this.fallingObject.y = 0;
      this.fallingObject.x = Math.random() * 350;
    }

    if (
      this.fallingObject.y + this.fallingObject.height >= this.player.y &&
      this.fallingObject.x >= this.player.x &&
      this.fallingObject.x <= this.player.x + this.player.width
    ) {
      this.score++;
      this.fallingObject.y = 0;
      this.fallingObject.x = Math.random() * 350;
    }
  }

  draw(): void {
    this.ctx!.clearRect(
      0,
      0,
      this.canvas!.nativeElement.width,
      this.canvas!.nativeElement.height
    );
    this.ctx!.fillStyle = 'blue';
    this.ctx!.fillRect(
      this.player.x,
      this.player.y,
      this.player.width,
      this.player.height
    );
    this.ctx!.fillStyle = 'red';
    this.ctx!.fillRect(
      this.fallingObject.x,
      this.fallingObject.y,
      this.fallingObject.width,
      this.fallingObject.height
    );
    this.ctx!.fillStyle = 'black';
    this.ctx!.font = '25px serif';
    this.ctx!.fillText('Score: ' + this.score, 10, 20, 50);
  }

  gameLoop() {
    this.update();
    this.draw();
    this.window.requestAnimationFrame(() => this.gameLoop());
  }
}
