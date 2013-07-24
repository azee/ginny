$( document ).ready(function() {
    //Escaping html
    $("#escape-html-example").html(Ginny.escapeHtml("<a href='localhost'> <b> Some Link Text </b> </a>"));

    //Time To Date
    $("#time-to-date-example").html(Ginny.timeToDate(1000000000));

    //Time To Date No ime
    $("#time-to-date-no-time-example").html(Ginny.timeToDateNoTime(1000000000));

    //Time To Date No ime
    $("#time-to-date-no-time-example").html(Ginny.timeToDateNoTime(1000000000));

    //Time Passed
    $("#time-passed-example").html(Ginny.timePassed(100));
    $("#time-passed-example1").html(Ginny.timePassed(10000));
    $("#time-passed-example2").html(Ginny.timePassed(10000000));
});