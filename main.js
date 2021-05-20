Webcam.set({width:310,
height:300,
image_format:'png',
png_quality:90,
constraints:{
    facingMode:"environment"
}});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function take_snapshot(){
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML='<img id="capture_img" src="'+data_uri+'"/>';
    }
    )
}
console.log("ml5 version",ml5.version);
classifier=ml5.imageClassifier('MobileNet',modelloaded);
function modelloaded(){
    console.log('modelloaded');
}
function check(){
    ing=document.getElementById('capture_img');
    classifier.classify(ing,got_result);
}
function got_result(error,result){
if (error){console.error(error)}
else{
    console.log(result);
    document.getElementById("object_name").innerHTML=result[0].label;
}
}