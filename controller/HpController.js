const ph = {
    nom: (req, res) => {
        res.render('index');
    },

    about: (req, res) => {
        res.render('about');
    },

    cart: (req, res) => {
        res.render('cart');
    },

    checkout: (req, res) => { // Corrected order
        res.render('checkout');
    },

    contact: (req, res) => { // Corrected order
        res.render('contact');
    },

    blog: (req, res) => { // Corrected order
        res.render('blog');
    },
    
    services: (req, res) => { // Corrected order
        res.render('services');
    },

    shop: (req, res) => { // Corrected order
        res.render('shop');
    },

    thankyou: (req, res) => { // Corrected order
        res.render('thankyou');
    }
};

module.exports = ph;
