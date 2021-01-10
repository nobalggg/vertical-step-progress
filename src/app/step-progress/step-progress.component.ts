import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-step-progress",
  templateUrl: "./step-progress.component.html",
  styleUrls: ["./step-progress.component.css"],
})
export class StepProgressComponent implements OnInit {
  data: any;

  constructor() {}

  ngOnInit() {
    this.data = [
      {
        eventName: "UAT",
        eventDate: "23 May,2020",
      },
      {
        eventName: "Round One Testing",
        eventDate: "23 May,2020",
      },
      {
        eventName: "Round Two testing",
        eventDate: "23 May,2020",
      },
      {
        eventName: "Production",
        eventDate: "23 May,2020",
      },
    ];
  }

  ngAfterViewInit() {
    this.drawCanvas();
  }

  getStyles() {
    return {
      "grid-template-rows": "repeat(" + this.data.length + ", 1fr)",
      display: "grid",
      "place-items": "center",
      height: "100%",
      width: "100%",
      "grid-template-columns": "repeat(3, 1fr)",
    };
  }

  getProgressBarStyles() {
    return {
      "grid-row": "1 /span " + this.data.length,
      "grid-column": "2 / span 1",
      "background-color": "white",
      height: "100%",
    };
  }

  drawCanvas() {
    let circles = [];
    let numberOfItems = this.data.length;
    let canvas = <HTMLCanvasElement>document.getElementById("canvas");
    let context = canvas.getContext("2d");
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    let centerX = canvas.width / 2;

    const radius = 10;
    let centerY = canvas.height / 8 + radius / 2;
    let lineStarting = centerY;
    let lineEnding = undefined;
    let gap = canvas.height / 4;

    for (let i = 0; i < numberOfItems; i++) {
      if (i == numberOfItems - 1) {
        lineEnding = centerY;
      }
      context.beginPath();
      context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
      circles.push({ x: centerX, y: centerY });
      context.fillStyle = "grey";
      context.fill();
      context.lineWidth = 4;
      context.strokeStyle = "grey";
      // context.stroke();
      centerY = centerY + gap;
    }

    context.beginPath();
    context.moveTo(centerX, lineStarting);
    context.lineTo(centerX, lineEnding);
    context.stroke();

    let y = lineStarting;
    let circleIndex = 0;
    animate();

    function animate() {
      if (y < lineEnding) {
        requestAnimationFrame(animate);
        y = y + 2;
        draw(y);
        if (y >= circles[circleIndex].y) {
          context.beginPath();
          context.arc(
            centerX,
            circles[circleIndex].y,
            radius,
            0,
            2 * Math.PI,
            false
          );
          circles.push({ x: centerX, y: centerY });
          context.fillStyle = "blue";
          context.fill();
          circleIndex++;
        }
      }
    }

    function draw(y) {
      context.strokeStyle = "blue";
      context.beginPath();
      context.moveTo(centerX, lineStarting);
      context.lineTo(centerX, y);
      context.stroke();
    }
  }
}
