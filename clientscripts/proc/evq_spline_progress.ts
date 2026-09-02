/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,evq_spline_progress]

function proc_evq_spline_progress(intArg0: number): void {
    if (varc_evq_spline_counter == splineLength(0) - 1) {
        if (intArg0 == 1) {
            camSmoothreset();
        }
        ifSetOnCamFinished(noHook(""), Component.fade2.eventlayer);
        return;
    }
    camMovealong(0, varc_evq_spline_counter, enumOp(type_int, type_int, varc_evq_spline_enum_speed, varc_evq_spline_counter), enumOp(type_int, type_int, varc_evq_spline_enum_speed, varc_evq_spline_counter + 1), 1, varc_evq_spline_counter);
    varc_evq_spline_counter = varc_evq_spline_counter + 1;
}
