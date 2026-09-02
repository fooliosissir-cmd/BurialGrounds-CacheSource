/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3490

function cs2_3490(intArg0: component): void {
    let int1: component = intArg0;

    switch (intArg0) {
        case Component.interface_993.component_993_184:
            int1 = Component.interface_993.component_993_257;
            break;
        case Component.interface_993.component_993_185:
            int1 = Component.interface_993.component_993_242;
            break;
        case Component.interface_993.component_993_186:
            int1 = Component.interface_993.component_993_227;
            break;
        case Component.interface_993.component_993_187:
            int1 = Component.interface_993.component_993_212;
            break;
    }

    if (ifGetTrans(int1) > 220) {
        ifSetTrans(ifGetTrans(int1) - 2, int1);
    }
}
