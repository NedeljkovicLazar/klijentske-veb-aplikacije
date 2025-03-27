// {
//     "id": 175022,
//     "type": {
//       "id": 2,
//       "name": "DEPARTURE"
//     },
//     "flightKey": "202503272350IDJU  4861JU  486",
//     "flightNumber": "JU  486",
//     "destination": "Larnaca",
//     "scheduledAt": "2025-03-27T23:50:00",
//     "estimatedAt": null,
//     "connectedType": "1",
//     "connectedFlight": "JU  486",
//     "plane": "319",
//     "gate": null,
//     "terminal": "2"
//   }

export interface FlightModel {
    id: number
    type: {
        id: number
        name:string
    }
    flightKey: string
    flightNumber: string
    destination: string
    scheduledAt: string
    estimatedAt: null | string
    connectedType: string
    connectedFlight : string
    plane: string
    gate: null | string
    terminal: string
}