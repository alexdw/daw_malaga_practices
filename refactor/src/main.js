export const markToCharge = (t) => {

    // Transations processed
    var list = [];

    var d = new Date();

    if (t.length == 0) {
        return [];
    }else{
        var a = 0
        while (a<t.length){
            // Tra is the transation in this loop :_(
            var tra = t[a];
            var course = tra["course"]
            if (course["assistants"] >= course["min_assistants"] || course["is_cancelable"] == false) {

                if ((course["status"] == "AVAILABLE" &&
                        tra["status"] == "PENDING" &&
                        tra["type"] == "CHARGE") ||
                    (course["is_cancelable"] &&
                        tra["status"] == "PENDING" &&
                        tra["type"] == "CHARGE") &&
                        tra["user_profile"] == "MASTER") {

                    if (tra["total_amount"] > 0) {

                        var chargeResult = executePayment(tra, d);

                        if (chargeResult) {
                            switch (chargeResult["status"]) {
                                case "SUCCESS":
                                    tra = changeStatus(tra, "CHARGED", d, chargeResult);
                                    list.push(tra)
                                    break;
                                default:
                                    tra = changeStatus(tra, "ERROR", d, chargeResult);
                            }
                        } else {
                            tra = changeStatus(tra, "ERROR", d, "payment_charge_error");
                        }

                    } else if(tra["total_amount"] == 0) {
                        tra = changeStatus(tra, "CHARGED", d, "first_course_discount");
                        list.push(tra);
                    }

                }
            } 
            a++
        }
    }

    return list
}

function executePayment(tra, when){
    return {
        status: "SUCCESS"
    };
}

function changeStatus(t, newStatus, when, payload){
    t["status"] = newStatus
    t["status_at"] = when;
    t["payload"] = payload;

    return t;
}