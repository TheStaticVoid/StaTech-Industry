ServerEvents.recipes(e => {
    let st = (id) => `statech:${id}`;
    e.remove({id: 'chisel:chisel'});
    e.shaped('chisel:chisel', [
        ' P',
        'S '
    ],
    {
        P: '#c:iron_plates',
        S: '#c:wood_sticks'
    })
    .id(st('chisel'));
});