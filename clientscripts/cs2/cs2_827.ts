/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_827

function cs2_827(intArg0: number): void {
    let int1: number = 0;

    if (clientClock() >= intArg0 + 32 && clientClock() < intArg0 + 140) {
        ifSetText("Varrock Herald", Component.afr_newspaper_interface.title);
        ifSetText("Covering all of Misthalin and beyond.", Component.afr_newspaper_interface.slogan);
        ifSetText("1 gp", Component.afr_newspaper_interface.price);
        ifSetText("Oo'glog Ogresses Open Health Spa!", Component.afr_newspaper_interface.byline);
    } else {
        ifSetText(" ", Component.afr_newspaper_interface.title);
        ifSetText(" ", Component.afr_newspaper_interface.slogan);
        ifSetText(" ", Component.afr_newspaper_interface.price);
        ifSetText(" ", Component.afr_newspaper_interface.byline);
    }
}
