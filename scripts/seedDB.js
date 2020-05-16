const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/booksearch"
    )

    const bookSeed = [
        {
            title: "Huckleberry Finn",
            authors: "Mark Twain",
            description: "It's lovely to live on a raft. We had the sky up there, all speckled with stars, and we used to lay on our backs and look up at them' Huck Finn spits, swears, smokes a pipe and never goes to school. With his too-big clothes and battered straw hat, Huck is in need of 'civilising', and the Widow Douglas is determined to take him in hand. And wouldn't you know, Huck's no-good Pap is also after him and he locks Huck up in his cabin in the woods. But Huck won't stand too much of this, and after a daring escape, he takes off down the Mississppi on a raft with an runaway slave called Jim. But plenty of dangers wait for them along the river - will they survive and win their freedom? BACKSTORY: Discover how to write secret messages in code, and learn about the extraordinary Mark Twain"
        },
        {
            title: "A Game of Thrones",
            authors: "George R.R. Martin",
            description: "NOW THE ACCLAIMED HBO SERIES GAME OF THRONES—THE MASTERPIECE THAT BECAME A CULTURAL PHENOMENON Winter is coming. Such is the stern motto of House Stark, the northernmost of the fiefdoms that owe allegiance to King Robert Baratheon in far-off King’s Landing. There Eddard Stark of Winterfell rules in Robert’s name. There his family dwells in peace and comfort: his proud wife, Catelyn; his sons Robb, Brandon, and Rickon; his daughters Sansa and Arya; and his bastard son, Jon Snow. Far to the north, behind the towering Wall, lie savage Wildings and worse—unnatural things relegated to myth during the centuries-long summer, but proving all too real and all too deadly in the turning of the season. Yet a more immediate threat lurks to the south, where Jon Arryn, the Hand of the King, has died under mysterious circumstances. Now Robert is riding north to Winterfell, bringing his queen, the lovely but cold Cersei, his son, the cruel, vainglorious Prince Joffrey, and the queen’s brothers Jaime and Tyrion of the powerful and wealthy House Lannister—the first a swordsman without equal, the second a dwarf whose stunted stature belies a brilliant mind. All are heading for Winterfell and a fateful encounter that will change the course of kingdoms. Meanwhile, across the Narrow Sea, Prince Viserys, heir of the fallen House Targaryen, which once ruled all of Westeros, schemes to reclaim the throne with an army of barbarian Dothraki—whose loyalty he will purchase in the only coin left to him: his beautiful yet innocent sister, Daenerys."
        }
    ]

    db.Book
      .remove({})
      .then(() => db.Book.collection.insertMany(bookSeed))
      .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
      })
      .catch(err => {
        console.error(err);
        process.exit(1);
      });