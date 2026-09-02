/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,fairyrings_anticlockwise]

function fairyrings_anticlockwise(intArg0: number): void {
    varc_157 = 1;

    if (varc_125 >= clientClock() - 5) {
        return;
    }

    if (intArg0 == 48103425) {
        switch (varc_122) {
            case 0:
                varc_122 = 512;
                break;
            case 512:
                varc_122 = 1024;
                break;
            case 1024:
                varc_122 = 1536;
                break;
            default:
                varc_122 = 0;
                break;
        }
    } else if (intArg0 == 48103430) {
        switch (varc_123) {
            case 0:
                varc_123 = 512;
                break;
            case 512:
                varc_123 = 1024;
                break;
            case 1024:
                varc_123 = 1536;
                break;
            default:
                varc_123 = 0;
                break;
        }
    } else if (intArg0 == 48103435) {
        switch (varc_124) {
            case 0:
                varc_124 = 512;
                break;
            case 512:
                varc_124 = 1024;
                break;
            case 1024:
                varc_124 = 1536;
                break;
            default:
                varc_124 = 0;
                break;
        }
    }
}
