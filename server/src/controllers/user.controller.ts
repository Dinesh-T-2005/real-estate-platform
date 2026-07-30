import { Request, Response } from "express";

import {
  getUserProfile,
  updateUserProfile,
  getUsers,
  updateUserStatus,
  deleteUser,
} from "../services/user.service";

// =====================
// User Profile
// =====================

export async function getProfile(
  req: Request,
  res: Response
) {
  try {
    const userId = (req as any).user.id;

    const user = await getUserProfile(userId);

    res.json({
      success: true,
      data: user,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to load profile",
    });
  }
}

export async function updateProfile(
  req: Request,
  res: Response
) {
  try {
    const userId = (req as any).user.id;

    const user = await updateUserProfile(
      userId,
      req.body
    );

    res.json({
      success: true,
      message: "Profile updated successfully",
      data: user,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to update profile",
    });
  }
}

// =====================
// Admin - Get All Users
// =====================

export async function getUsersController(
  req: Request,
  res: Response
) {
  try {
    const users = await getUsers();

    res.json({
      success: true,
      data: users,
    });

  } catch (error: any) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
}

// =====================
// Admin - Block / Unblock User
// =====================

export async function updateUserStatusController(
  req: Request,
  res: Response
) {
  try {

    const user = await updateUserStatus(
      req.params.id as string,
      req.body.isActive
    );

    res.json({
      success: true,
      data: user,
    });

  } catch (error: any) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
}

// =====================
// Admin - Delete User
// =====================

export async function deleteUserController(
  req: Request,
  res: Response
) {
  try {

    await deleteUser(req.params.id as string);

    res.json({
      success: true,
      message: "User deleted successfully",
    });

  } catch (error: any) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
}