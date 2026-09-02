/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3046

function cs2_3046(intArg0: number): void {
    if (intArg0 > 1) {
        cs2_3047(intArg0 - 2);
    } else {
        switch (chatGetFilterPrivate()) {
            case 0:
                cs2_3047(1);
                break;
            case 1:
                cs2_3047(2);
                break;
            case 2:
                cs2_3047(0);
                break;
        }
    }
}
