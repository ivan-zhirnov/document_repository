import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {ApiService} from "../api.service";
import {HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private apiService: ApiService) { }

  getFiles(): Observable<any> {
    return this.apiService.get("/files");
  }

  saveFile(file: File, classificationId: number, languageId: number): Observable<any> {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("classificationId", classificationId.toString());
    formData.append("languageId", languageId.toString());
    return this.apiService.post("files", formData);
  }

  updateFile(file: File, classificationId: number, languageId: number): Observable<any> {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("classificationId", classificationId.toString());
    formData.append("languageId", languageId.toString());
    return this.apiService.patch("files", formData);
  }

  updateFileName(documentId: number, fileName: string) {
    const formData = new FormData();
    formData.append("documentId", documentId.toString());
    formData.append("fileName", fileName);
    const headers = new HttpHeaders({'enctype': 'multipart/form-data'});
    return this.apiService.patch("files/update-name", formData, {headers: headers});
  }

  getFile(documentId: number): Observable<any> {
    return this.apiService.get(`files/${documentId}`);
  }

  deleteFile(documentId: number): Observable<any> {
    return this.apiService.delete(`files/${documentId}`);
  }

  getFilesByClassification(classificationId: number): Observable<any> {
    let httpParams = new HttpParams();
    httpParams.append("classificationId", classificationId);
    return this.apiService.get("files", {params: httpParams});
  }

  getFilesByName(name: number): Observable<any> {
    let httpParams = new HttpParams();
    httpParams.append("name", name);
    return this.apiService.get("files", {params: httpParams});
  }

  getFreeLanguages(documentId: number): Observable<any> {
    let httpParams = new HttpParams();
    httpParams.append("documentId", documentId);
    return this.apiService.get(`files/free-languages/${documentId}`);
  }

  getFileByLanguage(documentId: number, languageId: number): Observable<any> {
    let httpParams = new HttpParams();
    httpParams.append("documentId", documentId);
    httpParams.append("languageId", languageId);
    return this.apiService.get("files", {params: httpParams});
  }

  deleteFileByLanguage(documentId: number, languageId: number): Observable<any> {
    let httpParams = new HttpParams();
    httpParams.append("documentId", documentId);
    httpParams.append("languageId", languageId);
    return this.apiService.delete("files", {params: httpParams});
  }

}