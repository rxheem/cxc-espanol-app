
// Request permission to show notificaions to the user
Notification.requestPermission(function(result) {
  if (result === 'denied') {
    console.log('Permission wasn\'t granted. Allow a retry.');
    return;
  } else if (result === 'default') {
    console.log('The permission request was dismissed.');
    return;
  }
  console.log('Permission was granted for notifications');
});

// Request the user's location
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  consol.log("Latitude: " + position.coords.latitude +
  "Longitude: " + position.coords.longitude);
}
