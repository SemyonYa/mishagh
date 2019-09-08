export class InstallItem {
  id: number;
  name: string;
  works: string;
  recommendations: string;
  asResult: string;

  constructor(id: number, name: string, works: string, recommendations: string, asResult: string) {
    this.id = id;
    this.name = name;
    this.works = works;
    this.recommendations = recommendations;
    this.asResult = asResult;
  }
}
