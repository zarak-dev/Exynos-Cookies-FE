export interface Cookie {
  id: number;
  name: string;
  price: number;
  stock: number;
  description: string;
  imageUrl: string;
  isAvailable: boolean;
}

export const COOKIE_MOCK_DATA: Cookie[] = [
  {
    id: 2,
    name: "Chocolate Chip",
    price: 1290,
    stock: 18,
    description:
      "Classic Chocolate Chip Cookies... The Perfect Bite of Nostalgia",
    imageUrl: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=80&auto=format&fit=crop",
    isAvailable: true,
  },
  {
    id: 3,
    name: "Pink Velvet",
    price: 1350,
    stock: 12,
    description:
      "A velvety cake batter cookie topped with a swirl of vanilla cream.",
      imageUrl: "https://images.unsplash.com/photo-1576717585968-8ea8166b89b8?w=800&q=80&auto=format&fit=crop",
    isAvailable: true,
  },
  {
    id: 4,
    name: "Chilled Sugar",
    price: 1190,
    stock: 20,
    description:
      "A vanilla sugar cookie served chilled and topped with sweet almond.",
      imageUrl: "https://images.unsplash.com/photo-1597733153203-a54d0fbc47de?w=800&q=80&auto=format&fit=crop",
      isAvailable: true,
  },
  {
    id: 5,
    name: "Milkshake Dream",
    price: 1420,
    stock: 0,
    description:
      "A chilled cookie featuring layers of malted milkshake mousse and a cherry on top.",
    imageUrl: "https://images.unsplash.com/photo-1612845575953-f4b1e3d63160?w=800&q=80&auto=format&fit=crop",
    isAvailable: false,
  },
  {
    id: 6,
    name: "Lotus Biscoff Lava",
    price: 1490,
    stock: 8,
    description:
      "Packed with Biscoff cookie pieces and drizzled with white chocolate.",
    imageUrl: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&q=80&auto=format&fit=crop",
    isAvailable: true,
  },
  {
    id: 7,
    name: "Chocolate Fudge",
    price: 1290,
    stock: 15,
    description:
      "A rich, dark chocolate cookie loaded and drizzled with a hot fudge glaze.",
    imageUrl: "https://images.unsplash.com/photo-1590080874088-eec64895b423?w=800&q=80&auto=format&fit=crop",
    isAvailable: true,
  },
  {
    id: 8,
    name: "Peanut Butter Cup",
    price: 1350,
    stock: 0,
    description:
      "Classic peanut butter cookie topped with melted milk chocolate",
     imageUrl: "https://images.unsplash.com/photo-1634188023615-7e08901193b6?w=800&q=80&auto=format&fit=crop",
    isAvailable: false,
  },
  {
    id: 9,
    name: "Dulce de Leche",
    price: 1390,
    stock: 11,
    description:
      "Spiced cinnamon cookie layered with thick dulce de leche caramel.",
    imageUrl: "https://images.unsplash.com/photo-1622467827417-bbe2237067a9?w=800&q=80&auto=format&fit=crop",
    isAvailable: true,
  },
  {
    id: 10,
    name: "Lemon Meringue Pie",
    price: 1450,
    stock: 7,
    description:
      "A graham cracker crust filled with tart lemon curd & topped with fluffy meringue swirl.",
     imageUrl: "https://images.unsplash.com/photo-1600147566401-c2056eb69479?w=800&q=80&auto=format&fit=crop",
    isAvailable: true,
  },
  {
    id: 11,
    name: "Brown Sugar Crinkle",
    price: 1250,
    stock: 22,
    description:
      "Soft crinkled cookie rolled in sugar with a chewy caramel centre and crisp sugared edges.",
    imageUrl:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&q=80&auto=format&fit=crop",
    isAvailable: true,
  },
  {
    id: 12,
    name: "Salted Dark Chocolate",
    price: 1390,
    stock: 9,
    description:
      "Deep dark chocolate cookie finished with a pinch of sea salt for the perfect sweet-salty hit.",
    imageUrl:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=80&auto=format&fit=crop",
    isAvailable: true,
  },
  {
    id: 13,
    name: "Vanilla Butter Round",
    price: 1190,
    stock: 25,
    description:
      "Classic round butter cookie with a pure vanilla finish — light, crumbly and melt-in-your-mouth.",
    imageUrl:
      "https://images.unsplash.com/photo-1597733153203-a54d0fbc47de?w=800&q=80&auto=format&fit=crop",
    isAvailable: true,
  },
  {
    id: 14,
    name: "Glazed Choco Stack",
    price: 1320,
    stock: 14,
    description:
      "Stacked double-chocolate cookies drizzled with a shiny glaze — rich, fudgy and deeply satisfying.",
    imageUrl:
      "https://images.unsplash.com/photo-1598839950984-034f6dc7b495?w=800&q=80&auto=format&fit=crop",
    isAvailable: true,
  },
  {
    id: 15,
    name: "Classic Choco Chip",
    price: 1280,
    stock: 30,
    description:
      "Four perfectly baked chocolate chip cookies with golden edges and gooey centres — a timeless favourite.",
    imageUrl:
      "https://images.unsplash.com/photo-1634188023615-7e08901193b6?w=800&q=80&auto=format&fit=crop",
    isAvailable: true,
  },
  {
    id: 16,
    name: "Pecan Toffee Crunch",
    price: 1450,
    stock: 6,
    description:
      "Buttery toffee cookie loaded with roasted pecans and a caramelised crunchy top.",
    imageUrl:
      "https://images.unsplash.com/photo-1622467827417-bbe2237067a9?w=800&q=80&auto=format&fit=crop",
    isAvailable: true,
  },
  {
    id: 17,
    name: "Heritage Cocoa",
    price: 1310,
    stock: 0,
    description:
      "Deep cocoa cookie made with premium heritage chocolate — bold flavour, dense texture.",
    imageUrl:
      "https://images.unsplash.com/photo-1590080874088-eec64895b423?w=800&q=80&auto=format&fit=crop",
    isAvailable: false,
  },
  {
    id: 18,
    name: "Dark Chocolate Pile",
    price: 1360,
    stock: 17,
    description:
      "A tower of dark chocolate cookies — intensely bittersweet with a soft, pillowy bite.",
    imageUrl:
      "https://images.unsplash.com/photo-1557310717-d6bea9f36682?w=800&q=80&auto=format&fit=crop",
    isAvailable: true,
  },
  {
    id: 19,
    name: "Wooden Spoon Special",
    price: 1290,
    stock: 13,
    description:
      "House-recipe chocolate chip cookies baked fresh daily — chewy, golden and generously chunked.",
    imageUrl:
      "https://images.unsplash.com/photo-1639678111962-88fffeb071cb?w=800&q=80&auto=format&fit=crop",
    isAvailable: true,
  },
  {
    id: 20,
    name: "Rustic Oat Chip",
    price: 1220,
    stock: 19,
    description:
      "Hearty oat-based cookie with chocolate chips and a rustic homemade finish — wholesome and satisfying.",
    imageUrl:
      "https://images.unsplash.com/photo-1612845575953-f4b1e3d63160?w=800&q=80&auto=format&fit=crop",
    isAvailable: true,
  },
  {
    id: 21,
    name: "Bakehouse Assorted",
    price: 1480,
    stock: 5,
    description:
      "A signature assorted bake featuring the day's freshest cookies straight from our bakehouse oven.",
    imageUrl:
      "https://images.unsplash.com/photo-1576717585968-8ea8166b89b8?w=800&q=80&auto=format&fit=crop",
    isAvailable: true,
  },
  {
    id: 22,
    name: "Single Origin Cookie",
    price: 1350,
    stock: 10,
    description:
      "One perfect cookie. Single origin chocolate, slow-baked to crisp edges and a gooey warm centre.",
    imageUrl:
      "https://images.unsplash.com/photo-1600147566401-c2056eb69479?w=800&q=80&auto=format&fit=crop",
    isAvailable: true,
  },
  {
    id: 23,
    name: "Bowl Cookie Bites",
    price: 1200,
    stock: 28,
    description:
      "Bite-sized cookie rounds served in a bowl — perfect for sharing or a light sweet snack.",
    imageUrl:
      "https://images.unsplash.com/photo-1583743089695-4b816a340f82?w=800&q=80&auto=format&fit=crop",
    isAvailable: true,
  },
  {
    id: 24,
    name: "Toffee Chip Cluster",
    price: 1410,
    stock: 0,
    description:
      "Cookie loaded with toffee bits and chocolate clusters — every bite is a different kind of sweet.",
    imageUrl:
      "https://images.unsplash.com/photo-1657418830273-40c19cfff4d7?w=800&q=80&auto=format&fit=crop",
    isAvailable: false,
  },
  {
    id: 25,
    name: "Choco Hazelnut Swirl",
    price: 1490,
    stock: 16,
    description:
      "Chocolate cookie swirled with hazelnut paste and topped with crushed hazelnuts — rich and nutty.",
    imageUrl:
      "https://images.unsplash.com/photo-1557310717-d6bea9f36682?w=800&q=80&auto=format&fit=crop",
    isAvailable: true,
  },
  {
    id: 26,
    name: "White Choc Macadamia",
    price: 1460,
    stock: 11,
    description:
      "Buttery cookie packed with white chocolate chips and roasted macadamia nuts — tropical and indulgent.",
    imageUrl:
      "https://images.unsplash.com/photo-1598839950984-034f6dc7b495?w=800&q=80&auto=format&fit=crop",
    isAvailable: true,
  },
  {
    id: 27,
    name: "Espresso Chip",
    price: 1370,
    stock: 9,
    description:
      "Strong espresso cookie base with dark chocolate chips — a coffee lover's dream in cookie form.",
    imageUrl:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=80&auto=format&fit=crop",
    isAvailable: true,
  },
  {
    id: 28,
    name: "Cinnamon Dusted",
    price: 1230,
    stock: 24,
    description:
      "Warm cinnamon sugar cookie dusted to golden perfection — cosy, spiced and perfectly sweetened.",
    imageUrl:
      "https://images.unsplash.com/photo-1576717585968-8ea8166b89b8?w=800&q=80&auto=format&fit=crop",
    isAvailable: true,
  },
  {
    id: 29,
    name: "Brownie Cookie",
    price: 1420,
    stock: 0,
    description:
      "Half brownie, half cookie — fudgy in the middle, crackled on top, and dangerously chocolatey.",
    imageUrl:
      "https://images.unsplash.com/photo-1634188023615-7e08901193b6?w=800&q=80&auto=format&fit=crop",
    isAvailable: false,
  },
  {
    id: 30,
    name: "Golden Chip Classic",
    price: 1260,
    stock: 21,
    description:
      "Golden-baked butter cookie with a classic chocolate chip layout — simple, perfect, timeless.",
    imageUrl:
      "https://images.unsplash.com/photo-1600147566401-c2056eb69479?w=800&q=80&auto=format&fit=crop",
    isAvailable: true,
  },
  {
    id: 31,
    name: "Strawberry Cheesecake",
    price: 1490,
    stock: 13,
    description:
      "Tangy cream cheese cookie swirled with fresh strawberry jam and a buttery graham cracker base.",
    imageUrl:
      "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=800&q=80&auto=format&fit=crop",
    isAvailable: true,
  },
  {
    id: 32,
    name: "Matcha White Choc",
    price: 1450,
    stock: 10,
    description:
      "Earthy Japanese matcha cookie studded with creamy white chocolate chips — elegant and unique.",
    imageUrl:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&q=80&auto=format&fit=crop",
    isAvailable: true,
  },
  {
    id: 33,
    name: "Salted Caramel Chunk",
    price: 1470,
    stock: 8,
    description:
      "Gooey caramel pockets inside a buttery cookie base, finished with flaky sea salt on top.",
    imageUrl:
      "https://images.unsplash.com/photo-1622467827417-bbe2237067a9?w=800&q=80&auto=format&fit=crop",
    isAvailable: true,
  },
  {
    id: 34,
    name: "Red Velvet Crinkle",
    price: 1380,
    stock: 15,
    description:
      "Vibrant red velvet cookie dusted in powdered sugar with a soft cream cheese centre.",
    imageUrl:
      "https://images.unsplash.com/photo-1583743089695-4b816a340f82?w=800&q=80&auto=format&fit=crop",
    isAvailable: true,
  },
  {
    id: 35,
    name: "Coconut Macaroon",
    price: 1300,
    stock: 0,
    description:
      "Toasted coconut cookie with a chewy golden exterior and a soft moist centre.",
    imageUrl:
      "https://images.unsplash.com/photo-1612845575953-f4b1e3d63160?w=800&q=80&auto=format&fit=crop",
    isAvailable: false,
  },
  {
    id: 36,
    name: "Raspberry Jam Thumbprint",
    price: 1340,
    stock: 17,
    description:
      "Buttery shortbread cookie with a pressed centre filled with bright, tart raspberry jam.",
    imageUrl:
      "https://images.unsplash.com/photo-1576717585968-8ea8166b89b8?w=800&q=80&auto=format&fit=crop",
    isAvailable: true,
  },
  {
    id: 37,
    name: "Smores Stack",
    price: 1500,
    stock: 6,
    description:
      "Graham cracker cookie layered with toasted marshmallow and a thick dark chocolate slab.",
    imageUrl:
      "https://images.unsplash.com/photo-1590080874088-eec64895b423?w=800&q=80&auto=format&fit=crop",
    isAvailable: true,
  },
  {
    id: 38,
    name: "Churro Sugar",
    price: 1280,
    stock: 20,
    description:
      "Cinnamon-sugar rolled cookie inspired by classic churros — crisp outside, pillowy inside.",
    imageUrl:
      "https://images.unsplash.com/photo-1639678111962-88fffeb071cb?w=800&q=80&auto=format&fit=crop",
    isAvailable: true,
  },
  {
    id: 39,
    name: "Nutella Stuffed",
    price: 1520,
    stock: 9,
    description:
      "Thick chocolate cookie with a hidden Nutella centre that oozes out with every bite.",
    imageUrl:
      "https://images.unsplash.com/photo-1557310717-d6bea9f36682?w=800&q=80&auto=format&fit=crop",
    isAvailable: true,
  },
  {
    id: 40,
    name: "Blueberry Lemon Zest",
    price: 1360,
    stock: 14,
    description:
      "Bright lemon zest cookie bursting with juicy blueberries and a light citrus glaze.",
    imageUrl:
      "https://images.unsplash.com/photo-1600147566401-c2056eb69479?w=800&q=80&auto=format&fit=crop",
    isAvailable: true,
  },
  {
    id: 41,
    name: "Tiramisu Cookie",
    price: 1480,
    stock: 0,
    description:
      "Espresso-soaked cookie layered with mascarpone cream and a dusting of cocoa powder.",
    imageUrl:
      "https://images.unsplash.com/photo-1598839950984-034f6dc7b495?w=800&q=80&auto=format&fit=crop",
    isAvailable: false,
  },
  {
    id: 42,
    name: "Honey Walnut",
    price: 1320,
    stock: 18,
    description:
      "Golden honey cookie packed with roasted walnuts and a drizzle of raw wildflower honey.",
    imageUrl:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=80&auto=format&fit=crop",
    isAvailable: true,
  },
  {
    id: 43,
    name: "Cardamom Rose",
    price: 1400,
    stock: 11,
    description:
      "Delicate cardamom-spiced cookie with rose water glaze — inspired by South Asian mithai.",
    imageUrl:
      "https://images.unsplash.com/photo-1634188023615-7e08901193b6?w=800&q=80&auto=format&fit=crop",
    isAvailable: true,
  },
  {
    id: 44,
    name: "Triple Choc Bomb",
    price: 1550,
    stock: 7,
    description:
      "White, milk and dark chocolate chips in one cookie — an absolute triple threat.",
    imageUrl:
      "https://images.unsplash.com/photo-1583743089695-4b816a340f82?w=800&q=80&auto=format&fit=crop",
    isAvailable: true,
  },
  {
    id: 45,
    name: "Almond Biscotti",
    price: 1240,
    stock: 23,
    description:
      "Twice-baked crunchy almond biscotti with a vanilla base — perfect alongside coffee.",
    imageUrl:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&q=80&auto=format&fit=crop",
    isAvailable: true,
  },
  {
    id: 46,
    name: "Mango Chili Twist",
    price: 1430,
    stock: 0,
    description:
      "Bold mango-flavoured cookie with a surprising chili kick — sweet heat in every bite.",
    imageUrl:
      "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=800&q=80&auto=format&fit=crop",
    isAvailable: false,
  },
  {
    id: 47,
    name: "Pistachio Crunch",
    price: 1460,
    stock: 12,
    description:
      "Buttery cookie loaded with crushed pistachios and finished with a white chocolate drizzle.",
    imageUrl:
      "https://images.unsplash.com/photo-1622467827417-bbe2237067a9?w=800&q=80&auto=format&fit=crop",
    isAvailable: true,
  },
  {
    id: 48,
    name: "Burnt Butter Toffee",
    price: 1390,
    stock: 16,
    description:
      "Nutty brown butter cookie with toffee bits — deep, complex flavour with a caramelised finish.",
    imageUrl:
      "https://images.unsplash.com/photo-1612845575953-f4b1e3d63160?w=800&q=80&auto=format&fit=crop",
    isAvailable: true,
  },
  {
    id: 49,
    name: "Oreo Stuffed",
    price: 1510,
    stock: 8,
    description:
      "A whole Oreo baked inside a chocolate chip cookie — the ultimate cookies-within-a-cookie.",
    imageUrl:
      "https://images.unsplash.com/photo-1590080874088-eec64895b423?w=800&q=80&auto=format&fit=crop",
    isAvailable: true,
  },
  {
    id: 50,
    name: "Tahini Sesame",
    price: 1350,
    stock: 19,
    description:
      "Nutty tahini cookie rolled in sesame seeds with a subtle sweetness and earthy depth.",
    imageUrl:
      "https://images.unsplash.com/photo-1576717585968-8ea8166b89b8?w=800&q=80&auto=format&fit=crop",
    isAvailable: true,
  },
  {
    id: 51,
    name: "Maple Pecan",
    price: 1420,
    stock: 10,
    description:
      "Pure maple syrup cookie with caramelised pecan halves pressed into a golden buttery top.",
    imageUrl:
      "https://images.unsplash.com/photo-1639678111962-88fffeb071cb?w=800&q=80&auto=format&fit=crop",
    isAvailable: true,
  },
  {
    id: 52,
    name: "Black Sesame Crinkle",
    price: 1380,
    stock: 0,
    description:
      "Dramatic black sesame cookie with crinkled powdered sugar top — nutty, bold and beautiful.",
    imageUrl:
      "https://images.unsplash.com/photo-1557310717-d6bea9f36682?w=800&q=80&auto=format&fit=crop",
    isAvailable: false,
  },
  {
    id: 53,
    name: "Pumpkin Spice",
    price: 1310,
    stock: 22,
    description:
      "Soft pumpkin cookie spiced with cinnamon, nutmeg and clove — autumn in every bite.",
    imageUrl:
      "https://images.unsplash.com/photo-1600147566401-c2056eb69479?w=800&q=80&auto=format&fit=crop",
    isAvailable: true,
  },
  {
    id: 54,
    name: "Cherry Choc Chip",
    price: 1370,
    stock: 14,
    description:
      "Dark cherry pieces folded into a classic chocolate chip dough — fruity, rich and chewy.",
    imageUrl:
      "https://images.unsplash.com/photo-1598839950984-034f6dc7b495?w=800&q=80&auto=format&fit=crop",
    isAvailable: true,
  },
  {
    id: 55,
    name: "Lavender Shortbread",
    price: 1290,
    stock: 26,
    description:
      "Delicate floral shortbread infused with dried lavender — subtle, refined and melt-in-mouth.",
    imageUrl:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=80&auto=format&fit=crop",
    isAvailable: true,
  },
  {
    id: 56,
    name: "Choco Pretzel",
    price: 1440,
    stock: 11,
    description:
      "Chocolate cookie topped with crushed salted pretzels — the perfect sweet and salty combo.",
    imageUrl:
      "https://images.unsplash.com/photo-1634188023615-7e08901193b6?w=800&q=80&auto=format&fit=crop",
    isAvailable: true,
  },
  {
    id: 57,
    name: "Funfetti Birthday",
    price: 1330,
    stock: 18,
    description:
      "Soft vanilla cookie loaded with rainbow sprinkles — tastes like a birthday party in a bite.",
    imageUrl:
      "https://images.unsplash.com/photo-1583743089695-4b816a340f82?w=800&q=80&auto=format&fit=crop",
    isAvailable: true,
  },
  {
    id: 58,
    name: "Mocha Chip",
    price: 1400,
    stock: 0,
    description:
      "Rich mocha-flavoured cookie with dark chocolate chips and a hint of espresso bitterness.",
    imageUrl:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&q=80&auto=format&fit=crop",
    isAvailable: false,
  },
  {
    id: 59,
    name: "Caramel Apple",
    price: 1360,
    stock: 15,
    description:
      "Spiced apple cookie with a thick caramel drizzle — inspired by the classic fair favourite.",
    imageUrl:
      "https://images.unsplash.com/photo-1622467827417-bbe2237067a9?w=800&q=80&auto=format&fit=crop",
    isAvailable: true,
  },
  {
    id: 60,
    name: "Midnight Black",
    price: 1530,
    stock: 7,
    description:
      "Ultra-dark activated charcoal cookie with dark chocolate ganache — mysterious and intense.",
    imageUrl:
      "https://images.unsplash.com/photo-1612845575953-f4b1e3d63160?w=800&q=80&auto=format&fit=crop",
    isAvailable: true,
  },
];
