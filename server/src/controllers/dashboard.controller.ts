import { Request, Response } from "express";
import { getDashboardStats, getMonthlyEnquiries, toggleUserStatus } from "../services/dashboard.service";

export async function dashboardStatsController(
  req: Request,
  res: Response
) {
  try {
    const stats = await getDashboardStats();

    res.json({
      success: true,
      data: stats,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to load dashboard stats",
    });
  }
}

export async function monthlyChartController(
  req: Request,
  res: Response
) {
  try {
    const data = await getMonthlyEnquiries();

    res.json({
      success: true,
      data,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed",
    });
  }
}

export async function toggleUserStatusController(
  req: Request,
  res: Response
) {
  try {
    const user = await toggleUserStatus(
      req.params.id as string,
      req.body.isActive
    );

    res.json({
      success: true,
      data: user,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}