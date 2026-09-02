/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_789

function cs2_789(): string {
    let int0: number = random(3);
    let str0: string = "Did you know that most monsters can drop bonus spins?";
    let int1: number = 0;
    let int2: number = 0;

    switch (playercountry()) {
        case 77:
        case 38:
        case 225:
            int1 = 1;
            break;
    }

    if (cs2_6304() > 0) {
        int2 = 1;
    }
    let int3: number = 1;

    if (int1 == 1) {
        int3 = int3 + 1;
    }

    if (int2 == 1) {
        int3 = int3 + 1;
    }
    let int4: number = random(int3);

    if (int4 == 0) {
        return cs2_6299();
    }

    if (int4 == 1) {
        if (int1 == 1) {
            return cs2_6297();
        } else if (int2 == 1) {
            return cs2_6298();
        }
    }

    if (int4 == 2) {
        if (int2 == 1) {
            return cs2_6298();
        } else if (int1 == 1) {
            return cs2_6297();
        }
    }
    return str0;
}
