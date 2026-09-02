/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,logout_init]

function logout_init(): void {
    ifSetText("When you have finished playing" + "<br>" + "RuneScape, always use a" + "<br>" + "button below to exit the game and logout safely.", Component.interface_182.component_182_1);
    ifSetText("Exit to Lobby", Component.interface_182.component_182_6);
    ifSetOp(1, "Exit to Lobby", Component.interface_182.component_182_6);
    ifSetHide(false, Component.interface_182.component_182_7);
    ifSetText("Exit to Login", Component.interface_182.component_182_13);
    ifSetOp(1, "Exit to Login", Component.interface_182.component_182_13);
}
