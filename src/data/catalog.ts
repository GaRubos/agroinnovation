import metroLogo from "@/assets/partners/metro.svg.asset.json";
import mhpLogo from "@/assets/partners/mhp.png.asset.json";
import silpoLogo from "@/assets/partners/silpo.svg.asset.json";
import kysheniaLogo from "@/assets/partners/velyka-kyshenia.png.asset.json";
import mayo30 from "@/assets/products/mayonez-30.webp.asset.json";
import mayo67 from "@/assets/products/mayonez-67.webp.asset.json";
import garlicSauce from "@/assets/products/sous-chasnykovyi.webp.asset.json";
import burgerSauce from "@/assets/products/sous-burgernyi.webp.asset.json";
import cheeseSauce from "@/assets/products/sous-syrnyi.webp.asset.json";
import tartar from "@/assets/products/tartar.webp.asset.json";
import caesar from "@/assets/products/tsezar.webp.asset.json";
import mustard from "@/assets/products/hirchytsia.webp.asset.json";
import ketchup from "@/assets/products/ketchup.webp.asset.json";
import pastaBucket from "@/assets/products/pasta-vidro.webp.asset.json";
import pastaJar from "@/assets/products/pasta-banka.webp.asset.json";
import pastaDillBucket from "@/assets/products/pasta-krip-vidro.webp.asset.json";
import pastaDillJar from "@/assets/products/pasta-krip-banka.webp.asset.json";
import driedGarlic from "@/assets/products/chasnyk-sushenyi.webp.asset.json";
import blackPepper from "@/assets/products/perets-chornyi.webp.asset.json";
import pepperMix from "@/assets/products/sumish-pertsiv.webp.asset.json";
import spicesSet from "@/assets/products/spetsii-nabir.webp.asset.json";
import orange from "@/assets/products/apelsyn-sushenyi.webp.asset.json";
import orangePack from "@/assets/products/apelsyn-sushenyi-pack.webp.asset.json";
import kiwi from "@/assets/products/kivi-sushene.webp.asset.json";
import kiwiPack from "@/assets/products/kivi-sushene-pack.webp.asset.json";
import pear from "@/assets/products/grusha-sushena.webp.asset.json";
import pearPack from "@/assets/products/grusha-sushena-pack.webp.asset.json";
import apple from "@/assets/products/yabluko-sushene.webp.asset.json";
import applePack from "@/assets/products/yabluko-sushene-pack.webp.asset.json";
import pumpkin from "@/assets/products/garbuz-sushenyi.webp.asset.json";
import beet from "@/assets/products/buriak-sushenyi.webp.asset.json";

import ideaMayo30 from "@/assets/ideas/mayonez-30.jpg";
import ideaMayo67 from "@/assets/ideas/mayonez-67.jpg";
import ideaGarlicSauce from "@/assets/ideas/sous-chasnykovyi.jpg";
import ideaBurger from "@/assets/ideas/sous-burgernyi.jpg";
import ideaCheese from "@/assets/ideas/sous-syrnyi.jpg";
import ideaTartar from "@/assets/ideas/tartar.jpg";
import ideaCaesar from "@/assets/ideas/tsezar.jpg";
import ideaMustard from "@/assets/ideas/hirchytsia.jpg";
import ideaKetchup from "@/assets/ideas/ketchup.jpg";
import ideaPasta from "@/assets/ideas/chasnykova-pasta.jpg";
import ideaPastaDill from "@/assets/ideas/chasnykova-pasta-krip.jpg";
import ideaDriedGarlic from "@/assets/ideas/chasnyk-sushenyi.jpg";
import ideaBlackPepper from "@/assets/ideas/perets-chornyi.jpg";
import ideaPepperMix from "@/assets/ideas/sumish-pertsiv.jpg";
import ideaOrange from "@/assets/ideas/apelsyn-sushenyi.jpg";
import ideaKiwi from "@/assets/ideas/kivi-sushene.jpg";
import ideaPear from "@/assets/ideas/grusha-sushena.jpg";
import ideaApple from "@/assets/ideas/yabluko-sushene.jpg";
import ideaPumpkin from "@/assets/ideas/garbuz-sushenyi.jpg";
import ideaBeet from "@/assets/ideas/buriak-sushenyi.jpg";

import cSauces from "@/assets/c-sauces.jpg";
import cPastes from "@/assets/c-pastes.jpg";
import cSpices from "@/assets/t-spices.jpg";
import cDried from "@/assets/c-dried.jpg";

export const BRAND_TM = "ВСЕ ПО ЧАСНИКУ";

export type CategoryId = "sauces" | "pastes" | "spices" | "dried";

export type Category = {
  id: CategoryId;
  name: string;
  tagline: string;
  cover: string;
};

/** [label, value] rows of the "nutrition per 100 g" table. */
export type Nutrition = [string, string][];

export type Product = {
  slug: string;
  name: string;
  category: CategoryId;
  /** Small caps line above the title, e.g. "База для холодної кухні". */
  tagline: string;
  short: string;
  /** Optional longer description paragraphs (from the client's store listing). */
  description?: string[];
  /** Packaging photos (white background, shown with object-contain). */
  photos: string[];
  /** Serving idea from the catalog — illustrative food photo. */
  menuIdea?: { text: string; image: string };
  uses: string[];
  packaging: string[];
  ingredients?: string;
  nutrition?: Nutrition;
  allergens?: string;
  storage: string;
  badge?: string;
};

export const categories: Category[] = [
  {
    id: "sauces",
    name: "Соуси",
    tagline: "Майонези та соуси для бургерів, ролів, салатів і снеків",
    cover: cSauces,
  },
  {
    id: "pastes",
    name: "Часникові пасти",
    tagline: "Виразний часниковий акцент для маринадів і заправок",
    cover: cPastes,
  },
  {
    id: "spices",
    name: "Сухі спеції",
    tagline: "Часник сушений і перці з часником",
    cover: cSpices,
  },
  {
    id: "dried",
    name: "Сушені овочі та фрукти",
    tagline: "Фруктові чіпси та сушені овочі без цукру й консервантів",
    cover: cDried,
  },
];

const SAUCE_BUCKET = ["1 кг · пластикове відро"];
const PASTE_PACKS = ["1 кг · пластикове відро", "200 г · скляна банка"];
const SPICE_PACKS = ["25 г · спайка по 15 шт", "25 г · шоубокс 30 шт", "1 кг · під замовлення"];

const SAUCE_STORAGE =
  "До відкриття — 180 діб від 0 °C до +20 °C, відносна вологість не вище 75%, не заморожувати. Після відкриття — від 0 °C до +10 °C, спожити протягом 14 діб, але не пізніше кінцевої дати на пакуванні.";
const FRUIT_PACKS = ["1 кг · пакет"];
const FRUIT_STORAGE = "Зберігати в сухому, прохолодному місці в щільно закритій упаковці.";
const FRUIT_USES = [
  "Корисний перекус і доповнення до чаю",
  "Каші, йогурти, мюслі, десерти та випічка",
  "Декор тортів, коктейлів і святкових страв",
];

const LABEL_STORAGE = "Умови зберігання та строк придатності — згідно з маркуванням на пакуванні.";

const nutrition = (
  kj: number,
  kcal: number,
  protein: string,
  fat: string,
  saturated: string,
  carbs: string,
  sugars: string,
  salt: string,
): Nutrition => [
  ["Енергія", `${kj} кДж / ${kcal} ккал`],
  ["Білки", `${protein} г`],
  ["Жири", `${fat} г`],
  ["Насичені жири", `${saturated} г`],
  ["Вуглеводи", `${carbs} г`],
  ["Цукри", `${sugars} г`],
  ["Сіль", `${salt} г`],
];

export const products: Product[] = [
  {
    slug: "mayonez-30",
    name: "Майонез 30%",
    category: "sauces",
    tagline: "База для холодної кухні",
    short: "Для заправок, сендвічів і власних соусів закладу.",
    photos: [mayo30.url],
    menuIdea: {
      text: "Картопляний салат із корнішонами та майонезною заправкою.",
      image: ideaMayo30,
    },
    uses: [
      "Заправка для овочевих і мʼясних салатів",
      "Основа для соусів із зеленню, спеціями чи маринованими овочами",
      "Сендвічі та холодні закуски",
    ],
    packaging: SAUCE_BUCKET,
    ingredients:
      "Вода питна очищена, олія соняшникова рафінована дезодорована (30%), крохмалі картопляні модифіковані, цукор білий, регулятори кислотності (оцтова кислота, молочна кислота (E270)), лимонна кислота (E330), сіль кухонна ґатунку «Екстра», консервант сорбат калію (E202), яєчний жовток сухий пастеризований, барвник натуральний бета-каротин (E160a), антиоксидант етилендіамінтетраацетат кальцію-натрію (E385).",
    nutrition: nutrition(1246, 298, "0,1", "30,1", "3,3", "6,7", "2,9", "1,4"),
    allergens: "Містить яйце. Можливі сліди глютену, сої, молока, гірчиці, арахісу.",
    storage: SAUCE_STORAGE,
  },
  {
    slug: "mayonez-67",
    name: "Майонез 67%",
    category: "sauces",
    tagline: "Для сендвічів і заправок",
    short: "Майонез для бургерів, холодних страв та авторських поєднань.",
    photos: [mayo67.url],
    menuIdea: { text: "Клубний сендвіч із куркою та майонезною заправкою.", image: ideaMayo67 },
    uses: [
      "Бургери, клубні сендвічі та роли",
      "Заправки для салатів із куркою або овочами",
      "Основа для дипів із гірчицею, часником чи спеціями",
    ],
    packaging: SAUCE_BUCKET,
    ingredients:
      "Олія соняшникова рафінована дезодорована (67%), вода питна очищена, цукор білий, крохмалі картопляні модифіковані, регулятори кислотності (оцтова кислота, лимонна кислота (E330)), сіль кухонна ґатунку «Екстра», гірчиця порошок, яєчний жовток сухий пастеризований, консервант сорбат калію (E202), барвник натуральний бета-каротин (E160a), антиоксидант етилендіамінтетраацетат кальцію-натрію (E385).",
    nutrition: nutrition(2539, 607, "0,2", "65,2", "7,2", "4,9", "2,8", "1,3"),
    allergens: "Містить яйце та гірчицю. Можливі сліди глютену, сої, молока, арахісу.",
    storage: SAUCE_STORAGE,
  },
  {
    slug: "sous-chasnykovyi",
    name: "Часниковий соус",
    category: "sauces",
    tagline: "Часниковий акцент",
    short: "Поєднання часникової пасти та сушеного часнику для страв щоденного меню.",
    photos: [garlicSauce.url],
    menuIdea: {
      text: "Піта з куркою, свіжими овочами та часниковим соусом.",
      image: ideaGarlicSauce,
    },
    uses: [
      "Шаурма, піта та роли з куркою",
      "Дип до картоплі, овочів і закусок",
      "Подача до м’яса або овочів із гриля",
    ],
    packaging: SAUCE_BUCKET,
    ingredients:
      "Вода питна очищена, олія соняшникова рафінована дезодорована, цукор білий, крохмалі картопляні модифіковані, часникова паста, часник сушений гранульований, сіль кухонна, жовток яєчний сухий пастеризований, регулятори кислотності (оцтова кислота, молочна кислота (E270)), консервант сорбат калію (E202), антиоксидант етилендіамінтетраацетат кальцію-натрію (E385), базилік сушений.",
    nutrition: nutrition(1332, 319, "0,3", "31,2", "3,4", "9,1", "4,3", "1,1"),
    allergens: "Містить яйце. Можливі сліди глютену, сої, молока, гірчиці, арахісу.",
    storage: SAUCE_STORAGE,
  },
  {
    slug: "sous-burgernyi",
    name: "Бургерний соус",
    category: "sauces",
    tagline: "Для бургерного меню",
    short: "Томатна паста, гірчиця, паприка й естрагон у соусі для бургерів і закусок.",
    photos: [burgerSauce.url],
    menuIdea: { text: "Бургер із яловичиною, огірком та бургерним соусом.", image: ideaBurger },
    uses: [
      "Бургери з яловичиною або куркою",
      "Сендвічі, хот-доги та роли",
      "Дип до картоплі фрі й цибулевих кілець",
    ],
    packaging: SAUCE_BUCKET,
    ingredients:
      "Вода питна очищена, олія соняшникова рафінована дезодорована, цукор білий, томатна паста, крохмалі картопляні модифіковані, сіль кухонна ґатунку «Екстра», гірчичний порошок, цибуля сушена мелена, паприка мелена, жовток яєчний сухий пастеризований, регулятори кислотності (оцтова кислота, молочна кислота (E270)), консервант сорбат калію (E202), антиоксидант етилендіамінтетраацетат кальцію-натрію (E385), естрагон сушений мелений, ароматизатор «Паприка».",
    nutrition: nutrition(1295, 310, "0,6", "30,3", "3,3", "8,7", "3,8", "1,4"),
    allergens: "Містить яйце та гірчицю. Можливі сліди глютену, сої, молока, арахісу.",
    storage: SAUCE_STORAGE,
  },
  {
    slug: "sous-syrnyi",
    name: "Сирний соус",
    category: "sauces",
    tagline: "Сирний смак для закусок",
    short: "Соус із сирним порошком та ароматизаторами «Пармезан» і «Чеддер».",
    photos: [cheeseSauce.url],
    menuIdea: { text: "Картопляні діпи з окремою порцією сирного соусу.", image: ideaCheese },
    uses: [
      "Дип до начос, картоплі та снеків",
      "Доповнення до бургерів і сендвічів",
      "Подача до курячих стрипсів та овочевих закусок",
    ],
    packaging: SAUCE_BUCKET,
    ingredients:
      "Вода питна очищена, олія соняшникова рафінована дезодорована, цукор білий, крохмалі картопляні модифіковані, сіль кухонна ґатунку «Екстра», сирний порошок, жовток яєчний сухий пастеризований, регулятори кислотності (оцтова кислота, молочна кислота (E270)), консервант сорбат калію (E202), антиоксидант етилендіамінтетраацетат кальцію-натрію (E385), ароматизатори «Пармезан», «Чеддер», барвник натуральний бета-каротин (E160a).",
    nutrition: nutrition(1286, 307, "0,3", "30,4", "3,3", "8,1", "3,8", "1,0"),
    allergens:
      "Містить яйце та молочний компонент (сирний порошок). Можливі сліди глютену, сої, гірчиці, арахісу.",
    storage: SAUCE_STORAGE,
  },
  {
    slug: "tartar",
    name: "Тартар",
    category: "sauces",
    tagline: "До риби та хрустких закусок",
    short: "Солоні огірки, зерна білої гірчиці, петрушка та естрагон.",
    photos: [tartar.url],
    menuIdea: { text: "Хрустка риба з картоплею та порцією тартару.", image: ideaTartar },
    uses: [
      "Риба в клярі та фіш-енд-чипс",
      "Рибні бургери й сендвічі",
      "Дип до картоплі та овочевих котлет",
    ],
    packaging: SAUCE_BUCKET,
    ingredients:
      "Вода питна очищена, олія соняшникова рафінована дезодорована, огірки солоні, гірчиця біла зерно, цукор білий, сіль кухонна ґатунку «Екстра», крохмалі картопляні модифіковані, жовток яєчний сухий пастеризований, цибуля сушена гранульована, часник сушений гранульований, регулятори кислотності (оцтова кислота, молочна кислота (E270)), консервант сорбат калію, антиоксидант етилендіамінтетраацетат кальцію-натрію (E385), петрушка сушена, естрагон сушений, ароматизатори «Кріп», «Гірчиця».",
    nutrition: nutrition(1287, 308, "0,5", "30,6", "3,3", "7,7", "3,9", "1,0"),
    allergens: "Містить яйце та гірчицю. Можливі сліди глютену, сої, молока, арахісу.",
    storage: SAUCE_STORAGE,
  },
  {
    slug: "tsezar",
    name: "Цезар",
    category: "sauces",
    tagline: "Для салатів і ролів",
    short: "Каперси, соєвий соус і гірчиця для виразної заправки.",
    photos: [caesar.url],
    menuIdea: { text: "Рол із куркою, салатом романо та соусом «Цезар».", image: ideaCaesar },
    uses: [
      "Салат «Цезар» із куркою",
      "Роли з листям салату та куркою",
      "Сендвічі та холодні закуски",
    ],
    packaging: SAUCE_BUCKET,
    ingredients:
      "Вода питна очищена, олія соняшникова рафінована дезодорована, каперси, соус соєвий, гірчиця порошок, крохмалі картопляні модифіковані, цукор білий, сіль кухонна ґатунку «Екстра», жовток яєчний сухий пастеризований, перець білий мелений, регулятори кислотності (оцтова кислота, молочна кислота (E270)), консервант сорбат калію (E202), антиоксидант етилендіамінтетраацетат кальцію-натрію (E385), ароматизатори «Гірчиця», «Часник», «Пармезан».",
    nutrition: nutrition(1268, 303, "0,3", "30,3", "3,3", "7,3", "3,3", "1,4"),
    allergens:
      "Містить яйце, сою та гірчицю. Можливі сліди глютену, молока, арахісу. Наявність пшениці у соєвому соусі слід перевірити за специфікацією.",
    storage: SAUCE_STORAGE,
  },
  {
    slug: "hirchytsia",
    name: "Гірчиця",
    category: "sauces",
    tagline: "Додаткова позиція",
    short: "Для подачі до м’яса та створення власних заправок.",
    photos: [mustard.url],
    menuIdea: { text: "Ковбаски з гриля з порцією гірчиці.", image: ideaMustard },
    uses: [
      "До ковбасок і м’ясних закусок",
      "У сендвічах і хот-догах",
      "Як компонент медово-гірчичної заправки",
    ],
    packaging: SAUCE_BUCKET,
    storage: LABEL_STORAGE,
  },
  {
    slug: "ketchup",
    name: "Кетчуп",
    category: "sauces",
    tagline: "Додаткова позиція",
    short: "Томатний акцент для снеків, бургерів і страв гриль.",
    photos: [ketchup.url],
    menuIdea: { text: "Картопля фрі з порцією кетчупу.", image: ideaKetchup },
    uses: ["До картоплі фрі та закусок", "У бургерах і хот-догах", "Для подачі до м’яса та овочів"],
    packaging: SAUCE_BUCKET,
    storage: LABEL_STORAGE,
  },
  {
    slug: "chasnykova-pasta",
    name: "Часникова паста",
    category: "pastes",
    tagline: "Часниковий акцент вашої кухні",
    short: "Для страв, у яких важливий виразний часниковий смак.",
    photos: [pastaBucket.url, pastaJar.url],
    menuIdea: { text: "Брускети з часниковим маслом.", image: ideaPasta },
    uses: [
      "Маринади для м’яса та овочів",
      "Власні соуси та заправки",
      "Часникове масло, грінки й брускети",
    ],
    packaging: PASTE_PACKS,
    ingredients: "Часник свіжий, сіль, сорбат калію (E202), лимонна кислота (E330).",
    nutrition: nutrition(217, 52, "1,3", "2,1", "0,2", "6,9", "0,0", "5,0"),
    storage: LABEL_STORAGE,
  },
  {
    slug: "chasnykova-pasta-z-kropom",
    name: "Часникова паста з кропом",
    category: "pastes",
    tagline: "Часник із кропом у ваших стравах",
    short: "Для ароматних заправок, закусок і гарнірів.",
    photos: [pastaDillBucket.url, pastaDillJar.url],
    menuIdea: {
      text: "Печена картопля з часниково-кроповою заправкою.",
      image: ideaPastaDill,
    },
    uses: [
      "До печеної та відвареної картоплі",
      "У сметанних і йогуртових заправках",
      "До риби, овочів та солоних сирників",
    ],
    packaging: PASTE_PACKS,
    nutrition: nutrition(213, 51, "1,3", "2,1", "0,2", "6,97", "0,0", "5,0"),
    storage: LABEL_STORAGE,
  },
  {
    slug: "chasnyk-sushenyi",
    name: "Часник сушений",
    category: "spices",
    tagline: "Сухі спеції з часником",
    short: "У сухих маринадах, супах, соусах і приправах до картоплі.",
    photos: [driedGarlic.url, spicesSet.url],
    menuIdea: { text: "Запечена картопля з сушеним часником і травами.", image: ideaDriedGarlic },
    uses: ["Сухі маринади", "Супи та соуси", "Приправи до картоплі"],
    packaging: SPICE_PACKS,
    storage: LABEL_STORAGE,
  },
  {
    slug: "perets-chornyi-z-chasnykom",
    name: "Перець чорний з часником",
    category: "spices",
    tagline: "Сухі спеції з часником",
    short: "До стейків, котлет (фаршу), страв гриль і м’ясних начинок.",
    photos: [blackPepper.url, spicesSet.url],
    menuIdea: { text: "Стейк у скоринці з чорного перцю та часнику.", image: ideaBlackPepper },
    uses: ["Стейки та страви гриль", "Котлети та фарш", "М’ясні начинки"],
    packaging: SPICE_PACKS,
    storage: LABEL_STORAGE,
  },
  {
    slug: "sumish-pertsiv-z-chasnykom",
    name: "Суміш перців з часником",
    category: "spices",
    tagline: "Сухі спеції з часником",
    short: "Для птиці, запечених овочів і завершення смаку готових страв.",
    photos: [pepperMix.url, spicesSet.url],
    menuIdea: { text: "Запечені курячі стегна з овочами та сумішшю перців.", image: ideaPepperMix },
    uses: ["Страви з птиці", "Запечені овочі", "Завершення смаку готових страв"],
    packaging: SPICE_PACKS,
    storage: LABEL_STORAGE,
  },
  {
    slug: "apelsyn-sushenyi",
    name: "Апельсин сушений",
    category: "dried",
    tagline: "Цитрусові чіпси",
    short: "Натуральні сушені скибочки апельсина без додавання цукру, барвників і консервантів.",
    description: [
      "Виготовляються зі стиглих соковитих апельсинів методом дбайливого сушіння, що дозволяє зберегти яскравий цитрусовий аромат, насичений смак і корисні властивості фрукта.",
      "Апельсинові чіпси мають приємну кисло-солодку нотку та хрустку текстуру.",
    ],
    photos: [orange.url, orangePack.url],
    menuIdea: { text: "Глінтвейн із сушеним апельсином і корицею.", image: ideaOrange },
    uses: [
      "Чай, глінтвейн і коктейлі",
      "Десерти, випічка, каші та мюслі",
      "Декор тортів і святкових страв",
    ],
    packaging: FRUIT_PACKS,
    ingredients: "100% апельсин.",
    storage: FRUIT_STORAGE,
  },
  {
    slug: "kivi-sushene",
    name: "Ківі сушене",
    category: "dried",
    tagline: "Фруктові чіпси",
    short: "Натуральні сушені скибочки ківі без додавання цукру, барвників і консервантів.",
    description: [
      "Виготовляються зі стиглих плодів методом дбайливого сушіння, що дозволяє зберегти природний аромат, насичений смак та корисні властивості фрукта.",
      "Ківі чіпси мають приємний кисло-солодкий смак і легку хрустку текстуру.",
    ],
    photos: [kiwi.url, kiwiPack.url],
    menuIdea: { text: "Йогурт із гранолою та чіпсами ківі.", image: ideaKiwi },
    uses: FRUIT_USES,
    packaging: FRUIT_PACKS,
    ingredients: "100% ківі.",
    storage: FRUIT_STORAGE,
  },
  {
    slug: "grusha-sushena",
    name: "Груша сушена",
    category: "dried",
    tagline: "Фруктові чіпси",
    short: "Натуральні сушені скибочки груші без додавання цукру, барвників і консервантів.",
    description: [
      "Виготовляються зі стиглих, соковитих плодів методом дбайливого сушіння, що дозволяє зберегти природну солодкість, ніжний аромат і корисні властивості фрукта.",
      "Грушеві чіпси мають м’який солодкий смак та приємну хрустку текстуру.",
    ],
    photos: [pear.url, pearPack.url],
    menuIdea: { text: "Сирна тарілка з горіхами, медом і грушевими чіпсами.", image: ideaPear },
    uses: [
      "Корисний перекус",
      "Каші, йогурти, мюслі, десерти та випічка",
      "Сирні тарілки, декор тортів і святкових страв",
    ],
    packaging: FRUIT_PACKS,
    ingredients: "100% груша.",
    storage: FRUIT_STORAGE,
  },
  {
    slug: "yabluko-sushene",
    name: "Яблуко сушене",
    category: "dried",
    tagline: "Фруктові чіпси",
    short: "Натуральні сушені скибочки яблук без додавання цукру, барвників і консервантів.",
    description: [
      "Виготовляються зі стиглих, соковитих яблук методом дбайливого сушіння, що дозволяє зберегти природну солодкість, аромат і корисні властивості фрукта.",
      "Яблучні чіпси мають приємний солодко-кислий смак і хрустку текстуру.",
    ],
    photos: [apple.url, applePack.url],
    menuIdea: { text: "Вівсяна каша з яблучними чіпсами, корицею та медом.", image: ideaApple },
    uses: FRUIT_USES,
    packaging: FRUIT_PACKS,
    ingredients: "100% яблуко.",
    storage: FRUIT_STORAGE,
  },
  {
    slug: "garbuz-sushenyi",
    name: "Гарбуз сушений 3×3 мм",
    category: "dried",
    tagline: "Овочева сировина для кухні та виробництва",
    short: "Натуральний гарбуз дрібним кубиком: насичений помаранчевий колір і природний солодкуватий смак.",
    description: [
      "Виготовлений зі свіжого гарбуза шляхом дбайливого сушіння. Завдяки дрібній та рівномірній фракції зручний у використанні, легко дозується та рівномірно розподіляється у готових стравах.",
      "Під час приготування відновлює вологу, надаючи стравам характерного гарбузового смаку та аромату. Додайте безпосередньо до страви або попередньо замочіть у теплій воді до бажаної консистенції.",
    ],
    photos: [pumpkin.url],
    menuIdea: { text: "Гарбузове різото з пармезаном і чебрецем.", image: ideaPumpkin },
    uses: [
      "Супи, каші, гарніри та рагу",
      "Готові харчові суміші та напівфабрикати",
      "Заклади HoReCa та харчові виробництва",
    ],
    packaging: ["1 кг · поліетиленовий пакет"],
    ingredients: "Сушений гарбуз 100%.",
    storage:
      "Зберігати в сухому, чистому, прохолодному приміщенні, захищеному від прямих сонячних променів, вологи та сторонніх запахів. Після відкриття упаковку щільно закривати. Термін зберігання — 24 місяці.",
  },
  {
    slug: "buriak-sushenyi-solomkoiu",
    name: "Буряк сушений соломкою",
    category: "dried",
    tagline: "Для перших страв і сухих сумішей",
    short: "Натуральний сушений буряк без консервантів і барвників: яскравий бордовий колір і солодкуватий смак.",
    description: [
      "Отриманий шляхом сушіння свіжих коренеплодів без додавання консервантів, барвників та інших штучних домішок.",
      "Під час сушіння буряк зберігає більшість своїх корисних властивостей, зокрема вітаміни (C, B1, B2, B6), мікроелементи (калій, магній, залізо) та харчові волокна. Зручна форма нарізки — соломка.",
    ],
    photos: [beet.url],
    menuIdea: { text: "Український борщ зі сметаною та кропом.", image: ideaBeet },
    uses: [
      "Борщ і буряковий суп",
      "Гарніри, овочеві суміші, крупʼяні страви та рагу",
      "Сухі суміші швидкого приготування, харчова промисловість і HoReCa",
    ],
    packaging: ["7 кг · мішок"],
    ingredients: "100% буряк.",
    storage: LABEL_STORAGE,
  },
];

/** "Sauce for your dish" — menu directions from the HoReCa catalog. */
export const menuDirections: { title: string; slugs: string[] }[] = [
  {
    title: "Бургери та сендвічі",
    slugs: ["sous-burgernyi", "mayonez-67", "sous-syrnyi", "sous-chasnykovyi"],
  },
  {
    title: "Шаурма та роли",
    slugs: ["sous-chasnykovyi", "sous-syrnyi", "tsezar", "mayonez-30", "tartar"],
  },
  { title: "Салати та холодна кухня", slugs: ["mayonez-30", "mayonez-67", "tsezar", "tartar"] },
  { title: "Риба та морепродукти", slugs: ["tartar", "sous-chasnykovyi", "hirchytsia"] },
  {
    title: "Картопля та снеки",
    slugs: ["sous-syrnyi", "sous-chasnykovyi", "sous-burgernyi", "ketchup"],
  },
  {
    title: "М’ясо та гриль",
    slugs: ["hirchytsia", "ketchup", "sous-chasnykovyi", "sous-burgernyi", "tsezar", "tartar"],
  },
];

export function getCategory(id: CategoryId) {
  return categories.find((c) => c.id === id)!;
}

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

/** Contact details for the "contact a manager" buttons. */
export const contacts = {
  phone: "+380 63 533 0999",
  phoneHref: "tel:+380635330999",
  email: "sales@agroinnovation.com.ua",
  telegram: "agroinnovation_manager",
  viberNumber: "+380000000000",
  instagram: "agro_innovation_ua",
  brandInstagram: "vsepochasnuku_ua",
  address: "Україна",
  hours: "Пн–Пт, 9:00–18:00",
};

/** Partner logos, taken from each partner's official website. */
/** `tall` marks compact, non-wide logos that need more height to look balanced. */
export const partners: { name: string; logo: string; kind: string; url: string; tall?: boolean }[] = [
  {
    name: "Сільпо",
    logo: silpoLogo.url,
    tall: true,
    kind: "Торговельна мережа",
    url: "https://silpo.ua/",
  },
  {
    name: "Велика Кишеня",
    logo: kysheniaLogo.url,
    kind: "Торговельна мережа",
    url: "https://kishenya.ua/",
  },
  {
    name: "METRO",
    logo: metroLogo.url,
    kind: "Cash & Carry",
    url: "https://www.metro.ua/",
  },
  {
    name: "МХП",
    logo: mhpLogo.url,
    kind: "Харчове виробництво",
    url: "https://mhp.com.ua/uk/glorytoUkraine",
  },
];
