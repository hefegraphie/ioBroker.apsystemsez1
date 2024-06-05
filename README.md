Ein einfacher Adapter, der Daten aus dem APSystems EZ1-M Wechselrichter ausliest und in Datenpunkte schreibt.

Konfiguration: 
IP: Gib die IP Adresse deines Wechselrichters an

Frequenz: Definiere wie oft du die Daten auslesen möchtest.

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