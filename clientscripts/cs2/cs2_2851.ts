/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2851

function cs2_2851(intArg0: component, intArg1: number, intArg2: number): void {
    if (ifGetHide(Component.interface_475.component_475_55) == 0) {
        if (intArg1 == 2) {
            cs2_835(true);
        }
        return;
    }

    if (clientClock() > intArg2 + 5 || varc_machinima_livecamera_targetmode == 2) {
        switch (mapLang()) {
            case 2:
                switch (intArg1) {
                    case 2:
                        cs2_835(false);
                        break;
                    case 6:
                        cs2_3455();
                        break;
                    case 7:
                        cs2_3453();
                        break;
                    case 8:
                        cs2_3456();
                        break;
                    case 34:
                        cs2_2858();
                        break;
                    case 35:
                        cs2_2854();
                        break;
                    case 36:
                        cs2_2859();
                        break;
                    case 50:
                        cs2_2857();
                        break;
                    case 51:
                        cs2_2855();
                        break;
                    case 52:
                        cs2_2856();
                        break;
                    case 98:
                        cs2_2860();
                        break;
                    case 99:
                        cs2_2861();
                        break;
                    case 96:
                        cs2_2863();
                        break;
                    case 97:
                        cs2_2862();
                        break;
                    case 13:
                        cs2_675();
                        break;
                    case 1:
                        cs2_3455();
                        if (varc_machinima_livecamera_targetmode == 0) {
                            varc_machinima_livecamera_targetmode = 1;
                            ifSetGraphic(Graphic.catcon_catapult_icons_9, Component.interface_475.component_475_28);
                            ifSetText("You are now in Focus Mode", Component.interface_475.component_475_29);
                            if (ifGetHide(Component.interface_475.component_475_54) == 0) {
                                ifSetHide(true, Component.interface_475.component_475_54);
                                ifSetHide(false, Component.interface_475.component_475_33);
                                ifSetHide(true, Component.interface_475.component_475_100);
                                ifSetHide(false, Component.interface_475.component_475_58);
                            }
                        } else if (varc_machinima_livecamera_targetmode == 2) {
                            varc_machinima_livecamera_targetmode = 0;
                            ifSetGraphic(Graphic.catcon_catapult_icons_8, Component.interface_475.component_475_28);
                            ifSetText("You are now in Aim Mode", Component.interface_475.component_475_29);
                            if (ifGetHide(Component.interface_475.component_475_100) == 0) {
                                ifSetHide(true, Component.interface_475.component_475_33);
                                ifSetHide(false, Component.interface_475.component_475_54);
                                ifSetHide(true, Component.interface_475.component_475_100);
                                ifSetHide(false, Component.interface_475.component_475_58);
                            }
                        } else {
                            varc_machinima_livecamera_targetmode = 2;
                            ifSetGraphic(Graphic.catcon_catapult_icons_7, Component.interface_475.component_475_28);
                            ifSetText("You are now in Fine Control Mode", Component.interface_475.component_475_29);
                            if (ifGetHide(Component.interface_475.component_475_33) == 0) {
                                ifSetHide(true, Component.interface_475.component_475_33);
                                ifSetHide(true, Component.interface_475.component_475_54);
                                ifSetHide(false, Component.interface_475.component_475_100);
                                ifSetHide(true, Component.interface_475.component_475_58);
                            }
                        }
                        ifSetOnTimer(hook(cs2_2853, "Ii", [intArg0, clientClock()]), intArg0);
                        break;
                    case 83:
                        if (varc_machinima_livecamera_targetmode == 0) {
                            if (ifGetHide(Component.interface_475.component_475_54) == 1) {
                                ifSetHide(false, Component.interface_475.component_475_54);
                                ifSetHide(true, Component.interface_475.component_475_33);
                                ifSetHide(true, Component.interface_475.component_475_100);
                                ifSetHide(false, Component.interface_475.component_475_7);
                                ifSetHide(false, Component.interface_475.component_475_58);
                            } else {
                                ifSetHide(true, Component.interface_475.component_475_54);
                                ifSetHide(true, Component.interface_475.component_475_33);
                                ifSetHide(true, Component.interface_475.component_475_100);
                                ifSetHide(true, Component.interface_475.component_475_7);
                                ifSetHide(true, Component.interface_475.component_475_58);
                            }
                        } else if (varc_machinima_livecamera_targetmode == 1) {
                            if (ifGetHide(Component.interface_475.component_475_33) == 1) {
                                ifSetHide(true, Component.interface_475.component_475_54);
                                ifSetHide(false, Component.interface_475.component_475_33);
                                ifSetHide(true, Component.interface_475.component_475_100);
                                ifSetHide(false, Component.interface_475.component_475_7);
                                ifSetHide(false, Component.interface_475.component_475_58);
                            } else {
                                ifSetHide(true, Component.interface_475.component_475_54);
                                ifSetHide(true, Component.interface_475.component_475_33);
                                ifSetHide(true, Component.interface_475.component_475_100);
                                ifSetHide(true, Component.interface_475.component_475_7);
                                ifSetHide(true, Component.interface_475.component_475_58);
                            }
                        } else if (varc_machinima_livecamera_targetmode == 2) {
                            if (ifGetHide(Component.interface_475.component_475_100) == 1) {
                                ifSetHide(true, Component.interface_475.component_475_54);
                                ifSetHide(true, Component.interface_475.component_475_33);
                                ifSetHide(false, Component.interface_475.component_475_100);
                                ifSetHide(false, Component.interface_475.component_475_7);
                                ifSetHide(true, Component.interface_475.component_475_58);
                            } else {
                                ifSetHide(true, Component.interface_475.component_475_54);
                                ifSetHide(true, Component.interface_475.component_475_33);
                                ifSetHide(true, Component.interface_475.component_475_100);
                                ifSetHide(true, Component.interface_475.component_475_7);
                                ifSetHide(true, Component.interface_475.component_475_58);
                            }
                        }
                        break;
                    default:
                        return;
                }
                break;
            default:
                switch (intArg1) {
                    case 2:
                        cs2_835(false);
                        break;
                    case 6:
                        cs2_3455();
                        break;
                    case 7:
                        cs2_3453();
                        break;
                    case 8:
                        cs2_3456();
                        break;
                    case 32:
                        cs2_2858();
                        break;
                    case 33:
                        cs2_2854();
                        break;
                    case 34:
                        cs2_2859();
                        break;
                    case 48:
                        cs2_2857();
                        break;
                    case 49:
                        cs2_2855();
                        break;
                    case 50:
                        cs2_2856();
                        break;
                    case 98:
                        cs2_2860();
                        break;
                    case 99:
                        cs2_2861();
                        break;
                    case 96:
                        cs2_2863();
                        break;
                    case 97:
                        cs2_2862();
                        break;
                    case 13:
                        cs2_675();
                        break;
                    case 1:
                        cs2_3455();
                        if (varc_machinima_livecamera_targetmode == 0) {
                            varc_machinima_livecamera_targetmode = 1;
                            ifSetGraphic(Graphic.catcon_catapult_icons_9, Component.interface_475.component_475_28);
                            ifSetText("You are now in Focus Mode", Component.interface_475.component_475_29);
                            if (ifGetHide(Component.interface_475.component_475_54) == 0) {
                                ifSetHide(true, Component.interface_475.component_475_54);
                                ifSetHide(false, Component.interface_475.component_475_33);
                                ifSetHide(true, Component.interface_475.component_475_100);
                                ifSetHide(false, Component.interface_475.component_475_58);
                            }
                        } else if (varc_machinima_livecamera_targetmode == 2) {
                            varc_machinima_livecamera_targetmode = 0;
                            ifSetGraphic(Graphic.catcon_catapult_icons_8, Component.interface_475.component_475_28);
                            ifSetText("You are now in Aim Mode", Component.interface_475.component_475_29);
                            if (ifGetHide(Component.interface_475.component_475_100) == 0) {
                                ifSetHide(true, Component.interface_475.component_475_33);
                                ifSetHide(false, Component.interface_475.component_475_54);
                                ifSetHide(true, Component.interface_475.component_475_100);
                                ifSetHide(false, Component.interface_475.component_475_58);
                            }
                        } else {
                            varc_machinima_livecamera_targetmode = 2;
                            ifSetGraphic(Graphic.catcon_catapult_icons_7, Component.interface_475.component_475_28);
                            ifSetText("You are now in Fine Control Mode", Component.interface_475.component_475_29);
                            if (ifGetHide(Component.interface_475.component_475_33) == 0) {
                                ifSetHide(true, Component.interface_475.component_475_33);
                                ifSetHide(true, Component.interface_475.component_475_54);
                                ifSetHide(false, Component.interface_475.component_475_100);
                                ifSetHide(true, Component.interface_475.component_475_58);
                            }
                        }
                        ifSetOnTimer(hook(cs2_2853, "Ii", [intArg0, clientClock()]), intArg0);
                        break;
                    case 83:
                        if (varc_machinima_livecamera_targetmode == 0) {
                            if (ifGetHide(Component.interface_475.component_475_54) == 1) {
                                ifSetHide(false, Component.interface_475.component_475_54);
                                ifSetHide(true, Component.interface_475.component_475_33);
                                ifSetHide(true, Component.interface_475.component_475_100);
                                ifSetHide(false, Component.interface_475.component_475_7);
                                ifSetHide(false, Component.interface_475.component_475_58);
                            } else {
                                ifSetHide(true, Component.interface_475.component_475_54);
                                ifSetHide(true, Component.interface_475.component_475_33);
                                ifSetHide(true, Component.interface_475.component_475_100);
                                ifSetHide(true, Component.interface_475.component_475_7);
                                ifSetHide(true, Component.interface_475.component_475_58);
                            }
                        } else if (varc_machinima_livecamera_targetmode == 1) {
                            if (ifGetHide(Component.interface_475.component_475_33) == 1) {
                                ifSetHide(true, Component.interface_475.component_475_54);
                                ifSetHide(false, Component.interface_475.component_475_33);
                                ifSetHide(true, Component.interface_475.component_475_100);
                                ifSetHide(false, Component.interface_475.component_475_7);
                                ifSetHide(false, Component.interface_475.component_475_58);
                            } else {
                                ifSetHide(true, Component.interface_475.component_475_54);
                                ifSetHide(true, Component.interface_475.component_475_33);
                                ifSetHide(true, Component.interface_475.component_475_100);
                                ifSetHide(true, Component.interface_475.component_475_7);
                                ifSetHide(true, Component.interface_475.component_475_58);
                            }
                        } else if (varc_machinima_livecamera_targetmode == 2) {
                            if (ifGetHide(Component.interface_475.component_475_100) == 1) {
                                ifSetHide(true, Component.interface_475.component_475_54);
                                ifSetHide(true, Component.interface_475.component_475_33);
                                ifSetHide(false, Component.interface_475.component_475_100);
                                ifSetHide(false, Component.interface_475.component_475_7);
                                ifSetHide(true, Component.interface_475.component_475_58);
                            } else {
                                ifSetHide(true, Component.interface_475.component_475_54);
                                ifSetHide(true, Component.interface_475.component_475_33);
                                ifSetHide(true, Component.interface_475.component_475_100);
                                ifSetHide(true, Component.interface_475.component_475_7);
                                ifSetHide(true, Component.interface_475.component_475_58);
                            }
                        }
                        break;
                    default:
                        return;
                }
                break;
        }
        cs2_2864();
        ifSetOnKey(hook(cs2_2851, "Iii", [intArg0, event_keycode, clientClock()]), intArg0);
    }
}
