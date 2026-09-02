/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3220

function cs2_3220(): void {
    let int0: number = createGetEmail();

    if (int0 == -3) {
        return;
    }
    ifSetOnTimer(noHook(""), Component.interface_673.component_673_26);
    let int1: number = 0;
    let str0: string = "accountappeal";
    let str1: string = "passwordchoice.ws";

    if (int0 == 2) {
        browserClose();
        cs2_2223();
    } else {
        switch (int0) {
            case -4:
            case -1:
            case 3:
                create_error("Error contacting server.", Component.interface_673.component_673_93);
                break;
            case -5:
                create_error("No response from server.", Component.interface_673.component_673_93);
                break;
            case 7:
                create_error("The server is currently very busy. Please try again shortly.", Component.interface_673.component_673_93);
                break;
            case 9:
            case 38:
                create_error("You cannot create an account at this time. Please try again later.", Component.interface_673.component_673_93);
                break;
            case 20:
                create_error("Email already in use. Try a different email or click " + "<u=ebe0bc>" + "here" + "</u>" + " to recover this account.", Component.interface_673.component_673_93);
                break;
            case 21:
                create_error("Please enter a valid Email address.", Component.interface_673.component_673_93);
                break;
            case 37:
                create_error("RuneScape has been updated. Please reload this page.", Component.interface_673.component_673_93);
                break;
            case 30:
                int1 = stringLength(varcstr_124);
                if (int1 < 5) {
                    create_error("Passwords must be at least 5 characters long.", Component.interface_673.component_673_83);
                } else if (int1 > 20) {
                    create_error("Passwords must be no more than " + tostring(20) + " characters long.", Component.interface_673.component_673_83);
                } else {
                    create_error("Please supply a valid password.", Component.interface_673.component_673_83);
                }
                break;
            case 34:
                create_error("Please supply a valid password.", Component.interface_673.component_673_83);
                break;
            case 31:
                create_error("Passwords may only contain letters and numbers.", Component.interface_673.component_673_83);
                break;
            case 32:
            case 33:
                create_error("Your password is too easy to guess.", Component.interface_673.component_673_83);
                break;
            default:
                create_error("Unexpected server response.", Component.interface_673.component_673_93);
                break;
        }
    }
    create_please_wait(0);
}
