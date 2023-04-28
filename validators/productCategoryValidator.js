const { body, validationResult } = require("express-validator");
exports.productCategoryValidator = [
    body("categoryName").isString().isLength({ min: 3 }).not().isEmpty(),
    body("commerce_id").isInt().not().isEmpty(),
    (req, res, next)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty())
          return res.status(400).json({ errors: errors.array() });   
        
        next()
    }
]


exports.productCategoryUpdateValidator = [
    body("categoryName").isString().isLength({ min: 3 }).optional,
    body("commerce_id").isInt().optional(),
    (req, res, next)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty())
          return res.status(400).json({ errors: errors.array() });   
        
        next()
    }
]