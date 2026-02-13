// Game State
let teams = [];
let currentTeamIndex = 0;
let currentRound = 1;
let strikes = 0;
let currentQuestionIndex = 0;
let roundQuestions = [];
let revealedAnswers = [];
let roundPoints = 0;

// 60 Main Game Categories
const mainQuestions = [
    {
        question: "Name a miracle Jesus performed",
        answers: [
            { text: "Walking on water", points: 38 },
            { text: "Turning water into wine", points: 25 },
            { text: "Healing the blind", points: 18 },
            { text: "Feeding the 5,000", points: 12 },
            { text: "Raising Lazarus from the dead", points: 7 }
        ]
    },
    {
        question: "Name a book in the Old Testament",
        answers: [
            { text: "Genesis", points: 42 },
            { text: "Exodus", points: 28 },
            { text: "Psalms", points: 15 },
            { text: "Proverbs", points: 9 },
            { text: "Isaiah", points: 6 }
        ]
    },
    {
        question: "Name one of the Ten Commandments",
        answers: [
            { text: "Thou shalt not kill", points: 35 },
            { text: "Thou shalt not steal", points: 30 },
            { text: "Honor thy father and mother", points: 18 },
            { text: "Thou shalt not lie", points: 12 },
            { text: "No other gods before me", points: 5 }
        ]
    },
    {
        question: "Name a disciple of Jesus",
        answers: [
            { text: "Peter", points: 40 },
            { text: "John", points: 28 },
            { text: "Judas", points: 16 },
            { text: "Matthew", points: 10 },
            { text: "Thomas", points: 6 }
        ]
    },
    {
        question: "Name something in the Garden of Eden",
        answers: [
            { text: "Tree of knowledge", points: 45 },
            { text: "Serpent/Snake", points: 30 },
            { text: "Apple/Fruit", points: 15 },
            { text: "Adam and Eve", points: 7 },
            { text: "River", points: 3 }
        ]
    },
    {
        question: "Name a plague God sent to Egypt",
        answers: [
            { text: "Frogs", points: 32 },
            { text: "Locusts", points: 26 },
            { text: "Death of firstborn", points: 20 },
            { text: "Water to blood", points: 14 },
            { text: "Darkness", points: 8 }
        ]
    },
    {
        question: "Name a woman in the Bible",
        answers: [
            { text: "Mary (mother of Jesus)", points: 50 },
            { text: "Eve", points: 25 },
            { text: "Mary Magdalene", points: 12 },
            { text: "Ruth", points: 8 },
            { text: "Esther", points: 5 }
        ]
    },
    {
        question: "Name something Noah brought on the ark",
        answers: [
            { text: "Animals (two by two)", points: 55 },
            { text: "His family", points: 20 },
            { text: "Food", points: 15 },
            { text: "Water", points: 7 },
            { text: "Tools/supplies", points: 3 }
        ]
    },
    {
        question: "Name a book in the New Testament",
        answers: [
            { text: "Matthew", points: 35 },
            { text: "John", points: 28 },
            { text: "Revelation", points: 18 },
            { text: "Acts", points: 12 },
            { text: "Romans", points: 7 }
        ]
    },
    {
        question: "Name something David used to fight Goliath",
        answers: [
            { text: "Sling/Slingshot", points: 60 },
            { text: "Stones", points: 30 },
            { text: "Faith/God", points: 7 },
            { text: "Courage", points: 2 },
            { text: "Sword (Goliath's)", points: 1 }
        ]
    },
    {
        question: "Name a Gospel (book about Jesus' life)",
        answers: [
            { text: "Matthew", points: 30 },
            { text: "Mark", points: 25 },
            { text: "Luke", points: 25 },
            { text: "John", points: 20 }
        ]
    },
    {
        question: "Name something Moses parted",
        answers: [
            { text: "Red Sea", points: 85 },
            { text: "Waters", points: 10 },
            { text: "The sea", points: 5 }
        ]
    },
    {
        question: "Name a parable Jesus taught",
        answers: [
            { text: "Prodigal Son", points: 38 },
            { text: "Good Samaritan", points: 32 },
            { text: "Lost Sheep", points: 15 },
            { text: "Sower and the Seed", points: 10 },
            { text: "Mustard Seed", points: 5 }
        ]
    },
    {
        question: "Name a judge of Israel",
        answers: [
            { text: "Samson", points: 45 },
            { text: "Gideon", points: 25 },
            { text: "Deborah", points: 15 },
            { text: "Samuel", points: 10 },
            { text: "Ehud", points: 5 }
        ]
    },
    {
        question: "Name a king of Israel",
        answers: [
            { text: "David", points: 50 },
            { text: "Solomon", points: 30 },
            { text: "Saul", points: 12 },
            { text: "Herod", points: 5 },
            { text: "Ahab", points: 3 }
        ]
    },
    {
        question: "Name a prophet in the Bible",
        answers: [
            { text: "Isaiah", points: 30 },
            { text: "Jeremiah", points: 25 },
            { text: "Elijah", points: 20 },
            { text: "Jonah", points: 15 },
            { text: "Daniel", points: 10 }
        ]
    },
    {
        question: "Name something in the tabernacle/temple",
        answers: [
            { text: "Ark of the Covenant", points: 40 },
            { text: "Altar", points: 25 },
            { text: "Holy of Holies", points: 18 },
            { text: "Menorah/Lampstand", points: 12 },
            { text: "Veil/Curtain", points: 5 }
        ]
    },
    {
        question: "Name a way people praised God in the Bible",
        answers: [
            { text: "Singing", points: 40 },
            { text: "Prayer", points: 30 },
            { text: "Dancing", points: 15 },
            { text: "Shouting", points: 10 },
            { text: "Instruments/Music", points: 5 }
        ]
    },
    {
        question: "Name something Daniel did",
        answers: [
            { text: "Lion's den", points: 50 },
            { text: "Interpreted dreams", points: 25 },
            { text: "Prayed three times a day", points: 12 },
            { text: "Refused king's food", points: 8 },
            { text: "Wrote prophecies", points: 5 }
        ]
    },
    {
        question: "Name a city Paul visited",
        answers: [
            { text: "Rome", points: 35 },
            { text: "Corinth", points: 25 },
            { text: "Ephesus", points: 20 },
            { text: "Athens", points: 12 },
            { text: "Jerusalem", points: 8 }
        ]
    },
    {
        question: "Name something in heaven according to the Bible",
        answers: [
            { text: "Angels", points: 40 },
            { text: "God/Jesus", points: 30 },
            { text: "Streets of gold", points: 15 },
            { text: "Pearly gates", points: 10 },
            { text: "Throne", points: 5 }
        ]
    },
    {
        question: "Name something Jonah did",
        answers: [
            { text: "Swallowed by a whale/fish", points: 60 },
            { text: "Ran from God", points: 20 },
            { text: "Preached to Nineveh", points: 12 },
            { text: "Thrown overboard", points: 5 },
            { text: "Prayed in the fish", points: 3 }
        ]
    },
    {
        question: "Name a fruit of the Spirit",
        answers: [
            { text: "Love", points: 35 },
            { text: "Joy", points: 25 },
            { text: "Peace", points: 18 },
            { text: "Patience", points: 12 },
            { text: "Kindness", points: 10 }
        ]
    },
    {
        question: "Name something Jesus said on the cross",
        answers: [
            { text: "Forgive them", points: 38 },
            { text: "It is finished", points: 30 },
            { text: "Why have you forsaken me", points: 20 },
            { text: "Into your hands I commit my spirit", points: 8 },
            { text: "I thirst", points: 4 }
        ]
    },
    {
        question: "Name an animal mentioned in the Bible",
        answers: [
            { text: "Lamb/Sheep", points: 35 },
            { text: "Lion", points: 25 },
            { text: "Dove", points: 18 },
            { text: "Serpent/Snake", points: 14 },
            { text: "Donkey", points: 8 }
        ]
    },
    {
        question: "Name something Jesus taught in the Sermon on the Mount",
        answers: [
            { text: "Beatitudes (Blessed are...)", points: 40 },
            { text: "Lord's Prayer", points: 30 },
            { text: "Love your enemies", points: 15 },
            { text: "Golden Rule", points: 10 },
            { text: "Judge not", points: 5 }
        ]
    },
    {
        question: "Name a way Jesus described himself",
        answers: [
            { text: "Son of God", points: 40 },
            { text: "Good Shepherd", points: 25 },
            { text: "Light of the World", points: 15 },
            { text: "Bread of Life", points: 12 },
            { text: "The Way, Truth, and Life", points: 8 }
        ]
    },
    {
        question: "Name a son of Jacob/Israel",
        answers: [
            { text: "Joseph", points: 45 },
            { text: "Judah", points: 20 },
            { text: "Benjamin", points: 15 },
            { text: "Reuben", points: 12 },
            { text: "Levi", points: 8 }
        ]
    },
    {
        question: "Name something that happened at Pentecost",
        answers: [
            { text: "Tongues of fire", points: 38 },
            { text: "Holy Spirit came", points: 30 },
            { text: "Speaking in tongues", points: 18 },
            { text: "3,000 baptized", points: 10 },
            { text: "Wind/rushing wind", points: 4 }
        ]
    },
    {
        question: "Name something Abraham did",
        answers: [
            { text: "Almost sacrificed Isaac", points: 42 },
            { text: "Father of many nations", points: 25 },
            { text: "Left his homeland", points: 15 },
            { text: "Had faith in God", points: 12 },
            { text: "Received covenant from God", points: 6 }
        ]
    },
    {
        question: "Name a psalm that people know",
        answers: [
            { text: "Psalm 23 (The Lord is my Shepherd)", points: 70 },
            { text: "Psalm 119 (Longest)", points: 12 },
            { text: "Psalm 100 (Make a joyful noise)", points: 10 },
            { text: "Psalm 1", points: 5 },
            { text: "Psalm 51", points: 3 }
        ]
    },
    {
        question: "Name something Peter did",
        answers: [
            { text: "Denied Jesus three times", points: 40 },
            { text: "Walked on water", points: 28 },
            { text: "Cut off soldier's ear", points: 15 },
            { text: "Preached at Pentecost", points: 12 },
            { text: "Was given keys to kingdom", points: 5 }
        ]
    },
    {
        question: "Name a letter/epistle Paul wrote",
        answers: [
            { text: "Romans", points: 30 },
            { text: "Corinthians", points: 25 },
            { text: "Ephesians", points: 20 },
            { text: "Philippians", points: 15 },
            { text: "Timothy", points: 10 }
        ]
    },
    {
        question: "Name something in the armor of God",
        answers: [
            { text: "Sword of the Spirit", points: 30 },
            { text: "Shield of faith", points: 25 },
            { text: "Helmet of salvation", points: 20 },
            { text: "Breastplate of righteousness", points: 15 },
            { text: "Belt of truth", points: 10 }
        ]
    },
    {
        question: "Name a beatitude (Blessed are the...)",
        answers: [
            { text: "Poor in spirit", points: 25 },
            { text: "Meek", points: 22 },
            { text: "Peacemakers", points: 20 },
            { text: "Pure in heart", points: 18 },
            { text: "Merciful", points: 15 }
        ]
    },
    {
        question: "Name something Samson did",
        answers: [
            { text: "Cut his hair/lost strength", points: 40 },
            { text: "Killed a lion", points: 25 },
            { text: "Pushed down pillars", points: 20 },
            { text: "Killed Philistines", points: 10 },
            { text: "Fell in love with Delilah", points: 5 }
        ]
    },
    {
        question: "Name a river mentioned in the Bible",
        answers: [
            { text: "Jordan", points: 50 },
            { text: "Nile", points: 25 },
            { text: "Euphrates", points: 15 },
            { text: "Tigris", points: 7 },
            { text: "Kidron", points: 3 }
        ]
    },
    {
        question: "Name something Jesus healed people of",
        answers: [
            { text: "Blindness", points: 35 },
            { text: "Leprosy", points: 28 },
            { text: "Paralysis", points: 18 },
            { text: "Demon possession", points: 12 },
            { text: "Deafness", points: 7 }
        ]
    },
    {
        question: "Name a mountain in the Bible",
        answers: [
            { text: "Mount Sinai", points: 45 },
            { text: "Mount Ararat", points: 25 },
            { text: "Mount of Olives", points: 15 },
            { text: "Mount Zion", points: 10 },
            { text: "Mount Carmel", points: 5 }
        ]
    },
    {
        question: "Name something Joseph (Mary's husband) did",
        answers: [
            { text: "Carpenter", points: 40 },
            { text: "Protected Mary and Jesus", points: 30 },
            { text: "Fled to Egypt", points: 15 },
            { text: "Had dreams from God", points: 10 },
            { text: "Raised Jesus", points: 5 }
        ]
    },
    {
        question: "Name a gift the wise men brought to Jesus",
        answers: [
            { text: "Gold", points: 40 },
            { text: "Frankincense", points: 30 },
            { text: "Myrrh", points: 30 }
        ]
    },
    {
        question: "Name something in the book of Revelation",
        answers: [
            { text: "Four horsemen", points: 30 },
            { text: "Seven seals", points: 25 },
            { text: "New Jerusalem", points: 20 },
            { text: "Beast/666", points: 15 },
            { text: "Lake of fire", points: 10 }
        ]
    },
    {
        question: "Name a way people were baptized in the Bible",
        answers: [
            { text: "In water", points: 60 },
            { text: "By immersion", points: 25 },
            { text: "In the river", points: 10 },
            { text: "By John the Baptist", points: 5 }
        ]
    },
    {
        question: "Name something Solomon was known for",
        answers: [
            { text: "Wisdom", points: 50 },
            { text: "Building the temple", points: 25 },
            { text: "Wealth", points: 12 },
            { text: "Many wives", points: 8 },
            { text: "Writing Proverbs", points: 5 }
        ]
    },
    {
        question: "Name something Elijah did",
        answers: [
            { text: "Called down fire from heaven", points: 35 },
            { text: "Taken to heaven in whirlwind", points: 30 },
            { text: "Fed by ravens", points: 18 },
            { text: "Challenged prophets of Baal", points: 12 },
            { text: "Raised widow's son", points: 5 }
        ]
    },
    {
        question: "Name a parable about seeds or planting",
        answers: [
            { text: "Sower and the seed", points: 45 },
            { text: "Mustard seed", points: 35 },
            { text: "Growing seed", points: 15 },
            { text: "Wheat and tares", points: 5 }
        ]
    },
    {
        question: "Name something Ruth did",
        answers: [
            { text: "Stayed with Naomi", points: 40 },
            { text: "Gleaned in fields", points: 25 },
            { text: "Married Boaz", points: 20 },
            { text: "Ancestor of David", points: 10 },
            { text: "Said 'where you go, I will go'", points: 5 }
        ]
    },
    {
        question: "Name something Joshua did",
        answers: [
            { text: "Led Israelites into Promised Land", points: 35 },
            { text: "Conquered Jericho", points: 30 },
            { text: "Succeeded Moses", points: 18 },
            { text: "Sun stood still", points: 12 },
            { text: "Crossed the Jordan", points: 5 }
        ]
    },
    {
        question: "Name a feast or festival in the Bible",
        answers: [
            { text: "Passover", points: 50 },
            { text: "Pentecost", points: 25 },
            { text: "Feast of Tabernacles", points: 12 },
            { text: "Purim", points: 8 },
            { text: "Day of Atonement", points: 5 }
        ]
    },
    {
        question: "Name something Job experienced",
        answers: [
            { text: "Lost everything", points: 35 },
            { text: "Suffering/trials", points: 30 },
            { text: "Boils/sickness", points: 18 },
            { text: "Friends accused him", points: 12 },
            { text: "Restored by God", points: 5 }
        ]
    },
    {
        question: "Name a city destroyed in the Bible",
        answers: [
            { text: "Sodom", points: 42 },
            { text: "Gomorrah", points: 38 },
            { text: "Jericho", points: 12 },
            { text: "Nineveh", points: 5 },
            { text: "Babylon", points: 3 }
        ]
    },
    {
        question: "Name something that happened at the Last Supper",
        answers: [
            { text: "Jesus broke bread", points: 35 },
            { text: "Established communion", points: 28 },
            { text: "Washed disciples' feet", points: 20 },
            { text: "Predicted betrayal", points: 12 },
            { text: "Drank wine/cup", points: 5 }
        ]
    },
    {
        question: "Name someone who betrayed someone in the Bible",
        answers: [
            { text: "Judas (betrayed Jesus)", points: 70 },
            { text: "Delilah (betrayed Samson)", points: 15 },
            { text: "Peter (denied Jesus)", points: 10 },
            { text: "Absalom (betrayed David)", points: 3 },
            { text: "Satan (betrayed God)", points: 2 }
        ]
    },
    {
        question: "Name a way God spoke to people",
        answers: [
            { text: "Through prophets", points: 30 },
            { text: "Burning bush", points: 25 },
            { text: "Dreams", points: 20 },
            { text: "Angels", points: 15 },
            { text: "Still small voice", points: 10 }
        ]
    },
    {
        question: "Name something the Israelites complained about in the wilderness",
        answers: [
            { text: "Food/hunger", points: 40 },
            { text: "Water/thirst", points: 35 },
            { text: "Wanted to go back to Egypt", points: 15 },
            { text: "Moses' leadership", points: 7 },
            { text: "The journey/wandering", points: 3 }
        ]
    },
    {
        question: "Name a place Jesus was born or raised",
        answers: [
            { text: "Bethlehem", points: 60 },
            { text: "Nazareth", points: 30 },
            { text: "Manger/stable", points: 8 },
            { text: "Israel", points: 2 }
        ]
    },
    {
        question: "Name something Esther did",
        answers: [
            { text: "Saved the Jews", points: 45 },
            { text: "Became queen", points: 30 },
            { text: "Fasted", points: 12 },
            { text: "Revealed Haman's plot", points: 8 },
            { text: "Risked her life", points: 5 }
        ]
    },
    {
        question: "Name something that happened at Jesus' baptism",
        answers: [
            { text: "Dove descended", points: 40 },
            { text: "Voice from heaven", points: 35 },
            { text: "John baptized Him", points: 15 },
            { text: "Heavens opened", points: 7 },
            { text: "Spirit came upon Him", points: 3 }
        ]
    },
    {
        question: "Name a weapon used in the Bible",
        answers: [
            { text: "Sword", points: 45 },
            { text: "Spear", points: 25 },
            { text: "Sling", points: 15 },
            { text: "Bow and arrow", points: 10 },
            { text: "Jawbone of donkey", points: 5 }
        ]
    }
];

// 16 Fast Money Categories
const fastMoneyQuestions = [
    {
        question: "Name a book of the Bible",
        topAnswers: [
            { text: "Genesis", points: 45 },
            { text: "John", points: 28 },
            { text: "Psalms", points: 15 },
            { text: "Matthew", points: 8 },
            { text: "Revelation", points: 4 }
        ]
    },
    {
        question: "Name a disciple",
        topAnswers: [
            { text: "Peter", points: 50 },
            { text: "John", points: 25 },
            { text: "Matthew", points: 12 },
            { text: "Judas", points: 8 },
            { text: "James", points: 5 }
        ]
    },
    {
        question: "Name something Jesus did",
        topAnswers: [
            { text: "Performed miracles", points: 40 },
            { text: "Died on cross", points: 30 },
            { text: "Taught/preached", points: 15 },
            { text: "Healed people", points: 10 },
            { text: "Rose from dead", points: 5 }
        ]
    },
    {
        question: "Name an Old Testament prophet",
        topAnswers: [
            { text: "Isaiah", points: 35 },
            { text: "Jeremiah", points: 28 },
            { text: "Elijah", points: 20 },
            { text: "Daniel", points: 12 },
            { text: "Jonah", points: 5 }
        ]
    },
    {
        question: "Name something in heaven",
        topAnswers: [
            { text: "Angels", points: 42 },
            { text: "God/Jesus", points: 35 },
            { text: "Streets of gold", points: 12 },
            { text: "Throne", points: 7 },
            { text: "Saints", points: 4 }
        ]
    },
    {
        question: "Name a miracle of Jesus",
        topAnswers: [
            { text: "Walking on water", points: 38 },
            { text: "Water to wine", points: 30 },
            { text: "Feeding 5000", points: 18 },
            { text: "Healing blind", points: 10 },
            { text: "Raising Lazarus", points: 4 }
        ]
    },
    {
        question: "Name a king of Israel",
        topAnswers: [
            { text: "David", points: 55 },
            { text: "Solomon", points: 30 },
            { text: "Saul", points: 10 },
            { text: "Herod", points: 4 },
            { text: "Ahab", points: 1 }
        ]
    },
    {
        question: "Name something Moses did",
        topAnswers: [
            { text: "Parted Red Sea", points: 50 },
            { text: "Received Ten Commandments", points: 30 },
            { text: "Led Israelites", points: 12 },
            { text: "Burning bush", points: 6 },
            { text: "Staff to snake", points: 2 }
        ]
    },
    {
        question: "Name a woman in the Bible",
        topAnswers: [
            { text: "Mary", points: 50 },
            { text: "Eve", points: 28 },
            { text: "Ruth", points: 12 },
            { text: "Esther", points: 7 },
            { text: "Sarah", points: 3 }
        ]
    },
    {
        question: "Name something from the creation story",
        topAnswers: [
            { text: "Light", points: 35 },
            { text: "Animals", points: 28 },
            { text: "Adam and Eve", points: 20 },
            { text: "Garden of Eden", points: 12 },
            { text: "Seven days", points: 5 }
        ]
    },
    {
        question: "Name a plague of Egypt",
        topAnswers: [
            { text: "Frogs", points: 35 },
            { text: "Locusts", points: 28 },
            { text: "Death of firstborn", points: 20 },
            { text: "Blood", points: 12 },
            { text: "Darkness", points: 5 }
        ]
    },
    {
        question: "Name something Noah did",
        topAnswers: [
            { text: "Built ark", points: 60 },
            { text: "Saved animals", points: 25 },
            { text: "Survived flood", points: 10 },
            { text: "Obeyed God", points: 4 },
            { text: "Sent out dove", points: 1 }
        ]
    },
    {
        question: "Name a parable Jesus taught",
        topAnswers: [
            { text: "Prodigal Son", points: 40 },
            { text: "Good Samaritan", points: 35 },
            { text: "Lost Sheep", points: 15 },
            { text: "Sower", points: 7 },
            { text: "Mustard Seed", points: 3 }
        ]
    },
    {
        question: "Name a city in the Bible",
        topAnswers: [
            { text: "Jerusalem", points: 45 },
            { text: "Bethlehem", points: 30 },
            { text: "Jericho", points: 15 },
            { text: "Nazareth", points: 7 },
            { text: "Babylon", points: 3 }
        ]
    },
    {
        question: "Name something David did",
        topAnswers: [
            { text: "Killed Goliath", points: 60 },
            { text: "Became king", points: 22 },
            { text: "Wrote Psalms", points: 10 },
            { text: "Played harp", points: 6 },
            { text: "Defeated Philistines", points: 2 }
        ]
    },
    {
        question: "Name one of the Ten Commandments",
        topAnswers: [
            { text: "Don't kill", points: 38 },
            { text: "Don't steal", points: 32 },
            { text: "Don't lie", points: 15 },
            { text: "Honor parents", points: 10 },
            { text: "No other gods", points: 5 }
        ]
    }
];

function showRules() {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('rulesPage').style.display = 'block';
}

function showTeamSetup() {
    document.getElementById('rulesPage').style.display = 'none';
    document.getElementById('game').style.display = 'block';
    document.getElementById('teamSetup').style.display = 'block';
}

function startGame() {
    // Get team names
    teams = [
        { name: document.getElementById('team1Name').value || 'Team 1', score: 0 },
        { name: document.getElementById('team2Name').value || 'Team 2', score: 0 }
    ];

    // Hide setup
    document.getElementById('teamSetup').style.display = 'none';
    document.getElementById('scoreboard').style.display = 'grid';
    document.getElementById('roundInfo').style.display = 'block';
    document.getElementById('gameBoard').style.display = 'block';

    // Select random questions for the game (4 rounds)
    const shuffled = [...mainQuestions].sort(() => Math.random() - 0.5);
    roundQuestions = shuffled.slice(0, 4);

    currentRound = 1;
    currentQuestionIndex = 0;

    renderScoreboard();
    startRound();
}

function renderScoreboard() {
    const scoreboard = document.getElementById('scoreboard');
    scoreboard.innerHTML = '';

    teams.forEach((team, index) => {
        const teamDiv = document.createElement('div');
        teamDiv.className = 'team-score' + (index === currentTeamIndex ? ' active' : '');
        teamDiv.innerHTML = `
            <div class="team-name">${team.name}</div>
            <div class="score">${team.score}</div>
        `;
        scoreboard.appendChild(teamDiv);
    });
}

function startRound() {
    strikes = 0;
    revealedAnswers = [];
    roundPoints = 0;

    const question = roundQuestions[currentQuestionIndex];

    // Display round info
    const multiplier = currentRound;
    const roundName = ['Single', 'Double', 'Triple', 'Quadruple'][currentRound - 1];
    document.getElementById('roundInfo').innerHTML = `
        <div class="round-number">Round ${currentRound}</div>
        <div class="round-multiplier">${roundName} Points (×${multiplier})</div>
    `;

    // Display question
    document.getElementById('questionText').textContent = question.question;

    // Display answers (hidden)
    renderAnswers();

    // Reset strikes
    updateStrikes();

    // Hide steal button
    document.getElementById('stealBtn').style.display = 'none';
}

function renderAnswers() {
    const question = roundQuestions[currentQuestionIndex];
    const answersBoard = document.getElementById('answersBoard');
    answersBoard.innerHTML = '';

    question.answers.forEach((answer, index) => {
        const answerCard = document.createElement('div');
        answerCard.className = 'answer-card';
        answerCard.id = `answer-${index}`;

        const isRevealed = revealedAnswers.includes(index);

        answerCard.innerHTML = `
            <div class="answer-number">${index + 1}</div>
            <div class="answer-text ${!isRevealed ? 'answer-hidden' : ''}">${isRevealed ? answer.text : 'XXXXXXXX'}</div>
            <div class="answer-points ${!isRevealed ? 'answer-hidden' : ''}">${isRevealed ? answer.points * currentRound : 'XX'}</div>
        `;

        if (isRevealed) {
            answerCard.classList.add('revealed');
        }

        answersBoard.appendChild(answerCard);
    });
}

function revealAnswer() {
    const question = roundQuestions[currentQuestionIndex];

    // Find next unrevealed answer
    for (let i = 0; i < question.answers.length; i++) {
        if (!revealedAnswers.includes(i)) {
            revealedAnswers.push(i);
            roundPoints += question.answers[i].points * currentRound;
            renderAnswers();

            // Check if all answers revealed
            if (revealedAnswers.length === question.answers.length) {
                setTimeout(() => {
                    awardPoints();
                }, 1000);
            }
            break;
        }
    }
}

function addStrike() {
    strikes++;
    updateStrikes();

    if (strikes >= 3) {
        // Show steal button
        document.getElementById('stealBtn').style.display = 'inline-block';
    }
}

function updateStrikes() {
    const strikesDisplay = document.getElementById('strikesDisplay');
    strikesDisplay.innerHTML = '';

    for (let i = 0; i < strikes; i++) {
        const strike = document.createElement('span');
        strike.className = 'strike';
        strike.textContent = '❌';
        strikesDisplay.appendChild(strike);
    }
}

function stealPoints() {
    // Switch to other team and give them the points
    currentTeamIndex = currentTeamIndex === 0 ? 1 : 0;
    teams[currentTeamIndex].score += roundPoints;
    renderScoreboard();

    setTimeout(() => {
        nextQuestion();
    }, 2000);
}

function awardPoints() {
    teams[currentTeamIndex].score += roundPoints;
    renderScoreboard();

    setTimeout(() => {
        nextQuestion();
    }, 2000);
}

function nextQuestion() {
    currentQuestionIndex++;

    // Switch teams
    currentTeamIndex = currentTeamIndex === 0 ? 1 : 0;

    if (currentQuestionIndex >= roundQuestions.length) {
        // Game over - determine winner
        endGame();
    } else {
        currentRound++;
        startRound();
    }

    renderScoreboard();
}

function endGame() {
    // Hide game board
    document.getElementById('gameBoard').style.display = 'none';
    document.getElementById('roundInfo').style.display = 'none';

    // Determine winner
    const winner = teams[0].score > teams[1].score ? teams[0] : teams[1];
    const winnerIndex = teams[0].score > teams[1].score ? 0 : 1;

    // Show Fast Money option
    const winnerDiv = document.getElementById('winnerDisplay');
    winnerDiv.style.display = 'block';
    winnerDiv.innerHTML = `
        <h2 class="winner-title">🏆 ${winner.name} WINS! 🏆</h2>
        <div class="winner-name">Final Score: ${winner.score}</div>
        <button class="btn" onclick="startFastMoney(${winnerIndex})">Play Fast Money!</button>
        <button class="btn" onclick="location.reload()" style="margin-left: 1rem;">New Game</button>
    `;
}

function startFastMoney(teamIndex) {
    document.getElementById('winnerDisplay').style.display = 'none';
    document.getElementById('fastMoney').style.display = 'block';

    // Select 5 random Fast Money questions
    const shuffled = [...fastMoneyQuestions].sort(() => Math.random() - 0.5);
    const selectedQuestions = shuffled.slice(0, 5);

    let html = `
        <h2 class="fast-money-title">⚡ FAST MONEY ⚡</h2>
        <p style="text-align: center; font-size: 1.5rem; margin-bottom: 2rem;">
            Score 200 points to WIN!
        </p>
    `;

    selectedQuestions.forEach((q, index) => {
        html += `
            <div class="fast-money-question">
                <div class="fm-question-text">${index + 1}. ${q.question}</div>
                <input type="text" class="fm-answer-input" id="fm-input-${index}" placeholder="Enter answer...">
                <div class="fm-points" id="fm-points-${index}"></div>
            </div>
        `;
    });

    html += `
        <div style="text-align: center; margin-top: 2rem;">
            <button class="btn" onclick="scoreFastMoney(${teamIndex}, ${JSON.stringify(selectedQuestions).replace(/"/g, '&quot;')})">
                Reveal Scores
            </button>
        </div>
    `;

    document.getElementById('fastMoney').innerHTML = html;
}

function scoreFastMoney(teamIndex, questions) {
    let totalPoints = 0;

    questions.forEach((q, index) => {
        const userAnswer = document.getElementById(`fm-input-${index}`).value.trim().toLowerCase();

        // Check if answer matches any top answer
        let points = 0;
        q.topAnswers.forEach(answer => {
            if (answer.text.toLowerCase().includes(userAnswer) || userAnswer.includes(answer.text.toLowerCase().split(' ')[0])) {
                points = Math.max(points, answer.points);
            }
        });

        totalPoints += points;

        const pointsDiv = document.getElementById(`fm-points-${index}`);
        if (points > 0) {
            pointsDiv.textContent = `✓ ${points} points (${q.topAnswers[0].text})`;
            pointsDiv.style.color = '#4CAF50';
        } else {
            pointsDiv.textContent = `✗ 0 points (Top answer: ${q.topAnswers[0].text})`;
            pointsDiv.style.color = '#f44336';
        }
    });

    // Show final result
    setTimeout(() => {
        const fastMoneyDiv = document.getElementById('fastMoney');
        fastMoneyDiv.innerHTML += `
            <div style="text-align: center; margin-top: 3rem; padding: 2rem; background: rgba(255,255,255,0.1); border-radius: 15px;">
                <h2 style="font-size: 3rem; color: #f4c430;">TOTAL: ${totalPoints} POINTS</h2>
                <h3 style="font-size: 2.5rem; color: ${totalPoints >= 200 ? '#4CAF50' : '#f44336'}; margin-top: 1rem;">
                    ${totalPoints >= 200 ? '🎉 YOU WIN! 🎉' : 'So close! Try again!'}
                </h3>
                <button class="btn" onclick="location.reload()" style="margin-top: 2rem;">Play Again</button>
            </div>
        `;
    }, 500);
}
