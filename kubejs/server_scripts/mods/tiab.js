// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:tiab/${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let tb = (id) => `tiab:${id}`;

    // Remove the default Time in a Bottle recipe
    e.remove({ id: tb('time_in_a_bottle') });

    // -- TIME IN A BOTTLE -- //
    e.shaped(tb('time_in_a_bottle'), [
        'GGG',
        'DCD',
        'ABA'
    ],
    {
        G: { item: mi('gold_curved_plate') },
        D: { item: mc('diamond') },
        C: { item: mc('clock') },
        A: { item: mc('lapis_lazuli') },
        B: { item: mc('glass_bottle') }
    }).id(st('time_in_a_bottle'));
});