const { body, validationResult } = require("express-validator");
exports.commerceValidator = [
    body("commerceName").isString().isLength({ min: 3 }).not().isEmpty(),
    body("proprietaireName").isString().isLength({ min: 3 }).not().isEmpty(),
    body("adresse").isString().isLength({ min: 3 }).not().isEmpty(),
    body("telephone").isString().isLength({ min: 3 }).not().isEmpty(),
    body("email").isString().isLength({ min: 3 }).not().isEmpty(),
    body("transfert").isFloat().not().isEmpty(),
    body("date_transfert").isDate().isLength({ min: 3 }).not().isEmpty(),
    body("type_transfert").isString().isLength({ min: 3 }).not().isEmpty(),
    body("payed").isBoolean().isLength({ min: 3 }).not().isEmpty(),
    body("date_peremption").isDate().isLength({ min: 3 }).not().isEmpty(),
    body("presentation").isString().isLength({ min: 3 }).not().isEmpty(),
    body("ville_id").isInt().not().isEmpty(),
    
    (req, res, next)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty())
          return res.status(400).json({ errors: errors.array() });   
        
        next()
    }
]


exports.commerceUpdateValidator = [
    body("commerceName").isString().isLength({ min: 3 }).not().optional,
    body("proprietaireName").isString().isLength({ min: 3 }).not().optional,
    body("adresse").isString().isLength({ min: 3 }).not().optional,
    body("telephone").isString().isLength({ min: 3 }).not().optional,
    body("email").isString().isLength({ min: 3 }).not().optional,
    body("transfert").isString().isLength({ min: 3 }).not().optional,
    body("date_transfert").isDate().isLength({ min: 3 }).not().optional,
    body("type_transfert").isString().isLength({ min: 3 }).not().optional,
    body("payed").isBoolean().isLength({ min: 3 }).not().optional,
    body("date_peremption").isDate().isLength({ min: 3 }).not().optional,
    body("presentation").isString().isLength({ min: 3 }).not(),
    body("ville_id").isInt().optional(),


    (req, res, next)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty())
          return res.status(400).json({ errors: errors.array() });   
        
        next()
    }
]