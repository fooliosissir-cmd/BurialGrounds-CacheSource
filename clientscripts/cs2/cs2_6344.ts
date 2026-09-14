/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6344

function cs2_6344(): void {
    switch (mapLang()) {
        case 0:
            openurl("rswiki", "en/Customer_Support", 0);
            break;
        case 2:
            openurl("rswiki", "fr/Service_client\xe8le", 0);
            break;
        case 1:
            openurl("rswiki", "de/Kundenbetreuung", 0);
            break;
        case 3:
            openurl("rswiki", "pt/Suporte_ao_Cliente", 0);
            break;
    }
}
