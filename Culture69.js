class Culture69 {

    constructor() {
        this.alreadyPickUp = []
    }

    getCulture69() {

        //ze database

        const c69 = ["https://cdn.discordapp.com/attachments/870001213163311115/870001981291364402/image1.png", 
        "https://cdn.discordapp.com/attachments/870001213163311115/870001980955844688/image0.png"];

        //code that exists

        let res = null;

        if (this.alreadyPickUp.length == c69.length) this.alreadyPickUp = [];

        while (res == null || this.alreadyPickUp.includes(res)) {
            res = c69[~~(Math.random() * c69.length)];
        }

        this.alreadyPickUp.push(res);

        return res;
    }
}

if (typeof exports == "object") exports.Culture69 = Culture69;