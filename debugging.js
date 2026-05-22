function FGetNumericMonth(month) {

    switch (month) {
        case "Jan":
             return ("01");
        case "Feb":
            return ("02");
        case "Mar":
            return ("03");
        case "Apr":
            return ("04");
        case "May":
            return ("05");
        default:
            return ("00");            
    }
}

console.log(typeof(FGetNumericMonth("hhh")));


