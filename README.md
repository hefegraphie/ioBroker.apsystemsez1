

# APsystems EZ1 Data Adapter

This ioBroker adapter performs regular API requests to fetch data from an APsystems EZ1 device. The script handles intervals for data fetching, error management, and updates states based on the received data.

## Features

- Fetches data from an APsystems EZ1 device every configured interval.
- Handles errors by adjusting the request interval.
- Resets to the initial interval upon successful requests.
- Logs warnings and sets states appropriately.

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)
- ioBroker installation

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/apsystemsez1-adapter.git
   cd apsystemsez1-adapter
### Configuration:
IP: Enter the IP address of your inverter

Frequency: Define how often you want to read out the data

Frequency Night: Define how often you want try to read data when APSystems EZ-1 is not reachable
