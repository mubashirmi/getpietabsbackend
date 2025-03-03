import { Tab6 } from "../models/tab6";
// Create Api 
export const createTab6 = async (req, res) => {
    try {
        const image = req.file?.filename;
        if (!image) {
            return res.status(400).json({ error: "Image is required" });
        }
        const newTab6 = await Tab6.create({ image });
        // Fetch the instance again to ensure `id` is populated
        const createdRecord = await Tab6.findByPk(newTab6.id);
        res.status(201).json(createdRecord);
    }
    catch (error) {
        console.error("Error creating Tab6:", error);
        res.status(500).json({ error: "Failed to create tab6" });
    }
};
export const getTab6 = async (req, res) => {
    try {
        const tab6 = await Tab6.findOne();
        if (!tab6) {
            return res.status(404).json({ error: "Tab6 not found" });
        }
        const baseUrl = "http://localhost:4000/uploads/";
        const tab6WithUrl = {
            id: tab6.dataValues.id,
            image: `${baseUrl}${tab6.dataValues.image}`
        };
        res.status(200).json(tab6WithUrl);
    }
    catch (error) {
        console.error("Error fetching Tab6:", error);
        res.status(500).json({ error: "Failed to fetch Tab6" });
    }
};
export const updateTab6 = async (req, res) => {
    try {
        const { id } = req.params;
        const image = req.file?.filename; // Get the new image if uploaded
        const tab6 = await Tab6.findByPk(id);
        if (!tab6)
            return res.status(404).json({ message: "Tab6 not found" });
        // Update fields only if new data is provided
        const updatedData = {};
        if (image)
            updatedData.image = image; // Only update the image if a new file is uploaded
        await tab6.update(updatedData);
        res.status(200).json(tab6);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to update tab6" });
    }
};
export const deleteTab6 = async (req, res) => {
    try {
        const { id } = req.params;
        const tab6 = await Tab6.findByPk(id);
        if (!tab6)
            return res.status(404).json({ message: "Tab6 not found" });
        await tab6.destroy();
        res.status(200).json({ message: "Tab6 deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ error: "Failed to delete tab6" });
    }
};
