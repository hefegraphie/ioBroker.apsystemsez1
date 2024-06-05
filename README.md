

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
- ....mor to come

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)
- ioBroker installation

### Configuration
- IP: Enter the IP address of your inverter

- Frequency: Define how often you want to read out the data

- Frequency Night: Define how often you want try to read data when APSystems EZ-1 is not reachable

- Warnings: Defines whether or not warnings should be output in the log
