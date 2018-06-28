let store = {drivers: [], passengers: [], trips: []};
let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver {
  constructor (name) {
    this.name = name;
    this.id = ++driverId;
    store.drivers.push(this);
  }

  trips() {
    return store.trips.filter(
      function(trip) {
        return trip.driverId === this.id
      }.bind(this) // using function and bind
    )
  }

  passengers() {
    return this.trips().map( trip =>
        trip.passenger() // no (), FAILS! no ';' to work
      );
  }

}

class Passenger {
  constructor (name) {
    this.name = name;
    this.id = ++passengerId;
    store.passengers.push(this)
  }

  trips() {
    return store.trips.filter(
      trip => (trip.passengerId === this.id)
    ) //with ()
  }

  drivers() {
    return this.trips().map( trip =>
      {return trip.driver();
      });
  }

}

class Trip {
  constructor (driver, passenger) {
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    this.id = ++tripId;
    store.trips.push(this)
  }

    driver() {
      return store.drivers.find(
        function(driver) {
          return driver.id === this.driverId
        }.bind(this)
      )
    }

    passenger() {
      return store.passengers.find(
        function(passenger) {
          return passenger.id === this.passengerId
        }.bind(this)
      )
    }

}
