/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6377

function cs2_6377(): number {
    let int0: component = ccGetLayer();
    let int1: component = -1;

    while (int0 != -1) {
        if (cs2_6365(int0) == 1) {
            return 0;
        }
        int1 = int0;
        int0 = ifGetLayer(int0);
    }

    if (int1 == -1) {
        return 0;
    }

    if (cs2_6378(int1) == 1) {
        return 1;
    }

    if (cs2_6366() == 0) {
        return 0;
    }
    let int2: component = -1;
    let int3: number = 0;

    while (int3 < 8) {
        int0 = cs2_6362(int3);
        if (int0 == -1) {
            return 0;
        }
        while (int0 != -1) {
            int2 = int0;
            int0 = ifGetLayer(int0);
        }
        if (int2 == int1 || cs2_6379(int2) == int1) {
            return 1;
        }
        int3 = int3 + 1;
    }
    return 0;
}
