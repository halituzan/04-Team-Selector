/* Gerekli kodlar script.js içerisinde mevcut. 
Kendi Kendine Meydan Okuma:

-Takımlardan ortalamanın üzerinde oyunculardan rastgele alarak 6 kişilik bir takım oluştur.
- 2 defans
- 2 orta saha
- 2 forvet 

toplamda 6 kişi olacak şekilde bir takım oluştur.

*/

/* Level Extreme
Bu takımı index.html de isimleri ile beraber bir saha yapısında yerlerine yerleştir. 

|-------------------|
| def1        def2  |
|                   |
|                   |
| cen1  /````\ cen2 |
|------|      |-----|
|       \,,,,/      |
|                   |
| for1         for2 |
|                   |
|-------------------|

Daha Sonra isimler yerine Resimler Olsun.

*/

randomNumber = (arr) => Math.floor(Math.random() * arr.length);

function twoPlayerforPosition() {
    const data = team.aboveAverage();
    let guard = [];
    let center = [];
    let forward = [];

    for (let i = 0; i < 2; i++) {
        guard.push(data.guard[randomNumber(data.guard)])
        center.push(data.center[randomNumber(data.center)])
        forward.push(data.forward[randomNumber(data.forward)])
    }
    if (guard[0] === guard[1]) {
        let x = data.guard.filter(i => i !== guard[0]);
        guard[1] = x[randomNumber(x)]
    }
    if (center[0] === center[1]) {
        let x = data.center.filter(i => i !== center[0]);
        center[1] = x[randomNumber(x)]
    }
    if (forward[0] === forward[1]) {
        let x = data.forward.filter(i => i !== forward[0]);
        forward[1] = x[randomNumber(x)]
    }
    return [guard, center, forward]

}

function playerPoint(position,player) {
    let point = team._positions[position];
    for (key in point) {
        if (point[key].includes(player)) {
            return point[key][1];
        }
        
    }
}

function playerImg(position,player) {
    let point = team._positions[position];
    for (key in point) {
        if (point[key].includes(player)) {
            return point[key][2];
        }
        
    }
}




let defans = twoPlayerforPosition()[0]
let ortasaha = twoPlayerforPosition()[1]
let forvet = twoPlayerforPosition()[2]


console.log(twoPlayerforPosition())
console.log(defans)

const guar = document.getElementById("guar");
const cent = document.getElementById("cent");
const forw = document.getElementById("forw");
const ydguar = document.getElementById("ydguar");
const ydcent = document.getElementById("ydcent");
const ydforw = document.getElementById("ydforw");


function substitutes(position,pos) {
    const data = team._positions[position].sort((a,b)=>b[1]-a[1]);
    let substitutes = [];
    for (let i = 0; i < data.length; i++) {
        
        if (!data[i].includes(pos[0]) && !data[i].includes(pos[1]) ) {
            substitutes.push(data[i][0])
        }
    }
    return substitutes
}

console.warn("asdasd")
console.log(substitutes("guards",defans))
console.log(defans)



guar.innerHTML = `
<div class="flex">
<div class="left flex-direction-column">

<i><img src="${playerImg("guards",defans[0])}"></i>

<div class="info">
<span>${defans[0]}</span>
<span class="point">${playerPoint("guards",defans[0])}</span>
</div>
</div>

<div class="right flex-direction-column">
<i><img src="${playerImg("guards",defans[1])}"></i>
<div class="info">
<span>${defans[1]}</span>
<span class="point">${playerPoint("guards",defans[1])}</span>
</div>
</div>
`;
cent.innerHTML = `
<div class="flex">
<div class="left flex-direction-column">
<i><img src="${playerImg("centers",ortasaha[0])}"></i>
<div class="info">
<span>${ortasaha[0]}</span>
<span class="point">${playerPoint("centers",ortasaha[0])}</span>
</div>
</div>


<div class="right flex-direction-column">
<i><img src="${playerImg("centers",ortasaha[1])}"></i>
<div class="info">
<span>${ortasaha[1]}</span>
<span class="point">${playerPoint("centers",ortasaha[1])}</span>

</div>
</div>
`;


forw.innerHTML = `
<div class="flex">
<div class="left flex-direction-column">
<i><img src="${playerImg("forwards",forvet[0])}"></i>
<div class="info">
<span>${forvet[0]}</span>
<span class="point">${playerPoint("forwards",forvet[0])}</span>
</div>
</div>
<div class="right flex-direction-column">
<i><img src="${playerImg("forwards",forvet[1])}"></i>
<div class="info">
<span>${forvet[1]}</span>
<span class="point">${playerPoint("forwards",forvet[1])}</span>

</div>
</div>
`;


ydguar.innerHTML = `
<div class="flex-direction-column">
<i><img src="${playerImg("guards",substitutes("guards",defans)[0])}"></i>
<div class="info">
<span class="name-info">${substitutes("guards",defans)[0]}</span>
<span class="point">${playerPoint("guards",substitutes("guards",defans)[0])}</span>
</div>

</div>
<div class="flex-direction-column">

<i><img src="${playerImg("guards",substitutes("guards",defans)[1])}"></i>
<div class="info">
<span class="name-info">${substitutes("guards",defans)[1]}</span>
<span class="point">${playerPoint("guards",substitutes("guards",defans)[1])}</span>
</div>

</div>
<div class="flex-direction-column">

<i><img src="${playerImg("guards",substitutes("guards",defans)[2])}"></i>
<div class="info">
<span class="name-info">${substitutes("guards",defans)[2]}</span>
<span class="point">${playerPoint("guards",substitutes("guards",defans)[2])}</span>
</div>

</div>
`

ydcent.innerHTML = `
<div class="flex-direction-column">
<i><img src="${playerImg("centers",substitutes("centers",ortasaha)[0])}"></i>
<div class="info">
<span class="name-info">${substitutes("centers",ortasaha)[0]}</span>
<span class="point">${playerPoint("centers",substitutes("centers",ortasaha)[0])}</span>
</div>

</div>
<div class="flex-direction-column">

<i><img src="${playerImg("centers",substitutes("centers",ortasaha)[1])}"></i>
<div class="info">
<span class="name-info">${substitutes("centers",ortasaha)[1]}</span>
<span class="point">${playerPoint("centers",substitutes("centers",ortasaha)[1])}</span>
</div>

</div>
<div class="flex-direction-column">

<i><img src="${playerImg("centers",substitutes("centers",ortasaha)[2])}"></i>
<div class="info">
<span class="name-info">${substitutes("centers",ortasaha)[2]}</span>
<span class="point">${playerPoint("centers",substitutes("centers",ortasaha)[2])}</span>
</div>

</div>
`
ydforw.innerHTML = `
<div class="flex-direction-column">
<i><img src="${playerImg("forwards",substitutes("forwards",forvet)[0])}"></i>
<div class="info">
<span class="name-info">${substitutes("forwards",forvet)[0]}</span>
<span class="point">${playerPoint("forwards",substitutes("forwards",forvet)[0])}</span>
</div>

</div>
<div class="flex-direction-column">

<i><img src="${playerImg("forwards",substitutes("forwards",forvet)[1])}"></i>
<div class="info">
<span class="name-info">${substitutes("forwards",forvet)[1]}</span>
<span class="point">${playerPoint("forwards",substitutes("forwards",forvet)[1])}</span>
</div>

</div>
<div class="flex-direction-column">

<i><img src="${playerImg("forwards",substitutes("forwards",forvet)[2])}"></i>
<div class="info">
<span class="name-info">${substitutes("forwards",forvet)[2]}</span>
<span class="point">${playerPoint("forwards",substitutes("forwards",forvet)[2])}</span>
</div>

</div>
`