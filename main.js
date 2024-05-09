noseX = 0;
noseY = 0;


function preload()
{
    clownNose = loadImage('https://i.postimg.cc/brxtYS11/cone-clown-nose.png');
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x - 30;
        noseY = results[0].pose.nose.y - 30;
        console.log("nariz x = " + results[0].pose.nose.x);
        console.log("nariz y = " + results[0].pose.nose.y);
    }

}

function modelLoaded()
{
    console.log('PoseNet foi carregado!');
}

function draw()
{
    image(video, 0, 0, 300, 300);
    image(clownNose, noseX, noseY, 70, 70);
}

function takeSnapshot()
{
    save('myFilterImage.png');

}