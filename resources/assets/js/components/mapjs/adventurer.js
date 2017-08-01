//watch postition vars
      var timeoutVal = 10 * 1000 * 1000;
      
      var watchId = null;

//Build the Adventurer Icon here
var adventurerIcon = {
          // path: mapIcon['adventurer']['WingedSword'],
          path: 'M246.78 18.656v101.22c7.988.266 16.003.267 24 0V18.655h-24zm-72.155 110.406v30.813h168.313v-30.813c-55.755 12.73-113.104 12.604-168.313 0zm-150.28 35.063l9.343 37.594 132.187 8.093 9.406.562-.655 9.406c-2.594 38.077 5.257 78.673 25.563 112.44l7.625-146.47-183.47-21.625zm463.186 0l-177.842 20.97 7.187 137.843c16.457-31.775 22.736-68.503 20.375-103.157l-.625-9.405 9.375-.563 132.188-8.093 9.343-37.595zm-260.624 14.438L216.25 383.188v44.187l44.375 66.53 43.03-65.342-13-250h-22.53V429.5h-18.688V178.562h-22.53zM38.186 220.72c3.52 11.234 8.043 23.026 13.345 34.936l104.5-8.562c-.358-6.42-.452-12.835-.28-19.188L38.187 220.72zm435.502 0l-117.563 7.186c.172 6.353.077 12.768-.28 19.188l104.5 8.562c5.3-11.91 9.825-23.702 13.342-34.937zm-315.844 45l-97.72 8c5.446 10.777 11.426 21.472 17.782 31.81l84.063-18.28c-1.735-7.117-3.12-14.322-4.126-21.53zm196.187 0c-1.003 7.207-2.36 14.414-4.092 21.53l84.03 18.28c6.357-10.338 12.338-21.033 17.782-31.81l-97.72-8zM167.19 305.25L88.75 322.313c6.694 9.8 13.67 19.05 20.75 27.468l64.938-26.342c-2.725-5.955-5.143-12.023-7.25-18.188zm177.5 0c-2.107 6.166-4.527 12.232-7.25 18.188l64.937 26.343c7.08-8.415 14.056-17.666 20.75-27.467l-78.438-17.063z',
          fillColor: 'white',
          fillOpacity: 0.8,
          scale: .1,
          strokeColor: 'black',
          strokeWeight: 1
      };

//Build the Adventurer encounter radius here
//This circle is the graphical representation of the range within whci adventurer will encounter monsters etc.
var adventurerEncounterRangeMarker = null;

function generateAdventurer (pos, map ,marker) {
  marker = new google.maps.Marker({
          position: pos,
          map: map,
          icon: adventurerIcon,
          title: 'Adventurer, you are here'
        });

  // showHideEncounterRangeMarker();
}

function updateAdventurerPosition () {
  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    
    //Clear old watch first, then create new one
    navigator.geolocation.clearWatch(watchId);
    
    //Set watch id and watch position
     watchId = navigator.geolocation.watchPosition(successAdventurerWatch, function() {
      handleLocationError(true, infoWindow, map.getCenter());
      }, { enableHighAccuracy: true, timeout: timeoutVal, maximumAge: (10 * 1000) }
      );


  
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function pauseUpdateAdventurerPosition () {
  if (navigator.geolocation) {
    navigator.geolocation.clearWatch(watchId);
  }
}

function successAdventurerWatch(position) {
      pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      //Update encounter range to adventurer
      if (adventurerEncounterRangeMarker != null) {
        adventurerEncounterRangeMarker.setCenter(pos);
      }

      console.log(pos);


      consoleDisplay.innerText = 'lat: ' + pos['lat'] + ' ' + 'lng: ' + pos['lng'];
      
      //Updates Adventurer Marker
      adventurerMarker.setPosition(pos);

      //Monsters check for adventurer
      // checkForAdventurer();
      //Adventurer checks for monsters
      checkForMonster();
      checkForTreasure();
      // checkForInteractable();
  }

  function showHideEncounterRangeMarker () {
    //First hide and clear old marker
    if (adventurerEncounterRangeMarker != null) {
      adventurerEncounterRangeMarker.setMap(null);
      adventurerEncounterRangeMarker = null;
    } else {

      //Build the Adventurer encounter radius here
      //This circle is the graphical representation of the range within whci adventurer will encounter monsters etc.
      adventurerEncounterRangeMarker = new google.maps.Circle({
          strokeColor: '#0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: 'blue',
          fillOpacity: 0.35,
          map: map,
          center: pos,
          radius: 400
        });
    }
  }

//Adventurer Checks for Monster
//May later change this to checking for interactable
function checkForMonster () {
  if (Monster.entitys != [] && adventurerEncounterRangeMarker != null) { 
    var bounds = adventurerEncounterRangeMarker.getBounds();
    for (var i in Monster.entitys) {
      if (bounds.contains(Monster.entitys[i].interactablePos)) {
        console.log('fight!');
        console.log('You have encountered a monster that has '
          + Monster.entitys[i].stats['health']
          + ' points of health, '
          + Monster.entitys[i].stats['attack']
          + ' points of attack, and '
          + Monster.entitys[i].stats['defense']
          + ' points of defense.');
        consoleDisplay.innerText = 'Fight!';
       } 
    }
  }
}

//Adventurer Checks for Treasure
//May later change this to checking for interactable
function checkForTreasure () {
  if (Treasure.entitys != [] && adventurerEncounterRangeMarker != null) { 
    var bounds = adventurerEncounterRangeMarker.getBounds();
    for (var i in Treasure.entitys) {
      if (bounds.contains(Treasure.entitys[i].interactablePos)) {
        console.log('Gold!');
        consoleDisplay.innerText = 'Treasure!';
       } 
    }
  }
}


export {generateAdventurer, adventurerIcon};
