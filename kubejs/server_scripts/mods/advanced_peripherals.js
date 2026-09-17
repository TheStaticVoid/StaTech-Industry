MoreJS.structureLoad((event) => {
    if (event.id.includes('village')) {
        event.forEachPalettes((palette) => {
            palette.removeIf((info) => {
                let contains = (substring) => info.getId().contains(substring);
                return (
                    contains('computercraft') || contains('advancedperipherals')
                );
            });
        });
    }
});
