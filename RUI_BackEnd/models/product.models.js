const mongoose = require("mongoose");
const allowedSubcategories = {
  "סיוע ותרומה": [
    "עודפי ייבול",
    "עודפי מזון ממסעדות",
    "שאריות של מזון לחיות מחמד",
    "שונות - מזון",
    "אבן ושיש",
    "זבל אורגני",
    "חומרי בנייה",
    "חומרים וציוד לעבודות יד",
    "מתכות",
    "נייר",
    "עץ",
    "פלסטיק",
    "צבעים",
    "שונות - חומר גלם",
    "אביזרים לנכים",
    "ציוד סיעוד",
    "תרופות",
    "שונות - ציוד רפואי",
    "טיפולים אלטרנטיביים",
    "מחשבים ואינטרנט",
    "סיוע לנזקקים",
    "עזרה בשימוש בקהילות אגורה",
    "שיעורי בית",
    "שיתוף טרמפים",
    "שונות - לימוד והוראה",
    "שונות - שירותים וסיוע",
    "שונות - ייעוץ",
    "קשות והצעות סיוע",
    "הובלות",
    "חילופי דירה",
    "לינת נופש",
  ],
  "תחביבים וספורט": [
    "אביזרי בריאות וספא",
    "אומנויות לחימה",
    "גלישה",
    "טניס ומשחקי מחבט",
    "יוגה",
    "כדורים",
    "כושר",
    "ספורט אתגרי",
    "רכיבה על אופניים",
    "שחייה וצלילה",
    "שונות - ספורט",
    "אומנות ומלאכות",
    "דגמי מטוסים ומכוניות",
    "צילום",
    "ריקוד",
    "תפירה",
    "שונות - תחביבים",
    "בולים",
    "גלויות",
    "מטבעות ושטרות",
    "עתיקות",
    "שונות - אספנות",
    "אורגנים",
    "גיטרות",
    "כלי הקשה",
    "כלי נשיפה",
    "פסנתרים",
    "תופים",
    "שונות - כלי נגינה",
    "דיג",
    "טיפוס",
    "מחנאות וטיולים",
    "תירות",
    "שונות - בחוץ",
  ],
  "ספרים ומדיה": [
    "אדריכלות ועיצוב",
    "אמנות וצילום",
    "אמנות ותחביבים",
    "ביוגרפיות וזכרונות",
    "בית וגן",
    "בריאות, גוף ונפש",
    "הורות ומשפחות",
    "היסטוריה וארכיאולוגיה",
    "טיולים וטבע",
    "כלכלה והשקעות",
    "כתבי קודש",
    "מדע",
    "מדעי המדינה",
    "מדריכי טיולים",
    "מדריכים מקצועיים וטכניים",
    "מחשבים ואינטרנט",
    "ספורט",
    "ספרי בישול",
    "עסקים וניהול",
    "פילוסופיה",
    "פסיכולוגיה וסוציולוגיה",
    "רוחניות ועידן חדש",
    "תווים ואקורדים",
    "תיאטרון ומחזות",
    "שונות - ספרי עיון",
    "מדע בדיוני ופנטזיה",
    "מסתורין ומותחנים",
    "סיפורים קצרים",
    "ספרות",
    "ספרי ילדים",
    "ספרים בשפות זרות",
    "ספרים לנוער",
    "רומנטיקה",
    "שירה",
    "שונות - סיפורת",
    "Science & nature",
    "אזרחות",
    "אנגלית",
    "אנציקלופדיות",
    "גיאוגרפיה",
    "דתות",
    "היסטוריה",
    "כימיה",
    "לשון",
    "מחשבים",
    "מילונים",
    "משפטים",
    "מתמטיקה",
    "ספרי לימוד",
    "פיזיקה",
    "פילוסופיה",
    "פסיכולוגיה וסוציולוגיה",
    "רפואה",
    "שפות",
    "שונות - ספרי לימוד",
    "אופנה וסגנון",
    "אמנות וצילום",
    "אתני",
    "בישול ומזון",
    "בני נוער",
    "בעלי חיים וחיות מחמד",
    "בריאות וכושר",
    "גברים",
    "דת",
    "הורות ומשפחות",
    "העשרה",
    "חדשות ופוליטיקה",
    "לבית ולגינה",
    "מגזיני נשים",
    "מגזינים לילדים ונוער",
    "מדע וטבע",
    "מוסיקה",
    "מחשבים ואינטרנט",
    "מסעות ונופים",
    "מפות",
    "מקומי ואזורי",
    "ניהול",
    "ספורט",
    "עתיקות ואספנות",
    "קומיקס",
    "רכב",
    "רפואי",
    "תחביבים ומלאכות",
    "שונות - מגזינים",
    "ווידאו",
    "מוסיקה (אלקטרונית)",
    "מוסיקה (אתנית)",
    "מוסיקה (ג'אז)",
    "מוסיקה (פופ)",
    "מוסיקה (קלאסית)",
    "מוסיקה (רוק)",
    "מוסיקה (שחורה)",
    "ספרי שמע",
    "תקליטים",
    "שונות - מוסיקה",
    "משחקי וידאו",
    "תוכנת מחשב",
  ],
  "מכשירי חשמל": [
    "CD, DVD, BlueRay",
    "אביזרי מחשב",
    "אביזרי רשת",
    "אביזרים לטאבלטים",
    "גאדג'טים",
    "התקני אחסון",
    "חלקי מחשבים ניידים",
    "חלקי מחשבים שולחניים",
    "טאבלטים וקוראי ספרים אלקטרוניים",
    "כבלים ומחברים",
    "כרטיסי הרחבה",
    "לוחות אם ומעבדים",
    "מדפסות וסורקים",
    "מחשבי אפל",
    "מחשבים ניידים",
    "מחשבים שולחניים",
    "מסכים",
    "משחקי וידאו",
    "קונסולת משחק",
    "תוכנת מחשב",
    "שונות - מחשבים",
    "טלויזיות",
    "מאווררים",
    "מדיחי כלים",
    "מוצרי חשמל למטבח",
    "מזגנים",
    "מכונות כביסה ומייבשי כביסה",
    "מכשירי חימום",
    "מכשירי טיפוח",
    "מצלמות",
    "מקררים",
    "נגני מוסיקה ניידים",
    "סטריאו ואודיו",
    "שואבי אבק",
    "תאורה",
    "תנורים, מיקרוגלים, טוסטרים",
    "שונות - מוצרי חשמל",
    "אביזרים לטלפון נייד",
    "טלפונים ניידים",
    "טלפונים קווים",
  ],
  "ציוד לחיילים": [
    "מוצרי היגיינה",
    "תיקי גב",
    "קסדות טקטיות",
    "מדים טקטיים",
    "אוכל יבש",
    "שקי שינה",
    "תוספות לנשק",
    "תחתונים",
    "גרביים",
    "חולצות טרמיות",
    "מוצרי היגיינה נשית",
    "וסטים",
    "נעלי הרים",
    "ביגוד חורף",
    "פקלי קפה",
    "אוהל",
    "חולצות דרייפיט",
    "לדרמנים וסכינים",
    "טואלטיקה",
    "מטענים ניידים",
    "תיקי רחצה",
    "פנסי ראש",
    "מגבות",
    "שק כביסה",
    "סיגריות",
    "מצתים",
    "סכיני גילוח",
    "שקיות חימום",
    "כובע גרב",
    "שונות",
  ],
};
const productSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  userId: { type: mongoose.Types.ObjectId, ref: "User" },
  timeStamp: { type: Date, default: Date.now() },
  productId: { type: String },
  imageUrl: { type: String },
  address: { type: String },
  uploadType: { type: String },
  isActive: { type: Boolean },
  category: {
    type: String,
    enum: [
      "מכשירי חשמל",
      "ספרים ומדיה",
      "ביגוד ואופנה",
      "תחביבים וספורט",
      "הורה וילד",
      "סיוע ותרומה",
      "שונות",
    ],
  },
  location: {
    type: {
      type: String,
      enum: ["Point"],
      default: "Point",
    },
    coordinates: {
      type: [Number],
      index: "2dsphere",
    },
  },
  subCategory: {
    type: String,
    validate: {
      validator: function (value) {
        return allowedSubcategories[this.category].includes(value);
      },
      message: "Invalid subcategory for the selected category",
    },
  },
  condition: {
    type: String,
    enum: [
      "חדש",
      "משומש במצב טוב",
      "משומש במצב בינוני",
      "משומש במצב רע",
      "לא נבדק",
    ],
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = { Product };
