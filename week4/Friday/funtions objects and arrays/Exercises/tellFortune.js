function tellFortune(numberOfChildren, nameOfPartner, geoLoc, jobTitle)
{
    alert("You will be a "+ jobTitle+ " in " +geoLoc +", and married to " + nameOfPartner+" with"  + numberOfChildren+ "kids.");
    return geoLoc, jobTitle, numberOfChildren, nameOfPartner;
}

alert(tellFortune(12, 'Love', 'Somewhere fancy in Switzerland', 'pilot'));

window.alert(tellFortune('55', 'Abbas', 'San Francisco', 'software Engineer'));

window.alert(tellFortune(12, 'chemistry', 'science', 'instrument'));
