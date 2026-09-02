/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,rm_wires_load]

function rm_wires_load(intArg0: component): void {
    ccDeleteAll(intArg0);
    let int1: number = 308;
    let int2: number = 55;
    let int3: number = 0;
    let int4: number = enumGetoutputcount(Enum.rm_wires_graphics);

    while (int3 < int4) {
        ccCreate(intArg0, 6, int3);
        ccSetSize(50, 50, 0, 0);
        ccSetPosition(int1, int2, 0, 0);
        ccSetModel(enumOp(type_int, type_model, Enum.rm_wires_graphics, int3));
        ccSetModelAngle(0, 0, 512, 0, 0, 2750);
        ccSetOnDragComplete(hook(cs2_2848, "IiIiii", [event_com, event_comsubid, event_com2, event_comsubid2, event_mousex, event_mousey]));
        ccSetdragrenderbehaviour(2);
        ccSetdragdeadzone(14);
        ccSetOp(1, "Select");
        int3 = int3 + 1;
        if (int3 == 3) {
            int1 = 308 + 48;
            int2 = 55;
        } else if (int3 == 6) {
            int1 = 308 + 96;
            int2 = 55;
        } else {
            int2 = 48 + int2;
        }
    }
    int1 = 113;
    int2 = 83;
    int4 = enumGetoutputcount(Enum.rm_wires_colour);
    int4 = int4 + int3;
    let int5: number = 0;

    while (int3 < int4) {
        ccCreate(intArg0, 3, int3);
        ccSetSize(50, 50, 0, 0);
        ccSetPosition(int1, int2, 0, 0);
        ccSetTrans(255);
        int3 = int3 + 1;
        int5 = int5 + 1;
        if (int5 == 3) {
            int1 = 113;
            int2 = 83 + 52;
        } else if (int5 == 6) {
            int1 = 113;
            int2 = 83 + 104;
        } else {
            int1 = 50 + int1;
        }
    }
    cs2_2847(intArg0);
}
