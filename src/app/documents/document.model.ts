import {Classification} from "../classifications/classification.model";
import {Language} from "./language.model";

export class Document {
  entityId: number | undefined;
  extension: string | undefined;
  fullName: string | undefined;
  name: string | undefined;
  classification: Classification | undefined;
  language: Language | undefined;
  downloads: number | undefined;

  constructor(params: any) {
    if (!params) return;
    this.entityId = params.document.entityId;
    this.extension = params.document.extension;
    this.fullName = params.document.fullName;
    this.name = params.document.name;
    this.downloads = params.downloads;
    this.classification = new Classification(params.document.classification);
    this.language = new Language(params.resources[0].language);
  }
}
