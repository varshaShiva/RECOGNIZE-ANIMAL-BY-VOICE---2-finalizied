function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/c9f38o0uK/model.jason", modelReady);
}
function modelReady(){
    classifier.classify(gotResult);
}
