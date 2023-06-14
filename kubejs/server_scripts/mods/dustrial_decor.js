ServerEvents.recipes(e => {
    let st = (id) => `statech:dustrial_decor/${id}`;
    let dd = (id) => `dustrial_decor:${id}`;

    // -- SHEET METAL DOOR -- //
    e.shaped('3x ' + dd('sheet_metal_door'), [
        'AA ',
        'AA ',
        'AA '
    ],
    {
        A: dd('sheet_metal')
    })
    .id(st('sheet_metal_door'));
});