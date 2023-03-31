ServerEvents.recipes(e => {
    e.remove( {id: 'cotton_ball' });
    e.shapeless('2x minecraft:string', [
        'cottonly:ball', 'cottonly:ball'
    ]);
});