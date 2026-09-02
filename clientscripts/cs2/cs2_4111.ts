/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4111

function cs2_4111(): void {
    if (varp_1108 <= 3) {
        ifSetText("If you selected the 'Buy' option, you would see this screen. You can choose an item to buy by clicking on the indicated box.", Component.interface_110.component_110_84);
        ifSetHide(true, Component.interface_110.component_110_85);
        ifSetText("N/A", Component.interface_110.component_110_27);
        ifSetHide(false, Component.interface_110.component_110_68);
        ifSetText("Choose an item to exchange", Component.interface_110.component_110_28);
        ifSetText("1", Component.interface_110.component_110_33);
        ifSetText("1 gp", Component.interface_110.component_110_38);
        ifSetText("1 gp", Component.interface_110.component_110_65);
    } else {
        ifSetText("You can set how many you wish to buy, and the price you're willing to pay, before clicking the 'Confirm Offer' button. We'll suggest a guide price for the item, but you can offer whatever you like.", Component.interface_110.component_110_84);
        ifSetHide(false, Component.interface_110.component_110_85);
        ifSetObjectNonum(Obj.staff_of_air, 1, Component.interface_110.component_110_85);
        ifSetText("1,281 gp", Component.interface_110.component_110_27);
        ifSetHide(true, Component.interface_110.component_110_68);
        ifSetText("Staff of air", Component.interface_110.component_110_28);
        ifSetText("2", Component.interface_110.component_110_33);
        ifSetText("1,281 gp", Component.interface_110.component_110_38);
        ifSetText("2,562 gp", Component.interface_110.component_110_65);
    }
}
