import { images } from '../../../assets/images';

export const loliwareFlavors = [
  {
    id: 'tart-cherry',
    label: 'Tart Cherry',
    image: images.LoliCherry,
    accent1: '#cf2d52',
    accent2: '#ed335f',
    description:
      'A sophisticated and unobtrusive sweet aroma that is derived from real cherries. Pair with your favorite fruity cocktail, Tiki drink, juice or shaved ice.',
    ingredients:
      'Organic Tapioca Syrup, Organic Cane Sugar, Filtered Water, Agar-Agar (Seaweed), Cranberry Juice, Natural Cherry Flavor (Sunflower Oil), Fruit and Vegetable Juice for Color (Sweet Potato Apple, Radish, and Cherry Concentrates), Confectioners Coating.',
    prices: {
      small: 15.99,
      large: 59.99,
    },
    recipes: [
      {
        title: 'Tart Cherry Mule',
        image: images.LoliCup,
        ingredients: [
          '2 oz vodka',
          '1 oz tart cherry juice',
          '1/2 oz fresh lime juice',
          'Ginger beer',
        ],
        instructions: [
          'Fill a mule mug with ice.',
          'Add vodka, cherry juice, and lime juice.',
          'Top with ginger beer.',
        ],
      },
      {
        title: 'Fig and Hazelnut Sundae',
        image: images.LoliCup,
        ingredients: [
          '12 dried figs',
          '1/2 cup brown sugar',
          'Pinch of salt',
          '1/4 tsp ground ginger',
          '1 tsp vanilla extract',
          'Vanilla ice cream',
          'Toasted hazelnuts',
          'Whipped cream',
        ],
        instructions: [
          'Fig sauce: combine figs, brown sugar, water, salt, cinnamon, ginger, and vanilla in a medium saucepan. Bring to a simmer, then remove from heat and let sit for 10 minutes. Blend until smooth.',
          'Layer scoops of vanilla ice cream with the fig sauce in a Tart Cherry cup and top with whipped cream and toasted hazelnuts.',
        ],
      },
      {
        title: 'Cherry Basil Smash',
        image: images.LoliCup,
        ingredients: [
          '2 oz gin (or vodka)',
          '1 oz tart cherry juice',
          '1/2 oz fresh lemon juice',
          '1/2 oz simple syrup',
          '3-4 fresh basil leaves',
          'Tart Cherry LOLIWARE cup garnish',
          'Ice cubes',
        ],
        instructions: [
          'In a shaker, gently muddle the basil leaves with the simple syrup.',
          'Add gin, tart cherry juice, and lemon juice.',
          'Fill with ice and shake well.',
          'Strain into a glass filled with fresh ice.',
          'Garnish with a basil sprig and serve in a Tart Cherry LOLIWARE cup.',
        ],
      },
    ],
  },
  {
    id: 'yuzu-citrus',
    label: 'Yuzu Citrus',
    image: images.LoliCitrus,
    accent1: '#f7a02a',
    accent2: '#9c5912',
    description:
      'An effervescent blend of fresh Yuzu Citrus and Pink Grapefruit, each nibble is a delicious culinary treat.',
    ingredients:
      'Organic Cane Sugar, Yuzu Extract, Natural Flavors, Organic Tapioca Syrup, Filtered Water, Agar-Agar.',
    prices: {
      small: 15.99,
      large: 59.99,
    },
    recipes: [
      {
        title: 'Yuzu Citrus Spritz',
        image: images.LoliCup,
        ingredients: [
          '1 oz yuzu juice',
          '3 oz sparkling water',
          '1 oz simple syrup',
        ],
        instructions: [
          'Combine yuzu juice and syrup in a glass with ice.',
          'Top with sparkling water.',
        ],
      },
      {
        title: 'Sparkling Mulled Sangria',
        image: images.LoliCup,
        ingredients: [
          '2 Chai tea bags',
          '2 Cinnamon Sticks',
          '1 Orange peel',
          '1 cup Apple Cider',
          'Sparkling White Wine',
        ],
        instructions: [
          'In a medium size saucepan, combine the tea bags, cinnamon sticks, orange peel, and apple cider.',
          'Bring mixture to a simmer, remove the heat, and let the mixture sit for 30 minutes.',
          'Strain the mixture into a pitcher and top with chilled wine when ready to serve.',
        ],
      },
      {
        title: 'Yuzu Citrus Sorbet Fizz',
        image: images.LoliCup, // reuse your placeholder image
        ingredients: [
          '1 scoop yuzu sorbet (or lemon sorbet)',
          '1 oz yuzu juice (or yuzu concentrate)',
          '4 oz sparkling water or club soda',
          'Fresh mint leaves',
        ],
        instructions: [
          'Place a scoop of yuzu sorbet into a glass.',
          'Pour yuzu juice over the sorbet.',
          'Top with sparkling water.',
          'Garnish with fresh mint',
          'Serve immediately with a straw or spoon.',
        ],
      },
    ],
  },
  {
    id: 'matcha-green-tea',
    label: 'Matcha Tea',
    image: images.LoliMacha,
    accent1: '#72b332',
    accent2: '#54613a',
    description:
      'Earthy and smooth, this Matcha Tea flavor adds a sophisticated green tea note to cocktails, desserts, or simply enjoyed on its own.',
    ingredients:
      'Organic Cane Sugar, Organic Matcha Powder, Filtered Water, Agar-Agar (Seaweed), Natural Flavors.',
    prices: {
      small: 15.99,
      large: 59.99,
    },
    recipes: [
      {
        title: 'Matcha Latte Float',
        image: images.LoliCup,
        ingredients: [
          '1 cup milk (dairy or plant-based)',
          '1 tsp matcha powder',
          '1 tbsp honey or sweetener',
          'Scoop of vanilla ice cream',
        ],
        instructions: [
          'Warm the milk and whisk in matcha powder and sweetener until frothy.',
          'Pour into a glass and add a scoop of vanilla ice cream.',
        ],
      },
      {
        title: 'Iced Matcha Mojito',
        image: images.LoliCup,
        ingredients: [
          '1 tsp matcha powder',
          '1 oz simple syrup',
          'Fresh mint leaves',
          '1 oz white rum',
          'Club soda',
          'Ice',
        ],
        instructions: [
          'Muddle mint leaves and simple syrup in a glass.',
          'Add ice, matcha powder, and rum.',
          'Top with club soda and stir gently.',
        ],
      },
      {
        title: 'Macha Chip Ice Cream',
        image: images.LoliCup,
        ingredients: [
          '3.5 oz Bittersweet Chocolate',
          '1 1/2 tbl Macha Powder',
          '3 tbl warm Water',
          '14 oz Can condensed milk',
          '2 cups Heavy cream',
          'Pinch salt',
        ],
        instructions: [
          'Melt down the chocolate in the microwave in a small bowl, stirring every 30 seconds to avoid burning burn. Next, spread a thin layer of chocolate on a parchment lined baking sheet and place it in the freezer to harden.',
          'Make the ice cream base by placing remaining ingredients in the bowl of a stand mixer fitted with the whisk attachment, and whip it on medium speed until the mixture is light and fluffy.',
          'Take the chocolate out of the freezer and chop it into small chips. Carefully fold the chips into the ice cream base, then put it all into a loaf pan.',
          'Cover with plastic wrap and freeze for at least 4 hours. Serve immediately.',
        ],
      },
    ],
  },
  {
    id: 'vanilla-bean',
    label: 'Vanilla Bean',
    image: images.LoliVanilla,
    accent1: '#ddb06d',
    accent2: '#512a16',
    description:
      'Made from real Madagascar vanilla this delicious cup is ideal to serve sweet cocktails, shakes, sundaes, & iced coffee.',
    ingredients:
      'Organic Cane Sugar, Natural Vanilla Extract, Filtered Water, Agar-Agar (Seaweed).',
    prices: {
      small: 15.99,
      large: 59.99,
    },
    recipes: [
      {
        title: 'Vanilla Bean Affogato',
        image: images.LoliCup,
        ingredients: ['1 scoop vanilla ice cream', '1 shot hot espresso'],
        instructions: [
          'Place scoop of vanilla ice cream in a small glass.',
          'Pour hot espresso over the ice cream.',
        ],
      },
      {
        title: 'Vanilla Old Fashioned',
        image: images.LoliCup,
        ingredients: [
          '2 oz bourbon',
          '1/4 oz vanilla syrup',
          '2 dashes Angostura bitters',
          'Orange peel',
        ],
        instructions: [
          'In a glass, combine bourbon, vanilla syrup, and bitters.',
          'Add ice and stir until chilled.',
          'Garnish with orange peel.',
        ],
      },
      {
        title: 'Vanilla Old Fashioned',
        image: images.LoliCup,
        ingredients: [
          '12 marshmellows',
          '1 pint chocolate ice cream',
          '4 graham crackers',
          '1/2 cup milk',
        ],
        instructions: [
          'Preheat your broiler to high and place the marshmellows on a baking sheet lined with aluminum foil.',
          'Broil 2-5 minutes, until the marshmellows are golden brown (or use a culinary torch).',
          'Set marshmellows aside to cool for a few minutes while you prep the rest of the milkshake.',
          'In a blender, add the ice cream, graham crackers, milk and 8 of the marshmellows.',
          'Blend on high until smooth. Serve immediately in Vanilla Bean cups, garnish with the remaining marshmellows and graham cracker.',
        ],
      },
    ],
  },
] as const;
