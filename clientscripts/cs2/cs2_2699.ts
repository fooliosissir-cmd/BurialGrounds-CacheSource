/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2699

function cs2_2699(intArg0: number, intArg1: struct, intArg2: number, intArg3: number, intArg4: number, intArg5: number, intArg6: number): void {
    let int7: number = graphics_options_detailset(intArg1, intArg0, intArg6);

    if (int7 == 0) {
        if (intArg1 == Struct.struct_845) {
            intArg5 = getDefaultWindowMode();
            setWindowMode(intArg5);
            graphics_options_message(intArg6, 0, "Burial Grounds could not use that resolution. Your previous resolution has been restored.", "", "");
        } else if (intArg1 == Struct.struct_1009) {
            cs2_3413(intArg6);
        } else if (intArg1 == Struct.struct_839) {
            graphics_options_message(intArg6, 1, "Ultra water detail uses water shaders that only the Modern OpenGL renderer supports.", "", "");
        } else {
            graphics_options_message(intArg6, 1, "Burial Grounds could not apply that setting. Your previous setting has been restored.", "", "");
        }
    } else if (autosetupGetLevel() != 0) {
        autosetupSetCustom();
    }

    if (intArg1 == Struct.struct_845) {
        proc_graphics_options_rebuild(intArg4, intArg5, intArg2, intArg3, intArg6);
    } else {
        cs2_3387(intArg4, intArg5, intArg2, intArg3, intArg6);
    }
}
