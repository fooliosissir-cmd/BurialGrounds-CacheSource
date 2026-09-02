/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1478

function cs2_1478(): void {
    varcstr_138 = varcstr_meslayerinput;
    let int0: number = cs2_1479(varcstr_138);

    if (int0 > 1) {
        mes("Search for '" + escape(varcstr_138) + "' returned " + tostring(int0) + " results.");
    } else if (int0 == 1) {
        mes("Search for '" + escape(varcstr_138) + "' returned " + tostring(int0) + " result.");
    } else {
        mes("Search for '" + escape(varcstr_138) + "' returned 0 results.");
    }
}
