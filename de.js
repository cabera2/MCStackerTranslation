function translateMCStacker(){  
 
specialTiles=new Array(["flowing_water","Wasser"],
["water","Station\u00e4res Wasser"],
["flowing_lava","Lava"],
["lava","Station\u00e4res Lava"],
["fire","Feuer"]); 
 
items = new Array(['0', 'Nichts/Luft'], 
['stone', 'Stein'], 
['stone:1', 'Granit'], 
['stone:2', 'Polierter Granit'], 
['stone:3', 'Diorit'], 
['stone:4', 'Polierter Diorit'], 
['stone:5', 'Andesit'], 
['stone:6', 'Polierter Andesit'], 
['grass', 'Gras'], 
['dirt', 'Erde'], 
['dirt:1', 'Grobe Erde'], 
['dirt:2', 'Podzol'], 
['cobblestone', 'Cobblestone/Bruchstein'], 
['planks', 'Eichenholzbretter'], 
['planks:1', 'Fichtenholzbretter'], 
['planks:2', 'Birkenholzbretter'], 
['planks:3', 'Tropenholzbretter'], 
['planks:4', 'Akazienholzbretter'], 
['planks:5', 'Schwarzeichenholzbretter'], 
['sapling', 'Eichensetzling'], 
['sapling:1', 'Fichtensetzling'], 
['sapling:2', 'Birkensetzling'], 
['sapling:3', 'Tropenbaumsetzling'], 
['sapling:4', 'Akaziensetzling'], 
['sapling:5', 'Schwarzeichensetzling'], 
['bedrock', 'Bedrock / Grundgestein'], 
['sand', 'Sand'], 
['sand:1', 'Roter Sand'], 
['gravel', 'Gravel / Kies'], 
['gold_ore', 'Golderz'],

['iron_ore', 'Eisenerz'], 
['coal_ore', 'Steinkohleerz'], 
['log', 'Eichenholz'], 
['log:1', 'Fichtenholz'], 
['log:2', 'Birkenholz'], 
['log:3', 'Tropenholz'], 
['log:4', 'Eichenholz 4'], 
['log:5', 'Eichenholz 5'], 
['leaves', 'Eichenlaub'], 

['leaves:1', 'Fichtenlaub'], 
['leaves:2', 'Birkenlaub'], 
['leaves:3', 'Tropenbaumlaub'], 
['leaves2', 'Akazienholzlaub'],
['leaves2:1', 'Schwarzeichenholzlaub'],
['sponge', 'Schwamm'],
['sponge:1', 'Nasser Schwamm'], 

['glass', 'Glas'], 
['stained_glass', 'Gef\u00e4rbtes Glas (Wei\u00df)'], 
['stained_glass:1', 'Gef\u00e4rbtes Glas (Orange)'], 
['stained_glass:2', 'Gef\u00e4rbtes Glas (Magenta)'], 
['stained_glass:3', 'Gef\u00e4rbtes Glas (Hellblau)'], 
['stained_glass:4', 'Gef\u00e4rbtes Glas (Gelb)'], 
['stained_glass:5', 'Gef\u00e4rbtes Glas (Hellgr\u00fcn)'], 
['stained_glass:6', 'Gef\u00e4rbtes Glas (Rosa)'], 
['stained_glass:7', 'Gef\u00e4rbtes Glas (Grau)'], 
['stained_glass:8', 'Gef\u00e4rbtes Glas (Hellgrau)'], 
['stained_glass:9', 'Gef\u00e4rbtes Glas (T\u00fcrkis)'], 
['stained_glass:10', 'Gef\u00e4rbtes Glas (Violett)'], 
['stained_glass:11', 'Gef\u00e4rbtes Glas (Blau)'], 
['stained_glass:12', 'Gef\u00e4rbtes Glas (Braun)'], 
['stained_glass:13', 'Gef\u00e4rbtes Glas (Gr\u00fcn)'], 
['stained_glass:14', 'Gef\u00e4rbtes Glas (Rot)'], 
['stained_glass:15', 'Gef\u00e4rbtes Glas (Schwarz)'], 
['stained_glass_pane', 'Gef\u00e4rbte Glasscheibe (Wei\u00df)'], 
['stained_glass_pane:1', 'Gef\u00e4rbte Glasscheibe (Orange)'], 
['stained_glass_pane:2', 'Gef\u00e4rbte Glasscheibe (Magenta)'], 
['stained_glass_pane:3', 'Gef\u00e4rbte Glasscheibe (Hellblau)'], 
['stained_glass_pane:4', 'Gef\u00e4rbte Glasscheibe (Gelb)'], 
['stained_glass_pane:5', 'Gef\u00e4rbte Glasscheibe (Hellgr\u00fcn)'], 
['stained_glass_pane:6', 'Gef\u00e4rbte Glasscheibe (Rosa)'], 
['stained_glass_pane:7', 'Gef\u00e4rbte Glasscheibe (Grau)'], 
['stained_glass_pane:8', 'Gef\u00e4rbte Glasscheibe (Hellgrau)'], 
['stained_glass_pane:9', 'Gef\u00e4rbte Glasscheibe (T\u00fcrkis)'], 
['stained_glass_pane:10', 'Gef\u00e4rbte Glasscheibe (Violett)'], 
['stained_glass_pane:11', 'Gef\u00e4rbte Glasscheibe (Blau)'], 
['stained_glass_pane:12', 'Gef\u00e4rbte Glasscheibe (Braun)'], 
['stained_glass_pane:13', 'Gef\u00e4rbte Glasscheibe (Gr\u00fcn)'], 
['stained_glass_pane:14', 'Gef\u00e4rbte Glasscheibe (Rot)'], 
['stained_glass_pane:15', 'Gef\u00e4rbte Glasscheibe (Schwarz)'], 

['lapis_ore', 'Lapis Lazuli Erz'], 
['lapis_block', 'Lapis Lazuli Block'], 
['dispenser', 'Dispenser / Werfer'], 
['sandstone', 'Sandstein'], 
['sandstone:1', 'Gemei\u00dfelter Sandstein'], 
['sandstone:2', 'Glatter Sandstein'], 
['noteblock', 'Notenblock'], 
['golden_rail', 'Antriebsschiene'], 
['detector_rail', 'Sensorschiene'], 
['sticky_piston', 'Klebriger Kolben / Sticky Piston'], 
['web', 'Spinnennetz'], 
['tallgrass', 'Hohes Gras (Toter Busch)'], 
['tallgrass:1', 'Gras'], 
['tallgrass:2', 'Farn'], 
['deadbush', 'Toter Busch'], 
['piston', 'Piston / Kolben'], 

['wool', 'Wei\u00dfe Wolle'], 
['wool:1', 'Orange Wolle'], 
['wool:2', 'Magenta Wolle'], 
['wool:3', 'Hellblaue Wolle'], 
['wool:4', 'Gelbe Wolle'], 
['wool:5', 'Hellgr\u00fcne Wolle'], 
['wool:6', 'Rosa Wolle'], 
['wool:7', 'Graue Wolle'], 
['wool:8', 'Hellgraue Wolle'], 
['wool:9', 'T\u00fcrkise Wolle'], 
['wool:10', 'Violette Wolle'], 
['wool:11', 'Blaue Wolle'], 
['wool:12', 'Braune Wolle'], 
['wool:13', 'Gr\u00fcne Wolle'], 
['wool:14', 'Rote Wolle'], 
['wool:15', 'Schwarze Wolle'], 
['carpet', 'Wei\u00dfer Teppich'], 
['carpet:1', 'Oranger Teppich'], 
['carpet:2', 'Magenta Teppich'], 
['carpet:3', 'Hellblauer Teppich'], 
['carpet:4', 'Gelber Teppich'], 
['carpet:5', 'Hellgr\u00fcner Teppich'], 
['carpet:6', 'Rosa Teppich'], 
['carpet:7', 'Grauer Teppich'], 
['carpet:8', 'Hellgrauer Teppich'], 
['carpet:9', 'T\u00fcrkiser Teppich'], 
['carpet:10', 'Violetter Teppich'], 
['carpet:11', 'Blauer Teppich'], 
['carpet:12', 'Brauner Teppich'], 
['carpet:13', 'Gr\u00fcner Teppich'], 
['carpet:14', 'Roter Teppich'], 
['carpet:15', 'Schwarzer Teppich'], 

['yellow_flower', 'L\u00f6wenzahn'], 
['red_flower', 'Mohn'], 
['red_flower:1', 'Blaue Orchidee'], 
['red_flower:2', 'Sternlauch'], 
['red_flower:4', 'Rote Tulpe'], 
['red_flower:5', 'Orange Tulpe'], 
['red_flower:6', 'Wei\u00dfe Tulpe'], 
['red_flower:7', 'Rosa Tulpe'], 
['red_flower:8', 'Magerite'], 
['brown_mushroom', 'Brauner Pilz'], 
['red_mushroom', 'Roter Pilz'], 
['gold_block', 'Goldblock'], 
['iron_block', 'Eisenblock'], 
['double_stone_slab', 'Doppelte Steinstufe'], 
['double_stone_slab:1', 'Doppelte Sandsteinstufe'], 
['double_stone_slab:2', 'Doppelte Holzstufe'], 
['double_stone_slab:3', 'Doppelte Cobblestone-/Bruchsteinstufe'], 
['double_stone_slab:4', 'Doppelte Ziegelstufe'], 
['double_stone_slab:5', 'Doppelte Steinziegelstufe'], 
['double_stone_slab:6', 'Doppelte Netherziegelstufe'], 
['double_stone_slab:7', 'Doppelte Quarzstufe'], 
['double_stone_slab:8', 'Doppelte glatte Steinstufe'], 
['double_stone_slab:9', 'Doppelte glatte Sandsteinstufe'], 

['stone_slab', 'Steinstufe'], 
['stone_slab:1', 'Sandsteinstufe'], 
['stone_slab:2', 'Holzstufe'], 
['stone_slab:3', 'Cobblestone-/Bruchsteinstufe'], 
['stone_slab:4', 'Ziegelstufe'], 
['stone_slab:5', 'Steinziegelstufe'], 
['stone_slab:6', 'Netherziegelstufe'], 
['stone_slab:7', 'Quarzstufe'], 
['brick_block', 'Ziegelstein'], 
['tnt', 'TNT'], 
['bookshelf', 'B\u00fccherregal'], 
['mossy_cobblestone', 'Bemooster Cobblestone/Bruchstein'], 
['obsidian', 'Obsidian'], 
['torch', 'Fackel'], 
['mob_spawner', 'Monster Spawner'], 
['oak_stairs', 'Eichenholztreppe'], 
['chest', 'Truhe'], 
['diamond_ore', 'Diamanterz'], 
['diamond_block', 'Diamantblock'], 
['crafting_table', 'Werkbank'], 
['farmland', 'Ackerboden'], 
['furnace', 'Ofen'], 
['lit_furnace', 'Brennender Ofen'], 
['ladder', 'Leiter'], 
['rail', 'Schiene'], 
['stone_stairs', 'Cobblestone-/Bruchsteintreppe'], 
['lever', 'Hebel'], 
['stone_pressure_plate', 'Steindruckplatte'], 
['wooden_pressure_plate', 'Holzdruckplatte'], 
['redstone_ore', 'Redstone-Erz'], 
['redstone_torch', 'Redstone-Fackel (an)'], 
['stone_button', 'Steinknopf'], 
['snow_layer', 'Schnee'], 
['ice', 'Eis'], 
['snow', 'Schneeblock'], 
['cactus', 'Kaktus'], 
['clay', 'Lehm'], 
['jukebox', 'Plattenspieler'], 
['fence', 'Eichenholzzaun'], 
['spruce_fence', 'Fichtenholzzaun'], 
['birch_fence', 'Birkenholzzaun'], 
['jungle_fence', 'Tropenholzzaun'], 
['dark_oak_fence', 'Schwarzeichenholzzaun'], 
['acacia_fence', 'Akazienholzzaun'], 
['pumpkin', 'K\u00fcrbis'], 

['netherrack', 'Netherstein'], 
['soul_sand', 'Seelensand'], 
['glowstone', 'Glowstone'], 
['portal', 'Portal'], 
['lit_pumpkin', 'K\u00fcrbislaterne'], 
['trapdoor', 'Fallt\u00fcr'], 
['monster_egg', 'Stein (Silberfisch)'], 
['monster_egg:1', 'Cobblestone / Bruchstein (Silberfisch)'], 
['monster_egg:2', 'Steinziegel (Silberfisch)'], 
['monster_egg:3', 'Bemooste Steinziegel (Silberfisch)'], 
['monster_egg:4', 'Rissige Steinziegel (Silberfisch)'], 
['monster_egg:5', 'Gemei\u00dfelte Steinziegel (Silberfisch)'], 
['stonebrick', 'Steinziegel'], 
['stonebrick:1', 'Bemooste Steinziegel'], 
['stonebrick:2', 'Rissige Steinziegel'], 
['stonebrick:3', 'Gemei\u00dfelte Steinziegel'], 
['brown_mushroom_block', 'Brauner Pilzblock'], 
['red_mushroom_block', 'Roter Pilzblock'], 
['iron_bars', 'Eisengitter'], 
['glass_pane', 'Glasscheibe'], 
['melon_block', 'Melone (Block)'], 
['vine', 'Ranke'], 
['fence_gate', 'Eichenholzzauntor'], 
['spruce_fence_gate', 'Fichtenholzzauntor'], 
['birch_fence_gate', 'Birkenholzzauntor'], 
['jungle_fence_gate', 'Tropenholzzauntor'], 
['dark_oak_fence_gate', 'Schwarzeichenholzzauntor'], 
['acacia_fence_gate', 'Akazienholzzauntor'], 
['brick_stairs', 'Ziegeltreppe'], 
['stone_brick_stairs', 'Steinziegeltreppe'], 
['mycelium', 'Myzel'], 
['waterlily', 'Seerosenblatt'], 
['nether_brick', 'Netherziegel'], 
['nether_brick_fence', 'Netherziegelzaun'], 
['nether_brick_stairs', 'Netherziegeltreppe'], 
['enchanting_table', 'Zaubertisch'], 
['end_portal', 'End Portal'], 
['end_portal_frame', 'End Portal Rahmen'], 
['end_stone', 'Endstein'], 
['dragon_egg', 'Drachenei'], 
['redstone_lamp', 'Redstone Lampe (inaktiv)'], 
['double_wooden_slab', 'Doppelte Eichenholzstufe'], 
['double_wooden_slab:1', 'Doppelte Fichtenholzstufe'], 
['double_wooden_slab:2', 'Doppelte Birkenholzstufe'], 
['double_wooden_slab:3', 'Doppelte Tropenholzstufe'], 
['double_wooden_slab:4', 'Doppelte Akazienholzstufe'], 
['double_wooden_slab:5', 'Doppelte Schwarzeichenholzstufe'], 
['wooden_slab', 'Eichenholzstufe'], 
['wooden_slab:1', 'Fichtenholzstufe'], 
['wooden_slab:2', 'Birkenholzstufe'], 
['wooden_slab:3', 'Tropenholzstufe'], 
['wooden_slab:4', 'Akazienholzstufe'], 
['wooden_slab:5', 'Schwarzeichenholzstufe'], 
['cocoa', 'Kakaopflanze'], 
['sandstone_stairs', 'Sandsteintreppe'], 
['emerald_ore', 'Smaragderz'], 
['ender_chest', 'Ender Truhe'], 
['tripwire_hook', 'Haken'], 
['emerald_block', 'Smaragdblock'], 
['spruce_stairs', 'Fichtenholztreppe'], 
['birch_stairs', 'Birkenholztreppe'], 
['jungle_stairs', 'Tropenholztreppe'], 
['command_block', 'Befehlsblock / Command Block'], 
['beacon', 'Leuchtfeuer / Beacon Block'], 
['cobblestone_wall', 'Bruchteinmauer'], 
['cobblestone_wall:1', 'Bemooste Cobblestone-/Bruchsteinmauer'], 
['wooden_button', 'Holzknopf'], 

['anvil', 'Amboss'], 
['anvil:1', 'Amboss (leicht besch\u00e4digt)'], 
['anvil:2', 'Amboss (stark besch\u00e4digt)'], 
['trapped_chest', 'Redstone Truhe'], 
['light_weighted_pressure_plate', 'W\u00e4geplatte (leicht)'], 
['heavy_weighted_pressure_plate', 'W\u00e4geplatte (schwer)'], 
['daylight_detector', 'Tageslichtsensor'], 
['redstone_block', 'Redstoneblock'], 
['quartz_ore', 'Netherquarzerz'], 
['hopper', 'Trichter'], 
['quartz_block', 'Quarzblock'], 
['quartz_block:1', 'Gemei\u00dfelter Quarzblock'], 
['quartz_block:2', 'Quarzs\u00e4ule'], 
['quartz_stairs', 'Quarztreppe'], 
['activator_rail', 'Aktivierungsschiene'], 
['dropper', 'Spender / Dropper'], 
['stained_hardened_clay', 'Gef\u00e4rbter Ton (Wei\u00df)'], 
['stained_hardened_clay:1', 'Gef\u00e4rbter Ton (Orange)'], 
['stained_hardened_clay:2', 'Gef\u00e4rbter Ton (Magenta)'], 
['stained_hardened_clay:3', 'Gef\u00e4rbter Ton (Hellblau)'], 
['stained_hardened_clay:4', 'Gef\u00e4rbter Ton (Gelb)'], 
['stained_hardened_clay:5', 'Gef\u00e4rbter Ton (Hellgr\u00fcn)'], 
['stained_hardened_clay:6', 'Gef\u00e4rbter Ton (Rosa)'], 
['stained_hardened_clay:7', 'Gef\u00e4rbter Ton (Grau)'], 
['stained_hardened_clay:8', 'Gef\u00e4rbter Ton (Hellgrau)'], 
['stained_hardened_clay:9', 'Gef\u00e4rbter Ton (T\u00fcrkis)'], 
['stained_hardened_clay:10', 'Gef\u00e4rbter Ton (Violett)'], 
['stained_hardened_clay:11', 'Gef\u00e4rbter Ton (Blau)'], 
['stained_hardened_clay:12', 'Gef\u00e4rbter Ton (Braun)'], 
['stained_hardened_clay:13', 'Gef\u00e4rbter Ton (Gr\u00fcn)'], 
['stained_hardened_clay:14', 'Gef\u00e4rbter Ton (Rot)'], 
['stained_hardened_clay:15', 'Gef\u00e4rbter Ton (Schwarz)'], 

['log2', 'Akazienholz'], 
['log2:1', 'Schwarzeichenholz'], 
['acacia_stairs', 'Akazienholztreppe)'], 
['dark_oak_stairs', 'Schwarzeichenholztreppe'], 
['slime', 'Schleimblock'], 
['barrier', 'Barriere'], 
['iron_trapdoor', 'Eisenfallt\u00fcr'], 
['prismarine', 'Prismarin'], 
['prismarine:1', 'Prismarinziegel'], 
['prismarine:2', 'Dunkler Prismarin'], 
[' sea_lantern', 'Seelaterne'], 
['hay_block', 'Heublock'], 
['hardened_clay', 'Gebrannter Ton'], 

['coal_block', 'Kohleblock'], 
['packed_ice', 'Packeis'], 
['double_plant', 'Sonnenblume'], 
['double_plant:1', 'Flieder'], 
['double_plant:2', 'Hohes Gras'], 
['double_plant:3', 'Gro\u00dfer Farn'], 
['double_plant:4', 'Rosenstrauch'], 
['double_plant:5', 'Pfingstrose'], 

['red_sandstone', 'Roter Sandstein'], 
['red_sandstone:1', 'Roter Sandstein (gemei\u00dfelt)'], 
['red_sandstone:2', 'Roter Sandstein (glatt)'], 
['red_sandstone_stairs', 'Rote Sandsteintreppe'], 
['double_stone_slab2', 'Roter Sandsteinstufe (doppelt)'], 
['stone_slab2', 'Roter Sandsteinstufe'], 

['iron_shovel', 'Eisenschaufel'], 
['iron_pickaxe', 'Eisenspitzhacke'], 
['iron_axe', 'Eisenaxt'], 
['flint_and_steel', 'Feuerzeug'], 
['apple', 'Apfel'], 
['bow', 'Bogen'], 
['arrow', 'Pfeil'], 
['coal', 'Kohle'], 
['coal:1', 'Holzkohle'], 
['diamond', 'Diamant'], 

['iron_ingot', 'Eisenbarren'], 
['gold_ingot', 'Goldbarren'], 
['iron_sword', 'Eisenschwert'], 
['wooden_sword', 'Holzschwert'], 
['wooden_shovel', 'Holzschaufel'], 
['wooden_pickaxe', 'Holzspitzhacke'], 
['wooden_axe', 'Holzaxt'], 
['stone_sword', 'Steinschwert'], 
['stone_shovel', 'Steinschaufel'], 
['stone_pickaxe', 'Steinspitzhacke'], 
['stone_axe', 'Steinaxt'], 
['diamond_sword', 'Diamandschwert'], 
['diamond_shovel', 'Diamantschaufel'], 
['diamond_pickaxe', 'Diamantspitzhacke'], 
['diamond_axe', 'Diamantaxt'], 
['stick', 'Stock'], 
['bowl', 'Schale'], 
['mushroom_stew', 'Pilzsuppe'], 
['golden_sword', 'Goldschwert'], 
['golden_shovel', 'Goldschaufel'], 
['golden_pickaxe', 'Goldspitzhacke'], 
['golden_axe', 'Goldaxt'], 
['string', 'Faden'], 
['feather', 'Feder'], 
['gunpowder', 'Schwarzpulver'], 
['wooden_hoe', 'Holzhacke'], 
['stone_hoe', 'Steinhacke'], 
['iron_hoe', 'Eisenhacke'], 
['diamond_hoe', 'Diamanthacke'], 
['golden_hoe', 'Goldhacke'], 
['wheat_seeds', 'Weizensamen'], 
['wheat', 'Weizen'], 
['bread', 'Brot'], 
['leather_helmet', 'Lederkappe'], 
['leather_chestplate', 'Lederjacke'], 
['leather_leggings', 'Lederhose'], 
['leather_boots', 'Lederstiefel'],

['chainmail_helmet', 'Kettenhelm'], 
['chainmail_chestplate', 'Kettenbrustpanzer'], 
['chainmail_leggings', 'Kettenhose'], 
['chainmail_boots', 'Kettenstiefel'], 
['iron_helmet', 'Eisenhelm'], 
['iron_chestplate', 'Eisenbrustpanzer'], 
['iron_leggings', 'Eisenhose'], 
['iron_boots', 'Eisenstiefel'], 
['diamond_helmet', 'Diamanthelm'], 
['diamond_chestplate', 'Diamantbrustpanzer'], 
['diamond_leggings', 'Diamanthose'], 
['diamond_boots', 'Diamantstiefel'], 
['golden_helmet', 'Goldhelm'], 
['golden_chestplate', 'Goldbrustpanzer'], 
['golden_leggings', 'Goldhose'], 
['golden_boots', 'Goldstiefel'], 

['flint', 'Feuerstein'], 
['porkchop', 'Rohes Schweinefleisch'], 
['cooked_porkchop', 'Gebratenes Schweinefleisch'], 
['painting', 'Gem\u00e4lde'], 
['golden_apple', 'Goldener Apfel'], 
['golden_apple:1', 'Goldener Apfel (Notch)'], 
['sign', 'Schild'], 
['wooden_door', 'Holzt\u00fcr'], 
['spruce_door', 'Fichtenholzt\u00fcr'], 
['birch_door', 'Birkenholzt\u00fcr'], 
['jungle_door', 'Tropenholzt\u00fcr'], 
['acacia_door', 'Akazienholzt\u00fcr'], 
['dark_oak_door', 'Schwarzeichenholzt\u00fcr'], 
['bucket', 'Eimer'], 
['water_bucket', 'Wassereimer'], 
['lava_bucket', 'Lavaeimer'], 
['minecart', 'Minecart/Lore'], 
['saddle', 'Sattel'], 
['iron_door', 'Eisent\u00fcr'], 
['redstone', 'Redstone'], 
['snowball', 'Schneeball'], 
['boat', 'Boot'], 
['leather', 'Leder'], 
['milk_bucket', 'Milcheimer'], 
['brick', 'Ziegel'], 
['clay_ball', 'Ton'], 
['reeds', 'Zuckerrohr'], 
['paper', 'Papier'], 
['book', 'Buch'], 
['slimeball', 'Schleimball'], 
['chest_minecart', 'Minecart/Lore mit Truhe (G\u00fcterlore)'], 
['furnace_minecart', 'Minecart/Lore (angetriebenen/Ofen)'], 
['egg', 'Ei'], 
['compass', 'Kompass'], 
['fishing_rod', 'Angel'], 
['clock', 'Uhr'], 

['glowstone_dust', 'Glowstone Staub'], 
['fish', 'Roher Fisch'], 
['fish:1', 'Roher Lachs'], 
['fish:2', 'Roher Clownfisch'], 
['fish:3', 'Roher Kugelfisch'], 
['cooked_fish', 'Gebratener Fisch'], 
['cooked_fish:1', 'Gebratener Lachs'], 
['dye', 'Tintenbeutel'], 
['dye:1', 'Roter Farbstoff'], 
['dye:2', 'Kaktusgr\u00fcn'], 
['dye:3', 'Kakaobohnen'], 
['dye:4', 'Lapis Lazuli'], 
['dye:5', 'Violetter Farbstoff'], 
['dye:6', 'T\u00fcrkiser Farbstoff'], 
['dye:7', 'Hellgrauer Farbstoff'], 
['dye:8', 'Grauer Farbstoff'], 
['dye:9', 'Rosa Farbstoff'], 
['dye:10', 'Hellgr\u00fcner Farbstoff'], 
['dye:11', 'Gelber Farbstoff'], 
['dye:12', 'Hellblauer Farbstoff'], 
['dye:13', 'Magenta Farbstoff'], 
['dye:14', 'Oranger Farbstoff'], 
['dye:15', 'Knochenmehl'], 
['bone', 'Knochen'], 
['sugar', 'Zucker'], 
['cake', 'Kuchen'], 
['bed', 'Bett'], 
['repeater', 'Redstone Repeater'], 
['cookie', 'Keks'], 
['filled_map', 'Karte'], 
['shears', 'Schere'], 
['melon', 'Melone'], 
['pumpkin_seeds', 'K\u00fcrbiskern'], 
['melon_seeds', 'Melonenkern'], 

['beef', 'Rohes Rindfleisch'], 
['cooked_beef', 'Steak'], 
['chicken', 'Rohes H\u00fchnerfleisch'], 
['cooked_chicken', 'Gebratenes H\u00fchnerfleisch'], 
['rotten_flesh', 'Verrottetes Fleisch'], 
['ender_pearl', 'Enderperle'], 
['blaze_rod', 'Lohenrute'], 
['ghast_tear', 'Ghasttr\u00e4ne'], 
['gold_nugget', 'Gold Nugget'], 
['nether_wart', 'Netherwarze'], 
['potion', 'Wasserflasche / Trank'], 
['potion:16', 'Seltsamer Trank'], 
['potion:32', 'Dickfl\u00fcssiger Trank'], 
['potion:64', 'Gew\u00f6hnlicher Trank (verl\u00e4ngert)'], 
['potion:8193', 'Trank der Regneration (0:45)'], 
['potion:8194', 'Trank der Schnelligkeit (3:00)'], 
['potion:8195', 'Trank der Feuerresistenz (3:00)'], 
['potion:8196', 'Trank der Vergiftung (0:45)'], 
['potion:8197', 'Trank der Heilung'], 
['potion:8198', 'Trank der Nachtsicht (3:00)'], 
['potion:8200', 'Trank der Schw\u00e4che (1:30)'], 
['potion:8201', 'Trank der St\u00e4rke (3:00)'], 
['potion:8202', 'Trank der Langsamkeit (1:30)'], 
['potion:8203', 'Trank der Sprungkraft (3:00)'], 
['potion:8204', 'Trank des Schadens'], 
['potion:8205', 'Trank der Unterwasseratmung (3:00)'], 
['potion:8206', 'Trank der Unsichtbarkeit (3:00)'], 
['potion:8225', 'Trank der Regneration II (0:22)'], 
['potion:8226', 'Trank der Schnelligkeit II (1:30)'], 
['potion:8228', 'Trank der Vergiftung II (0:22)'], 
['potion:8229', 'Trank der Heilung II'], 
['potion:8233', 'Trank der St\u00e4rke (1:30)'], 
['potion:8235', 'Trank der Sprungkraft II (1:30)'], 
['potion:8236', 'Trank des Schadens II'], 
['potion:8257', 'Trank der Regneration (2:00)'], 
['potion:8258', 'Trank der Schnelligkeit (8:00)'], 
['potion:8259', 'Trank der Feuerresistenz (8:00)'], 
['potion:8260', 'Trank der Vergiftung (2:00)'], 
['potion:8262', 'Trank der Nachtsicht (8:00)'], 
['potion:8264', 'Trank der Schw\u00e4che (4:00)'], 
['potion:8265', 'Trank der St\u00e4rke (8:00)'], 
['potion:8266', 'Trank der Langsamkeit (4:00)'], 
['potion:8269', 'Trank der Unterwasseratmung (8:00)'], 
['potion:8270', 'Trank der Unsichtbarkeit (8:00)'], 
['potion:8289', 'Trank der Regeneration II (1:00)'], 
['potion:8290', 'Trank der Schnelligkeit II (4:00)'], 
['potion:8292', 'Trank der Vergiftung II (1:00)'], 
['potion:8297', 'Trank der St\u00e4rke II (4:00)'], 
['potion:16385', 'Werfbarer Trank der Regeneration (0:33)'], 
['potion:16386', 'Werfbarer Trank der Schnelligkeit(2:15)'], 
['potion:16387', 'Werfbarer Trank der Feuerresistenz (2:15)'], 
['potion:16388', 'Werfbarer Trank der Vergiftung (0:33)'], 
['potion:16389', 'Werfbarer Trank der Heilung'], 
['potion:16390', 'Werfbarer Trank der Nachtsicht (2:15)'], 
['potion:16392', 'Werfbarer Trank der Schw\u00e4che (1:07)'], 
['potion:16393', 'Werfbarer Trank der St\u00e4rke (2:15)'], 
['potion:16394', 'Werfbarer Trank der Langsamkeit (1:07)'], 
['potion:16396', 'Werfbarer Trank des Schadens'], 
['potion:16397', 'Werfbarer Trank der Unterwasseratmung (2:15)'], 
['potion:16398', 'Werfbarer Trank der Unsichtbarkeit (2:15)'], 
['potion:16417', 'Werfbarer Trank der Regeneration II (0:16)'], 
['potion:16418', 'Werfbarer Trank der Schnelligkeit II (1:07)'], 
['potion:16420', 'Werfbarer Trank der Vergiftung II (0:16)'], 
['potion:16421', 'Werfbarer Trank der Heilung II'], 
['potion:16425', 'Werfbarer Trank der St\u00e4rke II (1:07)'], 
['potion:16428', 'Werfbarer Trank des Schadens II'], 
['potion:16449', 'Werfbarer Trank der Regeneration (1:30)'], 
['potion:16450', 'Werfbarer Trank der Schnelligkeit (6:00)'], 
['potion:16451', 'Werfbarer Trank der Feuerresistenz (6:00)'], 
['potion:16452', 'Werfbarer Trank der Vergiftung (1:30)'], 
['potion:16454', 'Werfbarer Trank der Nachtsicht (6:00)'], 
['potion:16456', 'Werfbarer Trank der Schw\u00e4che (3:00)'], 
['potion:16457', 'Werfbarer Trank der St\u00e4rke (6:00)'], 
['potion:16458', 'Werfbarer Trank der Langsamkeit (3:00)'], 
['potion:16461', 'Werfbarer Trank der Unterwasseratmung (6:00)'], 
['potion:16462', 'Werfbarer Trank der Unsichtbarkeit (6:00)'], 
['potion:16481', 'Werfbarer Trank der Regeneration II (0:45)'], 
['potion:16482', 'Werfbarer Trank der Schnelligkeit II (3:00)'], 
['potion:16484', 'Werfbarer Trank der Vergiftung II (0:45)'], 
['potion:16489', 'Werfbarer Trank der St\u00e4rke II (3:00)'], 

['potion:7', 'Klarer Trank (Ungenutzt)'], 
['potion:15', 'D\u00fcnnfl\u00fcssiger Trank (Ungenutzt)'], 
['potion:23', 'Verpfuschter Trank (Ungenutzt)'], 
['potion:31', 'Gef\u00e4lliger Trank (Ungenutzt)'], 
['potion:39', 'Lieblicher Trank (Ungenutzt)'], 
['potion:47', 'Prickelnder Trank (Ungenutzt)'], 
['potion:55', 'Ranziger Trank (Ungenutzt)'], 
['potion:63', 'Stinkender Trank (Ungenutzt)'], 
['potion:16391', 'Klarer werfbarer Trank (Ungenutzt)'], 
['potion:16399', 'D\u00fcnnfl\u00fcssiger werfbarer Trank (Ungenutzt)'], 
['potion:16407', 'Verpfuschter werfbarer Trank (Ungenutzt)'], 
['potion:16415', 'Gef\u00e4lliger werfbarer Trank (Ungenutzt)'], 
['potion:16423', 'Lieblicher werfbarer Trank (Ungenutzt)'], 
['potion:16431', 'Prickelnder werfbarer Trank (Ungenutzt)'], 
['potion:16439', 'Ranziger werfbarer Trank (Ungenutzt)'], 
['potion:16447', 'Stinkender werfbarer Trank (Ungenutzt)'], 
['glass_bottle', 'Glasflasche'], 
['spider_eye', 'Spinnenauge'], 
['fermented_spider_eye', 'Fermentiertes Spinnenauge'], 
['blaze_powder', 'Lohenstaub'], 
['magma_cream', 'Magmacreme'], 
['brewing_stand', 'Braustand'], 
['cauldron', 'Kessel'], 
['ender_eye', 'Enderauge'], 
['speckled_melon', 'Glitzernde Melone'], 

['spawn_egg:50', 'Spawner-Ei Creeper'], 
['spawn_egg:51', 'Spawner-Ei Skelett'], 
['spawn_egg:52', 'Spawner-Ei Spinne'], 
['spawn_egg:54', 'Spawner-Ei Zombie'], 
['spawn_egg:55', 'Spawner-Ei Schleim'], 
['spawn_egg:56', 'Spawner-Ei Ghast'], 
['spawn_egg:57', 'Spawner-Ei Pigman'], 
['spawn_egg:58', 'Spawner-Ei Enderman'], 
['spawn_egg:59', 'Spawner-Ei H\u00f6hlenspinne'], 
['spawn_egg:60', 'Spawner-Ei Silberfisch'], 
['spawn_egg:61', 'Spawner-Ei Lohe'], 
['spawn_egg:62', 'Spawner-Ei Magmaschleim'], 
['spawn_egg:65', 'Spawner-Ei Fledermaus'], 
['spawn_egg:66', 'Spawner-Ei Hexe'], 
['spawn_egg:67', 'Spawner-Ei Endermite'], 
['spawn_egg:68', 'Spawner-Ei W\u00e4chter'], 
['spawn_egg:90', 'Spawner-Ei Schwein'], 
['spawn_egg:91', 'Spawner-Ei Schaf'], 
['spawn_egg:92', 'Spawner-Ei Kuh'], 
['spawn_egg:93', 'Spawner-Ei Huhn'], 
['spawn_egg:94', 'Spawner-Ei Tintenfisch'], 
['spawn_egg:95', 'Spawner-Ei Wolf'], 
['spawn_egg:96', 'Spawner-Ei Pilzkuh'], 
['spawn_egg:98', 'Spawner-Ei Ozelot'], 
['spawn_egg:100', 'Spawner-Ei Pferd'], 
['spawn_egg:101', 'Spawner-Ei Kaninchen'], 
['spawn_egg:120', 'Spawner-Ei Dorfbewohner'], 

['experience_bottle', 'Erfahrungsfl\u00e4schchen'], 
['fire_charge', 'Feuerball'], 
['writable_book', 'Buch und Feder'], 
['written_book', 'Beschriebenes Buch'], 
['emerald', 'Smaragd'], 
['item_frame', 'Rahmen'], 
['flower_pot', 'Blumentopf'], 
['carrot', 'Karotte'], 
['potato', 'Kartoffel'], 
['baked_potato', 'Ofenkartoffel'], 
['poisonous_potato', 'Giftige Kartoffel'], 
['map', 'Karte'], 
['golden_carrot', 'Goldene Karotte'], 
['skull', 'Kopf (Skelett)'], 
['skull:1', 'Kopf (Wither Skelett)'], 
['skull:2', 'Kopf (Zombie)'], 
['skull:3', 'Kopf (Steve oder Spieler)'], 
['skull:4', 'Kopf (Creeper)'], 
['carrot_on_a_stick', 'Karottenrute'], 
['nether_star', 'Netherstern'], 
['pumpkin_pie', 'K\u00fcrbiskuchen'], 
['fireworks', 'Feuerwerksrakete'], 
['firework_charge', 'Feuerwerksstern'], 
['enchanted_book', 'Verzaubertes Buch'], 
['comparator', 'Redstone Comparator'], 
['netherbrick', 'Netherziegel'], 
['quartz', 'Netherquarz'], 

['tnt_minecart', 'Minecart/Lore mit TNT'], 
['hopper_minecart', 'Minecart/Lore mit Trichter'], 
['prismarine_shard', 'Prismarinscherbe'], 
['prismarine_crystals', 'Prismarinkristall'], 
['rabbit', 'Rohes Kaninchenfleisch'], 
['cooked_rabbit', 'Gebratenes Kaninchen'], 
['rabbit_stew', 'Kaninchenragout'], 
['rabbit_foot', 'Hasenpfote'], 
['rabbit_hide', 'Kaninchenfell'], 
['armor_stand', 'R\u00fcstungsst\u00e4nder'], 
['iron_horse_armor', 'Eisenpferder\u00fcstung'], 
['golden_horse_armor', 'Goldpferder\u00fcstung'], 
['diamond_horse_armor', 'Diamantpferder\u00fcstung'], 
['lead', 'Leine'], 
['name_tag', 'Namenschild'], 

['command_block_minecart', 'Minecart/Lore mit Befehlsblock'], 
['mutton', 'Rohes Hammel-/Lammfleisch'], 
['cooked_mutton', 'Gebratenes Hammel-/Lammfleisch'], 
['banner', 'Banner'], 
['record_13', '13 Schallplatte'], 
['record_cat', 'Cat Schallplatte'], 
['record_blocks', 'Blocks Schallplatte'], 
['record_chirp', 'Chirp Schallplatte'], 
['record_far', 'Far Schallplatte'], 
['record_mall', 'Mall Schallplatte'], 
['record_mellohi', 'Mellohi Schallplatte'], 
['record_stal', 'Stal Schallplatte'], 
['record_strad', 'Strad Schallplatte'], 
['record_ward', 'Ward Schallplatte'], 
['record_11', '11 Schallplatte'], 
['record_wait', 'Wait Schallplatte']);
 
 llCommandType="Art des Befehls";
 ttCommandType="Welche Art von Befehlen m\u00f6chtest du generieren?";
 llResetForm="Zur\u00fccksetzen";
 ttResetForm="Vorgenommene \u00c4nderungen zur\u00fccksetzen.";
 llSaveAs="Als neuen Befehl speichern";
 ttSaveAs="Diesen Befehl als neuen Befehl speichern.";
 llEnchantAll="Verzaubern erzwingen (Verzauberungsoptionen f\u00fcr alle Gegenst\u00e4nde anzeigen)";
 ttEnchantAll="Normalerweise kann bspw. Wolle nicht verzaubert werden; mit dieser Option aktivierst du dies. M\u00f6glicherweise musst du den zu verzaubernden Gegenstand nochmal ausw\u00e4hlen, damit die Einstellungen sichtbar werden.";
 llAddEntity="Entity hinzuf\u00fcgen";
 ttAddEntity="Entity am Ende des Stapels hinzuf\u00fcgen.";
 llSummonCoords="Erzeugen an den Koordinaten:";
 llRelativeCoords="Relative Koordinaten";
 ttRelativeCoords="Aktiviere dieses K\u00e4stchen, wenn die Entity relativ zum Befehlsblock erzeugt werden soll; deaktiviere die Option wenn die Entity an absoluten Koordinaten erzeugt werden soll.";
 ttSummonX="Die X Position, an der die Entity erzeugt werden soll.";
 ttSummonY="Die Y Position, an der die Entity erzeugt werden soll.";
 ttSummonZ="Die Z Position, an der die Entity erzeugt werden soll.";

 llSpawnCount="Zu spawnende Anzahl:";
 ttSpawnCount="Wie viele Entities soll der Spawner jedes Mal auf einmal spawnen?";
 llSpawnRange="Spawn Radius";
 ttSpawnRange="Gr\u00f6\u00dfe des Radius, in dem die Objekte zuf\u00e4llig gespawnt werden. Der Spawnbereich ist rechteckig und ist um die X und Z Koordinaten des Spawners festgelegt. Normaler Wert ist 4.";
 llRequiredPlayerRange="Mindestabstand zum n\u00e4chsten Spieler";
 ttRequiredPlayerRange="Der Radius in Bl\u00f6cken (und somit ein w\u00fcrfelf\u00f6rmiger Bereich) um den Monsterspawner. Sobald ein Spieler diesen festgelegten Umkreis betritt, wird der Monsterspawner aktiviert. Erfordert, dass auch \'Maximale Anzahl Entities in der N\u00e4he\' eingestellt wird.";
 llDelay="Verz\u00f6gern";
 ttDelay="Anzahl der Ticks bevor Entities gespawnt werden wenn ein Spieler das erste Mal nah genug ist.";
 llMinSpawnDelay="Mind. Spawnverz\u00f6gerung";
 ttMinSpawnDelay="Nach dem ersten Spawnen ist dies die Mindestanzahl an Ticks bevor weitere Entities gespawnt werden.";
 llMaxSpawnDelay="Max. Spawnverz\u00f6gerung";
 ttMaxSpawnDelay="Analog zu Mind.-Spawnverz\u00f6gerung: Nach dem ersten Spawnen ist dies die Maximalanzahl an Ticks bevor weitere Entities gespawnt werden.";
 llMaxNearbyEntities="Max. Entities in der N\u00e4he";
 ttMaxNearbyEntities="Wenn die Anzahl an Kreaturen mit der ID EntityId im mit RequiredPlayerRange festgelegten Umkreis des Monsterspawners diese Anzahl erreicht hat, wird keine neue Kreatur mit dieser ID gespawnt. Es wird nur die EntityId verglichen, nicht die Ausstattung der Kreatur.";

 llPlayerName="Name des Spielers";
 ttPlayerName="Name eines bestimmten Spielers.";
 llItemSelect="Gegenstand";
 ttItemSelect="W\u00e4hle den Gegenstand.";
 ttSearchFilter="Nach Block suchen/filtern";

 llEntity="Entity";
 ttEntity="W\u00e4hle deine Minecraft Entity.";
 ttRemoveFromStack="L\u00f6sche dieses Wesen aus dem Stapel. Du musst mindestens eine Entity im Stapel behalten.";
 ttMoveUpStack="Bringe diese Entity ganz nach oben.";
 ttMoveDownStack="Bringe diese Entity ganz nach unten.";
 eeKeepOneEntity="Du musst mindestens eine Entity beibehalten";

 llCustomNameEntity="Name";
 ttCustomNameEntity="Benutzerdefinierter Name f\u00fcr die Entity. Erscheint in der Todesanzeige und Verkaufsoptionen von Dorfbewohnern, wie auch \u00fcber den jeweiligen Entities, wenn du mit der Maus dar\u00fcber f\u00e4hrst.";
 llUUIDLeast="UUIDLeast";
 ttUUIDLeast="Die UUID des Objektes im hexadezimalen Format. Sobald die UUID in die zwei dezimale H\u00e4lften UUIDLeast und UUIDMost umgewandelt wurde, wird dieses TAG gelu00f6scht. Die rechte H\u00e4lfte der UUID, eine beliebige Zahl gr\u00f6\u00dfer 0, die zusammen mit UUIDMost f\u00fcr den Modifikator eindeutig sein muss. Verwende dies nur zusammen mit UUIDMost.";
 llUUIDMost="UUIDMost";
 ttUUIDMost="Die linke H\u00e4lfte der UUID, eine beliebige Zahl gr\u00f6\u00dfer 0. Verwende dies nur zusammen mit UUIDLeast.";

 llInvulnerable="Unverwundbar";
 ttInvulnerable="Objekt erh\u00e4lt keinen Schaden (z.B. Schlagen, Trankeffekte, Explosionen, Geschosse, etc.). Dies gilt f\u00fcr lebende und nichtlebende Objekte. Sie k\u00f6nnen auch nicht durch Angeln bewegt werden. Nichts kann ihnen schaden au\u00dfer ein Spieler im Kreativ-Modus.";

 llInLove="Verliebt";
 ttInLove="Zeit in Ticks, die die Kreatur noch im Paarungsmodus ist und einen Partner sucht. Lasse das Feld leer, wenn es beim Spawnen nicht nach anderen Partnern suchen soll.";
 llAge="Alter";
 ttAge="Alter der Kreatur in Ticks. Wenn unter 0 (also negativ), ist die Kreatur ein Baby. Ab 0 ist die Kreatur erwachsen. Nach einer Paarung wird der Wert hochgesetzt und z\u00e4hlt zur\u00fcck auf 0. In dieser Zeit ist keine Paarung m\u00f6glich. Eine Paarung ist nur beim Wert 0 m\u00f6glich.";
 llForcedlAge="Erzwungenes Alter";
 ttForcedlAge="Im Gegensatz zu \'Alter\' wird dieses Alter nur ver\u00e4ndert, wenn das Baby mit dem richtigen Futter gef\u00fcttert wird. Dadurch ist dieser Wert von der laufenden Zeit (Tick) unabh\u00e4ngig und kann die Wachstumsbeschleunigung abbilden, durch die ein Baby schneller ausgewachsen ist.";
 llOwner="Besitzer";
 ttOwner="Name des Spielers, der dieses Tier besitzt f\u00fcr Versionen vor der Einf\u00fchrung der UUIDs. Wenn das Feld leer ist hat es keinen Besitzer.";
 llOwnerUUID="Besitzer UUID";
 ttOwnerUUID="UUIDs des Spielers, der dieses Tier besitzt. Wenn das Feld leer ist hat es keinen Besitzer.";
 llSitting="Sitzend";
 ttSitting="Das Tier im Sitzen erzeugen.";

 llInGround="Nicht im Flug";
 ttInGround="Wenn das Geschoss im Boden ist, oder den Boden gerade trifft. Fliegende Pfeile k\u00f6nnen nicht aufgenommen werden.";
 llPickup="Aufhebbar";
 llPickup0="kann nicht aufgehoben werden";
 llPickup1="aufhebbar von Spielern im Modus \u00dcberleben oder Kreativ";
 llPickup2="aufhebbar nur von Spielern im Kreativmodus";
 ttPickup="Optionen bez\u00fcglich dem Pfeil, ob er aufgehoben werden kann.";
 llPlayerPickup="Aufhebbar durch Spieler";
 ttPlayerPickup="Wenn \'Aufhebbar\' nicht benutzt wird, und dieses Kontrollk\u00e4stchen aktviert ist, kann der Pfeil von einem Spieler aufgenommen werden. Daf\u00fcr muss jedoch manuell im Befehl der Teil mit \'pickup:0\' aus dem Befehl entfernt werden.";
 llArrowLife="Lebensdauer";
 ttArrowLife="Wert erh\u00f6ht sich jeden Tick, wenn der Pfeil sich nicht bewegt; Reset auf 0 wenn er sich bewegt. Wenn der Wert 1200 betr\u00e4gt, despawnt er.";
 llArrowDamage="Angriffsschaden";
 ttArrowDamage="Schaden (in halben Herzen), den der Pfeil verursacht. Kann auch eine Kommazahl sein. Standardwert: 2.0f\u00fcr normale Pfeile. Der Wert erh\u00f6ht sich um 0.5 pro Level der St\u00e4rkeverzauberung des Bogens, der den Pfeil abgefeuert hat. Au\u00dferdem erh\u00e4lt der Pfeil einen Bonus von 0.5, wenn \u00fcberhaupt eine St\u00e4rkeverzauberung vorhanden ist. Das hei\u00dft, eine St\u00e4rkeverzauberung Level I ergibt folgenden Wert: 2 + 0.5 + 0.5 = 3.";
 llExplosionPower="Explosionskraft";
 ttExplosionPower="Die St\u00e4rke und die Gr\u00f6\u00dfe der Explosion des Feuerballs beim Aufprall. Normaler Wert: 1.";
 llOwnerName="Geworfen von";
 ttOwnerName="Der Name des Spielers, von dem das Geschoss geworfen wurde.";
 llPotionAppearance="Trank";
 ttPotionAppearance="Das Aussehen des Tranks, wenn er geworfen wurde. Klicke die Statuseffekt-Box an, um eigene Trankeffekte zu machen.";

 llArmorBody="K\u00f6rper";
 llArmorLeftArm="linker Arm";
 llArmorRightArm="rechter Arm";
 llArmorLeftLeg="linkes Bein";
 llArmorRightLeg="rechtes Bein";
 llArmorHead="Kopf";
 llPose="Pose";
 llArmorRotation="Rotation";

 /*llArmorDisableHand="Hand";
 llArmorDisableBoot="Schuhe";
 llArmorDisableLeg="Beine";
 llArmorDisableChest="Brust";
 llArmorDisableHead="Kopf";*/

 disabledSlots=new Array("Hand","Schuhe","Beine","Brust","Kopf");
 
 llDisabledSlots="Inaktive Slots";
 llArmorOperationRemove="Entfernen";
 llArmorOperationReplace="Ersetzen";
 llArmorOperationPlace="Setzen";
 llDisabledFor=" von Gegenst\u00e4nden deaktivieren f\u00fcr Slot: "; //forms a sentence like 'Replace disabled for Leg'
 llShowArms="Arme anzeigen";
 ttShowArms="Zeigt Holzarme am R\u00fcstungsst\u00e4nder.";
 llSmall="Kleine Variante";
 ttSmall="Kleiner R\u00fcstungsst\u00e4nder (Gr\u00f6\u00dfe eines Babyzombies).";
 llMarker="Marker";
 ttMarker="Die Gr\u00f6\u00dfe des R\u00fcstungsst\u00e4nders wird auf Null reduziert, was ihn unsichtbar macht und ihm eine winzige Hitbox gibt.";
 llInvisible="Unsichtbar";
 ttInvisible="Der R\u00fcstungsst\u00e4nder ist unsichtbar, die R\u00fcstung daran aber nicht.";
 llNoBasePlate="Kein Sockel";
 ttNoBasePlate="Der Sockel, auf dem der R\u00fcstungsst\u00e4nder steht wird nicht angezeigt.";
 llNoGravity="Keine Schwerkraft";
 ttNoGravity="Der R\u00fcstungsst\u00e4nder wird nicht herunterfallen, wenn er in der Luft gespawnt wird.";
 llBaseRotation="Basis-Rotation";
 ttBaseRotation="Der Drehwinkel des gesamten R\u00fcstungsst\u00e4nders.";
 llPersistence="Despawnen verhindern";
 ttPersistence="Aktiviere das K\u00e4stchen, um ein Despawnen der Entity zu verhindern (Persistent).";

 llHangUpsideDown="An der Decke h\u00e4ngend";
 ttHangUpsideDown="Die Fledermaus wird kopf\u00fcber gespawnt. Dies hat keinen Effekt, wenn ein Spieler in der N\u00e4he, oder die Fledermaus unter keinem Block ist.";
 llChickenJockey="Chicken Jockey (H\u00fchnerreiter)";
 ttChickenJockey="Gibt an, ob das Huhn ein H\u00fchnerreiter f\u00fcr ein Baby-Zombie ist und ob das Huhn nat\u00fcrlich despawnen kann. Andere Effekte sind nicht bekannt. Ein Baby-Zombie kann trotzdem ein Huhn kontrollieren und reiten, egal ob dieses K\u00e4stchen markiert ist oder nicht.";
 llPowered="Geladen";
 ttPowered="Creeper ist geladen durch einen Blitz. Erzeugt eine blaue Aura um den Creeper. Geladene Creeper haben einen gr\u00f6\u00dferen Explosionsradius, was aber durch die Explosions-Radius-Einstellungen \u00fcberschrieben werden kann.";
 llIgnited="Angez\u00fcndet";
 ttIgnited="Creeper sind durch ein Feuerzeug gez\u00fcndet worden.";
 llExplosionRadius="Explosionsradius";
 ttExplosionRadius="Radius der Explosion. Normaler Wert ist 3.";
 llFuse="Z\u00fcnddauer";
 ttFuse="Zahl der Ticks, bevor der Creeper explodiert (hat keinen Effekt auf fallende explodierende Creeper beim Aufprall auf ihr Opfer). Normaler Wert ist 30.";
 llCarried="Tr\u00e4gt Block";
 ttCarried="ID des Blocks, den der Enderman tr\u00e4gt.";
 llLifeTime="Lebensdauer";
 ttLifeTime="Zeit in Ticks, die der Endermite bereits lebt. Verschwindet, wenn der Wert 2400 erreicht.";

 llBlock="Block";
 ttBlock="Block, der f\u00e4llt.";
 llTileEntityData="Tile Entity Daten";
 ttTileEntityData="Optional. Tags der Tile Entity dieses Blocks.";
 llTime="Fallzeit";
 ttTime="Fallzeit in Ticks, die automatisch hochgez\u00e4hlt wird. Besonderheit: der Wert 0 kann verwendet werden, um einen an der Decke h\u00e4ngenden Block von der Decke fallen zu lassen. Dazu muss der fallende Block an die Position des h\u00e4ngenden Blockes gesetzt werden und mit dessen Block-ID \u00fcbereinstimmen. In diesem Fall ersetzt der fallende Block den h\u00e4ngenden Block, der dadurch von der Decke f\u00e4llt. Ist Time gleich 0 und die Block-IDs sind nicht identisch, verschwindet der fallende Block ohne Auswirkung. Wird Time auf einen Wert ungleich 0 gesetzt, f\u00e4llt der fallende Block durch den Block, an dem er erzeugt wird, hindurch. Das gilt auch f\u00fcr Luft, d.h. mit einem Wert ungleich 0 kann man beliebige Bl\u00f6cke mitten aus der Luft fallen lassen, mit Wert 0 kann man beliebige, vorher positionierte Bl\u00f6cke von der Decke fallen lassen.";
 llDropItem="Gegenstand droppen";
 ttDropItem="Block kann kaputt gehen und droppt einen Gegenstand, den man aufsammeln kann.";
 llHurtEntities="Verletzt Entities";
 ttHurtEntities="Objekt kann andere Entities (Objekte/Tiere/Spieler) beim Fallen verletzen.";
 llFallHurtMax="Max. Fallschaden";
 ttFallHurtMax="Maximaler Schaden, den der fallende Block beim Landen auf einem Objekt anrichten kann. Ohne weitere Angabe ist der Maximalwert standardm\u00e4\u00dfig: 40 (20 Herzen).";
 llFallHurtAmount="Basiswert Fallschaden";
 ttFallHurtAmount="Basiswert f\u00fcr den Schaden, den der fallende Block anrichtet, wenn er auf einem Objekt (Spieler, Kreatur, Lore etc.) landet. Der Wert wird mit der Fallh\u00f6he multipliziert, um den tats\u00e4chlichen Schaden zu errechnen, wobei FallHurtMax (\'Max. Fallschaden\')die Obergrenze bildet. Standardwert: 2 pro Ebene Fallh\u00f6he.";

 llFWLifeTime="Lebensdauer";
 ttFWLifeTime="Zeit in Ticks, wann die Explosion nach dem Abschuss der Rakete erfolgen soll.";
 llElder="Elder";
 ttElder="Dieser W\u00e4chter/Guardian ist ein Elder-Guardian.";
 llExplosionPower="Explosionskraft";
 ttExplosionPower="Gr\u00f6\u00dfe des Radius der Explosion eines Feuerballs, den ein Ghast abgeschossen hat. Normaler Wert ist 1.";

 llItemAge="Alter";
 ttItemAge="Anzahl der Ticks, in dem der Gegenstand nicht aufgehoben wurde. Nach 6000 Ticks (5 Minuten) verschwindet der Gegenstand. Wenn der Wert -32768 ist, verringert sich das Alter nicht, somit wird er also nicht automatisch verschwinden.";
 llItemHealth="Gesundheit";
 ttItemHealth="Leben des Items, welches bei 5 anf\u00e4ngt. Items k\u00f6nnen durch Feuer, Lava, fallende Ambosse und Explosionen Schaden bekommen. Das Item wird zerst\u00f6rt, wenn der Wert 0 ist.";
 llItemPickupDelay="Aufnahmeverzgr.";
 ttItemPickupDelay="Anzahl der Ticks, solange das Item nicht aufgehoben werden kann werden kann. Verringert um 1 je Tick. Wenn der Wert 32767 betr\u00e4gt, wird das Delay sich nicht verringern und das Item kann nie aufgehoben werden.";
 llItemOwner="Besitzer";
 ttItemOwner="Wenn nicht leer, dann kann nur der genannte Spieler das Item aufheben, bis 10 Sekunden vor dem Verschwinden. Wird benutzt um zu verhindern, dass ein falscher Spieler den Gegenstand aufhebt.";
 llItemThrower="Geworfen von";
 ttItemThrower="Name des Spielers, der den Gegenstand fallen gelassen hat. Wird verwendet f\u00fcr den Erfolg \'Diamanten f\u00fcr dich\'.";

 llSlimeSize="Gr\u00f6\u00dfe";
 ttSlimeSize="Gr\u00f6\u00dfe des Slimes/Magmacubes. Beachte, dass dieser Wert mit 0 beginnt. Somit ist 0 der kleinste Slime, 1 der n\u00e4chst gr\u00f6\u00dfere, etc. Die Gr\u00f6\u00dfen, die nat\u00fcrlich spawnen sind 0, 1, und 3.";
 llWasOnGround="War am Boden";
 ttWasOnGround="Slime ber\u00fchrt den Boden.";
 llCatType="Rasse";
 ttCatType="Typ des Ozelots/der Katze.";
 llBaby="Baby";
 ttBaby="Baby-Version.";
 llAnger="Aggressiv";
 ttAnger="Ticks bis der Zombie Pigman neutral wird. -32,768 bis 0 f\u00fcr neutralen Zombie Pigmen; 1 bis 32,767 f\u00fcr agressiven Zombie Pigmen.";
 llSaddle="Tr\u00e4gt Sattel";
 ttSaddle="Schwein tr\u00e4gt einen Sattel.";
 llPrimedTNTFuse="Z\u00fcnddauer";
 ttPrimedTNTFuse="Ticks bis zur Explosion. Standard und Maximum ist 80 (4 Sekunden).";
 llRabbitType="Kaninchenrasse";
 ttRabbitType="Bestimmt das Fell des Hasen. Bestimmt auch, ob der Hase feindlich (Art) ist.";
 llMoreCarrotTicks="Weitere Karotten";
 ttMoreCarrotTicks="(NICHT MEHR VERWENDET) Wenn ein Kaninchen Karotten von einem Feld gefressen hat, wird dieser Wert gesetzt. Er sinkt dann mit jedem Tick bis 0. Dann ist das Kaninchen wieder bereit, mehr Karotten zu fressen. (nicht getestet)";
 llSaltAndPepper="Salz &amp; Pfeffer";
 llBlackAndWhite="Schwarz &amp; Wei\u00df";
 llKillerRabbit="Killer Kaninchen von Caerbannog";
 llSheared="Geschoren";
 ttSheared="Schaf ist geschoren.";
 llSheepColor="Farbe";
 ttSheepColor="Farbe eines Schafes.";

 llSkeletonType="Skelettvariante";
 ttSkeletonType="Variante des Skeletts.";

 llProfession="Profession";
 ttProfession="Textur f\u00fcr den Villager. Dies hat auch Auswirkungen auf die Verkaufs-/Kaufoptionen.";

 llCareer="Career";
 ttCareer="Die ID des Spezialberufs des Dorfbewohners. Der Spezialberuf wird im Handelsmen\u00fc angezeigt (wenn kein CustomName vergeben ist) und beeinflusst die Handelsangebote. Wenn der Wert 0 ist, wird das Spiel beim Aktualisiern der Angebote einen neuen Spezialberuf zuweisen und CareerLevel auf den Wert 1 zur\u00fccksetzen.";



 llCareerLevel="Career Level";
 ttCareerLevel="Die aktuelle Stufe der Handelsangebote des Dorfbewohners. Beinflusst die Angebote im Handelsmen\u00fc. Wenn der Wert den vom Spezialberuf abh\u00e4ngigen Maximalwert erreicht, werd keine neuen Angebote mehr generiert. Der Wert erh\u00f6ht sich, wenn ein Handel zur Aktualisierung der Angebote f\u00fchrt. Wenn der Wert 0 ist, wird nach dem n\u00e4chsten Handel ein neuer Spezialberuf zugewiesen und CareerLevel auf den Wert 1 zur\u00fcckgesetzt. Muss mindestens 1 oder h\u00f6her sein.";
 llWilling="Paarungswillig";
 ttWilling="Villager ist bereit sich zu paaren. Wird standardm\u00e4\u00dfig bei bestimmten Ereignissen true (siehe Minecraftwiki: Dorfbewohner) und nach der Paarung wieder false.";

 llFarmer="Landwirt";
 llLibrarian="Bibliothekar";
 llPriest="Priester";
 llBlacksmith="Schmied";
 llButcher="Metzger";
 llGeneric="Allgemein";
 llNotSet="Nicht definiert";
 llFletcher="Fleischer";
 llFisherman="Fischer";
 llShepherd="Sch\u00e4fer";
 llCleric="Klerus";
 llToolSmith="Werkzeugschmied";
 llArmorer="Waffenmeister";
 llWeaponSmith="Waffenschmied";
 llLeatherworker="Lederer";
 llRecipes="Handelsm\u00f6glichkeiten";
 llMakeOffer="Angebot erstellen";
 ttMakeOffer="Ein Angebot f\u00fcr diesen Dorfbewohner erstellen.";

 llRewardXP="Erhalte XP";
 ttRewardXP="Gibt an, ob es f\u00fcr diesen Handel Erfahrungspunkte gibt.";
 llMaxUses="Max. Verk\u00e4ufe";
 ttMaxUses="Die maximale Anzahl an Verk\u00e4ufen, bevor das Produkt nicht mehr angeboten wird. Dieser Wert wird zuf\u00e4llig um 2-12 erh\u00f6ht, wenn das Angebot aktualisiert wird.";
 llUses="Verwendet";
 ttUses="Anzahl, wie oft der Handelsvorgang schon durchgef\u00fchrt wurde. Das Angebot wird geschlossen, wenn dieser Wert gr\u00f6\u00dfer/gleich wird, als \'Max. Verk\u00e4ufe\'";
 llBuyA="Kaufe A (Kosten)";
 llBuyB="Kaufe B (Kosten)";
 llBuyCount="Anzahl";
 ttBuyCount="Anzahl an Gegenst\u00e4nden, die der Spieler dem Dorfbewohner geben muss..";
 ttSecondaryTrade="Der zweite Handelsgegenstand ist optional.";
 llSell="Verkaufe";
 ttSell="Der Gegenstand, den der Dorfbewohner dem Spieler verkauft.";
 llRemoveOffer="Angebot entfernen";
 ttRemoveOffer="Dieses Angebot f\u00fcr den Dorfbewohner entfernen.";
 llCustomDisplayTile="Benutzerdef. Textur";
 ttCustomDisplayTile="Eine benutzerdefinierte Textur f\u00fcr den Block im Minecart festlegen.";
 llDisplayTile="Blocktextur";
 ttDisplayTile="Die Textur f\u00fcr den Block im Minecart.";
 llDisplayOffset="Position Dekoblock";
 ttDisplayOffset="Die H\u00f6he des mit \'Blocktextur\' festgelegten Dekorationsblockes in der Lore. Wenn dieser Wert fehlt oder mit 0 belegt ist, wird der Dekorationsblock auf dem Boden der Lore liegend dargestellt. Der Wert 16 entspricht einer Dekorationsblockh\u00f6he, die er \u00fcber dem Boden der Lore schwebt. Bei negativen Werten schwebt er unter der Lore.";

 llPushX="Kraft X";
 ttPushX="Kraft in X-Richtung, wird f\u00fcr sanfte Beschleunigung und Abbremsung verwendet. ";
 llPushZ="Kraft Z";
 ttPushZ="Kraft in Z-Richtung, wird f\u00fcr sanfte Beschleunigung und Abbremsung verwendet.";
 llFuel="Kraftstoff";
 ttFuel="Zeit in Ticks, bis der Kraftstoff der Lore aufgebraucht ist.";
 llTransferCooldown="Cooldown Weiterleitung";
 ttTransferCooldown="Zeit in Ticks bis zur n\u00e4chsten Weiterleitung. Wertebereich: zwischen 1 und 8 bzw. 0 wenn keine Weiterleitung stattfindet.";
 llMinecartTNTFuse="TNT Z\u00fcnddauer";
 ttMinecartTNTFuse="Zeit in Ticks, bis das TNT explodiert oder -1 wenn nicht aktiviert.";
 llCommand="Befehl";
 ttCommand="Der Befehl im Befehlsblock.";


 llMineCartSpawnerInstructions="<b>Anleitung</b>" //Contains HTML tags
+"<ol><li>&Ouml;ffne <a href='./' target='_blank'>MCStacker</a> in einem neuen Tab deines Browsers</li>"
+"<li>W&auml;hle \"Spawner\" als Befehlsart</li>"
+"<li>&Auml;ndere die Spawn-Einstellungen nach deinen Bed&uuml;rfnissen ab</li>"
+"<li>Erstelle das, was der MinecartSpawner spawnen soll</li>"
+"<li>Kopiere den Befehl und f&uuml;ge ihn in das untere Feld ein.</li></ol>";
 llSpawnDataTag="Spawn Data Tag";
 ttSpawnDataTag="Hier einen unver\u00e4nderten MCStacker Spawner Befehl einf\u00fcgen.";

 llPlayerCreated="Von Spieler erstellt";
 ttPlayerCreated="Setze einen Haken, wenn der Golem vom Spieler erstellt wurde. In diesem Fall wird er niemals einen Spieler angreifen.";

 llInvulTime="Zeit unverwundbar";
 ttInvulTime="Zeit in Ticks bis die Unverwundbarkeit aufh\u00f6rt, nachdem die Kreatur gespawnt wurde. 0 wenn der Wither verwundbar ist.";
 llAngry="Aggressiv";
 ttAngry="Setze einen Haken, wenn der Wolf aggressiv sein sollte.";
 llCollarColor="Halsbandfarbe";
 ttCollarColor="Die Farbe, die das Hundehalsband hat. Auch f\u00fcr wilde W\u00f6lfe (wird aber nicht angezeigt); normaler Wert ist 14.";
 llXPValue="XP Wert"; 
 ttXPValue="Anzahl der Erfahrung, die der Erfahrungspunkt bringt.";
 llXPHealth="XP Leben";
 ttXPHealth="Leben des Erfahrungspunktes, welches bei 5 anf\u00e4ngt. Erfahrungspunkte k\u00f6nnen durch Feuer, Lava, fallende Ambosse und Explosionen Schaden bekommen. Der Erfahrungspunkt wird zerst\u00f6rt, wenn der Wert 0 ist.";
 llIsVillager="Dorfbewohner-Zombie";
 ttIsVillager="Dieser Zombie ist ein (infizierter) Dorfbewohner-Zombie.";
 llConversionTime="Verwandlungszeit";
 ttConversionTime="-1 wenn der Zombie nicht in einen Dorfbewohner verwandelt werden soll, sonst die Zeit in Ticks, bis dieser Zombie in einem Dorfbewohner verwandelt wird. Der Regenerationseffekt wird dem entsprechen.";
 llCanBreakDoors="Kann T\u00fcren zerst\u00f6ren";
 ttCanBreakDoors="Zombie kann T\u00fcren zerst\u00f6ren.";
 llReinforcementChance="Verst\u00e4rkung";
 ttReinforcementChance="Chance dass Zombie einen anderen Zombie spawnt wenn attackiert.";

 llXMotion="X Bewegung";
 llYMotion="Y Bewegung";
 llZMotion="Z Bewegung";
 ttMotion="Bestimmt die aktuelle Geschwindigkeit des Objektes in X, Y und Z-Richtung in Bl\u00f6cken pro Tick. X,Y,Z Bewegungswerte m\u00fcssen als Dezimalzahl geschrieben werden. Beispiel 0.0, -0.9, 1.0 -1.0. Am besten entweder alle Werte auf 3 oder gar keinen Wert verwenden.";
 llCopyMotion="XYZ vererben";
 ttCopyMotion="Dieser Button kopiert die Bewegungswerte zu den anderen Entities im Stapel. Dies ist notwendig, wenn alle Entities in die selbe Richtung laufen sollen.";



 llCanPlaceOn="CanPlaceOn";
 ttCanPlaceOn="F\u00fcr Abenteuermodus. W\u00e4hle aus, auf welchen Bl\u00f6cken dieser Gegenstand platziert werden kann. Beachte bitte, dass Blockunterarten nicht verf\u00fcgbar sind (z.B. schwarze Wolle wird genauso behandelt wie rote oder gelbe).";
 ttCanPlaceAdd="Einen Block hinzuf\u00fcgen, auf dem dieser Gegenstand platziert werden kann.";
 ttCanPlaceChoose="Einen Block hinzuf\u00fcgen, auf dem dieser Gegenstand platziert werden kann"; 

 llCanDestroy="CanDestroy";
 ttCanDestroy="F\u00fcr Abenteuermodus. W\u00e4hle aus, welche Bl\u00f6cke dieser Gegenstand zerst\u00f6ren kann. Beachte bitte, dass Blockunterarten nicht verf\u00fcgbar sind (z.B. schwarze Wolle wird genauso behandelt wie rote oder gelbe).";
 ttCanDestroyAdd="Einen Block hinzuf\u00fcgen, den dieser Gegenstand zerst\u00f6ren kann.";
 ttCanDestroyChoose="Einen Block hinzuf\u00fcgen, den dieser Gegenstand zerst\u00f6ren kann.";


 llHideFlags="Hide Flags";
 ttHideFlags="W\u00e4hle aus, welche Eigenschaften dieses Gegenstands versteckt werden sollen.";
 llEnchantments="Verzauberung";
 llModifiers="Modifikatoren";
 llUnbreakable="Unzerst\u00f6rbar";
 ttHideEnchants="Verzauberungen beim \u00dcberfahren des Gegenstands mit der Maus verstecken.";
 ttHideModifiers="Attribut Modifikatoren beim \u00dcberfahren des Gegenstands mit der Maus verstecken.";
 ttHideUnbreakable="Eigenschaft \'Unzerst\u00f6rbar\' beim \u00dcberfahren des Gegenstands mit der Maus verstecken.";
 ttHideCanDestroy="Eigenschaft \'Kann abbauen\' beim \u00dcberfahren des Gegenstands mit der Maus verstecken.";
 ttHideCanPlaceOn="Eigenschaft \'Kann platziert werden auf\' beim \u00dcberfahren des Gegenstands mit der Maus verstecken.";
 ttRemoveBlock="Diesen Block entfernen.";

 llAttributeModifiers="Attribut Modifikator";
 ttAttributeModifiers="Attribut Modifikator Einstellungen anzeigen.";
 llAmount="Wert (Amount)";
 ttAmount="Wert des Modifikators, mit dem er den Attribut-Grundwert beeinflusst.";
 llOperation="Operation";
 ttOperation="Dieser Wert legt fest, wie der Modifikator den Grundwert beeinflusst. Es gibt drei: '+- amount', '+- amount % (Additiv)', und '+- amount % (Multiplikativ)'. The mathematical behavior is as follows: Operation 0: Increment X by Amount, Operation 1: Increment Y by X * Amount, Operation 2: Y = Y * (1 + Amount) (equivalent to Increment Y by Y * Amount). The game first sets X = Base, then executes all Operation 0 modifiers, then sets Y = X, then executes all Operation 1 modifiers, and finally executes all Operation 2 modifiers.";
 llOperation0="(0) +- amount";
 llOperation1="(1) +- amount % (Additiv)";
 llOperation2="(2) +- amount % (Multiplikativ)";

 ttAttributeModifiersArray = new Array("Die maximale Gesundheit des Wesens in halben Herzen (1=halbes Herz, 2=ganzes, usw). Bestimmt den h\u00f6chsten Wert, auf den das Wesen geheilt werden kann.", "Nur f\u00fcr Kreaturen: Die Reichweite in Bl\u00f6cken, in denen die Kreatur ein anderes Wesen (Spieler oder Kreatur) anvisiert und verfolgt (z.B. Monster einen Spieler oder Ozelots ein Huhn). Das \u00dcberschreiten der Reichweite bewirkt, dass die Kreatur die Verfolgung aufgibt. Der Standardwert f\u00fcr die meisten Kreaturen ist 16, f\u00fcr Zombies 40.", "Widerstand gegen den Sto\u00df bei Angriffen, Explosionen und Geschossen. 1.0 enspricht vollem Widerstand, d. h. dann wird das Wesen nie zur\u00fcck gesto\u00dfen.", "Grundlage f\u00fcr die Geschwindigkeit des Wesens. Es scheinen Wahrscheinlichkeiten zwischen 0 und 1 zu sein. Die genaue Bedeutung ist unbekannt, denn die Werte im Vergleich passen nicht zum Vergleich der realen Geschwindigkeiten der Wesen. Ein Skelett (0.25) ist z.B. schneller als ein Zombie (0.23), aber der gehende Spieler (0.1) ist schneller als beide.", "Schaden den das Wesen bei einem Angriff verursacht, gerechnet in halben Herzen.");


 llStatusEffects="Statuseffekte";
 ttStatusEffects="Erstelle eigene Status-/Trankeffekte.";
 llAmplifier="Verst\u00e4rker";
 ttAmplifier="Die St\u00e4rke des Effekts (0 ist St\u00e4rke I).";
 llDurationSecs="Dauer in Sek.";
 ttDurationSecs="Dauer des Effekts in Sekunden. MCStacker wandelt diesen Wert in Ticks um.";
 llHideParticles="Keine Partikel";
 ttHideParticles="Der Effekt erzeugt keine Partikel.";
//Numbers represent effect id (do not change the number)
 statusEffects = new Array(['1','Schnelligkeit'], ['2','Langsamkeit'], ['3','Eile'], ['4','Abbaul\u00e4hmung'], ['5','St\u00e4rke'], ['6','Direktheilung'],
 ['7','Direktschaden'], ['8','Sprungkraft'], ['9','\u00dcbelkeit'], ['10','Regeneration'], ['11','Resistenz'], ['12','Fireschutz'],
 ['13','Unterwasseratm.'], ['14','Unsichtbarkeit'], ['15','Blindheit'], ['16','Nachtsicht'], ['17','Hunger'], ['18','Schw\u00e4che'], 
 ['19','Vergiftung'], ['20','Wither'], ['21','Extraenergie'], ['22','Absorption'], ['23','S\u00e4ttigung']);

 llHolding="H\u00e4lt";
 ttHolding="Der Gegenstand, das von einer Kreatur oder R\u00fcstungsst\u00e4nder gehalten wird. Abh\u00e4ngig vom Typ des Objekts und des Items wird es eventuell nicht gerendert, aber der Gegenstand kann beim Tod gedroppt werden; dies wiederum ist abh\u00e4ngig von der Dropchance. (Dies betrifft nicht den R\u00fcstungsst\u00e4nder).";
 llHead="Kopf";
 ttHead="Der Gegenstand im Head-Slot einer Kreatur oder eines R\u00fcstungsst\u00e4nders. Abh\u00e4ngig vom Typ des Objekts und des Items wird es eventuell nicht gerendert, aber der Gegenstand kann beim Tod gedroppt werden; dies wiederum ist abh\u00e4ngig von der Dropchance. (Dies betrifft nicht den R\u00fcstungsst\u00e4nder).";
 llBody="K\u00f6rper";
 ttBody="Der Gegenstand im Body-Slot einer Kreatur oder eines R\u00fcstungsst\u00e4nders. Abh\u00e4ngig vom Typ des Objekts und des Items wird es eventuell nicht gerendert, aber der Gegenstand kann beim Tod gedroppt werden; dies wiederum ist abh\u00e4ngig von der Dropchance. (Dies betrifft nicht den R\u00fcstungsst\u00e4nder).";
 llLeg="Beine";
 ttLeg="Der Gegenstand im Leg-Slot einer Kreatur oder eines R\u00fcstungsst\u00e4nders. Abh\u00e4ngig vom Typ des Objekts und des Items wird es eventuell nicht gerendert, aber der Gegenstand kann beim Tod gedroppt werden; dies wiederum ist abh\u00e4ngig von der Dropchance. (Dies betrifft nicht den R\u00fcstungsst\u00e4nder).";
 llBoot="Schuhe";
 ttBoot="Der Gegenstand im Boot-Slot einer Kreatur oder eines R\u00fcstungsst\u00e4nders. Abh\u00e4ngig vom Typ des Objekts und des Items wird es eventuell nicht gerendert, aber der Gegenstand kann beim Tod gedroppt werden; dies wiederum ist abh\u00e4ngig von der Dropchance. (Dies betrifft nicht den R\u00fcstungsst\u00e4nder).";
 llSlot="Slot";

 llPersistenceRequired="Despawnen verhindern";
 ttPersistenceRequired="Kreatur verschwindet (despawnt) nicht auf nat\u00fcrliche Weise.";
 llCanPickUpLoot="Kann Loot aufnehmen";
 ttCanPickUpLoot="Kreatur kann Gegenst\u00e4nde aufsammeln (falls es sich um R\u00fcstung handelt, wird es diese tragen, falls es sich um eine Waffe handelt, wird es diese benutzen).";
 llNoAI="Keine KI";
 ttNoAI="Objekt hat keine k\u00fcnstliche Intelligenz. Eine solche Kreatur bewegt sich nicht, greift nicht an, verschwindet nicht, f\u00e4llt nicht, wenn der Block unter ihr entfernt wird - sie ist reine Dekoration. Als solche kann sie aber weiterhin Schaden nehmen und sterben. Gut z.B. zum Texturen machen.";
 llSilent="Stumm";
 ttSilent="Das Objekt macht keine Ger\u00e4usche.";
 llRotation="Rotation";
 llYaw="Yaw (Y-Achse)";
 ttYaw="Die Rotation eines Objektes im Uhrzeigersinn um seine Y-Achse. Gegen Westen ist gleich 0. Maximum ist 360 Grad.";
 llPitch="Pitch (Horizontal)";
 ttPitch="Die Neigung eines Objektes gegen den Horizont. Genau horizontal ist gleich 0. Bei positiven Werten schaut es nach unten. Maximum sind \u00B1 90 Grad.";
 llLeashToUUIDLeast="Angeleint an (UUIDLeast)";
 ttLeashToUUIDLeast="Falls die Leine zu einem anderen Objekt f\u00fchrt (normalerweise ist das ein Spieler) enth\u00e4lt UUIDLeast und UUIDMost die beiden UUID-H\u00e4lften des Leinenhalter-Objektes. Dieses Feld ist f\u00fcr die rechte H\u00e4lfte der UUID des Objektes mit dem die Leine verbunden ist. Zusammen mit UUIDMost ergibt das die eindeutige Leinenhalter-ID.";
 llLeashToUUIDMost="Angeleint an (UUIDMost)";
 ttLeashToUUIDMost="Die linke H\u00e4lfte der UUID des Leinenhalter-Objektes.";
 llHealF="HealF (Gesundheit)";
 ttHealF="Menge an Herzen, die das Objekt beim Spawnen hat. Einheit: 1 = halbes Herz.";
 llMaxHealth="Max. Gesundheit";
 ttMaxHealth="";
 llFollowRange="Verfolgungsreichweite";
 ttFollowRange="";
 llKnockbackResistance="R\u00fcckschlag-Resistenz";
 ttKnockbackResistance="";
 llMovementSpeed="Geschwindigkeit";
 ttMovementSpeed="";
 llAttackDamage="Angriffsschaden";
 ttAttackDamage="";
 llInvulnerable="Unverwundbar";
 ttInvulnerable="Entity erh\u00e4lt keinen Schaden. Dies gilt f\u00fcr lebende und nichtlebende Objekte. Sie k\u00f6nnen nicht durch Angeln bewegt und nicht attackiert werden. Nichts kann ihnen schaden au\u00dfer ein Spieler im Kreativ-Modus.";

 llHorseType="Pferderasse";
 ttHorseType="Rassentyp des Pferdes.";
 llHorse="Pferd";
 llDonkey="Esel";
 llMule="Maultier";
 llZombieHorse="Zombie";
 llSkeletonHorse="Skelett";
 llBred="Gez\u00fcchtet";
 ttBred="Zur Zeit unbenutzt. Immer 0. F\u00fchrt dazu, dass Pferde nicht mehr nat\u00fcrlich despawnen.";
 llEatingHaystack="Frisst Heu";
 ttEatingHaystack="Pferd frisst";
 llTame="Zahm";
 ttTame="Pferd ist gez\u00e4hmt. Kreaturen sind nicht in der Lage ein gez\u00e4hmtes Pferd zu reiten, wenn es keinen Sattel hat.";
 llJumpStrength="Sprungst\u00e4rke";
 ttJumpStrength="Sprungst\u00e4rke des Pferdes. Standard ist 0.7 Maximum ist 2.";
 llTemper="Temperament";
 ttTemper="Werte zwischen 0 und 100; erh\u00f6ht durch F\u00fcttern. Gr\u00f6\u00dferer Wert bedeutet leichteres Z\u00e4hmen.";
 llHasSaddle="Besattelt";
 ttHasSaddle="Pferd besitzt Sattel.";
 llNone="Nichts";
 llArmorItem="R\u00fcstungsgegenstand";
 ttArmorItem="R\u00fcstung, die das Pferd tr\u00e4gt.";
 llIron="Eisen";
 llGold="Gold";
 llDiamond="Diamant";
 llHasChests="Tr\u00e4gt Truhen";
 ttHasChests="Maultier / Esel tr\u00e4gt Truhe.";
 llVariant="Variante";
 ttVariant="Die Variante des Pferde. Bestimmt Farben und Muster.";
 llHorseColors=new Array("Wei\u00df","Creamy","Kastanie","Braun","Schwarz","Grau","Dunkelbraun");
 llHorseMarkings=new Array("Kein","Wei\u00df","Wei\u00dfe Felder","Wei\u00dfe Punkte","Schwarze Punkte");
 llInvisibleHorse="Unsichtbares Pferd";




 llSkullOwner="Besitzer Kopf";
 llPlayerSkull="Spielerkopf";
 ttChooseHead="W\u00e4hle zwischen einem Spielerkopf oder aus den vorgeschlagenen K\u00f6pfen.";
 ttSkullOwnerName="Gebe einen Namen eines Minecraft Spielers ein.";


 llLevel="Level";
 ttLevel="Verzauberungslevel. Maximum ist 127."
 llUnbreakable="Unzerst\u00f6rbar";
 llItemOptions="Equipment Verzauberung und andere Optionen";
 llDamage="Schaden";
 ttDamage="Menge an Schaden: Wie stark ist der Gegenstand besch\u00e4digt?";
 llEnableColors="Benutzerdefinierte Farben";
 llColor="Farbe";
 llBannerTag="Banner Data Tag";
 ttBannerTag="Gebe ein g\u00fcltiges Banner Data Tag ein";
 llBannerInstruction="Wechsle zu <a href='http://www.needcoolshoes.com/banner' target='_blank'>http://www.needcoolshoes.com/banner</a> um dir einen Code f\u00fcr ein Banner zu erstellen. Kopiere den gesamten /give Befehl unver\u00e4ndert von der Website in diese obige Box.";
 llFlightDuration="Flugdauer";
 ttFlightDuration="Grobe Entfernung (in Bl\u00f6cken), den die Rakete zur\u00fccklegt, abh\u00e4ngig von der Flugdauer: 1 = 12-21 Bl\u00f6cke, 2 = 23-38 Bl\u00f6cke, 3 = 40-57 Bl\u00f6cke, mit kleinen Abweichungen bei 35 und 36 Bl\u00f6cken.";
 llAddExplosion="Explosion hinzuf\u00fcgen";
 ttAddExplosion="Eine Explosion dem Feuerwerk hinzuf\u00fcgen.";
 llSmallBall="Kleine Kugel";
 llLargeBall="Gro\u00dfe Kugel";
 llStar="Stern";
 llCreeper="Creeper";
 llBurst="Explosion";
 ttExplosionType="Typ der Explosion.";
 llFlicker="Flackern";
 ttFlicker="Mache einen Haken, wenn die Explosion einen Flackereffekt haben soll.";
 llTrail="Schweif";
 ttTrail="Mache einen Haken, wenn die Explosion einen Schweifeffekt haben soll.";
 llRemoveExplosion="Entfernen";
 ttRemoveExplosion="Diese Explosion vom Feuerwerk entfernen.";
 ttAddColor="Eine Farbe der Explosion hinzuf\u00fcgen.";
 ttRemoveColor="Eine Farbe der Explosion entfernen.";
 llFadeColor="Verblassen";
 ttAddFadeColor="Eine verblassende Farbe der Explosion hinzuf\u00fcgen.";
 ttRemoveFadeColor="Eine verblassende Farbe der Explosion entfernen."; 
 eeFireWorkColorError="Du ben\u00f6tigst mindestens eine Farbe";
 ttHexColor="W\u00e4hle einen g\u00fcltigen Hexadezimalcode. Hexadezimal-Farbcodes werden in g\u00fcltige Minecraft Farbcodes umgewandelt.";




 llBlockCoords = "Block-Koordinaten";
 llEndBlockCoords = "Block-Koordinaten der anderen Ecke";
 ttRelativeBlock = "Aktiviere dieses K\u00e4stchen, wenn die Position relativ zum Befehlsblock liegt; deaktiviere die Option wenn der Block sich an einer absoluten Koordinate befindet."
 ttBlockX = "Die X Position des Blocks";
 ttBlockY = "Die Y Position des Blocks";
 ttBlockZ = "Die Z Position des Blocks";
 ttBlockEX = "Die X Position des Blocks der anderen Ecke";
 ttBlockEY = "Die Y Position des Blocks der anderen Ecke";
 ttBlockEZ = "Die Z Position des Blocks der anderen Ecke";
 llBlockHandling = "Old Block Handling";
 ttSetBlockhandling="Zerst\u00f6ren (destroy) - Der alte, vorherige Block droppt sich selbst und ggf. seine Inhalte (so als ob ein Spieler ihn abgebaut h\u00e4tte). Spielt dabei auch das dazugeh\u00f6rige Abbauger\u00e4usch ab.\n\nBehalten (keep) - Nur Luftbl\u00f6cke (air) werden ge\u00e4ndert, andere werden \'behalten\'.\n\nErsetzen (replace) - Der vorherige Block und ggf. seine Inhalte werden weder gedroppt noch werden irgendwelche Ger\u00e4usche abgespielt.";
 ttFillBlockhandling="Zerst\u00f6ren (destroy) - Alle Bl\u00f6cke (inkl. Luft) werden in dem zu f\u00fcllenden Bereich mit dem definierten Block ersetzt. Die ersetzten Bl\u00f6cke droppen sich und ggf. ihre Inhalte (so als ob ein Spieler ihn abgebaut h\u00e4tte).\n\nHohl (hollow) - Ersetzt nur die Bl\u00f6cke am \u00e4u\u00dferen Rand des zu f\u00fcllenden Bereichs. Dabei werden die inneren Bl\u00f6cke mit Luft (air) ersetzt und droppen sich selbst und ggf. ihre Inhalte.\n\nBehalten (keep) - Ersetzt nur Luft(-bl\u00f6cke) im zu f\u00fcllenden Bereich mit dem definierten Block. Alle anderen Bl\u00f6cke werden \'behalten\'\n\nUmranden (outline) - Ersetzt nur die Bl\u00f6cke am \u00e4u\u00dferen Rand des zu f\u00fcllenden Bereichs. Innere Bl\u00f6cke sind nicht betroffen.\n\nErsetzen (replace) - Ersetzt alle Bl\u00f6cke (inkl. Luft) im zu f\u00fcllenden Bereich mit dem definierten Block. Dabei werden die Bl\u00f6cke und ggf. deren Inhalte nicht gedroppt. Optional kann statt eines Data Tags f\u00fcr den zu ersetzenden Block die Block ID und Datenwerte definiert werden, um die zu ersetzenden Bl\u00f6cke zu begrenzen.";


 llBlock="Block";
 ttTileSelect="Tile/Block Auswahl";
 llReplaceBlock="Block ersetzen";
 llDataValue="Datenwert";
 ttDataValue="Datenwert f\u00fcr diesen Block";
 ttBlockDataDV="Datenwerte beeinflussen nicht den Blockmeta-Befehl, aber k\u00f6nnten die f\u00fcr dich verf\u00fcgbaren Data Tag Optionen beeinflussen.";
 llCustomName="Benutzerdef. Name";
 ttCustomName="Optional. Der Name dieses Containers/Beh\u00e4lters, der in seiner GUI (Benutzeroberfl\u00e4che) angezeigt wird wo der Standardname normalerweise ist. Bei Befehlsbl\u00f6cken wird dies das \u00fcbliche '@' bei Verwendung von bspw. 'say' und 'tell' Befehlen ersetzen.";
 llLock="Absperren";
 ttLock="Optional. Wenn nicht leer, verhindert dies das \u00d6ffnen des Containers/Beh\u00e4lters, au\u00dfer der \u00f6ffnende Spieler h\u00e4lt einen Gegenstand dessen Name dieser Zeichenkette entspricht.";
 llTextLine="Textzeile";
 ttTextLine="Text, der angezeigt werden soll";

 llSuccessCountName = "SuccessCountName";
 ttSuccessCountName = "Name des Anzeigetafel/Scoreboard-Ziels, das f\u00fcr SuccessCountName auf Erfolg (1) oder Misserfolg (0) gesetzt werden soll. Kann eine Spieler-Zielauswahl sein, diese darf aber nur ein Ergebnis ausgeben.";
 llSuccessCountObjective = "SuccessCountObjective";
 ttSuccessCountObjective = "Name des Ziels/Objectives, in dem die erfolgreiche Ausf\u00fchrung des letzten Befehls gespeichert werden soll.";
 llAffectedBlocksName = "AffectedBlocksName";
 ttAffectedBlocksName = "Name des Spielers oder Anzeigetafel/Scoreboard-Z\u00e4hlers, dessen Punktestand auf die Anzahl der Bl\u00f6cke gesetzt werden soll, wenn der Befehl, den dieses Objekt ausgef\u00fchrt hat, Bl\u00f6cke ver\u00e4ndert oder gepr\u00fcft hat. Kann eine Spieler-Zielauswahl sein, diese darf aber nur ein Ergebnis ausgeben.";
 llAffectedBlocksObjective = "AffectedBlocksObjective";
 ttAffectedBlocksObjective = "Name des Anzeigetafel/Scoreboard-Ziels (= Punktestand), das f\u00fcr AffectedBlocksName auf die Anzahl der Bl\u00f6cke gesetzt werden soll.";
 llAffectedEntitiesName = "AffectedEntitiesName";
 ttAffectedEntitiesName = "Name des Spielers oder Anzeigetafel/Scoreboard-Z\u00e4hlers, dessen Punktestand auf die Anzahl der Objekte gesetzt werden soll, wenn der Befehl, den dieses Objekt ausgef\u00fchrt hat, Objekte ver\u00e4ndert oder gepr\u00fcft hat. Kann eine Spieler-Zielauswahl sein, diese darf aber nur ein Ergebnis ausgeben.";
 llAffectedEntitiesObjective = "AffectedEntitiesObjective";
 ttAffectedEntitiesObjective = "Name des Anzeigetafel/Scoreboard-Ziels, das f\u00fcr AffectedEntitiesName auf die Anzahl der Objekte gesetzt werden soll.";
 llAffectedItemsName = "AffectedItemsName";
 ttAffectedItemsName = "Name des Spielers oder Anzeigetafel/Scoreboard-Z\u00e4hlers, dessen Punktestand auf die Anzahl der Gegenst\u00e4nde gesetzt werden soll, wenn der Befehl, den dieses Objekt ausgef\u00fchrt hat, Objekte ver\u00e4ndert oder gepr\u00fcft hat. Kann eine Spieler-Zielauswahl sein, diese darf aber nur ein Ergebnis ausgeben.";
 llAffectedItemsObjective = "AffectedItemsObjective";
 ttAffectedItemsObjective = "Name des Anzeigetafel/Scoreboard-Ziels, das f\u00fcr AffectedItemsName auf die Anzahl der Gegenst\u00e4nde gesetzt werden soll.";
 llQueryResultName = "QueryResultName";
 ttQueryResultName = "Name des Spielers oder Anzeigetafel/Scoreboard-Z\u00e4hlers, dessen Punktestand auf das Ergebnis des letzten Befehls gesetzt werden soll. Kann eine Spieler-Zielauswahl sein, diese darf aber nur ein Ergebnis ausgeben.";
 llQueryResultObjective = "QueryResultObjective";
 ttQueryResultObjective = "Name des Anzeigetafel/Scoreboard-Ziels, das f\u00fcr QueryResultName auf das Ergebnis des letzten Befehls gesetzt werden soll.";
 llBeaconLevels="Levels";
 ttBeaconLevels="Die Anzahl der Stufen der Pyramide, auf der das Leuchtfeuer steht.";
 llPrimaryEffect="Primar\u00e4rer Effekt";
 ttBeaconEffect="Statuseffekt-ID. 0 bedeutet keine Auswahl.";
 llSecondaryEffect="Sekund\u00e4rer Effekt";
 llOutputSignal="Ausgabest\u00e4rke";
 ttOutputSignal="St\u00e4rke des Ausgabesignals des Komparators. Diese Information muss als Tile Entity gespeichert werden, weil die Metadaten des Komparators f\u00fcr die Vielzahl der Komparator-Zusatzdaten nicht ausreichen.";

 llSuccessCount="Ausgabest\u00e4rke";
 ttSuccessCount="St\u00e4rke des Signals, das ein Komparator, der direkt neben dem Befehlsblock platziert ist, ausgibt, wenn der Befehlsblock seinen Befehl erfolgreich ausf\u00fchrt und der Befehlsblock mit einem Eingangssignal aktiviert wurde.";
 llLastOutput="Letzte Ausgabe";
 ttLastOutput="Die Ausgabe des letzten Befehls in Form eines JSON-Textes inklusive eines Zeitstempels. Erscheint in der GUI (Benutzeroberfl\u00e4che) des Befehlblocks Dieses TAG wird nach einem Befehl immer gef\u00fcllt, aber es wird nur im Befehlsblock angezeigt, wenn TrackOutput true ist.";
 llTrackOutput="Ausgabe verfolgen"; 
 ttTrackOutput=" 1 oder 0 (true/false) - true, wenn die Ausgabe des letzten Befehls (siehe \'Letzte Ausgabe\') im Befehlsblock angezeigt wird.";
 llBurnTime="Brennzeit";
 ttBurnTime="Zeit in Ticks die verbleiben, bis der Ofen keinen Brennstoff mehr hat.";
 llCookTime="Kochzeit"; 
 ttCookTime="Zeit in Ticks, die der aktuelle Gegenstand schon der Ofenhitze ausgesetzt war. Steigt bis 200 (10 Sekunden), dann ist der Gegenstand geschmolzen bzw. gebraten. Sobald der Ofen keinen Brennstoff mehr hat (BurnTime erreicht 0), bleibt die CookTime erhalten. Wenn Brennstoff nachgelegt wird, l\u00e4uft sie weiter.";
 llCookTimeTotal="Kochzeit gesamt";
 ttCookTimeTotal="Zeit in Ticks die der Gegenstand ben\u00f6tigt, um geschmolzen bzw. gebraten zu werden.";
 llFlowerPot="Item im Blumentopf";
 ttFlowerPot="ID-Name des Blockes, der in den Blumentopf gepflanzt ist. Nicht alle Bl\u00f6cke werden angezeigt, sie werden aber gedroppt wenn der Topf abgebaut wird.";
 llJukebox="Item im Plattenspieler";
 ttJukebox="Gegenstand-ID der Schallplatte, die gerade gespielt wird. 0 steht f\u00fcr keine Schallplatte. Andere IDs k\u00f6nnen benutzt werden, um andere Gegenst\u00e4nde (nur mit Metadaten-Wert 0) aus dem Plattenspieler fliegen zu lassen.";


 llAddSpawnPotential="Spawn Wahrscheinlichkeit hinzuf\u00fcgen";
 llWeight="Gewichtung";
 ttWeight="The chance that this spawn will be picked as compared to other spawn weights. Must be non-negative and at least 1";
 llSpawnData="Summon Befehl";
 ttSpawnData="Kopiere einen Summon Befehl von MCStacker und f\u00fcge ihn hier ein. Der Befehl wird in ein SpawnPotential Data Tag konvertiert.";
 llRemoveSpawnPotential="Entfernen";
 ttRemoveSpawnPotential="Spawn Wahrscheinlichkeit entfernen";
 llNote="Note"; 
 ttNote="Pitch (Zahl der Rechtsklicks).";
 llSkullType="Kopf (Typ)";
 ttSkullType="Der Typ des Kopfs oder Sch\u00e4dels";
 ttHeadGenerator="Im Feld Spielername kannst Du einen Spielernamen eingeben oder einen Befehl aus Dragnoz's <a href='http://www.dragnoz.com/custom-head-block-generator/' target='_blank'>Custom Head Block Generator</a> einf\u00fcgen. MCStacker extrahiert dann die Daten, die ben\u00f6tigt werden.";
 llRotation="Rotation";
 ttRotation="Die Ausrichtung. Nur ben\u00f6tigt f\u00fcr K\u00f6pfe, die auf einem Block platziert werden.";
 llItem="Item";
 llSlotNo="Slot-Nummer";
 ttSlotNo="W\u00e4hle die Slot-Nummer f\u00fcr den ausgew\u00e4hlten Container/Beh\u00e4lterblock. W\u00e4hle KEINE Slot-Nummer, die die maximale Gr\u00f6\u00dfe des Containers \u00fcberschreitet.";
 llCount="Anzahl";
 ttCount="Die Anzahl an Gegenst\u00e4nden in diesem Slot des Containers/Beh\u00e4lters. \u00dcberschreite NICHT die maximale Stackzahl. F\u00fcr die meisten Gegenst\u00e4nde ist dies 64."
 llName="Name";
 ttName="Benenne den Gegenstand.";
 llLore="Lore/Untertitel";
 ttLore="Gib dem Gegenstand eine 'Lore'-Beschreibung. Zeilen werden mit Kommata getrennt.";
 llDropChance="Drop Chance";
 ttDropChance="Die Chance, dass dieser Gegenstand gedroppt wird, wenn der Mob get\u00f6tet wird, der diesen Gegenstand bei sich trug.";
 llDropChanceDefault="Standard";
 ttDropChanceUndamaged="Unbesch\u00e4digt";
 ttDropChanceCount="Mobs mit Ausr\u00fcstung: Die Anzahl der Gegenst\u00e4nde, die dieser Mob fallen l\u00e4sst WENN er sie fallen l\u00e4sst. Gegenstand erzeugen: Die zu erzeugende Anzahl. Dorfbewohnerhandel: Anzahl der Gegenst\u00e4nde, die der Dorfbewohner verkauft. Give Befehl: Die zu gebende Anzahl an Gegenst\u00e4nden";

 ttAnyCommand="Verwende diese Option, um einen interessanten Befehl zu teilen.";

 llBlack="Schwarz";
 llRed="Rot";
 llGreen="Gr\u00fcn";
 llBrown="Braun";
 llDarkBlue="Dunkelblau";
 llPurple="Violett";
 llCyan="Cyan";
 llLightGray="Hellgrau";
 llGray="Grau";
 llPink="Rosa";
 llLime="Hellgr\u00fcn";
 llYellow="Gelb";
 llLightBlue="Hellblau";
 llMagenta="Magenta";
 llOrange="Orange";
 llWhite="Wei\u00df";


//Enchantments (Don't change the numbers)
enchantables[0][0] ="Schutz";
enchantables[1][0] ="Feuerschutz";
enchantables[2][0] ="Federfall";
enchantables[3][0] ="Explosionsschutz";
enchantables[4][0] ="Schusssicher";
enchantables[5][0] ="Atmung";
enchantables[6][0] ="Wasseraffinit\u00e4t";
enchantables[7][0] ="Dornen";
enchantables[8][0] ="Wasserl\u00e4ufer";
enchantables[16][0] ="Sch\u00e4rfe";
enchantables[17][0] ="Bann";
enchantables[18][0] ="N. d. Gliederf\u00fc\u00dfer";
enchantables[19][0] ="R\u00fccksto\u00df";
enchantables[20][0] ="Verbrennung";
enchantables[21][0] ="Pl\u00fcnderung";
enchantables[32][0] ="Effizienz";
enchantables[33][0] ="Behutsamkeit";
enchantables[34][0] ="Haltbarkeit";
enchantables[35][0] ="Gl\u00fcck";
enchantables[48][0] ="St\u00e4rke";
enchantables[49][0] ="Schlag";
enchantables[50][0] ="Flamme";
enchantables[51][0] ="Unendlichkeit";
enchantables[61][0] ="Gl\u00fcck des Meeres";
enchantables[62][0] ="K\u00f6der";






//Written Books
 llWrittenBook="Beschriebenes Buch";
 llTitle="Titel";
 ttTitle="Gib einen Titel f\u00fcr das Buch ein.";
 llAuthor="Autor";
 ttAuthor="Gib einen Titel f\u00fcr den Autor ein.";
 llGeneration="Generation";
 ttGeneration="W\u00e4hle die Generation des Buchs. Kopien von Kopien oder zerfetzte B\u00fccher k\u00f6nnen nicht kopiert werden";
 llOriginal="Original";
 llCopyOfOriginal="Kopie von Original";
 llCopyOfCopy="Kopie von Kopie";
 llTattered="Zerfetzt";
 llAddPage="Seite hinzuf\u00fcgen";
 ttAddPage="Eine Seite zum Buch hinzuf\u00fcgen. B\u00fccher d\u00fcrfen nicht mehr als 50 Seiten haben.";
 llRemovePage="Seite entfernen";
 ttRemovePage="Diese Seite vom Buch entfernen";

 llAddSection="Bereich hinzuf\u00fcgen";
 ttAddSection="Texte mit besonderen Eigenschaften sind in Bereiche aufgeteilt, wo sie individuell formatiert und mit Hover- und ClickEvents versehen werden k\u00f6nnen. Klicke, um einen neuen Textbereich hinzuzuf\u00fcgen.";

 llBookText="Text";
 ttBookText="Der Text f\u00fcr diesen Bereich. Zeilenumbruch geschieht automatisch. Um eine neue Zeile zu erzwingen, schreibe &#92;n (das ist so wie das Dr\u00fccken der Enter-Taste).";
 llRemoveSection="Bereich entfernen";
 ttRemoveSection="Diesen Textbereich entfernen.";
 llTextColor="Textfarbe";
 ttTextColor="Die Farbe des Textes in diesem Bereich festlegen.";
 llTextStyle="Aussehen des Text";
 llBold="Fett";
 llItalic="Kursiv";
 llUnderlined="Unterstrichen";
 llStrikethrough="Durchgestrichen";
 llObfuscated="Unleserlich (Magie)";
 llHoverEvent="Hover Event";
 llClickEvent="Click Event";
 ttHoverActionType="W\u00e4hle diese Option, wenn ein Hover Event einen Befehl ausf\u00fchren oder einen Text anzeigen soll.";
 ttClickActionType="W\u00e4hle diese Option, wenn ein Click Event einen Befehl ausf\u00fchren oder einen Text anzeigen soll."; 
 ttClickHoverAction="Der Text, der angezeigt oder der Befehl, der ausgef\u00fchrt werden soll, ausgel\u00f6st durch das Click/Hover Event. Lasse dies leer wenn du es nicht brauchst. Beachte: Sehr lange Befehle funktionieren nicht, da sie durch dieselbe Maximall\u00e4nge der Chatleiste begrenzt sind.";


//for 'replaceitem entity' command
 restrictions = new Array('R\u00fcstungsst\u00e4nder, Mobs, und Spieler (auch wenn nicht bei allen Mobs die Gegenst\u00e4nde sichtbar sind oder sie die Gegenst\u00e4nde verwenden)', 'R\u00fcstungsst\u00e4nder und Mobs (auch wenn nicht bei allen Mobs die Gegenst\u00e4nde sichtbar sind oder sie die Gegenst\u00e4nde verwenden)', 'Spieler', 'Pferde, Esel und Maultiere. Der Gegenstand muss ein Sattel sein', 'Pferde. Der Gegenstand muss eine Pferder\u00fcstung sein', 'Esel und Maultiere mit Truhen (FUNKTIONIERT NICHT! M\u00f6glicher Bug in MC)', 'Dorfbewohner');

//Forms a sentence like: This slot is only for mobs. Make sure you have targeted the appropriate entity.
 restrictionPart1="Dieser Slot ist nur f\u00fcr ";
 restrictionPart2=". Stelle sicher, dass du die korrekte Entity ausgew\u00e4hlt hast (Zielauswahl).";

 ttSpecifySlot="Slot f\u00fcr die ausgew\u00e4hlte Entity definieren.";
 ttSlotNoEntity="Slotnummer f\u00fcr die ausgew\u00e4hlte Entity definieren ";

//Target Selector
 llSpecificPlayer="Bestimmter Spieler";
 llNearestPlayer="N\u00e4chster Spieler";
 llAllPlayers="Alle Spieler";
 llRandomPlayer="Zuf\u00e4lliger Spieler";
 llEntityPlayer="Entity/Spieler";

 ttTargetEntityType="W\u00e4hle den Typ der Entity oder lasse das Feld leer.";
 llPlayer="Spieler"; 

 llDirectionX="X Richtung";
 ttDirectionX="Anzahl Bl\u00f6cke in die positive 'x' Richtung (z.B. Osten) vom Wert, den du in das Feld X Richtung eingegeben hast.  Negative Werte funktionieren nicht";
 llDirectionY="Y Richtung";
 ttDirectionY="Anzahl Bl\u00f6cke in die positive 'y' Richtung (z.B. nach oben) vom Wert, den du in das Feld Y Richtung eingegeben hast.  Negative Werte funktionieren nicht";
 llDirectionZ="Z Richtung";
 ttDirectionZ="Anzahl Bl\u00f6cke in die positive 'z' Richtung (z.B. S\u00fcden) vom Wert, den du in das Feld Z Richtung eingegeben hast.  Negative Werte funktionieren nicht";
 
 
 llMinRadius="Minimaler Radius";
 ttMinRadius="W\u00e4hlt nur Ziele gr\u00f6\u00dfer als diesen Wert (in Bl\u00f6cken) aus (von der Position, an dem der Befehl ausgef\u00fchrt wird)";
 llMaxRadius="Maximaler Radius";
 ttMaxRadius="W\u00e4hlt nur Ziele kleiner als diesen Wert (in Bl\u00f6cken) aus (von der Position, an dem der Befehl ausgef\u00fchrt wird)";
 llTarget="Ziel";
 ttTarget="W\u00e4hle den Typ der Zielauswahl aus.";
 
 ttCountTargets="Selects only the specified number of targets from qualifying targets.";
 llCountDirection="Count Direction";
 llNearest="Am n\u00e4chsten";
 ttNearest="Nur in Kombination mit der Option \'Anzahl\' oberhalb. Wenn mehrere Spieler oder Entities ausgew\u00e4hlt sind werden sie in der Reihenfolge der k\u00fcrzesten Entfernung zur Befehlsausf\u00fchrung ausgew\u00e4hlt. (Standard)";
 llFarthest="Am weitesten";
 ttFarthest="Ziele werden in der Reihenfolge der weitesten Entfernung von der Befehlsausf\u00fchrung erfasst.";
 ttTargetX="Der X Wert von der Befehlsausf\u00fchrungs-Koordinate. Tilde (~) ist hier nicht erlaubt.";
 ttTargetY="Der Y Wert von der Befehlsausf\u00fchrungs-Koordinate. Tilde (~) ist hier nicht erlaubt.";
 ttTargetZ="Der Z Wert von der Befehlsausf\u00fchrungs-Koordinate. Tilde (~) ist hier nicht erlaubt.";
 llSelectionArea="Auswahlbereich";
 llRadiusSelection="Radius";
 ttRadiusSelection="Die Ziele werden in dem Radius von der Befehlsausf\u00fchrungs-Koordinate erfasst.";
 llVolumeSelection="Volume";
 ttVolumeSelection="Die Ziele werden von der Befehlsausf\u00fchrungs-Koordinate zu der XYZ-Richtung erfasst.";
 llGameMode="Gamemode";
 ttGameMode="Spieler werden nach \'Gamemode\' (0,1,2,3) erfasst.";
 llAllModes="Alle Modi";
 llSurvival="\u00dcberleben";
 llCreative="Kreativ";
 llAdventure="Abenteuer";
 llSpectator="Zuschauer";
 llMinimumXPLevel="Minimaler XP Level";
 ttMinimumXPLevel="W\u00e4hlt nur Spieler aus, die nicht weniger als das angegeben Erfahrungs-Level haben.";
 llMaximumXPLevel="Maximaler XP Level";
 ttMaximumXPLevel="W\u00e4hlt nur Spieler aus, die nicht mehr als das angegeben Erfahrungs-Level haben.";
 llMinimumVerticalRotation="Minimale vertikale Rotation";
 ttMinimumVerticalRotation="W\u00e4hlt nur Spieler mit der angegebenen minimalen vertikalen Rotation aus. Vertikale Rotationen-Werte variieren von -90.0 bis 90.0 (Gesicht nach unten; vertikale Rotationswerte erh\u00f6hen sich mit der Rotation nach unten).";
 llMaximumVerticalRotation="Maximale vertikale Rotation";
 ttMaximumVerticalRotation="W\u00e4hlt nur Spieler mit der angegebenen maximalen vertikalen Rotation aus. Vertikale Rotationen-Werte variieren von -90.0 bis 90.0 (Gesicht nach unten; vertikale Rotationswerte erh\u00f6hen sich mit der Rotation nach unten).";
 llMinimumHorizontalRotation="Minimale Horizontale Rotation";
 ttMinimumHorizontalRotation="W\u00e4hlt nur Spieler mit der angegebenen minimalen horizontalen Rotation aus. Horizontale Rotationen-Werte variieren von -180.0 (Gesicht Richtung Norden), zu -90.0 (Gesicht Richtung Osten), zu 0.0 (Gesicht Richtung S\u00fcden), zu 90.0 (Gesicht Richtung Westen), to 179.9 (kurz vor Norden) bevor der Wert wieder -180 betr\u00e4gt (Horizontale Rotationswerte erh\u00f6hen sich mit der Drehung nach rechts bzw. im Uhrzeigersinn von oben gesehen).";
 llMaximumHorizontalRotation="Maximale Horizontale Rotation";
 ttMaximumHorizontalRotation="W\u00e4hlt nur Spieler mit der angegebenen maximalen horizontalen Rotation aus. Horizontale Rotationen-Werte variieren von -180.0 (Gesicht Richtung Norden), zu -90.0 (Gesicht Richtung Osten), zu 0.0 (Gesicht Richtung S\u00fcden), zu 90.0 (Gesicht Richtung Westen), to 179.9 (kurz vor Norden) bevor der Wert wieder -180 betr\u00e4gt (Horizontale Rotationswerte erh\u00f6hen sich mit der Drehung nach rechts bzw. im Uhrzeigersinn von oben gesehen).";
 llTeam="Team";
 ttTeam="Definiere den Namen des Teams, wenn du nach Team die Spieler ausw\u00e4hlst";
 llNotThisTeam="Nicht dieses Team";
 ttNotThisTeam="W\u00e4hle diese Option, wenn du Spieler ausw\u00e4hlen willst, die nicht in diesem Team sind.";
 llNotOnAnyTeam="In keinem Team";
 ttNotOnAnyTeam="W\u00e4hle diese Option, wenn du Spieler ausw\u00e4hlen willst, die in keinem Team sind.";
 llEntityPlayerName="Entity/Spielername";
 ttEntityPlayerName="Spieler und Entities mit benutzerdef. Namen k\u00f6nnen mit dieser Option ausgew\u00e4hlt werden.";
 llNotThisName="Nicht dieser Name";
 ttNotThisName="W\u00e4hlt Spieler und Entities aus, die nicht diesen Namen tragen.";
 llTargetEntityType="Entity Typ";
 llNotThisEntity="Nicht diese Entity";
 ttNotThisEntity="Entities ausw\u00e4hlen, die nicht von diesem Typ sind.";
 llAddScoreObjective="Scoreboard Ziel hinzuf\u00fcgen";
 ttAddScoreObjective="Spieler nach Scoreboard Zielen ausw\u00e4hlen.";
 llScoreObjectiveName="Score/Ziel Name";
 ttScoreObjectiveName="Setze den Namen des Ziels hier ein, wenn du Spieler nach deren Zielen ausw\u00e4lst. Keine Leerzeichen! (Erfordert, dass Scoreboard Ziele bzw. objectives eingerichtet sind).";
 ttRemoveScoreObjective="Dieses Ziel l\u00f6schen";
 llMinScore="Mindestpunkte";
 ttMinScore="W\u00e4hlt nur Spieler aus, die nicht weniger als den angegebenen Score besitzen.";
 llMaxScore="Maximalpunkte";
 ttMaxScore="W\u00e4hlt nur Spieler aus, die nicht mehr als den angegebenen Score besitzen.";


//MCStacker Save
 monthNames = new Array("Jan", "Feb", "Mae", 
"Apr", "Mai", "Jun", "Jul", "Aug", "Sep", 
"Okt", "Nov", "Dez");
 llHome="Startseite";
 ttHome="Einf\u00fchrung & Startseite";
 llHelp="Hilfe";
 ttHelp="Informationen wie man die Befehlsverwaltung von MCStacker verwendet.";
 llMyCommands="Meine Befehle";
 ttMyCommands="Liste von dir erstellten Befehle.";
 llNews="Neuigkeiten";
 ttNews="News und Changelog";
 llSearchBrowse="Suchen & Entdecken";
 ttSearchBrowse="Suche und entdecke Befehle von anderen Benutzern.";
 llLikes="Gef\u00e4llt mir";
 ttLikes="Liste aller Befehle, die mir gefallen.";
 llDiscuss="Diskussion";
 ttDiscuss="Benachrichtungen \u00fcber neue Kommentare von Befehlen, die du erstellt oder kommentiert hast, oder die dir gefallen.";
 llAccountSettings="Kontoeinstellungen";
 ttAccountSettings="Deine Kontoeinstellungen zum \u00c4ndern der Email und des Passwortes.";
 llSignOut="Abmelden";
 llSignIn="Anmelden";
 eeNotSignedIn="Derzeit nicht angemeldet.";
 ttCommandTypeSearch="Nach diesem Befehlstyp suchen.";
 llAny="Egal";
 llAnyCommand="Sonstige Befehle";
 llSearchBy="Suchen nach";
 ttSearchBy="Grenze deine Suche ein, indem du nur bestimmte Teile suchst.";
 llTitleDescCreator="Titel, Beschreibung oder Ersteller";
 llDescription="Beschreibung";
 llCreator="Ersteller";
 llTag="Tag";
 llDerivativesByID="Abgeleitet von (ID)";
 llComments="Kommentare";
 llSearchText="Nach Text suchen";
 ttSearchText="Nach Text in gespeicherten Befehlen suchen. Leer lassen um alle Befehle zu durchsuchen. Erweiterte, booleansche Suchparameter sind erlaubt. Ein f\u00fchrendes (+) gibt an, dass dieses Wort im Ergebnis vorkommen muss. Ein f\u00fchrendes (-) bewirkt das Gegenteil (darf nicht vorkommen). ( ) Klammern werden zum Gruppieren/Zusammenfassen verwendet. Suchbegriffe in doppelten Anf\u00fchrungszeichen sind f\u00fcr exakte und ganze Ausdr\u00fccke zu verwenden.";
 llSortColName="Name";
 llSortColDescription="Beschreibung";
 llSortColType="Typ";
 llSortColCreator="Ersteller";
 llSortColModified="Ver\u00e4ndert";
 llSortColLikes="Gef\u00e4llt mir";
 llSortColPublic="\u00d6ffentlich";
 llSortColAllowComments="Kommentare erlaubt";
 eeNoSavedCommands="Du hast keine gespeicherten Befehle. Erstelle einen Befehl und klicke auf 'Als neuen Befehl speichern' zum Speichern.";
 ttPrivate="Deaktivierst du dieses Kontrollk\u00e4stchen, wird dein Befehl auf Privat gestellt, sodass nur du den Befehl sehen kannst."; 
 ttDisallowComments="Deaktivierst du dieses Kontrollk\u00e4stchen, k\u00f6nnen andere den Befehl nicht mehr kommentieren. Bereits bestehende Kommentare werden dennoch angezeigt";
 llChangePassword="Passwort \u00e4ndern";
 ttChangePassword="Dein Passwort \u00e4ndern";
 llCurrentPassword="Aktuelles Passwort";
 llNewPassword="Neues Passwort";
 llConfirmNewPassword="Neues Passwort best\u00e4tigen";
 ttNewPassword="Das Passwort muss zwischen 6 und 64 Zeichen lang sein und darf nur Zahlen, Buchstaben, Bindestriche oder Unterstriche enthalten.";
 eePasswordMismatch="Die Passw\u00f6rter stimmen nicht \u00fcberein.";
 llUpdateEmail="E-Mail-Adresse aktualisieren";
 ttUpdateEmail="\u00c4ndere deine E-Mail-Adresse";
 llNewEmailAddress="Neue E-Mail-Adresse";
 ttNewEmailAddress="Gib eine g\u00fcltige E-Mail-Adresse ein.";
 llUsername="Benutzername";
 llPassword="Passwort";
 llRegister="Registrieren";
 ttRegister="Erstelle ein neues Konto. Du brauchst dazu eine g\u00fcltige E-Mail-Adresse und einen eindeutigen Benutzernamen.";
 llForgotPassword="Passwort vergessen";
 ttForgotPassword="Klicke hier, um dein Passwort zur\u00fcckzusetzen.";
 llConfirmPassword="Passwort best\u00e4tigen";
 llEmail="E-Mail";
 ttNewUsername="Der Benutzername muss zwischen 3 und 16 Zeichen lang sein und darf nur Zahlen, Buchstaben, Bindestriche, Unterstriche oder @ enthalten.";
 llPasswordReset="Passwort zur\u00fccksetzen";
 llEnterEmail="Gib deine E-Mail-Adresse ein, mit der du registriert bist. MCStacker setzt dann dein Passwort zur\u00fcck und sendet es dann an deine E-Mail-Adresse.";
 llMarkdown="markdown";
 llCharactersRemaining="Zeichen \u00fcbrig.";
 llPublic="\u00d6ffentlich";
 llAllowComments="Kommentare erlauben";
 llTags="Tags";

 ttTags="Tags werden zum Suchen verwendet. Gebe bis zu 10 W\u00f6rter ein um diesen Befehl zu beschreiben. Trenne die Tags mit Kommata(,)";
 llSave="Speichern";
 ttSave="Diesen Befehl speichern, Alle \u00c4nderungen im Befehlsgenerator werden gespeichert und \u00fcberschreiben die vorherigen Einstellungen. Dies kann nicht r\u00fcckg\u00e4ngig gemacht werden!"; 
 llCancel="Abbrechen"; 
 ttCancel="\u00c4nderungen verwerfen."; 
 ttCommandTitle="Gebe dem Befehl einen beschreibenden und aussagekr\u00e4ftigen Titel.";
 ttCommandDescription="Beschreibe, was dieser Befehl macht und f\u00fcr was er ist..";
 ttCommentBox="Einen Kommentar zu diesem Befehl schreiben.";
 llTagLimitExceeded="Tag Limit \u00fcberschritten";
 ttRemoveThisTag="Diesen Tag entfernen.";
 llReportProblem="Problem melden";
 ttReportInstructions="Verwende dieses Formular um ein Problem mit diesem Befehl zu melden. Zum Beispiel Bugs, Befehle, die Minecraft zum Abst\u00fcrzen bringen, oder anst\u00f6\u00dfiges Material von Benutzern.";
 llProblem="Problem";
 ttReportEmail="Dieses Feld ist optional. Gebe deine Email-Adresse ein, wenn du kontaktiert werden willst.";
 llCancelReport="Abbrechen";
 ttCancelReport="Diese Meldung verwerfen.";
 llSubmitReport="Meldung absenden";
 ttSubmitReport="Die Meldung absenden.";
 eeReportResponse="Vielen Dank f\u00fcr deine Hilfe. Das Problem wird baldm\u00f6glichst bearbeitet und behoben.";
 eeCloneResponse="Der Befehl wurde in dein Konto kopiert, sodass du ihn nun bearbeiten kannst.";
 eeMissingDetails="Du musst deinem Befehl einen Titel und eine Beschreibung geben.";
 ttSearchByTag="Befehle mit diesem Tag suchen.";
 llCreatedBy="Erstellt von";//Forms a sentence like 'Created by @PyroStunts'
//Following two variables form a sentence like 'This command is Derived from OP Zombie by @PyroStunts'
 llDerivedFrom="Dieser Befehl ist eine Abstammung des Befehls"
 llBy="erstellt von";
 llLike="Gef\u00e4llt mir"
 llUnlike="Gef\u00e4llt mir nicht mehr";
 llComment="Kommentar";
 ttComments="Lese und schreibe Kommentare \u00fcber diesen Befehl.";
 llCloneCommand="Befehl kopieren";
 ttCloneCommand="Kopiere diesen Befehl in dein Konto. Damit erzeugst du eine Abstammung des Befehls."
 ttLikeUnlike="Speichere diesen Befehl auf deiner 'Gef\u00e4llt mir' Liste. Zum Entfernen 'Gef\u00e4llt mir nicht mehr' klicken.";
 llEdit="Bearbeiten";
 ttEdit="Details und Einstellungen des Befehls bearbeiten.";
 llDelete="L\u00f6schen";
 ttDelete="Diesen Befehl und seine zugeh\u00f6rigen Informationen l\u00f6schen. Dies kann nicht r\u00fcckg\u00e4ngig gemacht werden. Alle Kommentare und Abstammungszugeh\u00f6rigkeiten (aber nicht Befehle, die von diesem Befehl abgeleitet wurden) werden entfernt.";
 llClearDerivativeParent="Abstammung entfernen (Elternteil)";
 ttClearDerivativeParent="Entferne die Abstammungsbeziehung dieses Befehls zu seinem Elternteil. Kann nicht r\u00fcckg\u00e4ngig gemacht werden. Gut, wenn du einen Befehl so stark ver\u00e4ndert hast, dass er kaum noch Gemeinsamkeiten mit dem Abstammungsbefehl (Elternbefehl) aufweist.";
 llClearDerivativeChildren="Abstammungen entfernen (Kindobjekte)";
 ttClearDerivativeChildren="Entferne die Abstammungsbeziehung dieses Befehls zu seinen Kindobjekten. Kann nicht r\u00fcckg\u00e4ngig gemacht werden. Betrifft Befehle anderer Benutzer. Neue Befehle k\u00f6nnen weiterhin von diesem Befehl geklont werden solange er \u00f6ffentlich ist. Gut, wenn du deinen Befehl so stark ver\u00e4ndert hast, dass er kaum noch Gemeinsamkeiten mit den Kindbefehlen aufweist..";
 llSearchDerivatives="Abstammungen suchen";
 ttSearchDerivatives="Suche nach direkten Abstammungen dieses Befehls.";
 llReport="Melden";
 ttReport="Melde ein Problem mit diesem Befehl. Du kannst Bugs und Befehle, die Minecraft zum Absturz bringen oder anst\u00f6\u00dfiges Material von Benutzern melden.";
 ttDeleteComment="You may delete this comment if you wrote it or you are the creator of the command. This can't be undone."
 llHideComments="Kommentare ausblenden";
 ttHideComments="Kommentare ausblenden.";
 llPostComment="Kommentieren";
 ttPostComment="Einen Kommentar zu diesem Befehl schreiben.";
 llDeleteAllComments="Alle Kommentare l\u00f6schen";
 ttDeleteAllComments="Alle Kommentare zu diesem Befehl l\u00f6schen. Dies kann nicht r\u00fcckg\u00e4ngig gemacht werden.";
 eeDeleteAllComments="Bist du dir sicher, alle Kommentare zu diesem Befehl zu l\u00f6schen? Dies kann nicht r\u00fcckg\u00e4ngig gemacht werden";
 eeDeleteAllCommentsResponse="Kommentare gel\u00f6scht";
 ttPostThisComment="Kommentieren";
 llShareLink="Link teilen";
 eeConfirmDelete="You are about to permanently delete this command. All comments and likes associated with this command will be removed also. Click OK to permanently delete this command.";
 eeSignInRequired="Du musst angemeldet sein, um einen Befehl zu speichern.";
 ttShowHide="Details der Entity verstecken/anzeigen";
	
//XML editor
 llEditXML="XML Editor";
 ttEditXML="XML dieses Befehls bearbeiten. Dies ist ein erweitertes Feature das Grundkenntnisse in XML erfordert.";
 llExportXML="XML Export";
 ttExportXML="Die aktuellen Einstellungen dieses Befehls in den XML Editor exportieren.";
 llImportXML="XML Import";
 ttImportXML="Die aktuellen Einstellungen dieses Befehls nach MCStacker exportieren. Stelle sicher, dass das XML g\u00fcltig und frei von Fehlern ist, da dies sonst nicht korrekt funktioniert!";
 llCloseXML="XML Editor schlie\u00dfen";
 ttCloseXML="Den XML Editor schlie\u00dfen. Stelle sicher, dass du deine \u00c4nderungen importierst (sofern du diese beibehalten m\u00f6chtest).";
 
 //Pages
ppNews="news-de.html";
ppHelp="help-de.html"; //rename to help-de.html
ppAbout="about-de.html";//rename to about-de.html
ppTerms="termsandprivacy-de.html";//rename to termsandprivacy-de.html
}