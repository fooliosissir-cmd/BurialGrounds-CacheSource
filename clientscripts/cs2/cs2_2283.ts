/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2283

function cs2_2283(intArg0: boolean, intArg1: boolean): void {
    varcstr_123 = varcstr_122;

    if (stringLength(varcstr_122) <= 0) {
        create_error("Please enter your Email address here.", Component.interface_673.component_673_93);
        return;
    }

    if (create_check_email(varcstr_122) == 0) {
        create_error("Please enter a valid Email address.", Component.interface_673.component_673_93);
        return;
    }
    create_please_wait(1);
    createAvailablerequest(varcstr_122);
    ifSetOnTimer(hook(cs2_2284, "11", [intArg0, intArg1]), Component.interface_673.component_673_20);
}
