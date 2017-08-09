export class ReportOptionsResponse {
  private _id: string;
  private _examineeId: string;
  private _reportId: string;
  private _response: string;

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get examineeId(): string {
    return this._examineeId;
  }

  set examineeId(value: string) {
    this._examineeId = value;
  }

  get reportId(): string {
    return this._reportId;
  }

  set reportId(value: string) {
    this._reportId = value;
  }

  get response(): string {
    return this._response;
  }

  set response(value: string) {
    this._response = value;
  }
}
