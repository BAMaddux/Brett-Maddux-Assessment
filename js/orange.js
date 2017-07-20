$("#navSchedule").click(function(){
    var scheduleTop = ($(window).height() - $("#schedulePopUp").height()) / 2;
    var scheduleLeft = ($(window).width() - $("#schedulePopUp").width()) / 2;
    var closeHeight = ($(window).height()) / 25;
    var closeTop = scheduleTop - (closeHeight / 2);
    var closeLeft = scheduleLeft + $("#schedulePopUp").width() - (closeHeight / 4);
    $("#schedulePopUp").css("top", scheduleTop+"px");
    $("#schedulePopUp").css("left", scheduleLeft+"px");
    $("#closeSchedule").css("height", closeHeight+"px");
    $("#closeSchedule").css("top", closeTop+"px");
    $("#closeSchedule").css("left", closeLeft+"px");
    $("#schedulePopUp").fadeIn(1000);
})

$("#closeSchedule").click(function(){
    $("#schedulePopUp").fadeOut(1000);
})
