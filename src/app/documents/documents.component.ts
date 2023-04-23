import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css', 'popup.scss']
})
export class DocumentsComponent implements OnInit, AfterViewInit {
  popupWindowUploadFile!: Element | null;
  popupWindowDownloadFile!: Element | null;
  popupWindowUpdate!: Element | null;
  popupWindowDelete!: Element | null;
  popupWindowAvailTranslateWindow!: Element | null;
  popupWindowUnavailableTranslateWindow!: Element | null;

  popupWindowCloseBtns!: NodeListOf<Element>;
  popupWindowCancelBtns!: NodeListOf<Element>;
  popupAddLangBtn!: Element | null;

  popupWindowUploadFileConfirmBtn!: Element | null;

  uploadFileBtn!: Element | null;
  downloadFileBtns!: NodeListOf<Element>;
  deleteFileBtns!: NodeListOf<Element>;
  updateFileBtns!: NodeListOf<Element>;


  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.popupWindowUploadFile = document.querySelector("#upload-popup");
    this.popupWindowDownloadFile = document.querySelector("#download-popup");
    this.popupWindowUpdate = document.querySelector("#update-popup");
    this.popupWindowDelete = document.querySelector("#delete-popup");
    this.popupWindowAvailTranslateWindow = document.querySelector("#translate-available-popup");
    this.popupWindowUnavailableTranslateWindow = document.querySelector(
      "#translate-unavailable-popup",
    );

    this.popupWindowCloseBtns = document.querySelectorAll(".popup__close-btn");
    this.popupWindowCancelBtns = document.querySelectorAll(".popup__cancel-btn");
    this.popupAddLangBtn = document.querySelector(".popup__add-lang-btn");

    this.popupWindowUploadFileConfirmBtn = this.popupWindowUploadFile!.querySelector(".popup__confirm-btn");

    this.uploadFileBtn = document.querySelector(".content-menu-btn-file");
    this.downloadFileBtns = document.querySelectorAll(".file-item-menu__download-btn");
    this.deleteFileBtns = document.querySelectorAll(".file-item-menu__delete-btn");
    this.updateFileBtns = document.querySelectorAll(".file-item-menu__update-btn");

    this.uploadFileBtn!.addEventListener("click", (e) => {
      this.openPopupWindow(this.popupWindowUploadFile);
    });

    this.popupWindowCloseBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        let target = e.target as HTMLElement
        this.closePopupWindow(target.closest(".popup-window"));
      });
    });

    this.downloadFileBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        this.openPopupWindow(this.popupWindowDownloadFile);
      });
    });

    this.popupWindowUploadFileConfirmBtn!.addEventListener("click", () => {
      this.closePopupWindow(this.popupWindowUploadFile);
      this.openPopupWindow(this.popupWindowUpdate);
    });

    this.popupWindowCancelBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        let target = e.target as HTMLElement
        this.closePopupWindow(target.closest(".popup-window"));
      });
    });

    this.deleteFileBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        this.openPopupWindow(this.popupWindowDelete);
      });
    });

    this.updateFileBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        this.openPopupWindow(this.popupWindowAvailTranslateWindow);
      });
    });

    this.popupAddLangBtn!.addEventListener("click", () => {
      this.openPopupWindow(this.popupWindowUnavailableTranslateWindow);
      this.closePopupWindow(this.popupWindowAvailTranslateWindow);
    });

    /*Dropdown Menu*/
    $(".dropdown").click(function () {
      $(this).attr("tabindex", 1).focus();
      $(this).toggleClass("active");
      $(this).find(".dropdown-menu").slideToggle(300);
    });
    $(".dropdown").focusout(function () {
      $(this).removeClass("active");
      $(this).find(".dropdown-menu").slideUp(300);
    });
    $(".dropdown .dropdown-menu li").click(function () {
      $(this).parents(".dropdown").find("span").text($(this).text());
      $(this).parents(".dropdown").find("input").attr("value", $(this).attr("id") as string);
    });
  }

  closePopupWindow(popupSelector: Element | null) {
    popupSelector!.classList.add("popup-window--hidden");
  }

  openPopupWindow(popupSelector: any) {
    popupSelector.classList.remove("popup-window--hidden");
    window.addEventListener("click", (e) => {
      this.closePopupWindowClick(e, popupSelector);
    });
    window.addEventListener("keydown", (e) => {
      this.closePopupWindowByEsc(e, popupSelector);
    });
  }

  closePopupWindowClick(e: any, popupWindow: any) {
    if (e.target == popupWindow) {
      this.closePopupWindow(popupWindow);
    }
  }

  closePopupWindowByEsc(e: any, popupWindow: any) {
    if (e.key === "Escape") {
      this.closePopupWindow(popupWindow);
    }
  }

}
