// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ItemEvents.foodEaten(event => {
    const EatenOutputs = [
        // Eaten food                   // Item to give back
        [ kj('statech_energy'),         kj('empty_can') ],
        [ kj('bepsi'),                  kj('empty_can') ],
        [ kj('coke_cola'),              kj('empty_can') ],
        [ kj('greg_cola'),              kj('empty_can') ],
        [ kj('sulfuric_acid_bottle'),   mc('glass_bottle') ],
        [ kj('uranium_cereal'),         mc('bowl') ],
        [ kj('nuka_cola'),              kj('bottle_cap') ]
    ];

    EatenOutputs.forEach(eatenOutput => {
        if (event.getItem() == Item.of(eatenOutput[0])) {
            event.getPlayer().addItem(Item.of(eatenOutput[1]));
        }
    });
});