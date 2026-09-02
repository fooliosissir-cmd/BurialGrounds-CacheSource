/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2781

function cs2_2781(): string {
    let str0: string = "";
    let int0: number = dateRuneday();

    let [int1, int2, int3] = userDetailLobbyMembership();
    int1 = int1 / 1440 - 11745;
    let int4: number = userDetailLobbyCcexpiry();
    let int5: number = userDetailLobbyGraceexpiry();
    let int6: number = int5 - int0;

    if (int5 <= int4 || int6 < 0) {
        int6 = 0;
    }

    if (int4 != 0 && int1 + int0 >= int4 && varc_1315 != int0 && int1 <= 14) {
        if (int1 <= 7) {
            if (int1 <= 3) {
                if (int1 <= 1) {
                    if (int1 == 0) {
                        if (int6 > 0 && int6 <= 14) {
                            if (int6 <= 7) {
                                if (int6 <= 3) {
                                    if (int6 == 1) {
                                        str0 = "Your credit card has expired and your membership credit has run out. Please re-subscribe using a new credit card to restart your membership." + "<br>" + "<br>" + "If you renew today, you will pay the lower 'loyalty' rate. After this, your discount will no longer be available.";
                                        varc_1316 = int0;
                                    } else if (varc_1316 + 2 < int0) {
                                        str0 = "Your credit card has expired and your membership credit has run out. Please re-subscribe using a new credit card to restart your membership." + "<br>" + "<br>" + "If you renew within the next " + tostring(int6) + " days, you will pay the lower 'loyalty' rate. After this, your discount will no longer be available.";
                                        varc_1316 = int0;
                                    }
                                } else if (varc_1316 + 4 < int0) {
                                    str0 = "Your credit card has expired and your membership credit has run out. Please re-subscribe using a new credit card to restart your membership." + "<br>" + "<br>" + "If you renew within the next " + tostring(int6) + " days, you will pay the lower 'loyalty' rate. After this, your discount will no longer be available.";
                                    if (int6 == 7) {
                                        varc_1316 = int0;
                                    } else {
                                        varc_1316 = int0 - (7 - int6);
                                    }
                                }
                            } else if (varc_1316 + 7 < int0) {
                                str0 = "Your credit card has expired and your membership credit has run out. Please re-subscribe using a new credit card to restart your membership." + "<br>" + "<br>" + "If you renew within the next " + tostring(int6) + " days, you will pay the lower 'loyalty' rate. After this, your discount will no longer be available.";
                                if (int6 == 14) {
                                    varc_1316 = int0;
                                } else {
                                    varc_1316 = int0 - (14 - int6);
                                }
                            }
                        }
                    } else {
                        if (int6 > 0) {
                            str0 = "Your credit card has expired. Please re-subscribe using a new credit card to continue your membership." + "<br>" + "<br>" + "If you renew within the next " + tostring(int6) + " days, you will continue paying your lower 'loyalty' rate. After this, your discount will no longer be available.";
                        } else {
                            str0 = "Your credit card has expired. Please re-subscribe using a new credit card to continue your membership.";
                        }
                        varc_1315 = int0;
                    }
                } else if (varc_1315 + 2 < int0) {
                    if (int6 > 0) {
                        str0 = "Your credit card has expired. Please re-subscribe using a new credit card to continue your membership." + "<br>" + "<br>" + "If you renew within the next " + tostring(int6) + " days, you will continue paying your lower 'loyalty' rate. After this, your discount will no longer be available.";
                    } else {
                        str0 = "Your credit card has expired. Please re-subscribe using a new credit card to continue your membership.";
                    }
                    if (int1 == 3) {
                        varc_1315 = int0;
                    } else {
                        varc_1315 = int0 - (3 - int1);
                    }
                }
            } else if (varc_1315 + 4 < int0) {
                if (int6 > 0) {
                    str0 = "Your credit card has expired. Please re-subscribe using a new credit card to continue your membership." + "<br>" + "<br>" + "If you renew within the next " + tostring(int6) + " days, you will continue paying your lower 'loyalty' rate. After this, your discount will no longer be available.";
                } else {
                    str0 = "Your credit card has expired. Please re-subscribe using a new credit card to continue your membership.";
                }
                if (int1 == 7) {
                    varc_1315 = int0;
                } else {
                    varc_1315 = int0 - (7 - int1);
                }
            }
        } else if (varc_1315 + 7 < int0) {
            if (int6 > 0) {
                str0 = "Your credit card has expired. Please re-subscribe using a new credit card to continue your membership." + "<br>" + "<br>" + "If you renew within the next " + tostring(int6) + " days, you will continue paying your lower 'loyalty' rate. After this, your discount will no longer be available.";
            } else {
                str0 = "Your credit card has expired. Please re-subscribe using a new credit card to continue your membership.";
            }
            if (int1 == 14) {
                varc_1315 = int0;
            } else {
                varc_1315 = int0 - (14 - int1);
            }
        }
    }
    return str0;
}
