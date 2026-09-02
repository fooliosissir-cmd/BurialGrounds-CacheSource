/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1940

function cs2_1940(): void {
    let int0: number = clientClock() + varc_sc_client_minutes_remaining * 3000;

    if (int0 < varc_sc_end_time_clientclock) {
        varc_sc_end_time_clientclock = int0;
    }
}
