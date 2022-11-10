Webcam.set({
    width:350,
    height:300,
    image_format : 'png' ,
    png_quality:90
});

camera =document.getElementById("camera");

Webcam.attach( '#camera' );

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/VxEN8ekNK/model.json',modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}

function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}



function gotResult(error, results) 
 {if (error) {
 console.error(error); }
 else { console.log(results);
document.getElementById("result_emotion_name").innerHTML = results[0].label;

prediction_1 = results[0].label;


if(results[0].label == "Proper") 
{ document.getElementById("update_emoji").innerHTML = "You are wearing your mask properly"; }

 if(results[0].label == "Improper") 
 { document.getElementById("update_emoji").innerHTML = "You are not wearing your mask properly"; } 

 if(results[0].label == "No mask") 
 { document.getElementById("update_emoji").innerHTML = "You are not wearing a mask"; } 

}};
