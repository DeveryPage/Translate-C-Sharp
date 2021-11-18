// Put your code here
console.log("Do you velieve in magic?");
console.log("------------------------");


const SpellBook = (title, spells) => {
    return {
        title: title,
        spells: spells
    }
}

function DisplaySpellBook(book) {
    console.log(book.title);
    for (const aSpell of book.spells) {
        console.log(`${aSpell.Name}`);
    }
}

const MakeEvilSpellBook = (allSpells) => {
    const evilBook = SpellBook("EvilSpellBook", allSpells.filter(spell => spell.IsEvil))

    return evilBook;
}

const MakeGoodSpellBook = (allSpells) => {
    const goodBook = SpellBook("GoodSpellBook", allSpells.filter(spell => !spell.IsEvil))

    return goodBook;
}

function GetAllSpells() {
    const spells = [{
        Name: "Turn enemy into a newt",
        IsEvil: true,
        EnergyReqired: 5.1
    },
    {
        Name: "Conjure some gold for a local charity",
        IsEvil: false,
        EnergyReqired: 2.99
    },
    {
        Name: "Give a deaf person the ability to heal",
        IsEvil: false,
        EnergyReqired: 12.2
    },
    {
        Name: "Make yourself emperor of the universe",
        IsEvil: true,
        EnergyReqired: 100.0
    },
    {
        Name: "Convince your relatives your political views are correct",
        IsEvil: false,
        EnergyReqired: 2921.5
    }]
    return spells;
}


allSpells = GetAllSpells();

const goodSpellBook = MakeGoodSpellBook(allSpells);

const evilSpellBook = MakeEvilSpellBook(allSpells);

DisplaySpellBook(goodSpellBook);
console.log("")
DisplaySpellBook(evilSpellBook);