ServerEvents.recipes(event => {
  const recipes = [
     {
         "id": "irons_spellbooks:black_hole",
         "output": "ars_nouveau:spell_parchment",
         "items": ['eidolon:shadow_gem_block', 'minecraft:nether_star', 'apotheosis:infused_breath', 'apotheosis:infused_breath', 'irons_spellbooks:legendary_ink', 'ars_elemental:necrotic_focus', 'apotheosis:mythic_material', 'minecraft:end_crystal'],
         "sourceCost": 5000,
     },

    {
         "id": "irons_spellbooks:counterspell",
         "output": "ars_nouveau:spell_parchment",
         "items": ['ars_nouveau:enchanters_shield', 'irons_spellbooks:rare_ink', 'ars_nouveau:enchanters_shield', 'ars_elemental:spell_mirror', 'ars_elemental:spell_mirror'],
         "sourceCost": 5000,
     },

    {
         "id": "irons_spellbooks:dragon_breath",
         "output": "ars_nouveau:spell_parchment",
         "items": ['ars_nouveau:abjuration_essence', 'minecraft:dragon_breath', 'irons_spellbooks:common_ink', 'tetra:dragon_sinew', 'minecraft:dragon_breath'],
         "sourceCost": 5000,
     },

    {
         "id": "irons_spellbooks:echoing_strikes",
         "output": "ars_nouveau:spell_parchment",
         "items": ['bloodmagic:voidsigil', 'irons_spellbooks:rare_ink', 'bloodmagic:voidsigil', 'apotheosis:rare_material'],
         "sourceCost": 5000,
     },

    {
         "id": "irons_spellbooks:evasion",
         "output": "ars_nouveau:spell_parchment",
         "items": ['irons_spellbooks:epic_ink', 'minecraft:chorus_fruit', 'minecraft:chorus_fruit', 'botania:ender_air_bottle'],
         "sourceCost": 5000,
     },

    {
         "id": "irons_spellbooks:magic_arrow",
         "output": "ars_nouveau:spell_parchment",
         "items": ['irons_spellbooks:rare_ink', Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:epic"},gem:"irons_spellbooks:ender"}'), 'minecraft:arrow', Item.of('minecraft:crossbow', '{Damage:0}')],
         "sourceCost": 5000,
     },

    {
         "id": "irons_spellbooks:magic_missile",
         "output": "ars_nouveau:spell_parchment",
         "items": ['irons_spellbooks:common_ink', 'minecraft:ender_eye', 'apotheosis:epic_material', 'irons_spellbooks:ender_rune'],
         "sourceCost": 5000,
     },

    {
         "id": "irons_spellbooks:portal",
         "output": "ars_nouveau:spell_parchment",
         "items": ['irons_spellbooks:dragonskin', 'irons_spellbooks:epic_ink', 'tetra:dragon_sinew', 'botania:dragonstone', 'botania:gaia_ingot', 'tetra:dragon_sinew', 'botania:gaia_ingot', 'irons_spellbooks:dragonskin'],
         "sourceCost": 5000,
     },

    {
         "id": "irons_spellbooks:recall",
         "output": "ars_nouveau:spell_parchment",
         "items": ['irons_spellbooks:uncommon_ink', 'irons_spellbooks:protection_rune', 'minecraft:ender_eye'],
         "sourceCost": 5000,
     },

    {
         "id": "irons_spellbooks:starfall",
         "output": "ars_nouveau:spell_parchment",
         "items": ['botania:star_sword', 'irons_spellbooks:uncommon_ink', 'minecraft:nether_star', 'apotheosis:rare_material'],
         "sourceCost": 5000,
     },

    {
         "id": "irons_spellbooks:summon_ender_chest",
         "output": "ars_nouveau:spell_parchment",
         "items": ['irons_spellbooks:uncommon_ink', 'ars_nouveau:glyph_ender_inventory', 'minecraft:ender_chest'],
         "sourceCost": 5000,
     },

    {
         "id": "irons_spellbooks:teleport",
         "output": "ars_nouveau:spell_parchment",
         "items": ['bloodmagic:telepositionsigil', 'bloodmagic:voidsigil', 'artifacts:chorus_totem', 'bloodmagic:telepositionsigil', 'irons_spellbooks:rare_ink'],
         "sourceCost": 5000,
     },
  

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
