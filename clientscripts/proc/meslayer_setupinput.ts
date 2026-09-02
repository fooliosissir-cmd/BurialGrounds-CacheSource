/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,meslayer_setupinput]

function meslayer_setupinput(strArg0: string): void {
    ifSetText(escape(strArg0), Component.interface_752.component_752_5);
    varcstr_meslayerinput = strArg0;
    varc_1029 = stringLength(strArg0);
    ifSetOnClick(hook(cs2_1556, "iIi", [event_mousex, event_com, event_comsubid]), Component.interface_752.component_752_5);
    cs2_1557();
}
