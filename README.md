# APsystems EZ1 Data Adapter

This ioBroker adapter performs regular API requests to fetch data from an APsystems EZ1 device. The script handles intervals for data fetching, error management, and updates states based on the received data.

## Features

- Fetches data from an APsystems EZ1 device every configured interval.
- Handles errors by adjusting the request interval to double in case of fail
- After 2 Hours Interval is reset to configured Intervall
- Resets to the initial interval upon successful requests.
- Logs warnings and sets states appropriately, but some can be set off
- Warning if no succesfull call could be made within 12 hours
- Fetches DeviceInfo every 1 hour
- **Automatic correction of the known APsystems 540 kWh reset bug (see below)**
- ....more to come

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)
- ioBroker installation

### Configuration
- IP: Enter the IP address of your inverter

- Frequency: Define how often you want to read out the data

- Frequency Night: Define how often you want try to read data when APSystems EZ-1 is not reachable
    -   Doubles Interval after every failed Call
    -   Resets it, if it exeeds 3h. Starts to double again, etc. etc.

- Warnings: Defines whether or not warnings should be output in the log

---

## Known Bug: APsystems 540 kWh Reset

> ⚠️ **This is a known firmware bug in the APsystems EZ1 hardware/app — not a bug in ioBroker or this adapter.**  
> More information: [Homematic Forum – AP Systems Bug](https://homematic-forum.de/forum/viewtopic.php?f=47&t=87237)

The APsystems EZ1 has a known issue where the lifetime energy counter of each channel resets to `0` once it reaches `540 kWh`. This causes the total lifetime yield (`ertrag_gesamt`) to drop by 540 kWh per affected channel, resulting in incorrect historical data.

### How this adapter handles it

The adapter automatically detects when a channel value drops by more than 500 kWh compared to the previous reading. When such a drop is detected:

1. An internal reset counter (`EZ1-M.Leistung.ertrag_setback_count`) is incremented by 1 per affected channel.
2. A corrected total yield value is calculated and written to the state `EZ1-M.Leistung.ertrag_korrigiert`:


### Manual correction

If you reinstall the adapter or the automatic detection missed a reset (e.g. during a downtime), you can manually adjust the counter:

1. Open the ioBroker **Objects** tab.
2. Navigate to `apsystemsez1.0.EZ1-M.Leistung.ertrag_setback_count`.
3. Set it to the total number of 540 kWh resets that have occurred across **both channels combined**.

> Example: Channel 1 has reset once and Channel 2 has reset once → set the counter to `2`.

The corrected value in `ertrag_korrigiert` will update automatically on the next data fetch.
