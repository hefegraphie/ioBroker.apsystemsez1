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
    // The adapters config (in the instance object everything under the attribute "native") is accessible via
    // adapter.config:

    /*
        For every state in the system there has to be also an object of type state
        Here a simple template for a boolean variable named "testVariable"
        Because every adapter instance uses its own unique namespace variable names can't collide with other adapters variables
    */

    await adapter.setObjectNotExistsAsync('EZ1-M.ertrag_channel1_livetime', {
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

    await adapter.setObjectNotExistsAsync('EZ1-M.ertrag_channel1_heute', {
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

    await adapter.setObjectNotExistsAsync('EZ1-M.ertrag_channel2_livetime', {
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

    await adapter.setObjectNotExistsAsync('EZ1-M.ertrag_channel2_heute', {
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

    await adapter.setObjectNotExistsAsync('EZ1-M.ertrag_gesamt', {
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

    await adapter.setObjectNotExistsAsync('EZ1-M.ertrag_heute', {
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
    await adapter.setObjectNotExistsAsync('EZ1-M.channel1_channel2_momentan', {
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

    await adapter.setObjectNotExistsAsync('EZ1-M.channel1_momentan', {
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

    await adapter.setObjectNotExistsAsync('EZ1-M.channel2_momentan', {
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

    // In order to get state updates, you need to subscribe to them. The following line adds a subscription for our variable we have created above.
    //adapter.subscribeStates('testVariable');
    // You can also add a subscription for multiple states. The following line watches all states starting with "lights."
    // adapter.subscribeStates('lights.*');
    // Or, if you really must, you can also watch all states. Don't do this if you don't need to. Otherwise this will cause a lot of unnecessary load on the system:
    // adapter.subscribeStates('*');

    var Intervall;
    Intervall = adapter.config.Frequenz * 1000

    setInterval(async () => {

        require("request")('http://' + adapter.config.IP + ':8050/getOutputData', async (error, response, result) => {

            try {
                const objdata = JSON.parse(result)
                Intervall = adapter.config.Frequenz * 1000
                adapter.setState('EZ1-M.ertrag_channel1_livetime', objdata.data.te1)
                adapter.setState('EZ1-M.ertrag_channel2_livetime', objdata.data.te2)
                adapter.setState('EZ1-M.ertrag_channel1_heute', objdata.data.e1)
                adapter.setState('EZ1-M.ertrag_channel2_heute', objdata.data.e2)
                adapter.setState('EZ1-M.ertrag_gesamt', objdata.data.te1 + objdata.data.te2)
                adapter.setState('EZ1-M.ertrag_heute', objdata.data.e1 + objdata.data.e2)
                adapter.setState('EZ1-M.channel1_channel2_momentan', objdata.data.p1 + objdata.data.p2)
                adapter.setState('EZ1-M.channel1_momentan', objdata.data.p1)
                adapter.setState('EZ1-M.channel2_momentan', objdata.data.p2)
            }
            catch (error) {
                adapter.log.warn("Keine Daten erhalten, bitte IP oder Verbindung prüfen.");
                Intervall = 600000
            }
        })



    }, Intervall);

}

// @ts-ignore parent is a valid property on module
if (module.parent) {
    // Export startAdapter in compact mode
    module.exports = startAdapter;
} else {
    // otherwise start the instance directly
    startAdapter();
}