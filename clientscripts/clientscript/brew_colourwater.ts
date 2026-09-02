/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,brew_colourwater]

function brew_colourwater(intArg0: component, intArg1: component): void {
    if (varc_227 > 2) {
        if (invGetobj(94, 0) == Obj.brew_red_pirate_hat) {
            ifSetModel(Model.model_15700, intArg0);
        } else {
            ifSetModel(Model.model_15674, intArg0);
        }
        ifSetColour(colour(0x33FF00), intArg1);
    } else {
        if (invGetobj(94, 0) == Obj.brew_red_pirate_hat) {
            ifSetModel(Model.model_15699, intArg0);
        } else {
            ifSetModel(Model.model_15673, intArg0);
        }
        ifSetColour(colour(0x910000), intArg1);
    }
    ifSetText(tostring(varc_227), intArg1);
}
