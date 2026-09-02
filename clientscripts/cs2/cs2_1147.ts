/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1147

function cs2_1147(intArg0: number, intArg1: number, intArg2: number, intArg3: component, intArg4: component, intArg5: number): void {
    let int6: graphic = -1;
    let int7: graphic = -1;

    if (intArg1 == intArg0) {
        ifSetSize(106, 27, 0, 0, intArg3);
        switch (intArg0) {
            case 0:
                int6 = Graphic.graphic_3095;
                break;
            case 2:
                switch (mapLang()) {
                    case 1:
                        int6 = Graphic.graphic_3104;
                        break;
                    case 2:
                        int6 = Graphic.graphic_3110;
                        break;
                    case 3:
                        int6 = Graphic.graphic_3098;
                        break;
                    default:
                        int6 = Graphic.graphic_3098;
                        break;
                }
                break;
            case 1:
                int6 = Graphic.graphic_3119;
                break;
            case 3:
                int6 = Graphic.graphic_3122;
                break;
        }
        ifSetGraphic(int6, intArg4);
        hookMouseEnter(noHook(""), intArg3);
        hookMouseExit(noHook(""), intArg3);
        ifSetOnClick(noHook(""), intArg3);
    } else {
        ifSetSize(106, 27, 0, 0, intArg3);
        switch (intArg0) {
            case 0:
                switch (mapLang()) {
                    case 1:
                        int6 = Graphic.graphic_3099;
                        int7 = Graphic.graphic_3100;
                        break;
                    case 2:
                        int6 = Graphic.graphic_3105;
                        int7 = Graphic.graphic_3106;
                        break;
                    case 3:
                        int6 = Graphic.graphic_3111;
                        int7 = Graphic.graphic_3112;
                        break;
                    default:
                        int6 = Graphic.graphic_3093;
                        int7 = Graphic.graphic_3094;
                        break;
                }
                break;
            case 2:
                switch (mapLang()) {
                    case 1:
                        int6 = Graphic.graphic_3102;
                        int7 = Graphic.graphic_3103;
                        break;
                    case 2:
                        int6 = Graphic.graphic_3108;
                        int7 = Graphic.graphic_3109;
                        break;
                    case 3:
                        int6 = Graphic.graphic_3096;
                        int7 = Graphic.graphic_3097;
                        break;
                    default:
                        int6 = Graphic.graphic_3096;
                        int7 = Graphic.graphic_3097;
                        break;
                }
                break;
            case 1:
                int6 = Graphic.graphic_3117;
                int7 = Graphic.graphic_3118;
                break;
            case 3:
                int6 = Graphic.graphic_3120;
                int7 = Graphic.graphic_3121;
                break;
        }
        ifSetGraphic(int6, intArg4);
        hookMouseEnter(hook(cs2_1148, "iIdd1", [intArg0, intArg4, int6, int7, true]), intArg3);
        hookMouseExit(hook(cs2_1148, "iIdd1", [intArg0, intArg4, int6, int7, false]), intArg3);
        ifSetOnClick(hook(cs2_2697, "ii", [intArg0, intArg5]), intArg3);
    }
}
