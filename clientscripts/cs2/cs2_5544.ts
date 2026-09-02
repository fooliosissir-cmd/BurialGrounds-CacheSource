/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5544

function cs2_5544(): void {
    let int0: number = cs2_5542();

    if (mapMembers() == 0) {
        switch (varc_1725) {
            case 1:
                ifSetText(tostring(int0) + " / " + tostring(7), Component.interface_1178.component_1178_74);
                break;
            case 2:
                ifSetText(tostring(int0) + " / " + tostring(6), Component.interface_1178.component_1178_74);
                break;
            case 3:
                ifSetText(tostring(int0) + " / " + tostring(6), Component.interface_1178.component_1178_74);
                break;
            case 4:
                ifSetText(tostring(int0) + " / " + tostring(1), Component.interface_1178.component_1178_74);
                break;
        }
    } else {
        switch (varc_1725) {
            case 1:
                ifSetText(tostring(int0) + " / " + tostring(13), Component.interface_1178.component_1178_74);
                break;
            case 2:
                ifSetText(tostring(int0) + " / " + tostring(8), Component.interface_1178.component_1178_74);
                break;
            case 3:
                ifSetText(tostring(int0) + " / " + tostring(13), Component.interface_1178.component_1178_74);
                break;
            case 4:
                ifSetText(tostring(int0) + " / " + tostring(5), Component.interface_1178.component_1178_74);
                break;
        }
    }
}
