/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,blast_furnace_coal]

function blast_furnace_coal(intArg0: component): void {
    if (varbit_blast_furnace_coal == 0) {
        ifSetText("Coal to add: " + tostring(varbit_940), intArg0);
    } else {
        ifSetText("Coal in furnace: " + tostring(varbit_blast_furnace_coal), intArg0);
    }
}
