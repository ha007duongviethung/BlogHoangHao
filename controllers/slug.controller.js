const Slug = require("../models/slug.model");

module.exports = class SlugApi {
    static async addNewSlug(req, res) {
      const slug = req.body;
      if (!slug.title)
        res.status(400).json({ success: false, message: "Missing title slug" });

      try {
        const slugOld = await Slug.findOne({
          title: slug.title,
        });

        if (slugOld)
          res.status(400).json({ success: false, message: "Slug already" });

        const newSlug = new Slug({
          title: slug.title,
        });

        await newSlug.save();

        res
          .status(200)
          .json({
              success: true,
              message: "Add slug successfully",
              newSlug
          });
      } catch (error) {
        res
          .status(500)
          .json({ success: false, message: "Internal Server Error" });
      }
    }
};
