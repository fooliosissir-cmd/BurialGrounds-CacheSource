/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1323

function cs2_1323(intArg0: component, intArg1: component, intArg2: component, intArg3: component): void {
    if (invGetobj(439, 0) != -1) {
        ifSetHide(false, intArg0);
        ifSetObjectNonum(invGetobj(439, 0), 1, intArg0);
        ifSetOpBase("<col=ff9040>" + ocName(invGetobj(439, 0)), intArg0);
    } else {
        ifSetHide(true, intArg0);
    }

    if (invGetobj(439, 1) != -1) {
        ifSetHide(false, intArg1);
        ifSetObjectNonum(invGetobj(439, 1), 1, intArg1);
        ifSetOpBase("<col=ff9040>" + ocName(invGetobj(439, 1)), intArg1);
    } else {
        ifSetHide(true, intArg1);
    }

    if (invGetobj(439, 2) != -1) {
        ifSetHide(false, intArg2);
        ifSetObjectNonum(invGetobj(439, 2), 1, intArg2);
        ifSetOpBase("<col=ff9040>" + ocName(invGetobj(439, 2)), intArg2);
    } else {
        ifSetHide(true, intArg2);
    }

    if (invGetobj(439, 3) != -1) {
        ifSetHide(false, intArg3);
        ifSetObjectNonum(invGetobj(439, 3), 1, intArg3);
        ifSetOpBase("<col=ff9040>" + ocName(invGetobj(439, 3)), intArg3);
    } else {
        ifSetHide(true, intArg3);
    }
}
