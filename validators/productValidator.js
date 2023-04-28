const { body, validationResult } = require("express-validator");
exports.productValidator = [
    body("sku").isString().isLength({ min: 3 }).not().isEmpty(),
    body("name").isString().isLength({ min: 3 }).not().isEmpty(),
    body("description").isString().isLength({ min: 3 }).not().isEmpty(),
    body("unitPrice").isFloat().not().isEmpty(),
    body("imageUrl").isString().isLength({ min: 3 }).not().isEmpty(),
    body("active").isBoolean().isLength({ min: 3 }).not().isEmpty(),
    body("unitsInStock").isInt().not().isEmpty(),
    body("dateCreated").isDate().isLength({ min: 3 }).not().isEmpty(),
    body("lastUpdate").isDate().isLength({ min: 3 }).not().isEmpty(),
    
    body("productCategory_id").isInt().not().isEmpty(),
    (req, res, next)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty())
          return res.status(400).json({ errors: errors.array() });   
        
        next()
    }
]


exports.productUpdateValidator = [
    body("sku").isString().isLength({ min: 3 }).not().optional(),
    body("name").isString().isLength({ min: 3 }).not().optional(),
    body("description").isString().isLength({ min: 3 }).not().optional(),
    body("unitPrice").isFloat().not().optional(),
    body("imageUrl").isString().isLength({ min: 3 }).not().optional(),
    body("active").isBoolean().isLength({ min: 3 }).not().optional(),
    body("unitsInStock").isInt().not().optional(),
    body("dateCreated").isDate().isLength({ min: 3 }).not().optional(),
    body("lastUpdate").isDate().isLength({ min: 3 }).not().optional(),
    
    body("productCategory_id").isInt().optional(),
    (req, res, next)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty())
          return res.status(400).json({ errors: errors.array() });   
        
        next()
    }
]