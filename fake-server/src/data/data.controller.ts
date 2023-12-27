import DataService from "./data.service";
import {SleepDecorator} from "../../lib/decorators/sleep";
import {TreeNode} from "./types/tree-node.type";

class DataController {
  constructor(private readonly dataService: typeof DataService) {}

  @SleepDecorator(2000)
  async getData(): Promise<TreeNode[]> {
    return this.dataService.getData();
  }
}

export default new DataController(DataService)
