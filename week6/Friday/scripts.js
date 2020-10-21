let input = document.querySelector('input');

input.addEventListener('change', getDimensions);

function getDimensions ()
{
    console.log(this.files);
    let dimensions=[];

   
    {
        for(let i=0; i<this.files.length; i++)
        
        {
            let file=this.files[i];
            let promise=new Promise((resolve, reject)=>
            {
                let src = window.URL.createObjectURL(file);
                console.log(src);
                let image = new Image;
                image.src=src;

                image.onload=function()
                {
                    resolve(image.width);
                    //console.log(image.width);
                }
                window.URL.revokeObjectURL(src);//to keep it empty for next files
            });
            dimensions.push(promise);
        }
        Promise.all(dimensions).then(function(dimensions)
        {
            console.log(dimensions);
        });
    }
}
