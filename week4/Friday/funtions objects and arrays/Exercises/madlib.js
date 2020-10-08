var noun="";
var verb="";
var adverb="";
var adjective="";
var story="I woke up quickly in the morning and looked at the grey sky and decided immediately to go back to bed";
var storyNouns = ['morning', 'sky', 'bed'];
var storyVerbs = ['woke up', 'looked at', 'go back', 'decided'];
var storyAdverbs = ['immediately','quickly'];
var storyAdjectives = ['grey'];
var blank="";

noun = prompt("Please enter a noun");
if (noun!="")   
    {
    blank=storyNouns[Math.floor(Math.random()*storyNouns.length)];
    story=story.replace(blank, noun);
    } 
    else{
        prompt ('Enter a noun');
    }       
//Endif
adverb = prompt("Please enter an adverb");
if (adverb!="")   
    {
    blank=storyAdverbs[Math.floor(Math.random()*storyAdverbs.length)];
   story=story.replace(blank, adverb);
   alert(blank);
    } 
    else{
        prompt ('Enter an adverb');
    }   
//Endif
adjective=prompt('Please enter an adjective');  
if (adjective!="")   
    {
    blank=storyAdjectives[Math.floor(Math.random()*storyAdjectives.length)]; 
    story=story.replace(blank, adjective);
    } 
    else{
        prompt ('Enter an adjective');
    }   
//Endif
verb= prompt('Please enter a verb');  
if (verb!="")   
    {
    blank=storyVerbs[Math.floor(Math.random()*storyVerbs.length)]; 
    story=story.replace(blank, verb);
    } 
    else{
        prompt ('Enter an adjective');
    }
//Endif 

window.alert(story);

