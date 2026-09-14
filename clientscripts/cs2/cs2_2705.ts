/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2705

function cs2_2705(intArg0: boolean, intArg1: number, intArg2: number, intArg3: number, intArg4: boolean, intArg5: boolean): void {
    if (intArg2 == 1) {
        ifCloseSubClient(48889891);
        ifCloseSubClient(35913774);
        ifSetOnTimer(noHook(""), Component.interface_746.component_746_35);
        ifSetOnTimer(noHook(""), Component.interface_548.component_548_46);
        ifSetHide(true, Component.interface_548.component_548_166);
        ifSetHide(true, Component.interface_548.component_548_54);
        ifSetHide(true, Component.interface_548.component_548_169);
        ifSetHide(true, Component.interface_548.component_548_175);
        ifSetHide(true, Component.interface_548.component_548_145);
        ifSetHide(true, Component.interface_548.component_548_99);
    } else if (intArg2 == 2) {
        ifSetOnTimer(noHook(""), Component.interface_906.component_906_0);
    } else {
        ifSetOnTimer(noHook(""), Component.interface_744.component_744_17);
    }
    let int6: number = 0;

    if (intArg0 == true) {
        detailToolkitDefault(detailGetToolkit(), 1);
        if (getWindowMode() != 3) {
            setDefaultWindowMode(getWindowMode());
        }
        detailAntialiasingDefault(detailGetAntialiasing());
        if (testBit(intArg1, 1) == 1) {
            varc_994 = 2;
        }
        varc_1240 = 3;
        varc_1277 = 0;
    } else {
        if (testBit(intArg1, 0) == 1) {
            autosetupBlackflaglast();
            if (intArg4 == false) {
                int6 = detailGetToolkitDefault();
                detailToolkit(int6);
                cs2_2593(int6);
            }
        } else {
            int6 = detailGetToolkit();
        }
        if (testBit(intArg1, 1) == 1 && getWindowMode() != getDefaultWindowMode()) {
            setWindowMode(getDefaultWindowMode());
        }
        if (testBit(intArg1, 2) == 1) {
            detailAntialiasing(detailGetAntialiasingDefault());
        }
        if (testBit(intArg1, 3) == 1) {
            detailBloom(0);
        }
        if (intArg2 == 3) {
            proc_loginscreen_setactivemenu(0);
            proc_autosetup(intArg2);
            return;
        }
        if (intArg5 == true) {
            cs2_3387(int6, getWindowMode(), ...graphics_options_reviewoptions(int6), intArg2);
        } else if (testBit(intArg1, 1) == 1 || intArg4 == true) {
            proc_graphics_options_rebuild(int6, getWindowMode(), ...graphics_options_reviewoptions(int6), intArg2);
        } else {
            cs2_3387(int6, getWindowMode(), ...graphics_options_reviewoptions(int6), intArg2);
        }
        if (intArg2 == 1 && intArg3 == 1) {
            mes("The requested change has been cancelled.");
        }
    }

    if (intArg2 != 1) {
        int6 = detailGetToolkit();
        if (intArg2 == 2) {
            ifSetHide(true, Component.interface_906.component_906_57);
            if (intArg5 == true) {
                cs2_3387(int6, getWindowMode(), ...graphics_options_reviewoptions(int6), intArg2);
            } else if (testBit(intArg1, 1) == 1 || intArg4 == true) {
                proc_graphics_options_rebuild(int6, getWindowMode(), ...graphics_options_reviewoptions(int6), intArg2);
            } else {
                cs2_3387(int6, getWindowMode(), ...graphics_options_reviewoptions(int6), intArg2);
            }
            if (intArg4 == false && intArg3 == 1) {
                lobbyscreen_input_full("", "The change of detail mode has been cancelled." + "<br>" + "<br>" + "Perhaps different graphical settings would work better for you?", 0, -1, "", "", 0);
            }
        } else if (intArg2 == 3) {
            if (hasSignonKey() == 1) {
                proc_loginscreen_setactivemenu(5);
                if (varc_1273 == 1) {
                    return;
                } else {
                    ifSetOnTimer(hook(cs2_3381, "Ii", [Component.interface_975.component_975_44, 0]), Component.interface_975.component_975_44);
                }
            } else if (userflowflags(3) == true) {
                proc_loginscreen_setactivemenu(7);
            } else {
                proc_loginscreen_setactivemenu(11);
            }
        } else {
            if (intArg5 == true) {
                cs2_3387(int6, getWindowMode(), ...graphics_options_reviewoptions(int6), intArg2);
            } else if (testBit(intArg1, 1) == 1 || intArg4 == true) {
                proc_graphics_options_rebuild(int6, getWindowMode(), ...graphics_options_reviewoptions(int6), intArg2);
            } else {
                cs2_3387(int6, getWindowMode(), ...graphics_options_reviewoptions(int6), intArg2);
            }
            if (intArg4 == false && intArg3 == 1) {
                ifSetText("The change of detail mode has been cancelled." + "<br>" + "<br>" + "Perhaps different graphical settings would work better for you?", Component.interface_744.component_744_76);
                if (intArg5 == true) {
                    ifSetOnClick(hook(clientscript_loginscreen_setactivemenu_full, "i11", [6, false, true]), Component.interface_744.component_744_79);
                } else if (testBit(intArg1, 1) == 1 || intArg4 == true) {
                    ifSetOnClick(hook(clientscript_loginscreen_setactivemenu, "i", [6]), Component.interface_744.component_744_79);
                } else {
                    ifSetOnClick(hook(clientscript_loginscreen_setactivemenu_full, "i11", [6, false, true]), Component.interface_744.component_744_79);
                }
                proc_loginscreen_setactivemenu(9);
            } else if (intArg5 == true) {
                proc_loginscreen_setactivemenu_full(6, false, true);
            } else if (testBit(intArg1, 1) == 1 || intArg4 == true) {
                proc_loginscreen_setactivemenu(6);
            } else {
                proc_loginscreen_setactivemenu_full(6, false, true);
            }
        }
    }

    if (intArg0 == false && intArg4 == true) {
        proc_autosetup(intArg2);
    }
}
