'use strict';

/*
 * Created with @iobroker/create-adapter v1.26.3
 */

// The adapter-core module gives you access to the core ioBroker functions
// you need to create an adapter
const utils = require('@iobroker/adapter-core');

// Load your modules here, e.g.:
// const fs = require("fs");

/**
 * The adapter instance
 * @type {ioBroker.Adapter}
 */
let adapter;

/**
 * Starts the adapter instance
 * @param {Partial<utils.AdapterOptions>} [options]
 */
function startAdapter(options) {
    // Create the adapter and define its methods
    return adapter = utils.adapter(Object.assign({}, options, {
        name: 'apsystemsez1',

        // The ready callback is called when databases are connected and adapter received configuration.
        // start here!
        ready: main, // Main method defined below for readability

        // is called when adapter shuts down - callback has to be called under any circumstances!
        unload: (callback) => {
            try {
                // Here you must clear all timeouts or intervals that may still be active
                // clearTimeout(timeout1);
                // clearTimeout(timeout2);
                // ...
                // clearInterval(interval1);

                callback();
            } catch (e) {
                callback();
            }
        },
    }));
}

async function main() {

    await adapter.setObjectNotExistsAsync('EZ1-M.Leistung.ertrag_channel1_livetime', {
        type: 'state',
        common: {
            name: 'ertrag_channel1_livetime',
            type: 'number',
            role: 'state',
            unit: 'KWh',
            read: true,
            write: true,
        },
        native: {},
    });

    await adapter.setObjectNotExistsAsync('EZ1-M.Leistung.ertrag_channel1_heute', {
        type: 'state',
        common: {
            name: 'ertrag_channel1_heute',
            type: 'number',
            role: 'state',
            unit: 'KWh',
            read: true,
            write: true,
        },
        native: {},
    });

    await adapter.setObjectNotExistsAsync('EZ1-M.Leistung.ertrag_channel2_livetime', {
        type: 'state',
        common: {
            name: 'ertrag_channel2_livetime',
            type: 'number',
            role: 'state',
            unit: 'KWh',
            read: true,
            write: true,
        },
        native: {},
    });

    await adapter.setObjectNotExistsAsync('EZ1-M.Leistung.ertrag_channel2_heute', {
        type: 'state',
        common: {
            name: 'ertrag_channel2_heute',
            type: 'number',
            role: 'state',
            unit: 'KWh',
            read: true,
            write: true,
        },
        native: {},
    });

    await adapter.setObjectNotExistsAsync('EZ1-M.Leistung.ertrag_gesamt', {
        type: 'state',
        common: {
            name: 'ertrag_gesamt',
            type: 'number',
            role: 'state',
            unit: 'KWh',
            read: true,
            write: true,
        },
        native: {},
    });

    await adapter.setObjectNotExistsAsync('EZ1-M.Leistung.ertrag_heute', {
        type: 'state',
        common: {
            name: 'ertrag_heute',
            type: 'number',
            role: 'state',
            unit: 'KWh',
            read: true,
            write: true,
        },
        native: {},
    });
    await adapter.setObjectNotExistsAsync('EZ1-M.Leistung.channel1_channel2_momentan', {
        type: 'state',
        common: {
            name: 'channel1_channel2_momentan',
            type: 'number',
            role: 'state',
            unit: 'W',
            read: true,
            write: true,
        },
        native: {},
    });

    await adapter.setObjectNotExistsAsync('EZ1-M.Leistung.channel1_momentan', {
        type: 'state',
        common: {
            name: 'channel1_momentan',
            type: 'number',
            role: 'state',
            unit: 'W',
            read: true,
            write: true,
        },
        native: {},
    });
    await adapter.setObjectNotExistsAsync('EZ1-M.Leistung.channel2_momentan', {
        type: 'state',
        common: {
            name: 'channel2_momentan',
            type: 'number',
            role: 'state',
            unit: 'W',
            read: true,
            write: true,
        },
        native: {},
    });

    await adapter.setObjectNotExistsAsync('EZ1-M.DeviceInfo.deviceId', {
        type: 'state',
        common: {
            name: 'deviceId',
            type: 'string',
            role: 'state',
            read: true,
            write: true,
        },
        native: {},
    });

    await adapter.setObjectNotExistsAsync('EZ1-M.DeviceInfo.deviceVer', {
        type: 'state',
        common: {
            name: 'deviceVer',
            type: 'string',
            role: 'state',

            read: true,
            write: true,
        },
        native: {},
    });

    await adapter.setObjectNotExistsAsync('EZ1-M.DeviceInfo.ssid', {
        type: 'state',
        common: {
            name: 'ssid',
            type: 'string',
            role: 'state',
            read: true,
            write: true,
        },
        native: {},
    });

    await adapter.setObjectNotExistsAsync('EZ1-M.DeviceInfo.ipAddr', {
        type: 'state',
        common: {
            name: 'ipAddr',
            type: 'string',
            role: 'state',
            read: true,
            write: true,
        },
        native: {},
    });
    await adapter.setObjectNotExistsAsync('EZ1-M.DeviceInfo.minPower', {
        type: 'state',
        common: {
            name: 'minPower',
            type: 'string',
            role: 'state',
            read: true,
            write: true,
        },
        native: {},
    });
    await adapter.setObjectNotExistsAsync('EZ1-M.DeviceInfo.maxPower', {
        type: 'state',
        common: {
            name: 'maxPower',
            type: 'string',
            role: 'state',
            read: true,
            write: true,
        },
        native: {},
    });
    await adapter.setObjectNotExistsAsync('EZ1-M.Set.maxPower', {
        type: 'state',
        common: {
            name: 'maxPower',
            type: 'string',
            role: 'state',
            read: true,
            write: true,
        },
        native: {},
    });
    await adapter.setObjectNotExistsAsync('EZ1-M.Leistung.ertrag_korrigiert', {
    type: 'state',
    common: {
        name: 'Ertrag Gesamtkorrigiert',
        type: 'number',
        role: 'value.power.production',
        unit: 'kWh',
        read: true,
        write: false, // write: false ist besser für reine Sensorwerte
    },
    native: {},
});

await adapter.setObjectNotExistsAsync('EZ1-M.Leistung.ertrag_setback_count', {
    type: 'state',
    common: {
        name: 'Anzahl der 540kWh Resets',
        type: 'number',
        role: 'value',
        read: true,
        write: true, // write: true, damit Nutzer ihn bei Bedarf resetten können
    },
    native: {},
});

    const request = require("request");

    let initialInterval = adapter.config.Frequenz * 1000;
    let errorInterval = adapter.config.FrequenzW * 1000;
    let myInterval;
    let myIntervalD;
    let lastSuccessfulRequestTime = Date.now();
    let lastErtragChannel1 = null;
    let lastErtragChannel2 = null;

    function leistungsdaten() {
        request('http://' + adapter.config.IP + ':8050/getOutputData', async (error, response, result) => {
            try {
                const objdata = JSON.parse(result);

                // Update the last successful request time
                lastSuccessfulRequestTime = Date.now();

                // Clear the existing interval to reset it
                clearInterval(myInterval);
                // Set the interval back to the initial interval (5 seconds)
                myInterval = setInterval(leistungsdaten, initialInterval);

                // Set the states with the retrieved data
                if (typeof objdata !== "undefined") {
                    if (objdata.data.te1 !== undefined) {
                        adapter.setState('EZ1-M.Leistung.ertrag_channel1_livetime', objdata.data.te1, true);
                    }
                    if (objdata.data.te2 !== undefined) {
                        adapter.setState('EZ1-M.Leistung.ertrag_channel2_livetime', objdata.data.te2, true);
                    }
                if (objdata.data.te1 !== undefined && objdata.data.te2 !== undefined) {
                    let currentTe1 = objdata.data.te1;
                    let currentTe2 = objdata.data.te2;
                    
                    // Normalen unkorrigierten Wert schreiben (für die Historie/Fehlersuche gut zu haben)
                    adapter.setState('EZ1-M.Leistung.ertrag_gesamt', currentTe1 + currentTe2, true);
                
                    // 1. Aktuellen Counter-Stand aus ioBroker holen
                    let stateCount = await adapter.getStateAsync('EZ1-M.Leistung.ertrag_setback_count');
                    let setbackCount = stateCount ? (stateCount.val || 0) : 0;
                    let countChanged = false;
                
                    // 2. Prüfen ob Channel 1 abgerutscht ist (Vergleich mit vorherigem Request)
                    if (lastErtragChannel1 !== null && currentTe1 < (lastErtragChannel1 - 500)) {
                        setbackCount++;
                        countChanged = true;
                        adapter.log.info(`Bug erkannt auf Kanal 1: Wert fiel von ${lastErtragChannel1} auf ${currentTe1}. Erhöhe Setback-Counter.`);
                    }
                
                    // 3. Prüfen ob Channel 2 abgerutscht ist
                    if (lastErtragChannel2 !== null && currentTe2 < (lastErtragChannel2 - 500)) {
                        setbackCount++;
                        countChanged = true;
                        adapter.log.info(`Bug erkannt auf Kanal 2: Wert fiel von ${lastErtragChannel2} auf ${currentTe2}. Erhöhe Setback-Counter.`);
                    }
                
                    // 4. Wenn Counter erhöht wurde, neuen Wert in ioBroker schreiben
                    if (countChanged) {
                        adapter.setState('EZ1-M.Leistung.ertrag_setback_count', setbackCount, true);
                    }
                
                    // 5. Korrigierten Gesamtwert berechnen und schreiben
                    let korrigierterWert = currentTe1 + currentTe2 + (setbackCount * 540);
                    adapter.setState('EZ1-M.Leistung.ertrag_korrigiert', korrigierterWert, true);
                
                    // 6. Aktuelle Werte für den nächsten Durchlauf merken
                    lastErtragChannel1 = currentTe1;
                    lastErtragChannel2 = currentTe2;
                }

// Helper function to calculate milliseconds until midnight
function getMillisUntilMidnight() {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);
    return midnight.getTime() - now.getTime();
}


if (objdata.data.e1 !== undefined && objdata.data.e2 !== undefined) {
    const value1 = objdata.data.e1;
    const value2 = objdata.data.e2;

    if (value1 === 0 && value2 === 0) {
        // Schedule the state update at midnight if values are 0
        setTimeout(() => {
            adapter.setState('EZ1-M.Leistung.ertrag_channel1_heute', value1, true);
            adapter.setState('EZ1-M.Leistung.ertrag_channel2_heute', value2, true);
            adapter.setState('EZ1-M.Leistung.ertrag_heute', value1 + value2, true);
        }, getMillisUntilMidnight());
    } else {
        // Update states immediately if values are not 0
        adapter.setState('EZ1-M.Leistung.ertrag_channel1_heute', value1, true);
        adapter.setState('EZ1-M.Leistung.ertrag_channel2_heute', value2, true);
        adapter.setState('EZ1-M.Leistung.ertrag_heute', value1 + value2, true);
    }
}
                    if (objdata.data.p1 !== undefined && objdata.data.p2 !== undefined) {
                        adapter.setState('EZ1-M.Leistung.channel1_channel2_momentan', objdata.data.p1 + objdata.data.p2, true);
                    }
                    if (objdata.data.p1 !== undefined) {
                        adapter.setState('EZ1-M.Leistung.channel1_momentan', objdata.data.p1, true);
                    }
                    if (objdata.data.p2 !== undefined) {
                        adapter.setState('EZ1-M.Leistung.channel2_momentan', objdata.data.p2, true);
                    }
                }
            } catch (error) {
                if (adapter.config.Warnungen) {
                    adapter.log.warn("Keine Daten erhalten, bitte IP oder Verbindung prüfen.");
                }

                // Clear the existing interval to reset it
                clearInterval(myInterval);
                if (adapter.config.DoppelInterval) {
                    // Double the error interval each time it fails
                    errorInterval *= 2;

                    // Reset the error interval if it exceeds 7200 seconds
                    if (errorInterval >= 7200000) {
                        errorInterval = adapter.config.FrequenzW * 1000;
                    }
                }

                // Set the interval to the updated error interval
                myInterval = setInterval(leistungsdaten, errorInterval);

                // Set the states to 0 in case of an error
                adapter.setState('EZ1-M.Leistung.channel1_channel2_momentan', 0);
                adapter.setState('EZ1-M.Leistung.channel1_momentan', 0);
                adapter.setState('EZ1-M.Leistung.channel2_momentan', 0);
            }
        });

        // Check if there have been no successful requests in the last 12 hours
        const twelveHoursAgo = Date.now() - (12 * 60 * 60 * 1000);
        if (lastSuccessfulRequestTime < twelveHoursAgo) {
            if (adapter.config.Warnungen) {
                adapter.log.warn("Es wurden in den letzten 12 Stunden keine erfolgreichen Anfragen durchgeführt.");
            }
        }
    }

    // Start the initial interval
    myInterval = setInterval(leistungsdaten, initialInterval);

    function deviceinfo() {
        request('http://' + adapter.config.IP + ':8050/getDeviceInfo', async (error, response, result) => {
            try {
                const objdatadev = JSON.parse(result);

                // Update the last successful request time
                lastSuccessfulRequestTime = Date.now();

                // Clear the existing interval to reset it

                // Set the states with the retrieved data
                if (typeof objdatadev !== "undefined") {
                    adapter.setState('EZ1-M.DeviceInfo.deviceId', objdatadev.data.deviceId);
                    adapter.setState('EZ1-M.DeviceInfo.deviceVer', objdatadev.data.devVer);
                    adapter.setState('EZ1-M.DeviceInfo.ssid', objdatadev.data.ssid);
                    adapter.setState('EZ1-M.DeviceInfo.ipAddr', objdatadev.data.ipAddr);
                    adapter.setState('EZ1-M.DeviceInfo.minPower', objdatadev.data.minPower);
                    adapter.setState('EZ1-M.DeviceInfo.maxPower', objdatadev.data.maxPower);
                }
            } catch (error) {
                if (adapter.config.Warnungen) {
                    adapter.log.warn("Keine Devicedaten, bitte IP oder Verbindung prüfen.");
                }
            }
        });

        // Check if there have been no successful requests in the last 12 hours
        const twelveHoursAgo = Date.now() - (12 * 60 * 60 * 1000);
        if (lastSuccessfulRequestTime < twelveHoursAgo) {
            adapter.log.warn("Es wurden in den letzten 12 Stunden keine erfolgreichen Anfragen durchgeführt.");
        }
    }

    // Start the initial interval
    deviceinfo();
    myIntervalD = setInterval(deviceinfo, 3600 * 1000);

    // SSet the Max Power
    myInterval = setInterval(leistungsdaten, initialInterval);

    adapter.subscribeStates("*");
    if (adapter.config.MaxPower != '0') {
        adapter.setState('EZ1-M.Set.maxPower', adapter.config.MaxPower);
    };

        adapter.on('stateChange', function (id, state) {

            if (id == 'apsystemsez1.0.EZ1-M.Set.maxPower') {

                adapter.getState('EZ1-M.Set.maxPower', function (err, state) {


                    request('http://' + adapter.config.IP + ':8050/setMaxPower?p=' + state?.val, async (error, response, result) => {
                        try {
                            const setdata = JSON.parse(result);
                            if (typeof setdata !== "undefined") {
                                adapter.log.info("Maximaler Output auf " + setdata.data.maxPower + " gesetzt");
                            }
                        } catch (error) {
                            adapter.log.error("Konnte maximalen Output nicht setzen");
                        }
                    })
                }
                )
            }
        }
        )



}


// @ts-ignore parent is a valid property on module
if (module.parent) {
    // Export startAdapter in compact mode
    module.exports = startAdapter;
} else {
    // otherwise start the instance directly
    startAdapter();
}
