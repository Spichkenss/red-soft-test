import DataController from "@fake-server/src/data/data.controller";
import toast from "react-hot-toast";
import {TreeNode} from "@/entities/data/model/types";

export const getData = async (): Promise<TreeNode[]> => {
  try {
    return await DataController.getData();
  } catch (e: any) {
    toast.error(e.message);
    return [];
  }
}
