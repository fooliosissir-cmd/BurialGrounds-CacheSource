/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1230

function cs2_1230(): void {
    let int0: obj = -1;
    let int1: model = -1;
    let int2: component = -1;
    let int3: number = 0;

    while (int3 < 16) {
        int0 = invGetobj(308, int3);
        switch (int0) {
            case Obj.airrune:
            case Obj.roguetrader_airrune:
                int1 = Model.model_8975;
                break;
            case Obj.waterrune:
            case Obj.roguetrader_waterrune:
                int1 = Model.model_8987;
                break;
            case Obj.earthrune:
            case Obj.roguetrader_earthrune:
                int1 = Model.model_8979;
                break;
            case Obj.firerune:
            case Obj.roguetrader_firerune:
                int1 = Model.model_8980;
                break;
            default:
                int1 = -1;
                break;
        }
        int2 = enumOp(type_int, type_component, Enum.rogue_component, int3);
        if (ifFind(int2) == 1) {
            ccSetModel(int1);
        }
        if (int0 == Obj.roguetrader_airrune || int0 == Obj.roguetrader_airrune || int0 == Obj.roguetrader_waterrune || int0 == Obj.roguetrader_earthrune || int0 == Obj.roguetrader_firerune) {
            int2 = enumOp(type_int, type_component, Enum.rogue_component_small_unmovable, int3);
            if (ifFind(int2) == 1) {
                ccSetColour(colour(0x440000));
            }
        }
        int3 = int3 + 1;
    }
}
