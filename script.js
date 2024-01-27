var posibilitati = {
    1: {
        nume: "urinarea",
        img: "img/pee.png"
    },
    2: {
        nume: "scaderea in greutate",
        img: "img/lose-weight.png"
    },
    3: {
        nume: "lipsa energiei",
        img: "img/no-energy.png"
    },
    4: {
        nume: "setea",
        img: "IMG/drink-water.png"
    }
};
console.log(posibilitati);
console.log(typeof (posibilitati));

var posibilitati_afisare = "";
for (var key in posibilitati) {
    posibilitati_afisare += `
    <div class="symptoms_info">
        <div>
            <p>
                ${posibilitati[key].nume}
            </p>
        </div>
        <div>
            <img src="${posibilitati[key].img}">
        </div>
    </div>      
    `
}
document.getElementById("posibilitati").innerHTML = posibilitati_afisare;

var risc = {
    1: {
        risc_nume: "RUDE CU DIABET ZAHARAT",
        risc_img: "img/family.png"
    },
    2: {
        risc_nume: "SEDENTARISM",
        risc_img: "img/tv-watching.png"
    },
    3: {
        risc_nume: "ALIMENTATIE NESANATOASA",
        risc_img: "img/eating-disorder.png"
    },
    4: {
        risc_nume: "GREUTATE CORPORALA EXCESIVA",
        risc_img: "img/obesity.png"
    }

};
console.log(risc);
console.log(typeof (risc));

var risc_afisare = "";
for (var risc_key in risc) {
    risc_afisare +=
        `
    <div class="symptoms_info">
                    <div>
                        <p>
                        ${risc[risc_key].risc_nume}
                        </p>
                    </div>
                    <div>
                    <img src="${risc[risc_key].risc_img}">
                    </div>
                </div>
    `
}
document.getElementById("riscuri").innerHTML = risc_afisare;

var sfaturi = {
    1: {
        sfaturi_nume: "MERS PE JOS",
        sfaturi_img: "img/walking.png"
    },
    2: {
        sfaturi_nume: "DANS",
        sfaturi_img: "img/dance.png"
    },
    3: {
        sfaturi_nume: "INOT",
        sfaturi_img: "img/swimming.png"
    },
    4: {
        sfaturi_nume: "CICLISM",
        sfaturi_img: "img/bicycle.png"
    }
};
console.log(sfaturi);
console.log(typeof (sfaturi));

var sfaturi_afisare = "";
for (var sfaturi_key in sfaturi) {
    sfaturi_afisare +=
        `
    <div class="simptome_info">
                <div>
                    <p>
                    ${sfaturi[sfaturi_key].sfaturi_nume}
                    </p>
                </div>
                <div>
                    <img src="${sfaturi[sfaturi_key].sfaturi_img}">
                </div>
            </div>
    `
};
document.getElementById("sfaturi").innerHTML = sfaturi_afisare;
