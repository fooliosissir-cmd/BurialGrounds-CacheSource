/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,email_validation_timer]

function email_validation_timer(): void {
    cs2_5523();

    if (varbit_10243 == 1 || varbit_10243 == 2 || varbit_10243 == 8 || varbit_10243 == 9) {
        cs2_5519();
        ifSetText("There has been a failure in validating your email. An internal error has occurred. Please try again later.", Component.interface_906.component_906_299);
    } else if (varbit_10243 == 3) {
        cs2_5519();
        ifSetText("The email validation process will continue once we have ensured that your addresses are secure. To speed up this process, please submit codes from both of your email addresses.", Component.interface_906.component_906_299);
    } else if (varbit_10243 == 4) {
        cs2_5519();
        ifSetText("The email validation process will continue once we have ensured that your addresses are secure. To speed up this process, please submit codes from both of your email addresses.", Component.interface_906.component_906_299);
    } else if (varbit_10243 == 5 || varbit_10243 == 10 || varbit_10243 == 11) {
        cs2_5519();
        ifSetText("There has been a failure in validating your email. The submitted code was invalid. Please check and try again.", Component.interface_906.component_906_299);
    } else if (varbit_10243 == 6) {
        cs2_5519();
        ifSetText("There has been a failure in validating your email. The submitted code has expired. Please re-register your email address.", Component.interface_906.component_906_299);
    } else if (varbit_10243 == 7) {
        cs2_5519();
        ifSetText("There has been a failure in validating your email. The code has already been submitted. Please request a new code, or submit an unused code.", Component.interface_906.component_906_299);
    } else if (varbit_10243 == 12) {
        proc_lobbyscreen_entergame(Component.interface_906.component_906_40);
    } else if (varbit_10243 == 13 || varbit_10243 == 14 || varbit_10243 == 16 || varbit_10243 == 17) {
        cs2_5503();
        ifSetText("There has been a failure in setting your email address. An internal error has occurred. Please try again later." + "<br>" + "Please note that the email address used as the log-in name for your account will not change.", Component.interface_906.component_906_299);
    } else if (varbit_10243 == 15) {
        cs2_5503();
        ifSetText("There has been a failure in setting your email address. Your email address cannot be found in our database." + "<br>" + "Please note that the email address used as the log-in name for your account will not change.", Component.interface_906.component_906_299);
    } else if (varbit_10243 == 18) {
        cs2_5503();
        ifSetText("It has not been possible to validate your email address.  Please try again later." + "<br>" + "Please note that the email address used as the log-in name for your account will not change.", Component.interface_906.component_906_299);
    } else if (varbit_10243 == 19 || varbit_10243 == 21) {
        cs2_5503();
        ifSetText(" There has been a failure in setting your email address. You have provided an invalid address. Please re-enter it below." + "<br>" + "Please note that the email address used as the log-in name for your account will not change.", Component.interface_906.component_906_299);
    } else if (varbit_10243 == 20) {
        cs2_5503();
        ifSetText("There has been a failure in setting your email address.  The email addresses you have submitted do not match. Please enter your correct email address below." + "<br>" + "Please note that the email address used as the log-in name for your account will not change.", Component.interface_906.component_906_299);
    } else if (varbit_10243 == 22) {
        cs2_5519();
        ifSetText("Your email address has been successfully set. Please leave this page open; an email has been sent to the address you provided. If you can't find it, check your 'junk' folder. To verify your address, you need to click on the link in the email.", Component.interface_906.component_906_299);
    } else if (varbit_10243 == 23) {
        cs2_5519();
        ifSetText("You have successfully re-sent your email. Please leave this page open; an email has been sent to the address you provided. If you can't find it, check your 'junk' folder. To verify your address, you need to click on the link in the email.", Component.interface_906.component_906_299);
    } else if (varbit_10243 == 24 || varbit_10243 == 26 || varbit_10243 == 27 || varbit_10243 == 30) {
        cs2_5503();
        ifSetText("Your validation email failed to send. An internal error has occurred. Please try again later." + "<br>" + "Please note that the email address used as the log-in name for your account will not change.", Component.interface_906.component_906_299);
    } else if (varbit_10243 == 25) {
        cs2_5519();
        ifSetText("Your validation email failed to send. You do not have an eligible email address for the receipt of a re-sent validation code.", Component.interface_906.component_906_299);
    } else if (varbit_10243 == 28) {
        cs2_5519();
        ifSetText("It has not been possible to validate your email address.  Please try again later.", Component.interface_906.component_906_299);
    } else if (varbit_10243 == 29) {
        cs2_5519();
        ifSetText("Your validation email failed to send.  You have sent too many requests in a short period of time. Please try again later.", Component.interface_906.component_906_299);
    }
}
