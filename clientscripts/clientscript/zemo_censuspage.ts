/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,zemo_censuspage]

function zemo_censuspage(): void {
    if (varbit_zemo_censuspage == 0) {
        ifSetText("<col=302008>" + "Varrock Census - year 160" + "<br>" + "<col=302008>" + "Citizen's name" + "<br>" + "Gryff Aldock" + "<br>" + "Raminme Altrodor" + "<br>" + "Layte Aubury" + "<br>" + "Ingald Belger" + "<br>" + "Asyff Bymajique" + "<br>" + "Baraek Brigson" + "<br>" + "Brugsen Bursen" + "<br>" + "Jeremy Clerksin" + "<br>" + "Daerig Clod" + "<br>" + "Phillipa DeMarne" + "<br>" + "Trista Donaldson" + "<br>" + "Straven Enroy" + "<br>" + "Gertrude Fairweather" + "<br>" + "Shilop Fairweather" + "<br>" + "Walter Fairweather" + "<br>" + "Wilough Fairweather", Component.interface_794.component_794_5);
        ifSetText("<br>" + "<br>" + "<col=302008>" + "Profession" + "<br>" + "Town crier" + "<br>" + "Cook" + "<br>" + "Rune seller" + "<br>" + "Apothecary" + "<br>" + "Fancy dress store owner" + "<br>" + "Fur seller" + "<br>" + "Economist" + "<br>" + "Cart expert" + "<br>" + "Unemployed" + "<br>" + "Minor noble" + "<br>" + "Banker" + "<br>" + "Legitimate businessman" + "<br>" + "Housewife" + "<br>" + "Baby" + "<br>" + "Travelling merchant" + "<br>" + "Baby", Component.interface_794.component_794_4);
        ifSetHide(true, Component.interface_794.component_794_3);
        ifSetHide(false, Component.interface_794.component_794_2);
    }

    if (varbit_zemo_censuspage == 1) {
        ifSetText("<col=302008>" + "Varrock Census - year 160" + "<br>" + "<col=302008>" + "Citizen's name" + "<br>" + "Dimintheis Fitzharmon" + "<br>" + "Eustace Forthwright" + "<br>" + "Everard Grafham" + "<br>" + "Matthew Grey" + "<br>" + "Grimesquit Grime" + "<br>" + "Phingspet Grime" + "<br>" + "Benny Gutenberg" + "<br>" + "Haig Halen" + "<br>" + "Ritchard Haring" + "<br>" + "Randulf Harlow" + "<br>" + "Tobias Hills" + "<br>" + "Louisiana Jones" + "<br>" + "Lawrence Lambare" + "<br>" + "Wimock Landsdown" + "<br>" + "Stuart Lea" + "<br>" + "Draul Leptoc", Component.interface_794.component_794_5);
        ifSetText("<br>" + "<br>" + "<col=302008>" + "Profession" + "<br>" + "Former Noble" + "<br>" + "Guard" + "<br>" + "Natural Historian" + "<br>" + "Sailor" + "<br>" + "Profession Withheld" + "<br>" + "Profession Withheld" + "<br>" + "Journalist" + "<br>" + "Curator" + "<br>" + "Dietician" + "<br>" + "Vampyre Hunter" + "<br>" + "Guard" + "<br>" + "Student" + "<br>" + "Priest" + "<br>" + "Teacher" + "<br>" + "Playwright" + "<br>" + "Lord", Component.interface_794.component_794_4);
        ifSetHide(false, Component.interface_794.component_794_3);
        ifSetHide(false, Component.interface_794.component_794_2);
    }

    if (varbit_zemo_censuspage == 2) {
        ifSetText("<col=302008>" + "Varrock Census - year 160" + "<br>" + "<col=302008>" + "Citizen's name" + "<br>" + "Phearthee Levalsyx" + "<br>" + "Charles Lyeman" + "<br>" + "Surok Magis" + "<br>" + "Gaffit Malore" + "<br>" + "Mabel Malore" + "<br>" + "Alfi Marino" + "<br>" + "Aris Maye" + "<br>" + "Iffie Nitter" + "<br>" + "Thessalia Nitter" + "<br>" + "Elsie Parks" + "<br>" + "Fred Parks" + "<br>" + "Ethel Prim" + "<br>" + "Hartwin Prim" + "<br>" + "Enhtor Prysin" + "<br>" + "Idonea Ramlock" + "<br>" + "Trevick Ramlock", Component.interface_794.component_794_5);
        ifSetText("<br>" + "<br>" + "<col=302008>" + "Profession" + "<br>" + "Mugger" + "<br>" + "Unemployed" + "<br>" + "Mage" + "<br>" + "Librarian" + "<br>" + "Information Clerk" + "<br>" + "Chef" + "<br>" + "Gypsy" + "<br>" + "Retired" + "<br>" + "Clothes Shop Owner" + "<br>" + "Retired" + "<br>" + "Retired" + "<br>" + "Servant" + "<br>" + "Student" + "<br>" + "Knight" + "<br>" + "Teacher" + "<br>" + "Banker", Component.interface_794.component_794_4);
        ifSetHide(false, Component.interface_794.component_794_2);
        ifSetHide(false, Component.interface_794.component_794_3);
    }

    if (varbit_zemo_censuspage == 3) {
        ifSetText("<col=302008>" + "Varrock Census - year 160" + "<br>" + "<col=302008>" + "Citizen's name" + "<br>" + "Aeonisig Raispher" + "<br>" + "Katrine Raven" + "<br>" + "Horvik Ravitz" + "<br>" + "Roald Remanis" + "<br>" + "Milo Rovin" + "<br>" + "Martina Scorsby" + "<br>" + "Stephan Scorsby" + "<br>" + "Sani Semiv" + "<br>" + "Herbert Spiccanspan" + "<br>" + "Brana Talvoy" + "<br>" + "Launa Talvoy" + "<br>" + "Reldo Trimmly" + "<br>" + "Jack Tylner" + "<br>" + "Romily Weeklax" + "<br>" + "Treznor Withings", Component.interface_794.component_794_5);
        ifSetText("<br>" + "<br>" + "<col=302008>" + "Profession" + "<br>" + "Royal Advisor" + "<br>" + "Wallet Relocator" + "<br>" + "Apprentice Blacksmith" + "<br>" + "Our Glorious King" + "<br>" + "Captain of the guard" + "<br>" + "Washerwoman" + "<br>" + "Guard" + "<br>" + "Master Smith" + "<br>" + "Street Cleaner" + "<br>" + "Farmer" + "<br>" + "Farmer" + "<br>" + "Assistant Librarian" + "<br>" + "Rat Exterminator" + "<br>" + "Pie Salesman" + "<br>" + "Kitchen Boy", Component.interface_794.component_794_4);
        ifSetHide(true, Component.interface_794.component_794_2);
        ifSetHide(false, Component.interface_794.component_794_3);
    }
}
