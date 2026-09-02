/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2086

function cs2_2086(): void {
    if (varc_snp_east_control_is_client <= 5) {
        ifSetColour(colour(0x3366FF), Component.interface_836.component_836_31);
    } else if (varc_snp_east_control_is_client >= 25) {
        ifSetColour(colour(0xE12323), Component.interface_836.component_836_31);
    } else {
        ifSetColour(colour(0x666666), Component.interface_836.component_836_31);
    }
}
