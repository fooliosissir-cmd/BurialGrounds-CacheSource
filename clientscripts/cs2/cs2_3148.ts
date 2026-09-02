/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3148

function cs2_3148(intArg0: number): void {
    let int1: number = cs2_1851();

    if (int1 == intArg0) {
        return;
    }

    switch (intArg0) {
        case 0:
            if (int1 == 1) {
                cs2_1855(0);
                lobby_worldswitcher_drawlist();
                return;
            }
            break;
        case 2:
            if (int1 == 3) {
                cs2_1855(2);
                lobby_worldswitcher_drawlist();
                return;
            }
            break;
        case 4:
            if (int1 == 5) {
                cs2_1855(4);
                lobby_worldswitcher_drawlist();
                return;
            }
            break;
        case 6:
            if (int1 == 7) {
                cs2_1855(6);
                lobby_worldswitcher_drawlist();
                return;
            }
            break;
        case 8:
            if (int1 == 9) {
                cs2_1855(8);
                lobby_worldswitcher_drawlist();
                return;
            }
            break;
        case 10:
            if (int1 == 11) {
                cs2_1855(10);
                lobby_worldswitcher_drawlist();
                return;
            }
            break;
        case 1:
            if (int1 == 0) {
                cs2_1855(1);
                lobby_worldswitcher_drawlist();
                return;
            }
            break;
        case 3:
            if (int1 == 2) {
                cs2_1855(3);
                lobby_worldswitcher_drawlist();
                return;
            }
            break;
        case 5:
            if (int1 == 4) {
                cs2_1855(5);
                lobby_worldswitcher_drawlist();
                return;
            }
            break;
        case 7:
            if (int1 == 6) {
                cs2_1855(7);
                lobby_worldswitcher_drawlist();
                return;
            }
            break;
        case 9:
            if (int1 == 8) {
                cs2_1855(9);
                lobby_worldswitcher_drawlist();
                return;
            }
            break;
        case 11:
            if (int1 == 10) {
                cs2_1855(11);
                lobby_worldswitcher_drawlist();
                return;
            }
            break;
    }
    cs2_1856(int1);
    cs2_1855(intArg0);
    lobby_worldswitcher_drawlist();
}
