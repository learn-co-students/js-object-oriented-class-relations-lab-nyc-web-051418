let store = {drivers: [], passengers: [],trips:[]}

let driverID=0
class Driver{
  constructor(name){
    this.id= ++driverID
    this.name=name
    store.drivers.push(this)
  }
  trips(){
    // debugger;
return store.trips.filter(trip=>trip.driverId === this.id)

    // return store.trips.filter(function (trip) {
    //   return trip.driverId === this.id
    // }.bind(this))
  }

  passengers(){
    // debugger;
    return store.passengers.filter(function (passenger) {
      return this.trips().filter(function (trip) {
        return trip.passengerId === passenger.id
    }.bind(this))
  }.bind(this))
}
}

let passengerID=0
class Passenger{
  constructor(name){
    this.id = ++passengerID
    this.name = name
    store.passengers.push(this)
  }
  trips(){
    return store.trips.filter(function (trip) {
      return trip.passengerId===this.id
    }.bind(this))
  }
  drivers(){
    // debugger;
    return store.drivers.filter(function (driver) {
      // debugger;
      return this.trips().filter(function (trip) {
        trip.driverId === driver.id
      }.bind(this))
    }.bind(this))
  }
}

let tripID=0
class Trip{
  constructor(driver,passenger){
      this.id = ++tripID
      this.driverId= driver.id
      this.passengerId=passenger.id
      store.trips.push(this)
  }
  passenger(){
    return  store.passengers.find(function (passenger) {
      return passenger.id ===this.passengerId
    }.bind(this))
  }
  driver(){
    return  store.drivers.find(function (driver) {
      return driver.id ===this.driverId
    }.bind(this))
  }
}
