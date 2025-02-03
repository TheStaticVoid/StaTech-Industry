// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:elevatorid/${id}`;
    let el = (id) => `elevatorid:${id}`;
    let mc = (id) => `minecraft:${id}`;

    let COLORS = [
        'white',
        'orange',
        'magenta',
        'light_blue',
        'yellow',
        'lime',
        'pink',
        'gray',
        'light_gray',
        'cyan',
        'purple',
        'blue',
        'brown',
        'green',
        'red',
        'black'
    ];

    // -- REMOVE DEFAULT RECIPES AND IMPROVE -- //
    COLORS.forEach(color => {
        e.remove({ id: el(`elevator_${color}`) });

        e.shaped(el(`elevator_${color}`), [
            'WEW',
            'IPI',
            'WIW'
        ],
        {
            W: mc(`${color}_wool`),
            E: mc('ender_pearl'),
            I: '#c:plates/iron',
            P: mc('piston')
        }).id(st(`elevator_${color}`));
    });
});