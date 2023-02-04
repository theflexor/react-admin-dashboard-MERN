import OverAllStat from "../models/OverAllStat.js";

export const getSales = async (req, res) => {
  try {
    const overAllStat = await OverAllStat.find()

    res.status(200).json(overAllStat[0])
  } catch (e) {
    res.status(200).json({ message: e.message });
  }
};
