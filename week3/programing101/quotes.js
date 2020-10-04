
//Print qoutes
var author = prompt('please enter the name of the author');
if (author==""){
    author = prompt('please enter a valid name of the author');
}
var quote = prompt('Please enter the quote');
    if (quote==""){
    quote = prompt('please enter a valid quote');
    }

for (var i=0;i<quote.length; i++)
{
    quote = quote.replace('"', "").replace("'", "");
}
    alert(author +" ' "+ quote+ " '");  
