ServerEvents.recipes(event => {
  const recipes = [
    // {
    //     "id": "irons_spellbooks:electrocute",
    //     "output": "ars_nouveau:spell_parchment",
    //     "items": [],
    //     "sourceCost": 5000,
    // },

  ]

  recipes.forEach((recipe) => {
    var tempnbt = {
      "ISB_Spells": {
        "data": [
          {
            "id": recipe.id.toString(),
            "index": 0,
            "level": 1,
            "locked": 1
          }
        ],
        "maxSpells": 1,
        "mustEquip": 0,
        "spellWheel": 0
      }
    }
    if (recipe.output == undefined || recipe.output == null) { recipe.output = "ars_nouveau:spell_parchment"; }
    var temp_items = [];
    recipe.items.forEach((item) => {
      temp_items.push({ "item": item });
    });
    var tempitem = {
      "type": "ars_nouveau:enchanting_apparatus",
      "reagent": {
        "item": "ars_nouveau:spell_parchment"
      },
      "pedestalItems": temp_items,
      "output": {
        "item": "irons_spellbooks:scroll"
      },
      "sourceCost": recipe.sourceCost,
      "count": 1
    }
    if (recipe.id !== undefined || recipe.id == null) { tempitem.output.nbt = tempnbt }
    event.custom(tempitem);
  });
})