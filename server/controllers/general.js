import OverAllStat from "../models/OverAllStat.js";
import Transaction from "../models/Transaction.js";
import User from "../models/User.js";

export const GetUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
};

}
export const GetDashboardStats = async (req, res) => {
  try {
    const currentMonth = "November";
    const currentYear = "2021";
    const currentDay = "2021-11-15";

    const transactions = await Transaction.find()
      .limit(50)
      .sort({ createAt: -1 });

    const overallStat = await OverAllStat.find({ year: currentYear });

    const {
      totalCustomers,
      yearlyTotalSoldUnits,
      yearlySalesTotal,
      monthlyData,
      salesByCategory,
    } = overallStat[0];

    const thisMonthStats = overallStat[0].monthlyData.find(({ month }) => {
      return month === currentMonth;
    });
    const todayStats = overallStat[0].dailyData.find(({ date }) => {
      return date === currentDay;
    });

    res.status(200).json({
      totalCustomers,
      yearlySalesTotal,
      yearlyTotalSoldUnits,
      monthlyData,
      salesByCategory,
      thisMonthStats,
      todayStats,
      transactions,
    });
  } catch (e) {
    res.status(404).json({ message: error.message });
  }
};
