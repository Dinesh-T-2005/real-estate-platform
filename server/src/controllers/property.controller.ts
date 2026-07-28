import { Request, Response } from "express";
import { getAllProperties } from "../services/property.service";
import * as propertyService from "../services/property.service";


export const getProperties = async (
  req: Request,
  res: Response
) => {
  try {
    const properties = await getAllProperties();

    res.status(200).json({
      success: true,
      data: properties,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch properties",
    });
  }
};

export const createProperty = async (
  req: Request,
  res: Response
) => {
  try {
    const property = await propertyService.createProperty(req.body);

    res.status(201).json({
      success: true,
      data: property,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Failed to create property",
    });

  }
};