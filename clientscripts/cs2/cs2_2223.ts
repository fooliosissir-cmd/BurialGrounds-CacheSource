/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2223

function cs2_2223(): void {
    // Registration is complete. Return to our login, without any external
    // marketing, membership, or account-appeal destinations.
    varcstr_32 = varcstr_122;
    varcstr_33 = "";
    varcstr_124 = "";
    varcstr_125 = "";
    createStepReached(16);
    lobbyLeaveLobby();
    proc_loginscreen_setactivemenu(11);
    login_popup(0, 0, "Account created. Sign in with your email and password.", 0, Graphic.loadingwheel_11, 0, 0, "", 1, "OK");
}
