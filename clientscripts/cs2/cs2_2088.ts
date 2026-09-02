/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2088

function cs2_2088(): void {
    let int0: number = enumOp(type_int, type_int, Enum.enum_723, varc_snp_obelisk_control_is_client);
    let int1: number = enumOp(type_int, type_int, Enum.enum_2196, varc_snp_obelisk_control_is_client);

    if (varc_snp_obelisk_control_is_client < 15) {
        ifSetColour(colour(0x3366FF), Component.interface_836.component_836_5);
    } else if (varc_snp_obelisk_control_is_client > 15) {
        ifSetColour(colour(0xE12323), Component.interface_836.component_836_5);
    } else {
        ifSetColour(colour(0x666666), Component.interface_836.component_836_5);
    }
    ifSetPosition(int0, 66, 2, 0, Component.interface_836.component_836_5);
    ifSetSize(int1, 8, 0, 0, Component.interface_836.component_836_5);
}
