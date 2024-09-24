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

    checkout: (req, res) => { 
        res.render('checkout');
    },

    contact: (req, res) => { 
        res.render('contact');
    },

    blog: (req, res) => { 
        res.render('blog');
    },
    
    services: (req, res) => { 
        res.render('services');
    },

    shop: (req, res) => { 
        res.render('shop');
    },

    thankyou: (req, res) => { 
        res.render('thankyou');
    }
};

module.exports = ph;
