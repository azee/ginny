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

    //String to array
    $("#string-to-array-example").html(JSON.stringify(Ginny.stringToArray("someEmail@devnull.com, anotherEmail@devnull.com, oneMoreEmail@devnull.com")));

    //Array to string
    $("#array-to-string-example").html(Ginny.arrayToString(["myLogin","herLogin","hisLogin"]));

    //Array to string
    $("#limited-string-example").html(Ginny.getLimitedString("Here is a long string need to be cut by 30", 30));

    //Add unique string
    $("#unique-string-to-array-example").html(Ginny.addUniqueStringToArray("String3", ["String1", "String2", "String3"]));
    $("#unique-string-to-array-example1").html(Ginny.addUniqueStringToArray("String4", ["String1", "String2", "String3"]));

});