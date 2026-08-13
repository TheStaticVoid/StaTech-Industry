// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------
ItemEvents.foodEaten((event) => {
    // prettier-ignore
    const EatenOutputs = [
        // Eaten food                   // Item to give back
        [kj('statech_energy'),          ei('tin_can')],
        [kj('bepsi'),                   ei('tin_can')],
        [kj('coke_cola'),               ei('tin_can')],
        [kj('greg_cola'),               ei('tin_can')],
        [kj('sulfuric_acid_bottle'),    mc('glass_bottle')],
        [kj('uranium_cereal'),          mc('bowl')],
        [kj('fruity_pebbles'),          mc('bowl')],
        [kj('nuka_cola'),               kj('bottle_cap')],
    ];

    EatenOutputs.forEach((eatenOutput) => {
        if (event.getItem().id == eatenOutput[0]) {
            event.getPlayer().addItem(Item.of(eatenOutput[1]));
        }
    });
});
