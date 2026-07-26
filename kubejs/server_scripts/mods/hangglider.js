// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:hangglider/${id}`;

    // -- HANG GLIDER REMOVED RECIPES -- //
    const HANGGLIDER_REMOVED_RECIPES = [
        hg('glider_framework'),
        hg('glider_wing'),
        hg('reinforced_hang_glider')
    ];
    HANGGLIDER_REMOVED_RECIPES.forEach(id => event.remove({ id: id }));

    // -- GLIDER FRAMEWORK -- //
    event.shaped(hg('glider_framework'), [
        ' R ',
        'R R',
        'RRR'
    ], {
        R: '#c:rods/iron'
    }).id(st('glider_framework'));

    // -- GLIDER WING -- //
    event.shaped(hg('glider_wing'), [
        '  R',
        ' RL',
        'RLL'
    ], {
        R: '#c:rods/iron',
        L: '#c:leathers'
    }).id(st('glider_wing'));

    // ----------------------//
    // -- PACKER RECIPES -- //
    // ----------------------//

    // -- REINFORCED HANG GLIDER -- //
    packer(
        event,
        st('reinforced_hang_glider'),
        4,
        200,
        [
            { amount: 1, item: hg('hang_glider') },
            { amount: 2, item: mi('steel_plate') }
        ],
        [{ amount: 1, item: hg('reinforced_hang_glider') }]
    );
});
