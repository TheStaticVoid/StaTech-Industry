// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:hangglider/${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let hg = (id) => `hangglider:${id}`;

    let HANGGLIDER_REMOVED_RECIPES = [
        hg('glider_wing'),
        hg('glider_framework')
    ];
    HANGGLIDER_REMOVED_RECIPES.forEach(id => e.remove({id: id}));

    // -- GLIDER WING -- //
    e.shaped(hg('glider_wing'), [
        ' SL',
        'SWL',
        'LLR'
    ],
    {
        S: mc('string'),
        L: mc('leather'),
        W: '#' + mc('wool'),
        R: mi('iron_rod')
    }).id(st('glider_wing'));

    // -- GLIDER FRAMEWORK -- //
    e.shaped(hg('glider_framework'), [
        ' R ',
        'R R',
        'PPP'
    ],
    {
        R: mi('iron_rod'),
        P: mi('iron_plate')
    }).id(st('glider_framework'));
});