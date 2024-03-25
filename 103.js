function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500, 500);
    classifier = ml5.imageClassifier('MobileNet',modelLoaded);
  }

  
  