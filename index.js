let store = {
  drivers: [],
  passengers: [],
  trips: []
};

let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver {
  constructor(name) {
    this.id = ++driverId,
    this.name = name;
    store.drivers.push(this);
  }

  trips() {
    var that = this;
    return store.trips.filter(function(trip) {
      return trip.driverId === that.id;
    })
  }

    passengers() {
      var that = this;
      return this.trips().map(function(trip) {
        return trip.passenger();
      })
    }
  }

class Passenger {
  constructor(name) {
    this.id = ++passengerId;
    this.name = name;
    store.passengers.push(this);
  }

  trips() {
    var that = this;
    return store.trips.filter(function(trip) {
      return trip.passengerId === that.id;
    })
  }

  drivers() {
    var that = this;
    return this.trips().map(function(trip) {
      return trip.driver();
    })
  }
}

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId;
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    store.trips.push(this);
  }

  driver() {
    var that = this;
    return store.drivers.find(function(driver) {
      return driver.id === that.driverId
    })
  }

  passenger() {
    var that = this;
    return store.passengers.find(function(passenger) {
      return passenger.id === that.passengerId
    })
  }
}
