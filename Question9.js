function displayCar(){
  console.log("Vehicle Type: Car(Four wheels, encosed cabin)");
}
function displayTruck(){
  console.log("Vehicle Type: Truck(Heavy duty, hauling capacity)");
}
function displayBike(){
  console.log("Vehicle Type: Bike(Two wheels, manual balance)");
}

function vehicleInfo(vehicleCategory, callbackFn){
  console.log('\n--- Calling Info for: ${vehicleCategory.toUpperCase()}---');

  callbackFn();
  console.log("-------------------------------------------");
}


vehicleInfo("Car", displayCar);
vehicleInfo("Truck", displayTruck);
vehicleInfo("Bike", displayBike);
