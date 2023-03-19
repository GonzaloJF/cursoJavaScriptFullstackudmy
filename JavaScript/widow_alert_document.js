/**Window, alert, document**/

window.innerWidth

alert('hola mundo')

window.alert('hola mundo')

/**anidamiento y scope**/

var z='soy la primera variable'
{
    let i='cierto texto'
    let u='otra cosa'
    {
        const r=3
        var j=2
        {
            u=5
            u
        }
        r
        j
    }
    i
    u
}
z