import {TreeNode} from "./types/tree-node.type";
import {dataset} from "./data";

class DataService {
  private readonly data: TreeNode[];

  constructor() {
    this.data = dataset;
  }

  async getData() {
    console.log(this.data);
  }
}

export default new DataService();
