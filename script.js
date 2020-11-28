var myData = {
    1: {
        imageUrl: "bill.jpg",
        text: "Success is a lousy teacher. It seduces smart people into thinking they can't lose."
    }, 
    2: {
        imageUrl: "mark.jpg",
        text: "The biggest risk is not taking any risk. In a world that is changing really quickly, the only strategy that is guaranteed to fail is not taking risks."
    }, 
    3: {
        imageUrl: "elon.jpg",
        text: "If you get up in the morning and think the future is going to be better, it is a bright day. Otherwise, it's not."
    }, 
    4: {
        imageUrl: "jeff.jpg",
        text: "If you double the number of experiments you do per year you’re going to double your inventiveness."
    }, 
    5: {
        imageUrl: "stevejobs.jpg",
        text: "My favourite things in life don't cost any money. It's really clear that the most precious resource we all have is time."
    }
};

function changeImage(){
    var randomNumber = Math.floor((Math.random() * 10) + 1);
    document.getElementById("background").style.background = "url('"+myData[randomNumber].imageUrl+"')";
    document.getElementById("text-box").innerHTML = myData[randomNumber].text;
}
document.getElementById("btn").addEventListener("click",changeImage);