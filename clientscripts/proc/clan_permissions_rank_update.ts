/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clan_permissions_rank_update]

function clan_permissions_rank_update(): void {
    let int0: number = 0;
    let int1: number = cs2_4293();

    if (cs2_5131() == 1) {
        ifSetHide(true, Component.interface_1096.component_1096_392);
        ifSetHide(true, Component.interface_1096.component_1096_400);
        ifSetHide(true, Component.interface_1096.component_1096_408);
        ifSetHide(true, Component.interface_1096.component_1096_416);
        ifSetHide(true, Component.interface_1096.component_1096_424);
        ifSetHide(true, Component.interface_1096.component_1096_432);
        ifSetHide(true, Component.interface_1096.component_1096_440);
        ifSetHide(true, Component.interface_1096.component_1096_448);
        ifSetHide(true, Component.interface_1096.component_1096_456);
        ifSetHide(true, Component.interface_1096.component_1096_464);
        ifSetHide(true, Component.interface_1096.component_1096_472);
        switch (varc_1569) {
            case 0:
                ifSetHide(false, Component.interface_1096.component_1096_392);
                if (int1 >= 100) {
                    int0 = 1;
                }
                break;
            case 1:
                ifSetHide(false, Component.interface_1096.component_1096_400);
                if (int1 >= 100) {
                    int0 = 1;
                }
                break;
            case 2:
                ifSetHide(false, Component.interface_1096.component_1096_408);
                if (int1 >= 100) {
                    int0 = 1;
                }
                break;
            case 3:
                ifSetHide(false, Component.interface_1096.component_1096_416);
                if (int1 >= 100) {
                    int0 = 1;
                }
                break;
            case 4:
                ifSetHide(false, Component.interface_1096.component_1096_424);
                if (int1 >= 100) {
                    int0 = 1;
                }
                break;
            case 5:
                ifSetHide(false, Component.interface_1096.component_1096_432);
                if (int1 >= 100) {
                    int0 = 1;
                }
                break;
            case 100:
                ifSetHide(false, Component.interface_1096.component_1096_440);
                if (int1 > varc_1569) {
                    int0 = 1;
                }
                break;
            case 101:
                ifSetHide(false, Component.interface_1096.component_1096_448);
                if (int1 > varc_1569) {
                    int0 = 1;
                }
                break;
            case 102:
                ifSetHide(false, Component.interface_1096.component_1096_456);
                if (int1 > varc_1569) {
                    int0 = 1;
                }
                break;
            case 103:
                ifSetHide(false, Component.interface_1096.component_1096_464);
                if (int1 > varc_1569) {
                    int0 = 1;
                }
                break;
            case 125:
                ifSetHide(false, Component.interface_1096.component_1096_472);
                if (int1 > varc_1569) {
                    int0 = 1;
                }
                break;
            case 126:
                int0 = 0;
                break;
            case 127:
                int0 = 0;
                break;
            default:
                if (int1 >= 100) {
                    int0 = 1;
                }
                break;
        }
    }
    let str0: string = "";
    ifSetHide(false, Component.interface_1096.component_1096_559);
    ifSetHide(false, Component.interface_1096.component_1096_571);
    ifSetHide(false, Component.interface_1096.component_1096_604);
    ifSetHide(false, Component.interface_1096.component_1096_615);
    ifSetHide(false, Component.interface_1096.component_1096_637);
    ifSetHide(false, Component.interface_1096.component_1096_484);
    ifSetHide(false, Component.interface_1096.component_1096_593);
    ifSetHide(false, Component.interface_1096.component_1096_582);
    ifSetHide(false, Component.interface_1096.component_1096_626);
    ifSetHide(false, Component.interface_1096.component_1096_548);
    ifSetHide(false, Component.interface_1096.component_1096_535);
    ifSetHide(false, Component.interface_1096.component_1096_753);
    ifSetHide(false, Component.interface_1096.component_1096_740);
    ifSetHide(false, Component.interface_1096.component_1096_649);
    ifSetHide(false, Component.interface_1096.component_1096_660);
    ifSetHide(false, Component.interface_1096.component_1096_672);
    ifSetHide(false, Component.interface_1096.component_1096_685);
    ifSetHide(false, Component.interface_1096.component_1096_697);
    ifSetHide(false, Component.interface_1096.component_1096_794);
    ifSetHide(false, Component.interface_1096.component_1096_805);
    ifSetHide(false, Component.interface_1096.component_1096_816);
    ifSetHide(false, Component.interface_1096.component_1096_709);
    ifSetHide(false, Component.interface_1096.component_1096_783);
    ifSetHide(false, Component.interface_1096.component_1096_721);

    if (int0 == 1) {
        ifSetHide(true, Component.interface_1096.component_1096_559);
        ifSetHide(true, Component.interface_1096.component_1096_571);
        if (varc_1569 < 100) {
            str0 = "Only admins and above may upgrade the citadel.";
            ifSetOnMouseOver(hook(clan_permissions_tooltip, "sI", [str0, event_com]), Component.interface_1096.component_1096_604);
        } else if (cs2_5145(int1) == 0) {
            str0 = "You may only allow upgrades to the citadel if your rank has this permission.";
            ifSetOnMouseOver(hook(clan_permissions_tooltip, "sI", [str0, event_com]), Component.interface_1096.component_1096_604);
        } else {
            ifSetHide(true, Component.interface_1096.component_1096_604);
        }
        if (varc_1569 < 100) {
            str0 = "Only admins and above may downgrade the citadel.";
            ifSetOnMouseOver(hook(clan_permissions_tooltip, "sI", [str0, event_com]), Component.interface_1096.component_1096_615);
        } else if (cs2_5147(int1) == 0) {
            str0 = "You may only allow downgrades to the citadel if your rank has this permission.";
            ifSetOnMouseOver(hook(clan_permissions_tooltip, "sI", [str0, event_com]), Component.interface_1096.component_1096_615);
        } else {
            ifSetHide(true, Component.interface_1096.component_1096_615);
        }
        if (cs2_6026(int1) == 0) {
            str0 = "You may only allow transfer of resources if your rank has this permission.";
            ifSetOnMouseOver(hook(clan_permissions_tooltip, "sI", [str0, event_com]), Component.interface_1096.component_1096_637);
        } else if (varc_1569 >= 100) {
            ifSetHide(true, Component.interface_1096.component_1096_637);
        }
        if (cs2_6012(int1) == 0) {
            str0 = "You may only allow recruiting if your rank has this permission.";
            ifSetOnMouseOver(hook(clan_permissions_tooltip, "sI", [str0, event_com]), Component.interface_1096.component_1096_484);
        } else {
            ifSetHide(true, Component.interface_1096.component_1096_484);
        }
        if (varc_1569 < 100) {
            str0 = "Only admins and above may change the noticeboard.";
            ifSetOnMouseOver(hook(clan_permissions_tooltip, "sI", [str0, event_com]), Component.interface_1096.component_1096_593);
        } else if (cs2_6006(int1) == 0) {
            str0 = "You may only allow adding of notices if your rank has this permission.";
            ifSetOnMouseOver(hook(clan_permissions_tooltip, "sI", [str0, event_com]), Component.interface_1096.component_1096_593);
        } else {
            ifSetHide(true, Component.interface_1096.component_1096_593);
        }
        if (varc_1569 < 100) {
            str0 = "Only admins and above may change the signpost.";
            ifSetOnMouseOver(hook(clan_permissions_tooltip_invert, "sI", [str0, event_com]), Component.interface_1096.component_1096_582);
        } else if (cs2_6008(int1) == 0) {
            str0 = "You may only allow adding to the signpost if your rank has this permission.";
            ifSetOnMouseOver(hook(clan_permissions_tooltip, "sI", [str0, event_com]), Component.interface_1096.component_1096_582);
        } else {
            ifSetHide(true, Component.interface_1096.component_1096_582);
        }
        if (cs2_6010(int1) == 0) {
            str0 = "You may only allow editing of the clan battlefield if your rank has this permission.";
            ifSetOnMouseOver(hook(clan_permissions_tooltip, "sI", [str0, event_com]), Component.interface_1096.component_1096_626);
        } else {
            ifSetHide(true, Component.interface_1096.component_1096_626);
        }
        if (varc_1569 < 100) {
            str0 = "Only admins and above may change who may lock the citadel.";
            ifSetOnMouseOver(hook(clan_permissions_tooltip, "sI", [str0, event_com]), Component.interface_1096.component_1096_548);
        } else if (cs2_5149(int1) == 0) {
            str0 = "You may only allow locking of the citadel if your rank has this permission.";
            ifSetOnMouseOver(hook(clan_permissions_tooltip, "sI", [str0, event_com]), Component.interface_1096.component_1096_548);
        } else {
            ifSetHide(true, Component.interface_1096.component_1096_548);
        }
        if (varc_1569 < 100) {
            str0 = "Only admins and above may change who may lock the keep.";
            ifSetOnMouseOver(hook(clan_permissions_tooltip, "sI", [str0, event_com]), Component.interface_1096.component_1096_535);
        } else if (cs2_5148(int1) == 0) {
            str0 = "You may only allow locking of the keep if your rank has this permission.";
            ifSetOnMouseOver(hook(clan_permissions_tooltip, "sI", [str0, event_com]), Component.interface_1096.component_1096_535);
        } else {
            ifSetHide(true, Component.interface_1096.component_1096_535);
        }
        if (cs2_5149(int1) == 0) {
            str0 = "You may only allow entry to the citadel if your rank has this permission.";
            ifSetOnMouseOver(hook(clan_permissions_tooltip, "sI", [str0, event_com]), Component.interface_1096.component_1096_753);
        } else {
            ifSetHide(true, Component.interface_1096.component_1096_753);
        }
        if (cs2_5148(int1) == 0) {
            str0 = "You may only allow entry to the keep if your rank has this permission.";
            ifSetOnMouseOver(hook(clan_permissions_tooltip, "sI", [str0, event_com]), Component.interface_1096.component_1096_740);
        } else {
            ifSetHide(true, Component.interface_1096.component_1096_740);
        }
        if (cs2_6014(int1) == 0) {
            str0 = "You may only allow starting of battles if your rank has this permission.";
            ifSetOnMouseOver(hook(clan_permissions_tooltip, "sI", [str0, event_com]), Component.interface_1096.component_1096_649);
        } else {
            ifSetHide(true, Component.interface_1096.component_1096_649);
        }
        if (cs2_6016(int1) == 0) {
            str0 = "You may only allow a rank to lead Rated Clan Wars if your rank has this permission.";
            ifSetOnMouseOver(hook(clan_permissions_tooltip, "sI", [str0, event_com]), Component.interface_1096.component_1096_660);
        } else {
            ifSetHide(true, Component.interface_1096.component_1096_660);
        }
        if (cs2_6018(int1) == 0) {
            str0 = "You may only allow a rank to call a vote if your rank has this permission.";
            ifSetOnMouseOver(hook(clan_permissions_tooltip, "sI", [str0, event_com]), Component.interface_1096.component_1096_672);
        } else {
            ifSetHide(true, Component.interface_1096.component_1096_672);
        }
        if (cs2_6020(int1) == 0) {
            str0 = "You may only allow a rank to begin a meeting if your rank has this permission.";
            ifSetOnMouseOver(hook(clan_permissions_tooltip, "sI", [str0, event_com]), Component.interface_1096.component_1096_685);
        } else {
            ifSetHide(true, Component.interface_1096.component_1096_685);
        }
        if (cs2_6022(int1) == 0) {
            str0 = "You may only set a rank as a party tech if your rank has this permission.";
            ifSetOnMouseOver(hook(clan_permissions_tooltip, "sI", [str0, event_com]), Component.interface_1096.component_1096_697);
        } else {
            ifSetHide(true, Component.interface_1096.component_1096_697);
        }
        if (cs2_6024(int1) == 0) {
            str0 = "You may only set a rank as a theatre tech if your rank has this permission.";
            ifSetOnMouseOver(hook(clan_permissions_tooltip, "sI", [str0, event_com]), Component.interface_1096.component_1096_794);
        } else {
            ifSetHide(true, Component.interface_1096.component_1096_794);
        }
        if (varc_1569 < 100) {
            str0 = "Only admins and above may set skill plot locks.";
            ifSetOnMouseOver(hook(clan_permissions_tooltip_invert, "sI", [str0, event_com]), Component.interface_1096.component_1096_805);
        } else if (cs2_5962(int1) == 0) {
            str0 = "You may only allow a rank to lock plots if your rank has this permission.";
            ifSetOnMouseOver(hook(clan_permissions_tooltip, "sI", [str0, event_com]), Component.interface_1096.component_1096_805);
        } else {
            ifSetHide(true, Component.interface_1096.component_1096_805);
        }
        if (cs2_5964(int1) == 0) {
            str0 = "You may only allow a rank to checkresources if your rank has this permission.";
            ifSetOnMouseOver(hook(clan_permissions_tooltip, "sI", [str0, event_com]), Component.interface_1096.component_1096_816);
        } else {
            ifSetHide(true, Component.interface_1096.component_1096_816);
        }
        if (varc_1569 < 100) {
            str0 = "Only admins and above may set gathering goals.";
            ifSetOnMouseOver(hook(clan_permissions_tooltip_invert, "sI", [str0, event_com]), Component.interface_1096.component_1096_709);
        } else if (cs2_5225(int1) == 0) {
            str0 = "You may only allow a rank to gather resources if your rank has this permission.";
            ifSetOnMouseOver(hook(clan_permissions_tooltip, "sI", [str0, event_com]), Component.interface_1096.component_1096_709);
        } else {
            ifSetHide(true, Component.interface_1096.component_1096_709);
        }
        if (varc_1569 < 103) {
            str0 = "Only overseers and above may set the citadel's language.";
            ifSetOnMouseOver(hook(clan_permissions_tooltip_invert, "sI", [str0, event_com]), Component.interface_1096.component_1096_783);
        } else if (cs2_6028(int1) == 0) {
            str0 = "You may only allow a rank to change the stronghold's language if your rank has this permission.";
            ifSetOnMouseOver(hook(clan_permissions_tooltip, "sI", [str0, event_com]), Component.interface_1096.component_1096_783);
        } else {
            ifSetHide(true, Component.interface_1096.component_1096_783);
        }
        if (varc_1569 < 103) {
            str0 = "Only overseers and above may move the build tick.";
            ifSetOnMouseOver(hook(clan_permissions_tooltip, "sI", [str0, event_com]), Component.interface_1096.component_1096_721);
        } else if (cs2_6030(int1) == 0) {
            str0 = "You may only allow a rank to change the stronghold's build time if your rank has this permission.";
            ifSetOnMouseOver(hook(clan_permissions_tooltip, "sI", [str0, event_com]), Component.interface_1096.component_1096_721);
        } else {
            ifSetHide(true, Component.interface_1096.component_1096_721);
        }
    } else {
        str0 = "Your rank is not high enough to alter this permission.";
        ifSetOnMouseOver(hook(clan_permissions_tooltip, "sI", [str0, event_com]), Component.interface_1096.component_1096_604);
        ifSetOnMouseOver(hook(clan_permissions_tooltip, "sI", [str0, event_com]), Component.interface_1096.component_1096_615);
        ifSetOnMouseOver(hook(clan_permissions_tooltip, "sI", [str0, event_com]), Component.interface_1096.component_1096_637);
        ifSetOnMouseOver(hook(clan_permissions_tooltip_invert, "sI", [str0, event_com]), Component.interface_1096.component_1096_484);
        ifSetOnMouseOver(hook(clan_permissions_tooltip, "sI", [str0, event_com]), Component.interface_1096.component_1096_593);
        ifSetOnMouseOver(hook(clan_permissions_tooltip_invert, "sI", [str0, event_com]), Component.interface_1096.component_1096_582);
        ifSetOnMouseOver(hook(clan_permissions_tooltip_invert, "sI", [str0, event_com]), Component.interface_1096.component_1096_626);
        ifSetOnMouseOver(hook(clan_permissions_tooltip, "sI", [str0, event_com]), Component.interface_1096.component_1096_548);
        ifSetOnMouseOver(hook(clan_permissions_tooltip, "sI", [str0, event_com]), Component.interface_1096.component_1096_535);
        ifSetOnMouseOver(hook(clan_permissions_tooltip, "sI", [str0, event_com]), Component.interface_1096.component_1096_753);
        ifSetOnMouseOver(hook(clan_permissions_tooltip, "sI", [str0, event_com]), Component.interface_1096.component_1096_740);
        ifSetOnMouseOver(hook(clan_permissions_tooltip, "sI", [str0, event_com]), Component.interface_1096.component_1096_649);
        ifSetOnMouseOver(hook(clan_permissions_tooltip_invert, "sI", [str0, event_com]), Component.interface_1096.component_1096_660);
        ifSetOnMouseOver(hook(clan_permissions_tooltip, "sI", [str0, event_com]), Component.interface_1096.component_1096_672);
        ifSetOnMouseOver(hook(clan_permissions_tooltip, "sI", [str0, event_com]), Component.interface_1096.component_1096_685);
        ifSetOnMouseOver(hook(clan_permissions_tooltip_invert, "sI", [str0, event_com]), Component.interface_1096.component_1096_697);
        ifSetOnMouseOver(hook(clan_permissions_tooltip_invert, "sI", [str0, event_com]), Component.interface_1096.component_1096_794);
        ifSetOnMouseOver(hook(clan_permissions_tooltip_invert, "sI", [str0, event_com]), Component.interface_1096.component_1096_805);
        ifSetOnMouseOver(hook(clan_permissions_tooltip, "sI", [str0, event_com]), Component.interface_1096.component_1096_816);
        ifSetOnMouseOver(hook(clan_permissions_tooltip_invert, "sI", [str0, event_com]), Component.interface_1096.component_1096_709);
        ifSetOnMouseOver(hook(clan_permissions_tooltip_invert, "sI", [str0, event_com]), Component.interface_1096.component_1096_783);
        ifSetOnMouseOver(hook(clan_permissions_tooltip, "sI", [str0, event_com]), Component.interface_1096.component_1096_721);
    }
    cs2_5135();
}
