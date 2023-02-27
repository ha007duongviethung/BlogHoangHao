const Type = require("../models/type.model");

module.exports = class TypeApi {
    static async addNewType(req, res) {
        const type = req.body;
        if (!type.title)
            res.status(400).json({
                success: false,
                message: "Missing title type"
            });

        try {
            const typeOld = await Type.findOne({
                title: type.title,
            });

            if (typeOld)
                res.status(400).json({
                    success: false,
                    message: "Type already"
                });

            const newType = new Type({
                title: type.title,
            });

            await newType.save();

            res
                .status(200)
                .json({
                    success: true,
                    message: "Add type successfully",
                    newType
                });
        } catch (error) {
            res
                .status(500)
                .json({
                    success: false,
                    message: "Internal Server Error"
                });
        }
    }
};
