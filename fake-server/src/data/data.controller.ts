import DataService from "./data.service";

class DataController {
  constructor(private readonly dataService: typeof DataService) {}

  async getData() {
    return this.dataService.getData();
  }
}

export default new DataController(DataService)
