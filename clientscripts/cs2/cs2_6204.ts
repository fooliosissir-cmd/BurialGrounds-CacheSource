/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6204

function cs2_6204(): void {
    cs2_5523();

    switch (varbit_10243) {
        case 12:
            ifSetHide(false, Component.interface_906.component_906_34);
            ifSetHide(true, Component.interface_906.component_906_338);
            ifSetHide(true, Component.interface_906.component_906_382);
            ifSetHide(false, Component.interface_906.component_906_409);
            proc_evalid_rewards();
            break;
        case 1:
        case 2:
        case 8:
        case 9:
            ifSetHide(true, Component.interface_906.component_906_34);
            lobby_popup(-5, 1, "There has been a failure in validating your email. An internal error has occurred. Please try again later.", 0, Graphic.loadingwheel_9, 0, -1, "", "", 1, "Back", "Back");
            break;
        case 14:
            ifSetHide(true, Component.interface_906.component_906_34);
            lobby_popup(-5, 1, "There has been a failure in validating your email. An internal error has occurred. Please try again later.", 0, Graphic.loadingwheel_9, 0, -1, "", "", 1, "Back", "Back");
            break;
        case 3:
        case 4:
            ifSetHide(true, Component.interface_906.component_906_34);
            lobby_popup(-5, 1, "The email validation process will continue once we have ensured that your addresses are secure. To speed up this process, please submit codes from both of your email addresses.", 0, Graphic.loadingwheel_9, 0, -1, "", "", 1, "Back", "Back");
            break;
        case 5:
        case 10:
        case 11:
            ifSetHide(true, Component.interface_906.component_906_34);
            lobby_popup(-5, 1, "There has been a failure in validating your email. The submitted code was invalid. Please check and try again.", 0, Graphic.loadingwheel_9, 0, -1, "", "", 1, "Back", "Back");
            break;
        case 6:
            ifSetHide(true, Component.interface_906.component_906_34);
            lobby_popup(-5, 1, "There has been a failure in validating your email. The submitted code has expired. Please re-register your email address.", 0, Graphic.loadingwheel_9, 0, -1, "", "", 1, "Back", "Back");
            break;
        case 7:
            ifSetHide(true, Component.interface_906.component_906_34);
            lobby_popup(-5, 1, "There has been a failure in validating your email. The code has already been submitted. Please request a new code, or submit an unused code.", 0, Graphic.loadingwheel_9, 0, -1, "", "", 1, "Back", "Back");
            break;
        case 22:
            cs2_5523();
            ifSetOnTimer(noHook(""), Component.interface_906.component_906_235);
            ifSetHide(true, Component.interface_906.component_906_338);
            ifSetHide(false, Component.interface_906.component_906_382);
            evalid_check_email();
            break;
        case 13:
            cs2_5523();
            ifSetOnTimer(noHook(""), Component.interface_906.component_906_235);
            ifSetHide(true, Component.interface_906.component_906_34);
            lobby_popup(-5, 1, "There has been a failure in validating your email. An internal error has occurred. Please try again later.", 0, Graphic.loadingwheel_9, 0, -1, "", "", 1, "Back", "Back");
            break;
        case 15:
            cs2_5523();
            ifSetOnTimer(noHook(""), Component.interface_906.component_906_235);
            ifSetHide(true, Component.interface_906.component_906_34);
            lobby_popup(-5, 1, "There has been a failure in validating your email. An internal error has occurred. Please try again later.", 0, Graphic.loadingwheel_9, 0, -1, "", "", 1, "Back", "Back");
            break;
        case 16:
            cs2_5523();
            ifSetOnTimer(noHook(""), Component.interface_906.component_906_235);
            ifSetHide(true, Component.interface_906.component_906_34);
            lobby_popup(-5, 1, "There has been a failure in validating your email. An internal error has occurred. Please try again later.", 0, Graphic.loadingwheel_9, 0, -1, "", "", 1, "Back", "Back");
            break;
        case 17:
            cs2_5523();
            ifSetOnTimer(noHook(""), Component.interface_906.component_906_235);
            ifSetHide(true, Component.interface_906.component_906_34);
            lobby_popup(-5, 1, "There has been a failure in validating your email. An internal error has occurred. Please try again later.", 0, Graphic.loadingwheel_9, 0, -1, "", "", 1, "Back", "Back");
            break;
        case 18:
            cs2_5523();
            ifSetOnTimer(noHook(""), Component.interface_906.component_906_235);
            ifSetHide(true, Component.interface_906.component_906_34);
            lobby_popup(-5, 1, "There has been a failure in validating your email. An internal error has occurred. Please try again later.", 0, Graphic.loadingwheel_9, 0, -1, "", "", 1, "Back", "Back");
            break;
        case 19:
            cs2_5523();
            ifSetOnTimer(noHook(""), Component.interface_906.component_906_235);
            ifSetHide(true, Component.interface_906.component_906_34);
            lobby_popup(-5, 1, "This email address has already been registered with another account.", 0, Graphic.loadingwheel_9, 0, -1, "", "", 1, "Back", "Back");
            cs2_5940();
            break;
        case 20:
            cs2_5523();
            ifSetOnTimer(noHook(""), Component.interface_906.component_906_235);
            ifSetHide(true, Component.interface_906.component_906_34);
            lobby_popup(-5, 1, "The two email addresses did not match.", 0, Graphic.loadingwheel_9, 0, -1, "", "", 1, "Back", "Back");
            cs2_5940();
            break;
        case 21:
            cs2_5523();
            ifSetOnTimer(noHook(""), Component.interface_906.component_906_235);
            ifSetHide(true, Component.interface_906.component_906_34);
            lobby_popup(-5, 1, "The email address you entered was not valid.", 0, Graphic.loadingwheel_9, 0, -1, "", "", 1, "Back", "Back");
            cs2_5940();
            break;
        case 31:
            cs2_5523();
            ifSetOnTimer(noHook(""), Component.interface_906.component_906_235);
            ifSetHide(true, Component.interface_906.component_906_34);
            lobby_popup(-5, 1, "The email address you entered could not be registered.", 0, Graphic.loadingwheel_9, 0, -1, "", "", 1, "Back", "Back");
            cs2_5940();
            break;
        default:
            cs2_5523();
            ifSetHide(true, Component.interface_906.component_906_34);
            lobby_popup(-5, 1, "There has been a failure in validating your email. An internal error has occurred. Please try again later.", 0, Graphic.loadingwheel_9, 0, -1, "", "", 1, "Back", "Back");
            break;
    }
}
