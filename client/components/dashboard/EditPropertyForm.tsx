"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  getPropertyById,
  updateProperty,
} from "@/lib/api";

import PropertyForm from "./PropertyForm";
import { PropertyFormInput } from "@/lib/validations/property";

interface Props {
  id: string;
}

export default function EditPropertyForm({ id }: Props) {

  const [property,setProperty] = useState<any>();

  useEffect(()=>{

      loadProperty();

  },[]);

  async function loadProperty(){

      const data = await getPropertyById(id);

      setProperty(data);

  }

  async function handleUpdate(data:PropertyFormInput){

      try{

          await updateProperty(id,data);

          toast.success("Property Updated Successfully");

      }catch(error:any){

          toast.error(error.message);

      }

  }

  if(!property){

      return <h1>Loading...</h1>;

  }

  return(

      <PropertyForm
          initialData={property}
          buttonText="Update Property"
          onSubmit={handleUpdate}
      />

  );

}